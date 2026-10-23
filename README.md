# FYIcons

FYIcons is a collection of SVG icons. Each icon has a 16 × 16 px canvas.
Use the icons in websites, applications, and design files.

[Open the icon library](https://icons.bob.fyi/library/) · [See examples](https://icons.bob.fyi/examples/)

## Get SVG icons

1. Open the [icon library](https://icons.bob.fyi/library/).
2. Search for an icon, or select a category.
3. Select an icon to open its details.
4. Use **Copy SVG** to copy the SVG code.

Use **Download** in the site header to download all icons as a ZIP file.
To download a group of icons on a desktop screen:

1. Select the checkboxes for the icons you need.
2. Open **Selected**.
3. Select **Download**.

The ZIP file contains SVG files, a README, a LICENSE, and a `manifest.json` file.
The manifest contains icon names, source links, category data, and SHA-256 checksums.
The ZIP file does not contain React components.

You can also get the SVG files from the [icons folder](icons/).

## Use an SVG file

Put an SVG file in your project. Set the image path to that file:

```html
<img src="./icons/sun-16.svg" width="16" height="16" alt="Light mode" />
```

If an image adds no information, set `alt=""`.
You can also put the SVG code directly in an HTML document.

The size control in the library changes the preview size.
It does not change the SVG files.

## Use the npm package

Install the package:

```sh
npm install fyicons
```

Use React 18.2 or React 19. Import a component with:

```tsx
import { IconSun } from 'fyicons';
```

For a direct import, use `import IconSun from 'fyicons/icons/IconSun'`.
See the [package instructions](packages/fyicons/README.md) for the API and Next.js instructions.
Read the [changelog](packages/fyicons/CHANGELOG.md) before you update the package.
Icon names and React exports can change before version 1.0.

## Use the shadcn registry

Use a React project with TypeScript and a shadcn `components.json` file.
Use the release tag to install an icon:

```sh
npx shadcn@latest add 'robertweisbecker/fyicons/sun#fyicons@0.1.0'
```

You can replace the release tag with a full commit SHA.
The revision must contain `registry.json` and its source files.
Replace `sun` with another icon name to install that icon.
The command adds the icon, shared source files, and MIT license to your components folder under `fyicons/`.
Import `IconSun.tsx` from that folder.
The registry does not require the npm package.

If you have an optional JSON artifact, you can install it with
`npx shadcn@latest add /path/to/registry/sun.json`.

## Use React source files

Use a React project with TypeScript and TSX support.
Copy the [React source folder](packages/fyicons/src/) into your project as `icons/`.
Keep the icon files, `base.tsx`, `types.ts`, and `index.ts` in the same folder.

Use a relative import from your component file:

```tsx
import { IconSun, IconArrowUpRight } from './icons';

export function Example() {
  return (
    <>
      <IconSun size={16} title="Light mode" />
      <IconArrowUpRight size={20} aria-label="Open link" />
    </>
  );
}
```

Change the import path if your component is in a different folder.
To import one icon directly, use `import IconSun from './icons/IconSun'`.

### Set size and color

React icons use a size of 16 px unless you supply a different value.
Each icon uses `currentColor`. Set `color` to change the icon color:

```tsx
<IconSun size={24} color="#2563eb" />
```

| Prop                            | Function                                              |
| ------------------------------- | ----------------------------------------------------- |
| `size`                          | Sets width and height. Accepts a number or a string.  |
| `width`, `height`               | Set width or height instead of the value from `size`. |
| `color`                         | Sets the icon color.                                  |
| `className`, `style`            | Apply CSS styles.                                     |
| `title`                         | Adds an SVG title and an accessible name.             |
| `aria-label`, `aria-labelledby` | Set an accessible name.                               |
| `ref`                           | Gives access to the SVG element.                      |

The components also accept standard React SVG props and event handlers.
Many icons use filled paths. The `strokeWidth` prop does not change the thickness of these paths.

### Set accessible names

React icons have `aria-hidden="true"` unless you supply a title or an accessible name.
For an icon that adds information, supply `title`, `aria-label`, or `aria-labelledby`.

For a button that contains only an icon, give the button an accessible name:

```tsx
<button type="button" aria-label="Light mode">
  <IconSun />
</button>
```

## Icon names

Some icons have the same source name. A number after the name identifies each icon.
These numbers can change when the collection changes.
Check the names when you update your copy of the icons.

The manifest keeps previous names as aliases for lookup in the library.
These aliases do not preserve previous React export names.

## License

FYIcons uses the [MIT license](LICENSE). Keep the license with copies of the icons.

To change the library, see [Contributing](CONTRIBUTING.md).
