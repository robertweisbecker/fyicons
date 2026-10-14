# FYIcons consolidated improvement list

Consolidated on 2026-10-14, America/Los_Angeles, through collaboration between
Audit,
Audit icon generation scripts,
and Audit codebase architecture.
The original survey inspected `edce290` plus local work; consolidation rechecked
the relevant code at **`f50ebe1`**, after that work was committed. Recheck cited
lines before execution.

Status: **implementation authorized and planned**. Eight implementation plans cover
all twelve confirmed findings. The reviewer owns this index, validates executor
changes, and integrates accepted commits onto `main`. Executors use fresh-context
GPT-6.1 Sol agents at High reasoning in isolated worktrees. Plans 009 and 010 are
**plan only**, by the user's explicit instruction; they will not execute in this goal.

## Execution order and status

| Plan | Work | Findings | Depends on | Status |
| --- | --- | --- | --- | --- |
| [001](001-react-generation.md) | Correct generated React references and accessible names | F09, F10, F11 | none | TODO |
| [002](002-safe-icon-imports.md) | Prepare complete imports before publishing files | F01, F02 | 001 | TODO |
| [003](003-app-accessibility-preferences.md) | Name the SVG download action and validate saved selections | F03, F05 | none | TODO |
| [004](004-catalog-decoder.md) | Test the production catalog reconstruction directly | F04 | none | TODO |
| [005](005-category-schema-check.md) | Check category-schema freshness without writes | F12 | 002 | TODO |
| [006](006-navigation-characterization.md) | Characterize real navigation history and pending writes | F07 | none | TODO |
| [007](007-category-readiness.md) | Render immediately while categories become ready | F06 | 003, 004, 006 | TODO |
| [008](008-contract-documentation.md) | Align CI and naming documentation with behavior | F08 | 002, 005 | TODO |
| [009](009-import-dry-run.md) | Preview import changes using the prepared result | Direction: dry-run import report; PLAN ONLY by user instruction | 002, 008 | TODO — plan only |
| [010](010-react-source-download-spike.md) | Decide a portable selected React-source bundle | Direction: design spike; PLAN ONLY by user instruction | 001, 004 | TODO — plan only |

Initial parallel batch: 001, 003 and 006. Import preparation waits for generator
review; category readiness waits for app fixes, shared decoder and navigation
characterization. Schema and documentation follow reviewed import preparation.
Every downstream plan receives a drift/scope refresh before dispatch. Audit evidence
below is historical baseline evidence, not implementation verification.

## Final priorities and completion criteria

S = hours; M = approximately a day including verification. Fix risk concerns the
change itself. The ordering sets priority, not a requirement to serialize all work.

| Order | Improvement | Type | Complete when | Effort / fix risk | Findings |
| --- | --- | --- | --- | --- | --- |
| 1 | Correct React generation | Defects + regression coverage | SVG reference text stays literal data; repeated instances have unique resolving IDs; explicit naming props beat synthesized title linkage; every freshly generated icon renders | S–M / Low | F09, F10, F11 |
| 2 | Make import preparation and publication safe | Defects | Invalid metadata, viewBoxes, hashes, paths and collisions cause zero writes; valid case-only renames retain exact SVG bytes with correct casing; prepared outputs are reused | M / Medium | F01, F02 |
| 3 | Fix the small app accessibility and persistence issues | Defects | The SVG download action has an accessible name; wrong-shaped valid JSON cannot crash selection; valid selections and supported legacy storage survive | S / Low | F03, F05 |
| 4 | Make verification exercise real generated artifacts | Coverage gaps | The production decoder reconstructs the full catalog exactly; missing or stale category schema fails `check:icons` without writes; regeneration restores a passing check | S / Low | F04, F12 |
| 5 | Protect navigation, then improve category readiness | Coverage + resilience | Controlled tests cover history and pending URL writes; useful content renders during loading; incoming categories preserve query, inspected icon and pending deep-link intent | M / Medium | F07, F06 |
| 6 | Align documentation with actual contracts | Documentation | CI is described as regenerate-then-test; generated metadata does not promise persistent numeric suffixes | S / Low | F08 |

Keep regression tests in each defect-fix batch. Import guard fixes do **not**
depend on extracting the catalog decoder. Production-decoder coverage must precede
changes to catalog encoding or reconstruction. Navigation characterization must
precede changes to category readiness. The small app fixes can ship independently;
documentation corrections should accompany the corresponding changes.

Both collaborating audit chats reviewed these groups against `f50ebe1`. Their
scope refinements are incorporated: small app fixes are independent, importer
guards are not blocked on decoder work, and regression tests travel with fixes.

After these fixes, a **dry-run import change report** is the strongest workflow
addition: report additions, removals, renames, changed artwork and category-reference
changes using the same prepared import. **Selected React-source downloads** remain
an optional design spike, not part of the correctness work.

