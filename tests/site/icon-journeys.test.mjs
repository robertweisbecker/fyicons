import { readFile } from 'node:fs/promises';
import assert from 'node:assert/strict';
import test from 'node:test';
import { act } from 'react';
import { unzipSync, strFromU8 } from 'fflate';
import { mountApp } from './helpers/app-readiness-harness.mjs';

function captureDownloads(t, window) {
  const blobs = new Map();
  const downloads = [];
  const listeners = new Set();
  t.mock.method(URL, 'createObjectURL', (blob) => {
    const url = `blob:download-${blobs.size}`;
    blobs.set(url, blob);
    return url;
  });
  t.mock.method(URL, 'revokeObjectURL', () => {});
  t.mock.method(window.HTMLAnchorElement.prototype, 'click', function () {
    downloads.push({
      filename: this.download,
      href: this.href,
      blob: blobs.get(this.href),
    });
    for (const resolve of listeners) resolve();
    listeners.clear();
  });
  function nextDownload() {
    return new Promise((resolve, reject) => {
      const timeout = setTimeout(
        () => reject(new Error('Download did not complete')),
        10_000,
      );
      t.after(() => clearTimeout(timeout));
      listeners.add(() => {
        clearTimeout(timeout);
        resolve();
      });
    });
  }
  return { downloads, nextDownload };
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

test('Newest shows the same recent additions as tile indicators and other sorting restores older icons', async (t) => {
  const h = await mountApp(t, 'https://example.test/icons/');
  await h.resolveCategories();
  const allIds = h.tiles.map((tile) => tile.dataset.id);
  const recentIds = h.tiles
    .filter((tile) => tile.hasAttribute('aria-description'))
    .map((tile) => tile.dataset.id);
  assert.ok(recentIds.length > 0 && recentIds.length < allIds.length);
  await click(h.document.querySelector('[data-icon-sort]'));
  await click(h.document.querySelector('[data-sort-value="addedAt"]'));
  assert.deepEqual(
    h.tiles.map((tile) => tile.dataset.id).sort(),
    recentIds.sort(),
  );
  assert.ok(h.tiles.every((tile) => tile.hasAttribute('aria-description')));
  await click(h.document.querySelector('[data-icon-sort]'));
  await click(h.document.querySelector('[data-sort-value="alphabetical"]'));
  assert.deepEqual(
    h.tiles.map((tile) => tile.dataset.id).sort(),
    allIds.sort(),
  );
});

for (const mobile of [false, true]) {
  test(`${mobile ? 'mobile' : 'desktop'} users can find, inspect, copy and download an icon`, async (t) => {
    const h = await mountApp(t, 'https://example.test/icons/', { mobile });
    await h.resolveCategories();
    const { downloads } = captureDownloads(t, h.window);
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
      new URLSearchParams(h.window.location.search).has('icon'),
      false,
    );
    const title = h.document.querySelector(
      `#inspector button[aria-label="Copy link to ${h.catalog.getIconDisplayName(icon)}"]`,
    );
    h.window.navigator.clipboard.writeText = async () => {
      throw new Error('denied');
    };
    await click(title);
    assert.equal(
      new URLSearchParams(h.window.location.search).has('icon'),
      false,
    );
    h.window.navigator.clipboard.writeText = async (text) => copied.push(text);
    await click(title);
    assert.equal(
      new URLSearchParams(h.window.location.search).get('icon'),
      icon.name,
    );
    assert.equal(new URL(copied.at(-1)).searchParams.get('icon'), icon.name);
    copied.length = 0;
    if (mobile) {
      assert.equal(
        h.document
          .querySelector('button[aria-label="Expand preview"]')
          .getAttribute('aria-expanded'),
        'false',
        'Copying the title must not expand the drawer',
      );
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
    let copyButton;
    for (let attempt = 0; attempt < 100; attempt++) {
      await act(async () => {
        await new Promise((resolve) => setTimeout(resolve, 10));
      });
      copyButton = h.document.querySelector(
        '#inspector button[aria-label="Copy SVG"]',
      );
      if (copyButton && !copyButton.disabled) break;
    }
    const sourceSvg = await readFile(
      new URL(`../../packages/fyicons/svg/${icon.filename}`, import.meta.url),
      'utf8',
    );
    await click(copyButton);
    assert.deepEqual(copied, [sourceSvg]);
    await click(
      h.document.querySelector('#inspector button[aria-label="Download SVG"]'),
    );
    assert.equal(downloads.length, 1);
    assert.equal(downloads[0].filename, icon.filename);
    assert.equal(
      downloads[0].href,
      `https://example.test/icon-sources/${icon.sha256}.svg`,
    );
    assert.equal(downloads[0].blob, undefined);
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
      new URLSearchParams(h.window.location.search).get('icon'),
      icon.name,
      'Closing the inspector must not change the shared URL',
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
  const { downloads, nextDownload } = captureDownloads(t, h.window);
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
  await click(h.document.querySelector('button[data-selection-trigger]'));
  const dialog = h.document.querySelector('[data-selection-dialog]');
  assert.equal(dialog.querySelectorAll('li').length, 2);
  await click(dialog.querySelector('[data-remove-icon]'));
  assert.equal(dialog.querySelectorAll('li').length, 1);
  // Hold the source response to exercise real asynchronous packaging, rather than
  // assuming React's click flush also finishes fetches and Web Crypto work.
  const sourceGate = Promise.withResolvers();
  const fetchSource = globalThis.fetch;
  t.mock.method(globalThis, 'fetch', async (url, ...args) => {
    if (String(url).includes('/icon-sources/')) await sourceGate.promise;
    return fetchSource(url, ...args);
  });
  const selectedDownload = nextDownload();
  await click(dialog.querySelector('button[data-download-icons="selected"]'));
  assert.equal(
    downloads.length,
    0,
    'no archive downloads before its sources resolve',
  );
  await act(async () => {
    sourceGate.resolve();
    await selectedDownload;
  });
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
  const fullDownload = nextDownload();
  await click(h.document.querySelector('button[data-download-icons="all"]'));
  await act(async () => {
    await fullDownload;
  });
  assert.equal(downloads.length, 2);
  assert.equal(downloads[1].filename, 'fyicons.zip');
  assert.equal(downloads[1].href, 'https://example.test/downloads/fyicons.zip');
  assert.equal(downloads[1].blob, undefined, 'full ZIP is served as a file');
});
