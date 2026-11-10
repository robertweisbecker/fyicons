import assert from 'node:assert/strict';
import test from 'node:test';
import { act, createElement } from 'react';
import { PathnameContext } from 'next/dist/shared/lib/hooks-client-context.shared-runtime.js';
import { createDomFixture } from './helpers/dom-fixture.mjs';

async function mountContents(
  t,
  {
    headings = ['First', 'Middle', 'Last'].map((title) => ({
      id: title.toLowerCase(),
      title,
      level: 2,
    })),
    tops = [100, 800, 1600],
    viewportHeight = 400,
    documentHeight = 2400,
    initialScroll = 0,
    hash = '',
  } = {},
) {
  const fixture = createDomFixture(
    t,
    `https://example.test/docs/guide/${hash}`,
  );
  const { window } = fixture;
  const { document } = window;
  t.mock.timers.enable({ apis: ['setTimeout'] });
  let y = initialScroll;
  Object.defineProperty(window, 'scrollY', { get: () => y });
  Object.defineProperty(window, 'innerHeight', { value: viewportHeight });
  Object.defineProperty(document.documentElement, 'scrollHeight', {
    value: documentHeight,
  });
  document.documentElement.style.scrollPaddingTop = '56px';
  for (const [index, heading] of headings.entries()) {
    const element = document.createElement(`h${heading.level}`);
    element.id = heading.id;
    element.style.scrollMarginTop = '32px';
    const top = tops[index];
    element.getBoundingClientRect = () =>
      new window.DOMRect(0, top - y, 100, 30);
    document.body.append(element);
  }
  const { TableOfContents } = await fixture.load(
    'components/docs/TableOfContents.tsx',
  );
  const { createRoot } = await import('react-dom/client');
  const root = createRoot(document.getElementById('root'));
  fixture.onUnmount(() => act(() => root.unmount()));
  await act(async () =>
    root.render(
      createElement(
        PathnameContext.Provider,
        { value: '/docs/guide/' },
        createElement(TableOfContents, { headings }),
      ),
    ),
  );
  const frame = () =>
    act(async () => {
      await new Promise((resolve) => window.requestAnimationFrame(resolve));
    });
  return {
    get active() {
      return document.querySelector('a[aria-current="location"]').textContent;
    },
    get mobileHeading() {
      return document
        .querySelector('button[aria-label^="On this page:"]')
        ?.getAttribute('aria-label');
    },
    async click(id) {
      await act(async () => document.querySelector(`a[href="#${id}"]`).click());
      await act(async () => t.mock.timers.tick(0));
    },
    async scroll(top, { end = false } = {}) {
      y = top;
      await act(async () => {
        window.dispatchEvent(new window.Event('scroll'));
        if (end) document.dispatchEvent(new window.Event('scrollend'));
      });
      await frame();
    },
    async interrupt() {
      await act(async () => window.dispatchEvent(new window.Event('wheel')));
      await frame();
    },
    async endScroll() {
      await act(async () =>
        document.dispatchEvent(new window.Event('scrollend')),
      );
      await frame();
    },
    async advanceTime(milliseconds) {
      await act(async () => t.mock.timers.tick(milliseconds));
    },
    async hash(id) {
      await act(async () => {
        window.history.replaceState(null, '', `#${id}`);
        window.dispatchEvent(new window.Event('hashchange'));
      });
    },
    async key(key) {
      await act(async () =>
        window.dispatchEvent(new window.KeyboardEvent('keydown', { key })),
      );
    },
  };
}

test('a clicked section stays active through intermediate scroll positions, then scrollspy resumes', async (t) => {
  const toc = await mountContents(t);
  assert.equal(toc.active, 'First');
  await toc.click('last');
  assert.equal(toc.active, 'Last');
  await toc.scroll(200);
  assert.equal(toc.active, 'Last');
  await toc.scroll(800);
  assert.equal(toc.active, 'Last');
  await toc.scroll(1512);
  assert.equal(toc.active, 'Last');
  await toc.endScroll();
  await toc.scroll(800);
  assert.equal(toc.active, 'Middle');
});

