import test from 'node:test';
import assert from 'node:assert/strict';
import {
  emptyLibraryState,
  libraryHash,
  readLibraryHash,
} from '../src/lib/library-url.ts';

const categories = new Set(['design', 'files', 'shapes-symbols']);
const icons = new Set(['bezier', 'pencil-ruler', 'file-zip']);
const read = (hash) => readLibraryHash(hash, categories, icons);

test('category, search, and explicit icon links work independently or together', () => {
  for (const category of ['all', 'design'])
    for (const query of ['', 'pen'])
      for (const icon of [null, 'pencil-ruler']) {
        const state = { category, query, icon };
        assert.deepEqual(read(libraryHash(state)), state);
      }
  assert.equal(libraryHash(emptyLibraryState), '');
  assert.equal(
    libraryHash({ category: 'design', query: 'pen', icon: 'pencil-ruler' }),
    '#category=design&q=pen&icon=pencil-ruler',
  );
});

test('search text round-trips without being interpreted as other hash parameters', () => {
  for (const query of [
    'a & b',
    'C++',
    '#icon=bezier',
    '100% / ? =',
    'café 日本語',
    ' pen ',
  ]) {
    const state = { ...emptyLibraryState, query };
    assert.deepEqual(read(libraryHash(state)), state);
  }
});

test('unrecognized categories and icon names fall back independently', () => {
  assert.deepEqual(read('#category=removed&q=pen&icon=bezier'), {
    category: 'all',
    query: 'pen',
    icon: 'bezier',
  });
  assert.deepEqual(read('#category=design&q=pen&icon=old-icon-name'), {
    category: 'design',
    query: 'pen',
    icon: null,
  });
  for (const hash of [
    '',
    '#',
    '#main-content',
    '#library',
    '#category=%ZZ&icon=%E0%A4%A',
  ])
    assert.deepEqual(read(hash), emptyLibraryState);
});

test('a valid explicit icon remains available independently of category and search', () => {
  assert.deepEqual(read('#category=files&q=zip&icon=bezier'), {
    category: 'files',
    query: 'zip',
    icon: 'bezier',
  });
});
