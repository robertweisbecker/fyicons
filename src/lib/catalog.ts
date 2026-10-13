import { unzlibSync, strFromU8 } from 'fflate';
import compact from '../data/catalog-runtime.json';
import {
  categorizeIcons,
  parseIconCategories,
  uncategorized,
  type IconCategory,
} from './icon-categories';
import { pageHref } from './navigation';

import type fullCatalog from '../data/catalog.json';

type Catalog = typeof fullCatalog;
const { iconFields, iconArchive, svgArchive, ...metadata } = compact;
// Compression only affects transport; clipboard and downloads retain exact SVG bytes.
function unpack(archive: string): unknown {
  return JSON.parse(
    strFromU8(
      unzlibSync(Uint8Array.from(atob(archive), (char) => char.charCodeAt(0))),
    ),
  );
}
const rows = unpack(iconArchive) as unknown[][];
const sourceSvgs = unpack(svgArchive) as string[];
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

export type IconRecord = (typeof data.icons)[number] & { categories: string[] };
export function getIconDisplayName(icon: IconRecord) {
  return icon.componentName.slice('Icon'.length);
}
export const icons: IconRecord[] = data.icons.map((icon) => ({
  ...icon,
  categories: [uncategorized.id],
}));
export let categories: IconCategory[] = [uncategorized];
export function getIconCategoryLabel(icon: IconRecord) {
  return icon.categories
    .map((id) => categories.find((category) => category.id === id)?.name ?? id)
    .join(' · ');
}

// Called before React mounts. Existing maps and search indexes retain these records.
export async function loadIconCategories(): Promise<string | undefined> {
  try {
    const response = await fetch(`${pageHref('home')}icon-categories.json`, {
      cache: 'no-store',
      signal: AbortSignal.timeout(5000),
    });
    if (!response.ok)
      throw new Error(`Category request failed: ${response.status}`);
    const config = parseIconCategories(await response.json());
    const resolved = categorizeIcons(icons, config);
    resolved.icons.forEach((icon, index) => {
      icons[index].categories = icon.categories;
    });
    categories = resolved.categories;
  } catch {
    return 'Categories could not be loaded. All icons are still available. Refresh to try again.';
  }
}
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
export function getManifest() {
  return {
    ...data,
    categories,
    icons: icons.map(({ svg: _svg, ...record }) => record),
  };
}
