import assert from 'node:assert/strict';
import test from 'node:test';
import packageInfo from 'fyicons/package.json' with { type: 'json' };
import { createElement } from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { createDomFixture } from './helpers/dom-fixture.mjs';

test('icon tiles announce additions in the latest two minor release lines and inspectors preserve Added and Updated links', async (t) => {
  const fixture = createDomFixture(t, 'https://example.test/icons/');
  const { icons } = await fixture.load('lib/catalog.ts');
  const { default: history } = await fixture.load('data/icon-releases.json');
  const { IconTile } = await fixture.load('components/IconTile.tsx');
  const { IconReleaseInfo } = await fixture.load(
    'components/IconReleaseInfo.tsx',
  );
  const minor = packageInfo.version.split('.').slice(0, 2).join('.') + '.';
  const previous = history.releases.findLast(
    (release) => !release.version.startsWith(minor),
  )?.version;
  const previousMinor = previous?.split('.').slice(0, 2).join('.') + '.';
  const samples = new Map();
  for (const icon of icons) {
    const added = history.releases.find((release) =>
      release.added.includes(icon.id),
    )?.version;
    if (!added) continue; // Unreleased source additions acquire history during versioning.
    const updated = history.releases.findLast((release) =>
      release.updated.includes(icon.id),
    )?.version;
    const kind = added.startsWith(minor)
      ? 'current'
      : added.startsWith(previousMinor)
        ? 'previous'
        : updated
          ? 'updated'
          : 'older';
    if (!samples.has(kind)) samples.set(kind, { icon, added, updated });
  }
  assert.ok(samples.size, 'Release history supplies representative icons');
  for (const [kind, { icon, added, updated }] of samples) {
    fixture.window.document.body.innerHTML = renderToStaticMarkup(
      createElement(IconTile, {
        icon,
        inspected: false,
        selected: false,
        inspect() {},
      }),
    );
    const tile = fixture.window.document.querySelector('.icon-tile');
    assert.equal(
      tile.getAttribute('aria-description'),
      ['current', 'previous'].includes(kind) ? `Added in v${added}` : null,
    );
    fixture.window.document.body.innerHTML = renderToStaticMarkup(
      createElement(IconReleaseInfo, { id: icon.id }),
    );
    const rows = [...fixture.window.document.querySelectorAll('dl > div')];
    assert.deepEqual(
      rows.map((row) => row.querySelector('dt').textContent),
      updated ? ['Updated', 'Added'] : ['Added'],
    );
    assert.deepEqual(
      rows.map((row) => row.querySelector('dd').textContent),
      updated ? [updated, added] : [added],
    );
    for (const row of rows) {
      const link = row.querySelector('a');
      assert.ok(
        link.href.endsWith(`/releases/tag/fyicons%40${link.textContent}`),
      );
    }
  }
});
