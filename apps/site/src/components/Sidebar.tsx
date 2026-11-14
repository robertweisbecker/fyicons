'use client';

import { Button } from '@base-ui/react/button';
import Link from 'next/link';
import type { ComponentProps, ReactNode } from 'react';
import { Icon } from '@/components/Icon';
import { cn } from '@/lib/utils';

export function Sidebar({
  className,
  children,
  ...props
}: ComponentProps<'aside'>) {
  return (
    <aside
      {...props}
      className={cn(
        'sticky top-[calc(var(--site-header-height)+1rem)] hidden max-h-[calc(100dvh-var(--site-header-height)-2rem)] w-(--sidebar-width) shrink-0 self-start overflow-y-auto overscroll-contain pt-4 pr-4 pl-1 lg:block',
        className,
      )}
    >
      {children}
    </aside>
  );
}

export function SidebarSection({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <div className="mb-7">
      <h2 className="mb-3 ps-2.5 text-xs text-muted">{title}</h2>
      <div className="flex flex-col gap-px">{children}</div>
    </div>
  );
}

type ItemProps = {
  active?: boolean;
  nested?: boolean;
  icon?: string | ReactNode;
  children: ReactNode;
  'aria-label'?: string;
} & (
  { href: string; onClick?: () => void } | { href?: never; onClick: () => void }
);

export function SidebarItem({
  active,
  nested,
  icon,
  children,
  href,
  ...props
}: ItemProps) {
  const className = cn(
    'flex min-h-8 w-full items-center gap-2 rounded-md px-2 py-1.5 text-start text-xs text-ink/72 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus',
    active ? 'bg-active text-ink' : 'hover:bg-hover hover:text-ink',
    nested && 'ps-6',
  );
  const content = (
    <>
      {typeof icon === 'string' ? (
        <Icon name={icon} className={cn('text-muted', active && 'text-ink')} />
      ) : (
        icon
      )}
      {children}
    </>
  );
  return href ? (
    <Link
      {...props}
      href={href}
      aria-current={active ? 'page' : undefined}
      className={className}
    >
      {content}
    </Link>
  ) : (
    <Button {...props} aria-pressed={active} className={className}>
      {content}
    </Button>
  );
}
