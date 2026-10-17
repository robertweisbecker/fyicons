import { Icon } from './Icon';
import { BrandMark } from './BrandMark';
import { Button } from '@/components/ui/button';
import { IconButton } from '@/components/IconButton';
import { cn } from '../lib/utils';
import type { MouseEvent } from 'react';
import { githubHref, pageHref, type Page } from '../lib/navigation';

const navLinkClassName =
  'inline-flex min-h-7 items-center gap-1.5 rounded-full px-1.5 text-sm text-muted hover:bg-hover hover:text-ink aria-[current=page]:bg-hover aria-[current=page]:text-ink max-[360px]:text-xs sm:px-3';

export function SiteHeader({
  page,
  navigate,
  theme,
  toggleTheme,
  packing,
  download,
  search,
}: {
  page: Page;
  navigate: (page: Page, event: MouseEvent<HTMLAnchorElement>) => void;
  theme: string;
  toggleTheme: () => void;
  packing: boolean;
  download: () => void;
  search: () => void;
}) {
  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-30 border-b border-line bg-canvas pt-[env(safe-area-inset-top)]',
      )}
    >
      <div
        className={cn(
          'mx-auto flex h-14 max-w-400 items-center gap-2 pr-[max(.75rem,env(safe-area-inset-right))] pl-[max(.75rem,env(safe-area-inset-left))] max-[360px]:gap-1 max-[360px]:pr-[max(.5rem,env(safe-area-inset-right))] max-[360px]:pl-[max(.5rem,env(safe-area-inset-left))] sm:gap-6 sm:pr-[max(1.5rem,env(safe-area-inset-right))] sm:pl-[max(1.5rem,env(safe-area-inset-left))]',
        )}
      >
        <a
          className={cn(
            'flex shrink-0 items-center justify-center gap-2 text-sm font-semibold tracking-normal',
          )}
          aria-label="FYIcons home"
          href={pageHref('home')}
          onClick={(event) => navigate('home', event)}
        >
          <BrandMark className="shrink-0" />
          <span className="max-[400px]:hidden">fyicons</span>
        </a>
        <nav
          className={cn('flex flex-1 items-center sm:gap-1')}
          aria-label="Main"
        >
          {(['home', 'library', 'examples'] as const).map((item) => (
            <a
              key={item}
              href={pageHref(item)}
              onClick={(event) => navigate(item, event)}
              aria-current={page === item ? 'page' : undefined}
              className={cn(
                navLinkClassName,
                item === 'home' && 'max-sm:hidden',
              )}
            >
              {item === 'home'
                ? 'Overview'
                : item === 'library'
                  ? 'Library'
                  : 'Examples'}
            </a>
          ))}
          <a
            href={githubHref}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            title="GitHub"
            className={cn(navLinkClassName, 'shrink-0')}
          >
            <span className="hidden md:inline">GitHub</span>
            <Icon name="arrow-up-right" />
          </a>
        </nav>
        <div className={cn('flex shrink-0 items-center gap-1 sm:gap-2')}>
          <IconButton icon="search" label="Search all icons" onClick={search} />
          <IconButton
            icon={theme === 'dark' ? 'sun' : 'moon'}
            label={
              'Switch to ' + (theme === 'dark' ? 'light' : 'dark') + ' theme'
            }
            onClick={toggleTheme}
          />
          <Button
            variant="default"
            disabled={packing}
            onClick={download}
            aria-label={packing ? 'Preparing download' : 'Download'}
            className="hidden h-9 px-3 md:inline-flex"
          >
            <Icon name="download-square" />
            <span>{packing ? 'Preparing…' : 'Download'}</span>
          </Button>
        </div>
      </div>
    </header>
  );
}
