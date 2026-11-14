---
'fyicons': patch
---

Reduce the combined SVG source size of `quotes`, `quotes-fill`, and `square` from 6.15 KB to 1.33 KB, saving 4.81 KB (78.3%), while preserving their appearance, full opacity, names, and imports. Small edge-rendering differences remain in the quotes pair.

Convert `quotes` from outlined filled geometry to a stroked path, and `square` to a stroked rounded rectangle. `quotes-fill` remains a filled path.
