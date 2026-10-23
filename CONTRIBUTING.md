# Contributing

## Set up the workspace

Use Node 24, as specified in [`.nvmrc`](.nvmrc). Run these commands from the repository root:

```sh
npm ci
npm run dev
```

`dev` generates the icons, then starts Vite. `npm run build` generates the icons, runs the TypeScript check, and builds the website. `npm run preview` serves that build.

The root package manages the npm workspaces. The private website is in `apps/site`. Its dependencies and Vite settings stay in that workspace. The public library is in `packages/fyicons`. For artwork and imports, see [Icon sources](docs/icon-sources.md). For the npm package and shadcn registry, see [Releases](docs/releases.md).

## Choose checks for the change

| Change                               | Checks                                                                                                                                                 |
| ------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Documentation                        | Do checks of formatting, relative links, examples, and statements against the source.                                                                  |
| ZIP README or archive contents       | Run `node --test tests/icon-archive.test.mjs`.                                                                                                         |
| Icon sources, generation, or imports | Run `npm test`, `npm run check:icons`, and `npm run build`.                                                                                            |
| Website behavior                     | Run the affected tests and `npm run build`. Do checks at affected screen widths. Test keyboard controls and accessible names. Look for browser errors. |
| Package or registry                  | Use the [release checks](docs/releases.md#release-checks).                                                                                             |

For a focused icon check, use `npm run test:icons`. Those tests are also part of `npm test`; there is no need to run both for the same change. For a TypeScript check without a build, use `npm run typecheck`.

Tests use temporary fixtures and in-memory archives. Use tests for ZIP contents; do not use browser download controls or Save As dialogs for verification. Test observable behavior and actual generated output. Do not duplicate production logic in tests.

Use Prettier on the files you edit. For example:

```sh
node_modules/.bin/prettier --check AGENTS.md CONTRIBUTING.md
git diff --check
```

Do not format generated TSX files by hand. Examine the working diff after a build because generation can change tracked files.

## Website changes

Use the shared controls in `apps/site/src/components/ui/`. Keep Tailwind utilities with their components. Keep conditional class names complete so Tailwind can detect them. `apps/site/src/styles.css` contains theme tokens and base rules.

Use the shared Badge as a button or link for interactive category badges. Keep accessible names and keyboard behavior when changing controls.

The website uses local font files. Keep their notices in `apps/site/public/licenses/`. The icon package uses the root MIT license; the fonts have separate licenses.

## Website deployment

[The Pages workflow](.github/workflows/pages.yml) builds, tests, and deploys `apps/site/dist/` from `main`. Pull requests run checks without deployment. Root documentation changes do not trigger a site build. Changes to the ZIP README do trigger a build because downloads include that file.

For a new GitHub Pages deployment, select **GitHub Actions** as the deployment source in the repository settings. Vite uses relative asset URLs for root and project paths. The build enforces a 4 MiB limit. Release artifacts stay outside `apps/site/dist/`.

Keep host credentials, DNS account details, and personal setup notes outside the repository. Use the host's documentation for domain setup.
