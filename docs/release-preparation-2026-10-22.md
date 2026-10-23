# Release preparation: October 22, 2026

This record describes local preparation of `fyicons@0.1.0-alpha.0`. No package was published. Use [Releases](releases.md) for current commands and publication steps.

## Prepared features

- MIT license, npm package, and shadcn source registry.
- Changesets prerelease state and generated changelog.
- Fixed-revision HTML, JSON, and Markdown icon reports.
- Fresh-consumer checks and an artifact-only CI workflow.
- Server-compatible React icon modules with no `use client` directive.

## Recorded verification

The repository tests, source checks, TypeScript check, package consumers, registry checks, and website build passed during preparation. Consumer checks covered React 18 and 19, Vite, Next.js, and shadcn. Changesets tests covered the sequence from alpha.0 through alpha.2.

Browser checks passed for the earlier card report. The later table report had automated source-level coverage but had not passed browser verification. Its browser verification remains required before release.

The npm runtime dependency audit reported no advisories. The full audit reported seven high-severity entries in the shadcn development dependency chain, associated with `braces`. Those development tools are outside the icon tarball. These audit results describe that date; read current advisories before release.

The compared snapshots correspond to `4874cf1abf1781d40e0637fe9a82325ac6afddb9` and `c3ee02a8fbc2bc582efe05fbdf10df12d3823dcd` in the current Git history. The comparison contained 80 additions and three removals. The first-release report compared an empty inventory with the latter commit. Both exclude working-tree edits. Existing local reports contain the earlier commit IDs. Regenerate them from the current refs before release.

## Remaining release checks

Make sure that package-name access and authentication are available. Then review the final source and artifacts, and obtain publication approval. Run verification and the first-release comparison from the approved commit. The initial version is already alpha.0; do not increment it before the first publication.

The workflow had not run on GitHub at the time of this record. Remote registry installation had not been verified.
