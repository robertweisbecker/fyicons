import { readFile, writeFile, mkdir, rm, cp, rename } from 'node:fs/promises';
import { execFileSync } from 'node:child_process';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { prepareRepositoryIcons } from './lib/prepare-icons.mjs';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const target = path.join(root, 'packages/fyicons');
const stage = path.join(target, '.build');
const prepared = await prepareRepositoryIcons(root);
await rm(stage, { recursive: true, force: true });
await mkdir(path.join(stage, 'src/icons'), { recursive: true });
for (const [file, source] of prepared.expected) {
  if (
    !file.startsWith('packages/fyicons/src/') ||
    file.endsWith('/registry.ts')
  )
    continue;
  // Node ESM and NodeNext consumers require explicit JS extensions.
  const component = path.basename(file).startsWith('Icon');
  const code = source.replace(
    /(from\s+['"])(\.\/[^'"]+)(['"])/g,
    (_, lead, specifier, quote) => {
      const relative = component
        ? specifier.replace('./', '../')
        : specifier.replace('./Icon', './icons/Icon');
      return lead + relative + '.js' + quote;
    },
  );
  await writeFile(
    path.join(stage, 'src', component ? 'icons' : '', path.basename(file)),
    code,
  );
}
await writeFile(
  path.join(stage, 'tsconfig.json'),
  JSON.stringify({
    compilerOptions: {
      target: 'ES2022',
      module: 'NodeNext',
      moduleResolution: 'NodeNext',
      jsx: 'react-jsx',
      strict: true,
      skipLibCheck: true,
      declaration: true,
      rootDir: 'src',
      outDir: 'dist',
      types: ['react'],
      lib: ['ES2022', 'DOM'],
    },
    include: ['src'],
  }),
);
execFileSync(
  path.join(root, 'node_modules/.bin/tsc'),
  ['-p', path.join(stage, 'tsconfig.json')],
  { stdio: 'inherit' },
);
await mkdir(path.join(stage, 'svg'));
for (const icon of prepared.icons) {
  await writeFile(path.join(stage, 'svg', icon.filename), icon.svg);
}
const pkg = JSON.parse(
  await readFile(path.join(target, 'package.json'), 'utf8'),
);
const manifest = {
  ...prepared.manifest,
  packageVersion: pkg.version,
  license: 'MIT',
};
await writeFile(
  path.join(stage, 'manifest.json'),
  JSON.stringify(manifest, null, 2) + '\n',
);
await cp(path.join(root, 'LICENSE'), path.join(stage, 'LICENSE'));
for (const name of ['dist', 'svg', 'manifest.json', 'LICENSE']) {
  await rm(path.join(target, name), { recursive: true, force: true });
  await rename(path.join(stage, name), path.join(target, name));
}
await rm(stage, { recursive: true, force: true });
console.log(
  `Built fyicons@${pkg.version}: ${prepared.icons.length} icons, ESM and declarations.`,
);
