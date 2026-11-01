import type { ReactNode } from 'react';
import { ScrollArea } from '@base-ui/react/scroll-area';
import {
  Menu,
  MenuTrigger,
  MenuContent,
  MenuRadioGroup,
  MenuRadioItem,
} from '@/components/ui/menu';
import { Badge } from '@/components/ui/badge';
import { Icon } from '@/components/Icon';
import { Button } from '@/components/ui/button';
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
      <Icon name={option.icon} className="opacity-50" />
      <span className="truncate">{option.label}</span>
      <Badge size="sm" variant="unstyled" className="p-0 text-muted/50">
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
      <ScrollArea.Root className="group/category-scroll -mr-4 -ml-1 min-h-0 flex-1">
        <ScrollArea.Viewport
          role="region"
          aria-label="Categories"
          className="h-full scroll-fade-y scroll-py-1 overscroll-y-contain pr-4 pl-1 scroll-fade-b-0 scroll-fade-t-0 focus-visible:-outline-offset-2 data-[overflow-y-end]:scroll-fade-b-6 data-[overflow-y-start]:scroll-fade-t-6"
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
        <ScrollArea.Scrollbar className="flex w-1.5 justify-center opacity-0 group-has-[:focus-visible]/category-scroll:opacity-100 data-hovering:opacity-100 data-scrolling:opacity-100">
          <ScrollArea.Thumb className="w-1 rounded-full bg-muted/50" />
        </ScrollArea.Scrollbar>
      </ScrollArea.Root>
    </Sidebar>
  );
}

export function CategoryMenu({ value, onValueChange }: Props) {
  const options = categoryOptions();
  const selected =
    options.find((option) => option.value === value) ?? options[0];
  return (
    <div className="shrink-0 lg:hidden">
      <Menu>
        <MenuTrigger
          aria-label={
            value === 'all' ? 'Categories' : `Categories: ${selected.label}`
          }
          render={
            <Button
              variant="outline"
              className="size-11 rounded-xl p-0 sm:w-auto sm:px-3"
            />
          }
        >
          <Icon name={selected.icon} />
          <span className="hidden max-w-32 truncate sm:inline">
            {value === 'all' ? 'Categories' : selected.label}
          </span>
          <Icon name="chevron-down" className="hidden sm:block" />
        </MenuTrigger>
        <MenuContent className="w-64">
          <MenuRadioGroup
            value={value}
            onValueChange={onValueChange}
            aria-label="Icon categories"
          >
            {options.map((option) => (
              <MenuRadioItem key={option.value} value={option.value} size="lg">
                <CategoryLabel option={option} />
              </MenuRadioItem>
            ))}
          </MenuRadioGroup>
        </MenuContent>
      </Menu>
    </div>
  );
}
