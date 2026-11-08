import test from 'node:test';
import assert from 'node:assert/strict';
import { mkdtemp, writeFile, readFile, rm } from 'node:fs/promises';
import { execFileSync } from 'node:child_process';
import { tmpdir } from 'node:os';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

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

test('icon changesets separate artwork and subtle source changes, with a legacy fallback', async () => {
  const root = path.resolve(
    path.dirname(fileURLToPath(import.meta.url)),
    '../..',
  );
  const cwd = await mkdtemp(
    path.join(tmpdir(), 'fyicons-changeset-categories-'),
  );
  try {
    const report = path.join(cwd, 'changes.json');
    const output = path.join(cwd, 'notes.md');
    await writeFile(
      report,
      JSON.stringify({
        schemaVersion: 1,
        base: 'empty',
        head: 'a'.repeat(40),
        changes: ['significant', 'subtle', 'identical', undefined].map(
          (visualChange) => ({
            flags: ['svg-bytes-changed'],
            visualChange,
            before: { componentName: 'IconOld' },
            after: { componentName: 'IconNew' },
          }),
        ),
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
    assert.match(notes, /Update the artwork for 1 icon\./);
    assert.match(notes, /Adjust SVG paths or subtle rendering for 2 icons/);
    assert.match(notes, /Change the SVG source for 1 icon\./);
  } finally {
    await rm(cwd, { recursive: true, force: true });
  }
});
