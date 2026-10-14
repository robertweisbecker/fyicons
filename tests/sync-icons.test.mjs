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
import { categorizeIcons } from '../src/lib/icon-categories.ts';

for (const format of [
  'legacy',
  'multiple',
  'artwork-only',
  'ignored-category-values',
])
  test(`sync preserves local keyword rules, sidebar icons, aliases, and SVGs with ${format} imports`, async () => {
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
      await mkdir(path.join(temp, 'public'));
      await mkdir(path.join(temp, 'src/lib'), { recursive: true });
      await cp(
        new URL('../src/lib/icon-categories.ts', import.meta.url),
        path.join(temp, 'src/lib/icon-categories.ts'),
      );
      await writeFile(
        path.join(temp, 'public/icon-categories.json'),
        JSON.stringify({
          categories: [
            { id: 'files', name: 'Files', icon: 'alpha', keywords: ['alpha'] },
            {
              id: 'interface',
              name: 'Interface',
              icon: 'beta',
              keywords: ['alpha', 'beta'],
            },
            {
              id: 'archive',
              name: 'Archive',
              icon: 'retired',
              keywords: ['retired'],
            },
          ],
        }),
      );
      for (const name of [
        'sync-icons.mjs',
        'generate-icons.mjs',
        'lib/react-icons.mjs',
        'lib/prepare-icons.mjs',
        'lib/icon-files.mjs',
        'lib/sync-categories.mjs',
        'lib/category-schema.ts',
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
          icons: [
            record('fixture:1', 'alpha'),
            record('fixture:2', 'beta'),
            record('fixture:old', 'retired'),
          ].map(({ category, ...icon }) => icon),
        }),
      );
      await writeFile(path.join(temp, 'icons/alpha-16.svg'), first);
      await writeFile(path.join(temp, 'icons/beta-16.svg'), second);
      await writeFile(path.join(temp, 'icons/retired-16.svg'), third);
      await writeFile(
        path.join(temp, 'incoming/manifest.json'),
        JSON.stringify({
          name: 'FYIcons',
          categories:
            format === 'ignored-category-values'
              ? null
              : format === 'artwork-only'
                ? undefined
                : format === 'legacy'
                  ? ['Interface']
                  : [
                      { id: 'interface', name: 'Interface', icon: 'alpha' },
                      { id: 'new-group', name: 'New group', icon: 'beta' },
                    ],
          icons: [
            record('fixture:1', 'beta', 'one.svg'),
            record('fixture:2', 'alpha', 'two.svg'),
            record('fixture:3', 'beta', 'three.svg'),
            record('fixture:4', 'unmatched', 'four.svg'),
          ].map((icon) =>
            format === 'ignored-category-values'
              ? { ...icon, category: null, categories: { ignored: true } }
              : format === 'artwork-only'
                ? Object.fromEntries(
                    Object.entries(icon).filter(([key]) => key !== 'category'),
                  )
                : format === 'legacy'
                  ? icon
                  : { ...icon, categories: ['interface', 'new-group'] },
          ),
        }),
      );
      await writeFile(path.join(temp, 'incoming/one.svg'), first);
      await writeFile(path.join(temp, 'incoming/two.svg'), second);
      await writeFile(path.join(temp, 'incoming/three.svg'), third);
      await writeFile(path.join(temp, 'incoming/four.svg'), first);
      await run(process.execPath, ['scripts/sync-icons.mjs', 'incoming'], {
        cwd: temp,
      });
      const next = JSON.parse(
        await readFile(path.join(temp, 'icons/manifest.json'), 'utf8'),
      );
      const byId = new Map(next.icons.map((icon) => [icon.id, icon]));
      const rules = JSON.parse(
        await readFile(path.join(temp, 'public/icon-categories.json'), 'utf8'),
      );
      assert.deepEqual(rules, {
        $schema: './icon-categories.schema.json',
        categories: [
          { id: 'files', name: 'Files', icon: 'beta', keywords: ['alpha'] },
          {
            id: 'interface',
            name: 'Interface',
            icon: 'alpha',
            keywords: ['alpha', 'beta'],
          },
          {
            id: 'archive',
            name: 'Archive',
            icon: 'grid',
            keywords: ['retired'],
          },
        ],
      });
      assert.deepEqual(
        Object.fromEntries(
          categorizeIcons(next.icons, rules).icons.map(
            ({ name, categories }) => [name, categories],
          ),
        ),
        {
          alpha: ['files', 'interface'],
          beta: ['interface'],
          'beta-1': ['interface'],
          unmatched: ['uncategorized'],
        },
      );
      assert.ok(!('categories' in next));
      assert.ok(
        next.icons.every(
          (icon) => !('category' in icon) && !('categories' in icon),
        ),
      );
      await assert.rejects(readFile(path.join(temp, 'icons/retired-16.svg')), {
        code: 'ENOENT',
      });
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
          await readFile(
            path.join(temp, 'icons', byId.get(id).filename),
            'utf8',
          ),
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
