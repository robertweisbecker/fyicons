# Contributing

## Set up the workspace

Use Node 24, as specified in [`.nvmrc`](.nvmrc). Run these commands from the repository root:

```sh
npm ci
npm run dev
```

`dev` generates the icons, then starts Vite. `npm run build` generates the icons, runs the TypeScript check, and builds the website. `npm run preview` serves that build.

The root package manages the npm workspaces. The private website is in `apps/site`. Its dependencies and Vite settings stay in that workspace. The public library is in `packages/fyicons`. For artwork and imports, see [Icon sources](docs/icon-sources.md). For the npm package and shadcn registry, see [Releases](docs/releases.md).

## Commits and pull requests

Use [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) for new commit subjects and PR titles:

```text
type(scope): describe the change
```

Use `feat` for additions, `fix` for corrections, and `docs` for documentation. Other supported types are `build`, `chore`, `ci`, `perf`, `refactor`, `revert`, `style`, and `test`. A scope is optional; useful scopes include `icons`, `package`, `registry`, `site`, and `release`.

```text
feat(icons): add navigation icons
fix(package): preserve SVG references
docs: explain color inheritance
chore(release): version packages
```

Mark a breaking change with `!`, such as `feat(icons)!: rename border icons`. Explain the migration in the commit body with a `BREAKING CHANGE:` footer and in the changeset.

The PR title check also accepts an optional leading `[codex] ` attribution marker for compatibility. New titles can use the plain format above. Existing commit history does not need to be rewritten.

Open a PR against `main` and describe the problem, result, and checks performed. Use the PR template's before-and-after section for visual changes. Prefer squash merging related work into one commit, with the reviewed PR title as its subject. The PR-title workflow checks titles; direct commits rely on this convention and review.

For changes to the published package or registry, add a changeset with `npm run changeset` and select `fyicons`. Website-only changes and contributor documentation do not need a package release. Changesets controls the version and changelog; commit prefixes do not publish packages. During `0.x`, use a patch for fixes and a minor for additions or breaking changes. See [Releases](docs/releases.md) for the release sequence.

Use the issue forms to report bugs, request icons, or suggest features. For bugs, include the affected version or source ref and a small reproduction when available.

## Choose checks for the change

| Change                               | Checks                                                                                                                                                  |
| ------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Documentation                        | Do checks of formatting, relative links, examples, and statements against the source.                                                                   |
| ZIP README or archive contents       | Run `node --test tests/site/icon-archive.test.mjs`.                                                                                                     |
| Icon sources, generation, or imports | Run `npm test`, `npm run check:icons`, and `npm run build`.                                                                                             |
| Website behavior                     | Run `npm run test:site` and `npm run build`. Do checks at affected screen widths. Test keyboard controls and accessible names. Look for browser errors. |
| Package or registry                  | Use the [release checks](docs/releases.md#release-checks).                                                                                              |

Tests are separated by the behavior they protect:

- `tests/site/`: website navigation, preferences, categories, catalog decoding, and ZIP downloads. Its DOM helpers are in `tests/site/helpers/`. Run `npm run test:site`; it builds the icon package first because the site imports it.
- `tests/package/`: React icons, SVG sources, import safety, generation, icon comparisons, and release versioning. Pipeline tests also check generated site catalogs and preserved category rules. Run `npm run test:package`.

Run `npm test` for both suites. CI keeps running both suites. The separate release consumer and icon-preview checks remain documented in [Releases](docs/releases.md#release-checks).

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

For a new GitHub Pages deployment, select **GitHub Actions** as the deployment source in the repository settings. Vite uses relative asset URLs for root and project paths. The build enforces a 4.5 MiB limit. Demo wallpapers load from external Raycast URLs. Release artifacts stay outside `apps/site/dist/`.

Keep host credentials, DNS account details, and personal setup notes outside the repository. Use the host's documentation for domain setup.
