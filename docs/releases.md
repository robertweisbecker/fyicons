# Releases

## Package boundaries

The release line starts at `fyicons@0.1.0` under MIT. The root workspace stays private. The publishable package is [`packages/fyicons`](../packages/fyicons/).

React is the package's only runtime peer dependency. The tarball contains ESM modules, TypeScript declarations, SVG files, metadata, documentation, and the MIT license. Website code, fonts, catalogs, and the dynamic icon registry stay outside it.

Generated React sources are in `packages/fyicons/src/`. The package builder uses the same prepared source as the website generator. The site imports the built package through its public exports. Its catalog lookup registry stays in `apps/site/src/icons/registry.ts`. Each icon has a module and declaration in `dist/icons/`. `dist/index.js` supplies named exports. Icon modules have no `use client` directive. They can render on the server, including under an async parent. Keep `useId` for instance-safe references. Consumers use their own Client Components for event handlers or refs.

Package `dist/`, `svg/`, `manifest.json`, and the copied `LICENSE` are generated and ignored by Git. Package metadata keeps the source date version and adds `packageVersion`. The root [`LICENSE`](../LICENSE) is also included in SVG ZIP downloads.

## Build artifacts

```sh
npm run build:package
npm run generate:registry
npm run check:registry
npm run pack:package
```

`pack:package` builds first, then writes a tarball and `pack.json` file list to `artifacts/package/`. A direct `npm pack --workspace=fyicons` builds through `prepack`.

The generated root [`registry.json`](../registry.json) defines the shadcn source registry. Each item includes its icon, `base.tsx`, `types.ts`, and `LICENSE`. Targets use the consumer's `@components` placeholder. A pinned Git revision keeps these files together.

