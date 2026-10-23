# Proposal 010: Selected React source downloads

Status: design proposal only. No feature implementation is approved by this document.

## Purpose

Assess whether the website needs a selected React source ZIP in addition to the npm package and shadcn registry. The existing website ZIP contains SVG files, metadata, a README, and a license. It does not contain React source.

## Questions to resolve

- Does a selected source ZIP serve a need that the package and registry do not cover?
- Should it include shared support files or self-contained components?
- What is the download and website build cost for one, several, and all icons?

## Evidence needed

A complete shared bundle needs the selected components, `base.tsx`, `types.ts`, a selected export index, instructions, and the MIT license. Specify paths, imports, name collisions, and source metadata. Keep React as a consumer dependency.

Compile and render a temporary consumer. Test repeated instances, SVG references, titles, and explicit labels. Measure payload size and the effect on the website's 4 MiB limit. Keep existing SVG downloads and source bytes.

Compare the result with the current [package and registry](../docs/releases.md) before proposing a production change.
