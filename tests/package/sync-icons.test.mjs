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
import { categorizeIcons } from '../../apps/site/src/lib/icon-categories.ts';
import { decodeCatalog } from '../../apps/site/src/lib/catalog-codec.ts';
import { createIconArchive } from '../../apps/site/src/lib/icon-archive.ts';
import { unzipSync, strFromU8 } from 'fflate';

test('sync preserves local rules, sidebar icons, aliases and SVGs while ignoring incoming category metadata', async () => {
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
  const addedAt = '2026-01-02T12:00:00.000Z';
  const updatedAt = '2026-01-03T12:00:00.000Z';
  const readManifest = async () =>
    JSON.parse(await readFile(path.join(temp, 'icons/manifest.json'), 'utf8'));
  const dates = (manifest) =>
    Object.fromEntries(
      manifest.icons.map(({ id, addedAt, updatedAt }) => [
        id,
        { addedAt, updatedAt },
      ]),
    );
  try {
    await mkdir(path.join(temp, 'scripts/lib'), { recursive: true });
    await mkdir(path.join(temp, 'icons'));
    await mkdir(path.join(temp, 'incoming'));
    await mkdir(path.join(temp, 'apps/site/public'), { recursive: true });
    await mkdir(path.join(temp, 'apps/site/src/lib'), { recursive: true });
    await cp(
      new URL('../../apps/site/src/lib/icon-categories.ts', import.meta.url),
      path.join(temp, 'apps/site/src/lib/icon-categories.ts'),
    );
    await writeFile(
      path.join(temp, 'apps/site/public/icon-categories.json'),
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
        new URL(`../../scripts/${name}`, import.meta.url),
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
          { ...record('fixture:1', 'alpha'), addedAt, updatedAt },
          record('fixture:2', 'beta'),
          record('fixture:old', 'retired'),
          record('fixture:5', 'timeless'),
        ].map(({ category, ...icon }) => icon),
      }),
    );
    await writeFile(path.join(temp, 'icons/alpha-16.svg'), first);
    await writeFile(path.join(temp, 'icons/beta-16.svg'), second);
    await writeFile(path.join(temp, 'icons/retired-16.svg'), third);
    await writeFile(path.join(temp, 'icons/timeless-16.svg'), first);
    await writeFile(
      path.join(temp, 'incoming/manifest.json'),
      JSON.stringify({
        name: 'FYIcons',
        categories: null,
        icons: [
          record('fixture:1', 'beta', 'one.svg'),
          record('fixture:2', 'alpha', 'two.svg'),
          record('fixture:3', 'beta', 'three.svg'),
          {
            ...record('fixture:4', 'unmatched', 'four.svg'),
            addedAt,
            updatedAt,
            variantSetName: 'Unmatched',
            variantProperties: { Style: 'Regular', Weight: 'Light' },
          },
          record('fixture:5', 'timeless', 'five.svg'),
        ].map((icon, index) => {
          if (index === 0) return icon;
          if (index === 1)
            return { ...icon, categories: ['incoming-category'] };
          if (index === 2)
            return { ...icon, category: null, categories: { ignored: true } };
          const { category, ...artwork } = icon;
          return artwork;
        }),
      }),
    );
    await writeFile(path.join(temp, 'incoming/one.svg'), first);
    await writeFile(path.join(temp, 'incoming/two.svg'), second);
    await writeFile(path.join(temp, 'incoming/three.svg'), third);
    await writeFile(path.join(temp, 'incoming/four.svg'), first);
    await writeFile(path.join(temp, 'incoming/five.svg'), first);
    const startedAt = new Date().toISOString();
    await run(process.execPath, ['scripts/sync-icons.mjs', 'incoming'], {
      cwd: temp,
    });
    const next = JSON.parse(
      await readFile(path.join(temp, 'icons/manifest.json'), 'utf8'),
    );
    const byId = new Map(next.icons.map((icon) => [icon.id, icon]));
    const rules = JSON.parse(
      await readFile(
        path.join(temp, 'apps/site/public/icon-categories.json'),
        'utf8',
      ),
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
        categorizeIcons(next.icons, rules).icons.map(({ name, categories }) => [
          name,
          categories,
        ]),
      ),
      {
        alpha: ['files', 'interface'],
        beta: ['interface'],
        'beta-1': ['interface'],
        unmatched: ['uncategorized'],
        timeless: ['uncategorized'],
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
        await readFile(path.join(temp, 'icons', byId.get(id).filename), 'utf8'),
        svg,
      );
    }
    // Known history follows identity through a rename. Legacy added dates stay unknown.
    assert.equal(byId.get('fixture:1').addedAt, addedAt);
    assert.ok(byId.get('fixture:1').updatedAt >= startedAt);
    assert.equal(byId.get('fixture:2').addedAt, undefined);
    assert.equal(
      byId.get('fixture:2').updatedAt,
      byId.get('fixture:1').updatedAt,
    );
    assert.equal(
      byId.get('fixture:3').addedAt,
      byId.get('fixture:1').updatedAt,
    );
    assert.equal(
      byId.get('fixture:3').updatedAt,
      byId.get('fixture:3').addedAt,
    );
    assert.deepEqual(dates(next)['fixture:4'], { addedAt, updatedAt });
    assert.deepEqual(dates(next)['fixture:5'], {
      addedAt: undefined,
      updatedAt: undefined,
    });

    // Export time, lookup aliases and variant-property order do not change dates.
    const incomingPath = path.join(temp, 'incoming/manifest.json');
    const incoming = JSON.parse(await readFile(incomingPath, 'utf8'));
    incoming.source = { fileKey: '', exportedAt: 'later export' };
    incoming.icons[0].aliases = ['another-lookup'];
    incoming.icons[0].addedAt = '2000-01-01T00:00:00.000Z';
    incoming.icons[0].updatedAt = '2001-01-01T00:00:00.000Z';
    incoming.icons[3].variantProperties = { Weight: 'Light', Style: 'Regular' };
    await writeFile(incomingPath, JSON.stringify(incoming));
    await run(process.execPath, ['scripts/sync-icons.mjs', 'incoming'], {
      cwd: temp,
    });
    assert.deepEqual(dates(await readManifest()), dates(next));

    // Separate artwork and variant-label edits advance only the affected updated date.
    const beforeEdits = await readManifest();
    beforeEdits.icons.find(({ id }) => id === 'fixture:1').updatedAt =
      updatedAt;
    await writeFile(
      path.join(temp, 'icons/manifest.json'),
      JSON.stringify(beforeEdits),
    );
    await writeFile(path.join(temp, 'incoming/one.svg'), third);
    incoming.icons[3].variantProperties.Style = 'Filled';
    await writeFile(incomingPath, JSON.stringify(incoming));
    const editsStartedAt = new Date().toISOString();
    await run(process.execPath, ['scripts/sync-icons.mjs', 'incoming'], {
      cwd: temp,
    });
    const edited = await readManifest();
    const editedDates = dates(edited);
    for (const id of ['fixture:1', 'fixture:4']) {
      assert.equal(editedDates[id].addedAt, addedAt);
      assert.ok(editedDates[id].updatedAt >= editsStartedAt);
    }
    for (const id of ['fixture:2', 'fixture:3', 'fixture:5'])
      assert.deepEqual(editedDates[id], dates(next)[id]);

    // Removing a duplicate can change another icon's suffix, without dating it as an edit.
    incoming.icons = incoming.icons.filter(({ id }) => id !== 'fixture:1');
    await writeFile(incomingPath, JSON.stringify(incoming));
    await run(process.execPath, ['scripts/sync-icons.mjs', 'incoming'], {
      cwd: temp,
    });
    const final = await readManifest();
    assert.equal(final.icons.find(({ id }) => id === 'fixture:3').name, 'beta');
    for (const icon of final.icons)
      assert.deepEqual(dates(final)[icon.id], editedDates[icon.id]);

    // Dates survive production decoding and both full and selected ZIP manifests.
    const catalog = JSON.parse(
      await readFile(
        path.join(temp, 'apps/site/src/data/catalog.json'),
        'utf8',
      ),
    );
    const compact = JSON.parse(
      await readFile(
        path.join(temp, 'apps/site/src/data/catalog-runtime.json'),
        'utf8',
      ),
    );
    assert.deepEqual(decodeCatalog(compact), catalog);
    assert.deepEqual(dates(catalog), dates(final));
    for (const selection of [catalog.icons, catalog.icons.slice(0, 1)]) {
      const files = unzipSync(
        createIconArchive(
          selection,
          catalog,
          'Fixture README',
          'Fixture license',
        ),
      );
      const downloaded = JSON.parse(strFromU8(files['manifest.json']));
      assert.deepEqual(dates(downloaded), dates({ icons: selection }));
    }
    await run(process.execPath, ['scripts/generate-icons.mjs', '--check'], {
      cwd: temp,
    });
  } finally {
    await rm(temp, { recursive: true, force: true });
  }
});
