import {
  getIconCategoryLabel,
  getIconDisplayName,
  type IconRecord,
} from './catalog';

export type IconSort = 'alphabetical' | 'addedAt' | 'updatedAt';

const byName = new Intl.Collator('en', { numeric: true, sensitivity: 'base' });

export function searchIcons(
  items: IconRecord[],
  query: string,
  sort: IconSort | 'relevance' = 'relevance',
) {
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
      // Keep numeric suffixes with their word: bell-2-slash sorts as bell2-slash.
      const sortName = icon.name.replace(/-(?=\d)/g, '');
      return { icon, rank, sortName };
    })
    .filter(({ rank }) => rank < 3)
    .sort((a, b) => {
      if (sort === 'relevance' && a.rank !== b.rank) return a.rank - b.rank;
      if (sort === 'addedAt' || sort === 'updatedAt') {
        // UTC ISO timestamps sort chronologically. Undated icons come last.
        const aDate = a.icon[sort] ?? '';
        const bDate = b.icon[sort] ?? '';
        if (aDate !== bDate) return aDate > bDate ? -1 : 1;
      }
      return byName.compare(a.sortName, b.sortName);
    })
    .map(({ icon }) => icon);
}
