# Plan 007: Render immediately while categories become ready

> Executor: follow the steps and verification gates. Reviewer owns `plans/README.md`; do not edit it. Report obstacles rather than expanding scope. Run the drift check first and compare current-state excerpts before changes.

## Status

- **Priority**: P2
- **Effort**: M
- **Risk**: MED
- **Depends on**: 003, 004, 006
- **Findings**: F06
- **Planned at**: `f50ebe1`, 2026-10-14
- **Drift check**: `git diff --stat f50ebe1..HEAD -- src/main.tsx src/App.tsx src/lib/catalog.ts src/lib/category-readiness.ts src/lib/use-library-navigation.ts src/lib/library-url.ts src/components/CategorySidebar.tsx src/components/Search.tsx src/components/Inspector.tsx src/lib/icon-search.ts tests/category-readiness.test.mjs tests/library-navigation.test.mjs tests/helpers`

## Why this matters

Every route currently waits for optional category fetch completion before React mounts, potentially leaving an empty root for five seconds. Removing the await alone loses category deep links. Give loading/success/fallback behavior a reactive owner and preserve navigation intent until it can be resolved.

## Current state

- `src/main.tsx:8`: `const categoryError = await loadIconCategories();` precedes createRoot and passes categoryError to App.
- `src/lib/catalog.ts`: exported icons begin uncategorized; loadIconCategories fetches same-host icon-categories.json with cache:no-store and a 5s timeout, mutates records and replaces exported categories.
- `src/lib/use-library-navigation.ts` reads allowed categories synchronously on mount, relying on the startup await.
- App memoizes filtered icons by query/category and consumes categoryError; category arrival must trigger filters, search and counts, not just change a global. CategorySidebar computes options at render; Search defaults matches through searchIcons; Inspector reads category labels. Audit all consumers for actual reactive updates.
- Reviewer must refresh these excerpts against reviewed 003/004/006 before dispatch. Reuse the actual hook harness from 006.

## Repository contract and commands

FYIcons is a React/TypeScript/Vite static app. Canonical editable artwork is `icons/*.svg` and `icons/manifest.json`; `src/icons/` and both `src/data/catalog*.json` are generated. Never optimize canonical SVG geometry or bytes. Category keyword rules are separate and editable at `public/icon-categories.json`; source IDs remain identities and aliases are retained. Category membership matches normalized name segments and may be multiple. Existing tests use `node:test`, `node:assert/strict` and temporary fixtures; follow them. Source code uses ES modules and Prettier.

Run commands from the assigned isolated worktree, never the user's main checkout. Node 24 is installed; engines require >=22.18. `npm ci` installs dependencies if not provided. `npm test` runs all `tests/*.test.mjs` and takes a few minutes. `npm run check:icons` is read-only freshness validation. `node_modules/.bin/tsc --noEmit --incremental false` is the exact standalone typecheck (no typecheck/lint npm script exists). `npm run build` regenerates, typechecks, bundles, compacts JSON and enforces a 4 MiB deployment budget; expect exit 0. Run Prettier check only on manually edited supported source/test files; generated TSX is not individually reformatted.

## Scope and Git workflow

Only modify these paths (directories include focused new modules/tests): `src/main.tsx src/App.tsx src/lib/catalog.ts src/lib/category-readiness.ts src/lib/use-library-navigation.ts src/lib/library-url.ts src/components/CategorySidebar.tsx src/components/Search.tsx src/components/Inspector.tsx src/lib/icon-search.ts tests/category-readiness.test.mjs tests/library-navigation.test.mjs tests/helpers`. Everything else is outside scope; report required expansions. Reviewer may refresh downstream scope to match reviewed prerequisites. Do not change `plans/README.md`, unrelated toast/prototypes, canonical inventory, dependencies unless explicitly listed, or CI. Use assigned `codex/` branch or detached worktree; commits start `[codex]`. Stage only this plan's changes; commit after verification, do not push/open PR/merge main. Reviewer integrates reviewed commits on main, as authorized by the user.

## Steps

1. Introduce one reactive category readiness owner with loading/ready/error snapshots and deterministic fetch injection at the I/O boundary. Mount useful app content immediately, then load categories; preserve same-host editable JSON, no-store, timeout and useful fallback/error messaging. Keep canonical catalog identities/maps coherent. **Verify:** `node --test tests/category-readiness.test.mjs` proves pending request does not block useful state, success publishes once, failure leaves all icons available, and StrictMode does not cause inconsistent duplicate work.
2. Integrate readiness with App, filters/search/sidebar/counts and manifest export. Preserve initial category/query/icon intent while unresolved; when readiness settles, resolve only still-current intent. Late resolution must never override subsequent user navigation or inspections. Unknown categories fall back after validation, not before readiness is known. **Verify:** actual navigation/readiness tests cover delayed success/failure, invalid category, Back/Forward while pending, query changes, inspection, page changes/reset and filtered counts.
3. Run browser checks for home/library/examples during delayed and failed category responses, desktop/mobile, keyboard navigation and console errors. **Verify:** record observed usable content before response, correct deep link after success, latest user action retained, usable fallback after failure; full tests, check, typecheck and build pass.

## Done criteria and tests

- No top-level awaited optional category request before createRoot.
- Reactive success updates category filters, labels, search, counts and exports.
- Delayed category resolution preserves deep links without overriding later intent.
- Controlled readiness and real-hook tests plus full suite/check/typecheck/build pass.
- Browser review confirms loading/fallback behavior or records a specific tooling blocker.

All commands applicable to the plan must pass. `git diff --check` has no errors. `git status --short` is clean after the scoped commit. Report commit SHA, changed files, test counts, commands/results and any limitations; do not claim checks you did not run.

## STOP conditions and maintenance

Do not redesign navigation URL format, category matching, layout or selection; do not make a generic state framework. Preserve independent explicit-icon links even outside active filters. Stop if required consumers lie outside listed scope; report them for reviewer expansion. Root owns integration and will handle any concurrent App drift.

Also stop/report if current code differs materially from the excerpts without a reviewed prerequisite explaining it, verification fails twice after reasonable fixes, or an out-of-scope file is required. Keep the worktree intact for review. No secrets, credential values, unrelated dependency upgrades or unverified compatibility claims in output.
