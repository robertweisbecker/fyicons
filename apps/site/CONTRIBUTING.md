# Website contributions

This guide covers the private website workspace in `apps/site`. For icon artwork, the React package, or the shadcn registry, use the root [Contributing guide](../../CONTRIBUTING.md). Follow its commit, PR, formatting, and test conventions for website changes too. Website-only changes do not need a package changeset.

All paths and commands below are relative to the repository root.

## Set up the website

Use Node 24, as specified in [`.nvmrc`](../../.nvmrc):

```sh
npm ci
npm run dev
```

`dev` generates the icons, builds the icon package, and starts Next.js at http://localhost:3000. Next.js also prints a network address. Use it to open the site on another device on the same network. After an SVG edit during a running development session, run `npm run generate:icons` again.

`npm run build` generates the icons, builds the icon package, checks TypeScript, and exports the static website to `apps/site/out/`. `npm run preview` serves that export at http://127.0.0.1:4173. For a TypeScript check without a full site build, use `npm run typecheck`.

Website dependencies and Next.js settings stay in `apps/site`. The site imports the built icon package through its public exports. Its generated catalog lookup registry is `apps/site/src/icons/registry.ts`; do not edit it by hand.

## Check website changes

For website behavior, run `npm run test:site` and `npm run build`. Check affected screen widths, keyboard controls, accessible names, and browser errors. Use the static preview to check exported routes.

`tests/site/` protects finding and inspecting icons, copying SVGs, downloading individual icons and selections, working links, saved preferences, and catalog integrity. Its DOM helpers are in `tests/site/helpers/`. `npm run test:site` builds the icon package first because the site imports it. Category source validation and release-history generation tests live in `tests/package/`. Run `npm test` for both suites when changing shared behavior.

Add a test when a failure would block a core user task or damage saved data, downloads, or private-source boundaries. Extend existing coverage when possible. A UI fix does not need a new regression test by default. Check scroll highlighting, gesture details, animation, and layout in the browser. Do not copy current category assignments or historical release IDs into expected results.

The DOM tests exercise production controls and capture clipboard and download output. They do not verify browser layout, native keyboard activation, or Next.js route transitions. Keep the static build checks and browser checks below; a passing DOM test is not evidence that those behaviors work.

For changes to the ZIP README or archive contents, run `node --test tests/site/icon-archive.test.mjs`. Tests use temporary fixtures and in-memory archives. Verify ZIP contents with tests; do not use browser download controls or Save As dialogs for verification.

Documentation-only changes need formatting, relative-link, and source checks. They do not need a build or full test run.

## Change the website

## Edit category rules

Follow [Icon sources](../../docs/icon-sources.md#category-rules) for rule syntax and generation. The browser fetches category rules on page load without caching. Save and refresh to use edited rules; a running dev or preview server needs no restart. If category loading fails, the library keeps all icons available and shows a notice. Production builds minify the category JSON without changing its data.

## Icon release history

`npm run version:packages` updates the inspector's Added and Updated versions when it prepares a release. It compares canonical artwork and names by collection and component ID across the `fyicons@*` tags. For the version being prepared, it uses the current icon inventory until its tag exists. Fetch the release tags before running the version command locally.

The version PR includes the generated `apps/site/src/data/icon-releases.json`. After the site build, `npm run verify:site-release` checks the rendered release notes, release link, and Added/Updated coverage for every current icon. Version-PR verification and the publishing job both run this check before publication. Release verification checks the saved history for drift. Website builds read the saved file. An icon shows Added for its first release and Updated only for a later change. A rename keeps the original Added version. Changes to export formatting, import dates, or categories do not advance either version.

Newest and Last updated sort the matching icons by Added and Updated release, respectively, with the most recent release first. Icons without the selected release information appear last. The recent-addition indicators mark icons added in the latest two minor release lines, including their patch versions. The site tests check sort order, indicators, and inspector release links.

After a GitHub release is published, add its `published_at` timestamp to `apps/site/src/data/release-dates.json` so the changelog link shows the release date.

To verify the saved history after publication, run:

```sh
node scripts/generate-icon-releases.mjs --check
```

## Deploy the website

[The Pages workflow](../../.github/workflows/pages.yml) builds, tests, and deploys `apps/site/out/` from `main`. Pull requests run checks without deployment. Root documentation changes do not trigger a site build. Files under `apps/site/`, including this guide, match the workflow’s build paths. Changes to the ZIP README do trigger a build because downloads include that file.

For a new GitHub Pages deployment, select **GitHub Actions** as the deployment source in the repository settings. The Next.js app uses static export with trailing slashes. For a project subpath, set `NEXT_PUBLIC_BASE_PATH=/project-name` when building and previewing. All routes must be known at build time; server actions and runtime API routes are not available. The build checks exported routes and docs links. It reports the total export size and warns above 7.25 MiB, including pre-rendered HTML and Next.js route payloads. This warning does not block deployment. Demo backdrops use static CSS mesh gradients and make no image requests. Release artifacts stay outside `apps/site/out/`.

Keep host credentials, DNS account details, and personal setup notes outside the repository. Use the host's documentation for domain setup.

## Performance loading boundaries

The generated runtime catalog contains metadata only. `src/data/catalog-summary.json` supplies counts without loading the catalog. Build and development startup generate checksum-addressed `public/icon-sources/` files and the full ZIP from the canonical package SVG exports. Copy actions fetch and verify an individual source; single downloads use its URL. Custom ZIPs resolve at most six sources concurrently and are created only after every source succeeds. These generated public files are ignored by Git.

Use named React imports from `fyicons` for fixed interface icons. Keep the full dynamic icon registry in browsing and search code. Disable automatic prefetch for heavy routes, including the React documentation examples. Keep shared clipboard controls independent of the catalog. Global search mounts its input during the opening gesture, then loads its data and results. Heavy homepage demos load within 600 px of the viewport, on focus, or when targeted by an anchor. Their outer layout and meaningful headings stay rendered. Preserve these boundaries when adding demonstrations or navigation links.

GitHub Pages controls HTTP cache headers. Its current asset responses use `max-age=600`. Next.js response-header configuration does not apply to a static export, so it cannot remove the remaining cache-lifetime warning.
