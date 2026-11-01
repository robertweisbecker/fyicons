'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import IconArrowUpRight from 'fyicons/icons/IconArrowUpRight';
import {
  githubHref,
  npmHref,
  siteNavigation,
  isActiveRoute,
} from '@/lib/navigation';
import { cn } from '@/lib/utils';

const linkClassName =
  'rounded-sm hover:text-ink focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-muted';

export function SiteFooter() {
  const pathname = usePathname();
  return (
    <footer
      className={cn(
        'mx-auto flex max-w-400 flex-col items-start justify-between gap-6 border-t border-line px-4 py-8 text-sm text-muted sm:flex-row sm:px-6',
        pathname === '/' && 'max-w-7xl',
      )}
    >
      <div className="shrink-0 space-y-2">
        <Link
          href="/"
          className={cn(linkClassName, 'font-medium tracking-tight text-ink')}
          aria-label="FYIcons home"
        >
          fyicons
        </Link>
        <p className="text-xs">
          Some icons for you, from{' '}
          <a
            href="https://bob.fyi"
            target="_blank"
            rel="noreferrer"
            className={cn(linkClassName, 'underline underline-offset-2')}
          >
            bob.fyi
          </a>
        </p>
      </div>
      <nav
        aria-label="Footer"
        className="grid w-full grid-cols-2 gap-x-5 gap-y-3 sm:flex sm:w-auto sm:flex-wrap sm:justify-end sm:gap-6"
      >
        {[{ href: '/', label: 'Home' }, ...siteNavigation].map(
          ({ href, label }) => (
            <Link
              key={href}
              href={href}
              aria-current={isActiveRoute(pathname, href) ? 'page' : undefined}
              className={linkClassName}
            >
              {label}
            </Link>
          ),
        )}
        <a
          href={githubHref}
          target="_blank"
          rel="noreferrer"
          className={cn(linkClassName, 'inline-flex items-center gap-1')}
        >
          GitHub
          <IconArrowUpRight size={14} />
        </a>
        <a
          href={npmHref}
          target="_blank"
          rel="noreferrer"
          className={cn(linkClassName, 'inline-flex items-center gap-1')}
        >
          NPM
          <IconArrowUpRight size={14} />
        </a>
      </nav>
    </footer>
  );
}
