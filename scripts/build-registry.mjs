import { readFile, writeFile, mkdir, rm } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { execFileSync } from 'node:child_process';
import { registrySchema } from 'shadcn/schema';
import { prepareRepositoryIcons } from './lib/prepare-icons.mjs';
import { preparePublication, publishFiles } from './lib/icon-files.mjs';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const check = process.argv.includes('--check');
const artifacts = process.argv.includes('--artifacts');
if (check && artifacts)
  throw new Error('Use --check or --artifacts, not both.');
const shadcn = (...args) =>
  execFileSync('npm', ['exec', '--offline', '--', 'shadcn', ...args], {
    cwd: root,
    stdio: 'inherit',
  });
const prepared = await prepareRepositoryIcons(root);
const pkg = JSON.parse(
  await readFile(path.join(root, 'packages/fyicons/package.json'), 'utf8'),
);
const license = await readFile(path.join(root, 'LICENSE'), 'utf8');
const file = (name) => ({
  path: `packages/fyicons/src/${name}`,
  type: 'registry:file',
  target: `@components/fyicons/${name}`,
});
const items = prepared.icons.map((icon) => ({
  name: icon.name,
  type: 'registry:component',
  title: icon.componentName,
  description: `The ${icon.name} icon from FYIcons ${pkg.version}.`,
  // Include the shared files so a GitHub ref or local JSON never pulls a
  // dependency from a different release. The CLI deduplicates shared targets.
  files: [
    file(`${icon.componentName}.tsx`),
    file('base.tsx'),
    file('types.ts'),
    {
      path: 'LICENSE',
      type: 'registry:file',
      target: '@components/fyicons/LICENSE',
    },
  ],
}));
const registry = registrySchema.parse({
  $schema: 'https://ui.shadcn.com/schema/registry.json',
  name: 'fyicons',
  homepage: 'https://icons.bob.fyi',
  items,
});
const source = JSON.stringify(registry, null, 2) + '\n';
if (check) {
  if ((await readFile(path.join(root, 'registry.json'), 'utf8')) !== source)
    throw new Error('Registry is stale. Run npm run generate:registry.');
  for (const item of items)
    for (const entry of item.files) {
      const expected =
        entry.path === 'LICENSE' ? license : prepared.expected.get(entry.path);
      if ((await readFile(path.join(root, entry.path), 'utf8')) !== expected)
        throw new Error(`Registry source is stale: ${entry.path}`);
    }
  console.log(`Registry is current (${items.length} items).`);
} else {
  await publishFiles(await preparePublication(root, prepared.expected));
  await writeFile(path.join(root, 'registry.json'), source);
  console.log(`Generated registry.json (${items.length} items).`);
}
shadcn('registry', 'validate', './registry.json');
// GitHub consumes the source registry directly. Build JSON only on request.
if (artifacts) {
  const output = path.join(root, 'artifacts/registry');
  await rm(output, { recursive: true, force: true });
  await mkdir(output, { recursive: true });
  shadcn('build', '--output', output);
  console.log(`Built ${items.length} registry items in artifacts/registry.`);
}
