import type { ReactNode } from 'react';
import { ScrollArea } from '@/components/ui/scroll-area';
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectGroup,
  SelectItem,
} from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { CatalogIcon } from '@/components/CatalogIcon';
import { Sidebar, SidebarSection, SidebarItem } from './Sidebar';
import { categories, icons, byName } from '@/lib/catalog';

export function getCategoryOptions() {
  const counts = new Map<string, number>();
  for (const icon of icons) {
    for (const id of icon.categories) counts.set(id, (counts.get(id) ?? 0) + 1);
  }
  return [
    { value: 'all', label: 'All', icon: 'grid', count: icons.length },
    ...categories
      .map((category) => ({
        value: category.id,
        label: category.name,
        icon: byName.has(category.icon) ? category.icon : 'tag',
        count: counts.get(category.id) ?? 0,
      }))
      .sort((a, b) => a.label.localeCompare(b.label, 'en')),
  ];
}
type Props = {
  options: ReturnType<typeof getCategoryOptions>;
  value: string;
  onValueChange: (value: string) => void;
};
function CategoryLabel({ option }: { option: Props['options'][number] }) {
  return (
    <>
      <CatalogIcon name={option.icon} />
      <span className="truncate">{option.label}</span>
      <Badge size="sm" className="ms-auto">
        {option.count}
      </Badge>
    </>
  );
}
export function CategorySidebar({
  options,
  value,
  onValueChange,
  displayControls,
}: Props & { displayControls: ReactNode }) {
  return (
    <Sidebar
      aria-label="Icon filters"
      className="h-[calc(100dvh-var(--site-header-height)-2rem)] overflow-hidden lg:flex lg:flex-col"
    >
      <div
        role="group"
        aria-label="Icon display"
        className="mb-8 flex shrink-0 flex-col gap-5 px-1"
      >
        {displayControls}
      </div>
      <ScrollArea.Root className="-mr-4 -ml-1 flex-1">
        <ScrollArea.Viewport
          role="region"
          aria-label="Categories"
          className="h-full scroll-py-1 pr-4 pl-1"
        >
          <ScrollArea.Content className="min-w-0!">
            <SidebarSection title="Categories">
              <div
                role="group"
                aria-label="Icon categories"
                className="flex flex-col gap-px"
              >
                {options.map((option) => (
                  <SidebarItem
                    key={option.value}
                    active={value === option.value}
                    onClick={() => onValueChange(option.value)}
                    aria-label={option.label}
                  >
                    <CategoryLabel option={option} />
                  </SidebarItem>
                ))}
              </div>
            </SidebarSection>
          </ScrollArea.Content>
        </ScrollArea.Viewport>
        <ScrollArea.Scrollbar />
      </ScrollArea.Root>
    </Sidebar>
  );
}

export function CategoryMenu({ options, value, onValueChange }: Props) {
  const selected =
    options.find((option) => option.value === value) ?? options[0];
  return (
    <div className="min-w-0 lg:hidden">
      <Select
        size="sm"
        items={options}
        value={selected.value}
        onValueChange={(next) => {
          if (next !== null) onValueChange(next);
        }}
      >
        <SelectTrigger
          variant="text"
          className="max-w-full"
          aria-label={
            value === 'all' ? 'Categories' : `Categories: ${selected.label}`
          }
          title={selected.label}
        >
          <CatalogIcon name={selected.icon} />
          <SelectValue className="truncate" />
        </SelectTrigger>
        <SelectContent aria-label="Icon categories">
          <SelectGroup>
            {options.map((option) => (
              <SelectItem
                key={option.value}
                value={option.value}
                label={option.label}
                leading={<CatalogIcon name={option.icon} />}
                trailing={<Badge size="sm">{option.count}</Badge>}
              >
                {option.label}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
}
