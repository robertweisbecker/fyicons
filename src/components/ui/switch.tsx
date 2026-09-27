import { Switch as SwitchPrimitive } from '@base-ui/react/switch';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

export const switchVariants = cva(
  "group/switch relative inline-flex shrink-0 cursor-pointer items-center rounded-full bg-control-track p-0.5 data-checked:bg-control-accent focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-muted data-disabled:pointer-events-none data-disabled:opacity-40 pointer-coarse:before:absolute pointer-coarse:before:top-1/2 pointer-coarse:before:left-1/2 pointer-coarse:before:size-11 pointer-coarse:before:-translate-1/2 pointer-coarse:before:content-['']",
  {
    variants: { size: { default: 'h-5 w-9', sm: 'h-4 w-7' } },
    defaultVariants: { size: 'default' },
  },
);
const thumbVariants = cva(
  'block rounded-full bg-white shadow-sm transition-transform duration-200 ease-out motion-reduce:transition-none',
  {
    variants: {
      size: {
        default: 'size-4 data-checked:translate-x-4',
        sm: 'size-3 data-checked:translate-x-3',
      },
    },
    defaultVariants: { size: 'default' },
  },
);

export type SwitchProps = Omit<
  SwitchPrimitive.Root.Props,
  'className' | 'children'
> &
  VariantProps<typeof switchVariants> & { className?: string };

export function Switch({ className, size = 'default', ...props }: SwitchProps) {
  return (
    <SwitchPrimitive.Root
      data-slot="switch"
      data-size={size}
      {...props}
      className={cn(switchVariants({ size }), className)}
    >
      <SwitchPrimitive.Thumb
        data-slot="switch-thumb"
        className={cn(thumbVariants({ size }))}
      />
    </SwitchPrimitive.Root>
  );
}
