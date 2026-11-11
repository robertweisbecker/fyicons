import test from 'node:test';
import assert from 'node:assert/strict';
import {
  parseIconCategories,
  validateCategoryIcons,
} from '../../apps/site/src/lib/icon-categories.ts';

const files = {
  id: 'files',
  name: 'Files',
  icon: 'grid',
  keywords: ['file', 'folder'],
};

test('unknown sidebar icons are caught by source validation', () => {
  const config = parseIconCategories({
    categories: [{ ...files, icon: 'missing' }],
  });
  assert.throws(
    () => validateCategoryIcons(config, [{ name: 'anchor' }]),
    /Unknown sidebar icon for Files: missing/,
  );
});

test('invalid rules and legacy assignment maps are rejected', () => {
  for (const value of [
    { categories: [files, files] },
    { categories: [{ ...files, id: 'uncategorized' }] },
    { categories: [{ ...files, keywords: 'file' }] },
    { categories: [{ ...files, keywords: ['file*'] }] },
    { categories: [{ ...files, keywords: ['arrow-up', 'arrow_up'] }] },
    { categories: [{ ...files, exactNames: ['box', 'BOX'] }] },
    { categories: [files], icons: { anchor: ['files'] } },
  ])
    assert.throws(() => parseIconCategories(value), JSON.stringify(value));
});
