# Safari browser colors

The site uses an opaque header and a matching page background. Header controls, sticky panels, and the inspector respect the screen safe areas. Below 768 px, a fixed bottom sample supplies the page color independently of the floating inspector. It does not receive pointer input.

The selected theme also updates the `theme-color` metadata for browsers that use it.

## Check the behavior

Run `npm run test:site` and `npm run build`. Check the home, library, and examples pages in light and dark themes at narrow and wide widths. Check header controls, search, and the inspector with a keyboard.

Use an actual iPhone to check Safari browser colors. Desktop screenshots and mobile viewport emulation cannot verify the browser UI. In portrait and landscape, scroll to expand and collapse the toolbar. Open, expand, collapse, and dismiss the inspector. Check that the top and bottom browser areas match the page, including after a theme change or keyboard dismissal.
