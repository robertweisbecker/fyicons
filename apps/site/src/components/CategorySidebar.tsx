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
export function CategorySidebar({ value, onValueChange }: Props) {
  const options = categoryOptions();
  const selected =
    options.find((option) => option.value === value) ?? options[0];
  return (
    <>
      <aside
        aria-label="Categories"
        className="sticky top-20 hidden max-h-[calc(100dvh-6rem)] w-[var(--category-sidebar-width,13rem)] shrink-0 self-start overflow-y-auto overscroll-contain pr-4 lg:block"
      >
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
      <div className="lg:hidden">
        <Menu>
          <MenuTrigger
            render={<Button variant="outline" className="min-h-11" />}
          >
            <Icon name={selected.icon} />
            {value === 'all' ? 'Categories' : selected.label}
            <Icon name="chevron-down" />
          </MenuTrigger>
          <MenuContent className="w-64">
            <MenuRadioGroup
              value={value}
              onValueChange={onValueChange}
              aria-label="Icon categories"
            >
              {options.map((option) => (
                <MenuRadioItem
                  key={option.value}
                  value={option.value}
                  size="lg"
                >
                  <CategoryLabel option={option} />
                </MenuRadioItem>
              ))}
            </MenuRadioGroup>
          </MenuContent>
        </Menu>
      </div>
    </>
  );
}
