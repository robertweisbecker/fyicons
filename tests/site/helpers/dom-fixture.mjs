import { decodeCatalog } from '../../../apps/site/src/lib/catalog-codec.ts';
import { existsSync, readFileSync } from 'node:fs';
import { registerHooks } from 'node:module';
import { fileURLToPath } from 'node:url';
import { act } from 'react';
import { readFile } from 'node:fs/promises';
import { JSDOM } from 'jsdom';
import { transformSync } from 'rolldown/utils';

const sourceRoot = new URL('../../../apps/site/src/', import.meta.url);
let moduleId = 0;
const categoryConfig = JSON.parse(
  await readFile(
    new URL('../../../apps/site/public/icon-categories.json', import.meta.url),
  ),
);

// Adapt the production module graph and browser APIs for Node. Application
// behavior remains in the imported modules. Each fixture gets fresh state.
export function createDomFixture(
  t,
  url,
  { pending = false, mobile = false } = {},
) {
  const dom = new JSDOM('<div id="root"></div>', {
    url,
    pretendToBeVisual: true,
  });
  const matchMedia = (media) => ({
    media,
    matches: mobile && media === '(width < 768px)',
    addEventListener() {},
    removeEventListener() {},
    addListener() {},
    removeListener() {},
  });
  dom.window.matchMedia = matchMedia;
  dom.window.scrollTo = () => {};
  dom.window.scrollBy = () => {};
  dom.window.Element.prototype.getAnimations = () => [];
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
    self: dom.window,
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
    'DOMRect',
    'AbortController',
    'ShadowRoot',
    'SVGElement',
    'Event',
    'MouseEvent',
    'CustomEvent',
    'MutationObserver',
  ])
    globals[name] = dom.window[name];
  const categories = Promise.withResolvers();
  const requests = [];
  globals.fetch = async (input, options) => {
    const url = new URL(
      input instanceof Request ? input.url : input,
      dom.window.location.href,
    );
    const method =
      options?.method ?? (input instanceof Request ? input.method : 'GET');
    requests.push(`${method} ${url.href}`);
    if (method !== 'GET' || url.origin !== dom.window.location.origin)
      throw new Error(`Unexpected request: ${method} ${url.href}`);
    if (url.pathname + url.search === '/icon-categories.json')
      return pending ? categories.promise : Response.json(categoryConfig);
    const match = (url.pathname + url.search).match(
      /^\/icon-sources\/([a-f0-9]{64})\.svg$/,
    );
    if (match) {
      const catalog = decodeCatalog(
        JSON.parse(
          readFileSync(
            new URL('data/catalog-runtime.json', sourceRoot),
            'utf8',
          ),
        ),
      );
      const icon = catalog.icons.find((icon) => icon.sha256 === match[1]);
      return icon
        ? new Response(
            readFileSync(
              new URL(
                `../../../packages/fyicons/svg/${icon.filename}`,
                sourceRoot,
              ),
            ),
          )
        : new Response('', { status: 404 });
    }
    throw new Error(`Unexpected request: ${method} ${url.href}`);
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
      if (['next/navigation', 'next/link', 'next/dynamic'].includes(specifier))
        return {
          url: import.meta.resolve(specifier + '.js'),
          shortCircuit: true,
        };
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
    load: (relative) => import(new URL(`${relative}?${graph}`, sourceRoot)),
    requests,
    async resolveCategories(config = categoryConfig) {
      await act(async () => {
        categories.resolve(Response.json(config));
      });
    },
    async rejectCategories() {
      await act(async () => {
        categories.reject(new Error('Category request failed'));
      });
    },
  };
}
