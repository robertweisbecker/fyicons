import assert from 'node:assert/strict';
import test from 'node:test';
import { act, createElement } from 'react';
import { PathnameContext } from 'next/dist/shared/lib/hooks-client-context.shared-runtime.js';
import { createDomFixture } from './helpers/dom-fixture.mjs';

async function mountContents(t) {
  const fixture = createDomFixture(t, 'https://example.test/docs/guide/');
  const { window } = fixture;
  const { document } = window;
  const headings = ['First', 'Middle', 'Last'].map((title) => ({
    id: title.toLowerCase(),
    title,
    level: 2,
  }));
  let y = 0;
  Object.defineProperty(window, 'scrollY', { get: () => y });
  Object.defineProperty(window, 'innerHeight', { value: 400 });
  Object.defineProperty(document.documentElement, 'scrollHeight', {
    value: 2400,
  });
  document.documentElement.style.scrollPaddingTop = '56px';
  for (const [index, heading] of headings.entries()) {
    const element = document.createElement('h2');
    element.id = heading.id;
    element.style.scrollMarginTop = '32px';
    const top = [100, 800, 1600][index];
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
    async click(id) {
      await act(async () => document.querySelector(`a[href="#${id}"]`).click());
    },
    async scroll(top) {
      y = top;
      await act(async () => window.dispatchEvent(new window.Event('scroll')));
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
  await toc.scroll(800);
  assert.equal(toc.active, 'Middle');
});

test('interruption and scroll completion release the clicked selection', async (t) => {
  const toc = await mountContents(t);
  await toc.click('last');
  await toc.scroll(200);
  await toc.interrupt();
  assert.equal(toc.active, 'First');
  await toc.click('last');
  await toc.scroll(800);
  await toc.endScroll();
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
  await toc.scroll(1512);
  assert.equal(toc.active, 'Last');
});
