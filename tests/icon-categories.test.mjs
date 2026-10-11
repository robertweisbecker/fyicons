import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import {
  parseIconCategories,
  categorizeIcons,
  validateCategoryIcons,
  uncategorized,
} from '../src/lib/icon-categories.ts';

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

test('editable rules validate independently of generated artwork metadata', async () => {
  const config = parseIconCategories(
    JSON.parse(
      await readFile(
        new URL('../public/icon-categories.json', import.meta.url),
        'utf8',
      ),
    ),
  );
  const manifest = JSON.parse(
    await readFile(new URL('../icons/manifest.json', import.meta.url), 'utf8'),
  );
  validateCategoryIcons(config, manifest.icons);
  assert.ok(!('icons' in config));
  assert.ok(!('categories' in manifest));
  assert.ok(
    manifest.icons.every(
      (icon) => !('category' in icon) && !('categories' in icon),
    ),
  );
  assert.equal(
    categorizeIcons(manifest.icons, config).icons.length,
    manifest.icons.length,
  );
});

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

test('changing rules, labels, sidebar icons, and ordering takes effect immediately', () => {
  const config = parseIconCategories({ categories: [files, actions] });
  const input = [{ name: 'anchor' }];
  assert.deepEqual(categorizeIcons(input, config).icons[0].categories, [
    'uncategorized',
  ]);
  const updated = parseIconCategories({
    categories: [
      { ...actions, name: 'Tools', icon: 'grid', keywords: ['anchor'] },
      { ...files, keywords: ['anchor'] },
    ],
  });
  const result = categorizeIcons(input, updated);
  assert.deepEqual(result.icons[0].categories, ['actions', 'files']);
  assert.deepEqual(result.categories, updated.categories);
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
    null,
    [],
    {},
    { categories: ['Files'] },
    { categories: [files, files] },
    { categories: [files, { ...actions, name: 'Files' }] },
    ...['all', 'uncategorized', 'bad id'].map((id) => ({
      categories: [{ ...files, id }],
    })),
    { categories: [{ ...files, icon: '' }] },
    { categories: [{ ...files, name: ' ' }] },
    { categories: [{ id: 'files', name: 'Files', icon: 'grid' }] },
    ...[
      'file',
      null,
      [null],
      [''],
      ['---'],
      ['file*'],
      ['file', 'FILE'],
      ['arrow-up', 'arrow_up'],
    ].map((keywords) => ({ categories: [{ ...files, keywords }] })),
    { categories: [{ ...files, include: ['anchor'] }] },
    { categories: [files], icons: { anchor: ['files'] } },
  ])
    assert.throws(() => parseIconCategories(value), JSON.stringify(value));
});
