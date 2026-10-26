import test from 'node:test';
import { createHash } from 'node:crypto';
import assert from 'node:assert/strict';
import {
  mkdtemp,
  mkdir,
  writeFile,
  readFile,
  readdir,
  readlink,
  lstat,
  cp,
  rename,
  symlink,
  rm,
} from 'node:fs/promises';
import { execFile } from 'node:child_process';
import { promisify } from 'node:util';
import { tmpdir } from 'node:os';
import path from 'node:path';
import { decodeCatalog } from '../../apps/site/src/lib/catalog-codec.ts';
import { publishFiles } from '../../scripts/lib/icon-files.mjs';

const run = promisify(execFile);
const svg =
  '<svg width="16" height="16" viewBox="0 0 16 16"><path d="M1 1h2"/></svg>\n';
const record = (id, name) => ({
  id,
  name,
  baseName: name,
  filename: `${name}-16.svg`,
  componentName: `Icon${name}`,
  width: 16,
  height: 16,
  aliases: [],
});
const json = (file, value) =>
  writeFile(file, JSON.stringify(value, null, 2) + '\n');
async function fixture() {
  const directory = await mkdtemp(path.join(tmpdir(), 'fyicons-safe-import-'));
  const root = path.join(directory, 'repo');
  const incoming = path.join(directory, 'incoming');
  const outside = path.join(directory, 'outside');
  await mkdir(path.join(root, 'icons'), { recursive: true });
  await mkdir(path.join(root, 'apps/site/public'), { recursive: true });
  await mkdir(path.join(root, 'apps/site/src/lib'), { recursive: true });
  await mkdir(incoming);
  await mkdir(outside);
  await writeFile(path.join(outside, 'sentinel.svg'), svg);
  await cp(
    new URL('../../scripts/', import.meta.url),
    path.join(root, 'scripts'),
    { recursive: true },
  );
  await cp(
    new URL('../../apps/site/src/lib/icon-categories.ts', import.meta.url),
    path.join(root, 'apps/site/src/lib/icon-categories.ts'),
  );
  await symlink(
    path.resolve('node_modules'),
    path.join(root, 'node_modules'),
    'dir',
  );
  const current = {
    name: 'FYIcons',
    icons: [
      {
        ...record('fixture:1', 'Alpha'),
        componentName: 'IconALPHA',
        aliases: ['legacy-alpha'],
      },
      record('fixture:2', 'Beta'),
    ],
  };
  const categories = {
    categories: [
      {
        id: 'files',
        name: 'Files',
        icon: 'Alpha',
        keywords: ['alpha'],
        exactNames: ['Alpha'],
      },
    ],
  };
  await json(path.join(root, 'icons/manifest.json'), current);
  await json(
    path.join(root, 'apps/site/public/icon-categories.json'),
    categories,
  );
  await writeFile(path.join(root, 'icons/Alpha-16.svg'), svg);
  await writeFile(path.join(root, 'icons/Beta-16.svg'), svg);
  await run(process.execPath, ['scripts/generate-icons.mjs'], { cwd: root });
  await writeFile(
    path.join(root, 'packages/fyicons/src/sentinel.txt'),
    'retain unrelated generated-directory files\n',
  );
  const imported = {
    name: 'FYIcons',
    icons: [
      { ...record('fixture:1', 'alpha'), filename: 'one.svg' },
      { ...record('fixture:2', 'Beta'), filename: 'two.svg' },
    ],
  };
  await json(path.join(incoming, 'manifest.json'), imported);
  await writeFile(
    path.join(incoming, 'one.svg'),
    '\uFEFF' +
      svg
        .replace('M1 1', 'M3 3')
        .replace('<path ', '<path data-label="é ⚡" ')
        .replace(/\n/g, '\r\n'),
  );
  await writeFile(path.join(incoming, 'two.svg'), svg);
  return { directory, root, incoming, outside, imported, categories };
}
async function snapshot(directory) {
  const result = {};
  async function walk(folder, relative = '') {
    for (const name of (await readdir(folder)).sort()) {
      if (name === 'node_modules') continue;
      const file = path.join(folder, name);
      const key = path.posix.join(relative, name);
      const stat = await lstat(file);
      if (stat.isSymbolicLink())
        result[key] = `symlink:${await readlink(file)}`;
      else if (stat.isDirectory()) {
        result[`${key}/`] = 'directory';
        await walk(file, key);
      } else result[key] = (await readFile(file)).toString('base64');
    }
  }
  await walk(directory);
  return result;
}
const invalid = [
  [
    'private file key used as public identity',
    ({ imported }) => {
      imported.source = { id: 'private-file-key' };
    },
    /Invalid source identity/,
  ],
  [
    'invalid date type',
    ({ imported }) => {
      imported.icons[1].addedAt = 123;
    },
    /Invalid addedAt/,
  ],
  [
    'impossible calendar date',
    ({ imported }) => {
      imported.icons[1].updatedAt = '2026-02-30T12:00:00.000Z';
    },
    /Invalid updatedAt/,
  ],
  [
    'date order',
    ({ imported }) => {
      imported.icons[1].addedAt = '2026-10-20T00:00:00.000Z';
      imported.icons[1].updatedAt = '2026-10-19T00:00:00.000Z';
    },
    /Invalid date order/,
  ],
  [
    'unsafe name',
    ({ imported }) => {
      imported.icons[1].name = '../sentinel';
    },
    /Unsafe icon name/,
  ],
  [
    'alias type',
    ({ imported }) => {
      imported.icons[1].aliases = 'invalid';
    },
    /aliases/,
  ],
  [
    'hash mismatch',
    ({ imported }) => {
      imported.icons[1].sha256 = '0'.repeat(64);
    },
    /Checksum mismatch/,
  ],
  [
    'relative source traversal',
    ({ imported }) => {
      imported.icons[1].file = '../outside/sentinel.svg';
    },
    /Unsafe relative path/,
  ],
  [
    'source symlink',
    async ({ incoming, outside }) => {
      await rm(path.join(incoming, 'two.svg'));
      await symlink(
        path.join(outside, 'sentinel.svg'),
        path.join(incoming, 'two.svg'),
      );
    },
    /Symlink path escapes/,
  ],
  [
    'duplicate ID',
    ({ imported }) => {
      imported.icons[1].id = imported.icons[0].id;
    },
    /Duplicate icon ID/,
  ],
  [
    'case-folded filename collision',
    ({ imported }) => {
      imported.icons[1].name = 'Alpha';
    },
    /Case-folded filename collision/,
  ],
  [
    'component collision',
    ({ imported }) => {
      imported.icons[0].name = 'foo-bar';
      imported.icons[1].name = 'foo_bar';
    },
    /componentName collision/,
  ],
  [
    'root viewBox',
    async ({ incoming }) => {
      await writeFile(
        path.join(incoming, 'two.svg'),
        svg.replace('0 0 16 16', '0 0 24 24'),
      );
    },
    /root viewBox/,
  ],
  [
    'malformed XML after valid root',
    async ({ incoming }) => {
      await writeFile(
        path.join(incoming, 'two.svg'),
        '<svg viewBox="0 0 16 16"><path></svg>',
      );
    },
    /Error/,
  ],
  [
    'obsolete SVG directory',
    async ({ root }) => {
      await mkdir(path.join(root, 'icons/obsolete.svg'));
    },
    /Unsafe obsolete output file/,
  ],
  [
    'escaping output directory',
    async ({ root, outside }) => {
      await cp(path.join(root, 'apps/site/src/data'), outside, {
        recursive: true,
      });
      await rm(path.join(root, 'apps/site/src/data'), { recursive: true });
      await symlink(outside, path.join(root, 'apps/site/src/data'), 'dir');
    },
    /Symlink path escapes/,
  ],
];
for (const [name, alter, pattern] of invalid)
  test(`invalid import makes zero writes: ${name}`, async () => {
    const state = await fixture();
    try {
      await alter(state);
      await json(path.join(state.incoming, 'manifest.json'), state.imported);
      const before = await snapshot(state.directory);
      await assert.rejects(
        run(process.execPath, ['scripts/sync-icons.mjs', state.incoming], {
          cwd: state.root,
        }),
        pattern,
      );
      assert.deepEqual(await snapshot(state.directory), before);
    } finally {
      await rm(state.directory, { recursive: true, force: true });
    }
  });

