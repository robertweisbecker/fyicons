import { Checkbox as CheckboxPrimitive } from '@base-ui/react/checkbox';
import { cva, type VariantProps } from 'class-variance-authority';
import { Icon } from '@/components/Icon';
import { cn } from '@/lib/utils';

export const checkboxVariants = cva(
  'group/checkbox peer inline-flex shrink-0 cursor-pointer items-center justify-center rounded-md focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-muted data-disabled:pointer-events-none data-disabled:opacity-40 pointer-coarse:size-11',
  {
    variants: { size: { default: 'size-8', sm: 'size-6' } },
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
          'flex size-4 items-center justify-center rounded border border-muted bg-surface group-aria-invalid/checkbox:border-danger group-data-checked/checkbox:border-ink group-data-checked/checkbox:bg-ink group-data-checked/checkbox:text-canvas group-data-indeterminate/checkbox:border-ink group-data-indeterminate/checkbox:bg-ink group-data-indeterminate/checkbox:text-canvas',
        )}
      >
        <CheckboxPrimitive.Indicator data-slot="checkbox-indicator">
          <Icon name={indeterminate ? 'line-horizontal' : 'check-md'} />
        </CheckboxPrimitive.Indicator>
      </span>
    </CheckboxPrimitive.Root>
  );
}
