# FYIcons improvement backlog

Audit date: 2026-10-14, America/Los_Angeles. Baseline: `edce290` plus the
pre-existing uncommitted working-tree changes, including search, navigation,
inspector, dependency, and deployment-budget changes. Findings describe that
working tree, not only the committed revision. Recheck cited lines before execution.

Status: **awaiting selection**. No implementation plans have been selected or
written, and no source fixes were made. The next implementation-plan number is
`001`. This index records the audit so future work can reconcile rather than
repeat it. `plans/` is the resolved plan directory: no authoritative alternative
or previous Improve backlog was found.

Visual report with three before/after architecture candidates:
architecture-review-20261014-142029.html.
The report is temporary; this index preserves its findings. Opening the report
in Codex was queued, but its rendered appearance could not be verified.

## Verification baseline

- `npm test`: 32 passed, 0 failed; approximately 153 seconds in this run.
- `npm run check:icons`: all 1,021 sources and generated icon outputs current.
- `node_modules/.bin/tsc --noEmit --incremental false`: passed.
- `npm audit --json --ignore-scripts`: completed using a temporary npm cache;
  see dependency assessment below. No installs or lockfile changes were made.
- Temporary fixtures reproduced late rejection after import mutation, deletion
  during a case-only rename, and an out-of-directory write from a malformed
  imported name. Fixtures did not touch the real source inventory.
- A fixture using the actual preference reader reproduced array-method failures
  for valid JSON of the wrong shape. A transpiled startup harness confirmed
  `createRoot` is not called while category loading is pending.
- The HTML report has three candidate cards and valid internal anchor targets;
  its only scripts are Tailwind CDN and the Mermaid module.

The production build was not run: `npm run build` starts by regenerating tracked
sources. For implementation plans, its full verification command remains
`npm run build` in an appropriately isolated checkout. It performs generation,
TypeScript, Vite compilation, JSON compaction, and a **4 MiB** deployment-budget
check. Older audit notes referencing 704 icons or a 3 MiB cap are historical.

There is no dedicated lint or typecheck script. Formatting is configured with
Prettier and its Tailwind plugin; use check mode for targeted verification rather
than the mutating `npm run format` during reviews.

## Prioritized findings

All findings have **HIGH confidence** in the stated code pattern. Conditional
impact and verification limits are stated explicitly. S means hours; M means
approximately a day, including focused verification. Risk describes the fix.

| ID | Finding | Category | Impact | Effort | Fix risk | Evidence | Status |
| --- | --- | --- | --- | --- | --- | --- | --- |
| F01 | Validate the complete import before any writes | Correctness / security | High: source corruption and writes outside `icons/` | M | Medium | `scripts/sync-icons.mjs:74`, `:80`, `:133`, `:147`; `scripts/generate-icons.mjs:37`, `:55` | Awaiting selection |
| F02 | Make source publication safe for case-only renames | Correctness | High: deletes replacement SVG on case-insensitive filesystems | S | Medium | `scripts/sync-icons.mjs:144`, `:147`, `:161` | Awaiting selection |
| F03 | Give the individual SVG download button an accessible name | Accessibility | Medium: unnamed inspector action | S | Low | `src/components/IconUsage.tsx:32`; `src/components/Icon.tsx:31` | Awaiting selection |
| F04 | Exercise the production catalog reconstruction in integrity tests | Tests / architecture | Medium: current tests bypass the production decoder | S | Low | `src/lib/catalog.ts:14`; `tests/icons-source.test.mjs:211` | Awaiting selection |
| F05 | Validate persisted selection values | Correctness | Medium, conditional on wrong-shaped stored JSON | S | Low | `src/lib/preferences.ts:3`; `src/App.tsx:347`; `src/components/Inspector.tsx:267` | Awaiting selection |
| F06 | Render useful content while optional categories load | Performance / resilience | Medium: every route waits before first mount | M | Medium | `src/main.tsx:8`; `src/lib/catalog.ts:65`; `src/lib/use-library-navigation.ts:16` | Awaiting selection |
| F07 | Characterize navigation history and timer transitions | Tests | Medium: stateful behavior is unprotected | M | Low | `src/lib/use-library-navigation.ts:40`; `tests/library-url.test.mjs:13`; `tests/navigation.test.mjs:5` | Awaiting selection |
| F08 | Align the CI freshness statement with regeneration behavior | Docs / tooling | Low: incorrect maintainer expectation | S | Low | `README.md:69`; `.github/workflows/pages.yml:57` | Awaiting selection |

