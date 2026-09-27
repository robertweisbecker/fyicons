import { useState } from 'react';
import { Icon } from '@/components/Icon';
import { Button } from '@/components/ui/button';
import { Toggle } from '@/components/ui/toggle';
import { ToggleGroup } from '@/components/ui/toggle-group';
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { categories, icons } from '@/lib/catalog';

const options = [
  { value: 'all', label: 'All icons', count: icons.length },
  ...categories.map((value) => ({
    value,
    label: value,
    count: icons.filter((icon) => icon.category === value).length,
  })),
];
type Props = { value: string; onValueChange: (value: string) => void };
function CategoryList({
  value,
  onValueChange,
  onSelect,
}: Props & { onSelect?: () => void }) {
  return (
    <ToggleGroup
      orientation="vertical"
      aria-label="Icon categories"
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
          onClick={onSelect}
          className="h-auto min-h-10 justify-start text-left text-sm whitespace-normal"
        >
          <span className="flex-1">{option.label}</span>
          <span
            aria-hidden="true"
            className="text-xs text-current/50 tabular-nums"
          >
            {option.count}
          </span>
        </Toggle>
      ))}
    </ToggleGroup>
  );
}
export function CategorySidebar(props: Props) {
  const [open, setOpen] = useState(false);
  return (
    <>
      <aside
        aria-label="Categories"
        className="sticky top-20 hidden max-h-[calc(100dvh-6rem)] w-56 shrink-0 overflow-y-auto pr-4 lg:block"
      >
        <h2 className="mb-3 px-3 text-xs font-medium text-muted">Categories</h2>
        <CategoryList {...props} />
      </aside>
      <div className="lg:hidden">
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger render={<Button variant="outline" />}>
            <Icon name="list-bullet" />
            {props.value === 'all' ? 'Categories' : props.value}
          </SheetTrigger>
          <SheetContent side="left">
            <div className="flex items-center justify-between border-b border-line p-4">
              <SheetTitle className="font-semibold">Categories</SheetTitle>
              <SheetClose
                render={<Button variant="ghost" size="icon-sm" />}
                aria-label="Close categories"
              >
                <Icon name="xmark" />
              </SheetClose>
            </div>
            <div className="min-h-0 flex-1 overflow-y-auto p-3">
              <CategoryList {...props} onSelect={() => setOpen(false)} />
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </>
  );
}
