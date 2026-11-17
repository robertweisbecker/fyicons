import assert from 'node:assert/strict';
import { act, createElement as h, createRef } from 'react';
import { renderToString } from 'react-dom/server';
import { hydrateRoot } from 'react-dom/client';
import { FyiProvider } from 'fyicons/client';
import { JSDOM } from 'jsdom';

// Copied into each fresh consumer so React and the icons resolve from its install.
export async function verifyComposition(Icon) {
  const outerRef = createRef();
  const innerRef = createRef();
  let clicks = 0;
  const tree = (showChild = true) =>
    h(
      FyiProvider,
      { size: 24, color: 'red' },
      h(
        Icon,
        {
          ref: outerRef,
          title: 'Composite',
          'aria-label': 'Composite',
          onClick: () => clicks++,
        },
        showChild &&
          h(
            Icon,
            {
              ref: innerRef,
              size: 8,
              x: 4,
              y: 5,
              title: 'Nested',
              className: 'nested',
              color: 'blue',
            },
            h('circle', { cx: 8, cy: 8, r: 2, fill: 'currentColor' }),
          ),
      ),
    );
  const dom = new JSDOM('<div id="root">' + renderToString(tree()) + '</div>');
  globalThis.window = dom.window;
  globalThis.document = dom.window.document;
  globalThis.HTMLElement = dom.window.HTMLElement;
  globalThis.SVGElement = dom.window.SVGElement;
  globalThis.IS_REACT_ACT_ENVIRONMENT = true;
  const errors = [];
  let root;
  try {
    await act(async () => {
      root = hydrateRoot(document.querySelector('#root'), tree(), {
        onRecoverableError: (error) => errors.push(error),
      });
    });
    assert.deepEqual(errors, []);
    assert.ok(outerRef.current instanceof dom.window.SVGSVGElement);
    assert.ok(innerRef.current instanceof dom.window.SVGSVGElement);
    assert.equal(innerRef.current.parentElement, outerRef.current);
    assert.equal(outerRef.current.getAttribute('aria-label'), 'Composite');
    assert.equal(outerRef.current.getAttribute('role'), 'img');
    assert.equal(outerRef.current.hasAttribute('aria-hidden'), false);
    for (const [name, value] of Object.entries({
      x: '4',
      y: '5',
      width: '8',
      height: '8',
      color: 'blue',
      viewBox: '0 0 16 16',
      'aria-hidden': 'true',
    })) {
      assert.equal(innerRef.current.getAttribute(name), value);
    }
    assert.ok(innerRef.current.classList.contains('nested'));
    assert.equal(innerRef.current.lastElementChild.localName, 'circle');
    assert.equal(innerRef.current.querySelectorAll('circle').length, 1);
    const ids = [...document.querySelectorAll('[id]')].map((node) => node.id);
    assert.equal(new Set(ids).size, ids.length);
    innerRef.current.dispatchEvent(
      new dom.window.MouseEvent('click', { bubbles: true }),
    );
    assert.equal(clicks, 1);
    const outer = outerRef.current;
    const artwork = [...outer.children]
      .filter((node) => node.localName !== 'svg')
      .map((node) => node.outerHTML);
    await act(async () => root.render(tree(false)));
    assert.equal(outerRef.current, outer);
    assert.equal(innerRef.current, null);
    assert.equal(outer.querySelector('svg'), null);
    assert.deepEqual(
      [...outer.children].map((node) => node.outerHTML),
      artwork,
    );
  } finally {
    if (root) await act(async () => root.unmount());
    dom.window.close();
  }
}
