import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { createHash } from 'node:crypto';
import { unzipSync, strFromU8 } from 'fflate';
import {
  categorizeIcons,
  parseIconCategories,
} from '../../apps/site/src/lib/icon-categories.ts';
import { createIconArchive } from '../../apps/site/src/lib/icon-archive.ts';

const generated = JSON.parse(
  await readFile(
    new URL('../../apps/site/src/data/catalog.json', import.meta.url),
    'utf8',
  ),
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

function verifyArchive(selection) {
  const archive = unzipSync(
    createIconArchive(selection, metadata, readme, license),
  );
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

test('full ZIP preserves every original SVG, checksum, and component metadata', async () => {
  verifyArchive(catalog.icons);
  for (const icon of catalog.icons) {
    assert.equal(
      icon.svg,
      await readFile(new URL(`../../${icon.file}`, import.meta.url), 'utf8'),
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
