# Plan 010: Decide a portable selected React-source bundle

> Executor: follow the steps and verification gates. Reviewer owns `plans/README.md`; do not edit it. Report obstacles rather than expanding scope. Run the drift check first and compare current-state excerpts before changes.

## Status

- **Priority**: P3
- **Effort**: M
- **Risk**: LOW
- **Depends on**: 001, 004
- **Findings**: Direction: design spike; PLAN ONLY by user instruction
- **Planned at**: `2269820`, 2026-10-14
- **Drift check**: `git diff --stat 2269820..HEAD -- docs/react-source-download-design.md scripts/lib/react-icons.mjs src/lib/icon-archive.ts src/lib/catalog-codec.ts src/components/IconUsage.tsx package.json scripts/measure-build.mjs`

## Why this matters

The inspector shows @/icons usage while existing ZIPs contain SVGs, metadata and README only. Downloadable React source needs a complete support bundle and a deployment-cost decision before production implementation. The user explicitly requested retaining this as a plan only.

## Current state

- `src/components/IconUsage.tsx:11` shows an import from @/icons.
- `src/lib/icon-archive.ts` zips exact SVG files, filtered manifest and README. It does not package TSX.
- Generated per-icon TSX imports ./base and ./types; base.tsx imports React. Selected components alone are incomplete.
- Static build enforces a 4 MiB budget and canonical SVG downloads preserve exact bytes.

## Repository contract and commands

FYIcons is a React/TypeScript/Vite static app. Canonical editable artwork is `icons/*.svg` and `icons/manifest.json`; `src/icons/` and both `src/data/catalog*.json` are generated. Never optimize canonical SVG geometry or bytes. Category keyword rules are separate and editable at `public/icon-categories.json`; source IDs remain identities and aliases are retained. Category membership matches normalized name segments and may be multiple. Existing tests use `node:test`, `node:assert/strict` and temporary fixtures; follow them. Source code uses ES modules and Prettier.

Run commands from the assigned isolated worktree, never the user's main checkout. Node 24 is installed; engines require >=22.18. `npm ci` installs dependencies if not provided. `npm test` runs all `tests/*.test.mjs` and takes a few minutes. `npm run check:icons` is read-only freshness validation. `node_modules/.bin/tsc --noEmit --incremental false` is the exact standalone typecheck (no typecheck/lint npm script exists). `npm run build` regenerates, typechecks, bundles, compacts JSON and enforces a 4 MiB deployment budget; expect exit 0. Run Prettier check only on manually edited supported source/test files; generated TSX is not individually reformatted.

## Scope and Git workflow

Only modify these paths (directories include focused new modules/tests): `docs/react-source-download-design.md`. Everything else is outside scope; report required expansions. Reviewer may refresh downstream scope to match reviewed prerequisites. Do not change `plans/README.md`, unrelated toast/prototypes, canonical inventory, dependencies unless explicitly listed, or CI. Use assigned `codex/` branch or detached worktree; commits start `[codex]`. Stage only this plan's changes; commit after verification, do not push/open PR/merge main. Reviewer integrates reviewed commits on main, as authorized by the user.

## Steps

1. After explicit future selection, inspect generation/archive contracts and write docs/react-source-download-design.md comparing a complete selected bundle (components, base, types, selected index, README) with self-contained output. Recommend the complete shared bundle by default; keep SVG exports intact and React as an external consumer dependency. **Verify:** document enumerates every support file, path/import contract, license/provenance handling and collision policy.
2. Measure prototype payload sizes in a temporary directory for one, several and all icons. Compile/render a temporary consumer with repeated instances and title/explicit-label cases. Do not add production features or generated artifacts to the repo. **Verify:** report exact measured sizes, commands and consumer test output.
3. Specify UI entry point, download naming, docs, validation and build-budget implications. **Verify:** the design includes a concrete acceptance checklist and a separate implementation proposal; no production source files changed.

## Done criteria and tests

- This file exists and is indexed as TODO, explicitly PLAN ONLY in the current goal.
- Future spike: portable bundle design, measured deployment/export costs, temporary consumer verification and independently executable follow-up scope.

All commands applicable to the plan must pass. `git diff --check` has no errors. `git status --short` is clean after the scoped commit. Report commit SHA, changed files, test counts, commands/results and any limitations; do not claim checks you did not run.

## STOP conditions and maintenance

Current STOP: user has not authorized this spike or production implementation. Publishing an npm package, changing SVG byte fidelity, adding a runtime generator or uploading assets is outside scope. Future proposal must account for shared support files and repeated-instance IDs.

Also stop/report if current code differs materially from the excerpts without a reviewed prerequisite explaining it, verification fails twice after reasonable fixes, or an out-of-scope file is required. Keep the worktree intact for review. No secrets, credential values, unrelated dependency upgrades or unverified compatibility claims in output.
