import data from '../data/catalog.json';

export type IconRecord = (typeof data.icons)[number];
export const catalog = data;
export const icons = data.icons;
export const byId = new Map(icons.map((icon) => [icon.id, icon]));
export const byName = new Map<string, IconRecord>();
for (const icon of icons) {
  byName.set(icon.name, icon);
  if (!byName.has(icon.baseName)) byName.set(icon.baseName, icon);
}
export const categories = [
  ...new Set(icons.map((icon) => icon.category)),
].sort();
export const manifest = {
  ...data,
  icons: icons.map(({ svg: _svg, ...record }) => record),
};
