# Plan 004: Test the production catalog reconstruction directly

> Executor: follow the steps and verification gates. Reviewer owns `plans/README.md`; do not edit it. Report obstacles rather than expanding scope. Run the drift check first and compare current-state excerpts before changes.

## Status

- **Priority**: P2
- **Effort**: S
- **Risk**: LOW
- **Depends on**: none
- **Findings**: F04
- **Planned at**: `f50ebe1`, 2026-10-14
- **Drift check**: `git diff --stat f50ebe1..HEAD -- src/lib/catalog.ts src/lib/catalog-codec.ts tests/icons-source.test.mjs tests/catalog-codec.test.mjs`

## Why this matters

The integrity test currently copies the decoder, allowing a production decoder regression to pass. A pure catalog reconstruction module should own metadata, decompression and exact SVG reconstruction, and be called by both runtime and tests.

## Current state

- `src/lib/catalog.ts:14`: destructures `iconFields, iconArchive, svgArchive` then unpacks zlib/base64, reconstructs rows and derived width/height/file/sourceUrl.
- `tests/icons-source.test.mjs:211`: the compact browser catalog test independently repeats this logic with Node inflateSync.
- `src/lib/catalog.ts` also owns mutable categories and browser navigation; the extracted decoder must not import either. Full-catalog JSON is currently used as a type-only import.

## Repository contract and commands

FYIcons is a React/TypeScript/Vite static app. Canonical editable artwork is `icons/*.svg` and `icons/manifest.json`; `src/icons/` and both `src/data/catalog*.json` are generated. Never optimize canonical SVG geometry or bytes. Category keyword rules are separate and editable at `public/icon-categories.json`; source IDs remain identities and aliases are retained. Category membership matches normalized name segments and may be multiple. Existing tests use `node:test`, `node:assert/strict` and temporary fixtures; follow them. Source code uses ES modules and Prettier.

Run commands from the assigned isolated worktree, never the user's main checkout. Node 24 is installed; engines require >=22.18. `npm ci` installs dependencies if not provided. `npm test` runs all `tests/*.test.mjs` and takes a few minutes. `npm run check:icons` is read-only freshness validation. `node_modules/.bin/tsc --noEmit --incremental false` is the exact standalone typecheck (no typecheck/lint npm script exists). `npm run build` regenerates, typechecks, bundles, compacts JSON and enforces a 4 MiB deployment budget; expect exit 0. Run Prettier check only on manually edited supported source/test files; generated TSX is not individually reformatted.

## Scope and Git workflow

Only modify these paths (directories include focused new modules/tests): `src/lib/catalog.ts src/lib/catalog-codec.ts tests/icons-source.test.mjs tests/catalog-codec.test.mjs`. Everything else is outside scope; report required expansions. Reviewer may refresh downstream scope to match reviewed prerequisites. Do not change `plans/README.md`, unrelated toast/prototypes, canonical inventory, dependencies unless explicitly listed, or CI. Use assigned `codex/` branch or detached worktree; commits start `[codex]`. Stage only this plan's changes; commit after verification, do not push/open PR/merge main. Reviewer integrates reviewed commits on main, as authorized by the user.

## Steps

1. Extract complete typed reconstruction into `src/lib/catalog-codec.ts` with an explicit compact input and reconstructed return type. Use fflate as production already does; no adapter hierarchy, location globals, browser singleton or runtime full-catalog import. Keep the transport unchanged and preserve optional-field omission. **Verify:** typecheck exits 0.
2. Make catalog.ts call the production decoder and replace the copied test algorithm with that same exported function. Compare its full result against catalog.json and exact SVG strings; include a small compact fixture covering omitted optional fields, Unicode, metadata and multiple rows. **Verify:** `node --test tests/icons-source.test.mjs tests/catalog-codec.test.mjs` passes.
3. Review emitted build for accidental full-catalog inclusion. **Verify:** `npm run check:icons`, typecheck and `npm run build` pass including the 4 MiB budget; no generated catalog bytes change.

## Done criteria and tests

- Runtime and integrity tests import the same complete decoder.
- Exact deep equality against full catalog and a small edge-case fixture pass.
- The decoder has no browser-location or category-readiness dependency.
- Typecheck, check and build pass with unchanged generated files.

All commands applicable to the plan must pass. `git diff --check` has no errors. `git status --short` is clean after the scoped commit. Report commit SHA, changed files, test counts, commands/results and any limitations; do not claim checks you did not run.

## STOP conditions and maintenance

Do not redesign transport, change compression, mutate catalog contents or undertake category readiness here. Do not add broad validation absent a concrete use case. Stop if a type-only fullCatalog import becomes a runtime import. Future encoding changes must update shared decoder coverage first.

Also stop/report if current code differs materially from the excerpts without a reviewed prerequisite explaining it, verification fails twice after reasonable fixes, or an out-of-scope file is required. Keep the worktree intact for review. No secrets, credential values, unrelated dependency upgrades or unverified compatibility claims in output.
