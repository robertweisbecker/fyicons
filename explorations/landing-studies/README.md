# Landing page studies (handoff)

Exploration only. Do not merge this folder into `main`. It holds two
self-contained HTML study pages for the home page: one for catalog breadth and one
for drawing quality. The pages use the real catalog from `icons/` and the
category rules from `apps/site/public/icon-categories.json`.

## Build

From the repository root:

```bash
bash explorations/landing-studies/fetch-compare.sh
```

```bash
python3 explorations/landing-studies/build.py
```

The first command downloads five comparison icon sets from npm into `.cache/` and
writes `compare.json`. Both are ignored. Skip it if you only need set I; set II
then builds with empty comparison tables. The second command writes
`landing-studies.html` and `landing-studies-2.html`. Open them in a browser, or
publish them as artifacts. Each file is about 1.7 MB because it inlines the
icon sprite and the Allo and Paper Mono fonts.

Edit `template.html` or `template-2.html`, then build again. Do not edit the
built HTML.

## The brief so far

1. Generate HTML variations and example sections for the landing page and the
   "Constructed with care" section. Focus on how much the set covers and on its
   opinionated drawing style.
2. Then go bigger and weirder. References: Grilli Type landing pages, Josh
   Puckett's work on Allo, DialKit, and Graphical, and Benji Taylor's interactive
   demos and breakdowns. Show versatility and good drawing. Compare with Lucide,
   Phosphor, Remix Icon, Hugeicons, and Font Awesome.
3. The thesis from the author: the other sets have weak optical adjustments or a
   strong house style that limits them across varied use cases. In FYIcons, odd
   subjects (penguin, cat, agent) are opinionated, while arrows and controls look
   the way you expect, with optical adjustments and care. Personality when you
   need it, utility everywhere else.

## Set I: `template.html`

Part 1, breadth:

- 1.1 Three versions of the Features strip: numbers with icon evidence, one
  sentence with inline icon tags, and a large count over two scrolling rows.
- 1.2 The whole catalog in one field, with category filter chips.
- 1.3 A category atlas of all 25 categories, ordered by size. Selecting a card
  filters 1.2.
- 1.4 Three bands from "Every app needs" to "Your app, specifically".
- 1.5 The 10 largest name families (for example, `square` and `folder`).
- 1.6 Three small product surfaces built only from FYIcons: a work app, a design
  canvas, and a phone.
- 1.7 All 203 outline and fill pairs, with a flip wave.

Part 2, drawing style:

- 2.1 Anatomy of `envelope`: 14 × 10 keyline, 1 px walls on whole pixels, radius
  2 outside and 1 inside. Values come from the path data.
- 2.2 Keyline census. Each icon is rasterized and sorted into circle, square,
  horizontal, vertical, or other. The sort is automatic and approximate.
- 2.3 A heat map of all icons stacked in one cell. About 99.5% of ink is inside
  the 1 px margin.
- 2.4 Pixel proof: an icon at 16 px as drawn and moved by half a pixel.
- 2.5 An integer scale ladder (16, 20, 24, 32, 48).
- 2.6 Fill variants under their outlines.

## Set II: `template-2.html`

- Hero: a draggable dial from utility to personality. Allo's weight axis changes
  with it, and 24 controls flip into creatures.
- 01: A rebus tester. Words that name an icon turn into it.
- 02: A render-size loupe from 10 to 48 px, with an edge-blur curve.
- 03: Six sets compared at 16, 20, and 24 px, with a blur-by-size chart.
- 04: Six controls and six creatures across all six sets.
- 05: Optical centering of the play icon, with each set measured.
- 06: Why the circle keyline is 14 px and the square is 12 px.
- 07: A field guide to the creatures, with invented Latin names.
- 08: A pixel loupe over hundreds of icons at true 1× pixels.
- 09: One icon in nine contexts.

## Measured findings to keep honest

Edge blur is partly covered pixels per pixel of outline, summed over 14 controls.
Lower is sharper. Values come from Chromium and vary a little by browser.

| Set | 16 px | 24 px | 32 px |
| --- | --- | --- | --- |
| FYIcons | 0.72 | 0.89 | 0.70 |
| Phosphor | 0.72 | 0.89 | 0.59 |
| Font Awesome | 0.74 | 0.89 | 0.52 |
| Lucide | 0.90 | 0.64 | 0.92 |
| Remix Icon | 0.89 | 0.42 | 0.89 |
| Hugeicons | 0.89 | 1.00 | 0.87 |

- Each set is sharpest at its own grid. At 16 px, FYIcons ties Phosphor and Font
  Awesome. Do not claim FYIcons is sharper than every set at 16 px.
- Diagonals (chevron, close, check) are soft in every set. FYIcons diagonals are
  no sharper than Lucide's at 16 px.
- Play icon: FYIcons, Phosphor, and Remix center the triangle's mass. Hugeicons
  centers its box. Lucide and Font Awesome are between.
- FYIcons is the only set of the six with a penguin. Remix has no cat or fish.
- The strongest comparison for the thesis is study 04 (range of voice), not
  study 03 (sharpness).

## Licenses for comparison icons

`compare.json` and the built set II page contain icons from Lucide (ISC),
Phosphor (MIT), Remix Icon (Apache-2.0), Hugeicons free set (MIT), and Font
Awesome Free (CC BY 4.0, Fonticons, Inc.). The page footer credits each one.
Keep the credits if a comparison reaches the public site.

## Ideas not built yet

- Port chosen studies into `apps/site/src/home/` as React components.
- A motion study: creatures with idle animation from their outline and fill pairs.
- A "same subject, three moods" study for the creatures across sizes.
- Check the Grilli Type, Josh Puckett, and Benji Taylor sites directly. The
  current pages follow their general feel from memory.
