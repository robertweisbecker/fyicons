import { execFileSync } from 'node:child_process';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const cli = path.join(root, 'node_modules/@changesets/cli/bin.js');
const run = (args) =>
  execFileSync(process.execPath, args, { cwd: root, stdio: 'inherit' });
run([cli, 'version']);
execFileSync(
  'npm',
  [
    'install',
    '--package-lock-only',
    '--ignore-scripts',
    '--offline',
    '--no-audit',
    '--no-fund',
    '--cache',
    path.join(root, 'artifacts/npm-cache'),
  ],
  { cwd: root, stdio: 'inherit' },
);
run(['scripts/build-registry.mjs']);
