# Plans and completed work

## Open proposals

These proposals are not implemented. Review the current source before selecting work.

- [009: Import preview](009-import-dry-run.md): show a prepared import without writing files.
- [010: Selected React source downloads](010-react-source-download-spike.md): assess a complete source bundle and its cost.

## Completed work

The October 2026 review produced these changes. Commit IDs identify historical implementation evidence; they do not describe the current test count or build size.

| Plan | Result                                                                                         | Commits                         |
| ---- | ---------------------------------------------------------------------------------------------- | ------------------------------- |
| 001  | Keep literal SVG references, instance IDs, and accessible names in generated React components. | `44b5124`, `efbb271`            |
| 002  | Prepare and validate complete imports before writing files.                                    | `9baa9cd`                       |
| 003  | Name the SVG download action and validate saved selections.                                    | `d752272`                       |
| 004  | Test catalog reconstruction through the production decoder.                                    | `eba8ba3`                       |
| 005  | Test category-schema freshness without writes.                                                 | `7b1f0ba`                       |
| 006  | Test navigation history and pending URL writes.                                                | `f473959`                       |
| 007  | Render useful content while categories load. Keep navigation intent when they arrive.          | `4dd8a37`, `8a6644f`, `c213d15` |
| 008  | Align generation and naming documentation with behavior.                                       | `3d8c894`                       |
| 011  | Remove duplicate test cases and keep essential contracts and regression tests.                 | `1329d92`                       |

The completed task instructions are removed. Use [Contributing](../CONTRIBUTING.md), [Icon sources](../docs/icon-sources.md), and [Releases](../docs/releases.md) for current procedures.
