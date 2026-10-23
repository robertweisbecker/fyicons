# Icon sources

## Edit and generate

The editable artwork is in [`icons/`](../icons/). Each icon has one SVG file and one entry in [`icons/manifest.json`](../icons/manifest.json). Category rules are in [`apps/site/public/icon-categories.json`](../apps/site/public/icon-categories.json).

Normalize visible foreground paint to `currentColor` before import. Use `normalizeDisplayPaint` from `scripts/lib/react-icons.mjs`. Keep mask and clip definition paint, geometry, transparency, and the 16 × 16 viewBox. Generated catalogs and SVG downloads keep these normalized source bytes. React output gives each rendered instance its own SVG definition IDs.

After an artwork or metadata edit, run:

```sh
npm run generate:icons
```

This writes `packages/fyicons/src/`, `apps/site/src/data/catalog.json`, `apps/site/src/data/catalog-runtime.json`, and the category schema. The compact catalog stores compressed SVG data and metadata. The browser decoder restores the source SVG bytes and full metadata.

`dev` and `build` generate at startup. During a running development session, run the generation command after an SVG edit. `npm run check:icons` does checks of source validity and generated file freshness without writing files.

See [Contributing](../CONTRIBUTING.md#choose-checks-for-the-change) for verification. See [Releases](releases.md) when a source change also affects the package or registry.

## Identity and names

Use Figma file keys and component IDs to identify icons through renames. Current Figma names determine library names and React exports. Keep previous names as lookup aliases. A current name takes precedence over an alias.

Numeric suffixes resolve duplicate names in the current inventory. They can change when the inventory changes. An alias does not keep an old named React export available. Review name reassignments as well as renames when preparing release notes.

## Import a complete inventory

```sh
npm run sync-icons -- /path/to/export
```

This command replaces the editable inventory and regenerates its outputs. Save any artwork edits that must survive the import before running it. For a partial export, combine it with the retained inventory before using this command. An icon omitted from a complete import is removed.

The importer uses current source names for known IDs and keeps old lookup aliases. Use `--preserve-names` only when the task requires the earlier names. Repository category rules remain authoritative; incoming category assignments are ignored. Sidebar icon references follow known IDs through renames and use a fallback when their source is removed.

The importer validates metadata, hashes, viewBoxes, names, collisions, and paths before writing. It prepares source files, React output, catalogs, and the category schema together. Invalid input must leave all existing files unchanged. Publication uses ordinary file writes; a crash or filesystem error can leave partial output.

Legacy input can omit `source.fileKey`, `originalName`, and aliases. The defaults are an unknown file key, the imported name, and an empty alias list. Supplied source URLs stay intact; missing URLs use the Figma file key and component ID.

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
