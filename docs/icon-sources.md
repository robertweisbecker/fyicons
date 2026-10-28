# Icon sources

## Edit and generate

The editable artwork is in [`icons/`](../icons/). Each icon has one SVG file and one entry in [`icons/manifest.json`](../icons/manifest.json). Category rules are in [`apps/site/public/icon-categories.json`](../apps/site/public/icon-categories.json).

Normalize visible foreground paint to `currentColor` before import. The importer applies `normalizeSvgExport` from `scripts/lib/svg-export.mjs`. Keep the raw export and its checksum in local staging. This function applies the foreground color policy, repairs supported fill/stroke combinations, and runs SVGO at three decimal places. Keep the 16 × 16 viewBox, clips, and transparency. Generated catalogs and SVG downloads keep these normalized source bytes. React output gives each rendered instance its own SVG definition IDs.

After an artwork or metadata edit, run:

```sh
npm run generate:icons
```

This writes `packages/fyicons/src/`, `apps/site/src/data/catalog.json`, `apps/site/src/data/catalog-runtime.json`, and the category schema. The compact catalog stores compressed SVG data and public metadata. The browser decoder restores the source SVG bytes and public metadata.

`dev` and `build` generate at startup. During a running development session, run the generation command after an SVG edit. `npm run check:icons` does checks of source validity and generated file freshness without writing files.

See [Contributing](../CONTRIBUTING.md#choose-checks-for-the-change) for verification. See [Releases](releases.md) when a source change also affects the package or registry.

## Fill and stroke exports

Keep `svgSimplifyStroke: false` for Figma exports. The simplify option can approximate inside and outside strokes. It does not always remove masks or combine fill and stroke geometry.

After foreground color normalization, the importer joins an expanded outside stroke with its matching opaque fill when it can verify the redundant inverse-mask structure. Paper.js computes one filled outline. This removes the internal compositing seam and duplicate path data. The operation preserves holes and shared group opacity. It leaves unsupported masks, alpha-bearing paint, layer transparency, transformed layers, and clipped bounds unchanged. It does not edit the Figma document.

Review the generated PNG comparison after an import, using an existing browser for SVG spot checks when needed. A vector union can change edge antialiasing and numeric path representation. A smaller file alone does not establish visual correctness. Paper.js and SVGO are development dependencies; neither is included in the icon package or website bundle.

After the repair, the pinned SVGO version runs its default preset with multiple passes and three-decimal precision. ID cleanup and color conversion are disabled. This reduces path data while keeping the viewBox, reference IDs, and paint policy. It can slightly change curves and edge antialiasing, so review the 16 px and 64 px comparisons when the optimizer or its settings change. Use the same normalizer for all imported icons; do not optimize generated React files separately.

## Identity and names

Use Figma file keys and component IDs to identify icons through private imports. The public manifest stores `source.id` as `sha256:` followed by the SHA-256 hash of the file key. This opaque identity and the component ID keep rename comparisons stable without exposing the file link. Current Figma names determine library names and React exports. Keep previous names as lookup aliases. A current name takes precedence over an alias.

Keep raw file keys, source URLs, and export scope in ignored local files, such as `artifacts/figma-source.json`. Do not commit or attach these files to public releases. The importer removes private source details before writing the tracked manifest, catalogs, and package metadata. Generation checks reject private source fields in the tracked manifest. Diff reports also remove them when reading older commits.

Numeric suffixes resolve duplicate names in the current inventory. They can change when the inventory changes. An alias does not keep an old named React export available. Review name reassignments as well as renames when preparing release notes.

## Import a complete inventory

```sh
npm run sync-icons -- /path/to/export
```

This command replaces the editable inventory and regenerates its outputs. Save any artwork edits that must survive the import before running it. For a partial export, combine it with the retained inventory before using this command. An icon omitted from a complete import is removed.

The importer uses current source names for known IDs and keeps old lookup aliases. Use `--preserve-names` only when the task requires the earlier names. Repository category rules remain authoritative; incoming category assignments are ignored. Sidebar icon references follow known IDs through renames and use a fallback when their source is removed.

The importer checks supplied hashes against raw input bytes before normalization. It computes output hashes from the normalized SVGs. It validates metadata, viewBoxes, names, collisions, and paths before writing. It prepares source files, React output, catalogs, and the category schema together. Invalid input must leave all existing files unchanged. Publication uses ordinary file writes; a crash or filesystem error can leave partial output.

Local import input can supply `source.fileKey` or the existing opaque `source.id`. If both are supplied, they must match. Missing source identity stays unknown. Legacy input can omit `originalName` and aliases; the defaults are the imported name and an empty alias list. Supplied `sourceUrl` values are discarded, and missing URLs are not reconstructed.

## Import dates

`addedAt` and `updatedAt` are optional UTC ISO timestamps. They describe library imports, not Figma edit history.

- A new ID gets both dates.
- Known dates follow the ID through renames.
- Changes to SVG bytes, the source name, or variant labels advance `updatedAt`.
- A no-op import, duplicate-suffix change, category edit, or build does not advance dates.
- Unknown history stays absent. A later update can add `updatedAt` without adding `addedAt`.

Supplied dates must be valid, and `addedAt` must not follow `updatedAt`. Catalogs and ZIP manifests keep these dates.

## Category rules

Each category has an `id`, display `name`, sidebar `icon`, and `keywords`. The file order controls the menu order. An icon can match more than one category.

A keyword matches complete, consecutive name segments. Matching ignores case and treats hyphens, underscores, and spaces as separators. `file` matches `file-add`, but not `profile` or `files`. List singular and plural forms separately. `arrow-up` matches `circle-arrow-up-fill`, but not `arrow-right-up`.

For a narrow exception, use `exactNames`. These entries match a complete normalized name. They do not include variants automatically. A keyword match or an exact-name match adds the icon to the category. Aliases and Figma IDs do not affect category membership. The IDs `all` and `uncategorized` are reserved.

Choose rules for the icon's meaning. For example, a `circle` keyword would collect unrelated controls and alerts. Use exact names for standalone shapes when a keyword would match too much.

The browser fetches category rules on page load without caching. Save and refresh to use edited rules. A running dev or preview server needs no restart. Without a running server, use `npm run generate:category-schema` after an inventory change to refresh editor suggestions.

If category loading fails, the library keeps all icons available and shows a notice. ZIP manifests include category definitions, rules, and computed memberships. Production builds minify the category JSON without changing its data.
