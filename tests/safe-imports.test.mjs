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
import { decodeCatalog } from '../src/lib/catalog-codec.ts';
import { publishFiles } from '../scripts/lib/icon-files.mjs';

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
  await mkdir(path.join(root, 'public'));
  await mkdir(path.join(root, 'src/lib'), { recursive: true });
  await mkdir(incoming);
  await mkdir(outside);
  await writeFile(path.join(outside, 'sentinel.svg'), svg);
  await cp(
    new URL('../scripts/', import.meta.url),
    path.join(root, 'scripts'),
    { recursive: true },
  );
  await cp(
    new URL('../src/lib/icon-categories.ts', import.meta.url),
    path.join(root, 'src/lib/icon-categories.ts'),
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
  await json(path.join(root, 'public/icon-categories.json'), categories);
  await writeFile(path.join(root, 'icons/Alpha-16.svg'), svg);
  await writeFile(path.join(root, 'icons/Beta-16.svg'), svg);
  await run(process.execPath, ['scripts/generate-icons.mjs'], { cwd: root });
  await writeFile(
    path.join(root, 'src/icons/sentinel.txt'),
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
    'unsafe name',
    ({ imported }) => {
      imported.icons[1].name = '../sentinel';
    },
    /Unsafe icon name/,
  ],
  [
    'name type',
    ({ imported }) => {
      imported.icons[1].name = 12;
    },
    /Unsafe icon name/,
  ],
  [
    'base name type',
    ({ imported }) => {
      imported.icons[1].baseName = [];
    },
    /baseName/,
  ],
  [
    'filename traversal',
    ({ imported }) => {
      imported.icons[1].filename = '../sentinel.svg';
    },
    /Unsafe filename/,
  ],
  [
    'missing source filename',
    ({ imported }) => {
      delete imported.icons[1].filename;
    },
    /filename/,
  ],
  [
    'component type',
    ({ imported }) => {
      imported.icons[1].componentName = {};
    },
    /componentName/,
  ],
  [
    'alias type',
    ({ imported }) => {
      imported.icons[1].aliases = 'invalid';
    },
    /aliases/,
  ],
  [
    'alias entry type',
    ({ imported }) => {
      imported.icons[1].aliases = [23];
    },
    /aliases/,
  ],
  [
    'originalName type',
    ({ imported }) => {
      imported.icons[1].originalName = 2;
    },
    /originalName/,
  ],
  [
    'sourceUrl type',
    ({ imported }) => {
      imported.icons[1].sourceUrl = {};
    },
    /sourceUrl/,
  ],
  [
    'empty sourceUrl',
    ({ imported }) => {
      imported.icons[1].sourceUrl = '';
    },
    /sourceUrl/,
  ],
  [
    'source object type',
    ({ imported }) => {
      imported.source = [];
    },
    /source.fileKey/,
  ],
  [
    'source fileKey type',
    ({ imported }) => {
      imported.source = { fileKey: 42 };
    },
    /source.fileKey/,
  ],
  [
    'null compact field',
    ({ imported }) => {
      imported.icons[1].extra = null;
    },
    /null values/,
  ],
  [
    'dimensions',
    ({ imported }) => {
      imported.icons[1].width = 24;
    },
    /dimensions/,
  ],
  [
    'missing ID',
    ({ imported }) => {
      delete imported.icons[1].id;
    },
    /icon ID/,
  ],
  [
    'ID type',
    ({ imported }) => {
      imported.icons[1].id = 17;
    },
    /icon ID/,
  ],
  [
    'duplicate ID',
    ({ imported }) => {
      imported.icons[1].id = imported.icons[0].id;
    },
    /Duplicate icon ID/,
  ],
  [
    'hash type',
    ({ imported }) => {
      imported.icons[1].sha256 = 4;
    },
    /sha256/,
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
    'absolute source path',
    ({ imported, outside }) => {
      imported.icons[1].file = path.join(outside, 'sentinel.svg');
    },
    /Unsafe relative path/,
  ],
  [
    'Windows source path',
    ({ imported }) => {
      imported.icons[1].file = '..\\outside\\sentinel.svg';
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
    'source directory symlink',
    async ({ incoming, outside, imported }) => {
      imported.icons[1].file = 'linked/sentinel.svg';
      await symlink(outside, path.join(incoming, 'linked'), 'dir');
    },
    /Symlink path escapes/,
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
    'case-folded component collision',
    ({ imported }) => {
      imported.icons[0].name = 'ab-c';
      imported.icons[1].name = 'A-bc';
    },
    /componentName collision/,
  ],
  [
    'invalid UTF-8 source bytes',
    async ({ incoming }) => {
      await writeFile(
        path.join(incoming, 'two.svg'),
        Buffer.concat([Buffer.from(svg), Buffer.from([0xff])]),
      );
    },
    /encoded data|encoding/,
  ],
  [
    'obsolete SVG directory',
    async ({ root }) => {
      await mkdir(path.join(root, 'icons/obsolete.svg'));
    },
    /Unsafe obsolete output file/,
  ],
  [
    'output file directory',
    async ({ root }) => {
      await rm(path.join(root, 'src/icons/IconALPHA.tsx'));
      await mkdir(path.join(root, 'src/icons/IconAlpha.tsx'));
    },
    /Unsafe output file|Unsafe obsolete output file/,
  ],
  [
    'dangling output symlink',
    async ({ root, outside }) => {
      await symlink(
        path.join(outside, 'missing.svg'),
        path.join(root, 'icons/obsolete.svg'),
      );
    },
    /Dangling symlink/,
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
    'nested viewBox',
    async ({ incoming }) => {
      await writeFile(
        path.join(incoming, 'two.svg'),
        '<svg viewBox="0 0 24 24"><svg viewBox="0 0 16 16"/></svg>',
      );
    },
    /root viewBox/,
  ],
  [
    'quoted fake viewBox',
    async ({ incoming }) => {
      await writeFile(
        path.join(incoming, 'two.svg'),
        '<svg data-info=" viewBox=\'0 0 16 16\'"><path/></svg>',
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
    'unknown category artwork',
    async ({ root, categories }) => {
      categories.categories[0].icon = 'missing';
      await json(path.join(root, 'public/icon-categories.json'), categories);
    },
    /Unknown sidebar icon/,
  ],
  ...['src/data', 'src/icons', 'public', 'icons'].map((relative) => [
    `escaping output directory ${relative}`,
    async ({ root, outside }) => {
      await cp(path.join(root, relative), outside, { recursive: true });
      await rm(path.join(root, relative), { recursive: true });
      await symlink(outside, path.join(root, relative), 'dir');
    },
    /Symlink path escapes/,
  ]),
  ...[
    'src/data/catalog-runtime.json',
    'public/icon-categories.schema.json',
    'icons/alpha-16.svg',
    'src/icons/IconAlpha.tsx',
    'icons/obsolete.svg',
  ].map((relative) => [
    `escaping output file ${relative}`,
    async ({ root, outside }) => {
      await rm(path.join(root, relative), { force: true });
      await symlink(
        path.join(outside, 'sentinel.svg'),
        path.join(root, relative),
      );
    },
    /Symlink path escapes/,
  ]),
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

for (const preserve of [false, true])
  test(`valid import preserves bytes, identities, aliases, and rules${preserve ? ' with --preserve-names' : ' with exact case renames'}`, async (t) => {
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
      const incomingBytes = await readFile(
        path.join(state.incoming, 'one.svg'),
        'utf8',
      );
      state.imported.icons[0].sha256 = createHash('sha256')
        .update(incomingBytes)
        .digest('hex');
      await json(path.join(state.incoming, 'manifest.json'), state.imported);
      await run(
        process.execPath,
        [
          'scripts/sync-icons.mjs',
          state.incoming,
          ...(preserve ? ['--preserve-names'] : []),
        ],
        { cwd: state.root },
      );
      const next = JSON.parse(
        await readFile(path.join(state.root, 'icons/manifest.json'), 'utf8'),
      );
      const icon = next.icons.find(({ id }) => id === 'fixture:1');
      assert.equal(icon.name, preserve ? 'Alpha' : 'alpha');
      assert.equal(icon.originalName, 'alpha');
      assert.equal(icon.componentName, preserve ? 'IconALPHA' : 'IconAlpha');
      assert.deepEqual(next.source, { fileKey: '' });
      const catalog = JSON.parse(
        await readFile(path.join(state.root, 'src/data/catalog.json'), 'utf8'),
      );
      const compact = JSON.parse(
        await readFile(
          path.join(state.root, 'src/data/catalog-runtime.json'),
          'utf8',
        ),
      );
      assert.deepEqual(decodeCatalog(compact), catalog);
      assert.ok(!('sha256' in icon));
      assert.ok(icon.aliases.includes('legacy-alpha'));
      assert.ok(icon.aliases.includes(preserve ? 'alpha' : 'Alpha'));
      assert.equal(
        await readFile(path.join(state.root, 'icons', icon.filename), 'utf8'),
        incomingBytes,
      );
      assert.deepEqual(
        (await readdir(path.join(state.root, 'icons')))
          .filter((name) => name.endsWith('.svg'))
          .sort(),
        [icon.filename, 'Beta-16.svg'].sort(),
      );
      const componentFiles = await readdir(path.join(state.root, 'src/icons'));
      assert.ok(componentFiles.includes(`${icon.componentName}.tsx`));
      if (!preserve) assert.ok(!componentFiles.includes('IconALPHA.tsx'));
      const categories = JSON.parse(
        await readFile(
          path.join(state.root, 'public/icon-categories.json'),
          'utf8',
        ),
      );
      assert.deepEqual(categories.categories, [
        { ...state.categories.categories[0], icon: icon.name },
      ]);
      assert.equal(
        await readFile(path.join(state.root, 'src/icons/sentinel.txt'), 'utf8'),
        'retain unrelated generated-directory files\n',
      );
      await run(process.execPath, ['scripts/generate-icons.mjs', '--check'], {
        cwd: state.root,
      });
    } finally {
      await rm(state.directory, { recursive: true, force: true });
    }
  });

for (const custom of [false, true])
  test(`supplied ${custom ? 'custom' : 'default'} source URLs survive import and production decoding`, async () => {
    const state = await fixture();
    try {
      state.imported.source = { fileKey: 'fixture-file' };
      const sourceUrl = custom
        ? 'https://www.figma.com/design/another-file/Original?node-id=88-99'
        : 'https://www.figma.com/design/fixture-file/icons-astra?node-id=fixture-1';
      await mkdir(path.join(state.incoming, 'artwork'));
      await rename(
        path.join(state.incoming, 'one.svg'),
        path.join(state.incoming, 'artwork/one.svg'),
      );
      state.imported.icons[0].file = 'artwork/one.svg';
      state.imported.icons[0].sourceUrl = sourceUrl;
      state.imported.icons[0].originalName = 'Original Figma label';
      await json(path.join(state.incoming, 'manifest.json'), state.imported);
      await run(process.execPath, ['scripts/sync-icons.mjs', state.incoming], {
        cwd: state.root,
      });
      const manifest = JSON.parse(
        await readFile(path.join(state.root, 'icons/manifest.json'), 'utf8'),
      );
      assert.equal(manifest.icons[0].sourceUrl, sourceUrl);
      assert.equal(manifest.icons[0].originalName, 'Original Figma label');
      const catalog = JSON.parse(
        await readFile(path.join(state.root, 'src/data/catalog.json'), 'utf8'),
      );
      const compact = JSON.parse(
        await readFile(
          path.join(state.root, 'src/data/catalog-runtime.json'),
          'utf8',
        ),
      );
      assert.equal(compact.iconFields.includes('sourceUrl'), custom);
      assert.equal(catalog.icons[0].sourceUrl, sourceUrl);
      assert.deepEqual(decodeCatalog(compact), catalog);
      await run(process.execPath, ['scripts/generate-icons.mjs', '--check'], {
        cwd: state.root,
      });
    } finally {
      await rm(state.directory, { recursive: true, force: true });
    }
  });

test('publication removes old aliases before writing on a case-insensitive filesystem model', async () => {
  const files = new Map([
    ['icons/alpha-16.svg', { spelling: 'icons/Alpha-16.svg', content: 'old' }],
    [
      'src/icons/iconalpha.tsx',
      { spelling: 'src/icons/IconALPHA.tsx', content: 'old' },
    ],
  ]);
  await publishFiles(
    {
      root: '/repo',
      obsolete: ['icons/Alpha-16.svg', 'src/icons/IconALPHA.tsx'],
      changed: new Map([
        ['icons/alpha-16.svg', svg],
        ['src/icons/IconAlpha.tsx', 'replacement'],
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
      { spelling: 'src/icons/IconAlpha.tsx', content: 'replacement' },
    ],
  );
});
