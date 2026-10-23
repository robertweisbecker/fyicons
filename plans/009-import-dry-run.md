# Proposal 009: Import preview

Status: proposal only. No implementation is approved by this document.

## Purpose

Show the effects of a complete import before it replaces editable artwork. The current importer prepares and validates the next inventory before writing. A preview can use that result without a second naming or validation implementation.

## Proposed behavior

- Add a dry-run option to `scripts/sync-icons.mjs`.
- Report additions, removals, identity-preserving renames, SVG-byte changes, and category-reference changes.
- Use Figma identities for renames. Distinguish source name changes from duplicate-suffix changes.
- Keep normal import behavior unchanged. Run the same validation and perform no file writes in dry-run mode.

## Acceptance criteria

Use temporary fixtures to test a no-op import, simultaneous rename and artwork changes, case-only renames, suffix changes, and rejected input. Compare all fixture files before and after each dry run; their bytes must match.

The existing `diff:icons` command compares committed revisions. This proposal concerns a pending import. Review shared comparison code before choosing a report format. Interactive approval, persistent suffix assignment, and crash recovery are outside this proposal.

See [Icon sources](../docs/icon-sources.md) for the current import contract.
