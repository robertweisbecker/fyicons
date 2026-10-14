import { existsSync, readFileSync } from 'node:fs';
import { registerHooks } from 'node:module';
import { fileURLToPath } from 'node:url';
import { act, createElement, StrictMode } from 'react';
import { JSDOM } from 'jsdom';
import { transformSync } from 'rolldown/utils';

const sourceRoot = new URL('../../src/', import.meta.url);
let moduleId = 0;

// Mount the production App and its components. These hooks only adapt Vite's
// aliases, TSX, JSON, raw text and CSS imports for Node; no UI logic is replaced.
export async function mountApp(t, url) {
  const dom = new JSDOM('<div id="root"></div>', {
    url,
    pretendToBeVisual: true,
  });
  const matchMedia = (media) => ({
    media,
    matches: false,
    addEventListener() {},
    removeEventListener() {},
    addListener() {},
    removeListener() {},
  });
  dom.window.matchMedia = matchMedia;
  dom.window.scrollTo = () => {};
  dom.window.scrollBy = () => {};
  const ResizeObserver = class {
    observe() {}
    unobserve() {}
    disconnect() {}
  };
  dom.window.ResizeObserver = ResizeObserver;
  const globals = {
    window: dom.window,
    document: dom.window.document,
    location: dom.window.location,
    history: dom.window.history,
    navigator: dom.window.navigator,
    localStorage: dom.window.localStorage,
    matchMedia,
    ResizeObserver,
    getComputedStyle: dom.window.getComputedStyle.bind(dom.window),
    requestAnimationFrame: dom.window.requestAnimationFrame.bind(dom.window),
    cancelAnimationFrame: dom.window.cancelAnimationFrame.bind(dom.window),
    IS_REACT_ACT_ENVIRONMENT: true,
  };
  for (const name of [
    'HTMLElement',
    'Element',
    'Node',
    'Document',
    'DocumentFragment',
    'ShadowRoot',
    'SVGElement',
    'Event',
    'MouseEvent',
    'CustomEvent',
    'MutationObserver',
  ])
    globals[name] = dom.window[name];
  let resolveResponse;
  const response = new Promise((resolve) => {
    resolveResponse = resolve;
  });
  const requests = [];
  globals.fetch = (url, options) => {
    requests.push({ url, options });
    return response;
  };
  const saved = new Map();
  for (const [name, value] of Object.entries(globals)) {
    saved.set(name, Object.getOwnPropertyDescriptor(globalThis, name));
    Object.defineProperty(globalThis, name, {
      configurable: true,
      writable: true,
      value,
    });
  }
  const graph = `app-readiness=${++moduleId}`;
  const hooks = registerHooks({
    resolve(specifier, context, nextResolve) {
      if (!context.parentURL?.startsWith(sourceRoot.href))
        return nextResolve(specifier, context);
      if (!specifier.startsWith('.') && !specifier.startsWith('@/'))
        return { url: import.meta.resolve(specifier), shortCircuit: true };
      const url = specifier.startsWith('@/')
        ? new URL(specifier.slice(2), sourceRoot)
        : new URL(specifier, context.parentURL);
      if (!/\.(?:tsx?|json|css|txt)$/.test(url.pathname)) {
        const ts = new URL(url);
        ts.pathname += '.ts';
        url.pathname += existsSync(ts) ? '.ts' : '.tsx';
      }
      const raw = url.searchParams.has('raw');
      url.search = graph + (raw ? '&raw' : '');
      return { url: url.href, shortCircuit: true };
    },
    load(url, context, nextLoad) {
      if (!url.startsWith(sourceRoot.href)) return nextLoad(url, context);
      const filename = fileURLToPath(url);
      if (filename.endsWith('.css'))
        return { format: 'module', source: '', shortCircuit: true };
      const source = readFileSync(new URL(url), 'utf8');
      if (filename.endsWith('.json') || new URL(url).searchParams.has('raw'))
        return {
          format: 'module',
          source: `export default ${filename.endsWith('.json') ? source : JSON.stringify(source)}`,
          shortCircuit: true,
        };
      if (filename.endsWith('.tsx')) {
        const transformed = transformSync(filename, source, {
          jsx: { runtime: 'automatic' },
        });
        if (transformed.errors.length)
          throw new Error(JSON.stringify(transformed.errors));
        return {
          format: 'module',
          source: transformed.code,
          shortCircuit: true,
        };
      }
      return nextLoad(url, context);
    },
  });
  let root;
  t.after(() => {
    if (root) act(() => root.unmount());
    hooks.deregister();
    dom.window.close();
    for (const [name, descriptor] of saved) {
      if (descriptor) Object.defineProperty(globalThis, name, descriptor);
      else delete globalThis[name];
    }
  });
  const { App } = await import(new URL(`App.tsx?${graph}`, sourceRoot));
  const catalog = await import(new URL(`lib/catalog.ts?${graph}`, sourceRoot));
  const readiness = await import(
    new URL(`lib/category-readiness.ts?${graph}`, sourceRoot)
  );
  const { createRoot } = await import('react-dom/client');
  root = createRoot(dom.window.document.getElementById('root'));
  await act(async () =>
    root.render(createElement(StrictMode, null, createElement(App))),
  );
  return {
    document: dom.window.document,
    catalog,
    readiness,
    requests,
    get tiles() {
      return [...dom.window.document.querySelectorAll('.icon-tile')];
    },
    get count() {
      return dom.window.document.querySelector('p[role="status"]').textContent;
    },
    async resolveCategories(config) {
      await act(async () => {
        resolveResponse(Response.json(config));
        await readiness.loadCategories();
      });
    },
  };
}
