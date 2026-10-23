import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import {
  parseIconCategories,
  categorizeIcons,
  validateCategoryIcons,
  uncategorized,
} from '../apps/site/src/lib/icon-categories.ts';

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
        new URL('../apps/site/public/icon-categories.json', import.meta.url),
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
      'box-storage',
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

test('library category rules keep the requested icon families together without loose matches', async () => {
  const config = parseIconCategories(
    JSON.parse(
      await readFile(
        new URL('../apps/site/public/icon-categories.json', import.meta.url),
        'utf8',
      ),
    ),
  );
  const { icons } = JSON.parse(
    await readFile(new URL('../icons/manifest.json', import.meta.url), 'utf8'),
  );
  const categorized = categorizeIcons(icons, config).icons;
  const memberships = new Map(
    categorized.map((icon) => [icon.name, icon.categories]),
  );
  const includes = (name, category) =>
    assert.ok(
      memberships.get(name)?.includes(category),
      `${name} should be in ${category}`,
    );
  const excludes = (name, category) => {
    assert.ok(memberships.has(name), `Unknown icon ${name}`);
    assert.ok(
      !memberships.get(name).includes(category),
      `${name} should not be in ${category}`,
    );
  };
  for (const name of [
    'box',
    'box-shipping',
    'cost-low',
    'cost-medium',
    'cost-high',
    'dollar-sign',
  ])
    includes(name, 'commerce');
  for (const name of [
    'bounding-box',
    'text-box',
    'text-box-heading',
    'box-storage',
  ])
    excludes(name, 'commerce');
  for (const name of [
    'map',
    'map-pin',
    'map-pin-fill',
    'map-marker',
    'map-marker-round',
    'luggage',
    'luggage-rolling',
    'suitcase',
  ])
    includes(name, 'travel');
  for (const name of [
    'pin',
    'pin-fill',
    'pin-vertical',
    'pin-vertical-fill',
    'layout-pin',
    'layout-pinned',
    'clock',
    'calendar',
  ])
    excludes(name, 'travel');
  for (const name of [
    'image-add',
    'folder-add',
    'folder-check',
    'cowboy-hat',
    'top-hat',
  ])
    excludes(name, 'people-identity');
  includes('graduation-cap', 'accessories');
  excludes('graduation-cap', 'files');
  for (const name of ['hat', 'hat-side', 'cowboy-hat', 'top-hat']) {
    includes(name, 'accessories');
    excludes(name, 'objects');
    excludes(name, 'system');
  }
  for (const icon of icons.filter(({ name }) =>
    /^(picture-in-picture|seek(?:-|$)|(?:video-)?camera)/.test(name),
  ))
    includes(icon.name, 'media');
  for (const name of [
    'beaker',
    'atom',
    'atom-simple',
    'atom-spiral',
    'atom-react',
    'planet',
    'rocket',
    'sun',
    'moon',
  ])
    includes(name, 'science');
  for (const name of [
    'phone',
    'printer',
    'computer',
    'keyboard',
    'plug',
    'projector-screen',
    'presentation',
    'switches',
    'switch-off',
    'switch-on',
  ])
    includes(name, 'devices');
  for (const icon of icons.filter(({ name }) =>
    name.split('-').includes('quotes'),
  )) {
    includes(icon.name, 'typography');
    excludes(icon.name, 'communication');
  }
  for (const name of ['text', 'text-box', 'font', 'line-height'])
    includes(name, 'typography');
  for (const name of ['pencil', 'brush-tip', 'eyedropper', 'eraser']) {
    includes(name, 'design');
    excludes(name, 'typography');
  }
  for (const name of ['row-expand', 'checklist']) {
    includes(name, 'layout-interface');
    excludes(name, 'typography');
  }
  includes('scissors', 'objects');
  excludes('scissors', 'typography');
  assert.equal(
    config.categories.find(({ id }) => id === 'files').name,
    'Files',
  );
});

