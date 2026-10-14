export type LibraryUrlState = {
  category: string;
  query: string;
  icon: string | null;
};

export const emptyLibraryState: LibraryUrlState = {
  category: 'all',
  query: '',
  icon: null,
};

export function readLibraryHash(
  hash: string,
  categoryIds: ReadonlySet<string>,
  iconNames: ReadonlySet<string>,
): LibraryUrlState {
  const params = new URLSearchParams(hash.replace(/^#/, ''));
  const category = params.get('category') ?? 'all';
  const icon = params.get('icon');
  return {
    category: categoryIds.has(category) ? category : 'all',
    query: params.get('q') ?? '',
    icon: icon && iconNames.has(icon) ? icon : null,
  };
}

export function libraryHash({ category, query, icon }: LibraryUrlState) {
  const params = new URLSearchParams();
  if (category !== 'all') params.set('category', category);
  if (query) params.set('q', query);
  if (icon) params.set('icon', icon);
  const hash = params.toString();
  return hash ? `#${hash}` : '';
}
