import test from 'node:test';
import assert from 'node:assert/strict';
import { mountApp } from './helpers/app-readiness-harness.mjs';

const config = {
  categories: [
    { id: 'buildings', name: 'Buildings', icon: 'home', keywords: ['home'] },
  ],
};

test('category request failure leaves every icon available', async (t) => {
  const h = await mountApp(t, 'https://example.test/icons/');
  await h.rejectCategories();
  assert.equal(h.readiness.getCategoryReadiness().status, 'error');
  assert.match(
    h.readiness.getCategoryReadiness().error,
    /All icons are still available/,
  );
  assert.ok(
    h.catalog.icons.every(({ categories }) =>
      categories.includes('uncategorized'),
    ),
  );
  assert.equal(h.catalog.getManifest().icons.length, h.catalog.icons.length);
});

test('icon browser renders useful icon content before categories resolve', async (t) => {
  const h = await mountApp(t, 'https://example.test/icons/?category=buildings');
  assert.equal(h.readiness.getCategoryReadiness().status, 'loading');
  assert.equal(
    h.requests.length,
    1,
    'StrictMode effect replay shares one request',
  );
  assert.equal(h.readiness.loadCategories(), h.readiness.loadCategories());
  assert.equal(h.requests[0].url, '/icon-categories.json');
  assert.equal(h.requests[0].options.cache, 'no-store');
  assert.ok(h.document.querySelector('input[aria-label="Search icons"]'));
  assert.equal(h.tiles.length, h.catalog.icons.length);
  const total = h.catalog.icons.length.toLocaleString('en-US');
  assert.equal(h.count, `${total} / ${total}`);
  await h.resolveCategories(config);
  assert.equal(h.requests.length, 1);
  assert.equal(h.readiness.getCategoryReadiness().status, 'ready');
  const categorized = h.catalog.icons.filter(({ categories }) =>
    categories.includes('buildings'),
  );
  assert.ok(
    categorized.length > 0 && categorized.length < h.catalog.icons.length,
  );
  assert.equal(h.tiles.length, categorized.length);
  assert.equal(
    h.count,
    `${categorized.length.toLocaleString('en-US')} / ${total}`,
  );
  assert.ok(h.document.querySelector('[aria-label="Buildings"]'));
});

test('icon browser category-label search results and rendered counts refresh after arrival', async (t) => {
  const h = await mountApp(t, 'https://example.test/icons/?q=buildings');
  assert.equal(h.tiles.length, 0);
  const total = h.catalog.icons.length.toLocaleString('en-US');
  assert.equal(h.count, `0 / ${total}`);
  assert.ok(h.document.body.textContent.includes('No matching icons'));
  await h.resolveCategories(config);
  const categorized = h.catalog.icons.filter(({ categories }) =>
    categories.includes('buildings'),
  );
  assert.ok(categorized.length > 0);
  assert.equal(h.tiles.length, categorized.length);
  assert.deepEqual(
    h.tiles.map((tile) => tile.dataset.id).sort(),
    categorized.map(({ id }) => id).sort(),
  );
  assert.equal(
    h.count,
    `${categorized.length.toLocaleString('en-US')} / ${total}`,
  );
  assert.equal(
    h.document.querySelector('input[aria-label="Search icons"]').value,
    'buildings',
  );
});
