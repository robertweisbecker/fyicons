import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { registerHooks } from 'node:module';
import { buildIconReleaseHistory } from '../../scripts/generate-icon-releases.mjs';

const source = { id: `sha256:${'a'.repeat(64)}` };
const icon = {
  id: '1:1',
  name: 'sun',
  componentName: 'IconSun',
  originalName: 'Sun',
  sha256: 'first',
};
const snapshot = (version, icons, collection = source) => ({
  version,
  catalog: { source: collection, icons },
});

test('new-icon markers use the current minor addition, including icons refined afterward', async () => {
  const releases = [
    { version: '0.2.0', added: ['old', 'old-refined'], updated: [] },
    { version: '0.3.0', added: ['new', 'new-refined'], updated: [] },
    {
      version: '0.3.2',
      added: ['patch-new'],
      updated: ['old-refined', 'new-refined'],
    },
    { version: '0.4.0', added: ['next-new'], updated: [] },
  ];
  for (const [version, marked] of [
    ['0.3.2', { new: '0.3.0', 'new-refined': '0.3.0', 'patch-new': '0.3.2' }],
    ['0.4.0', { 'next-new': '0.4.0' }],
  ]) {
    const moduleUrl = new URL(
      '../../apps/site/src/lib/icon-releases.ts',
      import.meta.url,
    );
    moduleUrl.searchParams.set('test-version', version);
    const hooks = registerHooks({
      resolve(specifier, context, nextResolve) {
        if (context.parentURL === moduleUrl.href) {
          if (specifier === '../data/icon-releases.json')
            return {
              url: `data:text/javascript,${encodeURIComponent(`export default ${JSON.stringify({ releases })}`)}`,
              shortCircuit: true,
            };
          if (specifier === 'fyicons/package.json')
            return {
              url: `data:application/json,${encodeURIComponent(JSON.stringify({ version }))}`,
              shortCircuit: true,
            };
        }
        return nextResolve(specifier, context);
      },
    });
    try {
      const { getRecentIconAddition, getIconReleases } = await import(
        moduleUrl.href
      );
      for (const id of [
        'old',
        'old-refined',
        'new',
        'new-refined',
        'patch-new',
        'next-new',
        'missing',
      ])
        assert.equal(
          getRecentIconAddition(id),
          marked[id],
          `${version}: ${id}`,
        );
      assert.equal(getIconReleases('old-refined').updated, '0.3.2');
    } finally {
      hooks.deregister();
    }
  }
});

test('release history follows identity through renames and records artwork changes', () => {
  const renamed = { ...icon, name: 'sun-small', componentName: 'IconSunSmall' };
  const newIcon = { ...icon, id: '2:2' };
  const result = buildIconReleaseHistory([
    snapshot('0.1.0', [icon]),
    snapshot('0.2.0', [renamed, newIcon]),
    snapshot('0.2.1', [{ ...renamed, sha256: 'refined' }, newIcon]),
  ]);
  assert.deepEqual(result, {
    sourceId: source.id,
    releases: [
      { version: '0.1.0', added: ['1:1'], updated: [] },
      { version: '0.2.0', added: ['2:2'], updated: ['1:1'] },
      { version: '0.2.1', added: [], updated: ['1:1'] },
    ],
  });
});

test('dates, aliases, categories, and variant property order do not advance release history', () => {
  const first = {
    ...icon,
    variantProperties: { Style: 'Outline', Size: '16' },
  };
  const second = {
    ...first,
    addedAt: '2026-10-28T00:00:00.000Z',
    updatedAt: '2026-10-29T00:00:00.000Z',
    aliases: ['sunshine'],
    categories: ['weather'],
    variantProperties: { Size: '16', Style: 'Outline' },
  };
  const result = buildIconReleaseHistory([
    snapshot('0.1.0', [first]),
    snapshot('0.2.0', [second]),
  ]);
  assert.deepEqual(result.releases[1], {
    version: '0.2.0',
    added: [],
    updated: [],
  });
});

test('removed and restored icons retain their original addition and get an updated release', () => {
  const result = buildIconReleaseHistory([
    snapshot('0.1.0', [icon]),
    snapshot('0.2.0', []),
    snapshot('0.3.0', [icon]),
  ]);
  assert.deepEqual(result.releases[2], {
    version: '0.3.0',
    added: [],
    updated: ['1:1'],
  });
});

test('0.3.0 distinguishes new and edited icons from export-only CSS changes', async () => {
  const { releases } = JSON.parse(
    await readFile(
      new URL('../../apps/site/src/data/icon-releases.json', import.meta.url),
      'utf8',
    ),
  );
  const { added, updated } = releases.find(
    ({ version }) => version === '0.3.0',
  );
  assert.ok(added.includes('1350:2717'), 'LetterK first shipped in 0.3.0');
  assert.ok(updated.includes('101:2291'), 'Warning received new artwork');
  assert.ok(
    !updated.includes('154:11359'),
    'Activity only gained export classes',
  );
});

test('release histories cannot merge unrelated collections or invent a missing first release', () => {
  assert.throws(() => buildIconReleaseHistory([]), /No published release tags/);
  assert.throws(
    () =>
      buildIconReleaseHistory([
        snapshot('0.1.0', [icon]),
        snapshot('0.2.0', [icon], { id: `sha256:${'b'.repeat(64)}` }),
      ]),
    /same icon collection/,
  );
});
