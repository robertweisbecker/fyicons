# FYIcons

704 icons at 16px, with a searchable library, an inspector, SVG downloads, and seven interactive UI examples. Built with React, TypeScript, Tailwind CSS, and Base UI.

## Development

Use Node 24 (`nvm use` if available).

```sh
npm ci
npm run dev
```

```sh
npm run build
npm test
npm run preview
```

Tests cover source SVG and manifest integrity, generated React components, regeneration, instance-safe SVG definitions, and byte-exact full and selected ZIP exports. UI styling, layout, copy, and demo interactions are outside the test contract.

## Components and styling

Component styles live beside their JSX as Tailwind utilities. `cn` combines `clsx` with `tailwind-merge` so a caller's `className` can override defaults.

- `src/components/ui/`: reusable Base UI controls. Button, Checkbox, Toggle, and Switch expose typed CVA size/variant props; Select and Sheet expose composable parts. ToggleGroup provides roving keyboard focus, and Toast owns live announcements and dismissal.
- `src/components/IconButton.tsx` and `FilterSelect.tsx`: app composition using the shared controls.
- Import shared controls directly with `@/components/ui/...`; the `@/` alias resolves to `src/` in TypeScript and Vite.
- `src/components/Inspector.tsx`: drawer layout, controls, pixel grid, and bounds.
- `src/demos/`: one file per demo, including its layout and state styles.
- `src/styles.css`: Tailwind entry point, theme tokens, and base rules only.

Use `variant` and `size` for supported appearances; exported `buttonVariants`, `toggleVariants`, `checkboxVariants`, and `switchVariants` provide the same styles for composition. Native Base UI props, including refs, `disabled`, `defaultChecked` / `defaultPressed`, and controlled callbacks, pass through. Checkbox sizes adjust the hit area while keeping the checkmark at 16px; touch targets remain 44px.

```tsx
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Toggle } from '@/components/ui/toggle';
import { Switch } from '@/components/ui/switch';

<Button variant="outline" size="sm">Download</Button>
<Checkbox aria-label="Select icon" checked={selected} onCheckedChange={setSelected} />
<Toggle size="icon" aria-label="Bold" pressed={bold} onPressedChange={setBold}>
  <Icon name="text-bold" />
</Toggle>
<Switch aria-label="Show labels" checked={labels} onCheckedChange={setLabels} />
```

Switch supports `default` (36 × 20px) and `sm` (28 × 16px) sizes. Its thumb animates for 200ms with reduced-motion support; nested design settings use `sm`. Toggle backgrounds use translucent `currentColor`, and `ToggleIcon` pairs catalog variants with the primitive’s pressed state.

Custom demo buttons can use the explicit `variant="unstyled" size="unstyled"` escape hatch. Styles stay co-located; the shared primitives do not own catalog selection or demo state.

Use `npm run format` to format code and sort Tailwind utilities. Keep conditional class names complete so Tailwind can detect them.

The fixed 56px header links to the library and `/examples/`. Both routes have static HTML entry points for GitHub Pages reloads; old `#examples` links still work. Categories live in a sticky sidebar at `lg` (1024px), with a modal sheet on smaller screens. The inspector floats above the grid by default without changing its columns or scroll position. From `md` (768px), its Dock inspector toggle moves it into a sticky layout column; toggling again returns it to the overlay. Docking preserves the visible grid row. Below `md`, it uses a full-screen modal sheet. Both modes have independently scrolling content and footer navigation. Demo palettes use Tailwind color tokens; the design demo’s editable color-input value remains RGB hex.

The library slider previews icons at 16–64px in 4px steps. Demo icons render at 16px, except the music player's 24px play/pause icon. Selection controls are hover-enhanced on desktop and always visible on touch screens.

## Icons and exports

The editable source is [`icons/`](icons/): one SVG per icon, with names and categories in `icons/manifest.json`. Replace a file in place to edit its artwork. Keep its 16×16 viewBox, filename, and manifest identity, then run:

```sh
npm run generate:icons
```

