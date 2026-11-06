'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import IconSunFill from 'fyicons/icons/IconSunFill';
import IconMoon from 'fyicons/icons/IconMoon';
import IconBeaker from 'fyicons/icons/IconBeaker';
import packageInfo from 'fyicons/package.json' with { type: 'json' };
import { BrandWordmark, BrandWordmarkMobile } from './BrandWordmark';
import { GitHubIcon, NpmIcon } from './BrandIcons';
import { Badge } from '@/components/ui/badge';
import { Button, buttonVariants } from '@/components/ui/button';
import { Tooltip, TooltipGroup } from '@/components/ui/tooltip';
import { cn } from '../lib/utils';
import {
  githubHref,
  npmHref,
  siteNavigation,
  isActiveRoute,
} from '../lib/navigation';

const isDevelopment = process.env.NODE_ENV === 'development';

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
}: {
  theme: string;
  toggleTheme: () => void;
}) {
  const pathname = usePathname();
  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-40 border-b border-line bg-canvas pt-[env(safe-area-inset-top)]',
      )}
    >
      <div
        className={cn(
          'flex h-14 w-full items-center gap-0.5 pr-[max(.5rem,env(safe-area-inset-right))] pl-[max(.5rem,env(safe-area-inset-left))] sm:gap-6 sm:pr-[max(1.5rem,env(safe-area-inset-right))] sm:pl-[max(1.5rem,env(safe-area-inset-left))]',
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
          <BrandWordmark className="hidden sm:block" />
          <BrandWordmarkMobile className="sm:hidden" />
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
          {isDevelopment && (
            <Tooltip label="Prototypes">
              <Link
                href="/prototypes/"
                aria-label="Prototypes"
                aria-current={
                  isActiveRoute(pathname, '/prototypes/') ? 'page' : undefined
                }
                className={cn(
                  buttonVariants({
                    variant: isActiveRoute(pathname, '/prototypes/')
                      ? 'neutral'
                      : 'ghost',
                  }),
                  'rounded-full max-sm:size-9 max-sm:p-0',
                )}
              >
                <IconBeaker className="sm:hidden" />
                <span className="max-sm:hidden">Prototypes</span>
              </Link>
            </Tooltip>
          )}
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
