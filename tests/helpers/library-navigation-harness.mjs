import { act, createElement } from 'react';
import { createDomFixture } from './dom-fixture.mjs';

export async function mountNavigation(
  t,
  url = 'https://example.test/library/',
  { pending = false } = {},
) {
  const fixture = createDomFixture(t, url, { pending });
  const dom = { window: fixture.window };
  let reactRoot;
  let mounted = false;
  const unmount = () => {
    if (mounted) {
      act(() => reactRoot.unmount());
      mounted = false;
    }
  };
  fixture.onUnmount(unmount);
  const navigation = await fixture.load('lib/use-library-navigation.ts');
  const catalog = await fixture.load('lib/catalog.ts');
  const readiness = await fixture.load('lib/category-readiness.ts');
  if (!pending) await readiness.loadCategories();
  const { createRoot } = await import('react-dom/client');
  let current;
  function Harness() {
    current = navigation.useLibraryNavigation();
    return null;
  }
  const writes = [];
  for (const method of ['pushState', 'replaceState']) {
    const original = dom.window.history[method].bind(dom.window.history);
    dom.window.history[method] = (...args) => {
      writes.push({
        method,
        url: new URL(args[2], dom.window.location.href).href,
      });
      return original(...args);
    };
  }
  t.mock.timers.enable({ apis: ['setTimeout'] });
  reactRoot = createRoot(dom.window.document.getElementById('root'));
  mounted = true;
  act(() => reactRoot.render(createElement(Harness)));

  return {
    get state() {
      return current;
    },
    get href() {
      return dom.window.location.href;
    },
    get length() {
      return dom.window.history.length;
    },
    catalog,
    readiness,
    requests: fixture.requests,
    resolveCategories: (config, status) =>
      fixture.resolveCategories(readiness, config, status),
    rejectCategories: () => fixture.rejectCategories(readiness),
    writes,
    act: (callback) => act(() => callback(current)),
    advance: (milliseconds) => act(() => t.mock.timers.tick(milliseconds)),
    traverse(direction) {
      let restored = false;
      dom.window.addEventListener('popstate', () => (restored = true), {
        once: true,
      });
      act(() => {
        dom.window.history[direction]();
        // jsdom queues two zero-delay history tasks. Tick each explicitly.
        t.mock.timers.tick(1);
        t.mock.timers.tick(1);
      });
      if (!restored) throw new Error(`History ${direction} did not restore`);
    },
    hash(hash) {
      let changed = false;
      dom.window.addEventListener('hashchange', () => (changed = true), {
        once: true,
      });
      act(() => {
        dom.window.location.hash = hash;
        t.mock.timers.tick(1);
      });
      if (!changed) throw new Error('Native hash change did not dispatch');
    },
    unmount,
  };
}
