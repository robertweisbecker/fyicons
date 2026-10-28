import { validateCategoryIcons } from '../../apps/site/src/lib/icon-categories.ts';

/** Keep local rules; only sidebar artwork references follow Figma IDs through renames. */
export function syncIconCategories(current, currentIcons, normalized) {
  const currentByName = new Map(currentIcons.map((icon) => [icon.name, icon]));
  const nextById = new Map(normalized.map((icon) => [icon.id, icon]));
  const result = {
    categories: current.categories.map((category) => {
      const source = currentByName.get(category.icon);
      return {
        ...category,
        icon: source
          ? (nextById.get(source.id)?.name ?? 'grid')
          : category.icon,
      };
    }),
  };
  validateCategoryIcons(result, normalized);
  return result;
}