test('interruption resumes tracking on the next scroll, while completion keeps the chosen highlight', async (t) => {
  const toc = await mountContents(t);
  await toc.click('last');
  await toc.scroll(200);
  await toc.interrupt();
  assert.equal(toc.active, 'Last');
  await toc.scroll(201);
  assert.equal(toc.active, 'First');
  await toc.click('last');
  await toc.scroll(800);
  await toc.endScroll();
  assert.equal(toc.active, 'Last');
  await toc.scroll(801);
  assert.equal(toc.active, 'Middle');
});

test('a second click replaces the target of an unfinished navigation', async (t) => {
  const toc = await mountContents(t);
  await toc.click('last');
  await toc.scroll(200);
  await toc.click('middle');
  await toc.scroll(300);
  assert.equal(toc.active, 'Middle');
  await toc.scroll(712);
  await toc.endScroll();
  await toc.scroll(1512);
  assert.equal(toc.active, 'Last');
});

test('a short section keeps its highlight when the jump is clamped at the page bottom', async (t) => {
  const toc = await mountContents(t, {
    tops: [100, 1700, 1800],
    viewportHeight: 600,
    documentHeight: 2100,
  });
  await toc.click('middle');
  await toc.scroll(1500, { end: true });
  assert.equal(toc.active, 'Middle');
  await toc.hash('middle');
  await toc.scroll(1490);
  assert.equal(toc.active, 'First');
});

test('the quiet-time fallback releases a selection even when the click causes no scrolling', async (t) => {
  const toc = await mountContents(t, {
    tops: [100, 1700, 1800],
    viewportHeight: 600,
    documentHeight: 2100,
    initialScroll: 1500,
  });
  await toc.click('middle');
  await toc.advanceTime(200);
  assert.equal(toc.active, 'Middle');
  await toc.scroll(1490);
  assert.equal(toc.active, 'First');
});

test('hash links select a short section on entry and replace an unfinished jump', async (t) => {
  const toc = await mountContents(t, {
    tops: [100, 1700, 1800],
    viewportHeight: 600,
    documentHeight: 2100,
    initialScroll: 1500,
    hash: '#middle',
  });
  assert.equal(toc.active, 'Middle');
  await toc.hash('first');
  assert.equal(toc.active, 'First');
  await toc.scroll(1000);
  assert.equal(toc.active, 'First');
  await toc.endScroll();
  await toc.scroll(1490);
  assert.equal(toc.active, 'First');
});

test('non-scrolling keys preserve the lock and scrolling keys resume tracking', async (t) => {
  const toc = await mountContents(t);
  await toc.click('last');
  await toc.key('a');
  await toc.scroll(200);
  assert.equal(toc.active, 'Last');
  await toc.key('PageUp');
  assert.equal(toc.active, 'Last');
  await toc.scroll(201);
  assert.equal(toc.active, 'First');
});

test('scroll events extend the selection lock until the jump is quiet', async (t) => {
  const toc = await mountContents(t);
  await toc.click('last');
  await toc.advanceTime(100);
  await toc.scroll(200);
  await toc.advanceTime(100);
  await toc.scroll(800);
  assert.equal(toc.active, 'Last');
  await toc.advanceTime(200);
  assert.equal(toc.active, 'Last');
  await toc.scroll(801);
  assert.equal(toc.active, 'Middle');
});

test('mobile navigation keeps the parent H2 while desktop tracking follows nested headings', async (t) => {
  const toc = await mountContents(t, {
    headings: [
      { id: 'first', title: 'First', level: 2 },
      { id: 'child', title: 'Child', level: 3 },
      { id: 'nested', title: 'Nested', level: 4 },
      { id: 'last', title: 'Last', level: 2 },
    ],
    tops: [100, 800, 1200, 1800],
    documentHeight: 2600,
  });
  await toc.scroll(712);
  assert.equal(toc.active, 'Child');
  assert.equal(toc.mobileHeading, 'On this page: First');
  await toc.scroll(1112);
  assert.equal(toc.active, 'Nested');
  assert.equal(toc.mobileHeading, 'On this page: First');
  await toc.scroll(1712);
  assert.equal(toc.active, 'Last');
  assert.equal(toc.mobileHeading, 'On this page: Last');
});
