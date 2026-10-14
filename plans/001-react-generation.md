# Plan 001: Correct generated React references and accessible names

> Executor: follow the steps and verification gates. Reviewer owns `plans/README.md`; do not edit it. Report obstacles rather than expanding scope. Run the drift check first and compare current-state excerpts before changes.

## Status

- **Priority**: P1
- **Effort**: S
- **Risk**: LOW
- **Depends on**: none
- **Findings**: F09, F10, F11
- **Planned at**: `f50ebe1`, 2026-10-14
- **Drift check**: `git diff --stat f50ebe1..HEAD -- scripts/lib/react-icons.mjs tests/react-icons.test.mjs src/icons package.json package-lock.json`

## Why this matters

SVG reference text currently enters raw template-literal AST segments, so delimiters can become executable syntax. The generated root also synthesizes title linkage even when an explicit aria-label is present. Exhaustive rendering currently reads checked-in TSX rather than the freshly generated map.

## Current state

- `scripts/lib/react-icons.mjs:62`: `instanceReference` returns `{ type: 'TemplateLiteral', expressions: [{ type: 'Identifier', name: 'idPrefix' }], quasis: ... }`; its second raw segment is `id + suffix`.
- `scripts/lib/react-icons.mjs:210`: `aria-labelledby={svgProps['aria-labelledby'] ?? (title ? idPrefix + 'title' : undefined)}`.
- `tests/react-icons.test.mjs:57` renders each component after `readFile(new URL('../src/icons/...', import.meta.url), 'utf8')`, despite `generatedFiles = await renderReactIconFiles(catalog.icons)` at line 9.
- Tests already transform generated TSX with Vite/Oxc and render via React DOM server. Reuse `loadComponent`; preserve defs/mask paint and per-instance IDs.

## Repository contract and commands

FYIcons is a React/TypeScript/Vite static app. Canonical editable artwork is `icons/*.svg` and `icons/manifest.json`; `src/icons/` and both `src/data/catalog*.json` are generated. Never optimize canonical SVG geometry or bytes. Category keyword rules are separate and editable at `public/icon-categories.json`; source IDs remain identities and aliases are retained. Category membership matches normalized name segments and may be multiple. Existing tests use `node:test`, `node:assert/strict` and temporary fixtures; follow them. Source code uses ES modules and Prettier.

Run commands from the assigned isolated worktree, never the user's main checkout. Node 24 is installed; engines require >=22.18. `npm ci` installs dependencies if not provided. `npm test` runs all `tests/*.test.mjs` and takes a few minutes. `npm run check:icons` is read-only freshness validation. `node_modules/.bin/tsc --noEmit --incremental false` is the exact standalone typecheck (no typecheck/lint npm script exists). `npm run build` regenerates, typechecks, bundles, compacts JSON and enforces a 4 MiB deployment budget; expect exit 0. Run Prettier check only on manually edited supported source/test files; generated TSX is not individually reformatted.

## Scope and Git workflow

Only modify these paths (directories include focused new modules/tests): `scripts/lib/react-icons.mjs tests/react-icons.test.mjs src/icons package.json package-lock.json`. Everything else is outside scope; report required expansions. Reviewer may refresh downstream scope to match reviewed prerequisites. Do not change `plans/README.md`, unrelated toast/prototypes, canonical inventory, dependencies unless explicitly listed, or CI. Use assigned `codex/` branch or detached worktree; commits start `[codex]`. Stage only this plan's changes; commit after verification, do not push/open PR/merge main. Reviewer integrates reviewed commits on main, as authorized by the user.

## Steps

1. Replace raw template segments with string-literal AST composition. Preserve prefix/id/suffix bytes for href, xlinkHref, url references in attributes and style. Add fixtures containing backticks, backslashes, `${...}`, quotes and Unicode; benign expressions must remain literal data. Verify both source AST and rendered reference resolution with repeated instances. **Verify:** `node --test tests/react-icons.test.mjs` passes.
2. Only synthesize title-based aria-labelledby when neither explicit naming prop is supplied. Explicit aria-labelledby retains precedence; explicit aria-label must not acquire title linkage. Keep title-only, decorative, role, hidden, size, color, props and ref behavior. Add actual rendered-markup regression cases. Switch exhaustive rendering to fresh map entries. **Verify:** `node --test tests/react-icons.test.mjs` passes all cases and all 1,021 generated icons.
3. Declare the already-locked @babel/parser version as a pinned dev dependency because the AST regression imports it directly; do not upgrade packages. Regenerate derived TSX and inspect the diff; source SVGs and catalog metadata must remain unchanged. **Verify:** `npm run generate:icons && npm run check:icons && npm run test:icons` exits 0; `git diff --name-only` contains only scoped paths. Run final typecheck and build below.

## Done criteria and tests

- Literal reference fixtures cannot add template expressions; every supported reference resolves to that instance's ID.
- Explicit aria-label/title and aria-labelledby/title combinations render the intended attributes; default decorative icons remain hidden.
- Fresh generated entries, never on-disk component files, drive exhaustive rendering.
- `npm run check:icons`, `npm run test:icons`, typecheck and build all pass.

All commands applicable to the plan must pass. `git diff --check` has no errors. `git status --short` is clean after the scoped commit. Report commit SHA, changed files, test counts, commands/results and any limitations; do not claim checks you did not run.

## STOP conditions and maintenance

Do not change canonical SVG bytes, catalog format, paint normalization policy or prop API. Stop if the fix requires changing those contracts. The current catalog has 1,021 icons; a count change indicates drift. Future generators must always treat imported reference text as data.

Also stop/report if current code differs materially from the excerpts without a reviewed prerequisite explaining it, verification fails twice after reasonable fixes, or an out-of-scope file is required. Keep the worktree intact for review. No secrets, credential values, unrelated dependency upgrades or unverified compatibility claims in output.