Keep Figma names authoritative. Defer persistent duplicate-suffix tracking,
incremental-generation caches, a crash-recovery framework, broad SVG optimization,
and splitting `App.tsx` merely because of file length. Tooling-advisory reachability
remains a separate maintenance assessment, not a demonstrated browser vulnerability.

Visual report with three before/after architecture candidates:
architecture-review-20261014-142029.html.
The report is temporary; this index preserves its findings. Opening the report
in Codex was queued, but its rendered appearance could not be verified.

## Verification evidence

The following baseline checks ran during the original survey. The pipeline and
catalog inputs were unchanged by the subsequent commits; the inspector changes
were separately reopened and typechecked. Consolidation added targeted checks
below rather than repeating the entire unchanged suite.

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
- Final hashes compared 2,171 pre-existing files. Only `Inspector.tsx` and
  `MobileInspector.css` changed concurrently during the audit; this audit made
  neither edit. Their affected evidence was reopened, and TypeScript passed
  again. The other 2,169 pre-existing files were byte-for-byte unchanged.
  The only repository file added by this audit is `plans/README.md`.
- At consolidation, a benign in-memory reference fixture was rendered and the
  emitted TSX was parsed, **not executed**. Source text became an unintended
  arithmetic expression in the AST, confirming F09 independently of both peers.
- Rendering the newly generated SVG root confirmed that supplying a title and an
  explicit `aria-label` also creates a synthesized `aria-labelledby`, confirming
  the F10 markup conflict. Accessible-name precedence is documented below.
- The current category schema was independently compared with the schema generator
  and is fresh for 1,021 icons. F12 is a check-coverage gap, not current stale data.

The production build was not run: `npm run build` starts by regenerating tracked
sources. For implementation plans, its full verification command remains
`npm run build` in an appropriately isolated checkout. It performs generation,
TypeScript, Vite compilation, JSON compaction, and a **4 MiB** deployment-budget
check. Older audit notes referencing 704 icons or a 3 MiB cap are historical.

There is no dedicated lint or typecheck script. Formatting is configured with
Prettier and its Tailwind plugin; use check mode for targeted verification rather
than the mutating `npm run format` during reviews.

## Finding register

All findings have **HIGH confidence** in the stated code pattern. Conditional
impact and verification limits are stated explicitly. S means hours; M means
approximately a day, including focused verification. Risk describes the fix.

| ID | Finding | Category | Impact | Effort | Fix risk | Evidence | Status |
| --- | --- | --- | --- | --- | --- | --- | --- |
| F01 | Validate the complete import before any writes | Correctness / security | High: source corruption and writes outside `icons/` | M | Medium | `scripts/sync-icons.mjs:74`, `:80`, `:133`, `:147`; `scripts/generate-icons.mjs:37`, `:55` | Planned |
| F02 | Make source publication safe for case-only renames | Correctness | High: deletes replacement SVG on case-insensitive filesystems | S | Medium | `scripts/sync-icons.mjs:144`, `:147`, `:161` | Planned |
| F03 | Give the individual SVG download button an accessible name | Accessibility | Medium: unnamed inspector action | S | Low | `src/components/IconUsage.tsx:32`; `src/components/Icon.tsx:31` | Planned |
| F04 | Exercise the production catalog reconstruction in integrity tests | Tests / architecture | Medium: current tests bypass the production decoder | S | Low | `src/lib/catalog.ts:14`; `tests/icons-source.test.mjs:211` | Planned |
| F05 | Validate persisted selection values | Correctness | Medium, conditional on wrong-shaped stored JSON | S | Low | `src/lib/preferences.ts:3`; `src/App.tsx:347`; `src/components/Inspector.tsx:267` | Planned |
| F06 | Render useful content while optional categories load | Performance / resilience | Medium: every route waits before first mount | M | Medium | `src/main.tsx:8`; `src/lib/catalog.ts:65`; `src/lib/use-library-navigation.ts:16` | Planned |
| F07 | Characterize navigation history and timer transitions | Tests | Medium: stateful behavior is unprotected | M | Low | `src/lib/use-library-navigation.ts:40`; `tests/library-url.test.mjs:13`; `tests/navigation.test.mjs:5` | Planned |
| F08 | Align the CI freshness statement with regeneration behavior | Docs / tooling | Low: incorrect maintainer expectation | S | Low | `README.md:69`; `.github/workflows/pages.yml:57` | Planned |
| F09 | Emit SVG reference strings as literal data | Generator correctness / security | High when reference text contains JavaScript delimiters; no compromised current asset established | S | Low | `scripts/lib/react-icons.mjs:62`, `:115`, `:123`, `:136` | Planned |
| F10 | Respect explicit accessible labels over the title fallback | Accessibility | Medium: generated title linkage overrides the supplied label | S | Low | `scripts/lib/react-icons.mjs:198`, `:210` | Planned |
| F11 | Render fresh generator output in the exhaustive test | Tests | Medium: standalone test can miss generator-only regressions | S | Low | `tests/react-icons.test.mjs:9`, `:57` | Planned |
| F12 | Include category-schema freshness in the check contract | Tests / tooling | Low: stale editor completions can pass `check:icons` | S | Low | `scripts/generate-icons.mjs:106`, `:176`, `:186`; `scripts/lib/category-schema.ts:79` | Planned |

