import { readFile } from 'node:fs/promises';
import assert from 'node:assert/strict';
import test from 'node:test';
import { act } from 'react';
import { unzipSync, strFromU8 } from 'fflate';
import releaseHistory from '../../apps/site/src/data/icon-releases.json' with { type: 'json' };
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

async function search(t, h, value) {
  const input = h.document.querySelector('input[aria-label="Search icons"]');
  t.mock.timers.enable({ apis: ['setTimeout'] });
  try {
    await act(async () => {
      Object.getOwnPropertyDescriptor(
        h.window.HTMLInputElement.prototype,
        'value',
      ).set.call(input, value);
      input.dispatchEvent(new h.window.Event('input', { bubbles: true }));
    });
    await act(async () => t.mock.timers.runAll());
    assert.equal(new URL(h.window.location.href).searchParams.get('q'), value);
  } finally {
    t.mock.timers.reset();
  }
}

function waitForCopyButton(h) {
  const selector = '#inspector button[aria-label="Copy SVG"]:enabled';
  return new Promise((resolve, reject) => {
    const observer = new h.window.MutationObserver(check);
    const timeout = setTimeout(() => {
      observer.disconnect();
      reject(new Error('The inspector did not enable Copy SVG'));
    }, 5000);
    function check() {
      const button = h.document.querySelector(selector);
      if (button) {
        clearTimeout(timeout);
        observer.disconnect();
        resolve(button);
      }
    }
    observer.observe(h.document.querySelector('#inspector'), {
      attributes: true,
      childList: true,
      subtree: true,
    });
    check();
  });
}

for (const [sort, label, field] of [
  ['addedAt', 'Newest', 'added'],
  ['updatedAt', 'Last updated', 'updated'],
]) {
  test(`${label} keeps all icons and orders them by descending ${field} release`, async (t) => {
    const h = await mountApp(t, 'https://example.test/icons/');
    await h.resolveCategories();
    const allIds = h.tiles.map((tile) => tile.dataset.id);
    const recentIds = h.tiles
      .filter((tile) => tile.hasAttribute('aria-description'))
      .map((tile) => tile.dataset.id);
    assert.ok(recentIds.length > 0 && recentIds.length < allIds.length);

    const releaseOrder = new Map();
    releaseHistory.releases.forEach((release, index) => {
      for (const id of release[field]) releaseOrder.set(id, index);
    });
    const rank = (id) => releaseOrder.get(id) ?? -1;
    const expectedIds = allIds.toSorted((a, b) => rank(b) - rank(a));

    await click(h.document.querySelector('[data-icon-sort]'));
    await click(h.document.querySelector(`[data-sort-value="${sort}"]`));
    assert.equal(h.tiles.length, allIds.length);
    assert.deepEqual(
      h.tiles.map((tile) => tile.dataset.id),
      expectedIds,
    );
    assert.deepEqual(
      h.tiles
        .filter((tile) => tile.hasAttribute('aria-description'))
        .map((tile) => tile.dataset.id)
        .sort(),
      recentIds.sort(),
    );

    await click(h.document.querySelector('[data-icon-sort]'));
    await click(h.document.querySelector('[data-sort-value="alphabetical"]'));
    assert.deepEqual(
      h.tiles.map((tile) => tile.dataset.id),
      allIds,
    );
  });
}

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
    await search(t, h, 'no-such-fyicon-987654321');
    assert.equal(h.tiles.length, 0);
    await click(h.document.querySelector('button[aria-label="Clear"]'));
    assert.ok(h.tiles.length > 0);
    await search(t, h, icon.name);
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
    const copyButton = await waitForCopyButton(h);
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

test('the grid context menu copies from the tile that opened it', async (t) => {
  const h = await mountApp(t, 'https://example.test/icons/?q=home');
  await h.resolveCategories();
  const copied = [];
  Object.defineProperty(h.window.navigator, 'clipboard', {
    configurable: true,
    value: { writeText: async (text) => copied.push(text) },
  });
  const contextMenu = (target) =>
    target.dispatchEvent(
      new h.window.MouseEvent('contextmenu', {
        bubbles: true,
        cancelable: true,
        button: 2,
      }),
    );
  assert.ok(contextMenu(h.document.querySelector('.icon-grid')));
  const tiles = h.tiles.slice(0, 2);
  assert.equal(tiles.length, 2);
  for (const tile of tiles) {
    const name = h.catalog.getIconDisplayName(
      h.catalog.byId.get(tile.dataset.id),
    );
    await act(async () => contextMenu(tile.querySelector('svg')));
    const menu = h.document.querySelector(
      `[role="menu"][aria-label="${name} actions"]`,
    );
    assert.ok(menu);
    await click(
      [...menu.querySelectorAll('[role="menuitem"]')].find(
        (item) => item.textContent === 'Copy name',
      ),
    );
    assert.equal(copied.at(-1), name);
  }
});

