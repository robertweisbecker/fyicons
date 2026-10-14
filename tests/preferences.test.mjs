import test from 'node:test';
import assert from 'node:assert/strict';
import { isStringArray, readPreference } from '../src/lib/preferences.ts';

const currentKey = 'fyicons-shortlist-v1';
const legacyKey = 'astra-shortlist-v1';

function withStorage(storage, run) {
  const original = Object.getOwnPropertyDescriptor(globalThis, 'localStorage');
  try {
    Object.defineProperty(globalThis, 'localStorage', {
      configurable: true,
      value: storage,
    });
    return run();
  } finally {
    if (original) Object.defineProperty(globalThis, 'localStorage', original);
    else delete globalThis.localStorage;
  }
}

function readSelections(entries, reads = []) {
  return withStorage(
    {
      getItem(key) {
        reads.push(key);
        return entries[key] ?? null;
      },
    },
    () => readPreference(currentKey, [], isStringArray),
  );
}

for (const [name, value] of [
  ['object', {}],
  ['boolean', true],
  ['number', 42],
  ['string', 'icon-id'],
  ['null', null],
  ['mixed array', ['icon-id', 42]],
]) {
  test(`saved selections reject a ${name}`, () => {
    assert.deepEqual(
      readSelections({ [currentKey]: JSON.stringify(value) }),
      [],
    );
  });
}

for (const value of [[], ['current-id', 'legacy-id', 'current-id']]) {
  test(`saved selections preserve ${value.length ? 'valid' : 'empty'} arrays`, () => {
    assert.deepEqual(
      readSelections({ [currentKey]: JSON.stringify(value) }),
      value,
    );
  });
}

test('malformed JSON falls back to empty selections', () => {
  assert.deepEqual(readSelections({ [currentKey]: '[broken' }), []);
});

test('missing current and legacy storage falls back to empty selections', () => {
  const reads = [];
  assert.deepEqual(readSelections({}, reads), []);
  assert.deepEqual(reads, [currentKey, legacyKey]);
});

test('missing current storage reads valid legacy selections unchanged', () => {
  const selections = ['old-id', 'old-id', 'unrecognized-id'];
  const reads = [];
  assert.deepEqual(
    readSelections({ [legacyKey]: JSON.stringify(selections) }, reads),
    selections,
  );
  assert.deepEqual(reads, [currentKey, legacyKey]);
});

test('invalid legacy selections fall back to an empty array', () => {
  assert.deepEqual(readSelections({ [legacyKey]: '{"id":"old-id"}' }), []);
});

for (const [name, current, expected] of [
  ['valid', '["current-id"]', ['current-id']],
  ['empty', '[]', []],
  ['wrong shape', '{}', []],
  ['null', 'null', []],
  ['malformed', '[broken', []],
]) {
  test(`${name} current storage takes precedence over valid legacy storage`, () => {
    const reads = [];
    assert.deepEqual(
      readSelections(
        { [currentKey]: current, [legacyKey]: '["legacy-id"]' },
        reads,
      ),
      expected,
    );
    assert.deepEqual(reads, [currentKey]);
  });
}

test('a storage read exception returns the supplied fallback', () => {
  const fallback = [];
  withStorage(
    {
      getItem() {
        throw new Error('Storage is unavailable');
      },
    },
    () =>
      assert.equal(
        readPreference(currentKey, fallback, isStringArray),
        fallback,
      ),
  );
});

test('unavailable localStorage returns the supplied fallback', () => {
  const fallback = [];
  withStorage(undefined, () =>
    assert.equal(readPreference(currentKey, fallback, isStringArray), fallback),
  );
});

test('unvalidated preferences retain their existing parsed-value behavior', () => {
  withStorage({ getItem: () => '"dark"' }, () =>
    assert.equal(readPreference('fyicons-theme-v1', 'light'), 'dark'),
  );
});
