# FYIcons

561 native 16px icons from the Figma “Ready for export” section (`404:440`), with updates from “Updated 9/26” (`529:7829`). Only Figma components are included. Updates are matched by node ID; the rest of the snapshot is retained. The 24px component is excluded. Nested artwork is included within its parent export; frames and loose vectors are excluded.

Open `index.html` for the library and seven UI examples. Click an icon to open the right-side inspector, then copy or download its SVG. Previous/next buttons and arrow keys move through the current filtered results. Escape closes the inspector. On desktop, the library remains usable while the inspector is open.

SVGs share one `icons/` folder. 559 are byte-for-byte Figma MCP exports. `sun` uses the exact SVG supplied by the user on 2026-09-26. `dir-down` has its construction guides removed; the arrow path, fill, and opacity are unchanged. Figma's exporter may express painted strokes as filled paths. No other geometry conversion is applied.

## Names and variants

11 normalized name groups contain duplicates (26 components). Every member gets a stable `--node-id` suffix, followed by its native canvas size. Example: `battery-charging--101-4288-16.svg`. Nothing is merged, including visually identical artwork. The manifest retains the exact original name, node ID, source link, dimensions, and SHA-256 checksum for every component.

## Size and source notes

All included components have 16×16 canvases. `plus-24/outline` (`46:647`) has been removed from the catalog, SVG folder, and packages. Every app demo uses native 16×16 source components, with identity scale and 16×16 rendered bounds.

The manifest records these changes. The website is a local snapshot and does not modify the Figma document.

## Browser display

The gallery defaults to 16px display; 2× and 4× are inspection magnifications. The detail inspector shows an 8× preview with a grid aligned to the SVG canvas and an outline of its 16×16 bounds. The eye control toggles both overlays. Near-black paint becomes `currentColor` in the browser only. White clipping geometry and original opacity are preserved. Inline SVG IDs are unique per rendered instance. Copy and download return the packaged SVG, including the guide removal for `dir-down`.

The shortlist is stored locally in this browser. “Export shortlist” downloads a JSON selection with stable Figma IDs. It does not remove components or alter the source. Seven interface examples demonstrate messaging/task states, editable text, simulated playback, and live design properties. No data is sent to a server. Workbench, Post, and Preferences are full-width app studies with native 16px icons, system typography, and interactive controls. Screenshots in `screenshots/` are captured at 1x device scale without resizing.

`manifest.json` lists every source mapping and checksum. `fyicons.zip` contains all 561 SVGs, the manifest, and this README. `index.html`, `catalog.js`, `demo.js`, `demo.css`, `inspector.css`, `app-studies.js`, and `app-studies.css` make the offline demo.
