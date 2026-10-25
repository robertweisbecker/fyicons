---
'fyicons': minor
---

Remove private Figma source links, raw file keys, and export scope from public icon metadata. The npm manifest, website catalogs, SVG ZIP manifests, and new icon comparison reports no longer include these details.

If you read source metadata, replace `source.fileKey` with the opaque `source.id` for identity comparisons. The `sourceUrl` field and other source details are no longer available. Icon artwork, names, and React behavior are unchanged by this privacy fix.
