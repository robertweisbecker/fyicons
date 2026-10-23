import assert from 'node:assert/strict';
import { execFileSync } from 'node:child_process';
import { readFile, readdir, writeFile, mkdir, mkdtemp } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { JSDOM } from 'jsdom';
import { loadRegistryItem } from 'shadcn/registry';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const run = (command, args, cwd = root) =>
  execFileSync(command, args, {
    cwd,
    stdio: 'inherit',
    env: {
      ...process.env,
      NEXT_TELEMETRY_DISABLED: '1',
      npm_config_cache: path.join(root, 'artifacts/npm-cache'),
    },
  });
run(process.execPath, ['scripts/pack-package.mjs']);
run(process.execPath, ['scripts/build-registry.mjs', '--check']);
const [packed] = JSON.parse(
  await readFile(path.join(root, 'artifacts/package/pack.json'), 'utf8'),
);
const tarball = path.join(root, 'artifacts/package', packed.filename);
const pkg = JSON.parse(
  await readFile(path.join(root, 'packages/fyicons/package.json'), 'utf8'),
);
assert.equal(packed.version, pkg.version);
const fileNames = packed.files.map(({ path: file }) => file);
assert.ok(
  fileNames.every((file) =>
    /^(dist\/|svg\/|package\.json$|manifest\.json$|LICENSE$|README\.md$|CHANGELOG\.md$)/.test(
      file,
    ),
  ),
);
assert.ok(
  !fileNames.some((file) => /registry|catalog|\.tsx$|\.map$/.test(file)),
);
const manifest = JSON.parse(
  await readFile(path.join(root, 'icons/manifest.json'), 'utf8'),
);
assert.equal(
  fileNames.filter((file) => file.startsWith('svg/')).length,
  manifest.icons.length,
);
assert.equal(
  fileNames.filter((file) => /^dist\/icons\/.*\.js$/.test(file)).length,
  manifest.icons.length,
);
const scratch = await mkdtemp(path.join(tmpdir(), 'fyicons-consumers-'));
console.log(`Fresh consumers: ${scratch}`);
// Resolve two items with shadcn's source loader. Temporary payloads let the
// installer test unpublished source without building the full JSON registry.
const registryFiles = [];
for (const name of ['sun', 'arrow-up-right']) {
  const item = await loadRegistryItem(name, { cwd: root });
  for (const file of item.files)
    assert.equal(
      file.content,
      await readFile(path.join(root, file.path), 'utf8'),
    );
  const file = path.join(scratch, `${name}.json`);
  await writeFile(file, JSON.stringify(item));
  registryFiles.push(file);
}
const rootPkg = JSON.parse(
  await readFile(path.join(root, 'package.json'), 'utf8'),
);
const sitePkg = JSON.parse(
  await readFile(path.join(root, 'apps/site/package.json'), 'utf8'),
);
const write = async (cwd, file, content) => {
  await mkdir(path.dirname(path.join(cwd, file)), { recursive: true });
  await writeFile(
    path.join(cwd, file),
    typeof content === 'string' ? content : JSON.stringify(content, null, 2),
  );
};
const smoke = `import assert from 'node:assert/strict';
import { createElement, createRef } from 'react';
import { renderToString } from 'react-dom/server';
import { hydrateRoot } from 'react-dom/client';
import { IconSun } from 'fyicons';
import DirectSun from 'fyicons/icons/IconSun';
import { JSDOM } from ${JSON.stringify(import.meta.resolve('jsdom'))};
assert.equal(IconSun, DirectSun);
const ref = createRef();
let clicks = 0;
const tree = createElement('div', null, createElement(IconSun, {title:'Light mode', ref, size:24, onClick:()=>clicks++}), createElement(DirectSun, {title:'Other light'}));
const html = renderToString(tree);
assert.match(html, /width="24"/);
assert.match(html, /role="img"/);
assert.match(renderToString(createElement(IconSun)), /aria-hidden="true"/);
const dom = new JSDOM('<div id="root">'+html+'</div>', {url:'http://localhost'});
globalThis.window=dom.window;globalThis.document=dom.window.document;
globalThis.HTMLElement=dom.window.HTMLElement;globalThis.SVGElement=dom.window.SVGElement;
const errors=[]; const mounted=hydrateRoot(document.querySelector('#root'),tree,{onRecoverableError:error=>errors.push(error)});
await new Promise(resolve=>setTimeout(resolve,100));
assert.deepEqual(errors,[]); assert.equal(ref.current.tagName,'svg');
ref.current.dispatchEvent(new dom.window.MouseEvent('click',{bubbles:true}));assert.equal(clicks,1);
const ids=[...document.querySelectorAll('[id]')].map(node=>node.id);assert.equal(new Set(ids).size,ids.length);
mounted.unmount();dom.window.close(); console.log('SSR, hydration, refs, event handlers, labels, and direct imports passed.');
`;
for (const reactVersion of ['18.3.1', sitePkg.dependencies.react]) {
  const cwd = path.join(scratch, `react-${reactVersion}`);
  await mkdir(cwd);
  const isNext = reactVersion.startsWith('19.');
  await write(cwd, 'package.json', {
    name: 'fyicons-consumer',
    private: true,
    type: 'module',
    dependencies: {
      fyicons: `file:${tarball}`,
      react: reactVersion,
      'react-dom': reactVersion,
      ...(isNext ? { next: '16.4.2' } : {}),
    },
    devDependencies: {
      '@types/react': isNext
        ? rootPkg.devDependencies['@types/react']
        : '18.3.28',
      '@types/react-dom': isNext
        ? rootPkg.devDependencies['@types/react-dom']
        : '18.3.7',
      '@types/node': rootPkg.devDependencies['@types/node'],
      typescript: rootPkg.devDependencies.typescript,
    },
  });
  run(
    'npm',
    [
      'install',
      '--include=dev',
      '--ignore-scripts',
      '--no-audit',
      '--no-fund',
      '--fetch-retries=0',
      '--fetch-timeout=30000',
    ],
    cwd,
  );
  const installed = path.join(cwd, 'node_modules/fyicons');
  assert.equal(
    await readFile(path.join(installed, 'LICENSE'), 'utf8'),
    await readFile(path.join(root, 'LICENSE'), 'utf8'),
  );
  const packagedManifest = JSON.parse(
    await readFile(path.join(installed, 'manifest.json'), 'utf8'),
  );
  assert.equal(packagedManifest.packageVersion, pkg.version);
  assert.deepEqual(packagedManifest.icons, manifest.icons);
  for (const icon of manifest.icons)
    assert.deepEqual(
      await readFile(path.join(installed, 'svg', icon.filename)),
      await readFile(path.join(root, 'icons', icon.filename)),
    );
  await write(cwd, 'smoke.mjs', smoke);
  run(process.execPath, ['smoke.mjs'], cwd);
  await write(
    cwd,
    'typecheck.tsx',
    `import { createRef } from 'react';\nimport { IconSun, type IconProps } from 'fyicons';\nimport DirectSun from 'fyicons/icons/IconSun';\nconst props:IconProps={size:'1em',title:'Light mode',ref:createRef<SVGSVGElement>()};\nexport const icon=<><IconSun {...props}/><DirectSun aria-label="Light mode" onClick={event=>event.currentTarget.focus()}/></>;\n`,
  );
  for (const module of ['NodeNext', 'ESNext']) {
    await write(cwd, 'tsconfig.json', {
      compilerOptions: {
        strict: true,
        noEmit: true,
        target: 'ES2022',
        module,
        moduleResolution: module === 'NodeNext' ? 'NodeNext' : 'Bundler',
        jsx: 'react-jsx',
        skipLibCheck: false,
        types: ['react'],
      },
      include: ['typecheck.tsx'],
    });
    run(path.join(root, 'node_modules/.bin/tsc'), ['--noEmit'], cwd);
  }
  await write(
    cwd,
    'index.html',
    '<div id="root"></div><script type="module" src="/entry.tsx"></script>',
  );
  await write(
    cwd,
    'entry.tsx',
    `import * as React from 'react';import {createRoot} from 'react-dom/client';import {IconSun} from 'fyicons';createRoot(document.getElementById('root')!).render(<IconSun title="Light mode"/>);`,
  );
  const vite = await import('vite');
  let included;
  await vite.build({
    root: cwd,
    configFile: false,
    logLevel: 'warn',
    build: {
      outDir: 'vite-dist',
    },
    plugins: [
      {
        name: 'verify-icon-tree-shaking',
        generateBundle(_, bundle) {
          included = Object.values(bundle)
            .filter((item) => item.type === 'chunk')
            .flatMap((chunk) => Object.keys(chunk.modules))
            .filter((file) => file.includes('/fyicons/dist/icons/'));
        },
      },
    ],
  });
  assert.equal(
    included.length,
    1,
    `Only one icon should reach the bundle: ${included}`,
  );
  assert.match(included[0], /IconSun\.js$/);
  // Install source-loaded items through the real CLI with a non-default alias.
  // Shared files must stay together and need no app code.
  await write(cwd, 'components.json', {
    $schema: 'https://ui.shadcn.com/schema.json',
    style: 'new-york',
    rsc: true,
    tsx: true,
    tailwind: { css: 'styles.css', baseColor: 'neutral', cssVariables: true },
    aliases: {
      components: '~/components',
      ui: '~/components/ui',
      utils: '~/lib/utils',
      hooks: '~/hooks',
      lib: '~/lib',
    },
  });
  await write(cwd, 'styles.css', '');
  await write(cwd, 'tsconfig.json', {
    compilerOptions: {
      strict: true,
      noEmit: true,
      jsx: 'react-jsx',
      target: 'ES2022',
      module: 'ESNext',
      moduleResolution: 'Bundler',
      paths: { '~/*': ['./src/*'] },
      skipLibCheck: false,
    },
    include: ['src'],
  });
  run(
    process.execPath,
    [
      path.join(root, 'node_modules/shadcn/dist/index.js'),
      'add',
      ...registryFiles,
      '--yes',
    ],
    cwd,
  );
  const registryIcon = await readFile(
    path.join(cwd, 'src/components/fyicons/IconSun.tsx'),
    'utf8',
  );
  assert.deepEqual(
    (await readdir(path.join(cwd, 'src/components/fyicons'))).sort(),
    ['IconArrowUpRight.tsx', 'IconSun.tsx', 'LICENSE', 'base.tsx', 'types.ts'],
  );
  assert.ok(!registryIcon.includes('@/'));
  assert.equal(
    await readFile(path.join(cwd, 'src/components/fyicons/LICENSE'), 'utf8'),
    await readFile(path.join(root, 'LICENSE'), 'utf8'),
  );
  run(path.join(root, 'node_modules/.bin/tsc'), ['--noEmit'], cwd);
  if (isNext) {
    await write(cwd, 'tsconfig.json', {
      compilerOptions: {
        strict: true,
        noEmit: true,
        jsx: 'react-jsx',
        target: 'ES2022',
        module: 'ESNext',
        moduleResolution: 'Bundler',
        paths: { '~/*': ['./src/*'] },
        skipLibCheck: true,
      },
      include: ['app', 'src', '.next/types/**/*.ts'],
    });
    await write(
      cwd,
      'app/layout.tsx',
      `export default function Layout({children}:{children:React.ReactNode}){return <html lang="en"><body>{children}</body></html>}`,
    );
    await write(
      cwd,
      'app/page.tsx',
      `import {IconSun} from 'fyicons';import DirectSun from 'fyicons/icons/IconSun';import RegistrySun from '../src/components/fyicons/IconSun';export default async function Page(){await Promise.resolve();return <main><h1>FYIcons consumer</h1><IconSun title="Package icon"/><DirectSun title="Direct icon"/><RegistrySun title="Registry icon"/></main>}`,
    );
    await write(
      cwd,
      'app/interactive/page.tsx',
      `'use client';import {useRef,useState} from 'react';import {IconSun} from 'fyicons';import DirectSun from 'fyicons/icons/IconSun';import RegistrySun from '../../src/components/fyicons/IconSun';export default function Page(){const ref=useRef<SVGSVGElement>(null);const [clicks,setClicks]=useState(0);return <main><button type="button" onClick={()=>setClicks(clicks+1)}><IconSun ref={ref} title="Package icon"/><DirectSun title="Direct icon"/><RegistrySun title="Registry icon"/></button><output>{clicks}</output></main>}`,
    );
    run(
      process.execPath,
      ['node_modules/next/dist/bin/next', 'build', '--webpack'],
      cwd,
    );
    const serverReferences = await readFile(
      path.join(cwd, '.next/server/app/page_client-reference-manifest.js'),
      'utf8',
    );
    assert.doesNotMatch(
      serverReferences,
      /(?:node_modules|components)\/fyicons\//,
      'Static icons must not create client references.',
    );
    const clientReferences = await readFile(
      path.join(
        cwd,
        '.next/server/app/interactive/page_client-reference-manifest.js',
      ),
      'utf8',
    );
    assert.match(clientReferences, /app\/interactive\/page\.tsx/);
    for (const page of ['index', 'interactive']) {
      const html = await readFile(
        path.join(cwd, `.next/server/app/${page}.html`),
        'utf8',
      );
      const dom = new JSDOM(html);
      const icons = [...dom.window.document.querySelectorAll('main svg')];
      assert.deepEqual(
        icons.map((icon) => icon.querySelector('title')?.textContent),
        ['Package icon', 'Direct icon', 'Registry icon'],
      );
      const ids = icons.map((icon) => icon.querySelector('title').id);
      assert.equal(new Set(ids).size, icons.length);
      for (const icon of icons) {
        assert.equal(
          icon.getAttribute('aria-labelledby'),
          icon.querySelector('title').id,
        );
        assert.equal(icon.getAttribute('role'), 'img');
      }
      dom.window.close();
    }
  }
  console.log(`React ${reactVersion}: consumer checks passed.`);
}
await write(path.join(root, 'artifacts'), 'verification.json', {
  package: pkg.name,
  version: pkg.version,
  integrity: packed.integrity,
  consumers: scratch,
  react: ['18.3.1', sitePkg.dependencies.react],
  next: '16.4.2',
  checks: [
    'tarball contents',
    'SVG byte fidelity',
    'MIT notice',
    'SSR',
    'hydration',
    'refs',
    'event handlers',
    'accessible names',
    'NodeNext types',
    'Bundler types',
    'Vite tree shaking',
    'shadcn source registry validation',
    'shadcn source loader and install',
    'Next.js production build',
    'Next.js server and client boundaries',
  ],
});
console.log('Release preparation checks passed. Nothing was published.');
