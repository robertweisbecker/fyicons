---
'fyicons': patch
---

Reduce the uncompressed SVG source size of 53 existing icons by 1.75 KB. This includes smaller exports for pause, volume-slash, arrow-external, arrow-down-arrow-up, and other icons while preserving their names, React exports, and 16 × 16 canvas. Render the width icon and the central height arrow at full opacity, matching their current design. Other reviewed rendering differences are limited to small edge and antialiasing changes.

Replace filled outlines with stroked paths in arrow-clockwise-lg, arrow-corner-minimize, arrow-corner-resize, arrow-down, arrow-down-arrow-up, arrow-external, picture-in-picture-enter, play, and volume-slash. The clockwise arrowhead and the filled portions of picture-in-picture-enter remain filled. Pause now uses two stroked rectangles instead of a filled outline path.
