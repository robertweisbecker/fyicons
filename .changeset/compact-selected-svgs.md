---
'fyicons': patch
---

Reduce the uncompressed SVG source size of 53 existing icons by 1,753 bytes. This includes smaller exports for pause, volume-slash, arrow-external, arrow-down-arrow-up, and other icons while preserving their names, React exports, and 16 × 16 canvas. Render the width icon and the central height arrow at full opacity, matching their current design. Other reviewed rendering differences are limited to small edge and antialiasing changes.
