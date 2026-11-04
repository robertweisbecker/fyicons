import assert from 'node:assert/strict';
import { execFileSync } from 'node:child_process';
import { readFile, readdir, writeFile, mkdir, mkdtemp } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { JSDOM } from 'jsdom';
import { loadRegistryItem } from 'shadcn/registry';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const run = (command, args, cwd = root, env = {}) =>
  execFileSync(command, args, {
    cwd,
    stdio: 'inherit',
    env: {
      ...process.env,
      ...env,
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
import { act, createElement, createRef } from 'react';
import { renderToString } from 'react-dom/server';
import { hydrateRoot } from 'react-dom/client';
import { IconSun } from 'fyicons';
import DirectSun from 'fyicons/icons/IconSun';
import { FyiProvider, IconSun as ClientSun } from 'fyicons/client';
import { JSDOM } from ${JSON.stringify(import.meta.resolve('jsdom'))};
assert.equal(IconSun, DirectSun);
const ref = createRef();
let clicks = 0;
const tree = (size = 20, color = 'red') => createElement(FyiProvider, {size, color, className:'provider-icon', style:{verticalAlign:'middle'}}, createElement('div', null, createElement(ClientSun, {title:'Light mode', 'aria-label':'Light mode', className:'consumer-icon', ref, size:24, onClick:()=>clicks++}), createElement(ClientSun, {title:'Other light'})));
const html = renderToString(tree());
assert.match(html, /width="24"/);
assert.match(html, /role="img"/);
assert.match(renderToString(createElement(IconSun)), /aria-hidden="true"/);
assert.match(renderToString(createElement(ClientSun)), /width="16"/);
assert.match(renderToString(createElement(FyiProvider, {size:32}, createElement(IconSun))), /width="16"/);
const dom = new JSDOM('<div id="root">'+html+'</div>', {url:'http://localhost'});
globalThis.window=dom.window;globalThis.document=dom.window.document;
globalThis.HTMLElement=dom.window.HTMLElement;globalThis.SVGElement=dom.window.SVGElement;
globalThis.IS_REACT_ACT_ENVIRONMENT=true;
const errors=[]; let mounted;
await act(async()=>{mounted=hydrateRoot(document.querySelector('#root'),tree(),{onRecoverableError:error=>errors.push(error)})});
assert.deepEqual(errors,[]); assert.equal(ref.current.tagName,'svg');
assert.equal(ref.current.getAttribute('aria-label'),'Light mode');
assert.equal(ref.current.getAttribute('role'),'img');
assert.equal(ref.current.hasAttribute('aria-hidden'),false);
assert.equal(ref.current.getAttribute('class'),'fy-icon fy-sun provider-icon consumer-icon');
assert.equal(ref.current.getAttribute('color'),'red');
assert.equal(ref.current.style.verticalAlign,'middle');
const decorative=document.querySelectorAll('svg')[1];
assert.equal(decorative.getAttribute('aria-hidden'),'true');
assert.equal(decorative.hasAttribute('aria-label'),false);
assert.equal(decorative.hasAttribute('role'),false);
assert.equal(decorative.getAttribute('class'),'fy-icon fy-sun provider-icon');
assert.equal(decorative.getAttribute('width'),'20');
ref.current.dispatchEvent(new dom.window.MouseEvent('click',{bubbles:true}));assert.equal(clicks,1);
await act(async()=>mounted.render(tree(28, 'blue')));
assert.equal(decorative.getAttribute('width'),'28');
assert.equal(ref.current.getAttribute('width'),'24');
assert.equal(ref.current.getAttribute('color'),'blue');
const ids=[...document.querySelectorAll('[id]')].map(node=>node.id);assert.equal(new Set(ids).size,ids.length);
await act(async()=>mounted.unmount());dom.window.close(); console.log('SSR, provider hydration and updates, refs, event handlers, labels, classes, and direct imports passed.');
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
  assert.doesNotMatch(
    JSON.stringify(packagedManifest),
    /"(?:sourceUrl|fileKey)"|figma\.com\/(?:design|file)\//,
  );
  assert.deepEqual(packagedManifest.source, manifest.source);
  assert.deepEqual(packagedManifest.icons, manifest.icons);
  for (const icon of manifest.icons)
    assert.deepEqual(
      await readFile(path.join(installed, 'svg', icon.filename)),
      await readFile(path.join(root, 'icons', icon.filename)),
    );
  await write(cwd, 'smoke.mjs', smoke);
  // act is development-only; an earlier Vite build can change NODE_ENV.
  run(process.execPath, ['smoke.mjs'], cwd, { NODE_ENV: 'development' });
  await write(
    cwd,
    'typecheck.tsx',
    `import { createRef } from 'react';
import { IconSun, type IconProps } from 'fyicons';
import DirectSun from 'fyicons/icons/IconSun';
import { FyiProvider, IconSun as ClientSun, type IconDefaults, type FyiProviderProps } from 'fyicons/client';
const props:IconProps={size:'1em',title:'Light mode',ref:createRef<SVGSVGElement>()};
const defaults:IconDefaults={size:20,color:'red',className:'shared',style:{opacity:0.5}};
const providerProps:FyiProviderProps={...defaults,children:<ClientSun {...props}/>};
export const icon=<><IconSun {...props}/><DirectSun aria-label="Light mode" onClick={event=>event.currentTarget.focus()}/><FyiProvider {...providerProps}><ClientSun {...props}/></FyiProvider></>;
// @ts-expect-error Accessible names belong on individual icons.
const label:FyiProviderProps={'aria-label':'Shared label'};
// @ts-expect-error IDs belong on individual icons.
const id:FyiProviderProps={id:'shared'};
// @ts-expect-error Handlers belong on individual icons.
const handler:FyiProviderProps={onClick:()=>{}};
// @ts-expect-error Refs belong on individual icons.
const ref:FyiProviderProps={ref:createRef<SVGSVGElement>()};
`,
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
  for (const entry of ['fyicons', 'fyicons/client']) {
    await write(
      cwd,
      'index.html',
      '<div id="root"></div><script type="module" src="/entry.tsx"></script>',
    );
    await write(
      cwd,
      'entry.tsx',
      `import * as React from 'react';import {createRoot} from 'react-dom/client';import {IconSun} from '${entry}';createRoot(document.getElementById('root')!).render(<IconSun title="Light mode"/>);`,
    );
    const vite = await import('vite');
    let included;
    let includesProvider;
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
            const modules = Object.values(bundle)
              .filter((item) => item.type === 'chunk')
              .flatMap((chunk) => Object.keys(chunk.modules));
            included = modules.filter((file) =>
              file.includes('/fyicons/dist/icons/'),
            );
            includesProvider = modules.some((file) =>
              file.endsWith('/fyicons/dist/provider.js'),
            );
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
    assert.equal(
      includesProvider,
      entry === 'fyicons/client',
      'Only the opt-in client entry includes context.',
    );
  }
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
      `import {IconSun} from 'fyicons';import DirectSun from 'fyicons/icons/IconSun';import RegistrySun from '../src/components/fyicons/IconSun';export default async function Page(){await Promise.resolve();return <main><h1>FYIcons consumer</h1><IconSun title="Package icon" aria-label="Package icon"/><DirectSun title="Direct icon" aria-label="Direct icon"/><RegistrySun title="Registry icon" aria-label="Registry icon" className="consumer-icon"/></main>}`,
    );
    await write(
      cwd,
      'app/interactive/page.tsx',
      `'use client';import {useRef,useState} from 'react';import {IconSun} from 'fyicons';import DirectSun from 'fyicons/icons/IconSun';import RegistrySun from '../../src/components/fyicons/IconSun';export default function Page(){const ref=useRef<SVGSVGElement>(null);const [clicks,setClicks]=useState(0);return <main><button type="button" onClick={()=>setClicks(clicks+1)}><IconSun ref={ref} title="Package icon" aria-label="Package icon"/><DirectSun title="Direct icon" aria-label="Direct icon"/><RegistrySun title="Registry icon" aria-label="Registry icon" className="consumer-icon"/></button><output>{clicks}</output></main>}`,
    );
    await write(
      cwd,
      'app/provider/page.tsx',
      `import {IconSun as StaticSun} from 'fyicons';import {FyiProvider,IconSun} from 'fyicons/client';import ScopedIcons from './scoped-icons';export default async function Page(){await Promise.resolve();return <main><FyiProvider size={28} color="red" className="provider-icon"><IconSun title="Client icon"/><StaticSun title="Server icon"/><ScopedIcons/></FyiProvider></main>}`,
    );
    await write(
      cwd,
      'app/provider/scoped-icons.tsx',
      `'use client';import {FyiProvider,IconSun} from 'fyicons/client';export default function ScopedIcons(){return <FyiProvider size={36} className="nested-icon"><IconSun title="Nested icon"/></FyiProvider>}`,
    );
    run(
      process.execPath,
      ['node_modules/next/dist/bin/next', 'build', '--webpack'],
      cwd,
    );
    // Next's reference manifest also lists clients from sibling routes. The
    // route's RSC payload proves these icons render as SVGs on the server.
    const serverPayload = await readFile(
      path.join(cwd, '.next/server/app/index.rsc'),
      'utf8',
    );
    assert.equal(
      [...serverPayload.matchAll(/\["\$","svg",/g)].length,
      3,
      'Package, direct, and registry icons must render complete SVGs in the server payload.',
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
          icon.getAttribute('aria-label'),
          icon.querySelector('title').textContent,
        );
        assert.equal(icon.hasAttribute('aria-labelledby'), false);
        assert.equal(icon.hasAttribute('aria-hidden'), false);
        assert.equal(icon.getAttribute('role'), 'img');
      }
      assert.deepEqual(
        icons.map((icon) => icon.getAttribute('class')),
        ['fy-icon fy-sun', 'fy-icon fy-sun', 'fy-icon fy-sun consumer-icon'],
      );
      dom.window.close();
    }
    const providerDom = new JSDOM(
      await readFile(path.join(cwd, '.next/server/app/provider.html'), 'utf8'),
    );
    const providerIcons = [
      ...providerDom.window.document.querySelectorAll('main svg'),
    ];
    assert.deepEqual(
      providerIcons.map((icon) => icon.getAttribute('width')),
      ['28', '16', '36'],
    );
    assert.deepEqual(
      providerIcons.map((icon) => icon.getAttribute('color')),
      ['red', null, 'red'],
    );
    assert.deepEqual(
      providerIcons.map((icon) => icon.getAttribute('class')),
      [
        'fy-icon fy-sun provider-icon',
        'fy-icon fy-sun',
        'fy-icon fy-sun provider-icon nested-icon',
      ],
    );
    const titleIds = providerIcons.map(
      (icon) => icon.querySelector('title').id,
    );
    assert.equal(new Set(titleIds).size, 3);
    providerDom.window.close();
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
    'provider defaults, hydration, and updates',
    'refs',
    'event handlers',
    'accessible names',
    'decorative defaults and icon classes',
    'NodeNext types',
    'Bundler types',
    'Vite tree shaking',
    'shadcn source registry validation',
    'shadcn source loader and install',
    'Next.js production build',
    'Next.js server and client boundaries',
    'Next.js provider and nested client icons alongside static server icons',
  ],
});
console.log('Release preparation checks passed. Nothing was published.');
