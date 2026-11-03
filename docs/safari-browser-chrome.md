# Safari browser colors

The site uses an opaque header and a matching page background. Header controls, sticky panels, and the inspector respect the screen safe areas.

Below 768 px, a fixed bottom strip supplies the page color for Safari's toolbar tint. The strip is 12 px tall and sits 7 px below the viewport, leaving 5 px visible. A 48 px fade above the strip softens the transition from scrolling content. Both use the canvas color, ignore pointer input, and stay below dialog and drawer backdrops. Keep the strip outside transformed containers so it remains attached to the viewport. This follows the [Safari edge-color technique](https://joshpuckett.me/seamless-mobile-safari).

The selected theme also updates the `theme-color` metadata for browsers that use it.

## Check the behavior

Run `npm run test:site` and `npm run build`. Check the home, icons, and examples pages in light and dark themes at narrow and wide widths. Check header controls, search, and the inspector with a keyboard.

Use an actual iPhone to check Safari browser colors. Desktop screenshots and mobile viewport emulation cannot verify the browser UI. In portrait and landscape, scroll to expand and collapse the toolbar. Check that content fades into the bottom edge without a hard band and that the toolbar tint matches the page in both themes. Open, expand, collapse, and dismiss the inspector. Check again after a theme change or keyboard dismissal.
