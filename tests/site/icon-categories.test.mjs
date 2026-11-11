import test from 'node:test';
import assert from 'node:assert/strict';
import {
  parseIconCategories,
  categorizeIcons,
  uncategorized,
} from '../../apps/site/src/lib/icon-categories.ts';

const files = {
  id: 'files',
  name: 'Files',
  icon: 'grid',
  keywords: ['file', 'folder'],
};
const actions = {
  id: 'actions',
  name: 'Actions',
  icon: 'anchor',
  keywords: ['file', 'arrow-up'],
};

test('keywords match any complete consecutive name segments, ignoring case and separators', () => {
  const config = parseIconCategories({ categories: [files, actions] });
  const names = [
    'file',
    'file-add',
    'profile',
    'folder-open-fill',
    'circle-arrow-up-fill',
    'arrow-right-up',
    'ARROW_UP',
    'arrow upward',
    'mail-file-copy',
    'files',
    'xfile',
  ];
  const result = categorizeIcons(
    names.map((name) => ({ name })),
    config,
  );
  assert.deepEqual(
    result.icons.map((icon) => icon.categories),
    [
      ['files', 'actions'],
      ['files', 'actions'],
      ['uncategorized'],
      ['files'],
      ['actions'],
      ['uncategorized'],
      ['actions'],
      ['uncategorized'],
      ['files', 'actions'],
      ['uncategorized'],
      ['uncategorized'],
    ],
  );
  assert.deepEqual(result.categories, [files, actions, uncategorized]);
});

test('overlapping keywords assign each category once and each icon remains one record', () => {
  const config = parseIconCategories({
    categories: [{ ...files, keywords: ['file', 'file-check'] }, actions],
  });
  const input = [{ id: 'one', name: 'file-check' }];
  const before = structuredClone({ input, config });
  const result = categorizeIcons(input, config);
  assert.deepEqual(result.icons, [
    { id: 'one', name: 'file-check', categories: ['files', 'actions'] },
  ]);
  assert.deepEqual({ input, config }, before);
  assert.deepEqual(result.categories, config.categories);
});

test('exact names match only whole names and combine with keyword memberships', () => {
  const config = parseIconCategories({
    categories: [
      { ...files, keywords: ['cost'], exactNames: ['box', 'Box Shipping'] },
      { ...actions, keywords: ['box'] },
    ],
  });
  const result = categorizeIcons(
    [
      'box',
      'BOX_SHIPPING',
      'bounding-box',
      'text-box-heading',
      'box-face',
      'cost-high',
      'box-shipping-fill',
    ].map((name) => ({ name })),
    config,
  );
  assert.deepEqual(
    result.icons.map((icon) => icon.categories),
    [
      ['files', 'actions'],
      ['files', 'actions'],
      ['actions'],
      ['actions'],
      ['actions'],
      ['files'],
      ['actions'],
    ],
  );
});

test('empty rules and unmatched inventories are valid and remain discoverable', () => {
  for (const categories of [
    [],
    [{ ...files, keywords: [] }],
    [{ ...files, keywords: ['future-icon'] }],
  ]) {
    const config = parseIconCategories({ categories });
    const result = categorizeIcons([{ name: 'anchor' }], config);
    assert.deepEqual(result.icons[0].categories, ['uncategorized']);
    assert.deepEqual(result.categories, [...categories, uncategorized]);
    assert.deepEqual(categorizeIcons([], config).categories, categories);
  }
});
