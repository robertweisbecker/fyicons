# FYIcons

FYIcons is a collection of SVG icons for React. Each icon has a 16 × 16 px canvas.

This package is in initial development. Icon names and React exports can change.
Read the changelog before you update the package.

## Install

Use React 18.2 or React 19.

```sh
npm install fyicons
```

## Use an icon

```tsx
import { IconSun } from 'fyicons';

export function LightButton() {
  return (
    <button type="button" aria-label="Light mode">
      <IconSun size={16} />
    </button>
  );
}
```

For a direct import, use `import IconSun from 'fyicons/icons/IconSun'`.
The package uses ESM. Your bundler can remove unused icons.
Use the icons in Server Components or Client Components.
Static icons do not need `use client`.
For event handlers or refs, import the icon in a Client Component.

## Set size, color, and accessible names

Icons use `currentColor`. The default size is 16 px.

```tsx
<IconSun size={24} color="#2563eb" title="Light mode" />
```

| Prop                            | Function                                             |
| ------------------------------- | ---------------------------------------------------- |
| `size`                          | Sets width and height. Accepts a number or a string. |
| `width`, `height`               | Set width or height instead of `size`.               |
| `color`                         | Sets the icon color.                                 |
| `className`, `style`            | Apply CSS styles.                                    |
| `title`                         | Adds an SVG title and an accessible name.            |
| `aria-label`, `aria-labelledby` | Set an accessible name.                              |
| `ref`                           | Gives access to the SVG element.                     |

The components accept standard React SVG props and event handlers.
Icons have `aria-hidden="true"` unless you supply a title or an accessible name.
Give each button an accessible name if it contains only an icon.
Many icons use filled paths. `strokeWidth` does not change these paths.

## Get SVG files

The `svg/` folder contains the source SVG files.
The `manifest.json` file contains names, source IDs, aliases, and source links.
Aliases do not preserve previous React export names.

[Open the library](https://icons.bob.fyi/library/) to find and download icons.

## License

FYIcons uses the MIT license. Keep the supplied LICENSE file with copies of the icons.
