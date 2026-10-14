# Plan 006: Characterize real navigation history and pending writes

> Executor: follow the steps and verification gates. Reviewer owns `plans/README.md`; do not edit it. Report obstacles rather than expanding scope. Run the drift check first and compare current-state excerpts before changes.

## Status

- **Priority**: P2
- **Effort**: M
- **Risk**: LOW
- **Depends on**: none
- **Findings**: F07
- **Planned at**: `f50ebe1`, 2026-10-14
- **Drift check**: `git diff --stat f50ebe1..HEAD -- tests/library-navigation.test.mjs tests/helpers package.json package-lock.json`

## Why this matters

Pure URL serialization is tested, but hook history, debounce cancellation, restoration and sharing transitions are not. Characterize the actual hook before changing category readiness; this is coverage work, not an established navigation defect.

## Current state

- `src/lib/use-library-navigation.ts:40`: update clears pendingUrl, merges latest state, builds URL and pushes/replaces immediately or after 200ms.
- Its effect restores on popstate/hashchange, ignores #main-content, normalizes #library/#examples and cancels timers on unmount.
- setCategory clears query and pushes; inspect clears explicit icon and replaces; share uses latest inspected ID; changePage pushes; openSearchResult replaces within library and pushes from other pages; reset replaces.
- `tests/navigation.test.mjs` only varies initial URL; `tests/library-url.test.mjs` covers serialization. Node 24 tests can import erasable TypeScript; JSX modules can use existing Vite transform patterns from tests/react-icons.test.mjs.

## Repository contract and commands

FYIcons is a React/TypeScript/Vite static app. Canonical editable artwork is `icons/*.svg` and `icons/manifest.json`; `src/icons/` and both `src/data/catalog*.json` are generated. Never optimize canonical SVG geometry or bytes. Category keyword rules are separate and editable at `public/icon-categories.json`; source IDs remain identities and aliases are retained. Category membership matches normalized name segments and may be multiple. Existing tests use `node:test`, `node:assert/strict` and temporary fixtures; follow them. Source code uses ES modules and Prettier.

Run commands from the assigned isolated worktree, never the user's main checkout. Node 24 is installed; engines require >=22.18. `npm ci` installs dependencies if not provided. `npm test` runs all `tests/*.test.mjs` and takes a few minutes. `npm run check:icons` is read-only freshness validation. `node_modules/.bin/tsc --noEmit --incremental false` is the exact standalone typecheck (no typecheck/lint npm script exists). `npm run build` regenerates, typechecks, bundles, compacts JSON and enforces a 4 MiB deployment budget; expect exit 0. Run Prettier check only on manually edited supported source/test files; generated TSX is not individually reformatted.

## Scope and Git workflow

Only modify these paths (directories include focused new modules/tests): `tests/library-navigation.test.mjs tests/helpers package.json package-lock.json`. Everything else is outside scope; report required expansions. Reviewer may refresh downstream scope to match reviewed prerequisites. Do not change `plans/README.md`, unrelated toast/prototypes, canonical inventory, dependencies unless explicitly listed, or CI. Use assigned `codex/` branch or detached worktree; commits start `[codex]`. Stage only this plan's changes; commit after verification, do not push/open PR/merge main. Reviewer integrates reviewed commits on main, as authorized by the user.

## Steps

1. Build a controlled hook test harness using actual React and a DOM environment. Prefer installed tooling; if a DOM package is necessary, add one pinned dev dependency and lockfile entry. Render the real useLibraryNavigation hook; do not copy the state machine or restructure production solely to test it. Control URL/history events and timers explicitly, clean up globals and roots. **Verify:** `node --test tests/library-navigation.test.mjs` includes a passing mount/initial state case at both root and hosted subpath.
2. Add cases for pending search followed by Back/Forward, category, page, reset, share, openSearchResult and unmount; later actions cancel stale writes. Assert history entry semantics, restoration without writes, successive temporary inspections without pushes, latest query/icon used by share, legacy anchors and native #main-content. **Verify:** focused navigation tests pass deterministically without sleep-based races.
3. Prove tests fail when a pending-write cancellation or push/replace behavior is deliberately mutated in a disposable test copy, then restore it. **Verify:** record the failing case and subsequent passing `node --test tests/library-navigation.test.mjs tests/navigation.test.mjs tests/library-url.test.mjs`; typecheck and build pass.

## Done criteria and tests

- Tests exercise the real hook, not copied helpers or source regex assertions.
- Enumerated history, cancellation and sharing cases pass using controlled timing.
- At least one meaningful mutation is caught, and mutation is removed.
- Typecheck and build pass; production navigation behavior remains unchanged.

All commands applicable to the plan must pass. `git diff --check` has no errors. `git status --short` is clean after the scoped commit. Report commit SHA, changed files, test counts, commands/results and any limitations; do not claim checks you did not run.

## STOP conditions and maintenance

Production source edits are outside scope. If characterization exposes a real defect, report the failing scenario and minimal proposed fix; reviewer will authorize a scope revision before it is fixed. Avoid tests for layout/styling/copy. This harness will be reused by plan 007.

Also stop/report if current code differs materially from the excerpts without a reviewed prerequisite explaining it, verification fails twice after reasonable fixes, or an out-of-scope file is required. Keep the worktree intact for review. No secrets, credential values, unrelated dependency upgrades or unverified compatibility claims in output.
