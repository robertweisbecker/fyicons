import test from 'node:test';
import assert from 'node:assert/strict';
import { mountNavigation } from './helpers/library-navigation-harness.mjs';

function snapshot(state) {
  const { page, category, query, icon, inspectedId } = state;
  return { page, category, query, icon, inspectedId };
}
const empty = {
  page: 'library',
  category: 'all',
  query: '',
  icon: null,
  inspectedId: null,
};
function methods(harness) {
  return harness.writes.map(({ method }) => method);
}

for (const base of ['/', '/fyicons/']) {
  test(`mount restores the real catalog selection at ${base}`, async (t) => {
    const h = await mountNavigation(
      t,
      `https://example.test${base}library/#q=home&icon=home`,
    );
    assert.deepEqual(snapshot(h.state), {
      ...empty,
      query: 'home',
      icon: 'home',
      inspectedId: h.catalog.byName.get('home').id,
    });
    assert.equal(h.length, 1);
    assert.deepEqual(h.writes, []);
    h.act((nav) => nav.changePage('examples'));
    assert.equal(h.href, `https://example.test${base}examples/`);
    assert.deepEqual(methods(h), ['pushState']);
  });
}

test('search updates immediately and replaces once after the latest 200ms delay', async (t) => {
  const h = await mountNavigation(t);
  h.act((nav) => nav.setQuery('h'));
  assert.equal(h.state.query, 'h');
  assert.equal(h.href, 'https://example.test/library/');
  h.advance(150);
  h.act((nav) => nav.setQuery('home & plus'));
  h.advance(199);
  assert.deepEqual(h.writes, []);
  h.advance(1);
  assert.equal(h.href, 'https://example.test/library/#q=home+%26+plus');
  assert.equal(h.length, 1);
  assert.deepEqual(methods(h), ['replaceState']);
  h.act((nav) => nav.setQuery('home & plus'));
  h.advance(200);
  assert.equal(h.writes.length, 1, 'identical URLs do not write history');
});

test('Back and Forward restore entries and cancel pending search without history writes', async (t) => {
  const h = await mountNavigation(t, 'https://example.test/fyicons/library/');
  const category = h.catalog.categories[0].id;
  h.act((nav) => nav.setCategory(category));
  assert.equal(h.length, 2);
  h.act((nav) => nav.setQuery('pending back'));
  h.traverse('back');
  assert.deepEqual(snapshot(h.state), empty);
  h.advance(200);
  assert.equal(h.href, 'https://example.test/fyicons/library/');
  assert.deepEqual(methods(h), ['pushState']);

  h.act((nav) => nav.setQuery('pending forward'));
  h.traverse('forward');
  assert.deepEqual(snapshot(h.state), { ...empty, category });
  h.advance(200);
  assert.equal(
    h.href,
    `https://example.test/fyicons/library/#category=${category}`,
  );
  assert.equal(h.length, 2);
  assert.deepEqual(methods(h), ['pushState']);
});

test('category selection clears a pending query and pushes a restorable entry', async (t) => {
  const h = await mountNavigation(
    t,
    'https://example.test/library/#q=committed',
  );
  const category = h.catalog.categories[0].id;
  h.act((nav) => nav.setQuery('stale'));
  h.act((nav) => nav.setCategory(category));
  assert.deepEqual(snapshot(h.state), { ...empty, category });
  assert.equal(h.length, 2);
  assert.deepEqual(methods(h), ['pushState']);
  h.advance(200);
  assert.equal(h.href, `https://example.test/library/#category=${category}`);
  h.traverse('back');
  assert.equal(h.state.query, 'committed');
  assert.deepEqual(methods(h), ['pushState']);
});

test('page navigation cancels pending writes and preserves the latest query on return', async (t) => {
  const h = await mountNavigation(t, 'https://example.test/library/#icon=home');
  h.act((nav) => nav.setQuery('latest'));
  h.act((nav) => nav.changePage('examples'));
  assert.deepEqual(snapshot(h.state), {
    ...empty,
    page: 'examples',
    query: 'latest',
  });
  h.advance(200);
  assert.equal(h.href, 'https://example.test/examples/');
  h.act((nav) => nav.changePage('library'));
  assert.equal(h.href, 'https://example.test/library/#q=latest');
  assert.equal(h.length, 3);
  assert.deepEqual(methods(h), ['pushState', 'pushState']);
  h.traverse('back');
  assert.deepEqual(snapshot(h.state), { ...empty, page: 'examples' });
  assert.deepEqual(methods(h), ['pushState', 'pushState']);
});

test('reset clears query, category and inspection by replacing the current entry', async (t) => {
  const h = await mountNavigation(
    t,
    'https://example.test/library/#category=uncategorized&q=home&icon=home',
  );
  h.act((nav) => nav.setQuery('stale'));
  h.act((nav) => nav.reset());
  assert.deepEqual(snapshot(h.state), empty);
  assert.equal(h.href, 'https://example.test/library/');
  assert.equal(h.length, 1);
  assert.deepEqual(methods(h), ['replaceState']);
  h.advance(200);
  assert.equal(h.href, 'https://example.test/library/');
  assert.deepEqual(methods(h), ['replaceState']);
});

