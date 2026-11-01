import test from 'node:test';
import assert from 'node:assert/strict';
import { act, createElement } from 'react';
import { renderToString } from 'react-dom/server';
import { createDomFixture } from './helpers/dom-fixture.mjs';
import {
  isStringArray,
  readPreference,
} from '../../apps/site/src/lib/preferences.ts';

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

function readSelections(entries) {
  return withStorage({ getItem: (key) => entries[key] ?? null }, () =>
    readPreference(currentKey, [], isStringArray),
  );
}

test('saved selections validate current data and fall back to legacy data only when absent', () => {
  assert.deepEqual(readSelections({ [legacyKey]: '["legacy-id"]' }), [
    'legacy-id',
  ]);
  for (const [current, expected] of [
    ['["current-id"]', ['current-id']],
    ['[]', []],
    ['{}', []],
    ['["icon-id",42]', []],
    ['[broken', []],
  ]) {
    assert.deepEqual(
      readSelections({ [currentKey]: current, [legacyKey]: '["legacy-id"]' }),
      expected,
    );
  }
});

test('unavailable or blocked storage returns the supplied fallback', () => {
  for (const storage of [
    undefined,
    {
      getItem() {
        throw new Error('Storage is blocked');
      },
    },
  ]) {
    withStorage(storage, () =>
      assert.equal(readPreference('fyicons-theme-v1', 'light'), 'light'),
    );
  }
});

test('hydration preserves saved preferences and applies browser media queries without a mismatch', async (t) => {
  const fixture = createDomFixture(t, 'https://example.test/');
  localStorage.setItem('fyicons-theme-v1', '"dark"');
  const originalMatchMedia = globalThis.matchMedia;
  globalThis.matchMedia = (query) => ({
    ...originalMatchMedia(query),
    matches: true,
  });
  const { usePreference, useMobile, useReducedMotionPreference } =
    await fixture.load('lib/preferences.ts');
  function Preferences() {
    const [theme] = usePreference('fyicons-theme-v1', 'light');
    return createElement('output', {
      'data-theme': theme,
      'data-mobile': useMobile(),
      'data-reduced-motion': useReducedMotionPreference(),
    });
  }
  const container = fixture.window.document.getElementById('root');
  container.innerHTML = renderToString(createElement(Preferences));
  assert.equal(container.firstElementChild.dataset.theme, 'light');
  assert.equal(container.firstElementChild.dataset.reducedMotion, 'false');
  const errors = [];
  const { hydrateRoot } = await import('react-dom/client');
  let root;
  await act(async () => {
    root = hydrateRoot(container, createElement(Preferences), {
      onRecoverableError: (error) => errors.push(error),
    });
  });
  fixture.onUnmount(() => act(() => root.unmount()));
  assert.equal(container.firstElementChild.dataset.theme, 'dark');
  assert.equal(container.firstElementChild.dataset.mobile, 'true');
  assert.equal(container.firstElementChild.dataset.reducedMotion, 'true');
  assert.equal(localStorage.getItem('fyicons-theme-v1'), '"dark"');
  assert.deepEqual(errors, []);
});
