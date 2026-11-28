import { unzlibSync, strFromU8 } from 'fflate';
export type CatalogIcon = {
  id: string;
  name: string;
  baseName: string;
  originalName: string;
  componentName: string;
  filename: string;
  file: string;
  width: number;
  height: number;
  sha256: string;
  aliases: string[];
  compatibilityNames?: string[];
  notes?: string[];
  addedAt?: string;
  updatedAt?: string;
  variantSetId?: string;
  variantSetName?: string;
  variantProperties?: Record<string, string>;
  duplicate: boolean;
  variantCount: number;
};
export type Catalog = {
  name: string;
  version: string;
  source: { id: string };
  count: number;
  native16Count: number;
  duplicateGroups: Record<string, { id: string; file: string }[]>;
  duplicatePolicy: string;
  icons: CatalogIcon[];
};
export type CompactCatalog = {
  metadataArchive: string;
  iconFields: readonly string[];
  iconArchive: string;
};
type ArchivedIcon = Omit<CatalogIcon, 'width' | 'height' | 'file'> & {
  sourceUrl?: string;
};

// Compression only affects transport; clipboard and downloads retain exact SVG bytes.
function unpack(archive: string): unknown {
  return JSON.parse(
    strFromU8(
      unzlibSync(Uint8Array.from(atob(archive), (char) => char.charCodeAt(0))),
    ),
  );
}

export function decodeCatalog(compact: CompactCatalog): Catalog {
  const { metadataArchive, iconFields, iconArchive } = compact;
  const metadata = unpack(metadataArchive) as Omit<Catalog, 'icons'>;
  const rows = unpack(iconArchive) as unknown[][];
  return {
    ...metadata,
    source: { id: metadata.source?.id ?? '' },
    icons: rows.map((row, index) => {
      const { sourceUrl: _sourceUrl, ...icon } = Object.fromEntries(
        iconFields.flatMap((field, index) =>
          row[index] === null ? [] : [[field, row[index]]],
        ),
      ) as ArchivedIcon;
      return {
        ...icon,
        width: 16,
        height: 16,
        file: `icons/${icon.filename}`,
      };
    }),
  } as unknown as Catalog;
}
