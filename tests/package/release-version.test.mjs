import test from 'node:test';
import assert from 'node:assert/strict';
import {
  mkdtemp,
  mkdir,
  writeFile,
  readFile,
  rm,
  cp,
  symlink,
} from 'node:fs/promises';
import { execFileSync } from 'node:child_process';
import { tmpdir } from 'node:os';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

test('Changesets versions the library and site dependency and writes migration notes', async () => {
  const root = path.resolve(
    path.dirname(fileURLToPath(import.meta.url)),
    '../..',
  );
  const cwd = await mkdtemp(path.join(tmpdir(), 'fyicons-versions-'));
  try {
    await mkdir(path.join(cwd, 'packages/fyicons'), { recursive: true });
    await mkdir(path.join(cwd, 'apps/site'), { recursive: true });
    await writeFile(
      path.join(cwd, 'apps/site/package.json'),
      JSON.stringify({
        name: '@fyicons/site',
        version: '0.0.0',
        private: true,
        dependencies: { fyicons: '0.1.0' },
      }),
    );
    await cp(path.join(root, '.changeset'), path.join(cwd, '.changeset'), {
      recursive: true,
    });
    await writeFile(
      path.join(cwd, 'package.json'),
      JSON.stringify({
        name: 'fixture',
        packageManager: 'npm@11.6.0',
        private: true,
        workspaces: ['apps/*', 'packages/*'],
      }),
    );
    const pkg = { name: 'fyicons', version: '0.1.0' };
    await writeFile(
      path.join(cwd, 'packages/fyicons/package.json'),
      JSON.stringify(pkg),
    );
    await writeFile(path.join(cwd, 'package-lock.json'), '{}');
    // A throwaway Git repository lets the real changelog writer inspect commits.
    execFileSync('git', ['init', '--quiet'], { cwd });
    await symlink(
      path.join(root, 'node_modules'),
      path.join(cwd, 'node_modules'),
      'dir',
    );
    for (const [type, expected] of [
      ['patch', '0.1.1'],
      ['minor', '0.2.0'],
    ]) {
      await writeFile(
        path.join(cwd, '.changeset', `rename-${type}.md`),
        `---\n"fyicons": ${type}\n---\n\nReplace IconOld imports with IconNew.\n`,
      );
      execFileSync(
        process.execPath,
        [path.join(root, 'node_modules/@changesets/cli/bin.js'), 'version'],
        { cwd, stdio: 'pipe' },
      );
      assert.equal(
        JSON.parse(
          await readFile(
            path.join(cwd, 'packages/fyicons/package.json'),
            'utf8',
          ),
        ).version,
        expected,
      );
      assert.match(
        await readFile(path.join(cwd, 'packages/fyicons/CHANGELOG.md'), 'utf8'),
        /Replace IconOld imports with IconNew/,
      );
      const site = JSON.parse(
        await readFile(path.join(cwd, 'apps/site/package.json'), 'utf8'),
      );
      assert.equal(site.dependencies.fyicons, expected);
      assert.equal(site.private, true);
    }
  } finally {
    await rm(cwd, { recursive: true, force: true });
  }
});

test('icon changesets use minor for API changes and patch for artwork fixes', async () => {
  const root = path.resolve(
    path.dirname(fileURLToPath(import.meta.url)),
    '../..',
  );
  const cwd = await mkdtemp(path.join(tmpdir(), 'fyicons-changeset-notes-'));
  try {
    for (const [flag, expected] of [
      ['added', 'minor'],
      ['export-changed', 'minor'],
      ['svg-bytes-changed', 'patch'],
    ]) {
      const report = path.join(cwd, 'changes.json');
      const output = path.join(cwd, `${flag}.md`);
      await writeFile(
        report,
        JSON.stringify({
          schemaVersion: 1,
          base: 'empty',
          head: 'a'.repeat(40),
          changes: [
            {
              flags: [flag],
              before: { componentName: 'IconOld' },
              after: { componentName: 'IconNew' },
            },
          ],
        }),
      );
      execFileSync(process.execPath, [
        path.join(root, 'scripts/changeset-icons.mjs'),
        '--report',
        report,
        '--output',
        output,
      ]);
      const notes = await readFile(output, 'utf8');
      assert.ok(notes.startsWith(`---\n"fyicons": ${expected}\n---\n`));
      if (flag === 'export-changed')
        assert.match(notes, /Replace `IconOld` imports with `IconNew`/);
    }
  } finally {
    await rm(cwd, { recursive: true, force: true });
  }
});
