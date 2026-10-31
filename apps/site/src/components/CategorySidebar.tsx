import type { ReactNode } from 'react';
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
import { Toggle } from '@/components/ui/toggle';
import { ToggleGroup } from '@/components/ui/toggle-group';
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
    <aside
      aria-label="Library filters"
      className="sticky top-[calc(var(--site-header-height)+1rem)] hidden max-h-[calc(100dvh-var(--site-header-height)-2rem)] w-(--category-sidebar-width) shrink-0 self-start overflow-y-auto overscroll-contain pt-4 pr-4 pl-1 lg:block"
    >
      <div
        role="group"
        aria-label="Library display"
        className="mb-8 flex flex-col gap-5 px-1"
      >
        {displayControls}
      </div>
      <h2 className="mb-3 ps-2 text-xs text-muted">Categories</h2>
      <ToggleGroup
        orientation="vertical"
        aria-label="Icon categories"
        className="gap-px"
        value={[value]}
        onValueChange={(values) => {
          if (values[0]) onValueChange(values[0]);
        }}
      >
        {options.map((option) => (
          <Toggle
            key={option.value}
            value={option.value}
            aria-label={option.label}
            size="default"
            className="justify-start ps-1.5 text-start text-xs"
          >
            <CategoryLabel option={option} />
          </Toggle>
        ))}
      </ToggleGroup>
    </aside>
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