This rebuilds `src/icons/`, `src/data/catalog.json`, and the compact browser catalog `src/data/catalog-runtime.json` from the current SVG bytes. The website, clipboard, individual downloads, and ZIP exports all use the regenerated catalog. Neither file optimization nor geometry changes are applied to source SVGs. `src/icons/` and both catalog JSON files are generated; edit the standalone SVGs instead.

`npm run dev` and `npm run build` generate automatically at startup. While the dev server is running, run `npm run generate:icons` after an SVG edit; Vite picks up the generated changes. `npm run check:icons` detects stale or obsolete generated components without changing files. `npm run test:icons` checks generation and React behavior. CI checks freshness before building.

### React components

```tsx
import { IconSun, IconArrowUpRight1 } from '@/icons';
// A direct import also works:
// import IconSun from '@/icons/IconSun';

<IconSun size={16} className="text-amber-500" title="Light mode" />
<IconArrowUpRight1 size={20} aria-label="Open link" />
```

Components default to 16px, inherit `currentColor`, and accept `size`, `color`, `className`, `style`, `width`, `height`, accessibility attributes, event handlers, and SVG refs. Decorative icons are hidden from assistive technology by default; use `title` or an accessible label for meaningful standalone icons. A `strokeWidth` prop cannot change shapes drawn as filled contours.

The barrel exports named components; the site uses a separate registry for dynamic lookup. Duplicate names now use stable numbers, such as `arrow-up-right-1` and `arrow-up-right-2`. Figma IDs remain in metadata, and old names remain aliases for the site's `Icon` lookup. To add an icon, add an SVG and a manifest entry with a unique name, ID, filename, and component name before generating.

See [the SVG optimization assessment](docs/svg-optimization-assessment.md) for the next step on selective stroke conversion and optimized outputs.

The sidebar follows the catalog's category order: Interface, Navigation, Design, Text, Code, Files, Communication, Media, Devices, People, and Objects. Interface includes clocks, calendars, settings, status, and theme controls. Design includes borders, shadows, layers, components, variables, textures, and drawing tools. Each icon's category is also included in its exported manifest.

To import a fresh catalog from the existing FYIcons export process:

```sh
npm run sync-icons -- /absolute/path/to/outputs/fyicons
```

This is an explicit full import: it replaces the editable SVG source files and metadata, preserving names for known Figma IDs, then regenerates the React components and catalog. Keep any manual artwork edits you want before importing. The importer checks supplied hashes and validates metadata and SVGs. Normal development and builds need no Figma credentials or external workspace.

Export selected downloads a ZIP containing only the selected SVGs and their manifest. Existing shortlists are retained as selections.

The seven examples use local simulated state. The mail, AI, player, and document examples do not connect to external services.

## GitHub Pages

In **Settings → Pages → Build and deployment**, select **GitHub Actions**. The workflow tests and publishes `dist/` from `main`. Pull requests are tested without publishing. Documentation-only changes do not rebuild the site; manual dispatch remains available. Build artifacts expire after one day.

Vite uses relative asset URLs, so the same build works at the project URL (`https://robertweisbecker.github.io/fyicons/`) and at a custom domain.

### icons.bob.fyi

1. Set **Settings → Pages → Custom domain** to `icons.bob.fyi`.
2. At the DNS provider for `bob.fyi`, add:

   | Type  | Name    | Target                       |
   | ----- | ------- | ---------------------------- |
   | CNAME | `icons` | `robertweisbecker.github.io` |

3. Once GitHub confirms DNS and issues the certificate, enable **Enforce HTTPS**.

The apex `bob.fyi` records do not need to change. With Actions-based publishing, the custom domain is stored in repository settings, not a `CNAME` file. See [GitHub's custom-domain instructions](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site).

## Deployment size

This is a static client application with no server functions, image processing, or runtime API requests. The current production output is approximately **2.97 MiB**, including the full icon catalog. Only `dist/` is deployed. ZIPs are generated in the browser on demand; source SVG folders, screenshots, tests, and dependencies are not copied into the deployment. The build fails above a 3 MiB output budget.

GitHub Pages does not consume Vercel deployment storage or bandwidth. An optional `vercel.json` makes the same source deployable as a Vite site, but connecting it to Vercel would consume Vercel storage and transfer for retained deployments. This repository does not create or configure a Vercel project.
