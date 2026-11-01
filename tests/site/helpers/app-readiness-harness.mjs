import { act, createElement, StrictMode } from 'react';
import {
  SearchParamsContext,
  PathnameContext,
} from 'next/dist/shared/lib/hooks-client-context.shared-runtime.js';
import { AppRouterContext } from 'next/dist/shared/lib/app-router-context.shared-runtime.js';
import { createDomFixture } from './dom-fixture.mjs';

// Supply Next's real contexts; route transitions are checked in the static preview.
export async function mountApp(t, url) {
  const fixture = createDomFixture(t, url, { pending: true });
  const { IconsBrowser } = await fixture.load('components/IconsBrowser.tsx');
  const catalog = await fixture.load('lib/catalog.ts');
  const readiness = await fixture.load('lib/category-readiness.ts');
  const { createRoot } = await import('react-dom/client');
  const root = createRoot(fixture.window.document.getElementById('root'));
  fixture.onUnmount(() => act(() => root.unmount()));
  const router = { prefetch() {} };
  await act(async () =>
    root.render(
      createElement(
        StrictMode,
        null,
        createElement(
          AppRouterContext.Provider,
          { value: router },
          createElement(
            PathnameContext.Provider,
            { value: fixture.window.location.pathname },
            createElement(
              SearchParamsContext.Provider,
              { value: new URLSearchParams(fixture.window.location.search) },
              createElement(IconsBrowser),
            ),
          ),
        ),
      ),
    ),
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
    rejectCategories: () => fixture.rejectCategories(readiness),
  };
}
