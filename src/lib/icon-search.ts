import {
  getIconCategoryLabel,
  getIconDisplayName,
  type IconRecord,
} from './catalog';

export function searchIcons(items: IconRecord[], query: string) {
  const term = query.toLowerCase().trim();
  const words = term.split(/\s+/);
  const matches = (text: string) => words.every((word) => text.includes(word));

  return items
    .map((icon) => {
      const names = [
        getIconDisplayName(icon),
        icon.name,
        icon.originalName,
      ].map((name) => name.toLowerCase());
      const nameText = names.join(' ');
      const rank = names.includes(term)
        ? 0
        : matches(nameText)
          ? 1
          : matches(
                `${nameText} ${getIconCategoryLabel(icon)} ${icon.id}`.toLowerCase(),
              )
            ? 2
            : 3;
      return { icon, rank };
    })
    .filter(({ rank }) => rank < 3)
    .sort(
      (a, b) =>
        a.rank - b.rank ||
        getIconDisplayName(a.icon).localeCompare(
          getIconDisplayName(b.icon),
          'en',
          {
            numeric: true,
            sensitivity: 'base',
          },
        ),
    )
    .map(({ icon }) => icon);
}
