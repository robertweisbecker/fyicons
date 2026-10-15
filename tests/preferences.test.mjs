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

test('missing current storage reads valid legacy selections unchanged', () => {
  const selections = ['old-id', 'old-id', 'unrecognized-id'];
  const reads = [];
  assert.deepEqual(
    readSelections({ [legacyKey]: JSON.stringify(selections) }, reads),
    selections,
  );
  assert.deepEqual(reads, [currentKey, legacyKey]);
});

test('current selections take precedence over legacy storage, including invalid current data', () => {
  for (const [current, expected] of [
    ['["current-id"]', ['current-id']],
    ['{}', []],
  ]) {
    const reads = [];
    assert.deepEqual(
      readSelections(
        { [currentKey]: current, [legacyKey]: '["legacy-id"]' },
        reads,
      ),
      expected,
    );
    assert.deepEqual(reads, [currentKey]);
  }
});

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
