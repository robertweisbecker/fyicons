# FYIcons

561 icons at 16px, with a searchable library, an inspector, SVG downloads, and seven interactive UI examples. Built with React, TypeScript, Tailwind CSS, and Base UI.

## Development

Use Node 24 (`nvm use` if available).

```sh
npm ci
npm run dev
```

```sh
npm run build
npx playwright install chromium
npm test
npm run preview
```

The browser tests exercise filtering, keyboard and focus behavior, the mobile inspector, grid alignment, demo interactions, and native 16px icon rendering. Every SVG in the downloaded ZIP is checked against its source SHA-256.

## Components and styling

Component styles live beside their JSX as Tailwind utilities. `cn` combines `clsx` with `tailwind-merge` so a caller's `className` can override defaults.

- `src/components/ui/`: Base UI buttons, icon toggles, selects, and switches.
- `src/components/Inspector.tsx`: drawer layout, controls, pixel grid, and bounds.
- `src/demos/`: one file per demo, including its layout and state styles.
- `src/styles.css`: Tailwind entry point, theme tokens, and base rules only.

Use `npm run format` to format code and sort Tailwind utilities. Keep conditional class names complete so Tailwind can detect them.

The fixed 56px header links to the library and `/examples/`. Both routes have static HTML entry points for GitHub Pages reloads; old `#examples` links still work. The library slider previews icons at 16–64px in 4px steps, while the demos keep their native 16px size. Selection controls are hover-enhanced on desktop and always visible on touch screens.

## Icons and exports

`src/data/catalog.json` contains the current Figma component exports, including the updated sun. Duplicate names retain unique filenames and Figma IDs. Copying or downloading exports the original SVG bytes. The UI adapts ink to the current theme without changing the source exports. Selections and preferences stay in the browser.

To import a fresh catalog from the existing FYIcons export process:

```sh
npm run sync-icons -- /absolute/path/to/outputs/fyicons
```

The importer validates 16px canvases, unique names and IDs, and SVG hashes before replacing the catalog. No Figma credentials or external workspace are required to build this repository.

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

This is a static client application with no server functions, image processing, or runtime API requests. The current production output is approximately **1.49 MiB**, including the full icon catalog. Only `dist/` is deployed. ZIPs are generated in the browser on demand; source SVG folders, screenshots, tests, and dependencies are not copied into the deployment. The build fails above a 3 MiB output budget.

GitHub Pages does not consume Vercel deployment storage or bandwidth. An optional `vercel.json` makes the same source deployable as a Vite site, but connecting it to Vercel would consume Vercel storage and transfer for retained deployments. This repository does not create or configure a Vercel project.
