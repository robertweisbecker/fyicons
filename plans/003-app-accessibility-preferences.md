# Plan 003: Name the SVG download action and validate saved selections

> Executor: follow the steps and verification gates. Reviewer owns `plans/README.md`; do not edit it. Report obstacles rather than expanding scope. Run the drift check first and compare current-state excerpts before changes.

## Status

- **Priority**: P2
- **Effort**: S
- **Risk**: LOW
- **Depends on**: none
- **Findings**: F03, F05
- **Planned at**: `f50ebe1`, 2026-10-14
- **Drift check**: `git diff --stat f50ebe1..HEAD -- src/components/IconUsage.tsx src/lib/preferences.ts src/App.tsx tests/preferences.test.mjs`

## Why this matters

The individual SVG download has only an assistive-technology-hidden icon as its content. Successfully parsed JSON of the wrong shape is trusted as a string array, so selection calls can throw. Fix these narrow boundaries without redesigning the inspector.

## Current state

- `src/components/IconUsage.tsx:32`: `<Button variant="ghost" size="icon-sm" onClick={() => download(item.svg, item.filename, 'image/svg+xml')}>` has no accessible name.
- `src/lib/preferences.ts:3`: `readPreference<T>(key: string, fallback: T): T` returns any `JSON.parse(...) ?? fallback`, with storage exceptions caught.
- `src/App.tsx:58`: `usePreference<string[]>('fyicons-shortlist-v1', [])`; later code calls `.some` and `.includes`.
- Legacy reads use `key.replace('fyicons-', 'astra-')` only when the current key is absent. Preserve that precedence. `src/components/IconButton.tsx` is the explicit-label convention; an aria-label on the existing Button is sufficient.

## Repository contract and commands

FYIcons is a React/TypeScript/Vite static app. Canonical editable artwork is `icons/*.svg` and `icons/manifest.json`; `src/icons/` and both `src/data/catalog*.json` are generated. Never optimize canonical SVG geometry or bytes. Category keyword rules are separate and editable at `public/icon-categories.json`; source IDs remain identities and aliases are retained. Category membership matches normalized name segments and may be multiple. Existing tests use `node:test`, `node:assert/strict` and temporary fixtures; follow them. Source code uses ES modules and Prettier.

Run commands from the assigned isolated worktree, never the user's main checkout. Node 24 is installed; engines require >=22.18. `npm ci` installs dependencies if not provided. `npm test` runs all `tests/*.test.mjs` and takes a few minutes. `npm run check:icons` is read-only freshness validation. `node_modules/.bin/tsc --noEmit --incremental false` is the exact standalone typecheck (no typecheck/lint npm script exists). `npm run build` regenerates, typechecks, bundles, compacts JSON and enforces a 4 MiB deployment budget; expect exit 0. Run Prettier check only on manually edited supported source/test files; generated TSX is not individually reformatted.

## Scope and Git workflow

Only modify these paths (directories include focused new modules/tests): `src/components/IconUsage.tsx src/lib/preferences.ts src/App.tsx tests/preferences.test.mjs`. Everything else is outside scope; report required expansions. Reviewer may refresh downstream scope to match reviewed prerequisites. Do not change `plans/README.md`, unrelated toast/prototypes, canonical inventory, dependencies unless explicitly listed, or CI. Use assigned `codex/` branch or detached worktree; commits start `[codex]`. Stage only this plan's changes; commit after verification, do not push/open PR/merge main. Reviewer integrates reviewed commits on main, as authorized by the user.

## Steps

1. Add an explicit download accessible name while retaining exact SVG content and filename. **Verify:** `node_modules/.bin/tsc --noEmit --incremental false` passes. Reviewer will inspect desktop/mobile accessibility trees; do not add a broad UI test framework for the label alone.
2. Add runtime selection validation at the preference boundary, e.g. an optional type-guard argument shared by readPreference/usePreference. Accept arrays only when every element is a string; wrong shapes and mixed arrays fall back to []. Preserve valid current data and the supported legacy-key fallback, invalid JSON and unavailable-storage behavior. Apply validation only where it is semantically owned; do not guess types from fallback values. **Verify:** `node --test tests/preferences.test.mjs` passes.
3. Add Node tests invoking the real reader for objects, booleans, numbers, strings, null, mixed arrays, valid arrays, empty arrays, malformed syntax, thrown storage access and legacy/current precedence. **Verify:** targeted tests and final typecheck/build pass; `git diff --name-only` stays in scope.

## Done criteria and tests

- Real-reader tests pass for all enumerated cases; valid selections survive unchanged.
- Existing download handler still passes item.svg, item.filename and image/svg+xml.
- SVG action has an explicit accessible name in shared inspector content.
- Typecheck and build pass; browser review confirms both inspector modes when available.

All commands applicable to the plan must pass. `git diff --check` has no errors. `git status --short` is clean after the scoped commit. Report commit SHA, changed files, test counts, commands/results and any limitations; do not claim checks you did not run.

## STOP conditions and maintenance

Do not alter other preference semantics, layout, selection behavior, toast code or prototype files. Do not discard valid legacy selections merely because IDs no longer exist in the current catalog. Stop if an unrelated concurrent App change prevents applying this narrow fix. Future structured preferences need their own explicit validators.

Also stop/report if current code differs materially from the excerpts without a reviewed prerequisite explaining it, verification fails twice after reasonable fixes, or an out-of-scope file is required. Keep the worktree intact for review. No secrets, credential values, unrelated dependency upgrades or unverified compatibility claims in output.
