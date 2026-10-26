# Agent guidance

## Project constraints

- Edit artwork in `icons/*.svg` and metadata in `icons/manifest.json`. Edit category rules in `apps/site/public/icon-categories.json`.
- Generate `packages/fyicons/src/`, `apps/site/src/icons/registry.ts`, both `apps/site/src/data/catalog*.json` files, `apps/site/public/icon-categories.schema.json`, and `registry.json` from their sources. Do not edit these outputs by hand.
- Keep SVG bytes, geometry, the 16 × 16 viewBox, and instance-safe SVG references unless the task requires an artwork change.
- Use the documented SVG export normalizer during imports. Its guarded fill/stroke union and pinned SVGO pass at three decimal places are authorized distribution transforms. Keep optimization in this shared pipeline; do not apply blanket mask removal or per-icon settings.
- Normalize visible foreground paint to `currentColor` before an SVG import. Preserve mask and clip definition paint, geometry, and transparency. Source downloads and React icons must follow this color policy.
- Use Figma file keys and component IDs as identities during private imports. Public manifests keep an opaque `source.id` derived from the file key and retain component IDs. Keep raw file keys, source URLs, and export scope in ignored local artifacts or local skills. Current Figma names are authoritative. Keep historical lookup aliases. Numeric duplicate suffixes can change; they do not provide stable React export names.
- Imports must validate and prepare all outputs before writing. Rejected input must leave source and generated files unchanged. Ordinary file writes do not provide crash-atomic publication.
- Keep the root package private. The library is `packages/fyicons`; `registry.json` is the shadcn source registry. Keep the MIT license and use normal versions starting at `0.1.0` unless the task changes that policy.

## Documentation

Keep the root and package READMEs and `apps/site/src/data/README.txt` focused on library users. Document available installation methods and behavior. Aim for about 75% [ASD-STE100 Simplified Technical English](https://www.asd-ste100.org/) in documentation: favor clear sentences, active voice, direct instructions, and consistent terms. Allow natural phrasing, useful context, and examples where they make the text easier to read. Treat 75% as an approximate writing target, not a measured compliance score. Strict dictionary compliance is not required; do not claim formal STE compliance.

Keep personal machine paths, private chat links, credentials, individual account procedures, and private Figma file links out of committed files and public artifacts. Public project links and license attribution are intentional project data. A directory such as `.agents/` is public if committed.

Keep individual sync reports, release preparation notes, audit reports, and internal plans under the ignored `artifacts/` directory. Use `artifacts/icon-sync-YYYY-MM-DD.md` for sync reports and `artifacts/plans/` for plans. Do not force-add these files. Put consumer-facing changes and migration steps in Changesets and the package changelog. Review any report for public content before attaching it to a release or CI run.

## Task references

Read the relevant guide when the task needs it:

- [Contributing](CONTRIBUTING.md): setup, checks, website changes, and deployment.
- [Icon sources](docs/icon-sources.md): generation, imports, identity, dates, and categories.
- [Releases](docs/releases.md): package boundaries, registry, changesets, diff reports, and publication.

The [documentation index](docs/README.md) lists the current guides. Local plans and reports under `artifacts/` are historical evidence, not instructions for new work.

## Working on changes

Use Conventional Commits for new commit subjects and PR titles. See `CONTRIBUTING.md` for types, scopes, and breaking changes. A leading `[codex]` attribution prefix is accepted for compatibility but is not required by this repository. Changesets, not commit parsing, controls package versions and release notes.

Keep unrelated edits unchanged. Builds regenerate tracked files; inspect the diff before and after generation. Use the checks for the affected behavior in `CONTRIBUTING.md`. Documentation-only changes need no build or full test run. Do not repeat passing checks unless a later change or new evidence requires it.

Local edits, disposable test fixtures, and artifact builds can proceed within the requested task. Publishing, remote settings changes, and destructive Git operations need explicit authorization. Report the changes, checks performed, and any remaining limits. Finish with `git diff --check`.
