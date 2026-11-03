# Safari browser colors

The site uses an opaque header and a matching page background. Header controls, sticky panels, and the inspector respect the screen safe areas.

The bottom edge uses Safari's native rendering. The root and body share the theme's canvas color. Scrolling content can remain visible behind Safari's translucent controls; the site does not force this area to a solid color.

Do not add fixed color-sampling strips or fades over the bottom of the page. They end at the layout viewport, while Safari can show page content below that boundary. The result is a visible cut through content, including buttons. A smaller offset or a fade above the strip does not remove its lower edge. Safari's [fixed-edge color extension](https://bugs.webkit.org/show_bug.cgi?id=301756#c2) is browser behavior, not a reliable API for controlling toolbar colors.

The selected theme also updates the `theme-color` metadata for browsers that use it.

## Check the behavior

Run `npm run test:site` and `npm run build`. Check the home, icons, and examples pages in light and dark themes at narrow and wide widths. Check header controls, search, and the inspector with a keyboard.

Use an actual iPhone to check Safari browser colors. Desktop screenshots and mobile viewport emulation cannot verify the browser UI. In portrait and landscape, scroll to expand and collapse the toolbar. Move a contrasting button or card across the bottom edge and check for cuts or bands in both themes. Open, expand, collapse, and dismiss the inspector. Check again after a theme change or keyboard dismissal.
