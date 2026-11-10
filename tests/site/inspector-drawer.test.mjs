import assert from 'node:assert/strict';
import test from 'node:test';
import { readFile } from 'node:fs/promises';
import { act, createElement } from 'react';
import { createDomFixture } from './helpers/dom-fixture.mjs';

async function mountInspector(t, { contentHeight = 600, scrollTop = 0 } = {}) {
  const fixture = createDomFixture(t, 'https://example.test/icons/');
  const { window } = fixture;
  const { document } = window;
  const stylesheet = document.createElement('style');
  stylesheet.textContent = `.overflow-y-auto { overflow-y: auto; }\n${await readFile(new URL('../../apps/site/src/components/MobileInspector.css', import.meta.url), 'utf8')}`;
  document.head.append(stylesheet);
  const media = window.matchMedia;
  window.matchMedia = globalThis.matchMedia = (query) => ({
    ...media(query),
    matches: query === '(width < 768px)',
  });
  Object.defineProperty(window, 'innerHeight', { value: 844 });
  Object.defineProperty(window.HTMLElement.prototype, 'offsetHeight', {
    get() {
      return this.id === 'inspector' ? 820 : 844;
    },
  });
  window.HTMLElement.prototype.getBoundingClientRect = function () {
    return new window.DOMRect(12, 16, 366, this.id === 'inspector' ? 820 : 36);
  };
  window.HTMLElement.prototype.setPointerCapture = () => {};
  window.HTMLElement.prototype.releasePointerCapture = () => {};
  window.HTMLElement.prototype.hasPointerCapture = () => false;
  document.elementFromPoint = () =>
    document.querySelector('.mobile-inspector-hero');
  const { Inspector } = await fixture.load('components/Inspector.tsx');
  const { icons } = await fixture.load('lib/catalog.ts');
  const { createRoot } = await import('react-dom/client');
  const root = createRoot(document.getElementById('root'));
  fixture.onUnmount(() => act(() => root.unmount()));
  const noop = () => {};
  await act(async () =>
    root.render(
      createElement(Inspector, {
        item: icons[0],
        visible: [icons[0]],
        selectedIds: [],
        select: noop,
        navigate: noop,
        close: noop,
        share: () => '',
        toggleSelection: noop,
        finalFocus: () => false,
        docked: false,
        onDockedChange: noop,
        onCategoryChange: noop,
      }),
    ),
  );
  await act(async () =>
    document.querySelector('[aria-label="Expand preview"]').click(),
  );
  const popup = document.getElementById('inspector');
  const touchTarget = popup.querySelector('.mobile-inspector-hero');
  const scroll = popup.querySelector('.inspector-scroll');
  // Model content that fits while expanded but overflows after 60px of drag.
  // Base UI must retain the gesture as the available scroll height shrinks.
  Object.defineProperties(scroll, {
    clientHeight: {
      get: () =>
        650 -
        (Number.parseFloat(
          popup.style.getPropertyValue('--drawer-swipe-movement-y'),
        ) || 0),
    },
    scrollHeight: { value: contentHeight },
  });
  scroll.scrollTop = scrollTop;
  const samples = [];
  async function touch(type, y, time) {
    const point = {
      identifier: 1,
      clientX: 195,
      clientY: y,
      target: touchTarget,
    };
    const event = new window.Event(type, { bubbles: true, cancelable: true });
    Object.defineProperties(event, {
      touches: { value: type === 'touchend' ? [] : [point] },
      changedTouches: { value: [point] },
      timeStamp: { value: time },
    });
    await act(async () => touchTarget.dispatchEvent(event));
    samples.push(
      Number.parseFloat(
        popup.style.getPropertyValue('--drawer-swipe-movement-y'),
      ) || 0,
    );
  }
  return { popup, samples, touch };
}

test('a slow downward drag follows the finger and collapses the expanded inspector', async (t) => {
  const { popup, samples, touch } = await mountInspector(t);
  await touch('touchstart', 34, 100);
  for (let step = 1; step <= 28; step++)
    await touch('touchmove', 34 + step * 20, 100 + step * 300);
  assert.ok(samples.at(-1) > 450, `drag stalled: ${samples.join(', ')}`);
  assert.ok(Number(popup.style.getPropertyValue('--inspector-progress')) < 0.3);
  await touch('touchend', 594, 8600);
  assert.equal(popup.hasAttribute('data-expanded'), false);
});

test('scrolled inspector content keeps its native scroll gesture', async (t) => {
  const { popup, samples, touch } = await mountInspector(t, {
    contentHeight: 900,
    scrollTop: 100,
  });
  await touch('touchstart', 200, 100);
  for (let step = 1; step <= 6; step++)
    await touch('touchmove', 200 + step * 20, 100 + step * 300);
  await touch('touchend', 320, 2000);
  assert.ok(samples.every((movement) => movement === 0));
  assert.equal(popup.hasAttribute('data-expanded'), true);
  assert.equal(popup.hasAttribute('data-swiping'), false);
});
