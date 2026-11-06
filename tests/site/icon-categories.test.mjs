import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import {
  parseIconCategories,
  categorizeIcons,
  validateCategoryIcons,
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

test('new variants and renames use current names without an assignment sync or alias matches', () => {
  const config = parseIconCategories({ categories: [files] });
  assert.deepEqual(
    categorizeIcons(
      [
        { name: 'file' },
        { name: 'file-new-filled' },
        { name: 'mail', aliases: ['file'] },
      ],
      config,
    ).icons.map((icon) => icon.categories),
    [['files'], ['files'], ['uncategorized']],
  );
});

test('empty rules and unmatched inventories are valid and remain discoverable', () => {
  for (const categories of [
    [],
    [{ ...files, keywords: [] }],
    [{ ...files, keywords: ['future-icon'] }],
  ]) {
    const config = parseIconCategories({ categories });
    validateCategoryIcons(config, [{ name: 'anchor' }]);
    const result = categorizeIcons([{ name: 'anchor' }], config);
    assert.deepEqual(result.icons[0].categories, ['uncategorized']);
    assert.deepEqual(result.categories, [...categories, uncategorized]);
    assert.deepEqual(categorizeIcons([], config).categories, categories);
  }
});

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

test('the current category rules preserve renamed icon families and exact-name memberships', async () => {
  const config = parseIconCategories(
    JSON.parse(
      await readFile(
        new URL('../../apps/site/public/icon-categories.json', import.meta.url),
        'utf8',
      ),
    ),
  );
  const expected = {
    bucket: ['design'],
    swatches: ['design'],
    'swatches-simple': ['design'],
    edit: ['design'],
    'edit-solid': ['design'],
    'text-markup': ['code'],
    'line-wrap': ['arrows', 'layout-interface'],
    'rich-text': ['files'],
    'square-command': ['shapes-symbols', 'system'],
    plugs: ['devices'],
    'plugs-plugged': ['devices'],
    'plugs-unplug': ['devices'],
    'check-thick-xs': ['shapes-symbols', 'status-feedback'],
    'check-thick-sm': ['shapes-symbols', 'status-feedback'],
    'letter-m': ['code'],
    'letter-r': ['code'],
    'letter-a': ['code'],
    'folder-tree': ['code', 'files'],
    'folder-tree-fill': ['code', 'files'],
    'line-overflow': ['layout-interface'],
  };
  const { icons } = categorizeIcons(
    Object.keys(expected).map((name) => ({ name })),
    config,
  );
  for (const icon of icons)
    assert.deepEqual(icon.categories, expected[icon.name], icon.name);
});
