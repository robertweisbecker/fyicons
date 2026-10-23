import { unzlibSync, strFromU8 } from 'fflate';
import type fullCatalog from '../data/catalog.json';

export type Catalog = Omit<typeof fullCatalog, 'icons'> & {
  icons: ((typeof fullCatalog.icons)[number] & {
    addedAt?: string;
    updatedAt?: string;
  })[];
};
export type CompactCatalog = {
  metadataArchive: string;
  iconFields: readonly string[];
  iconArchive: string;
  svgArchive: string;
};
type ArchivedIcon = Omit<
  Catalog['icons'][number],
  'svg' | 'width' | 'height' | 'file' | 'sourceUrl'
> & { sourceUrl?: string };

// Compression only affects transport; clipboard and downloads retain exact SVG bytes.
function unpack(archive: string): unknown {
  return JSON.parse(
    strFromU8(
      unzlibSync(Uint8Array.from(atob(archive), (char) => char.charCodeAt(0))),
    ),
  );
}

export function decodeCatalog(compact: CompactCatalog): Catalog {
  const { metadataArchive, iconFields, iconArchive, svgArchive } = compact;
  const metadata = unpack(metadataArchive) as Omit<Catalog, 'icons'>;
  const rows = unpack(iconArchive) as unknown[][];
  const sourceSvgs = unpack(svgArchive) as string[];
  return {
    ...metadata,
    icons: rows.map((row, index) => {
      const icon = Object.fromEntries(
        iconFields.flatMap((field, index) =>
          row[index] === null ? [] : [[field, row[index]]],
        ),
      ) as ArchivedIcon;
      return {
        ...icon,
        svg: sourceSvgs[index],
        width: 16,
        height: 16,
        file: `icons/${icon.filename}`,
        sourceUrl:
          icon.sourceUrl ??
          `https://www.figma.com/design/${metadata.source.fileKey}/icons-astra?node-id=${icon.id.replace(':', '-')}`,
      };
    }),
  } as unknown as Catalog;
}
