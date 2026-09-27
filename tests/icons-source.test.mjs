import test from 'node:test';
import assert from 'node:assert/strict';
import { createHash } from 'node:crypto';
import { readFile, readdir } from 'node:fs/promises';
import { mkdtemp, mkdir, symlink, writeFile, cp, rm } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import path from 'node:path';
import { execFile } from 'node:child_process';
import { promisify } from 'node:util';

const manifest = JSON.parse(
  await readFile(new URL('../icons/manifest.json', import.meta.url), 'utf8'),
);
const catalog = JSON.parse(
  await readFile(new URL('../src/data/catalog.json', import.meta.url), 'utf8'),
);
test('editable SVG sources exactly cover the manifest', async () => {
  const files = (await readdir(new URL('../icons/', import.meta.url)))
    .filter((file) => file.endsWith('.svg'))
    .sort();
  const expected = manifest.icons.map((icon) => icon.filename).sort();
  assert.deepEqual(files, expected);
  assert.ok(manifest.icons.length > 0);
  assert.equal(
    new Set(manifest.icons.map(({ id }) => id)).size,
    manifest.icons.length,
  );
  assert.equal(new Set(expected).size, manifest.icons.length);
});

test('stable component names and Figma aliases are present', async () => {
  for (const icon of manifest.icons) {
    assert.match(icon.componentName, /^Icon[A-Za-z0-9]+$/);
    const svg = await readFile(
      new URL(`../icons/${icon.filename}`, import.meta.url),
      'utf8',
    );
    assert.match(svg, /^<svg\b/);
  }
  assert.equal(
    manifest.icons.find(({ id }) => id === '510:4785').componentName,
    'Icon16Upload',
  );
  const repeated = manifest.icons.filter(
    ({ baseName }) => baseName === 'scissors',
  );
  assert.equal(repeated.length, 5);
  assert.ok(repeated.every((icon) => /^scissors-\d+$/.test(icon.name)));
  assert.ok(repeated.every((icon) => icon.aliases.length > 0));
});

test('current SVG bytes are used for generated checksums', async () => {
  assert.equal(catalog.icons.length, manifest.icons.length);
  for (const icon of manifest.icons) {
    const generated = catalog.icons.find(({ id }) => id === icon.id);
    const svg = await readFile(
      new URL(`../icons/${icon.filename}`, import.meta.url),
    );
    assert.ok(generated, `missing catalog record ${icon.id}`);
    assert.equal(
      generated.svg,
      svg.toString(),
      `${icon.filename} bytes differ in catalog`,
    );
    assert.equal(
      generated.sha256,
      createHash('sha256').update(svg).digest('hex'),
      `${icon.filename} hash is stale`,
    );
    assert.equal(
      'sha256' in icon,
      false,
      'source metadata must not retain a derived checksum',
    );
  }
});

test('replacing a source regenerates its component and derived catalog hash', async () => {
  const temp = await mkdtemp(path.join(tmpdir(), 'fyicons-generation-'));
  const run = promisify(execFile);
  try {
    await mkdir(path.join(temp, 'scripts/lib'), { recursive: true });
    await mkdir(path.join(temp, 'icons'), { recursive: true });
    await cp(
      new URL('../scripts/generate-icons.mjs', import.meta.url),
      path.join(temp, 'scripts/generate-icons.mjs'),
    );
    await cp(
      new URL('../scripts/lib/react-icons.mjs', import.meta.url),
      path.join(temp, 'scripts/lib/react-icons.mjs'),
    );
    await symlink(
      path.resolve('node_modules'),
      path.join(temp, 'node_modules'),
      'dir',
    );
    const firstSvg =
      '<svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path d="M1 1"/></svg>\n';
    const record = {
      id: 'test:1',
      name: '16-upload',
      baseName: '16-upload',
      filename: '16-upload-16.svg',
      componentName: 'Icon16Upload',
      category: 'Files',
      width: 16,
      height: 16,
      aliases: [],
    };
    await writeFile(
      path.join(temp, 'icons/manifest.json'),
      JSON.stringify({
        name: 'FYIcons',
        categories: ['Files'],
        icons: [record],
      }),
    );
    await writeFile(path.join(temp, 'icons', record.filename), firstSvg);
    await run(process.execPath, ['scripts/generate-icons.mjs'], { cwd: temp });
    const firstCatalog = JSON.parse(
      await readFile(path.join(temp, 'src/data/catalog.json'), 'utf8'),
    );
    const firstComponent = await readFile(
      path.join(temp, 'src/icons/Icon16Upload.tsx'),
      'utf8',
    );
    const replacement = firstSvg.replace('M1 1', 'M2 2');
    await writeFile(path.join(temp, 'icons', record.filename), replacement);
    await assert.rejects(
      run(process.execPath, ['scripts/generate-icons.mjs', '--check'], {
        cwd: temp,
      }),
    );
    assert.equal(
      await readFile(path.join(temp, 'src/data/catalog.json'), 'utf8'),
      JSON.stringify(firstCatalog, null, 2) + '\n',
    );
    await run(process.execPath, ['scripts/generate-icons.mjs'], { cwd: temp });
    const nextCatalog = JSON.parse(
      await readFile(path.join(temp, 'src/data/catalog.json'), 'utf8'),
    );
    const nextComponent = await readFile(
      path.join(temp, 'src/icons/Icon16Upload.tsx'),
      'utf8',
    );
    assert.notEqual(nextCatalog.icons[0].sha256, firstCatalog.icons[0].sha256);
    assert.notEqual(nextComponent, firstComponent);
  } finally {
    await rm(temp, { recursive: true, force: true });
  }
});
