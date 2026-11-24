import { Autocomplete } from '@base-ui/react/autocomplete';
import { useState, useEffect } from 'react';
import { Icon } from './Icon';
import { icons, getIconDisplayName, type IconRecord } from '@/lib/catalog';
import { searchIcons } from '@/lib/icon-search';
import { loadCategories, getCategoryReadiness } from '@/lib/category-readiness';

// Tailwind's lg, md, and sm viewport breakpoints. Base UI needs the same
// column count for the rendered rows and arrow-key navigation.
const gridBreakpoints = [
  { query: '(min-width: 64rem)', columns: 8 },
  { query: '(min-width: 48rem)', columns: 6 },
  { query: '(min-width: 40rem)', columns: 4 },
];

function getSearchColumns() {
  return (
    gridBreakpoints.find(({ query }) => matchMedia(query).matches)?.columns ?? 3
  );
}

function useSearchColumns() {
  const [columns, setColumns] = useState(8);
  useEffect(() => {
    const queries = gridBreakpoints.map(({ query }) => matchMedia(query));
    const update = () => setColumns(getSearchColumns());
    update();
    queries.forEach((query) => query.addEventListener('change', update));
    return () => {
      queries.forEach((query) => query.removeEventListener('change', update));
    };
  }, []);
  return columns;
}

export function SearchResults({
  select,
}: {
  select: (icon: IconRecord) => void;
}) {
  const columns = useSearchColumns();
  const results = Autocomplete.useFilteredItems<IconRecord>();
  // Real rows keep Base UI's arrow-key navigation and grid semantics aligned
  // with the visible column count, including the final incomplete row.
  const rows = Array.from(
    { length: Math.ceil(results.length / columns) },
    (_, index) => results.slice(index * columns, (index + 1) * columns),
  );
  return rows.map((row) => (
    <Autocomplete.Row
      key={row[0].id}
      className="grid gap-0"
      style={{ gridTemplateColumns: `repeat(${columns}, minmax(0, 1fr))` }}
    >
      {row.map((icon) => (
        <Autocomplete.Item
          key={icon.id}
          value={icon}
          onClick={() => select(icon)}
          aria-label={getIconDisplayName(icon)}
          className="group/item relative flex min-h-24 min-w-0 cursor-default flex-col items-center justify-center gap-3 px-4 pt-4 pb-1 outline-none after:absolute after:inset-1 after:-z-1 after:rounded-xl after:bg-current/5 data-highlighted:after:bg-current/10 data-highlighted:after:outline-2 data-highlighted:after:-outline-offset-1 data-highlighted:after:outline-current"
        >
          <Icon name={icon.id} size={24} />
          <span className="max-w-full truncate text-[11px] leading-3 text-muted group-hover/item:text-ink">
            {getIconDisplayName(icon)}
          </span>
        </Autocomplete.Item>
      ))}
    </Autocomplete.Row>
  ));
}

export async function loadSearchCatalog() {
  await loadCategories();
  return {
    Results: SearchResults,
    search: (query: string) => searchIcons(icons, query),
    warning: getCategoryReadiness().error,
  };
}
