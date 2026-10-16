# FYIcons agent guidance

## Scope and documentation

- Keep [README.md](README.md) focused on people who use the icon library.
- Use [ASD-STE100 Simplified Technical English (STE)](https://www.asd-ste100.org/) for new or revised public text, including the README and the README included in downloaded ZIPs (`src/data/README.txt`). Use short sentences, active voice, direct instructions, and consistent technical terms. Check general vocabulary and meanings against the STE dictionary; treat API names, file paths, product names, and necessary software terms as technical terminology. Do not claim formal STE compliance from a sentence-length check alone.
- Document only installation methods and behavior that exist. This repository currently has a private website package; it does not yet define a publishable icon package or a shadcn registry.
- Put agent instructions, architecture notes, source-generation procedures, verification commands, and deployment operations in this file. Keep historical reports in `docs/` and `plans/` as reference material.
- Preserve unrelated local edits. Do not run broad formatting, generation, or deployment commands for a documentation-only change.
- Treat the current source as authoritative. Counts, sizes, UI labels, and validation results in old reports can be stale.

## Source and generation rules

- Edit icon artwork in `icons/*.svg` and metadata in `icons/manifest.json`.
- Do not hand-edit `src/icons/`, `src/data/catalog.json`, `src/data/catalog-runtime.json`, or `public/icon-categories.schema.json`. Update their source or generator, then regenerate.
- Keep Figma component IDs as icon identities and current Figma names as authoritative names. Preserve historical lookup aliases. Numeric duplicate suffixes can change with the inventory; aliases do not provide stable named React exports.
- Preserve SVG geometry, the 16 × 16 viewBox, source bytes, and instance-safe SVG references unless the task explicitly requires an artwork change.
- Keep category definitions and keyword rules in `public/icon-categories.json`.
- Full imports must validate and prepare all outputs before writing. Rejected input must leave source and generated files unchanged. Do not claim crash-atomic publication.

## Verification

Use the checks appropriate to the change:

| Change                               | Checks                                                                                                                                  |
| ------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------- |
| Documentation                        | Check Markdown formatting, relative links, code examples, and statements against current source.                                        |
| Downloaded ZIP README                | Also run `node --test tests/icon-archive.test.mjs`.                                                                                     |
| Icon sources, generation, or imports | Run `npm test`, `npm run test:icons`, `npm run check:icons`, `node_modules/.bin/tsc --noEmit --incremental false`, and `npm run build`. |
| Website behavior                     | Run the relevant tests, typecheck, and build. Verify affected widths, keyboard behavior, accessible names, and browser errors.          |

The build regenerates tracked artifacts. Check the diff before and after it. Use targeted Prettier checks for manually edited files; do not reformat generated TSX. Finish with `git diff --check`.

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
- `src/components/IconButton.tsx`, `PreviewSizeControl.tsx`, and `SelectedIconsDialog.tsx`: app composition using the shared controls.
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

The fixed 56px header links to the overview at `/`, the library at `/library/`, and `/examples/`. All three routes have static HTML entry points for GitHub Pages reloads; old `#library` and `#examples` links still work. The supplied multicolor atom is shared by the site logo and SVG favicon. The overview studies live in `src/home/` and reuse the shared Base UI controls; file navigation, type formatting, playback previews, and social reactions all use local state. Categories live in a sticky sidebar at `lg` (1024px), with a modal sheet on smaller screens. The inspector floats above the grid by default without changing its columns or scroll position. From `md` (768px), its Dock inspector toggle moves it into a sticky layout column; toggling again returns it to the overlay. Docking preserves the visible grid row. Below `md`, it uses a full-screen modal sheet. Both modes have independently scrolling content and footer navigation. Demo palettes use Tailwind color tokens; the design demo’s editable color-input value remains RGB hex.

The library size control previews icons at 16–64px in 4px steps. Homepage examples preserve their Figma copy and use Tailwind typography, spacing, radii, and color tokens. Most icons render at 16px, with larger icons used for thumbnails and the carousel. Interactions are limited to toggles, icon swaps, and contained disclosures. Selection controls and subset downloads are available from 768px; smaller screens retain browsing and previews without selection checkboxes. Saved desktop selections are preserved.

## Icons and exports

The editable source is [`icons/`](icons/): one SVG per icon, with artwork metadata and names in `icons/manifest.json`. Category keyword rules live separately in `public/icon-categories.json`. Replace a file in place to edit its artwork. Keep its 16×16 viewBox, filename, and manifest identity, then run:

```sh
npm run generate:icons
```

This rebuilds `src/icons/`, `src/data/catalog.json`, and the compact browser catalog `src/data/catalog-runtime.json` from the current SVG bytes. The website, clipboard, individual downloads, and ZIP exports all use the regenerated catalog. The browser catalog compresses both the SVG payload and metadata rows, storing metadata field names once; it reconstructs the exact original SVG bytes and full metadata at runtime. Neither file optimization nor geometry changes are applied to source SVGs. `src/icons/` and both catalog JSON files are generated; edit the standalone SVGs instead.

`npm run dev` and `npm run build` generate automatically at startup. While the dev server is running, run `npm run generate:icons` after an SVG edit; Vite picks up the generated changes. Run `npm run check:icons` independently to validate the source inventory and category rules and detect stale or obsolete generated components, catalogs, and category schema without changing files. `npm run test:icons` checks generation and React behavior. CI runs `npm ci`, then `npm run build` to regenerate and build, followed by `npm test`.

### React components

```tsx
import { IconSun, IconArrowUpRight } from '@/icons';
// A direct import also works:
// import IconSun from '@/icons/IconSun';

<IconSun size={16} className="text-amber-500" title="Light mode" />
<IconArrowUpRight size={20} aria-label="Open link" />
```

Components default to 16px, inherit `currentColor`, and accept `size`, `color`, `className`, `style`, `width`, `height`, accessibility attributes, event handlers, and SVG refs. Decorative icons are hidden from assistive technology by default; use `title` or an accessible label for meaningful standalone icons. A `strokeWidth` prop cannot change shapes drawn as filled contours.

Generated components share the SVG sizing, accessibility, and ref handling in `src/icons/base.tsx` while retaining instance-safe SVG definition IDs. The barrel exports named components; the site uses a separate registry for dynamic lookup. Names follow the Figma components, with filled variants named from their component set. Duplicate names receive numeric suffixes to disambiguate the current inventory; suffixes may change when the inventory changes. Figma IDs remain in metadata, and previous names remain lookup aliases for compatibility. To add an icon, add an SVG and a manifest entry with a unique name, ID, filename, and component name, then generate. Category membership is calculated automatically from its name.

See [the SVG optimization assessment](docs/svg-optimization-assessment.md) for the next step on selective stroke conversion and optimized outputs.

### Editing categories

Edit [`public/icon-categories.json`](public/icon-categories.json). Each category has an `id`, a display `name`, an `icon` using a catalog icon name, and a `keywords` array. Their order controls both the sidebar and mobile menu. There is no per-icon assignment map:

```json
{
  "categories": [
    {
      "id": "communication",
      "name": "Communication",
      "icon": "chat",
      "keywords": ["chat", "chats", "envelope", "send"]
    },
    {
      "id": "files",
      "name": "Files",
      "icon": "folder",
      "keywords": ["file", "files", "folder", "book"]
    }
  ]
}
```

An icon belongs to every category where **any** keyword matches complete, consecutive name segments, ignoring case. `file` matches `file-add` and `file-filled`, but not `profile` or `files`; list singular and plural forms separately. `arrow-up` matches `circle-arrow-up-fill`, but not `arrow-right-up`. Hyphens, underscores, and spaces separate segments. Keywords are plain text, with no regex or wildcard syntax. An empty `keywords` array adds no keyword matches.

For narrow exceptions, add optional `exactNames` in the same category definition. Commerce uses `"exactNames": ["box", "box-shipping"]` alongside its keywords: it includes Box and BoxShipping without matching BoundingBox, TextBox, or BoxStorage. Exact names use the same case/separator normalization, but match the entire name and do not automatically include variants. A match from either list adds the category.

Choose keywords for an icon's meaning, not its surrounding shape or an incidental modifier. For example, `browser` includes browser variants in Devices, while `circle` would also collect playback controls, users, and alerts. Use exact names for standalone shapes and symbols, and include their filled variants explicitly. Slashed variants should remain with their unslashed counterparts. The category tests cover these boundaries and flag uncategorized additions to the current catalog.

New icons and variants pick up matching categories automatically. Renaming an icon can change its memberships; aliases and Figma IDs do not participate in keyword matching. Rename a category or change its sidebar icon in its one definition. Each icon appears once in All, while search, the inspector, and category filters use every matching category. Category counts may add up to more than the total icon count. `all` and `uncategorized` are reserved IDs.

The JSON's `$schema` documents the rules and provides sidebar icon and exact-name completions and example keyword suggestions in supporting JSON editors. New keywords are allowed before matching artwork exists. There are no category IDs to keep synchronized elsewhere. The dev and preview servers refresh the generated `public/icon-categories.schema.json` when the icon inventory changes; category edits do not require schema regeneration. Without a running server, use `npm run generate:category-schema` to refresh inventory suggestions.

Save and refresh the page. **No generation, build, or server restart is needed** with `npm run dev` or `npm run preview`.

The browser fetches this JSON without caching on page load. Filters, counts, search, inspector labels, and downloaded manifests all use the computed memberships. Icons with no matching keywords appear under Uncategorized, which is shown only when needed. If the JSON is invalid or unavailable, all icons remain available and the library shows a notice. An unknown sidebar icon falls back to the tag; source checks report the invalid icon name. `npm run check:icons` validates rules and sidebar references without requiring generated artwork files to change; unmatched icons are allowed.

A production build minifies this file to `dist/icon-categories.json`, keeping its data unchanged and the editable source readable. On a static host, publish the updated JSON at that same URL; compiled JavaScript does not need rebuilding. The existing GitHub Pages workflow still performs a full build when deploying repository changes.

Downloaded manifests include category definitions, keyword rules, and each icon's computed category ID array. See [the October 8 sync record](docs/icon-sync-2026-10-08.md) for the source scope, name changes, additions, removals, and known source naming collisions.

## Importing icons

To import a fresh catalog from the existing FYIcons export process:

```sh
npm run sync-icons -- /absolute/path/to/outputs/fyicons
```

This is an explicit full import: it replaces the editable SVG source files and metadata, using the current Figma names for known IDs, then regenerates the React components and catalog. Keep any manual artwork edits you want before importing. The importer checks supplied hashes and validates metadata and SVGs. Local category definitions and keywords remain authoritative; incoming category metadata is ignored and is no longer required. Sidebar icon references follow existing Figma IDs through renames and fall back to grid if their artwork is removed. Memberships are recalculated from the resulting icon names, with no assignment map to synchronize. Previous names remain lookup aliases; pass `--preserve-names` only when deliberately retaining the earlier naming. Normal development and builds need no Figma credentials or external workspace.

Before changing any file, sync prepares the complete inventory, React components, both catalogs, and category schema. It validates metadata types, IDs, aliases, dimensions, the actual SVG root viewBox, supplied hashes, category references, case-insensitive filename/component collisions, and source/output path containment (including symlinks). A validation failure leaves every source and generated file unchanged. Valid case-only renames publish the exact new filename casing. Publication uses ordinary filesystem writes; a crash or filesystem error during publication can leave partial output, so this is not a crash-atomic import.

Legacy manifests may omit `source.fileKey` and `originalName`: the file key defaults to an empty string (unknown Figma provenance), and the original name defaults to the imported icon name. Supplied values must be strings; `originalName` must be nonempty. Missing aliases default to an empty array. Supplied source URLs must be nonempty strings and remain intact in both catalogs; missing URLs use the standard Figma URL derived from the file key and ID. `npm run check:icons` also checks the generated category schema against the inventory.

The Selected dialog downloads a ZIP containing only the selected SVGs, their manifest, and a README. The header Download action downloads the full collection. Existing saved selections are retained.

The Examples page uses a responsive bento grid of standalone navigation, composer, editor, settings, and feedback demos. The homepage combines Design, Files, Code, Agents, Social, and Music into app windows. Social fills its own Bird App window; Agents uses the browser chrome with a sample conversation and the goal composer. Interactions use local simulated state and do not connect to external services. The editor shows static sample text; its toolbar buttons only toggle their selected states.

## Fonts

The site self-hosts Inter Variable 4.1 (upright and italic, weights 100–900) and Paper Mono 1.000 (weights 100–800) as WOFF2 files in `src/assets/fonts/`. Their SIL Open Font License notices are included in `public/licenses/` and the deployed site.

`src/styles.css` sets Tailwind's `--font-sans` and `--font-mono` variables and their corresponding `--font-feature-settings` companion tokens. Use `font-sans` or `font-mono` so each family receives its own features; code blocks inherit the mono settings through Tailwind's base styles.

- [Inter](https://rsms.me/inter/#features): `cv11` for single-storey a, `dlig` for discretionary ligatures, `ss01` for open/alternate digits, and `ss03` for round quotes and commas. Standard ligatures and contextual alternates remain enabled.
- [Paper Mono](https://paper.design/mono): `cv01` for single-storey a, `ss02` for duospace characters, and `ss03` for narrow spaces.

The main Inter face is preloaded from each HTML entry. Vite fingerprints font assets and emits relative URLs for both root and project-subpath deployments.

## GitHub Pages

In **Settings → Pages → Build and deployment**, select **GitHub Actions**. The workflow tests and publishes `dist/` from `main`. Pull requests are tested without publishing. Root README and internal documentation changes do not rebuild the site. Changes to `src/data/README.txt` do rebuild it because that file is included in downloaded ZIPs. Manual dispatch remains available. Build artifacts expire after one day.

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

This is a static client application with no server functions, image processing, or external API requests. Categories load from a standalone JSON file on the same host. Use the build output to check the current deployment size. Only `dist/` is deployed. ZIPs are generated in the browser on demand; source SVG folders, screenshots, tests, and dependencies are not copied into the deployment. The build fails above a 4 MiB output budget.

GitHub Pages does not consume Vercel deployment storage or bandwidth. An optional `vercel.json` makes the same source deployable as a Vite site, but connecting it to Vercel would consume Vercel storage and transfer for retained deployments. This repository does not create or configure a Vercel project.

## Historical records

The [plan index](plans/README.md) and [sync records](docs/) contain historical implementation and verification evidence. Recheck the current source before using recorded counts, paths, commands, or results. Task-specific instructions in completed plans are historical; they do not authorize new work.
