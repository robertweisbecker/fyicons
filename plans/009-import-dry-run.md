# Plan 009: Preview import changes using the prepared result

> Executor: follow the steps and verification gates. Reviewer owns `plans/README.md`; do not edit it. Report obstacles rather than expanding scope. Run the drift check first and compare current-state excerpts before changes.

## Status

- **Priority**: P3
- **Effort**: M
- **Risk**: MED
- **Depends on**: 002, 008
- **Findings**: Direction: dry-run import report; PLAN ONLY by user instruction
- **Planned at**: `a569249`, 2026-10-14
- **Drift check**: `git diff --stat a569249..HEAD -- scripts/sync-icons.mjs scripts/lib/prepare-icons.mjs scripts/lib/icon-files.mjs scripts/lib/import-report.mjs tests/import-report.test.mjs tests/safe-imports.test.mjs README.md`

## Why this matters

Once preparation owns a fully valid next inventory, the importer can report consequences without writes. This helps maintainers inspect replacement of editable artwork and automatic naming changes. The user explicitly requested keeping this direction as a plan only; do not dispatch implementation in the current goal.

## Current state

- After reviewed plan 002, sync still logs only a final imported count after publication. README warns that imports replace editable sources.
- `scripts/sync-icons.mjs` calls `prepareIcons(nextManifest, nextCategories, readSvg)` from `scripts/lib/prepare-icons.mjs`, then assembles expected canonical and generated files. `preparePublication` returns changed and obsolete files before `publishFiles` writes. Derive the report from those prepared records and maps; never repeat naming or validation.
- Source IDs establish identity; SVG hashes establish artwork changes. Numeric suffixes are current-inventory disambiguators and may change without upstream renames.

## Repository contract and commands

FYIcons is a React/TypeScript/Vite static app. Canonical editable artwork is `icons/*.svg` and `icons/manifest.json`; `src/icons/` and both `src/data/catalog*.json` are generated. Never optimize canonical SVG geometry or bytes. Category keyword rules are separate and editable at `public/icon-categories.json`; source IDs remain identities and aliases are retained. Category membership matches normalized name segments and may be multiple. Existing tests use `node:test`, `node:assert/strict` and temporary fixtures; follow them. Source code uses ES modules and Prettier.

Run commands from the assigned isolated worktree, never the user's main checkout. Node 24 is installed; engines require >=22.18. `npm ci` installs dependencies if not provided. `npm test` runs all `tests/*.test.mjs` and takes a few minutes. `npm run check:icons` is read-only freshness validation. `node_modules/.bin/tsc --noEmit --incremental false` is the exact standalone typecheck (no typecheck/lint npm script exists). `npm run build` regenerates, typechecks, bundles, compacts JSON and enforces a 4 MiB deployment budget; expect exit 0. Run Prettier check only on manually edited supported source/test files; generated TSX is not individually reformatted.

## Scope and Git workflow

Only modify these paths (directories include focused new modules/tests): `scripts/sync-icons.mjs scripts/lib/import-report.mjs tests/import-report.test.mjs tests/safe-imports.test.mjs README.md`. Everything else is outside scope; report required expansions. Reviewer may refresh downstream scope to match reviewed prerequisites. Do not change `plans/README.md`, unrelated toast/prototypes, canonical inventory, dependencies unless explicitly listed, or CI. Use assigned `codex/` branch or detached worktree; commits start `[codex]`. Stage only this plan's changes; commit after verification, do not push/open PR/merge main. Reviewer integrates reviewed commits on main, as authorized by the user.

## Steps

1. After explicit future selection, inspect reviewed preparation API and refresh planned-at/scope. Add --dry-run that performs identical preparation then emits additions, removals, identity-preserving renames, changed SVG hashes and category-reference changes, without publication. Retain existing default CLI behavior. **Verify:** targeted report tests compare deterministic output for each class.
2. Cover simultaneous rename/artwork edits, suffix reassignment, case-only rename, unchanged import and invalid input. Snapshot the entire temp repository before and after each dry-run; all file bytes must match. **Verify:** `node --test tests/import-report.test.mjs tests/safe-imports.test.mjs` passes.
3. Document report categories and no-write semantics. **Verify:** `npm test`, `npm run check:icons` and build pass; a dry-run of a valid fixture exits 0 and invalid input fails identically to publication mode.

## Done criteria and tests

- This file exists and is indexed as TODO, explicitly PLAN ONLY in the current goal.
- Future execution: deterministic complete report, shared preparation, zero dry-run writes, meaningful tests and full verification pass.

All commands applicable to the plan must pass. `git diff --check` has no errors. `git status --short` is clean after the scoped commit. Report commit SHA, changed files, test counts, commands/results and any limitations; do not claim checks you did not run.

## STOP conditions and maintenance

Current STOP: user has not authorized implementation of this direction. Future scope excludes interactive approval UI, persistent suffix mapping, crash recovery and remote Figma access. Machine-readable JSON can be added if needed, but agree its schema before committing a public automation contract.

Also stop/report if current code differs materially from the excerpts without a reviewed prerequisite explaining it, verification fails twice after reasonable fixes, or an out-of-scope file is required. Keep the worktree intact for review. No secrets, credential values, unrelated dependency upgrades or unverified compatibility claims in output.
