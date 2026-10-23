import { useId, type ReactNode } from 'react';
import { cn } from '@/lib/utils';

export function DemoCard({
  title,
  className,
  children,
  contentClassName,
}: {
  title: string;
  className?: string;
  contentClassName?: string;
  children: ReactNode;
}) {
  const id = useId();
  return (
    <article
      aria-labelledby={id}
      className={cn(
        'flex min-w-0 flex-col overflow-hidden rounded-2xl bg-canvas text-ink shadow-xs outline-1 outline-offset-(--surface-outline-offset) outline-ink/10',
        className,
      )}
    >
      <header className="px-5 pt-5 pb-4 sm:px-6">
        <h2 id={id} className="text-sm font-medium text-muted">
          {title}
        </h2>
      </header>
      <div
        className={cn(
          'flex min-w-0 flex-1 flex-col px-5 pb-5 sm:px-6 sm:pb-6',
          contentClassName,
        )}
      >
        {children}
      </div>
    </article>
  );
}
