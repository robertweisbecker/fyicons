import assert from 'node:assert/strict';
import test from 'node:test';
import { act } from 'react';
import { unzipSync, strFromU8 } from 'fflate';
import { mountApp } from './helpers/app-readiness-harness.mjs';

function captureDownloads(t, window) {
  const blobs = new Map();
  const downloads = [];
  t.mock.method(URL, 'createObjectURL', (blob) => {
    const url = `blob:download-${blobs.size}`;
    blobs.set(url, blob);
    return url;
  });
  t.mock.method(URL, 'revokeObjectURL', () => {});
  t.mock.method(window.HTMLAnchorElement.prototype, 'click', function () {
    downloads.push({ filename: this.download, blob: blobs.get(this.href) });
  });
  return downloads;
}

const click = (element) =>
  act(async () => {
    assert.ok(element, 'requested control exists');
    assert.notEqual(element.disabled, true, 'requested control is enabled');
    assert.notEqual(element.getAttribute('aria-disabled'), 'true');
    assert.equal(
      element.closest('[inert]'),
      null,
      'requested control is interactive',
    );
    element.click();
  });
const button = (document, text) =>
  [...document.querySelectorAll('button')].find(
    (element) => element.textContent.trim() === text,
  );

async function search(h, value) {
  const input = h.document.querySelector('input[aria-label="Search icons"]');
  await act(async () => {
    Object.getOwnPropertyDescriptor(
      h.window.HTMLInputElement.prototype,
      'value',
    ).set.call(input, value);
    input.dispatchEvent(new h.window.Event('input', { bubbles: true }));
    // Let the production search debounce publish the query to the URL.
    await new Promise((resolve) => setTimeout(resolve, 250));
  });
}

for (const mobile of [false, true]) {
  test(`${mobile ? 'mobile' : 'desktop'} users can find, inspect, copy and download an icon`, async (t) => {
    const h = await mountApp(t, 'https://example.test/icons/', { mobile });
    await h.resolveCategories();
    const downloads = captureDownloads(t, h.window);
    const copied = [];
    Object.defineProperty(h.window.navigator, 'clipboard', {
      configurable: true,
      value: {
        writeText: async (text) => {
          copied.push(text);
        },
      },
    });
    const icon = h.catalog.icons.find(({ name }) => name === 'home');
    assert.ok(icon);
    await search(h, 'no-such-fyicon-987654321');
    assert.equal(h.tiles.length, 0);
    await click(h.document.querySelector('button[aria-label="Clear"]'));
    assert.ok(h.tiles.length > 0);
    await search(h, icon.name);
    const tile = h.tiles.find((element) => element.dataset.id === icon.id);
    await click(tile);
    assert.equal(
      new URLSearchParams(h.window.location.search).get('icon'),
      icon.name,
    );
    if (mobile) {
      await click(
        h.document.querySelector('button[aria-label="Expand preview"]'),
      );
      assert.equal(
        h.document
          .querySelector('button[aria-label="Collapse preview"]')
          .getAttribute('aria-expanded'),
        'true',
      );
    }
    const copyButton = h.document.querySelector(
      '#inspector button[aria-label="Copy SVG"]',
    );
    await click(copyButton);
    assert.deepEqual(copied, [icon.svg]);
    await click(
      h.document.querySelector('#inspector button[aria-label="Download SVG"]'),
    );
    assert.equal(downloads.length, 1);
    assert.equal(downloads[0].filename, icon.filename);
    assert.equal(downloads[0].blob.type, 'image/svg+xml');
    assert.equal(await downloads[0].blob.text(), icon.svg);
    // Clipboard denial must report failure rather than claiming another success.
    h.window.navigator.clipboard.writeText = async () => {
      throw new Error('denied');
    };
    await click(copyButton);
    assert.ok(h.document.body.textContent.includes('Clipboard unavailable'));
    assert.equal(copyButton.hasAttribute('data-copied'), false);
    await click(
      h.document.querySelector('button[aria-label="Close icon details"]'),
    );
    assert.equal(
      new URLSearchParams(h.window.location.search).has('icon'),
      false,
    );
    assert.equal(tile.getAttribute('aria-pressed'), 'false');
  });
}

test('users can filter, save and remove icons, then export the selection or full library', async (t) => {
  const h = await mountApp(t, 'https://example.test/icons/', { actions: true });
  await h.resolveCategories({
    categories: [
      { id: 'buildings', name: 'Buildings', icon: 'home', keywords: ['home'] },
    ],
  });
  const downloads = captureDownloads(t, h.window);
  await click(
    h.document.querySelector(
      '[aria-label="Icon categories"] button[aria-label="Buildings"]',
    ),
  );
  assert.equal(
    new URLSearchParams(h.window.location.search).get('category'),
    'buildings',
  );
  assert.ok(h.tiles.length >= 2 && h.tiles.length < h.catalog.icons.length);
  const selected = h.tiles
    .slice(0, 2)
    .map((tile) => h.catalog.byId.get(tile.dataset.id));
  for (const icon of selected) {
    const tile = h.tiles.find((element) => element.dataset.id === icon.id);
    await click(tile.parentElement.querySelector('[role="checkbox"]'));
  }
  await click(
    [...h.document.querySelectorAll('button')].find((element) =>
      /^Saved/.test(element.textContent.trim()),
    ),
  );
  const dialog = h.document.querySelector('[data-selection-dialog]');
  assert.equal(dialog.querySelectorAll('li').length, 2);
  await click(dialog.querySelector('[data-remove-icon]'));
  assert.equal(dialog.querySelectorAll('li').length, 1);
  await click(button(dialog, 'Download zip'));
  assert.equal(downloads[0].filename, 'fyicons-selected.zip');
  const manifest = async ({ blob }) => {
    assert.equal(blob.type, 'application/zip');
    const archive = unzipSync(new Uint8Array(await blob.arrayBuffer()));
    return JSON.parse(strFromU8(archive['manifest.json']));
  };
  assert.deepEqual(
    (await manifest(downloads[0])).icons.map(({ id }) => id),
    [selected[1].id],
  );
  await click(button(h.document, 'Download'));
  assert.equal(downloads.length, 2);
  assert.equal(downloads[1].filename, 'fyicons.zip');
  assert.deepEqual(
    (await manifest(downloads[1])).icons.map(({ id }) => id).sort(),
    h.catalog.icons.map(({ id }) => id).sort(),
  );
});
