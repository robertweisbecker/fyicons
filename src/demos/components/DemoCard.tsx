import { useId, type ReactNode } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const themes = cva(
  'flex min-w-0 flex-col overflow-hidden rounded-2xl border border-line bg-canvas text-ink scheme-light',
  {
    variants: {
      tone: {
        neutral:
          '[--bg:var(--color-white)] [--surface:var(--color-neutral-50)] [--text:var(--color-neutral-900)] [--muted:var(--color-neutral-500)] [--border:var(--color-neutral-200)] [--hover:var(--color-neutral-100)]',
        mint: '[--bg:var(--color-emerald-50)] [--surface:var(--color-white)] [--text:var(--color-emerald-950)] [--muted:var(--color-emerald-700)] [--border:var(--color-emerald-200)] [--hover:var(--color-emerald-100)] [--control-accent:var(--color-emerald-600)]',
        blue: '[--bg:var(--color-sky-50)] [--surface:var(--color-white)] [--text:var(--color-sky-950)] [--muted:var(--color-sky-700)] [--border:var(--color-sky-200)] [--hover:var(--color-sky-100)] [--control-accent:var(--color-sky-600)]',
        lilac:
          '[--bg:var(--color-violet-50)] [--surface:var(--color-white)] [--text:var(--color-violet-950)] [--muted:var(--color-violet-600)] [--border:var(--color-violet-200)] [--hover:var(--color-violet-100)] [--control-accent:var(--color-violet-600)]',
        warm: '[--bg:var(--color-amber-50)] [--surface:var(--color-white)] [--text:var(--color-stone-900)] [--muted:var(--color-stone-500)] [--border:var(--color-amber-200)] [--hover:var(--color-amber-100)]',
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
}: { title: string; className?: string; children: ReactNode } & VariantProps<
  typeof themes
>) {
  const id = useId();
  return (
    <article aria-labelledby={id} className={cn(themes({ tone }), className)}>
      <header className="px-6 pt-5 pb-4">
        <h2 id={id} className="text-sm font-medium text-muted">
          {title}
        </h2>
      </header>
      <div className="flex min-w-0 flex-1 flex-col px-6 pb-6">{children}</div>
    </article>
  );
}
