import test from 'node:test';
import assert from 'node:assert/strict';

// Reload the module for each initial URL because it captures the hosting base.
test('overview, library, and examples resolve at the domain root and project subpaths', async () => {
  const original = globalThis.location;
  try {
    for (const [index, [pathname, hash, page, base]] of [
      ['/', '', 'home', '/'],
      ['/library/', '', 'library', '/'],
      ['/examples/index.html', '', 'examples', '/'],
      ['/fyicons/', '', 'home', '/fyicons/'],
      ['/fyicons', '', 'home', '/fyicons/'],
      ['/fyicons/library/index.html', '', 'library', '/fyicons/'],
      ['/fyicons/examples/', '', 'examples', '/fyicons/'],
      ['/fyicons/', '#library', 'library', '/fyicons/'],
      ['/fyicons/', '#examples', 'examples', '/fyicons/'],
    ].entries()) {
      globalThis.location = { pathname, hash };
      const navigation = await import(`../src/lib/navigation.ts?case=${index}`);
      assert.equal(navigation.pageFromLocation(), page, pathname + hash);
      assert.equal(navigation.pageHref('home'), base);
      assert.equal(navigation.pageHref('library'), base + 'library/');
      assert.equal(navigation.pageHref('examples'), base + 'examples/');
    }
  } finally {
    if (original === undefined) delete globalThis.location;
    else globalThis.location = original;
  }
});
