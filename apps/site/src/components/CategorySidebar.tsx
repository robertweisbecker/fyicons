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
import { Icon } from '@/components/Icon';
import { Sidebar, SidebarSection, SidebarItem } from './Sidebar';
import { categories, icons, byName } from '@/lib/catalog';

const categoryOptions = () => [
  { value: 'all', label: 'All', icon: 'grid', count: icons.length },
  ...categories.map((category) => ({
    value: category.id,
    label: category.name,
    icon: byName.has(category.icon) ? category.icon : 'tag',
    count: icons.filter((icon) => icon.categories.includes(category.id)).length,
  })),
];
type Props = { value: string; onValueChange: (value: string) => void };
function CategoryLabel({
  option,
}: {
  option: ReturnType<typeof categoryOptions>[number];
}) {
  return (
    <>
      <Icon name={option.icon} className="text-muted" />
      <span className="truncate">{option.label}</span>
      <Badge size="sm" variant="unstyled" className="p-0 text-xs text-muted">
        {option.count}
      </Badge>
    </>
  );
}
export function CategorySidebar({
  value,
  onValueChange,
  displayControls,
}: Props & { displayControls: ReactNode }) {
  const options = categoryOptions();
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

export function CategoryMenu({ value, onValueChange }: Props) {
  const options = categoryOptions();
  const selected =
    options.find((option) => option.value === value) ?? options[0];
  return (
    <div className="min-w-0 lg:hidden">
      <Select
        items={options}
        value={selected.value}
        onValueChange={(next) => {
          if (next !== null) onValueChange(next);
        }}
      >
        <SelectTrigger
          variant="text"
          size="sm"
          className="max-w-full"
          aria-label={
            value === 'all' ? 'Categories' : `Categories: ${selected.label}`
          }
          title={selected.label}
        >
          <Icon name={selected.icon} />
          <SelectValue className="truncate" />
        </SelectTrigger>
        <SelectContent aria-label="Icon categories" className="w-72">
          <SelectGroup>
            {options.map((option) => (
              <SelectItem
                key={option.value}
                value={option.value}
                label={option.label}
              >
                <CategoryLabel option={option} />
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
}
