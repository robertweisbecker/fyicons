---
'fyicons': minor
---

Add `fy-icon` and `fy-{icon-name}` classes to every React icon, before any user-supplied `className`. The icon name matches the catalog, including variant suffixes. These classes are also included in components installed through shadcn.

Icons without a non-empty `aria-label` now default to `aria-hidden="true"`. A non-empty label is passed to the SVG and defaults to `role="img"`. Empty or whitespace-only labels remain decorative. Explicit `role` and `aria-hidden` props still override these defaults.

**Breaking change:** `title` and `aria-labelledby` no longer make an icon accessible automatically. Replace `<IconSun title="Light mode" />` with `<IconSun aria-label="Light mode" />` when the icon conveys information. You can keep `title` to render an SVG title. To use an external label, set `aria-labelledby`, `role="img"`, and `aria-hidden={false}` together.
