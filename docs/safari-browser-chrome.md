# Safari browser colors

## Change

The header now uses an opaque canvas color. The page root uses the same color.
The header reserves the top safe area. Content and sticky panels use the same
header height. Header controls also respect the left and right safe areas.

Below 768px, a fixed bottom sample uses the page background color. It spans the viewport and
has a minimum height of 12px. It stays outside the inspector transform and below
modal backdrops. Larger layouts keep the docked inspector clear of the sample.
The mobile inspector keeps its inset position, rounded corners, and
swipe behavior. The sample does not receive pointer input.

The `theme-color` metadata follows the selected theme for browsers that use it.
Safari 26 samples rendered content instead. Metadata alone does not control its
browser colors.

References:

- [Josh Puckett: Seamless Mobile Safari](https://joshpuckett.me/seamless-mobile-safari)
- [Safari tint playground](https://github.com/aarongarciah/safari-tint-playground)
- [WebKit edge background behavior](https://bugs.webkit.org/show_bug.cgi?id=301756#c2)

## Automated checks

Run these commands with Node 24:

```sh
npm ci
node --test tests/browser-chrome.test.mjs
npm test
node_modules/.bin/tsc --noEmit --incremental false
npm run build
node_modules/.bin/prettier --check src/styles.css src/App.tsx src/components/SiteHeader.tsx src/components/CategorySidebar.tsx src/components/Inspector.tsx src/components/ui/sheet.tsx tests/browser-chrome.test.mjs index.html library/index.html examples/index.html docs/safari-browser-chrome.md
git diff --check
```

The focused tests check entry-point metadata, edge CSS, safe-area offsets, the
floating-card contract, and theme changes. They do not test Safari browser UI.

## Local preview

```sh
git fetch origin fix/safari-browser-chrome
git switch --track origin/fix/safari-browser-chrome
npm ci
npm run dev -- --host 0.0.0.0
```

Open the network URL from Vite on an iPhone on the same network. Do not change
production hosting to test this branch.

## Required device checks

Keep this pull request unmerged until these checks pass on an actual iPhone.
Desktop WebKit and mobile viewport emulation cannot verify Safari browser UI.

1. Open `/`, `/library/`, and `/examples/` in Safari. Check light and dark themes.
   The upper browser area must match the header. The header must stay opaque.
2. Scroll down and back up to collapse and expand Safari's toolbar. Repeat near
   the top and bottom of each page. Check portrait and landscape orientations.
3. On the library page, open an icon. Check the gap below the compact inspector.
   The browser area must match the page around the floating card. A white strip
   must not appear in dark mode.
4. Expand the inspector with the preview button and with a swipe. Check the
   dimmed area around the card and the bottom browser area. Collapse it, close
   it, and reopen it. Confirm that no previous tint remains.
5. Change icons with the previous and next buttons. Scroll expanded details.
   Swipe down to collapse, then swipe down to dismiss. Check the close button.
6. Use a hardware keyboard if available. Check Tab, Shift+Tab, Escape, arrow-key
   navigation, and focus return to the inspected icon after dismissal.
7. Open search, enter a query, close search, and return to the library. Check
   keyboard dismissal and the safe area after the software keyboard closes.
8. Check widths of 320px, 393px, 768px, and 1280px. Check the docked inspector at
   desktop widths. No controls should overlap the header or the screen cutout.

Capture before and after screenshots on the same device, Safari version, theme,
page, scroll position, and inspector state. Include the Safari browser UI.
Do not label desktop screenshots as evidence of iOS browser tint behavior.

## Verification record

- Full tests: 84 passed, including the four focused browser-color tests.
- Focused browser-color tests: 4 passed.
- Typecheck and production build: passed.
- Real iOS Safari browser UI: pending owner verification.
- Desktop browser screenshots and gesture checks: blocked in the cloud test environment.
- The owner will test the branch locally on an iPhone over the same network.

The cloud test environment cannot start system Chromium because of socket
restrictions. The WebKit download is available, but required Linux libraries are
missing. The cloud browser cannot reach the build server's isolated network.
This repository publishes GitHub Pages only from `main`; its pull requests do
not have a preview deployment.