### F09–F11: generator correctness and its regression tests

`instanceReference` constructs template-literal AST nodes with unescaped source
text in their raw segments. References from SVG attributes can therefore become
JavaScript syntax in generated TSX instead of remaining data. A benign in-memory
fixture confirmed the extra expression by parsing emitted code without executing
it. Use string-literal AST nodes and composition that preserves the reference text.
Cover delimiter characters and verify that every instance-local reference still
resolves. This concerns local source-to-code handling; no compromised catalog
asset or remote exploit path was identified.

The generated SVG root synthesizes title-based `aria-labelledby` even when a caller
provides `aria-label`. Because a valid `aria-labelledby` is evaluated before
`aria-label` in the [accessible-name computation](https://www.w3.org/TR/accname-1.2/#computation-steps),
the title can override the explicit name. Only add fallback title linkage when
neither explicit naming prop is supplied. Preserve an explicit `aria-labelledby`,
decorative hiding, custom dimensions, refs, and repeated-instance ID behavior.

The exhaustive rendering test prepares `generatedFiles` in memory but then loads
each icon from disk. A standalone test can therefore validate old generated files
after the renderer changes. CI's preceding build mitigates this. Render the fresh
map entries instead, retaining separate source freshness checks. Keep the literal
and naming regressions with their fixes rather than postponing them to a later
coverage batch.

### F12: category schema freshness

The schema is updated in the generator's write branch but is absent from the
expected-output map checked by `--check`. Include the schema's expected bytes in
the same read-only comparison. In temporary fixtures, both missing and stale
schemas should fail without changing any file; write mode should restore a passing
check. The real schema is currently fresh, and existing schema-generation tests
do not close this command-level gap.

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

Preflight must also match downstream metadata consumers: the browser decoder
needs `source.fileKey`, and search calls `originalName.toLowerCase()`. Validate
required field types or deliberately supply safe defaults; successful SVGR output
alone does not establish a valid browser catalog. Cover invalid dimensions,
viewBoxes, hashes, metadata, duplicate IDs, resolved paths and filesystem collisions.

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
Include mixed arrays, invalid JSON syntax, unavailable storage and legacy-key
fallback; invalid JSON syntax already has a safe fallback today. The download
label correction must retain the correct file and exact SVG content.

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

Acceptance cases must include pending search followed by Back/Forward, category,
page, reset, share and unmount actions. A pending write must not overwrite a later
action; history restoration and successive temporary icon inspections must not
append history entries. Sharing uses the latest active query and icon. While
categories load, retain initial deep-link intent without letting late completion
override subsequent user navigation. Success updates filters, search and counts;
failure leaves browsing usable.

### F08: CI documentation

The workflow intentionally regenerates derived files during the build, then runs
tests. README instead says it checks freshness before building. Correct the
statement to match the intended contract; do not introduce a freshness gate
without a separate decision. This is small enough to bundle with related docs.

Also correct `scripts/generate-icons.mjs:101–102`, which promises stable numeric
suffixes. If the first of two same-named source IDs disappears, the remaining
importer-assigned suffixed name can become the unsuffixed name without an upstream
rename. The collaborating audits reproduced that behavior, but recommend deferring
persistent suffix assignments: they require additional provenance and conflict
with the simplicity of authoritative current Figma names. Report automatic renames
and remove the unsupported promise; revisit persistence if collisions recur.

## Recommended order and dependencies

1. F09 + F10 + F11: generator corrections and their own regression coverage.
2. F01 + F02: import safety, independently of decoder extraction; include failure
   and case-rename regression cases with the change.
3. F03 + F05: independent app fixes, available to ship alongside pipeline work.
4. F04 + F12: production-decoder and schema checks. Complete F04 before touching
   catalog encoding/reconstruction, but do not block narrow import guard fixes.
5. F07 before F06: characterize history/timer behavior before readiness changes.
6. F08 accompanies the corresponding pipeline/documentation work.

The implementation plans above are authoritative. The three architecture candidates are import preparation
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
  cost before implementation; generated icons require shared `base` and `types`
  modules, so choose a complete bundle or self-contained output. Publishing an
  npm package is not implied.

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
- Require persistent importer-generated suffix assignments now: defer the
  additional identity/provenance policy; retain Figma-name authority and correct
  the stable-suffix promise instead.
- Require crash-atomic multi-file publication as part of basic import validation:
  separate scope. Zero writes on validation failure and safe case handling are
  the current acceptance targets.

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
