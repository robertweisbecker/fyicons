import assert from 'node:assert/strict';
import test from 'node:test';
import { act, createElement as h } from 'react';
import { createDomFixture } from './helpers/dom-fixture.mjs';

test('deferred demos wait for approach, retry failed loading, and preserve mounted state', async (t) => {
  const fixture = createDomFixture(t, 'https://example.test/');
  const { DeferredContent, useDemoActivity } = await fixture.load(
    'components/DeferredContent.tsx',
  );
  const observers = [];
  class Observer {
    targets = new Set();
    constructor(callback, options) {
      this.callback = callback;
      this.options = options;
      observers.push(this);
    }
    observe(target) {
      this.targets.add(target);
    }
    disconnect() {
      this.targets.clear();
    }
    intersect(target, isIntersecting) {
      assert.ok(
        this.targets.has(target),
        'the demo must be observed before it can intersect',
      );
      this.callback([{ target, isIntersecting }]);
    }
  }
  const previousObserver = globalThis.IntersectionObserver;
  fixture.window.IntersectionObserver = Observer;
  globalThis.IntersectionObserver = Observer;
  t.after(() => {
    if (previousObserver) globalThis.IntersectionObserver = previousObserver;
    else delete globalThis.IntersectionObserver;
  });
  const { createRoot } = await import('react-dom/client');
  const container = fixture.window.document.getElementById('root');
  const root = createRoot(container);
  fixture.onUnmount(() => act(() => root.unmount()));
  let calls = 0;
  function Demo() {
    return h(
      'label',
      null,
      String(useDemoActivity()),
      h('input', { defaultValue: 'retained' }),
    );
  }
  const loader = async () => {
    if (++calls === 1) throw new Error('offline');
    return Demo;
  };
  await act(async () =>
    root.render(
      h(DeferredContent, {
        loader,
        componentProps: {},
        fallback: h('p', null, 'Loading'),
      }),
    ),
  );
  assert.equal(calls, 0);
  assert.equal(observers[0].options.rootMargin, '600px 0px');
  const demo = container.firstElementChild;
  await act(async () => observers[0].intersect(demo, true));
  assert.match(container.textContent, /could not be loaded/);
  await act(async () => container.querySelector('button').click());
  assert.equal(calls, 2);
  const input = container.querySelector('input');
  input.value = 'edited';
  await act(async () => observers[1].intersect(demo, true));
  assert.match(container.textContent, /true/);
  await act(async () => observers[1].intersect(demo, false));
  assert.match(container.textContent, /false/);
  assert.equal(container.querySelector('input'), input);
  assert.equal(input.value, 'edited');
  assert.equal(calls, 2);
});

test('a page anchor keeps demos deferred, while a section anchor loads its demo', async (t) => {
  const fixture = createDomFixture(t, 'https://example.test/#main');
  const { DeferredContent } = await fixture.load(
    'components/DeferredContent.tsx',
  );
  class Observer {
    observe() {}
    disconnect() {}
  }
  const previous = globalThis.IntersectionObserver;
  fixture.window.IntersectionObserver = Observer;
  globalThis.IntersectionObserver = Observer;
  t.after(() => {
    if (previous) globalThis.IntersectionObserver = previous;
    else delete globalThis.IntersectionObserver;
  });
  const { createRoot } = await import('react-dom/client');
  const root = createRoot(fixture.window.document.getElementById('root'));
  fixture.onUnmount(() => act(() => root.unmount()));
  let calls = 0;
  const loader = async () => {
    calls++;
    return () => h('p', null, 'Demo ready');
  };
  await act(async () =>
    root.render(
      h(
        'main',
        { id: 'main' },
        h(
          'section',
          null,
          h('h2', { id: 'demo-heading' }, 'Demo'),
          h(DeferredContent, {
            loader,
            componentProps: {},
            fallback: h('p', null, 'Loading'),
          }),
        ),
      ),
    ),
  );
  assert.equal(calls, 0);
  await act(async () => {
    fixture.window.history.replaceState(null, '', '#demo-heading');
    fixture.window.dispatchEvent(new fixture.window.Event('hashchange'));
  });
  assert.equal(calls, 1);
  assert.match(fixture.window.document.body.textContent, /Demo ready/);
});
