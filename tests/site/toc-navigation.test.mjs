import assert from 'node:assert/strict';
import { once } from 'node:events';
import test from 'node:test';
import { act, createElement } from 'react';
import { PathnameContext } from 'next/dist/shared/lib/hooks-client-context.shared-runtime.js';
import { createDomFixture } from './helpers/dom-fixture.mjs';

test('mobile heading navigation opens the selected section', async (t) => {
  const fixture = createDomFixture(t, 'https://example.test/docs/guide/');
  const { document } = fixture.window;
  const headings = ['First', 'Last'].map((title) => ({
    id: title.toLowerCase(),
    title,
    level: 2,
  }));
  for (const { id, title } of headings) {
    const heading = document.createElement('h2');
    heading.id = id;
    heading.textContent = title;
    document.body.append(heading);
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
  await act(async () =>
    document.querySelector('button[aria-label^="On this page:"]').click(),
  );
  const target = [
    ...document.querySelectorAll('[role="menuitem"], [role="option"]'),
  ].find((element) => element.textContent.trim() === 'First');
  assert.ok(target, 'section is available in mobile navigation');
  await act(async () => {
    const changed = once(fixture.window, 'hashchange', {
      signal: AbortSignal.timeout(5000),
    });
    target.click();
    await changed;
  });
  assert.equal(fixture.window.location.hash, '#first');
  assert.ok(document.getElementById('first'));
});
