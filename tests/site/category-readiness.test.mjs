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
  assert.ok(h.document.querySelector('input[aria-label="Search icons"]'));
  assert.equal(h.tiles.length, h.catalog.icons.length);
  assert.ok(h.document.querySelector('[role="alert"]'));
});

test('icon browser remains useful while a linked category loads', async (t) => {
  const h = await mountApp(t, 'https://example.test/icons/?category=buildings');
  assert.ok(h.document.querySelector('input[aria-label="Search icons"]'));
  assert.equal(h.tiles.length, h.catalog.icons.length);
  await h.resolveCategories(config);
  const categorized = h.catalog.icons.filter(({ categories }) =>
    categories.includes('buildings'),
  );
  assert.ok(
    categorized.length > 0 && categorized.length < h.catalog.icons.length,
  );
  assert.deepEqual(
    h.tiles.map((tile) => tile.dataset.id).sort(),
    categorized.map(({ id }) => id).sort(),
  );
});

test('category-label search results refresh after categories arrive', async (t) => {
  const h = await mountApp(t, 'https://example.test/icons/?q=buildings');
  assert.equal(h.tiles.length, 0);
  assert.ok(h.document.body.textContent.includes('No matching icons'));
  await h.resolveCategories(config);
  const categorized = h.catalog.icons.filter(({ categories }) =>
    categories.includes('buildings'),
  );
  assert.ok(categorized.length > 0);
  assert.deepEqual(
    h.tiles.map((tile) => tile.dataset.id).sort(),
    categorized.map(({ id }) => id).sort(),
  );
  assert.equal(
    h.document.querySelector('input[aria-label="Search icons"]').value,
    'buildings',
  );
});
