import { ToggleGroup as ToggleGroupPrimitive } from '@base-ui/react/toggle-group';
import { cn } from '@/lib/utils';

export function ToggleGroup({
  className,
  ...props
}: Omit<ToggleGroupPrimitive.Props, 'className'> & { className?: string }) {
  return (
    <ToggleGroupPrimitive
      data-slot="toggle-group"
      {...props}
      className={cn(
        'flex items-center gap-1 data-[orientation=vertical]:flex-col data-[orientation=vertical]:items-stretch',
        className,
      )}
    />
  );
}
