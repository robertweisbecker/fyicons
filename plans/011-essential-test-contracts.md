# Plan 011: Prune tests to essential contracts and actual regressions

- Status: DONE — reviewed, integrated on local main as `9e3ca91`, independently verified
- Planned at: `5648179`, 2026-10-14
- Depends on: reviewed plans 001–008 (DONE)
- Scope: `tests/**`, `package.json`, `package-lock.json`. Reviewer owns this plan and index.
- Drift check: `git diff --stat 5648179..HEAD -- tests package.json package-lock.json`

## Intent and current state

The user considers the generation pipeline relatively settled and explicitly asked
to prune redundant scenarios and unnecessary test machinery. The audit grew the
suite from 32 to 143 cases. There is no target count: remove duplicated scenarios
and setup, not merely separate test names. Preserve application behavior exactly.

`tests/safe-imports.test.mjs` has 51 cases, including 46 invalid input variants
that each create a repository and run the CLI. Preferences has 20 cases,
navigation 26, readiness 7. Separate App/navigation helpers repeat DOM setup,
fresh-module loading and fetch controls. `catalog-codec.test.mjs` duplicates some
full-catalog and successful-import assertions. The original tests already cover
all generated components, exact SVG/checksum/export fidelity, category semantics,
source regeneration and URL parsing. Read actual tests before selecting removals.

## Retained contracts

- Keep exhaustive fresh generated-component rendering, exact source/catalog/ZIP
  fidelity and established category matching. Keep direct production decoding.
- Retain literal SVG-reference and explicit accessible-name regressions. Prefer
  externally observable output over assertions of AST construction details.
- Keep a small set of command-level import rejection tests proving zero writes:
  late invalid SVG/root canvas, malformed browser metadata, checksum mismatch,
  unsafe source/output paths (including a symlink escape), ID/component/filename
  collisions. Representative inputs are sufficient; remove scalar-type and
  destination-path permutations. Preserve one valid import covering exact bytes,
  casing, identity, aliases, category rules and custom URL round-trip; retain
  preserve-names only for its distinct behavior. Retain portable case-only rename
  protection without duplicating the same complete workflow many times.
- Preferences need valid selections, invalid shape/mixed array fallback, legacy
  fallback/current precedence and unavailable storage. Remove exhaustive JSON
  primitive and legacy cross-products.
- Navigation needs latest debounced query, history restoration/cancellation,
  distinct push/replace behavior, sharing latest inspection/query and cleanup.
  Keep late-category/latest-query race protection. Remove equivalent page names,
  per-action readiness repetitions and route parsing already covered elsewhere.
- Retain the two real App checks for useful pending content and late search/count
  refresh. Keep one useful failure fallback and request deduplication if not
  already exercised by the App scenarios. Do not replace them with copied UI logic.
- Keep missing and stale schema rejection, non-mutation and exact regeneration.

## Implementation boundaries

Use one small shared DOM/import helper where it reduces real duplication; no
generic testing framework or production refactor. Remove unused helpers and
direct test dependencies if no remaining import requires them. Keep installed
dependency versions unchanged; no new packages. Reuse the existing Vite transform
where practical, but do not add loader complexity merely to remove a dependency.
Do not alter `src/`, `scripts/`, canonical artwork, category data, CI, README,
deferred plans 009/010, or unrelated in-progress homepage work.

Work only in `[local checkout]`
on `codex/prune-test-contracts`. Dependencies are already installed. Use existing
Node test/assert style and Prettier. Do not edit the main checkout. Commit only
scoped changes, prefix `[codex]`; no push/PR/main integration by executor. The user
already authorized the reviewer to integrate accepted work onto main.

## Verification and review gates

1. Inspect and prune. Record cases/helper lines before and after and identify the
   deleted scenario classes. Removing cases must reduce substantive work.
2. Run `npm test`, `npm run test:icons`, `npm run check:icons`,
   `node_modules/.bin/tsc --noEmit --incremental false`, `npm run build`, targeted
   Prettier check and `git diff --check`. Build must stay under 4 MiB and leave
   generated files unchanged. If package declarations change, verify a clean
   `npm ci --offline` and no unrelated lockfile changes.
3. In disposable copies only, demonstrate retained tests fail for selected real
   regressions: unsafe reference/naming output, case-only publication or missing
   pre-publication validation, invalid preference acceptance, and stale debounced
   URL after category completion. Do not commit mutations or a mutation framework.
   Report the exact mutation, failing test and restoration; root will review.
4. Report commit, actual test count, deleted infrastructure/dependencies, meaningful
   coverage retained and any deliberately dropped edge coverage. Keep worktree
   and dependencies for independent review. Stop on a production-source need or
   repeated unresolved verification failure; ask root for a specific adjustment.

## Implemented result

Executor commit `156d5bd` was reviewed and integrated as `9e3ca91`. The suite
decreased from **143 to 80 tests**, with **514 fewer test/helper lines**
(3,542 to 3,028). Shared DOM/import/fetch setup replaces duplicated helpers;
total helper size fell from 361 to 287 lines, including the new shared fixture.

