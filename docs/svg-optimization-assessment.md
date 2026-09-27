# FYIcons SVG optimization assessment

This is a read-only assessment of the `src/data/catalog.json` snapshot inspected on 2026-09-27; that snapshot contains 567 SVGs. The canonical source artwork is now in `icons/`, so refresh the inventory from that directory before applying these recommendations to a conversion batch. No source SVG or catalog data was changed for this assessment.

## What the current files contain

| Measure                                                          |                                                                                            Result |
| ---------------------------------------------------------------- | ------------------------------------------------------------------------------------------------: |
| Catalog SVGs                                                     |                                                                                               567 |
| SVGs with explicit non-`none` stroke                             |                                                                                         15 (2.6%) |
| SVGs with no explicit stroke, therefore drawn as filled contours |                                                                                       552 (97.4%) |
| Paths                                                            | 583 total; 556 icons have one path, 7 have two, one has three, one has ten, and two have no paths |
| Other geometry                                                   |                                                                              7 rects and 1 circle |
| `defs` / `clipPath`                                              |                                                           6 of each, paired in the same six icons |
| Transforms / masks / filters                                     |                                                                  0 transforms, 0 masks, 0 filters |
| Clipped icons                                                    |    `arrow-revert`, `flashlight`, `paperclip-tilt`, `paperclip-tilt-2`, `plug-cord`, `plug-simple` |
| Icons with opacity attributes                                    |      11; includes `dir-down`, `dir-right`, `dir-up`, `dir-x`, `dir-y`, `sliders-v`, and `spinner` |
| Raw SVG bytes in catalog                                         |                                      750,332 bytes total; 1,323 average and 1,064 median per icon |
| Path numeric precision                                           |                                     42,336 of 79,744 numeric tokens have 5 or 6 fractional digits |

The 15 explicit-stroke files are `asterisk-5`, `asterisk-8`, `bluetooth`, `check-lg`, `check-md`, `check-sm`, `check-thick`, `flashlight`, `hand-palm`, `hand-pointing-2`, `plus-thick`, `presentation`, `spinner`, `volume-high-slash-fill`, and `volume-med-slash-fill`. The presence of `stroke="black"` does not by itself mean a file is stroke-only: these paths may also use fills, and root `fill="none"` plus path-level attributes determine their actual appearance. Several names ending in `-fill` occur in this list, so naming is not a reliable conversion rule.

All 567 roots use the standard `0 0 16 16` viewBox. Their explicit `width` and `height` are present in the source. The catalog distribution is heavily path based, but this does not mean it is suitable for one bulk conversion: filled contours encode silhouette, caps, joins, nested holes, and deliberate small-size corrections. An outline must be reconstructed from the shape’s centerline and intended stroke style, not inferred by adding `stroke` to its existing filled path.

## Promising manual stroke-conversion families

These are candidates for a source-vector review and a small proof set, not blanket conversion instructions:

- **Basic directional glyphs:** `arrow-left`, `arrow-right`, `arrow-up`, `arrow-down`; the two `arrow-up-right` variants should be compared rather than merged. Their names and matching family suggest common centerline semantics, while their existing filled paths preserve the exact current silhouette.
- **Simple navigation marks:** `chevron-*`, `caret-*`, and `check-*`. The `check-lg`, `check-md`, `check-sm`, and `check-thick` files already provide explicit-stroke references for related visual language. Check geometry and weights at 16px before extending the treatment to sharp/rounded variants.
- **Basic controls:** `plus`, `plus-large`, `plus-sm`, `xmark`, `line-horizontal`, and `line-vertical`; perhaps selected `asterisk-*` variants. `plus-thick` and several asterisk variants are existing explicit-stroke examples, but size/weight variants may intentionally differ in optical correction.
- **Directional and repeat controls:** `dir-*`, `arrow-repeat*`, `arrow-undo*`, and `arrow-redo*` may be evaluated as subfamilies. For repeat/undo/redo forms, retain the arrowheads as filled shapes if converting a shaft or arc to stroke. Several directional icons carry opacity metadata, so preserve it exactly and verify composition at native size.

Each candidate should first be checked against its Figma source and 1x rendering. For any converted icon, record the chosen stroke width, cap, join, and opacity explicitly, then compare old/new at 16px on light and dark backgrounds. Retain an icon-specific exception whenever rounding, asymmetry, fill overlap, or optical adjustment changes the intended result.

## Keep filled contours where they carry the design

Preserve fills for icons whose meaning or small-size rendering depends on a solid silhouette or multiple regions: e.g. `user-filled`, `heart-filled`, `play-filled`, `pause-filled`, `stop-filled`, `wifi-fill`, `bookmark-fill`, `cursor-arrow-fill`, `circle-user-fill`, `circle-check-fill`, and `home-fill`. Keep the heavier filled dots in `ellipsis-h`, `ellipsis-h-lg`, and `ellipsis-h-sm`; do not convert them to stroked circles. Preserve mini filled arrowheads and other internal 16px shapes where a stroke would change their weight or compact silhouette. Keep compound illustrations, dense marks, and intentionally solid accents as fills even if a stroke reconstruction seems possible. Avoid converting a path with separate inner contours or overlapping regions until its fill rule and topology have been reviewed. Symbols with clip paths/defs and icons that use opacity deserve individual handling.

## What safe optimization can be measured here

SVGO is not installed in this checkout, and this assessment did not install tools or alter the repository. A conservative lexical experiment removing only whitespace between XML tags reduces the combined SVG text by 1,194 bytes (0.16%; from 750,332 to 749,138 bytes). This is a lower-bound markup cleanup, not an SVGO result or a promise about ZIP output. Individual level-9 zlib streams for the SVGs total 359,909 bytes, showing that repeated markup already compresses substantially; the website ZIP uses its own level-6 deflate pass.

The high coordinate precision makes path simplification a possible optimization target, but global decimal rounding should be treated as a visual change to measure. About 53% of numeric tokens have five fractional digits and 0.2% have six. Reduced precision may produce subpixel antialiasing differences at the 16×16 size; the inventory alone does not show that rounding changes a full pixel edge. No geometric simplification was attempted, so any larger size savings remain unmeasured.

## Recommended workflow

1. Keep the SVGs in canonical `icons/` as the baseline and generate optimized copies as an opt-in output; do not overwrite source artwork or make optimization the default download path without review.
2. First try markup-only SVGO settings on generated copies, with geometry simplification and precision reduction disabled. Compare rendered pixels and SVG semantics against the baseline, including all opacity and clip-path cases.
3. If smaller output is still needed, test path-data simplification per family with conservative precision settings. Review 1x Pixel Preview at 16px, plus light/dark appearance, for every affected icon. Keep the baseline or a named exception when visual evidence shows a change.
4. Treat stroke conversion as a design change: reconstruct centerlines from source geometry, preserve the 16×16 viewBox and existing variants, document width/cap/join, and obtain visual review before replacing any downloadable source.
5. Measure final individual SVG, aggregate catalog, and exported ZIP sizes separately. Report the actual optimizer version/configuration and pixel-diff results; savings from uncompressed JSON are not the same as user download savings.

The data measured above is the `catalog.json` snapshot. Keep it as an audit snapshot and evaluate optimization against the current canonical `icons/` source. A generated optimized set should remain opt-in; the ordinary download flow should continue to use canonical originals unless and until the optimized output passes visual review.
