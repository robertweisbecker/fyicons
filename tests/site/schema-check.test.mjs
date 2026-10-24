import test from 'node:test';
import assert from 'node:assert/strict';
import { execFile } from 'node:child_process';
import { promisify } from 'node:util';
import {
  cp,
  lstat,
  mkdir,
  mkdtemp,
  readFile,
  readdir,
  readlink,
  rm,
  symlink,
  writeFile,
} from 'node:fs/promises';
import { tmpdir } from 'node:os';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { createCategorySchema } from '../../scripts/lib/category-schema.ts';

const run = promisify(execFile);
const schemaPath = 'apps/site/public/icon-categories.schema.json';
const serialize = (value) => JSON.stringify(value, null, 2) + '\n';

async function createFixture(root) {
  await mkdir(path.join(root, 'icons'));
  await mkdir(path.join(root, 'apps/site/public'), { recursive: true });
  await mkdir(path.join(root, 'apps/site/src/lib'), { recursive: true });
  await cp(
    new URL('../../scripts/', import.meta.url),
    path.join(root, 'scripts'),
    {
      recursive: true,
    },
  );
  await cp(
    new URL('../../apps/site/src/lib/icon-categories.ts', import.meta.url),
    path.join(root, 'apps/site/src/lib/icon-categories.ts'),
  );
  await symlink(
    fileURLToPath(new URL('../../node_modules', import.meta.url)),
    path.join(root, 'node_modules'),
    'dir',
  );
  const icons = [
    { name: 'arrow-up', componentName: 'IconArrowUp' },
    { name: 'anchor', componentName: 'IconAnchor' },
  ].map((icon, index) => ({
    ...icon,
    id: `fixture:${index + 1}`,
    baseName: icon.name,
    filename: `${icon.name}-16.svg`,
    width: 16,
    height: 16,
    aliases: [],
  }));
  await writeFile(
    path.join(root, 'icons/manifest.json'),
    serialize({ name: 'FYIcons', icons }),
  );
  await writeFile(
    path.join(root, 'apps/site/public/icon-categories.json'),
    serialize({ categories: [] }),
  );
  for (const icon of icons)
    await writeFile(
      path.join(root, 'icons', icon.filename),
      '<svg width="16" height="16" viewBox="0 0 16 16"><path d="M1 1h2"/></svg>\n',
    );
  return serialize(createCategorySchema(icons.map(({ name }) => name)));
}

// Include file mtimes to detect writes even when the bytes would be identical.
async function snapshot(root) {
  const result = {};
  async function walk(directory, relative = '') {
    for (const name of (await readdir(directory)).sort()) {
      const file = path.join(directory, name);
      const key = path.posix.join(relative, name);
      const stat = await lstat(file, { bigint: true });
      if (stat.isSymbolicLink()) {
        result[key] = { link: await readlink(file), mtime: stat.mtimeNs };
      } else if (stat.isDirectory()) {
        result[`${key}/`] = { mtime: stat.mtimeNs };
        await walk(file, key);
      } else {
        result[key] = {
          bytes: (await readFile(file)).toString('base64'),
          mtime: stat.mtimeNs,
        };
      }
    }
  }
  await walk(root);
  return result;
}

for (const state of ['missing', 'stale']) {
  test(`check rejects a ${state} category schema without writes, then generation restores exact bytes`, async (t) => {
    const root = await mkdtemp(path.join(tmpdir(), 'fyicons-schema-check-'));
    t.after(() => rm(root, { recursive: true, force: true }));
    const expected = await createFixture(root);
    const generate = (args = []) =>
      run(process.execPath, ['scripts/generate-icons.mjs', ...args], {
        cwd: root,
      });
    const file = path.join(root, schemaPath);
    await generate();
    assert.equal(await readFile(file, 'utf8'), expected);
    await generate(['--check']);

    if (state === 'missing') await rm(file);
    else await writeFile(file, serialize(createCategorySchema(['anchor'])));
    const before = await snapshot(root);
    await assert.rejects(generate(['--check']), (error) => {
      assert.equal(error.code, 1);
      assert.match(error.stderr, /Generated icon files are stale/);
      assert.match(
        error.stderr,
        /^apps\/site\/public\/icon-categories\.schema\.json$/m,
      );
      return true;
    });
    assert.deepEqual(await snapshot(root), before);

    await generate();
    assert.equal(await readFile(file, 'utf8'), expected);
    await generate(['--check']);
  });
}
