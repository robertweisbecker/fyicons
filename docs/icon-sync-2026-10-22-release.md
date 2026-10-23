# Figma icon sync for 0.1.0

The complete Icons section (`646:192`) on the export page (`82:2415`) of Figma file `KA61XWs3LqkOU2bzzvjEeW` contains 1,133 components. This includes 196 component-set variants. All components use a 16 × 16 canvas. No components were excluded for size.

Compared with the preceding 1,130-icon inventory, this sync adds six icons, removes three icons, changes six names, and updates 45 SVG files. Names and SVG updates can overlap. The other 1,082 retained SVG files keep identical bytes.

## Added icons

- `appearance-simple`
- `controller`
- `gradient`
- `picture-in-picture-exit`
- `speaker-fill`
- `vector-curve`

## Removed icons

The complete source section no longer contains `file-copy` (`378:7147`), `shadow-layer` (`360:11422`), or `shadow-lines` (`114:2318`).

## Names

| Previous name               | Current name               | Component ID |
| --------------------------- | -------------------------- | ------------ |
| `square-dash-inner`         | `border-inner`             | `114:2218`   |
| `square-dash-outer`         | `border-outer`             | `114:2149`   |
| `grid-sub-grid`             | `grid-nested`              | `282:16503`  |
| `picture-in-picture`        | `picture-in-picture-enter` | `845:14105`  |
| `picture-in-picture-active` | `picture-in-picture`       | `996:34275`  |
| `article-wide`              | `widget`                   | `697:218`    |

Previous names remain lookup aliases. The current `picture-in-picture` name takes precedence over its historical alias. React exports follow the current names.

## Source checks

All components were exported with `svgSimplifyStroke: false`. Visible foreground paint was normalized to `currentColor`. Geometry, transparency, mask definitions, and reference IDs were preserved. Every imported SVG matches its normalized live export. The complete ID, name, size, and variant inventory remained stable during export.

The Speaker and Markdown components now use component sets. Existing component IDs keep their history. Category rules include the new names. The design demo uses `border-outer` for the same component ID as before.

The package remains `0.1.0` for its first publication. Generate the release comparison from the final source commit and use the checks in [Releases](releases.md).
