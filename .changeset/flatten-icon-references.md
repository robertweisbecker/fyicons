---
'fyicons': patch
---

Remove SVG definitions that some icons did not need. The artwork does not change.

- 13 icons no longer have a clip that covers the full 16 × 16 canvas: `arrow-clockwise`, `arrow-counter-clockwise`, `bookmark-check`, `file-article`, `file-check`, `file-code`, `file-down`, `fish`, `fox-face`, `link-unlink`, `scribble`, `sunrise`, and `sunset`.
- 5 icons now use plain paths instead of masked inside strokes: `file-image`, `picture-in-picture`, `projector`, `projector-on`, and `wallet-fold`. `file-image` also no longer uses a `use` element.

When you place these SVGs inline more than once on a page, the copies no longer share clip or mask IDs.
