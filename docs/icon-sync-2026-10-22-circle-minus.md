# CircleMinus import — October 22, 2026

- Source: FYIcons file `KA61XWs3LqkOU2bzzvjEeW`, component set `1089:8618`, in Icons (`646:192`) on the export page (`82:2415`).
- Added CircleMinus (`1089:8619`, `fill=false`) and CircleMinusFill (`1089:8623`, `fill=true`). Both use the native 16 × 16 canvas.
- This was a partial import. The two fresh exports were merged with all 1,128 existing component records before running the replacement importer. The resulting catalog contains 1,130 icons.
- Preserved every existing record, date, and SVG byte exactly. No existing icons were renamed or removed.
- Exported with `svgSimplifyStroke: false`. Foreground paint uses `currentColor`; geometry and other attributes retain their exported values.
- Both new IDs have `addedAt` and `updatedAt` on October 22. The inspector shows `10/22`.
- Added the pair to Shapes & symbols and Navigation & actions through the local category rules.
- Validation: 86 full-suite tests, 13 source/React tests, generation freshness, nonincremental TypeScript, targeted formatting, and `git diff --check` passed.
- Production build: 21 files, 4,182,374 bytes, below the existing 4 MiB limit.
- Browser: verified both variants, native 16px rendering, inherited foreground paint, dates, categories, inspector navigation, and generated JSX usage. No browser errors or horizontal overflow appeared in the checked viewport. No browser downloads were triggered.
- Local comparison: `test-results/figma-sync-2026-10-22-circle-minus.html`.
