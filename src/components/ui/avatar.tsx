import { Avatar as AvatarPrimitive } from '@base-ui/react/avatar';
import { cn } from '../../lib/utils';

export function Avatar({
  className,
  ...props
}: Omit<AvatarPrimitive.Root.Props, 'className'> & { className?: string }) {
  return (
    <AvatarPrimitive.Root
      {...props}
      className={cn(
        'relative inline-flex size-8 shrink-0 overflow-hidden rounded-full',
        className,
      )}
    />
  );
}

export function AvatarFallback({
  className,
  ...props
}: Omit<AvatarPrimitive.Fallback.Props, 'className'> & { className?: string }) {
  return (
    <AvatarPrimitive.Fallback
      {...props}
      className={cn(
        'flex size-full items-center justify-center text-xs font-medium',
        className,
      )}
    />
  );
}
