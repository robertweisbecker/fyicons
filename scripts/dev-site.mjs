import { spawn } from 'node:child_process';
import { watch } from 'node:fs';
import { createRequire } from 'node:module';
import { fileURLToPath } from 'node:url';
import { updateCategorySchema } from './lib/category-schema.ts';

const root = fileURLToPath(new URL('..', import.meta.url));
const site = fileURLToPath(new URL('../apps/site/', import.meta.url));
const require = createRequire(
  new URL('../apps/site/package.json', import.meta.url),
);
let timer;
let pending = Promise.resolve();

const watcher = watch(new URL('../icons/', import.meta.url), (_event, name) => {
  if (name !== 'manifest.json') return;
  clearTimeout(timer);
  timer = setTimeout(() => {
    // A partially saved manifest keeps the last valid editor completions.
    pending = pending.then(() => updateCategorySchema(root)).catch(() => {});
  }, 75);
});

const child = spawn(
  process.execPath,
  [
    require.resolve('next/dist/bin/next'),
    'dev',
    '--hostname',
    '127.0.0.1',
    ...process.argv.slice(2),
  ],
  { cwd: site, stdio: 'inherit' },
);
for (const signal of ['SIGINT', 'SIGTERM']) {
  process.on(signal, () => child.kill(signal));
}
child.on('exit', (code) => {
  clearTimeout(timer);
  watcher.close();
  process.exitCode = code ?? 0;
});
