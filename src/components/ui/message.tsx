import type { ComponentProps } from 'react';
import { cn } from '@/lib/utils';

/** shadcn message composition, using the site's surface and text tokens. */
export function Message({
  align = 'start',
  className,
  ...props
}: ComponentProps<'div'> & { align?: 'start' | 'end' }) {
  return (
    <div
      data-slot="message"
      data-align={align}
      className={cn(
        'group/message flex w-full min-w-0 gap-2 text-sm',
        className,
      )}
      {...props}
    />
  );
}

export function MessageContent({ className, ...props }: ComponentProps<'div'>) {
  return (
    <div
      data-slot="message-content"
      className={cn(
        'flex w-full min-w-0 flex-col gap-2 wrap-break-word group-data-[align=end]/message:items-end',
        className,
      )}
      {...props}
    />
  );
}

export function MessageFooter({ className, ...props }: ComponentProps<'div'>) {
  return (
    <div
      data-slot="message-footer"
      className={cn(
        'flex flex-wrap items-center gap-1 text-xs text-muted',
        className,
      )}
      {...props}
    />
  );
}