### F01–F02: icon import preparation and publication

Sync checks dimension metadata and an SVG prefix, and pre-renders React output.
It then writes source SVGs, manifest and category definitions, removes old SVGs,
and invokes generation. Generation applies additional filename and actual
viewBox validation after those mutations. A fixture with 16×16 metadata but a
24×24 viewBox replaced the manifest, removed the original source, retained the
invalid replacement, and then failed with `Invalid 16×16 SVG source`.

Destination filenames are derived from imported names before containment is
checked. A separate fixture confirmed that a malformed imported name can
overwrite a sentinel outside `icons/` before generation rejects the filename.
This is a **local importer integrity problem**; no remote ingestion path was
established. Validate names and resolved destinations before all writes.

For a case-only `alpha` to `Alpha` rename, the new write addresses the existing
file on this macOS filesystem. Cleanup compares strings with case sensitivity
and deletes the old spelling, thereby deleting the new file too. The fixture's
manifest referenced `Alpha-16.svg`, but zero source SVGs remained; generation
failed with `ENOENT`.

Deepen one preparation module so normalization, complete validation, rendering
and catalog encoding finish before publication. Keep filesystem publication
case-safe. The module's interface should hide the validity rules from both
commands; a subprocess wrapper alone would remain shallow. Existing temporary
repositories provide the filesystem test adapter. The deletion test supports
this module: removing it would spread the rules across sync and generation again.

Treat F01 and F02 as **one implementation plan**, with failure-preserves-files
and case-rename cases at the import interface. Preserve exact SVG bytes, aliases,
stable identities and category-reference remapping. Do not imply that multi-file
publication is crash-atomic without a deliberate design and verification step.

### F03: named download action

The download button's only child is an unlabeled `Icon`; that icon is explicitly
hidden from assistive technology. `Button` forwards props without inventing a
label. Add an explicit accessible name using the existing `IconButton` convention
or the current button, then inspect the accessible name in both inspector modes.
No broad UI test framework is required for this small correction.

### F04: catalog transport module

The generator encodes the compact catalog, the browser reconstructs it, and the
integrity test independently copies the reconstruction algorithm. The test can
pass after a production-only decoder regression. Let a catalog transport module
own complete reconstruction separately from browser singleton setup; runtime and
tests should cross the same seam. Replace the copied test decoder with the
production implementation and retain equality against the full catalog.

This is an in-process dependency: no compression adapter hierarchy is warranted.
Depth comes from owning metadata reconstruction and exact SVG fidelity, not
merely extracting a generic decompression helper. It provides a small prerequisite
for later work on import preparation and catalog encoding.

### F05: preference shape validation

The generic reader treats any successfully parsed non-null JSON as its declared
type. Objects, booleans and strings therefore survive reading as a supposed
`string[]`, then fail `.some` or `.includes`. No evidence establishes affected
current users. Validate selection shape while preserving valid current values
and the `astra-` legacy-key fallback. Cover malformed shapes and valid migration.

### F06–F07: category readiness and navigation characterization

Startup awaits an uncached optional category request before creating the React
root; the request has a five-second timeout. The root remains empty until that
request settles. This behavior was confirmed with a controlled pending promise,
not a measured production-network delay.

Simply removing the await is unsafe: navigation validates initial categories
against globals that currently become ready before mounting. A readiness module
could concentrate pending, success and fallback behavior while allowing a useful
shell. An owned fetch adapter and a deterministic pending/success/failure test
adapter would justify the seam. Keep editable same-host category JSON and preserve
pending deep-link intent.

Existing tests cover URL serialization and initial path parsing. They do not
execute the hook's history updates, debounced writes, restoration, cancellation
or share transitions. This is a coverage finding, **not proof that those
transitions currently fail**. Characterize them before changing readiness or
deepening navigation. Avoid restructuring production merely to test an extracted
copy of its implementation.

### F08: CI documentation

The workflow intentionally regenerates derived files during the build, then runs
tests. README instead says it checks freshness before building. Correct the
statement to match the intended contract; do not introduce a freshness gate
without a separate decision. This is small enough to bundle with related docs.

