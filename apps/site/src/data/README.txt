# FYIcons

SVG icons from https://icons.bob.fyi/.
Each icon has a 16 × 16 px canvas.

## Files

The icons/ folder contains the SVG files.
The manifest.json file contains icon names, category data, and SHA-256 checksums of the exported files.
It also contains Figma component IDs and previous names.
Each icon variant has a separate SVG file.
The ZIP file does not contain React components.
The LICENSE file contains the MIT license. Keep this file with copies of the icons.

## Use an icon

1. Copy an SVG file into your project.
2. Add the file as an image, or put its SVG code directly in an HTML document.
3. Give the image an accessible name if it adds information.

For an HTML image that adds no information, set alt="".
For instructions and React source files, see https://github.com/robertweisbecker/fyicons#readme.

## Style an icon

SVG exports include fy-icon and fy-{icon-name} classes, such as fy-icon fy-sun.
These classes are styling hooks and do not apply styles on their own.
Inline SVGs use currentColor and inherit the surrounding text color.
Use CSS color to set the color, and width and height to change the size.
An SVG loaded as an image does not inherit the page's text color or expose its classes to the page's CSS.
See https://icons.bob.fyi/docs/styling/ for examples.

## Get more icons

Open https://icons.bob.fyi/icons/.
Select an icon, then use Copy SVG to copy its SVG code or Download to save its SVG file.
Right-click an icon in the grid, or long-press it on mobile, to open its context menu.
The menu shows the icon's name and offers Copy name, Copy SVG, and Download.
Use Download in the homepage's Quick start section to download all icons.
On a desktop screen, select icon checkboxes, open Saved, then select Download all.
Each saved row also has an individual download button.
The preview size does not change the SVG files.