test('valid import normalizes artwork and preserves identity while removing private provenance', async (t) => {
  const state = await fixture();
  try {
    // Report the actual host behavior in the Node test output.
    const caseInsensitive = await lstat(
      path.join(state.root, 'icons/alpha-16.svg'),
    ).then(
      () => true,
      () => false,
    );
    t.diagnostic(
      `Host filesystem is case-${caseInsensitive ? 'insensitive' : 'sensitive'}; source and component case renames exercised.`,
    );
    const sourceUrl =
      'https://www.figma.com/design/another-file/Original?node-id=88-99';
    state.imported.source = {
      fileKey: 'fixture-file',
      url: sourceUrl,
      scope: 'private collection',
    };
    state.imported.icons[0].sourceUrl = sourceUrl;
    await mkdir(path.join(state.incoming, 'artwork'));
    await rename(
      path.join(state.incoming, 'one.svg'),
      path.join(state.incoming, 'artwork/one.svg'),
    );
    state.imported.icons[0].file = 'artwork/one.svg';
    const incomingBytes = await readFile(
      path.join(state.incoming, 'artwork/one.svg'),
      'utf8',
    );
    state.imported.icons[0].sha256 = createHash('sha256')
      .update(incomingBytes)
      .digest('hex');
    await json(path.join(state.incoming, 'manifest.json'), state.imported);
    await run(process.execPath, ['scripts/sync-icons.mjs', state.incoming], {
      cwd: state.root,
    });
    const next = JSON.parse(
      await readFile(path.join(state.root, 'icons/manifest.json'), 'utf8'),
    );
    const icon = next.icons.find(({ id }) => id === 'fixture:1');
    assert.equal(icon.name, 'alpha');
    assert.equal(icon.originalName, 'alpha');
    assert.equal(icon.componentName, 'IconAlpha');
    assert.deepEqual(next.source, {
      id: `sha256:${createHash('sha256').update('fixture-file').digest('hex')}`,
    });
    const catalog = JSON.parse(
      await readFile(
        path.join(state.root, 'apps/site/src/data/catalog.json'),
        'utf8',
      ),
    );
    const compact = JSON.parse(
      await readFile(
        path.join(state.root, 'apps/site/src/data/catalog-runtime.json'),
        'utf8',
      ),
    );
    assert.doesNotMatch(
      JSON.stringify(next),
      /sourceUrl|fileKey|figma\.com|fixture-file|private collection/,
    );
    assert.doesNotMatch(
      JSON.stringify(catalog),
      /sourceUrl|fileKey|figma\.com|fixture-file|private collection/,
    );
    assert.deepEqual(decodeCatalog(compact), catalog);
    assert.ok(!('sha256' in icon));
    assert.ok(icon.aliases.includes('legacy-alpha'));
    assert.ok(icon.aliases.includes('Alpha'));
    assert.equal(
      await readFile(path.join(state.root, 'icons', icon.filename), 'utf8'),
      '<svg width="16" height="16" viewBox="0 0 16 16"><path d="M3 3h2" data-label="é ⚡"/></svg>\n',
    );
    assert.deepEqual(
      (await readdir(path.join(state.root, 'icons')))
        .filter((name) => name.endsWith('.svg'))
        .sort(),
      [icon.filename, 'Beta-16.svg'].sort(),
    );
    const componentFiles = await readdir(
      path.join(state.root, 'packages/fyicons/src'),
    );
    assert.ok(componentFiles.includes(`${icon.componentName}.tsx`));
    assert.ok(!componentFiles.includes('IconALPHA.tsx'));
    const categories = JSON.parse(
      await readFile(
        path.join(state.root, 'apps/site/public/icon-categories.json'),
        'utf8',
      ),
    );
    assert.deepEqual(categories.categories, [
      { ...state.categories.categories[0], icon: icon.name },
    ]);
    assert.equal(
      await readFile(
        path.join(state.root, 'packages/fyicons/src/sentinel.txt'),
        'utf8',
      ),
      'retain unrelated generated-directory files\n',
    );
    await run(process.execPath, ['scripts/generate-icons.mjs', '--check'], {
      cwd: state.root,
    });
  } finally {
    await rm(state.directory, { recursive: true, force: true });
  }
});

