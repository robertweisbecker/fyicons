import assert from 'node:assert/strict';
import test from 'node:test';
import { createDomFixture } from './helpers/dom-fixture.mjs';

test('keyboard-open search contains edge gestures but allows result scrolling', async (t) => {
  const h = createDomFixture(t, 'https://example.test/');
  const { containSearchTouchScroll } = await h.load(
    'lib/search-touch-scroll.ts',
  );
  const { document } = h.window;
  document.body.innerHTML =
    '<div id="popup"><input><div data-slot="scroll-area-viewport"><span>result<svg><path /></svg></span></div></div><div id="outside"></div>';
  const popup = document.querySelector('#popup');
  const scroller = popup.querySelector('[data-slot]');
  const item = scroller.firstChild;
  const viewport = { height: 400, scale: 1 };
  Object.defineProperty(h.window, 'visualViewport', {
    value: viewport,
    configurable: true,
  });
  Object.defineProperty(document.documentElement, 'clientHeight', {
    value: 800,
  });
  Object.defineProperties(scroller, {
    clientHeight: { value: 250 },
    scrollHeight: { value: 1000, configurable: true },
  });
  popup.querySelector('input').focus();
  const release = containSearchTouchScroll(popup);
  const touch = (target, type, y, count = 1) => {
    const event = new h.window.Event(type, { bubbles: true, cancelable: true });
    Object.defineProperty(event, 'touches', {
      value: Array.from({ length: count }, () => ({ clientY: y })),
    });
    target.dispatchEvent(event);
    return event.defaultPrevented;
  };
  const swipe = (target, from, to, count = 1) => {
    touch(target, 'touchstart', from, count);
    return touch(target, 'touchmove', to, count);
  };
  assert.equal(
    swipe(item, 200, 100),
    false,
    'native scroll toward more results',
  );
  assert.equal(
    swipe(item.querySelector('path'), 200, 100),
    false,
    'gestures beginning on icon SVGs scroll results',
  );
  assert.equal(swipe(item, 100, 200), true, 'top edge does not pan the page');
  scroller.scrollTop = 750;
  assert.equal(
    swipe(item, 200, 100),
    true,
    'bottom edge does not pan the page',
  );
  assert.equal(swipe(item, 100, 200), false, 'can scroll back from bottom');
  scroller.scrollTop = 300;
  assert.equal(
    swipe(item, 100, 200),
    false,
    'interior upward scroll remains native',
  );
  assert.equal(swipe(document.querySelector('#outside'), 200, 100), true);
  assert.equal(swipe(popup.querySelector('input'), 200, 100), true);
  Object.defineProperty(scroller, 'scrollHeight', { value: 250 });
  assert.equal(
    swipe(item, 200, 100),
    true,
    'short results do not scroll the page',
  );
  assert.equal(swipe(item, 200, 100, 2), false, 'pinch gesture stays native');
  viewport.scale = 2;
  assert.equal(
    swipe(item, 200, 100),
    false,
    'zoom is not mistaken for keyboard',
  );
  viewport.scale = 1;
  viewport.height = 800;
  assert.equal(
    swipe(item, 200, 100),
    false,
    'keyboard-closed behavior unchanged',
  );
  viewport.height = 400;
  popup.querySelector('input').blur();
  assert.equal(
    swipe(item, 200, 100),
    false,
    'no input focus is not keyboard mode',
  );
  popup.querySelector('input').focus();
  release();
  assert.equal(swipe(item, 200, 100), false, 'listeners removed on close');
  const releaseAgain = containSearchTouchScroll(popup);
  assert.equal(
    swipe(item, 200, 100),
    true,
    'reopening installs fresh containment',
  );
  releaseAgain();
});

test('opening global search installs containment and closing removes it', async (t) => {
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
  await act(async () => input.focus());
  const swipe = () => {
    const start = new h.window.Event('touchstart', {
      bubbles: true,
      cancelable: true,
    });
    Object.defineProperty(start, 'touches', { value: [{ clientY: 200 }] });
    input.dispatchEvent(start);
    const move = new h.window.Event('touchmove', {
      bubbles: true,
      cancelable: true,
    });
    Object.defineProperty(move, 'touches', { value: [{ clientY: 100 }] });
    input.dispatchEvent(move);
    return move.defaultPrevented;
  };
  assert.equal(swipe(), true);
  await act(async () => root.render(createElement(GlobalSearch, props)));
  assert.equal(swipe(), false);
});
