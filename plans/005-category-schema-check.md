# Plan 005: Check category-schema freshness without writes

> Executor: follow the steps and verification gates. Reviewer owns `plans/README.md`; do not edit it. Report obstacles rather than expanding scope. Run the drift check first and compare current-state excerpts before changes.

## Status

- **Priority**: P2
- **Effort**: S
- **Risk**: LOW
- **Depends on**: 002
- **Findings**: F12
- **Planned at**: `2269820`, 2026-10-14
- **Drift check**: `git diff --stat 2269820..HEAD -- scripts/generate-icons.mjs scripts/lib/category-schema.ts scripts/lib/icon-generation.mjs scripts/lib/prepare-icons.mjs tests/icons-source.test.mjs tests/category-schema.test.mjs tests/schema-check.test.mjs`

## Why this matters

The original gap was a schema generated in write mode but absent from check-mode expected outputs. Reviewed plan 002 now includes it in the shared preparation map. Protect that behavior with command-level tests for missing and stale schemas, including non-mutation and exact regeneration.

## Current state

- Plan 002 introduced `scripts/lib/prepare-icons.mjs`. `prepareIcons` adds `public/icon-categories.schema.json` to its expected map using `createCategorySchema(icons.map(({ name }) => name))` and two-space JSON plus a trailing newline.
- `scripts/generate-icons.mjs` calls `prepareRepositoryIcons(root)` then `preparePublication(root, prepared.expected)`. Check mode reports `publication.changed` and `publication.obsolete`; only write mode calls `publishFiles`.
- `scripts/lib/category-schema.ts` exports pure `createCategorySchema(iconNames)` and write-oriented `updateCategorySchema(root)`; serialization is JSON with two-space indentation and a trailing newline.
- Existing `tests/category-schema.test.mjs` covers schema content and standalone generation despite unfinished category edits. It does not run the icon generator's check command against a missing/stale schema. `tests/safe-imports.test.mjs` demonstrates copying scripts into a temporary repository and linking installed dependencies.

## Repository contract and commands

FYIcons is a React/TypeScript/Vite static app. Canonical editable artwork is `icons/*.svg` and `icons/manifest.json`; `src/icons/` and both `src/data/catalog*.json` are generated. Never optimize canonical SVG geometry or bytes. Category keyword rules are separate and editable at `public/icon-categories.json`; source IDs remain identities and aliases are retained. Category membership matches normalized name segments and may be multiple. Existing tests use `node:test`, `node:assert/strict` and temporary fixtures; follow them. Source code uses ES modules and Prettier.

Run commands from the assigned isolated worktree, never the user's main checkout. Node 24 is installed; engines require >=22.18. `npm ci` installs dependencies if not provided. `npm test` runs all `tests/*.test.mjs` and takes a few minutes. `npm run check:icons` is read-only freshness validation. `node_modules/.bin/tsc --noEmit --incremental false` is the exact standalone typecheck (no typecheck/lint npm script exists). `npm run build` regenerates, typechecks, bundles, compacts JSON and enforces a 4 MiB deployment budget; expect exit 0. Run Prettier check only on manually edited supported source/test files; generated TSX is not individually reformatted.

## Scope and Git workflow

Only modify these paths: `tests/category-schema.test.mjs tests/schema-check.test.mjs`. The implementation already exists after reviewed plan 002; report an actual production defect before expanding scope. Everything else is outside scope; report required expansions. Reviewer may refresh downstream scope to match reviewed prerequisites. Do not change `plans/README.md`, unrelated toast/prototypes, canonical inventory, dependencies unless explicitly listed, or CI. Use assigned `codex/` branch or detached worktree; commits start `[codex]`. Stage only this plan's changes; commit after verification, do not push/open PR/merge main. Reviewer integrates reviewed commits on main, as authorized by the user.

## Steps

1. Confirm the reviewed shared map already includes schema bytes for check and write modes; do not duplicate or refactor this completed implementation. Keep standalone generate:category-schema working. **Verify:** `npm run check:icons` passes on the fresh real inventory.
2. Add command-level temp-repository tests that first generate, then remove or corrupt the schema. Check must fail with the schema path in diagnostics and leave all files unchanged. Regeneration must restore exact expected schema and a passing check. **Verify:** `node --test tests/schema-check.test.mjs tests/category-schema.test.mjs` passes.
3. Verify command contracts after sharing preparation. **Verify:** `npm run test:icons`, `npm run check:icons`, typecheck and build pass with no unintended real generated changes.

## Done criteria and tests

- Missing and stale schema each make --check fail non-mutatingly.
- Regeneration restores a passing check and exact createCategorySchema output.
- Existing generated component/catalog freshness and obsolete cleanup still pass.
- Test:icons, check, typecheck and build all pass.

All commands applicable to the plan must pass. `git diff --check` has no errors. `git status --short` is clean after the scoped commit. Report commit SHA, changed files, test counts, commands/results and any limitations; do not claim checks you did not run.

## STOP conditions and maintenance

Do not change category matching or JSON schema semantics, CI order or editor conventions. Stop before changing production source; this remaining plan is regression coverage for the reviewed implementation. Future generated artifacts belong in the shared expected-output contract.

Also stop/report if current code differs materially from the excerpts without a reviewed prerequisite explaining it, verification fails twice after reasonable fixes, or an out-of-scope file is required. Keep the worktree intact for review. No secrets, credential values, unrelated dependency upgrades or unverified compatibility claims in output.