test('freshness checks reject private provenance in tracked sources without writes', async () => {
  const state = await fixture();
  try {
    const file = path.join(state.root, 'icons/manifest.json');
    const original = JSON.parse(await readFile(file, 'utf8'));
    for (const field of ['fileKey', 'sourceUrl']) {
      const input = structuredClone(original);
      if (field === 'fileKey') input.source = { fileKey: 'private-file-key' };
      else
        input.icons[0].sourceUrl =
          'https://www.figma.com/design/private-file-key';
      await json(file, input);
      const before = await snapshot(state.directory);
      await assert.rejects(
        run(process.execPath, ['scripts/generate-icons.mjs', '--check'], {
          cwd: state.root,
        }),
        /Private source metadata is not allowed/,
      );
      assert.deepEqual(await snapshot(state.directory), before);
    }
  } finally {
    await rm(state.directory, { recursive: true, force: true });
  }
});

test('--preserve-names keeps the existing name and component identity', async () => {
  const state = await fixture();
  try {
    await run(
      process.execPath,
      ['scripts/sync-icons.mjs', state.incoming, '--preserve-names'],
      { cwd: state.root },
    );
    const { icons } = JSON.parse(
      await readFile(path.join(state.root, 'icons/manifest.json'), 'utf8'),
    );
    assert.equal(icons[0].name, 'Alpha');
    assert.equal(icons[0].componentName, 'IconALPHA');
    assert.equal(icons[0].originalName, 'alpha');
    assert.ok(icons[0].aliases.includes('alpha'));
  } finally {
    await rm(state.directory, { recursive: true, force: true });
  }
});