| Test file                     |  Before |  After | Retained contract                                                                                                      |
| ----------------------------- | ------: | -----: | ---------------------------------------------------------------------------------------------------------------------- |
| `safe-imports.test.mjs`       |      51 |     15 | Twelve representative zero-write failures, complete valid import, preserve-names, portable case-only publication       |
| `sync-icons.test.mjs`         |       4 |      1 | Local rules, sidebar artwork, aliases and exact SVGs; incoming category shapes share one fixture                       |
| `preferences.test.mjs`        |      20 |     10 | Valid and empty selections, wrong shape/mixed array, legacy/current precedence, malformed JSON and unavailable storage |
| `library-navigation.test.mjs` |      26 |     17 | Debounce, history restoration/cancellation, push/replace, sharing, cleanup and late-category state races               |
| `category-readiness.test.mjs` |       7 |      3 | Both real-App loading/search checks, request deduplication and one failure fallback                                    |
| `react-icons.test.mjs`        |       6 |      5 | Every fresh component renders, SVG props/references and explicit accessible names                                      |
| `icons-source.test.mjs`       |       5 |      5 | Exact source/catalog bytes, production decoding, checksums and regeneration                                            |
| `catalog-codec.test.mjs`      |       2 |      2 | Unicode, optional fields and custom/default source URL reconstruction                                                  |
| `icon-categories.test.mjs`    |      12 |     12 | Established category matching and configuration behavior                                                               |
| `category-schema.test.mjs`    |       1 |      1 | Exact standalone schema content                                                                                        |
| `schema-check.test.mjs`       |       2 |      2 | Missing/stale schema rejection without writes; exact regeneration                                                      |
| `library-url.test.mjs`        |       4 |      4 | URL parsing and serialization                                                                                          |
| `navigation.test.mjs`         |       1 |      1 | Page navigation parsing                                                                                                |
| `icon-archive.test.mjs`       |       2 |      2 | ZIP contents and exact SVG fidelity                                                                                    |
| **Total**                     | **143** | **80** |                                                                                                                        |

Deleted scenarios include exhaustive JSON scalar and legacy combinations, import
path/destination permutations, equivalent page/base names, repeated late-readiness
actions and failure modes, and repeated complete import workflows. The component
existence-only test was redundant with loading and rendering every generated
component. Literal-reference tests now assert rendered behavior instead of Babel
AST construction details. These are substantive removals, not only fewer names.

The unused direct `@babel/parser` declaration was removed from the package and
lockfile root. It remains a transitive dependency; no package versions or other
lock records changed. `jsdom` and `rolldown` remain used by actual React tests.
No production, generation, canonical artwork, CI or deferred-plan implementation
changed.

## Verification evidence

- Executor: 80/80 full-suite tests, 10/10 icon tests, icon/schema freshness,
  standalone TypeScript, production build, scoped Prettier and diff checks pass.
- A clean disposable `npm ci --offline` passes with the narrower dependency
  declaration. The build is 3,152,108 bytes / 3.01 MiB, below 4 MiB.
- Reviewer inspected every changed test/helper, the exact dependency diff and
  temporary mutation scripts/results. Main integration is limited to the same
  eleven test/package files.
- Reviewer independently reran the integrated main suite: **80/80 passed, zero
  skipped**. Freshness for all 1,021 icons, standalone TypeScript, diff checks and
  production build passed. Main, including the user's preserved homepage work,
  builds to **3,163,070 bytes / 3.02 MiB**, below 4 MiB. Vite retains its existing
  chunk-size advisory. Logs: `[local evidence omitted]` and
  `[local evidence omitted]`.
- All **2,151 files** in the pre-pruning production/canonical/source snapshot
  remain byte-identical after verification. The user's modified `Landing.tsx`
  and untracked `IconSpecimen.tsx`/`IconSpecimen.css` remain untouched and unstaged.
  No push or PR was performed. Disposable install/mutation copies were removed;
  their logs and the installed executor worktree remain available.
- Five deliberate regressions in a disposable copy all fail retained tests:

| Deliberate regression                                   | Failing retained behavior                                   |
| ------------------------------------------------------- | ----------------------------------------------------------- |
| Raw template interpolation for SVG reference data       | Literal-reference output cannot compile/render correctly    |
| Overwrite explicit accessible names                     | Explicit `aria-labelledby` no longer survives               |
| Write replacements before deleting case-only old paths  | Both replacement files disappear in the portable case model |
| Bypass saved-selection validation                       | Object and mixed-array values are accepted                  |
| Capture pre-readiness state in the debounced URL writer | The invalid category reappears in the final URL             |

All mutated source bytes were restored and compared with the clean source.
Temporary evidence: `[local evidence omitted]`,
`[local evidence omitted]` and `[local evidence omitted]`.
No mutation framework was added to the repository.
