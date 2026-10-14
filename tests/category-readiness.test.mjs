import test from 'node:test';
import assert from 'node:assert/strict';
import { mountNavigation } from './helpers/library-navigation-harness.mjs';
import { mountApp } from './helpers/app-readiness-harness.mjs';

const config = {
  categories: [
    { id: 'buildings', name: 'Buildings', icon: 'home', keywords: ['home'] },
  ],
};

test('pending categories retain catalog records, then publish coherent metadata once', async (t) => {
  const h = await mountNavigation(t, 'https://example.test/fyicons/library/', {
    pending: true,
  });
  const loading = h.readiness.getCategoryReadiness();
  assert.equal(loading.status, 'loading');
  assert.equal(h.requests.length, 1);
  assert.equal(h.requests[0].url, '/fyicons/icon-categories.json');
  assert.equal(h.requests[0].options.cache, 'no-store');
  assert.ok(h.requests[0].options.signal instanceof AbortSignal);
  assert.equal(h.requests[0].options.signal.aborted, false);
  const home = h.catalog.byName.get('home');
  const before = { id: home.id, svg: home.svg, aliases: home.aliases };
  let publications = 0;
  const unsubscribe = h.readiness.subscribeCategoryReadiness(() => {
    publications++;
    assert.equal(h.catalog.getIconCategoryLabel(home), 'Buildings');
    assert.equal(
      h.catalog.getManifest().icons.find(({ id }) => id === home.id)
        .categories[0],
      'buildings',
    );
  });
  await h.resolveCategories(config);
  unsubscribe();
  assert.equal(publications, 1);
  assert.equal(h.readiness.getCategoryReadiness().status, 'ready');
  assert.equal(h.state.categoryReadiness.version, 1);
  assert.equal(h.catalog.byId.get(home.id), home);
  assert.deepEqual(
    { id: home.id, svg: home.svg, aliases: home.aliases },
    before,
  );
  assert.equal(
    h.catalog.categories.find(({ id }) => id === 'buildings').name,
    'Buildings',
  );
  const settled = h.readiness.getCategoryReadiness();
  await h.readiness.loadCategories(() => {
    throw new Error('must not refetch');
  });
  assert.equal(h.readiness.getCategoryReadiness(), settled);
  assert.equal(h.requests.length, 1);
});

for (const failure of ['network', 'http', 'invalid rules']) {
  test(`${failure} failure publishes an error while keeping every icon available`, async (t) => {
    const h = await mountNavigation(t, undefined, { pending: true });
    if (failure === 'network') await h.rejectCategories();
    else
      await h.resolveCategories(
        failure === 'http' ? config : { categories: null },
        failure === 'http' ? 503 : 200,
      );
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
}

test('StrictMode effect replay starts one request and receives one settled snapshot', async (t) => {
  const h = await mountNavigation(t, undefined, {
    pending: true,
    strict: true,
  });
  assert.equal(h.requests.length, 1);
  const first = h.readiness.loadCategories();
  assert.equal(first, h.readiness.loadCategories());
  await h.resolveCategories(config);
  assert.equal(h.requests.length, 1);
  assert.equal(h.state.categoryReadiness.status, 'ready');
});

test('actual App renders useful library content before categories resolve', async (t) => {
  const h = await mountApp(
    t,
    'https://example.test/library/#category=buildings',
  );
  assert.equal(h.readiness.getCategoryReadiness().status, 'loading');
  assert.equal(h.requests.length, 1);
  assert.ok(h.document.querySelector('header'));
  assert.ok(h.document.querySelector('input[aria-label="Search icons"]'));
  assert.equal(h.tiles.length, h.catalog.icons.length);
  assert.equal(
    h.count,
    `${h.catalog.icons.length} of ${h.catalog.icons.length} icons`,
  );
  await h.resolveCategories(config);
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
