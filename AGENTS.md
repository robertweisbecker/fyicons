# Agent guidance

## Project constraints

- Edit artwork in `icons/*.svg` and metadata in `icons/manifest.json`. Edit category rules in `apps/site/public/icon-categories.json`.
- Generate `packages/fyicons/src/`, `apps/site/src/icons/registry.ts`, both `apps/site/src/data/catalog*.json` files, `apps/site/public/icon-categories.schema.json`, and `registry.json` from their sources. Do not edit these outputs by hand.
- Keep SVG bytes, geometry, the 16 × 16 viewBox, and instance-safe SVG references unless the task requires an artwork change.
- Normalize visible foreground paint to `currentColor` before an SVG import. Preserve mask and clip definition paint, geometry, and transparency. Source downloads and React icons must follow this color policy.
- Use Figma file keys and component IDs as identities. Current Figma names are authoritative. Keep historical lookup aliases. Numeric duplicate suffixes can change; they do not provide stable React export names.
- Imports must validate and prepare all outputs before writing. Rejected input must leave source and generated files unchanged. Ordinary file writes do not provide crash-atomic publication.
- Keep the root package private. The library is `packages/fyicons`; `registry.json` is the shadcn source registry. Keep the MIT license and use normal versions starting at `0.1.0` unless the task changes that policy.

## Documentation

Keep `README.md` and `apps/site/src/data/README.txt` focused on library users. Document available installation methods and behavior. Use [ASD-STE100 Simplified Technical English](https://www.asd-ste100.org/) for public text: short sentences, active voice, direct instructions, and consistent terms. Use the STE dictionary for general words; API names, paths, and necessary software terms are technical terms. Do not claim formal compliance from sentence length alone.

Keep personal machine paths, private chat links, credentials, and individual account procedures out of committed docs. Public project links, license attribution, and icon source references are intentional project data. A directory such as `.agents/` is public if committed.

## Task references

Read the relevant guide when the task needs it:

- [Contributing](CONTRIBUTING.md): setup, checks, website changes, and deployment.
- [Icon sources](docs/icon-sources.md): generation, imports, identity, dates, and categories.
- [Releases](docs/releases.md): package boundaries, registry, changesets, diff reports, and publication.

The [documentation index](docs/README.md) separates current guides from historical reports. Old plans and reports are evidence, not instructions for new work.

## Working on changes

Keep unrelated edits unchanged. Builds regenerate tracked files; inspect the diff before and after generation. Use the checks for the affected behavior in `CONTRIBUTING.md`. Documentation-only changes need no build or full test run. Do not repeat passing checks unless a later change or new evidence requires it.

Local edits, disposable test fixtures, and artifact builds can proceed within the requested task. Publishing, remote settings changes, and destructive Git operations need explicit authorization. Report the changes, checks performed, and any remaining limits. Finish with `git diff --check`.
