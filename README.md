# FYIcons

FYIcons is a collection of SVG icons for websites, applications, and design files. Every icon uses a 16 × 16 px canvas, making the library a good fit for compact controls, menus, and toolbars.

Use an SVG wherever you need it, import a typed React component, or add editable source files through shadcn. Icons use `currentColor`, so inline SVGs and React components can follow the color of the surrounding text.

[Browse the icons](https://icons.bob.fyi/library/) · [See them in use](https://icons.bob.fyi/examples/) · [Read the changelog](packages/fyicons/CHANGELOG.md)

## Choose how to use the icons

| Method                                    | Best for                                                                      |
| ----------------------------------------- | ----------------------------------------------------------------------------- |
| [npm package](#use-with-react)            | React projects that want package updates, TypeScript types, and tree shaking. |
| [shadcn registry](#add-icons-with-shadcn) | Projects that want selected icons as editable source files.                   |
| [SVG downloads](#download-svg-icons)      | Other frameworks, plain HTML, and design tools.                               |

## Use with React

Install the package in a project with React 18.2+ or React 19:

```sh
npm install fyicons
```

Import an icon by name and use it like any other React component:

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

Icons render at 16 px by default. The package uses ESM and supports tree shaking, so a compatible bundler can remove unused icons. You can also import an icon directly:

```tsx
import IconSun from 'fyicons/icons/IconSun';
```

### Size and color

Use `size` to set both dimensions, or set `width` and `height` separately. The original 16 × 16 viewBox stays the same when the icon scales.

```tsx
<IconSun size={24} color="#2563eb" />
```

Leave `color` unset to inherit the surrounding text color. You can style icons with CSS classes, inline styles, or your existing theme styles.

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

Components also accept standard React SVG props and event handlers. Many icons use filled paths, so `strokeWidth` does not change their visual weight.

Every icon has `fy-icon` and `fy-{icon-name}` classes. The icon name matches the catalog, including variant suffixes. Your `className` adds to these defaults:

```tsx
<IconSun className="toolbar-icon" />
// Renders class="fy-icon fy-sun toolbar-icon"
```

### Accessibility

Icons without a non-empty `aria-label` are decorative and render with `aria-hidden="true"`. Add `aria-label` when an icon communicates information on its own. The component passes the label to the SVG and sets `role="img"`:

```tsx
<IconSun aria-label="Light mode" />
```

A `title` or `aria-labelledby` alone does not change the decorative default. Use `aria-label` for automatic accessible naming. Explicit `role` and `aria-hidden` props override the defaults; for an external label, set `aria-labelledby`, `role="img"`, and `aria-hidden={false}` together. Empty or whitespace-only labels remain decorative.

For an icon-only button, name the button instead, as in the example above. The icon can remain decorative because the button already describes the action.

### Next.js and Server Components

Icons work in both Server Components and Client Components. Static icons do not need a `use client` directive. If you need an event handler or ref, use the icon inside your own Client Component.

The [package README](packages/fyicons/README.md) has a focused reference for React projects.

## Add icons with shadcn

The GitHub registry lets you copy only the icons you need into your project. This is useful when you want to edit the component source or keep it alongside your other UI components.

Start with a React and TypeScript project that has a shadcn `components.json` file, then run:

```sh
npx shadcn@latest add 'robertweisbecker/fyicons/sun#fyicons@0.1.0'
```

Replace `sun` with the icon name from the library. The command adds the icon, shared helpers, and MIT license under `fyicons/` in your configured components directory. It does not require the `fyicons` npm package.

With the components alias set to `@/components`, the import looks like this:

```tsx
import IconSun from '@/components/fyicons/IconSun';
```

Keep the release tag in the command so the icon and its helpers come from the same version. You can use a full commit SHA instead when you need a specific revision.

## Download SVG icons

Browse the [icon library](https://icons.bob.fyi/library/) to search by name or explore categories. Select an icon to open its details, then use **Copy SVG** to copy its markup.

Use **Download** in the homepage's **Installation** section to get the complete collection as a ZIP. On a desktop screen, you can also select icon checkboxes, open **Selected**, and choose **Download** to get a smaller collection.

Each ZIP includes the SVG files, a README, the MIT license, and a `manifest.json` file with names, source links, category data, and SHA-256 checksums. It does not include React components. The site's size control changes the preview only; downloaded SVG files keep their original canvas.

The source SVGs are also available in the [icons folder](icons/).

### Use an SVG in HTML

Copy a file into your project and reference it as an image:

```html
<img src="./icons/sun-16.svg" width="16" height="16" alt="Light mode" />
```

Use `alt=""` for a decorative image. To make the icon inherit your page's text color, put the SVG markup directly in the HTML. An SVG loaded through an `<img>` element does not inherit the page's `color` value.

## Copy React source manually

If you prefer a manual setup, copy the [React source folder](packages/fyicons/src/) into your project. Keep the icon files, `base.tsx`, `types.ts`, and `index.ts` together, and include the [MIT license](LICENSE). Your project needs TypeScript and TSX support.

For a source folder named `icons/` beside your component:

```tsx
import { IconSun, IconArrowUpRight } from './icons';
```

The components have the same props as the npm package. To copy selected icons with their required helpers, use the shadcn registry instead of assembling the files manually.

## Updates and icon names

FYIcons is in initial development. Icon names and React exports can change before version 1.0, so check the [changelog](packages/fyicons/CHANGELOG.md) before updating.

Some source icons share a name. Numeric suffixes distinguish them, but those suffixes can change as the collection changes. The manifest keeps previous names as lookup aliases for the website; these aliases do not preserve old React export names.

## License and contributions

FYIcons is available under the [MIT license](LICENSE). Keep the license with copies of the icons.

To report a problem or suggest an improvement, [open an issue](https://github.com/robertweisbecker/fyicons/issues). See [Contributing](CONTRIBUTING.md) for local setup and the checks to run before submitting changes.
