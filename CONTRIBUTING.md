# Contributing to FYIcons

This guide covers the icon library, React package, and shadcn registry. Website development and deployment are documented in the [website contribution guide](apps/site/CONTRIBUTING.md).

## Set up the workspace

Use Node 24, as specified in [`.nvmrc`](.nvmrc). Run these commands from the repository root:

```sh
npm ci
npm run build:package
```

`build:package` compiles the React icons and TypeScript declarations and prepares the SVG files, metadata, and license in `packages/fyicons`. You do not need to start the website to work on the package.

The root package is private and manages the npm workspaces. The public library is in `packages/fyicons`; `registry.json` is the shadcn source registry. Vite is a development dependency for package consumer checks. For artwork and imports, see [Icon sources](docs/icon-sources.md). For package and registry builds and publication, see [Releases](docs/releases.md).

## Commits and pull requests

Use [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) for new commit subjects and PR titles:

```text
type(scope): describe the change
```

Use `feat` for additions, `fix` for corrections, and `docs` for documentation. Other supported types are `build`, `chore`, `ci`, `perf`, `refactor`, `revert`, `style`, and `test`. A scope is optional; useful scopes include `icons`, `package`, `registry`, and `release`.

```text
feat(icons): add navigation icons
fix(package): preserve SVG references
docs: explain color inheritance
chore(release): version packages
```

Mark a breaking change with `!`, such as `feat(icons)!: rename border icons`. Explain the migration in the commit body with a `BREAKING CHANGE:` footer and in the changeset.

The PR title check also accepts an optional leading `[codex] ` attribution marker for compatibility. New titles can use the plain format above. Existing commit history does not need to be rewritten.

Open a PR against `main` and describe the problem, result, and checks performed. Use the PR template's before-and-after section for visual changes. Prefer squash merging related work into one commit, with the reviewed PR title as its subject. The PR-title workflow checks titles; direct commits rely on this convention and review.

For changes to the published package or registry, add a changeset with `npm run changeset` and select `fyicons`. Contributor documentation does not need a package release. Changesets controls the version and changelog; commit prefixes do not publish packages. During `0.x`, use a patch for fixes and a minor for additions or breaking changes. See [Releases](docs/releases.md) for the release sequence.

Use the issue forms to report bugs, request icons, or suggest features. For bugs, include the affected version or source ref and a small reproduction when available.

## Choose checks for the change

| Change                               | Checks                                                                                                              |
| ------------------------------------ | ------------------------------------------------------------------------------------------------------------------- |
| Documentation                        | Check formatting, relative links, examples, and statements against the source. No build or full test run is needed. |
| Icon sources, generation, or imports | Run `npm test`, `npm run check:icons`, and `npm run build`. These changes also affect generated website data.       |
| Package or registry                  | Use the [release checks](docs/releases.md#release-checks).                                                          |

Run `npm run test:package` for React icons, SVG sources, import safety, generation, icon comparisons, and release notes. These tests are in `tests/package/`. Pipeline tests also check the generated catalog and preserved category rules.

Run `npm test` for both package and website tests when changing shared behavior. CI runs both suites. The [website contribution guide](apps/site/CONTRIBUTING.md#check-website-changes) covers site checks. Release consumer and icon-preview checks are documented in [Releases](docs/releases.md#release-checks).

For a focused icon check, use `npm run test:icons`. Those tests are also part of `npm test`; there is no need to run both for the same change. `npm run build:package` checks the package's TypeScript as part of compilation.

Icon comparison tests and PNG previews use the pinned Sharp dependency. `npm ci` installs its native renderer; no browser installation is required. This tooling is not included in the published package or website bundle. For visual review, open the HTML report in an existing browser. Browser antialiasing can differ from the generated PNGs.

Use temporary fixtures to test observable behavior and actual generated output. Do not duplicate production logic in tests.

Keep automated tests focused on data integrity, public behavior, and real regressions. Test shared behavior once with a small fixture. Avoid assertions that repeat static configuration, incidental class names, copy, or third-party behavior. Use build and browser checks for small presentation changes. Extend an existing test when it already covers the same contract.

Use Prettier on the files you edit. For example:

```sh
node_modules/.bin/prettier --check AGENTS.md CONTRIBUTING.md
git diff --check
```

Do not format generated TSX files by hand. Examine the working diff after a build because generation can change tracked files.
