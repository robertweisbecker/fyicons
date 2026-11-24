import test from 'node:test';
import assert from 'node:assert/strict';
import { mkdtemp, readFile, rm } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { pathToFileURL } from 'node:url';
import { createHash } from 'node:crypto';
import { unzipSync, strFromU8 } from 'fflate';
import {
  categorizeIcons,
  parseIconCategories,
} from '../../apps/site/src/lib/icon-categories.ts';
import { createIconArchive } from '../../apps/site/src/lib/icon-archive.ts';
import { decodeCatalog } from '../../apps/site/src/lib/catalog-codec.ts';
import { buildSiteArchive } from '../../scripts/build-site-archive.mjs';

const generated = decodeCatalog(
  JSON.parse(
    await readFile(
      new URL('../../apps/site/src/data/catalog-runtime.json', import.meta.url),
      'utf8',
    ),
  ),
);
for (const icon of generated.icons)
  icon.svg = await readFile(
    new URL(`../../packages/fyicons/svg/${icon.filename}`, import.meta.url),
    'utf8',
  );

const assignments = parseIconCategories(
  JSON.parse(
    await readFile(
      new URL('../../apps/site/public/icon-categories.json', import.meta.url),
      'utf8',
    ),
  ),
);
const catalog = {
  ...generated,
  ...categorizeIcons(generated.icons, assignments),
};
const readme = await readFile(
  new URL('../../apps/site/src/data/README.txt', import.meta.url),
  'utf8',
);
const metadata = {
  ...catalog,
  icons: catalog.icons.map(({ svg, ...record }) => record),
};
const license = await readFile(
  new URL('../../LICENSE', import.meta.url),
  'utf8',
);

function verifyArchive(
  selection,
  bytes = createIconArchive(selection, metadata, readme, license),
) {
  const archive = unzipSync(bytes);
  assert.deepEqual(
    Object.keys(archive).sort(),
    [
      ...selection.map((icon) => icon.file),
      'manifest.json',
      'README.md',
      'LICENSE',
    ].sort(),
  );
  for (const icon of selection) {
    assert.equal(strFromU8(archive[icon.file]), icon.svg);
    assert.equal(
      createHash('sha256').update(archive[icon.file]).digest('hex'),
      icon.sha256,
    );
  }
  const exported = JSON.parse(strFromU8(archive['manifest.json']));
  assert.doesNotMatch(
    JSON.stringify(exported),
    /"(?:sourceUrl|fileKey)"|figma\.com\/(?:design|file)\//,
  );
  assert.deepEqual(exported.categories, catalog.categories);
  assert.equal(exported.count, selection.length);
  assert.equal(exported.native16Count, selection.length);
  assert.deepEqual(
    exported.icons,
    selection.map(({ svg, ...record }) => record),
  );
  assert.equal(strFromU8(archive['README.md']), readme);
  assert.equal(strFromU8(archive['LICENSE']), license);
  return exported;
}

test('full ZIP preserves every classed SVG export, checksum, and component metadata', () => {
  verifyArchive(catalog.icons);
});

test('prebuilt full ZIP preserves the same files, metadata, and checksums', async (t) => {
  const directory = await mkdtemp(join(tmpdir(), 'fyicons-site-archive-'));
  t.after(() => rm(directory, { recursive: true, force: true }));
  const output = pathToFileURL(join(directory, 'downloads', 'fyicons.zip'));
  const result = await buildSiteArchive(output);
  const bytes = await readFile(output);
  assert.equal(result.count, catalog.icons.length);
  assert.equal(result.bytes, bytes.byteLength);
  verifyArchive(catalog.icons, bytes);
  for (let index = 0; index < catalog.icons.length; index += 24) {
    await Promise.all(
      catalog.icons.slice(index, index + 24).map(async (icon) => {
        const source = await readFile(
          new URL(`../icon-sources/${icon.sha256}.svg`, output),
        );
        assert.equal(source.toString('utf8'), icon.svg);
        assert.equal(
          createHash('sha256').update(source).digest('hex'),
          icon.sha256,
        );
      }),
    );
  }
});

test('selected ZIP includes only selected variants and filters duplicate metadata', () => {
  const variant = catalog.icons.find((icon) => icon.variantSetId);
  assert.ok(variant, 'catalog contains component-set variants');
  const selection = catalog.icons.filter(
    (icon) => icon.variantSetId === variant.variantSetId,
  );
  assert.ok(selection.length > 1);
  const exported = verifyArchive(selection);
  const selectedIds = new Set(selection.map((icon) => icon.id));
  for (const entries of Object.values(exported.duplicateGroups)) {
    assert.ok(entries.every((icon) => selectedIds.has(icon.id)));
  }
  assert.ok(Object.values(exported.duplicateGroups).flat().length > 0);
});
