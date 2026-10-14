# Plan 008: Align CI and naming documentation with behavior

> Executor: follow the steps and verification gates. Reviewer owns `plans/README.md`; do not edit it. Report obstacles rather than expanding scope. Run the drift check first and compare current-state excerpts before changes.

## Status

- **Priority**: P3
- **Effort**: S
- **Risk**: LOW
- **Depends on**: 002, 005
- **Findings**: F08
- **Planned at**: `f50ebe1`, 2026-10-14
- **Drift check**: `git diff --stat f50ebe1..HEAD -- README.md scripts/generate-icons.mjs scripts/lib/icon-generation.mjs scripts/lib/prepare-icons.mjs src/data/catalog.json src/data/catalog-runtime.json`

## Why this matters

README claims a freshness check precedes CI build, but CI regenerates during build then tests. Generated metadata also promises stable numeric suffixes that can change when same-name siblings disappear. Correct the contracts without introducing new policies.

## Current state

- `README.md:69`: `CI checks freshness before building.`
- `.github/workflows/pages.yml` runs npm ci, npm run build, then npm test.
- At f50ebe1 `scripts/generate-icons.mjs:101`: duplicatePolicy is `Distinct icons with the same base name receive stable numeric suffixes.` Plan 002 may move this to its preparation owner.
- Names are authoritative from current Figma export; source IDs remain identities and former names become aliases. Persistent suffix mapping is explicitly deferred.

## Repository contract and commands

FYIcons is a React/TypeScript/Vite static app. Canonical editable artwork is `icons/*.svg` and `icons/manifest.json`; `src/icons/` and both `src/data/catalog*.json` are generated. Never optimize canonical SVG geometry or bytes. Category keyword rules are separate and editable at `public/icon-categories.json`; source IDs remain identities and aliases are retained. Category membership matches normalized name segments and may be multiple. Existing tests use `node:test`, `node:assert/strict` and temporary fixtures; follow them. Source code uses ES modules and Prettier.

Run commands from the assigned isolated worktree, never the user's main checkout. Node 24 is installed; engines require >=22.18. `npm ci` installs dependencies if not provided. `npm test` runs all `tests/*.test.mjs` and takes a few minutes. `npm run check:icons` is read-only freshness validation. `node_modules/.bin/tsc --noEmit --incremental false` is the exact standalone typecheck (no typecheck/lint npm script exists). `npm run build` regenerates, typechecks, bundles, compacts JSON and enforces a 4 MiB deployment budget; expect exit 0. Run Prettier check only on manually edited supported source/test files; generated TSX is not individually reformatted.

## Scope and Git workflow

Only modify these paths (directories include focused new modules/tests): `README.md scripts/generate-icons.mjs scripts/lib/icon-generation.mjs scripts/lib/prepare-icons.mjs src/data/catalog.json src/data/catalog-runtime.json`. Everything else is outside scope; report required expansions. Reviewer may refresh downstream scope to match reviewed prerequisites. Do not change `plans/README.md`, unrelated toast/prototypes, canonical inventory, dependencies unless explicitly listed, or CI. Use assigned `codex/` branch or detached worktree; commits start `[codex]`. Stage only this plan's changes; commit after verification, do not push/open PR/merge main. Reviewer integrates reviewed commits on main, as authorized by the user.

## Steps

1. Describe regenerate-then-test CI and the independently runnable, nonmutating check command including category schema. Clarify same-name suffixes disambiguate the current inventory and may change when that inventory changes. **Verify:** `rg -n 'freshness|CI|suffix|schema' README.md` shows claims matching actual workflow and importer.
2. Correct duplicatePolicy at its generation source and regenerate metadata only. **Verify:** `npm run generate:icons && npm run check:icons` passes; inspect generated diffs for only duplicatePolicy metadata (compact transport metadata too), no SVG/component changes.
3. Verify current commands and generated consistency. **Verify:** `npm run test:icons`, typecheck and build pass; .github/workflows/pages.yml unchanged.

## Done criteria and tests

- README accurately describes build regeneration followed by tests.
- Generated full and runtime metadata contain no stable-suffix promise.
- No CI behavior, suffix assignment algorithm or source icon bytes change.
- Test:icons, check, typecheck and build pass.

All commands applicable to the plan must pass. `git diff --check` has no errors. `git status --short` is clean after the scoped commit. Report commit SHA, changed files, test counts, commands/results and any limitations; do not claim checks you did not run.

## STOP conditions and maintenance

Stop if real workflow order has changed independently; report new evidence. Do not add a freshness CI gate, suffix provenance, package publication or dry-run implementation. Update the preparation file scope before dispatch if plan 002 chose a different name.

Also stop/report if current code differs materially from the excerpts without a reviewed prerequisite explaining it, verification fails twice after reasonable fixes, or an out-of-scope file is required. Keep the worktree intact for review. No secrets, credential values, unrelated dependency upgrades or unverified compatibility claims in output.
