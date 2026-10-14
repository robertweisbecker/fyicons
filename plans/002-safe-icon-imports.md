# Plan 002: Prepare complete imports before publishing files

> Executor: follow the steps and verification gates. Reviewer owns `plans/README.md`; do not edit it. Report obstacles rather than expanding scope. Run the drift check first and compare current-state excerpts before changes.

## Status

- **Priority**: P1
- **Effort**: M
- **Risk**: MED
- **Depends on**: 001
- **Findings**: F01, F02
- **Planned at**: `f50ebe1`, 2026-10-14
- **Drift check**: `git diff --stat f50ebe1..HEAD -- scripts/sync-icons.mjs scripts/generate-icons.mjs scripts/lib tests/icons-source.test.mjs tests/sync-icons.test.mjs tests/safe-imports.test.mjs README.md`

## Why this matters

Sync validates only part of the contract before overwriting editable sources and deleting old files. Invalid viewBoxes and unsafe names can fail after destructive writes. Case-only renames delete their replacement on case-insensitive filesystems. One preparation owner must validate and prepare every derived output before publication.

## Current state

- `scripts/sync-icons.mjs:74`: `const filename = `${name}-16.svg`;`; line 80 reads `path.join(source, icon.file || originalFilename)` without containment.
- Sync pre-renders React once, writes source SVGs and manifest, removes old names using exact string comparison, then starts `scripts/generate-icons.mjs` as a subprocess.
- Generator separately checks `path.basename(meta.filename) !== meta.filename` and `!/viewBox=["']0 0 16 16["']/.test(svg)`, and prepares full/compact catalogs. Its filename checks currently occur after sync mutations.
- Browser metadata consumers require string `source.fileKey` and `originalName`; some old test fixtures omit them. Deliberately normalize legacy missing originalName to a safe string and define fileKey policy explicitly; reject invalid supplied types before writes.
- `scripts/lib/sync-categories.mjs` remaps sidebar icons and exactNames by source ID. Existing Node tests use copied scripts, temporary repositories and linked node_modules; extend that boundary.

## Repository contract and commands

FYIcons is a React/TypeScript/Vite static app. Canonical editable artwork is `icons/*.svg` and `icons/manifest.json`; `src/icons/` and both `src/data/catalog*.json` are generated. Never optimize canonical SVG geometry or bytes. Category keyword rules are separate and editable at `public/icon-categories.json`; source IDs remain identities and aliases are retained. Category membership matches normalized name segments and may be multiple. Existing tests use `node:test`, `node:assert/strict` and temporary fixtures; follow them. Source code uses ES modules and Prettier.

Run commands from the assigned isolated worktree, never the user's main checkout. Node 24 is installed; engines require >=22.18. `npm ci` installs dependencies if not provided. `npm test` runs all `tests/*.test.mjs` and takes a few minutes. `npm run check:icons` is read-only freshness validation. `node_modules/.bin/tsc --noEmit --incremental false` is the exact standalone typecheck (no typecheck/lint npm script exists). `npm run build` regenerates, typechecks, bundles, compacts JSON and enforces a 4 MiB deployment budget; expect exit 0. Run Prettier check only on manually edited supported source/test files; generated TSX is not individually reformatted.

## Scope and Git workflow

Only modify these paths (directories include focused new modules/tests): `scripts/sync-icons.mjs scripts/generate-icons.mjs scripts/lib tests/icons-source.test.mjs tests/sync-icons.test.mjs tests/safe-imports.test.mjs README.md`. Everything else is outside scope; report required expansions. Reviewer may refresh downstream scope to match reviewed prerequisites. Do not change `plans/README.md`, unrelated toast/prototypes, canonical inventory, dependencies unless explicitly listed, or CI. Use assigned `codex/` branch or detached worktree; commits start `[codex]`. Stage only this plan's changes; commit after verification, do not push/open PR/merge main. Reviewer integrates reviewed commits on main, as authorized by the user.

## Steps

1. Introduce a focused preparation module under `scripts/lib/` owning normalized inventory validation, React rendering and complete generated catalog preparation. Have generator consume it. Keep exact SVG bytes and existing transport format; do not change numeric suffix assignment policy. Make valid missing legacy metadata defaults explicit, reject invalid supplied types. **Verify:** `npm run test:icons` passes and `npm run check:icons` passes on the real inventory.
2. Route sync through the same preparation before any writes. Validate name/path confinement (including symlink escape), required field types, aliases, dimensions, actual root viewBox, hashes, duplicate IDs, unsafe destinations, case-folded file/component collisions and category references. Validate the complete import before reading/writing destinations; rendered code and encoded catalogs must be ready before publish. Reuse prepared outputs instead of rendering again in a subprocess. **Verify:** targeted sync/import tests pass and snapshots prove every file, including sentinels and generated outputs, is unchanged for invalid fixtures.
3. Publish valid imports with exact directory casing and safe case-only renames. Avoid deleting replacement files via old case aliases; test the actual case-insensitive host when available and a platform-independent publication scenario. Preserve source identities, aliases, source-name authority, category keyword rules, and exact SVG bytes. **Verify:** `node --test tests/sync-icons.test.mjs tests/safe-imports.test.mjs` passes; rename fixture has exactly the expected cased filename and a passing generator check.
4. Document validation and publication guarantees precisely (zero writes on validation failure; no crash-atomic claim). **Verify:** full `npm test`, typecheck, `npm run check:icons` and `npm run build` pass; generated real inventory remains byte-identical apart from prior plan 001.

## Done criteria and tests

- Invalid metadata, IDs, hashes, paths, file/component collisions, SVG viewBoxes and null compact metadata fail before any fixture file changes.
- Case-only source rename succeeds with exact expected casing and bytes.
- Normal and preserve-names imports retain identity, aliases and category remapping.
- Generator and sync share complete preparation; no second rendering subprocess.
- Full tests, check, typecheck and build pass.

All commands applicable to the plan must pass. `git diff --check` has no errors. `git status --short` is clean after the scoped commit. Report commit SHA, changed files, test counts, commands/results and any limitations; do not claim checks you did not run.

## STOP conditions and maintenance

Only modify source scripts, their tests and directly relevant README documentation; do not import the real Figma export or alter real icons/manifest/category data. Do not implement dry-run, persistent suffix tracking, caches, crash recovery or SVG optimization. Stop if preparation requires changing catalog encoding; plan 004 must be reviewed first for that. Cross-platform filename behavior and exact-byte fidelity are review priorities.

Also stop/report if current code differs materially from the excerpts without a reviewed prerequisite explaining it, verification fails twice after reasonable fixes, or an out-of-scope file is required. Keep the worktree intact for review. No secrets, credential values, unrelated dependency upgrades or unverified compatibility claims in output.
