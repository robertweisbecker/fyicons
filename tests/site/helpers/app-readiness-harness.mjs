import { act, createElement, StrictMode } from 'react';
import {
  SearchParamsContext,
  PathnameContext,
} from 'next/dist/shared/lib/hooks-client-context.shared-runtime.js';
import { AppRouterContext } from 'next/dist/shared/lib/app-router-context.shared-runtime.js';
import { createDomFixture } from './dom-fixture.mjs';

// Supply Next's contexts and reflect native History API writes into search params.
// This adapter does not test Next routing; refresh and Back/Forward need a browser.
export async function mountApp(
  t,
  url,
  { mobile = false, actions = false } = {},
) {
  const fixture = createDomFixture(t, url, { pending: true, mobile });
  const { IconsBrowser } = await fixture.load('components/IconsBrowser.tsx');
  const catalog = await fixture.load('lib/catalog.ts');
  const readiness = await fixture.load('lib/category-readiness.ts');
  const { ToastProvider } = await fixture.load('components/ui/toast.tsx');
  const { IconInspectionProvider } = await fixture.load(
    'lib/icon-inspection.tsx',
  );
  const { DownloadIconsButton } = await fixture.load(
    'components/DownloadIconsButton.tsx',
  );
  const { createRoot } = await import('react-dom/client');
  const root = createRoot(fixture.window.document.getElementById('root'));
  fixture.onUnmount(() => act(() => root.unmount()));
  const router = { prefetch() {} };
  const render = () =>
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
              createElement(
                IconInspectionProvider,
                null,
                createElement(
                  ToastProvider,
                  null,
                  createElement(IconsBrowser),
                  actions && createElement(DownloadIconsButton),
                ),
              ),
            ),
          ),
        ),
      ),
    );
  for (const method of ['pushState', 'replaceState']) {
    const original = fixture.window.history[method].bind(
      fixture.window.history,
    );
    t.mock.method(fixture.window.history, method, (...args) => {
      original(...args);
      render();
    });
  }
  await act(async () => render());
  return {
    window: fixture.window,
    document: fixture.window.document,
    catalog,
    readiness,
    get tiles() {
      return [...fixture.window.document.querySelectorAll('.icon-tile')];
    },
    resolveCategories: (config) => fixture.resolveCategories(readiness, config),
    rejectCategories: () => fixture.rejectCategories(readiness),
  };
}
