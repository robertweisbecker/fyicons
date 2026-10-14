import { readFileSync } from 'node:fs';
import { readFile } from 'node:fs/promises';
import { registerHooks } from 'node:module';
import { act, createElement } from 'react';
import { JSDOM } from 'jsdom';

const sourceRoot = new URL('../../src/', import.meta.url);
const categoryConfig = JSON.parse(
  await readFile(new URL('../../public/icon-categories.json', import.meta.url)),
);
let moduleId = 0;

// Node strips erasable TypeScript. Resolve the app's extensionless imports and
// JSON as modules, with a fresh graph for navigation's captured hosting base.
async function loadModules(root) {
  const search = `?navigation-harness=${++moduleId}`;
  const hooks = registerHooks({
    resolve(specifier, context, nextResolve) {
      if (context.parentURL?.startsWith(root.href)) {
        if (specifier.startsWith('.')) {
          const url = new URL(specifier, context.parentURL);
          if (!/\.(?:ts|json)$/.test(url.pathname)) url.pathname += '.ts';
          url.search = search;
          return { url: url.href, shortCircuit: true };
        }
        return {
          url: import.meta.resolve(specifier),
          shortCircuit: true,
        };
      }
      return nextResolve(specifier, context);
    },
    load(url, context, nextLoad) {
      if (url.startsWith(root.href) && new URL(url).pathname.endsWith('.json'))
        return {
          format: 'module',
          source: `export default ${readFileSync(new URL(url), 'utf8')}`,
          shortCircuit: true,
        };
      return nextLoad(url, context);
    },
  });
  try {
    const navigation = await import(
      new URL(`lib/use-library-navigation.ts${search}`, root)
    );
    const catalog = await import(new URL(`lib/catalog.ts${search}`, root));
    return { navigation, catalog };
  } finally {
    hooks.deregister();
  }
}

export async function mountNavigation(
  t,
  url = 'https://example.test/library/',
) {
  const dom = new JSDOM('<div id="root"></div>', { url });
  const saved = new Map();
  const globals = {
    window: dom.window,
    document: dom.window.document,
    location: dom.window.location,
    history: dom.window.history,
    navigator: dom.window.navigator,
    HTMLElement: dom.window.HTMLElement,
    IS_REACT_ACT_ENVIRONMENT: true,
    fetch: async () => Response.json(categoryConfig),
  };
  for (const [key, value] of Object.entries(globals)) {
    saved.set(key, Object.getOwnPropertyDescriptor(globalThis, key));
    Object.defineProperty(globalThis, key, {
      configurable: true,
      writable: true,
      value,
    });
  }
  let reactRoot;
  let mounted = false;
  const unmount = () => {
    if (mounted) {
      act(() => reactRoot.unmount());
      mounted = false;
    }
  };
  t.after(() => {
    unmount();
    dom.window.close();
    t.mock.timers.reset();
    for (const [key, descriptor] of saved) {
      if (descriptor) Object.defineProperty(globalThis, key, descriptor);
      else delete globalThis[key];
    }
  });

  const { navigation, catalog } = await loadModules(sourceRoot);
  const categoryError = await catalog.loadIconCategories();
  if (categoryError) throw new Error(categoryError);
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
