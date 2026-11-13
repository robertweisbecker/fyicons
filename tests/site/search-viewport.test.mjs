import assert from 'node:assert/strict';
import test from 'node:test';
import { createDomFixture } from './helpers/dom-fixture.mjs';

test('global search sizes its portal on mount and tracks the visual viewport', async (t) => {
  const { act, createElement, createRef } = await import('react');
  const h = createDomFixture(t, 'https://example.test/');
  const originalNodeFilter = globalThis.NodeFilter;
  globalThis.NodeFilter = h.window.NodeFilter;
  t.after(() => {
    globalThis.NodeFilter = originalNodeFilter;
  });
  const { GlobalSearch } = await h.load('components/Search.tsx');
  const { createRoot } = await import('react-dom/client');
  const root = createRoot(h.window.document.querySelector('#root'));
  h.onUnmount(() => act(() => root.unmount()));
  Object.defineProperty(h.window, 'visualViewport', {
    configurable: true,
    value: Object.assign(new h.window.EventTarget(), {
      height: 400,
      offsetTop: 0,
      scale: 1,
    }),
  });
  Object.defineProperty(h.window.document.documentElement, 'clientHeight', {
    value: 800,
  });
  const props = {
    open: false,
    onOpenChange() {},
    select() {},
    inputRef: createRef(),
    returnFocusRef: createRef(),
  };
  await act(async () => root.render(createElement(GlobalSearch, props)));
  await act(async () =>
    root.render(createElement(GlobalSearch, { ...props, open: true })),
  );
  const input = h.window.document.querySelector(
    '[aria-label="Search all icons"]',
  );
  assert.ok(input);
  const dialog = input.closest('[role="dialog"]');
  assert.equal(
    dialog.style.getPropertyValue('--search-viewport-height'),
    '400px',
    'portal mount applies the current keyboard viewport immediately',
  );
  h.window.visualViewport.height = 500;
  h.window.visualViewport.offsetTop = 24;
  h.window.visualViewport.dispatchEvent(new h.window.Event('resize'));
  assert.equal(
    dialog.style.getPropertyValue('--search-viewport-height'),
    '500px',
  );
  assert.equal(dialog.style.getPropertyValue('--search-viewport-top'), '24px');
  await act(async () => root.render(createElement(GlobalSearch, props)));
  h.window.visualViewport.height = 800;
  h.window.visualViewport.dispatchEvent(new h.window.Event('resize'));
  assert.equal(
    dialog.style.getPropertyValue('--search-viewport-height'),
    '500px',
    'closing removes the viewport listener',
  );
  await act(async () =>
    root.render(createElement(GlobalSearch, { ...props, open: true })),
  );
  const reopened = h.window.document.querySelector('[role="dialog"]');
  assert.equal(
    reopened.style.getPropertyValue('--search-viewport-height'),
    '800px',
    'reopening initializes the keyboard-closed viewport',
  );
  h.window.visualViewport.offsetTop = 0;
  h.window.visualViewport.dispatchEvent(new h.window.Event('scroll'));
  assert.equal(reopened.style.getPropertyValue('--search-viewport-top'), '0px');
});
