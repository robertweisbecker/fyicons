'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import IconSearch from 'fyicons/icons/IconSearch';
import IconSunFill from 'fyicons/icons/IconSunFill';
import IconMoon from 'fyicons/icons/IconMoon';
import packageInfo from 'fyicons/package.json' with { type: 'json' };
import { BrandWordmark, BrandWordmarkMobile } from './BrandWordmark';
import { GitHubIcon, NpmIcon } from './BrandIcons';
import { Badge } from '@/components/ui/badge';
import { Button, buttonVariants } from '@/components/ui/button';
import { Tooltip, TooltipGroup } from '@/components/ui/tooltip';
import { cn } from '../lib/utils';
import type { MouseEvent } from 'react';
import {
  githubHref,
  npmHref,
  siteNavigation,
  isActiveRoute,
} from '../lib/navigation';
import { IconKbdCommand, IconKbdCommandSmall } from 'fyicons';

const iconLinkClassName = cn(
  buttonVariants({ variant: 'ghost', size: 'icon' }),
  'hidden md:inline-flex',
);

// Keep Examples reachable while temporarily omitting it from the header.
const headerNavigation = siteNavigation.filter(
  ({ href }) => href !== '/examples/',
);

export function SiteHeader({
  theme,
  toggleTheme,
  search,
}: {
  theme: string;
  toggleTheme: () => void;
  search: (event: MouseEvent<HTMLButtonElement>) => void;
}) {
  const pathname = usePathname();
  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-30 border-b border-line bg-canvas pt-[env(safe-area-inset-top)]',
      )}
    >
      <div
        className={cn(
          'flex h-14 w-full items-center gap-1 pr-[max(.75rem,env(safe-area-inset-right))] pl-[max(.75rem,env(safe-area-inset-left))] max-[360px]:gap-0.5 max-[360px]:pr-[max(.5rem,env(safe-area-inset-right))] max-[360px]:pl-[max(.5rem,env(safe-area-inset-left))] sm:gap-6 sm:pr-[max(1.5rem,env(safe-area-inset-right))] sm:pl-[max(1.5rem,env(safe-area-inset-left))]',
        )}
      >
        <Link
          className={cn(
            buttonVariants({ variant: 'unstyled', size: 'unstyled' }),
            'gap-2 text-sm',
          )}
          aria-label="FYIcons home"
          href="/"
        >
          <BrandWordmark className="hidden min-[480px]:block" />
          <BrandWordmarkMobile className="min-[480px]:hidden" />
          <Badge
            variant="outline"
            size="sm"
            className="font-mono max-md:hidden"
          >
            v{packageInfo.version}
          </Badge>
        </Link>
        <nav
          className={cn('flex min-w-0 flex-1 items-center justify-end gap-1')}
          aria-label="Main"
        >
          <Button
            variant="neutral"
            aria-label="Search all icons"
            aria-keyshortcuts="Meta+K Control+K"
            className="me-2 rounded-full font-normal"
            onClick={search}
          >
            <IconSearch className="-ms-1" />
            <span className="text-muted">Search</span>
            <kbd
              aria-hidden="true"
              className="ms-3 -me-1 inline-flex items-center gap-0.5 rounded-full bg-none px-1.5 py-px font-normal max-md:hidden"
            >
              <IconKbdCommand size={'1em'} />
              <span>K</span>
            </kbd>
          </Button>
          {headerNavigation.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              aria-current={isActiveRoute(pathname, href) ? 'page' : undefined}
              className={cn(
                buttonVariants({
                  variant: isActiveRoute(pathname, href) ? 'neutral' : 'ghost',
                }),
                'rounded-full max-sm:min-h-9',
              )}
            >
              {label}
            </Link>
          ))}
        </nav>
        <div className={cn('flex shrink-0 items-center gap-1 sm:gap-2')}>
          <TooltipGroup side="bottom">
            <span
              aria-hidden="true"
              className="hidden h-4 w-px shrink-0 bg-ink/30 md:block"
            />
            <Tooltip label="GitHub">
              <a
                href={githubHref}
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className={iconLinkClassName}
              >
                <GitHubIcon />
              </a>
            </Tooltip>
            <Tooltip label="NPM">
              <a
                href={npmHref}
                target="_blank"
                rel="noreferrer"
                aria-label="NPM"
                className={iconLinkClassName}
              >
                <NpmIcon />
              </a>
            </Tooltip>
            <span
              aria-hidden="true"
              className="hidden h-4 w-px shrink-0 bg-ink/30 md:block"
            />
            <Tooltip label={`${theme === 'dark' ? 'Light' : 'Dark'} mode`}>
              <Button
                aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`}
                variant="ghost"
                size="icon"
                className="max-sm:size-9"
                onClick={toggleTheme}
              >
                {theme === 'dark' ? <IconSunFill /> : <IconMoon />}
              </Button>
            </Tooltip>
          </TooltipGroup>
        </div>
      </div>
    </header>
  );
}
