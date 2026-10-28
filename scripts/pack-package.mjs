import { mkdir, writeFile, rm } from 'node:fs/promises';
import { execFileSync } from 'node:child_process';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const output = path.join(root, 'artifacts/package');
await rm(output, { recursive: true, force: true });
await mkdir(output, { recursive: true });
execFileSync(process.execPath, ['scripts/build-package.mjs'], {
  cwd: root,
  stdio: 'inherit',
});
const result = JSON.parse(
  execFileSync(
    'npm',
    [
      'pack',
      '--workspace=fyicons',
      '--ignore-scripts',
      '--json',
      '--pack-destination',
      output,
      '--cache',
      path.join(root, 'artifacts/npm-cache'),
    ],
    { cwd: root, encoding: 'utf8', stdio: ['ignore', 'pipe', 'inherit'] },
  ),
);
await writeFile(
  path.join(output, 'pack.json'),
  JSON.stringify(result, null, 2) + '\n',
);
console.log(
  `Packed ${result[0].filename}: ${result[0].entryCount} files, ${result[0].size} bytes.`,
);
