export type IconCategory = { id: string; name: string; icon: string };
export type IconCategories = {
  categories: (IconCategory & { keywords: string[]; exactNames?: string[] })[];
};

export const uncategorized: IconCategory = {
  id: 'uncategorized',
  name: 'Uncategorized',
  icon: 'grid',
};

function normalizeName(value: string) {
  return value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');
}

function isNameList(value: unknown): value is string[] {
  return (
    Array.isArray(value) &&
    value.every(
      (name) =>
        typeof name === 'string' &&
        /^[a-z0-9]+(?:[-_\s]+[a-z0-9]+)*$/i.test(name.trim()),
    ) &&
    new Set(value.map(normalizeName)).size === value.length
  );
}

/** Validate the editable runtime rules before categorizing the catalog. */
export function parseIconCategories(value: unknown): IconCategories {
  if (!value || typeof value !== 'object' || Array.isArray(value))
    throw new Error('Expected an icon-categories.json object.');
  const { categories } = value as Partial<IconCategories>;
  if (
    !Array.isArray(categories) ||
    Object.keys(value).some((key) => !['$schema', 'categories'].includes(key))
  )
    throw new Error('Expected category definitions with keyword rules.');
  const ids = new Set<string>();
  const names = new Set<string>();
  for (const category of categories) {
    if (
      !category ||
      typeof category !== 'object' ||
      typeof category.id !== 'string' ||
      !/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(category.id) ||
      ['all', uncategorized.id].includes(category.id) ||
      ids.has(category.id) ||
      typeof category.name !== 'string' ||
      !category.name.trim() ||
      names.has(category.name) ||
      typeof category.icon !== 'string' ||
      !category.icon.trim() ||
      Object.keys(category).some(
        (key) =>
          !['id', 'name', 'icon', 'keywords', 'exactNames'].includes(key),
      )
    )
      throw new Error(
        'Each category needs a unique ID and name, and a sidebar icon.',
      );
    ids.add(category.id);
    names.add(category.name);
    if (
      !isNameList(category.keywords) ||
      ('exactNames' in category && !isNameList(category.exactNames))
    )
      throw new Error(
        `Invalid rules for ${category.name}; keywords and exactNames must be arrays of unique names or segments.`,
      );
  }
  return { categories };
}

/** Match name segments or explicit whole names; allow every matching category. */
export function categorizeIcons<T extends { name: string }>(
  icons: readonly T[],
  config: IconCategories,
) {
  const rules = config.categories.map(({ id, keywords, exactNames = [] }) => ({
    id,
    keywords: keywords.map((keyword) => `-${normalizeName(keyword)}-`),
    exactNames: new Set(exactNames.map(normalizeName)),
  }));
  const categorized = icons.map((icon) => {
    const name = normalizeName(icon.name);
    const memberships = rules
      .filter(
        (rule) =>
          rule.exactNames.has(name) ||
          rule.keywords.some((keyword) => `-${name}-`.includes(keyword)),
      )
      .map(({ id }) => id);
    return {
      ...icon,
      categories: memberships.length ? memberships : [uncategorized.id],
    };
  });
  const categories: IconCategory[] = [...config.categories];
  if (categorized.some((icon) => icon.categories.includes(uncategorized.id)))
    categories.push(uncategorized);
  return { categories, icons: categorized };
}

/** Validate sidebar references; unmatched icons are allowed and remain discoverable. */
export function validateCategoryIcons(
  config: IconCategories,
  icons: readonly { name: string }[],
) {
  const names = new Set(icons.map((icon) => icon.name));
  for (const category of config.categories) {
    if (category.icon !== 'grid' && !names.has(category.icon))
      throw new Error(
        `Unknown sidebar icon for ${category.name}: ${category.icon}`,
      );
  }
}
