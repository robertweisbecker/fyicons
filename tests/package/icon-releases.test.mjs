import test from 'node:test';
import assert from 'node:assert/strict';
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
