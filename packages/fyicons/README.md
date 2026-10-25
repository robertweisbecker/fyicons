# FYIcons

FYIcons brings a collection of 16 × 16 SVG icons to React, with TypeScript types, accessible naming, and colors that follow your theme. Use them in compact controls, menus, toolbars, or anywhere your interface needs an icon.

[Browse the library](https://icons.bob.fyi/library/) · [See examples](https://icons.bob.fyi/examples/) · [Changelog](https://github.com/robertweisbecker/fyicons/blob/main/packages/fyicons/CHANGELOG.md)

## Install

The package supports React 18.2+ and React 19.

```sh
npm install fyicons
```

## Your first icon

Import an icon by name and use it as a React component. Icons render at 16 px by default and inherit the surrounding text color.

```tsx
import { IconSun } from 'fyicons';

export function LightButton() {
  return (
    <button type="button" aria-label="Light mode">
      <IconSun />
    </button>
  );
}
```

The package uses ESM and supports tree shaking, so a compatible bundler can remove unused icons. Direct imports are also available:

```tsx
import IconSun from 'fyicons/icons/IconSun';
```

## Size and color

Set `size` to change both dimensions. All icons use `currentColor`; leave `color` unset to follow your text color, or supply a value for a specific icon.

```tsx
<IconSun size={24} color="#2563eb" />
```

| Prop              | What it does                                                           |
| ----------------- | ---------------------------------------------------------------------- |
| `size`            | Sets width and height. Accepts a number or a string; defaults to `16`. |
| `width`, `height` | Override the corresponding dimension from `size`.                      |
| `color`           | Sets the icon color. Otherwise, the icon inherits the text color.      |
| `className`       | Adds your classes after the default icon classes.                      |
| `style`           | Applies inline CSS styles.                                             |
| `title`           | Adds an SVG title.                                                     |
| `aria-label`      | Names the icon and sets `role="img"` by default.                       |
| `aria-labelledby` | Passes through an external label reference.                            |
| `ref`             | Gives access to the SVG element.                                       |

Components accept standard React SVG props and event handlers. Many icons use filled paths, so `strokeWidth` does not change their visual weight.

Every icon has `fy-icon` and `fy-{icon-name}` classes. The icon name matches the catalog, including variant suffixes. Your `className` adds to these defaults:

```tsx
<IconSun className="toolbar-icon" />
// Renders class="fy-icon fy-sun toolbar-icon"
```

## Accessibility

Icons without a non-empty `aria-label` are decorative and render with `aria-hidden="true"`. Add `aria-label` when an icon conveys information on its own. The component passes the label to the SVG and sets `role="img"`:

```tsx
<IconSun aria-label="Light mode" />
```

A `title` or `aria-labelledby` alone does not change the decorative default. Use `aria-label` for automatic accessible naming. Explicit `role` and `aria-hidden` props override the defaults; for an external label, set `aria-labelledby`, `role="img"`, and `aria-hidden={false}` together. Empty or whitespace-only labels remain decorative.

For an icon-only button, name the button and leave the icon decorative, as in the first example. This gives the control a clear name without repeating it for the icon.

## Next.js and Server Components

Use icons in either Server Components or Client Components. Static icons do not need a `use client` directive. For event handlers or refs, place the icon inside your own Client Component.

## SVG files and editable source

The package includes source SVG files in `svg/` and a `manifest.json` file with names, source IDs, aliases, and source links. You can also [browse and download SVGs](https://icons.bob.fyi/library/) without installing the package.

If you want editable React files in your project, use the [shadcn registry](https://github.com/robertweisbecker/fyicons#add-icons-with-shadcn). It copies selected icons and their shared helpers into your components directory.

## Updates

FYIcons is in initial development. Names and React exports can change before version 1.0; read the changelog before upgrading. Historical names in the manifest are lookup aliases and do not preserve old React exports.

## License

FYIcons uses the MIT license. Keep the supplied LICENSE file with copies of the icons.
