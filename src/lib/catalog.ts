import { unzlibSync, strFromU8 } from 'fflate';
import compact from '../data/catalog-runtime.json';

import type fullCatalog from '../data/catalog.json';

type Catalog = typeof fullCatalog;
const { iconFields, icons: rows, svgArchive, ...metadata } = compact;
// Compression only affects transport; clipboard and downloads retain exact SVG bytes.
const sourceSvgs: string[] = JSON.parse(
  strFromU8(
    unzlibSync(Uint8Array.from(atob(svgArchive), (char) => char.charCodeAt(0))),
  ),
);
const data = {
  ...metadata,
  icons: rows.map((row, index) => {
    const icon = Object.fromEntries(
      iconFields.flatMap((field, index) =>
        row[index] === null ? [] : [[field, row[index]]],
      ),
    ) as unknown as Omit<
      Catalog['icons'][number],
      'width' | 'height' | 'file' | 'sourceUrl'
    >;
    return {
      ...icon,
      svg: sourceSvgs[index],
      width: 16,
      height: 16,
      file: `icons/${icon.filename}`,
      sourceUrl: `https://www.figma.com/design/${compact.source.fileKey}/icons-astra?node-id=${icon.id.replace(':', '-')}`,
    };
  }),
} as unknown as Catalog;

export type IconRecord = (typeof data.icons)[number];
export const catalog = data;
export const icons = data.icons;
export const byId = new Map(icons.map((icon) => [icon.id, icon]));
export const byName = new Map<string, IconRecord>();
for (const icon of icons) {
  byName.set(icon.name, icon);
  if (!byName.has(icon.baseName)) byName.set(icon.baseName, icon);
  const aliases =
    'aliases' in icon && Array.isArray(icon.aliases) ? icon.aliases : [];
  for (const alias of aliases) {
    if (typeof alias === 'string' && !byName.has(alias))
      byName.set(alias, icon);
  }
}
export const categories = data.categories;
export const manifest = {
  ...data,
  icons: icons.map(({ svg: _svg, ...record }) => record),
};
