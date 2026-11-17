import { Checkbox as CheckboxPrimitive } from '@base-ui/react/checkbox';
import { cva, type VariantProps } from 'class-variance-authority';
import { createIconLookup } from '@/components/createIconLookup';


import { cn } from '@/lib/utils';






import Glyph0 from 'fyicons/icons/IconCheckThickSm';
import Glyph1 from 'fyicons/icons/IconMinus';
const Icon = createIconLookup({
"check-thick-sm": { Component: Glyph0, id: "96:1629" },
"minus": { Component: Glyph1, id: "667:899" }
});

export const checkboxVariants = cva(
  'group/checkbox peer inline-flex shrink-0 items-center justify-center rounded-md focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-muted data-disabled:pointer-events-none data-disabled:opacity-40',
  {
    variants: { size: { default: 'size-6', sm: 'size-5' } },
    defaultVariants: { size: 'default' },
  },
);

export type CheckboxProps = Omit<
  CheckboxPrimitive.Root.Props,
  'className' | 'children'
> &
  VariantProps<typeof checkboxVariants> & { className?: string };

export function Checkbox({
  className,
  size = 'default',
  indeterminate,
  ...props
}: CheckboxProps) {
  return (
    <CheckboxPrimitive.Root
      data-slot="checkbox"
      data-size={size}
      {...props}
      indeterminate={indeterminate}
      className={cn(checkboxVariants({ size }), className)}
    >
      <span
        data-slot="checkbox-control"
        className={cn(
          'flex size-4 items-center justify-center rounded border border-muted bg-surface group-aria-invalid/checkbox:border-danger group-data-indeterminate/checkbox:border-border group-data-indeterminate/checkbox:bg-control-accent group-data-indeterminate/checkbox:text-white group-data-checked/checkbox:border-border group-data-checked/checkbox:bg-control-accent group-data-checked/checkbox:text-white',
        )}
      >
        <CheckboxPrimitive.Indicator data-slot="checkbox-indicator">
          <Icon name={indeterminate ? 'minus' : 'check-thick-sm'} />
        </CheckboxPrimitive.Indicator>
      </span>
    </CheckboxPrimitive.Root>
  );
}
