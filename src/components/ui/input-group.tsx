import type { ComponentProps } from 'react';
import { cn } from '@/lib/utils';
export function InputGroup({ className, ...props }: ComponentProps<'div'>) {
  return (
    <div
      {...props}
      className={cn(
        'flex flex-col overflow-hidden rounded-xl bg-surface shadow-xs outline-1 outline-offset-(--surface-outline-offset) outline-ink/10 focus-within:ring-3 focus-within:ring-muted',
        className,
      )}
    />
  );
}
export function InputGroupTextarea({
  className,
  ...props
}: ComponentProps<'textarea'>) {
  return (
    <textarea
      {...props}
      className={cn(
        'min-h-24 w-full resize-none bg-transparent px-4 py-3 text-base leading-relaxed outline-none placeholder:text-muted md:text-sm',
        className,
      )}
    />
  );
}
export function InputGroupAddon({
  className,
  ...props
}: ComponentProps<'div'>) {
  return (
    <div
      {...props}
      className={cn('flex flex-wrap items-center gap-2 px-2 py-2', className)}
    />
  );
}