test('category boundaries follow icon meaning rather than generic name fragments', async () => {
  const config = parseIconCategories(
    JSON.parse(
      await readFile(
        new URL('../apps/site/public/icon-categories.json', import.meta.url),
        'utf8',
      ),
    ),
  );
  const { icons } = JSON.parse(
    await readFile(new URL('../icons/manifest.json', import.meta.url), 'utf8'),
  );
  const result = categorizeIcons(icons, config);
  // Families include their filled, slashed, and named variants.
  const families = [
    [
      /^(loader|spinner|history)$|^arrow-revert-history$/,
      ['time'],
      ['status-feedback'],
    ],
    [/^scroll(?:-|$)/, ['files', 'objects'], ['system']],
    [/^credit-card$/, ['commerce'], ['layout-interface']],
    [/^card-open$/, ['objects'], ['layout-interface']],
    [/^browser(?:-|$)/, ['devices'], ['layout-interface', 'shapes-symbols']],
    [
      /^(frame|bounding-box|border|layers)(?:-|$)/,
      ['design'],
      ['layout-interface'],
    ],
    [/^home(?:-|$)/, ['travel', 'navigation-actions'], ['layout-interface']],
    [
      /^(hand|pointer|pointers|selection)(?:-|$)/,
      ['system'],
      ['layout-interface', 'people-identity'],
    ],
    [
      /^ellipsis(?:-|$)/,
      ['typography', 'navigation-actions'],
      ['layout-interface'],
    ],
    [/^kbd-/, ['system', 'shapes-symbols'], ['devices']],
    [/^microchip$/, ['objects'], ['devices']],
    [/^crown(?:-|$)/, ['objects'], ['status-feedback']],
    [
      /^wand(?:-|$)/,
      ['ai', 'objects'],
      config.categories
        .map((c) => c.id)
        .filter((id) => !['ai', 'objects'].includes(id)),
    ],
    [/^input(?:-|$)/, ['design', 'security'], ['layout-interface']],
    [/^chart-/, ['science'], ['development-data']],
    [/^(language|translate)$/, ['travel'], []],
    [/^postage-/, ['commerce'], []],
    [/^(emoji|skull|ghost)(?:-|$)/, ['emoji'], ['objects', 'people-identity']],
    [
      /^(hat|cowboy-hat|top-hat|graduation-cap)(?:-|$)/,
      ['accessories'],
      ['objects'],
    ],
    [
      /^(circle-(play|pause|stop|record)|arrows-(repeat|shuffle))(?:-|$)/,
      ['media'],
      ['status-feedback', 'shapes-symbols'],
    ],
    [
      /^(chat|file|folder|clipboard|cloud|duplicate)-(check|plus)(?:-|$)/,
      [],
      ['status-feedback'],
    ],
    [
      /^(camera-square|article-square|code-(square|block)|terminal-square|footer-square|header-square|text-block|videos-square|plug-at-sign|file-minus)(?:-|$)/,
      [],
      ['shapes-symbols'],
    ],
    [/^(circle-(access|no-entry|null)|slash)(?:-|$)/, ['shapes-symbols'], []],
    [
      /^(point-(up|down))$/,
      ['arrows', 'navigation-actions'],
      ['development-data'],
    ],
    [
      /^square-rotate$/,
      ['design', 'navigation-actions'],
      ['development-data', 'shapes-symbols'],
    ],
    [/^(database|memory|merge)(?:-|$)/, ['development-data'], []],
    [/^(page|sheet|collection|article)(?:-|$)/, ['files'], []],
    [/^easel$/, ['design', 'objects'], []],
    [/^link-linked$/, ['navigation-actions'], []],
    [/^purse$/, ['accessories', 'commerce'], []],
    [/^trophy$/, ['objects', 'status-feedback'], []],
  ];
  for (const [pattern, included, excluded] of families) {
    const matching = result.icons.filter((icon) => pattern.test(icon.name));
    assert.ok(matching.length, `No icons found for ${pattern}`);
    for (const icon of matching) {
      for (const id of included)
        assert.ok(
          icon.categories.includes(id),
          `${icon.name} should be in ${id}`,
        );
      for (const id of excluded)
        assert.ok(
          !icon.categories.includes(id),
          `${icon.name} should not be in ${id}`,
        );
    }
  }
  assert.deepEqual(
    result.icons
      .filter((icon) => icon.categories.includes('uncategorized'))
      .map((icon) => icon.name),
    [],
  );
  assert.ok(
    !result.categories.some((category) => category.id === 'uncategorized'),
  );
});

test('filled and slashed variants stay with their unmodified counterparts', async () => {
  const config = parseIconCategories(
    JSON.parse(
      await readFile(
        new URL('../apps/site/public/icon-categories.json', import.meta.url),
        'utf8',
      ),
    ),
  );
  const { icons } = JSON.parse(
    await readFile(new URL('../icons/manifest.json', import.meta.url), 'utf8'),
  );
  const categorized = categorizeIcons(icons, config).icons;
  const byName = new Map(categorized.map((icon) => [icon.name, icon]));
  const variants = categorized.filter((icon) =>
    /-(fill|slash)(?:-|$)/.test(icon.name),
  );
  let compared = 0;
  for (const icon of variants) {
    const base = byName.get(icon.name.replace(/-(fill|slash)(?=-|$)/g, ''));
    if (!base) continue;
    compared++;
    assert.deepEqual(
      icon.categories,
      base.categories,
      `${icon.name} should stay with ${base.name}`,
    );
  }
  assert.ok(compared > 100, 'Check variants across the full catalog');
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
    ...[
      null,
      'box',
      [null],
      [''],
      ['box*'],
      ['box', 'BOX'],
      ['box-shipping', 'BOX_SHIPPING'],
    ].map((exactNames) => ({ categories: [{ ...files, exactNames }] })),
    { categories: [files], icons: { anchor: ['files'] } },
  ])
    assert.throws(() => parseIconCategories(value), JSON.stringify(value));
});
