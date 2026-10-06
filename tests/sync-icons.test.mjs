import test from 'node:test';
import assert from 'node:assert/strict';
import {
  mkdtemp,
  mkdir,
  writeFile,
  readFile,
  cp,
  symlink,
  rm,
} from 'node:fs/promises';
import { execFile } from 'node:child_process';
import { promisify } from 'node:util';
import { tmpdir } from 'node:os';
import path from 'node:path';

test('sync follows Figma IDs through name swaps and duplicates, preserving exact SVG bytes and previous aliases', async () => {
  const temp = await mkdtemp(path.join(tmpdir(), 'fyicons-sync-'));
  const run = promisify(execFile);
  const record = (id, name, filename = `${name}-16.svg`) => ({
    id,
    name,
    baseName: name,
    filename,
    componentName: `Icon${name[0].toUpperCase()}${name.slice(1)}`,
    category: 'Interface',
    width: 16,
    height: 16,
    aliases: [],
  });
  const first =
    '<svg width="16" height="16" viewBox="0 0 16 16"><path d="M1 1h2"/></svg>\n';
  const second = first.replace('M1 1h2', 'M2 2h3');
  const third = first.replace('M1 1h2', 'M3 3h4');
  try {
    await mkdir(path.join(temp, 'scripts/lib'), { recursive: true });
    await mkdir(path.join(temp, 'icons'));
    await mkdir(path.join(temp, 'incoming'));
    for (const name of [
      'sync-icons.mjs',
      'generate-icons.mjs',
      'lib/react-icons.mjs',
    ]) {
      await cp(
        new URL(`../scripts/${name}`, import.meta.url),
        path.join(temp, 'scripts', name),
      );
    }
    await symlink(
      path.resolve('node_modules'),
      path.join(temp, 'node_modules'),
      'dir',
    );
    await writeFile(
      path.join(temp, 'icons/manifest.json'),
      JSON.stringify({
        name: 'FYIcons',
        categories: ['Interface'],
        icons: [record('fixture:1', 'alpha'), record('fixture:2', 'beta')],
      }),
    );
    await writeFile(path.join(temp, 'icons/alpha-16.svg'), first);
    await writeFile(path.join(temp, 'icons/beta-16.svg'), second);
    await writeFile(
      path.join(temp, 'incoming/manifest.json'),
      JSON.stringify({
        name: 'FYIcons',
        categories: ['Interface'],
        icons: [
          record('fixture:1', 'beta', 'one.svg'),
          record('fixture:2', 'alpha', 'two.svg'),
          record('fixture:3', 'beta', 'three.svg'),
        ],
      }),
    );
    await writeFile(path.join(temp, 'incoming/one.svg'), first);
    await writeFile(path.join(temp, 'incoming/two.svg'), second);
    await writeFile(path.join(temp, 'incoming/three.svg'), third);
    await run(process.execPath, ['scripts/sync-icons.mjs', 'incoming'], {
      cwd: temp,
    });
    const next = JSON.parse(
      await readFile(path.join(temp, 'icons/manifest.json'), 'utf8'),
    );
    const byId = new Map(next.icons.map((icon) => [icon.id, icon]));
    assert.equal(byId.get('fixture:1').name, 'beta');
    assert.equal(byId.get('fixture:2').name, 'alpha');
    assert.equal(byId.get('fixture:3').name, 'beta-1');
    assert.equal(byId.get('fixture:1').componentName, 'IconBeta');
    assert.equal(byId.get('fixture:2').componentName, 'IconAlpha');
    assert.equal(byId.get('fixture:3').componentName, 'IconBeta1');
    assert.ok(byId.get('fixture:1').aliases.includes('alpha-16.svg'));
    assert.ok(byId.get('fixture:2').aliases.includes('beta-16.svg'));
    for (const [id, svg] of [
      ['fixture:1', first],
      ['fixture:2', second],
      ['fixture:3', third],
    ]) {
      assert.equal(
        await readFile(path.join(temp, 'icons', byId.get(id).filename), 'utf8'),
        svg,
      );
    }
    await run(process.execPath, ['scripts/generate-icons.mjs', '--check'], {
      cwd: temp,
    });
  } finally {
    await rm(temp, { recursive: true, force: true });
  }
});
