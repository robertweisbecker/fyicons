import test from 'node:test';
import assert from 'node:assert/strict';
import { mountNavigation } from './helpers/library-navigation-harness.mjs';
import { mountApp } from './helpers/app-readiness-harness.mjs';

const config = {
  categories: [
    { id: 'buildings', name: 'Buildings', icon: 'home', keywords: ['home'] },
  ],
};

test('category request failure leaves every icon available', async (t) => {
  const h = await mountNavigation(t, undefined, { pending: true });
  await h.rejectCategories();
  assert.equal(h.state.categoryReadiness.status, 'error');
  assert.match(
    h.state.categoryReadiness.error,
    /All icons are still available/,
  );
  assert.ok(
    h.catalog.icons.every(({ categories }) =>
      categories.includes('uncategorized'),
    ),
  );
  assert.equal(h.catalog.getManifest().icons.length, h.catalog.icons.length);
});

test('actual App renders useful library content before categories resolve', async (t) => {
  const h = await mountApp(
    t,
    'https://example.test/library/#category=buildings',
  );
  assert.equal(h.readiness.getCategoryReadiness().status, 'loading');
  assert.equal(
    h.requests.length,
    1,
    'StrictMode effect replay shares one request',
  );
  assert.equal(h.readiness.loadCategories(), h.readiness.loadCategories());
  assert.equal(h.requests[0].url, '/icon-categories.json');
  assert.equal(h.requests[0].options.cache, 'no-store');
  assert.ok(h.document.querySelector('header'));
  assert.ok(h.document.querySelector('input[aria-label="Search icons"]'));
  assert.equal(h.tiles.length, h.catalog.icons.length);
  assert.equal(
    h.count,
    `${h.catalog.icons.length} of ${h.catalog.icons.length} icons`,
  );
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
    `${categorized.length} of ${h.catalog.icons.length} icons`,
  );
  assert.ok(h.document.querySelector('[aria-label="Buildings"]'));
});

test('actual App category-label search results and rendered counts refresh after arrival', async (t) => {
  const h = await mountApp(t, 'https://example.test/library/#q=buildings');
  assert.equal(h.tiles.length, 0);
  assert.equal(h.count, `0 of ${h.catalog.icons.length} icons`);
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
    `${categorized.length} of ${h.catalog.icons.length} icons`,
  );
  assert.equal(
    h.document.querySelector('input[aria-label="Search icons"]').value,
    'buildings',
  );
});