The [GitHub registry format](https://ui.shadcn.com/docs/registry/github) reads this file and its source files directly. It needs no server, `/r/` endpoint, or separate item JSON files. Keep one item per icon for selective installation. Each item lists explicit file paths; the CLI does not expand a `*` in a file path.

`generate:registry` updates the source registry. `check:registry` checks generated content and runs the pinned CLI's `registry validate` command. Both commands validate all items and source paths without building item JSON files.

Use `npm run build:registry` only when you need standalone JSON artifacts. It runs the official `shadcn build` command and writes `artifacts/registry/`. These artifacts are optional. Versioning and release checks do not build or upload the full JSON registry. The website build stays separate.

After publishing the registry source, replace `<ref>` with its release tag or full commit SHA. Run these commands from a separate React consumer project:

```sh
npx shadcn@latest registry validate 'robertweisbecker/fyicons#<ref>'
npx shadcn@latest view 'robertweisbecker/fyicons/sun#<ref>'
npx shadcn@latest add 'robertweisbecker/fyicons/sun#<ref>'
```

Test that GitHub install before documenting the release as available. Local source validation does not test GitHub access or prove that the files were committed and pushed. Keep shared files in each icon item so they use the same revision; refs do not carry over to separate registry dependencies.

## Compare icons

```sh
npm run diff:icons -- --base <base-commit-or-tag> --head <head-commit-or-tag>
```

Use the PR merge-base for a review and the previous release tag for release notes. For the first-release inventory, use:

```sh
npm run diff:icons -- --base empty --head HEAD --output artifacts/initial-release
```

The command resolves refs to full commit SHAs. Reports exclude working-tree edits. Prepare the final comparison from the approved source commit.

Each report includes standalone HTML, `changes.json`, and `summary.md`. It tracks additions, removals, names, exports, aliases, metadata, name reassignments, category rules, and generator hashes. An opaque source identity and component IDs establish identity. Older file keys are converted to the same identity before comparison. Reports omit private source links and export scope, including data from older commits. Similar geometry does not establish a rename.

SVG-byte changes and pixel changes are separate results. Pinned resvg renders at 16 and 64 px on light and dark backgrounds. Preview foreground colors follow the background theme, with the same paint conversion as React icons. Masks, gradients, and transparent paint keep their source values. Source byte checks keep the original colors. This does not compare React output or prove identical behavior in every browser. The HTML embeds PNG images; it does not execute raw SVG. External SVG resources are rejected.

The table shows both sizes by default. The overlay uses pink for the old icon and blue for the new icon. Each layer starts at 50% opacity. Added and removed icons have no pixel comparison. Keep reports outside the website build and package tarball.

## Prepare release notes

```sh
npm run changeset:icons -- --report artifacts/icon-diff/changes.json
npm run changeset
npm run version:packages
```

Use `changeset:icons` to draft notes from a fixed comparison. It selects a minor release for additions, removals, or name and export changes. Other changes use a patch release. Review the version type, text, and migration steps. Use `changeset` for API or generator changes that need separate notes. The report command does not overwrite an existing changeset.

Use normal `0.x` versions. Use patch changesets for fixes and minor changesets for additions or breaking changes during initial development. State breaking name changes and migration steps explicitly. `version:packages` runs Changesets, then updates the lockfile and source registry.

Prerelease mode is off. A commit does not require a release. Keep pending changesets until you are ready to publish, then run `npm run changeset -- status` to review them. Run `version:packages` once for that release. If a check or upload fails after versioning, fix the problem and resume the same candidate; do not increment the version just to retry.

## Release checks

```sh
npm run check:icons
npm run check:registry
npm test
npm run typecheck
npm run verify:release
```

`verify:release` builds and packs the package, validates the source registry, and installs the tarball in temporary consumer projects. It tests React 18 and 19, exact SVG bytes and license text, server rendering, hydration, refs, event handlers, and accessible names. It also tests NodeNext and Bundler declarations, Vite tree shaking, shadcn installs with a custom alias, and a production Next.js build.

The registry fixture uses shadcn's source loader for two icons. It writes two temporary payloads for the CLI install test. This checks source resolution, shared files, license text, and installation without building all item JSON files. A real GitHub install remains a separate publication check.

The Next.js fixture covers an async Server Component and a Client Component. Its tests make sure that title IDs are unique and static icons create no client references. These checks need network access for public dependencies. They do not need an account and do not publish. `artifacts/verification.json` records the tarball integrity and consumer results.

After generating the default icon report, run `npm run verify:preview`. It needs a Playwright Chromium installation. It tests report controls, images, keyboard access, scrolling, screen widths, and browser errors. Record any check that cannot run; do not report it as passed.

[The verification workflow](../.github/workflows/release-prep.yml) runs these checks and uploads artifacts with 14-day retention. It has read-only repository permissions. [The Pages workflow](../.github/workflows/pages.yml) owns website deployment separately.

## Publish a release

Local preparation does not authorize publication. Obtain explicit approval to publish, or follow an existing instruction to publish when the checks pass. Use either manual publication or the configured release workflow for a given version.

For a manual release:

1. Review the pending changesets and run `npm run version:packages` once. Check the version, changelog, lockfile, and source registry.
2. Commit and push the intended release changes. Follow the branch rules and wait for checks on that exact commit.
3. Run the release checks and `npm run build`. Compare the previous published release tag with the release commit, then run `npm run verify:preview`. Review the HTML report, migration notes, package file list, and tarball integrity.
4. If a check changes tracked files, review and commit those changes. Repeat the affected checks on the final commit. Keep the checked tarball unchanged after this step.
5. Publish that tarball with `latest`. Replace `<version>` with the version you verified:

   ```sh
   npm publish ./artifacts/package/fyicons-<version>.tgz --access public --tag latest --ignore-scripts
   ```

6. Confirm that the exact version is public, `latest` points to it, and its `dist.integrity` matches the checked tarball. An accepted upload alone does not confirm public availability.
7. Create and push `fyicons@<version>` at the verified commit. Create its GitHub release from the reviewed notes. Attach the tarball and public icon comparison files. Review attachments for local paths and private information; upload selected files, not the whole `artifacts/` directory.
8. Install the public npm version in a fresh consumer project outside the workspace. Test the shadcn GitHub install from the same release tag, including shared files and the license.

Never use publication as a readiness check. Keep existing published versions and tags unchanged. A correction to a published package needs a new version.

## Release automation

[The release workflow](../.github/workflows/release.yml) uses the official Changesets actions. It runs from `main`. It stays disabled until the repository variable `RELEASE_AUTOMATION_ENABLED` is `true`.

The workflow has four jobs:

1. Select whether to create a version PR, publish, or stop. Normal versions use the npm `latest` tag.
2. Create or update a version PR with `version:packages`. This keeps the changelog, workspace dependencies, lockfile, and source registry together.
3. Run the tests, site build, consumer checks, and visual comparison. Pack the library and upload the results. This job has read-only repository permissions.
4. Publish the packed files from the `npm` environment. This job has OIDC permission. It does not build packages or run install scripts. Changesets creates the release tags and GitHub releases.

Before enabling automation:

1. Complete and verify the approved first publication.
2. Create a GitHub environment named `npm`. Restrict it to `main` and add the required reviewers for publication.
3. When an automated release is ready, add a GitHub Actions trusted publisher in the npm package settings. Select this repository, workflow `release.yml`, and environment `npm`. Allow direct publication with `npm publish` for the Changesets publish action. Use [npm trusted publishing](https://docs.npmjs.com/trusted-publishers/). No npm token is stored in the repository.
4. Enable the repository setting that allows GitHub Actions to create and approve pull requests. Changesets uses it to create release PRs; the release workflow does not approve them.
5. Set `RELEASE_AUTOMATION_ENABLED` to `true`. Run the workflow from `main` and inspect the result.

A new trusted publisher must complete its first successful publication within two days. Otherwise, it expires and must be created again. A workflow run with no package to publish does not verify the trust relationship. Complete this setup when an approved automated release is ready. Check the npm version, tag, and provenance after that release.

The GitHub token used by the version action does not trigger other workflows when it creates a PR. Run the verification workflow on the version branch before merging. For automatic PR checks, configure a GitHub App token as described in [Changesets automation](https://changesets.dev/guide/automating#run-github-actions-for-version-prs).

Local checks cannot verify the npm trust relationship or GitHub environment rules. Confirm those settings before enabling the workflow. Account settings and the first publication require maintainer authorization.