test('temporary inspections replace explicit icons and share uses the latest query and inspection', async (t) => {
  const h = await mountNavigation(t, 'https://example.test/library/#icon=home');
  const [first, latest] = h.catalog.icons;
  h.act((nav) => nav.inspect(first.id));
  assert.equal(h.state.icon, null);
  assert.equal(h.state.inspectedId, first.id);
  assert.equal(h.href, 'https://example.test/library/');
  h.act((nav) => nav.inspect(latest.id));
  assert.equal(h.state.inspectedId, latest.id);
  assert.equal(h.length, 1);
  assert.deepEqual(methods(h), ['replaceState']);
  let shared;
  h.act((nav) => {
    nav.setQuery('first');
    nav.setQuery('latest & query');
    shared = nav.share();
  });
  const expected = new URL('https://example.test/library/');
  expected.hash = new URLSearchParams({
    q: 'latest & query',
    icon: latest.name,
  }).toString();
  assert.equal(shared, expected.href);
  assert.equal(h.href, shared);
  assert.equal(h.state.icon, latest.name);
  assert.equal(h.length, 1);
  assert.deepEqual(methods(h), ['replaceState', 'replaceState']);
  h.advance(200);
  assert.equal(h.href, shared);
  assert.equal(h.writes.length, 2);
});

test('inspection during pending search commits the latest query and cancels the stale icon URL', async (t) => {
  const h = await mountNavigation(t, 'https://example.test/library/#icon=home');
  const icon = h.catalog.icons[0];
  h.act((nav) => nav.setQuery('latest'));
  h.act((nav) => nav.inspect(icon.id));
  assert.equal(h.href, 'https://example.test/library/#q=latest');
  assert.deepEqual(snapshot(h.state), {
    ...empty,
    query: 'latest',
    inspectedId: icon.id,
  });
  h.advance(200);
  assert.equal(h.href, 'https://example.test/library/#q=latest');
  assert.deepEqual(methods(h), ['replaceState']);
});

for (const page of ['library', 'home', 'examples']) {
  test(`opening a search result from ${page} clears filters and ${page === 'library' ? 'replaces' : 'pushes'} history`, async (t) => {
    const path = page === 'home' ? '' : `${page}/`;
    const h = await mountNavigation(t, `https://example.test/fyicons/${path}`);
    const icon = h.catalog.icons[0];
    h.act((nav) => nav.setCategory(h.catalog.categories[0].id));
    h.act((nav) => nav.setQuery('pending'));
    const before = h.length;
    h.writes.length = 0;
    h.act((nav) => nav.openSearchResult(icon.id));
    assert.deepEqual(snapshot(h.state), { ...empty, inspectedId: icon.id });
    assert.equal(h.href, 'https://example.test/fyicons/library/');
    assert.equal(h.length, before + (page === 'library' ? 0 : 1));
    assert.deepEqual(methods(h), [
      page === 'library' ? 'replaceState' : 'pushState',
    ]);
    h.advance(200);
    assert.equal(h.href, 'https://example.test/fyicons/library/');
    assert.equal(h.writes.length, 1);
  });
}

for (const page of ['library', 'examples']) {
  test(`legacy #${page} is normalized on mount and hashchange by replacing history`, async (t) => {
    const h = await mountNavigation(t, `https://example.test/fyicons/#${page}`);
    assert.equal(h.state.page, page);
    assert.equal(h.href, `https://example.test/fyicons/${page}/`);
    assert.equal(h.length, 1);
    assert.deepEqual(methods(h), ['replaceState']);
    h.act((nav) => nav.changePage('home'));
    h.act((nav) => nav.setQuery('stale'));
    h.hash(`#${page}`);
    assert.deepEqual(snapshot(h.state), { ...empty, page });
    assert.equal(h.href, `https://example.test/fyicons/${page}/`);
    h.advance(200);
    assert.equal(h.href, `https://example.test/fyicons/${page}/`);
    assert.deepEqual(methods(h), ['replaceState', 'pushState', 'replaceState']);
  });
}

test('ordinary hashchange restores query and explicit inspection and cancels pending search', async (t) => {
  const h = await mountNavigation(t);
  h.act((nav) => nav.setQuery('stale'));
  h.hash('#q=restored&icon=home');
  assert.deepEqual(snapshot(h.state), {
    ...empty,
    query: 'restored',
    icon: 'home',
    inspectedId: h.catalog.byName.get('home').id,
  });
  h.advance(200);
  assert.equal(h.href, 'https://example.test/library/#q=restored&icon=home');
  assert.deepEqual(h.writes, []);
});

test('native #main-content cancels pending search without resetting hook state or writing history', async (t) => {
  const h = await mountNavigation(t);
  h.act((nav) => nav.setQuery('latest'));
  h.act((nav) => nav.inspect(h.catalog.icons[0].id));
  h.act((nav) => nav.setQuery('pending'));
  const before = snapshot(h.state);
  h.writes.length = 0;
  h.hash('#main-content');
  assert.deepEqual(snapshot(h.state), before);
  h.advance(200);
  assert.equal(h.href, 'https://example.test/library/#main-content');
  assert.deepEqual(h.writes, []);
});

test('unmount cancels pending search and removes history and hash listeners', async (t) => {
  const h = await mountNavigation(t);
  h.act((nav) => nav.setQuery('pending'));
  h.unmount();
  h.advance(200);
  assert.equal(h.href, 'https://example.test/library/');
  h.hash('#examples');
  assert.equal(h.href, 'https://example.test/library/#examples');
  assert.deepEqual(h.writes, []);
});
