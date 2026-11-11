import assert from 'node:assert/strict';
import test from 'node:test';
import { createElement } from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { createDomFixture } from './helpers/dom-fixture.mjs';

test('icon tiles mark additions in the current minor release and inspectors preserve Added and Updated links', async (t) => {
  const fixture = createDomFixture(t, 'https://example.test/icons/');
  const { icons } = await fixture.load('lib/catalog.ts');
  const { default: history } = await fixture.load('data/icon-releases.json');
  const { version } = (
    await import('fyicons/package.json', { with: { type: 'json' } })
  ).default;
  const { IconTile } = await fixture.load('components/IconTile.tsx');
  const { IconReleaseInfo } = await fixture.load(
    'components/IconReleaseInfo.tsx',
  );
  const minor = version.split('.').slice(0, 2).join('.') + '.';
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
      ? 'recent'
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
      kind === 'recent' ? `Added in v${added}` : null,
    );
    assert.equal(
      Boolean(tile.querySelector('span[aria-hidden="true"]')),
      kind === 'recent',
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
