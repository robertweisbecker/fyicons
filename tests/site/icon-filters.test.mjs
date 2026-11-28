import test from 'node:test';
import assert from 'node:assert/strict';
import {
  emptyIconFilters,
  iconFilterSearch,
  readIconFilters,
} from '../../apps/site/src/lib/icon-filters.ts';

const categories = new Set(['design', 'files', 'shapes-symbols']);
const icons = new Set(['bezier', 'pencil-ruler', 'file-zip']);
const read = (search) => readIconFilters(search, categories, icons);

test('category, search, and explicit icon links work independently or together', () => {
  for (const category of ['all', 'design'])
    for (const query of ['', 'pen'])
      for (const icon of [null, 'pencil-ruler']) {
        const state = { category, query, icon };
        assert.deepEqual(read(iconFilterSearch(state)), state);
      }
  assert.equal(iconFilterSearch(emptyIconFilters), '');
  assert.equal(
    iconFilterSearch({
      category: 'design',
      query: 'pen',
      icon: 'pencil-ruler',
    }),
    '?category=design&q=pen&icon=pencil-ruler',
  );
});

test('search text round-trips without being interpreted as other query parameters', () => {
  for (const query of [
    'a & b',
    'C++',
    '#icon=bezier',
    '100% / ? =',
    'café 日本語',
    ' pen ',
  ]) {
    const state = { ...emptyIconFilters, query };
    assert.deepEqual(read(iconFilterSearch(state)), state);
  }
});

test('unrecognized categories and icon names fall back independently', () => {
  assert.deepEqual(read('?category=removed&q=pen&icon=bezier'), {
    category: 'all',
    query: 'pen',
    icon: 'bezier',
  });
  assert.deepEqual(read('?category=design&q=pen&icon=old-icon-name'), {
    category: 'design',
    query: 'pen',
    icon: null,
  });
  for (const hash of [
    '',
    '?',
    '?unrecognized=value',
    '?category=%ZZ&icon=%E0%A4%A',
  ])
    assert.deepEqual(read(hash), emptyIconFilters);
});

test('category links retain the requested category until metadata arrives', () => {
  assert.equal(
    readIconFilters('?category=buildings', null, icons).category,
    'buildings',
  );
  assert.equal(
    readIconFilters('?category=buildings', categories, icons).category,
    'all',
  );
});
