import { Menu } from '@base-ui/react/menu';
import { Icon } from '@/components/Icon';
import { Button } from '@/components/ui/button';
import { Toggle } from '@/components/ui/toggle';
import { ToggleGroup } from '@/components/ui/toggle-group';
import { categories, icons } from '@/lib/catalog';

const categoryIcons: Record<string, string> = {
  all: 'grid',
  Interface: 'layout',
  Navigation: 'compass',
  Design: 'component',
  Text: 'font-family',
  Code: 'code',
  Files: 'folder',
  Communication: 'chat',
  Media: 'circle-play',
  Devices: 'devices',
  People: 'circle-user',
  Objects: 'box',
};
const options = [
  { value: 'all', label: 'All icons', count: icons.length },
  ...categories.map((value) => ({
    value,
    label: value,
    count: icons.filter((icon) => icon.category === value).length,
  })),
];
type Props = { value: string; onValueChange: (value: string) => void };
function CategoryLabel({ option }: { option: (typeof options)[number] }) {
  return (
    <>
      <Icon name={categoryIcons[option.value] ?? 'grid'} />
      <span className="flex-1 truncate">{option.label}</span>
      <span aria-hidden="true" className="text-xs text-current/50 tabular-nums">
        {option.count}
      </span>
    </>
  );
}
export function CategorySidebar({ value, onValueChange }: Props) {
  return (
    <>
      <aside
        aria-label="Categories"
        className="sticky top-20 hidden max-h-[calc(100dvh-6rem)] w-56 shrink-0 overflow-y-auto pr-4 lg:block"
      >
        <h2 className="mb-3 px-3 text-xs font-medium text-muted">Categories</h2>
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
              className="justify-start gap-3 rounded-lg text-left text-sm font-normal"
            >
              <CategoryLabel option={option} />
            </Toggle>
          ))}
        </ToggleGroup>
      </aside>
      <div className="lg:hidden">
        <Menu.Root>
          <Menu.Trigger
            render={<Button variant="outline" className="min-h-11" />}
          >
            <Icon name={categoryIcons[value] ?? 'grid'} />
            {value === 'all' ? 'Categories' : value}
            <Icon name="chevron-down" />
          </Menu.Trigger>
          <Menu.Portal>
            <Menu.Positioner sideOffset={8} align="start" className="z-70">
              <Menu.Popup className="max-h-(--available-height) w-64 origin-(--transform-origin) overflow-y-auto rounded-xl border border-line bg-surface p-1.5 text-ink shadow-xl transition-[opacity,transform] duration-150 ease-out data-ending-style:scale-95 data-ending-style:opacity-0 data-starting-style:scale-95 data-starting-style:opacity-0">
                <Menu.RadioGroup
                  value={value}
                  onValueChange={onValueChange}
                  aria-label="Icon categories"
                >
                  {options.map((option) => (
                    <Menu.RadioItem
                      key={option.value}
                      value={option.value}
                      closeOnClick
                      className="flex min-h-11 cursor-default items-center gap-3 rounded-lg px-3 text-sm outline-none data-checked:bg-current/10 data-highlighted:bg-current/5"
                    >
                      <CategoryLabel option={option} />
                    </Menu.RadioItem>
                  ))}
                </Menu.RadioGroup>
              </Menu.Popup>
            </Menu.Positioner>
          </Menu.Portal>
        </Menu.Root>
      </div>
    </>
  );
}
