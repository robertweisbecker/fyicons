import { useId, type ReactNode } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const themes = cva(
  'flex min-w-0 flex-col overflow-hidden rounded-2xl border border-line/80 bg-canvas text-ink scheme-light shadow-xs [--demo-success:var(--color-emerald-700)] [--demo-warning:var(--color-amber-700)] [--demo-info:var(--color-blue-700)] [--demo-danger:var(--color-rose-700)]',
  {
    variants: {
      tone: {
        neutral:
          '[--bg:var(--color-white)] [--surface:var(--color-neutral-50)] [--text:var(--color-neutral-900)] [--muted:var(--color-neutral-500)] [--border:var(--color-neutral-200)] [--hover:var(--color-neutral-100)]',
        mint: '[--bg:var(--color-emerald-50)] [--surface:var(--color-white)] [--text:var(--color-emerald-950)] [--muted:var(--color-emerald-700)] [--border:var(--color-emerald-200)] [--hover:var(--color-emerald-100)] [--control-accent:var(--color-emerald-600)]',
        blue: '[--bg:var(--color-sky-50)] [--surface:var(--color-white)] [--text:var(--color-sky-950)] [--muted:var(--color-sky-700)] [--border:var(--color-sky-200)] [--hover:var(--color-sky-100)] [--control-accent:var(--color-sky-600)]',
        lilac:
          '[--bg:var(--color-violet-50)] [--surface:var(--color-white)] [--text:var(--color-violet-950)] [--muted:var(--color-violet-600)] [--border:var(--color-violet-200)] [--hover:var(--color-violet-100)] [--control-accent:var(--color-violet-600)]',
        warm: '[--bg:var(--color-stone-50)] [--surface:var(--color-white)] [--text:var(--color-stone-900)] [--muted:var(--color-stone-500)] [--border:var(--color-stone-200)] [--hover:var(--color-stone-100)]',
        dark: 'scheme-dark [--bg:var(--color-slate-950)] [--surface:var(--color-slate-900)] [--text:var(--color-slate-100)] [--muted:var(--color-slate-400)] [--border:var(--color-slate-800)] [--hover:var(--color-slate-800)]',
      },
    },
    defaultVariants: { tone: 'neutral' },
  },
);
export function DemoCard({
  title,
  tone,
  className,
  children,
  contentClassName,
}: {
  title: string;
  className?: string;
  contentClassName?: string;
  children: ReactNode;
} & VariantProps<typeof themes>) {
  const id = useId();
  return (
    <article aria-labelledby={id} className={cn(themes({ tone }), className)}>
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