## Recommended order and dependencies

1. F04: test the production catalog reconstruction before modifying shared catalog
   preparation.
2. F01 + F02: one import-safety plan, with regression cases preceding changes.
3. F03 and F05: independent, small corrections.
4. F07 before F06: characterize history/timer behavior before readiness changes.
5. F08 can accompany any relevant documentation update.

No plans are executing. The three architecture candidates are import preparation
(Strong), catalog reconstruction (Strong), and category readiness (Worth exploring).
The top architecture recommendation is import safety because it protects editable
artwork from reproduced loss paths. Concrete interface design follows selection.

## Direction options, separate from defects

- **Preview an import before publication** (M, coarse estimate). Show additions,
  removals, identity-preserving renames and changed SVG hashes. `README.md:135`
  warns that imports replace manual artwork, while `scripts/sync-icons.mjs:169`
  only reports a final count. This naturally follows import preparation, but adds
  a workflow to document and maintain.
- **Selected React-source downloads** (M–L design spike). The inspector advertises
  imports from `@/icons` (`src/components/IconUsage.tsx:11`), while archives contain
  SVGs, metadata and a README (`src/lib/icon-archive.ts:15`). Generated React files
  already exist. Decide portable packaging, required support files and deployment
  cost before implementation; publishing an npm package is not implied.

## Dependency assessment

The live npm audit returned eight high-severity dependency entries representing
two underlying advisories, all in development tooling. An affected production
browser path was not established.

- `source-map-js@1.2.1` is locked at `package-lock.json:5837`; Tailwind's Node module
  depends on it (`package-lock.json:1478`). The
  [reviewed advisory](https://github.com/advisories/GHSA-68fv-2mgg-jv7q) identifies
  indexed-source-map consumption as the denial-of-service path and lists 1.2.2
  as patched. Inspected Tailwind code uses `SourceMapGenerator`, so the vulnerable
  consumption path is not established by that dependency alone. PostCSS is also
  installed through shadcn. Assess and update this as tooling maintenance.
- `braces@3.0.3` is in shadcn's globbing dependency chain. Its
  [reviewed advisory](https://github.com/advisories/GHSA-vfj7-8cjw-p6xm) lists no
  patched version. No repository script invokes the shadcn CLI, and the CSS import
  is not evidence that globbing code executes. Do not apply npm audit's suggested
  major shadcn downgrade without reviewing functionality and reachability.

These entries were not promoted into unsupported runtime-security findings.

## Considered and rejected

- Split `App.tsx` because it is large: file length alone does not establish
  leverage; navigation work is already in progress.
- Remove catalog compression or optimize source geometry: conflicts with the
  documented exact-byte and deployment-size decisions.
- Add workers or grid virtualization from icon count alone: no timing evidence.
- Add blanket UI/demo tests or connect demo apps to real services: the documented
  demo scope is deliberately simulated; target critical catalog behavior instead.
- Treat Autocomplete's click handler as a keyboard-selection defect: installed
  Base UI routes Enter through the highlighted item's click behavior.
- Force an explicitly linked icon to match active filters: the independent-link
  behavior is intentional and tested.
- Claim source SVG strings create a browser HTML-injection defect: rendering uses
  generated React modules; no such HTML sink or remote ingestion path was found.
- Treat category overlaps or alias exclusion from category matching as bugs:
  both are explicit, tested product decisions.
- Add a new CI freshness gate automatically: current regeneration is intentional;
  the demonstrated issue is documentation drift.
- Add adapters around pure naming, matching or compression: a single concrete
  implementation does not justify another seam.

## Scope and remaining uncertainty

Standard, hotspot-weighted review across correctness, security, performance,
tests, architecture, dependencies, tooling, docs and direction. Inspected runtime
catalog/navigation/search/selection/inspector paths, generation and sync scripts,
archive behavior, tests, build/CI configuration and design-intent documents.
No domain glossary or ADRs were present. Exact-source preservation and local demo
behavior are documented decisions, not audit defects.

Live browser initialization failed, so accessibility-tree, focus, mobile gestures,
visual layout and report rendering remain unverified. No production build,
hosted deployment inspection, measured network/CPU performance pass, exhaustive
per-icon visual audit, full Git-history secret scan or upstream lifecycle audit
was performed. Existing local changes were preserved.
