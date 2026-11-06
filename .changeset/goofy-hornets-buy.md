---
'fyicons': minor
---

Add the optional `fyicons/client` entry with `FyiProvider` and provider-aware icons. Set shared `size`, `color`, `className`, and `style` defaults for an app or a section. Nested providers inherit defaults, classes and styles combine, and individual icons can override values.

Import both `FyiProvider` and its icons from `fyicons/client`. Existing `fyicons` imports, direct icon imports, and shadcn source icons remain context-free and keep Server Component support. No migration is required for existing consumers.
