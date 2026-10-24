import { Icon } from './Icon';
import { BrandMark } from './BrandMark';
import { Button } from '@/components/ui/button';
import { IconButton } from '@/components/IconButton';
import { cn } from '../lib/utils';
import type { MouseEvent } from 'react';
import { githubHref, pageHref, type Page } from '../lib/navigation';

const navLinkClassName =
  'inline-flex min-h-7 items-center gap-1 rounded-full px-1.5 text-sm text-muted hover:bg-hover hover:text-ink aria-[current=page]:bg-hover aria-[current=page]:text-ink max-[360px]:text-xs sm:px-3';

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
        'fixed inset-x-0 top-0 z-30 border-b border-line bg-canvas/95 backdrop-blur-sm',
      )}
    >
      <div
        className={cn(
          'mx-auto flex h-14 max-w-400 items-center gap-2 px-3 max-[360px]:gap-1 max-[360px]:px-2 sm:gap-6 sm:px-6',
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
          {(['library', 'examples'] as const).map((item) => (
            <a
              key={item}
              href={pageHref(item)}
              onClick={(event) => navigate(item, event)}
              aria-current={page === item ? 'page' : undefined}
              className={navLinkClassName}
            >
              {item === 'library' ? 'Library' : 'Examples'}
            </a>
          ))}
        </nav>
        <div className={cn('flex shrink-0 items-center gap-1 sm:gap-2')}>
          <a
            href={githubHref}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            title="GitHub"
            className={cn(navLinkClassName, 'shrink-0')}
          >
            <svg
              width={16}
              height={16}
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8 0.0246735C12.42 0.0246735 16 3.60467 16 8.02467C16 9.70098 15.4741 11.3351 14.4964 12.6967C13.5187 14.0583 12.1384 15.0789 10.55 15.6147C10.15 15.6947 10 15.4447 10 15.2347C10 14.9647 10.01 14.1047 10.01 13.0347C10.01 12.2847 9.76 11.8047 9.47 11.5547C11.25 11.3547 13.12 10.6747 13.12 7.60467C13.12 6.72467 12.81 6.01467 12.3 5.45467C12.38 5.25467 12.66 4.43467 12.22 3.33467C12.22 3.33467 11.55 3.11467 10.02 4.15467C9.38 3.97467 8.7 3.88467 8.02 3.88467C7.34 3.88467 6.66 3.97467 6.02 4.15467C4.49 3.12467 3.82 3.33467 3.82 3.33467C3.38 4.43467 3.66 5.25467 3.74 5.45467C3.23 6.01467 2.92 6.73467 2.92 7.60467C2.92 10.6647 4.78 11.3547 6.56 11.5547C6.33 11.7547 6.12 12.1047 6.05 12.6247C5.59 12.8347 4.44 13.1747 3.72 11.9647C3.57 11.7247 3.12 11.1347 2.49 11.1447C1.82 11.1547 2.22 11.5247 2.5 11.6747C2.84 11.8647 3.23 12.5747 3.32 12.8047C3.48 13.2547 4 14.1147 6.01 13.7447C6.01 14.4147 6.02 15.0447 6.02 15.2347C6.02 15.4447 5.87 15.6847 5.47 15.6147C3.87664 15.0843 2.49073 14.0657 1.50889 12.7033C0.527047 11.3409 -0.000880479 9.70398 1.10231e-06 8.02467C1.10231e-06 3.60467 3.58 0.0246735 8 0.0246735Z"
                fill="currentColor"
              />
            </svg>
          </a>
          <a
            href="https://www.npmjs.com/package/fyicons"
            target="_blank"
            rel="noreferrer"
            aria-label="NPM"
            title="NPM"
            className={cn(navLinkClassName, 'shrink-0')}
          >
            <svg
              width={16}
              height={16}
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M13 1C14.1046 1 15 1.89543 15 3V13C15 14.1046 14.1046 15 13 15H3C1.89543 15 1 14.1046 1 13V3C1 1.89543 1.89543 1 3 1H13ZM4 12H8V6H10V12H12V4H4V12Z"
                fill="currentColor"
              />
            </svg>
          </a>
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
