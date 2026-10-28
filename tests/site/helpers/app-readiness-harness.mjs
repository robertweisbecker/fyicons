import { act, createElement, StrictMode } from 'react';
import { createDomFixture } from './dom-fixture.mjs';

export async function mountApp(t, url) {
  const fixture = createDomFixture(t, url, { pending: true });
  const { App } = await fixture.load('App.tsx');
  const catalog = await fixture.load('lib/catalog.ts');
  const readiness = await fixture.load('lib/category-readiness.ts');
  const { createRoot } = await import('react-dom/client');
  const root = createRoot(fixture.window.document.getElementById('root'));
  fixture.onUnmount(() => act(() => root.unmount()));
  await act(async () =>
    root.render(createElement(StrictMode, null, createElement(App))),
  );
  return {
    document: fixture.window.document,
    catalog,
    readiness,
    requests: fixture.requests,
    get tiles() {
      return [...fixture.window.document.querySelectorAll('.icon-tile')];
    },
    get count() {
      return fixture.window.document.querySelector('p[role="status"]')
        .textContent;
    },
    resolveCategories: (config) => fixture.resolveCategories(readiness, config),
  };
}
