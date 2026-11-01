export type IconFilters = {
  category: string;
  query: string;
  icon: string | null;
};

export const emptyIconFilters: IconFilters = {
  category: 'all',
  query: '',
  icon: null,
};

export function readIconFilters(
  search: string,
  categoryIds: ReadonlySet<string> | null,
  iconNames: ReadonlySet<string>,
): IconFilters {
  const params = new URLSearchParams(search);
  const category = params.get('category') ?? 'all';
  const icon = params.get('icon');
  return {
    category: !categoryIds || categoryIds.has(category) ? category : 'all',
    query: params.get('q') ?? '',
    icon: icon && iconNames.has(icon) ? icon : null,
  };
}

export function iconFilterSearch({ category, query, icon }: IconFilters) {
  const params = new URLSearchParams();
  if (category !== 'all') params.set('category', category);
  if (query) params.set('q', query);
  if (icon) params.set('icon', icon);
  return params.size ? `?${params}` : '';
}
