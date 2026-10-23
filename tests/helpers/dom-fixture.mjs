import { existsSync, readFileSync } from 'node:fs';
import { registerHooks } from 'node:module';
import { fileURLToPath } from 'node:url';
import { act } from 'react';
import { readFile } from 'node:fs/promises';
import { JSDOM } from 'jsdom';
import { transformSync } from 'rolldown/utils';

const sourceRoot = new URL('../../apps/site/src/', import.meta.url);
let moduleId = 0;
const categoryConfig = JSON.parse(
  await readFile(
    new URL('../../apps/site/public/icon-categories.json', import.meta.url),
  ),
);

// Adapt the production module graph and browser APIs for Node. Application
// behavior remains in the imported modules. Each fixture gets fresh state.
export function createDomFixture(t, url, { pending = false } = {}) {
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
    onUnmount: (callback) => {
      unmount = callback;
    },
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
  let rejectResponse;
  const response = new Promise((resolve, reject) => {
    resolveResponse = resolve;
    rejectResponse = reject;
  });
  const requests = [];
  globals.fetch = (url, options) => {
    requests.push({ url, options });
    return pending ? response : Promise.resolve(Response.json(categoryConfig));
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
  const graph = `dom-fixture=${++moduleId}`;
  const hooks = registerHooks({
    resolve(specifier, context, nextResolve) {
      if (!context.parentURL?.startsWith(sourceRoot.href))
        return nextResolve(specifier, context);
      if (!specifier.startsWith('.') && !specifier.startsWith('@/'))
        return { url: import.meta.resolve(specifier), shortCircuit: true };
      const url = specifier.startsWith('@/')
        ? new URL(specifier.slice(2), sourceRoot)
        : new URL(specifier, context.parentURL);
      const raw = url.searchParams.has('raw');
      if (!raw && !/\.(?:tsx?|json|css|txt)$/.test(url.pathname)) {
        const ts = new URL(url);
        ts.pathname += '.ts';
        url.pathname += existsSync(ts) ? '.ts' : '.tsx';
      }
      url.search = graph + (raw ? '&raw' : '');
      return { url: url.href, shortCircuit: true };
    },
    load(url, context, nextLoad) {
      if (new URL(url).searchParams.has('raw'))
        return {
          format: 'module',
          source: `export default ${JSON.stringify(readFileSync(new URL(url), 'utf8'))}`,
          shortCircuit: true,
        };
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
  let unmount = () => {};
  t.after(() => {
    unmount();
    hooks.deregister();
    dom.window.close();
    t.mock.timers.reset();
    for (const [name, descriptor] of saved) {
      if (descriptor) Object.defineProperty(globalThis, name, descriptor);
      else delete globalThis[name];
    }
  });
  return {
    onUnmount: (callback) => {
      unmount = callback;
    },
    window: dom.window,
    requests,
    load: (relative) => import(new URL(`${relative}?${graph}`, sourceRoot)),
    async resolveCategories(readiness, config = categoryConfig, status = 200) {
      await act(async () => {
        resolveResponse(Response.json(config, { status }));
        await readiness.loadCategories();
      });
    },
    async rejectCategories(readiness) {
      await act(async () => {
        rejectResponse(new Error('Category request failed'));
        await readiness.loadCategories();
      });
    },
  };
}
