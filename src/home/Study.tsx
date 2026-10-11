import { type ReactNode } from 'react';
import { Icon } from '@/components/Icon';
import { cn } from '@/lib/utils';
import { Badge } from '@/components/ui/badge';

export const panel =
  'rounded-xl bg-surface text-muted shadow-md ring ring-current/5 dark:ring-current/20';

export function Study({
  name,
  id,
  className,
  children,
}: {
  name: string;
  id: string;
  className?: string;
  children: ReactNode;
}) {
  return (
    <section
      aria-label={`${name} example`}
      data-example-id={id}
      className={cn(
        'relative grid w-full min-w-0 flex-1 justify-items-center gap-2 self-stretch rounded-2xl bg-inset p-4',
        className,
      )}
    >
      {children}
    </section>
  );
}

/** Decorative controls in the static Figma specimens stay out of the tab order. */
export function Glyph({
  name,
  className,
  size = 16,
}: {
  name: string;
  className?: string;
  size?: number;
}) {
  return (
    <span
      className={cn(
        'inline-flex size-6 shrink-0 items-center justify-center',
        className,
      )}
    >
      <Icon name={name} size={size} />
    </span>
  );
}