test('publication removes old aliases before writing on a case-insensitive filesystem model', async () => {
  const files = new Map([
    ['icons/alpha-16.svg', { spelling: 'icons/Alpha-16.svg', content: 'old' }],
    [
      'packages/fyicons/src/iconalpha.tsx',
      { spelling: 'packages/fyicons/src/IconALPHA.tsx', content: 'old' },
    ],
  ]);
  await publishFiles(
    {
      root: '/repo',
      obsolete: ['icons/Alpha-16.svg', 'packages/fyicons/src/IconALPHA.tsx'],
      changed: new Map([
        ['icons/alpha-16.svg', svg],
        ['packages/fyicons/src/IconAlpha.tsx', 'replacement'],
      ]),
    },
    {
      mkdir: async () => {},
      unlink: async (file) => {
        assert.equal(
          files.delete(path.posix.relative('/repo', file).toLowerCase()),
          true,
        );
      },
      writeFile: async (file, content) => {
        const spelling = path.posix.relative('/repo', file);
        const key = spelling.toLowerCase();
        files.set(key, {
          spelling: files.get(key)?.spelling ?? spelling,
          content,
        });
      },
    },
  );
  assert.deepEqual(
    [...files.values()],
    [
      { spelling: 'icons/alpha-16.svg', content: svg },
      {
        spelling: 'packages/fyicons/src/IconAlpha.tsx',
        content: 'replacement',
      },
    ],
  );
});

test('imports validate raw hashes before repair and keep source, catalog and React artwork consistent', async () => {
  const f = await fixture();
  try {
    const raw = await readFile(
      new URL('./fixtures/filled-outside-stroke.svg', import.meta.url),
      'utf8',
    );
    await writeFile(path.join(f.incoming, 'one.svg'), raw);
    f.imported.icons[0].sha256 = createHash('sha256').update(raw).digest('hex');
    await json(path.join(f.incoming, 'manifest.json'), f.imported);
    await run(process.execPath, ['scripts/sync-icons.mjs', f.incoming], {
      cwd: f.root,
    });
    const saved = await readFile(
      path.join(f.root, 'icons/alpha-16.svg'),
      'utf8',
    );
    assert.notEqual(saved, raw);
    assert.match(saved, /fill="currentColor"/);
    const catalog = JSON.parse(
      await readFile(
        path.join(f.root, 'apps/site/src/data/catalog.json'),
        'utf8',
      ),
    );
    const icon = catalog.icons.find((icon) => icon.id === 'fixture:1');
    assert.equal(icon.svg, saved);
    assert.equal(icon.sha256, createHash('sha256').update(saved).digest('hex'));
    const react = await readFile(
      path.join(f.root, 'packages/fyicons/src/IconAlpha.tsx'),
      'utf8',
    );
    assert.equal((react.match(/<path/g) || []).length, 1);
    await run(process.execPath, ['scripts/generate-icons.mjs', '--check'], {
      cwd: f.root,
    });
    const previous = await snapshot(f.root);
    f.imported.icons[0].sha256 = '0'.repeat(64);
    await json(path.join(f.incoming, 'manifest.json'), f.imported);
    await assert.rejects(
      run(process.execPath, ['scripts/sync-icons.mjs', f.incoming], {
        cwd: f.root,
      }),
      /Checksum mismatch/,
    );
    assert.deepEqual(await snapshot(f.root), previous);
  } finally {
    await rm(f.directory, { recursive: true, force: true });
  }
});
