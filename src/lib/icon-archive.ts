import { zipSync, strToU8 } from 'fflate';

type ArchiveIcon = { id: string; file: string; svg: string };
type ArchiveMetadata = {
  duplicateGroups: Record<string, { id: string; file: string }[]>;
  [key: string]: unknown;
};

/** Build downloads directly from the catalog's original SVG bytes. */
export function createIconArchive<T extends ArchiveIcon>(
  selection: readonly T[],
  metadata: ArchiveMetadata,
  readme: string,
) {
  const files = Object.fromEntries(
    selection.map((icon) => [icon.file, strToU8(icon.svg)]),
  );
  const selectedIds = new Set(selection.map((icon) => icon.id));
  const selectedManifest = {
    ...metadata,
    count: selection.length,
    native16Count: selection.length,
    duplicateGroups: Object.fromEntries(
      Object.entries(metadata.duplicateGroups)
        .map(
          ([name, variants]) =>
            [
              name,
              variants.filter((icon) => selectedIds.has(icon.id)),
            ] as const,
        )
        .filter(([, variants]) => variants.length > 0),
    ),
    icons: selection.map(({ svg: _svg, ...record }) => record),
  };
  files['manifest.json'] = strToU8(
    JSON.stringify(selectedManifest, null, 2) + '\n',
  );
  files['README.md'] = strToU8(readme);
  return zipSync(files, { level: 6 });
}
