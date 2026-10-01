import compact from '../data/catalog-runtime.json';

const data = {
  ...compact,
  icons: compact.icons.map((icon) => ({
    ...icon,
    width: 16,
    height: 16,
    file: `icons/${icon.filename}`,
    sourceUrl: `https://www.figma.com/design/${compact.source.fileKey}/icons-astra?node-id=${icon.id.replace(':', '-')}`,
  })),
};

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