test('a pending SVG copy closes the menu and retries from the same toast', async (t) => {
  const h = await mountApp(t, 'https://example.test/icons/?q=home');
  await h.resolveCategories();
  const tile = h.tiles[0];
  const icon = h.catalog.byId.get(tile.dataset.id);
  const expected = await readFile(
    new URL(`../../packages/fyicons/svg/${icon.filename}`, import.meta.url),
    'utf8',
  );
  const sourceGate = Promise.withResolvers();
  let writeStarted = false;
  const writeFailed = Promise.withResolvers();
  const fetchSource = globalThis.fetch;
  t.mock.method(globalThis, 'fetch', async (...args) => {
    await sourceGate.promise;
    return fetchSource(...args);
  });
  const originalItem = Object.getOwnPropertyDescriptor(
    globalThis,
    'ClipboardItem',
  );
  globalThis.ClipboardItem = class {
    constructor(data) {
      this.data = data;
    }
  };
  t.after(() => {
    if (originalItem)
      Object.defineProperty(globalThis, 'ClipboardItem', originalItem);
    else delete globalThis.ClipboardItem;
  });
  let copied;
  Object.defineProperty(h.window.navigator, 'clipboard', {
    value: {
      async write([item]) {
        writeStarted = true;
        await item.data['text/plain'];
        writeFailed.resolve();
        throw new Error('Clipboard access denied');
      },
      async writeText(text) {
        copied = text;
      },
    },
  });
  await act(async () =>
    tile.dispatchEvent(
      new h.window.MouseEvent('contextmenu', {
        bubbles: true,
        cancelable: true,
        button: 2,
      }),
    ),
  );
  t.mock.timers.enable({ apis: ['setTimeout'] });
  await click(
    [...h.document.querySelectorAll('[role="menuitem"]')].find(
      (item) => item.textContent === 'Copy SVG',
    ),
  );
  assert.equal(writeStarted, true);
  assert.equal(
    h.document.querySelector('[role="menu"]:not([data-ending-style])'),
    null,
  );
  await act(async () => t.mock.timers.tick(149));
  const currentToast = () => h.document.querySelector('[data-slot="toast"]');
  assert.equal(currentToast(), null);
  await act(async () => t.mock.timers.tick(1));
  const toast = currentToast();
  assert.match(toast.textContent, /Copying/);

  await act(async () => {
    sourceGate.resolve();
    await writeFailed.promise;
  });
  assert.equal(currentToast(), toast);
  assert.match(toast.textContent, /clipboard/);
  await click(
    [...toast.querySelectorAll('button')].find(
      (button) => button.textContent === 'Retry',
    ),
  );
  assert.equal(copied, expected);
  assert.equal(currentToast(), toast);
  assert.match(toast.textContent, /copied/);
  assert.doesNotMatch(toast.textContent, /Retry/);
});

test('users can filter, save and remove icons, then export the selection or full library', async (t) => {
  const h = await mountApp(t, 'https://example.test/icons/', { actions: true });
  await h.resolveCategories({
    categories: [
      { id: 'buildings', name: 'Buildings', icon: 'home', keywords: ['home'] },
    ],
  });
  const { downloads, nextDownload } = captureDownloads(t, h.window);
  let copiedCommand;
  Object.defineProperty(h.window.navigator, 'clipboard', {
    configurable: true,
    value: {
      writeText: async (text) => {
        copiedCommand = text;
      },
    },
  });
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
  const [jsxTab, shadcnTab] = dialog.querySelectorAll('[role="tab"]');
  const copyShadcnCommand = () =>
    click(
      dialog
        .querySelector('pre[aria-label="shadcn command for selected icons"]')
        ?.closest('[data-slot="code-block"]')
        ?.querySelector('button[aria-label="Copy code"]'),
    );
  assert.equal(dialog.querySelectorAll('li').length, 2);
  assert.equal(jsxTab.getAttribute('aria-selected'), 'true');
  assert.equal(shadcnTab.getAttribute('aria-selected'), 'false');
  await click(shadcnTab);
  assert.equal(shadcnTab.getAttribute('aria-selected'), 'true');
  await copyShadcnCommand();
  assert.equal(
    copiedCommand,
    `npx shadcn@latest add robertweisbecker/fyicons/${selected[0].name} robertweisbecker/fyicons/${selected[1].name}`,
  );
  await click(dialog.querySelector('[data-remove-icon]'));
  assert.equal(dialog.querySelectorAll('li').length, 1);
  await copyShadcnCommand();
  assert.equal(
    copiedCommand,
    `npx shadcn@latest add robertweisbecker/fyicons/${selected[1].name}`,
  );
  await click(jsxTab);
  const jsx = dialog.querySelector(
    'pre[aria-label="React JSX for selected icons"]',
  ).textContent;
  assert.ok(jsx.includes(`<${selected[1].componentName} />`));
  assert.ok(!jsx.includes(`<${selected[0].componentName} />`));
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
  const { blob } = downloads[0];
  assert.equal(blob.type, 'application/zip');
  const archive = unzipSync(new Uint8Array(await blob.arrayBuffer()));
  const manifest = JSON.parse(strFromU8(archive['manifest.json']));
  assert.ok(!Object.hasOwn(manifest, 'categories'));
  const { categories, ...expectedIcon } = selected[1];
  assert.deepEqual(categories, ['buildings']);
  assert.deepEqual(manifest.icons, [expectedIcon]);
  const fullDownload = nextDownload();
  await click(h.document.querySelector('button[data-download-icons="all"]'));
  await act(async () => {
    await fullDownload;
  });
  assert.equal(downloads.length, 2);
  assert.equal(downloads[1].filename, 'fyicons.zip');
  assert.equal(downloads[1].href, 'https://example.test/downloads/fyicons.zip');
  assert.equal(downloads[1].blob, undefined, 'full ZIP is served as a file');
  await h.remount();
  await click(h.document.querySelector('button[data-selection-trigger]'));
  const restored = h.document.querySelectorAll(
    '[data-selection-dialog] [data-remove-icon]',
  );
  assert.deepEqual(
    [...restored].map((button) => button.getAttribute('aria-label')),
    [`Remove ${h.catalog.getIconDisplayName(selected[1])}`],
    'only the remaining icon is restored from storage',
  );
});
