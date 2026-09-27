import { Icon } from './Icon';
import { Button, IconButton } from './ui';
import { cn } from '../lib/utils';
import type { MouseEvent } from 'react';
import { pageHref, type Page } from '../lib/navigation';

export function SiteHeader({
  page,
  navigate,
  theme,
  toggleTheme,
  packing,
  download,
}: {
  page: Page;
  navigate: (page: Page, event: MouseEvent<HTMLAnchorElement>) => void;
  theme: string;
  toggleTheme: () => void;
  packing: boolean;
  download: () => void;
}) {
  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-30 border-b border-line bg-canvas/95 backdrop-blur-sm',
      )}
    >
      <div
        className={cn(
          'mx-auto flex h-14 max-w-400 items-center gap-2 px-3 sm:gap-6 sm:px-6',
        )}
      >
        <a
          className={cn(
            'flex shrink-0 items-center gap-2 text-base font-semibold tracking-normal',
          )}
          href={pageHref('library')}
          onClick={(event) => navigate('library', event)}
        >
          <Icon name="asterisk-star" className="hidden min-[400px]:block" />
          FYIcons
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
              className={cn(
                'inline-flex min-h-9 items-center rounded-md px-1.5 text-sm text-muted hover:bg-hover hover:text-ink aria-[current=page]:bg-hover aria-[current=page]:text-ink sm:px-3 pointer-coarse:min-h-11',
              )}
            >
              {item === 'library' ? 'Icons' : 'Examples'}
            </a>
          ))}
        </nav>
        <div className={cn('flex shrink-0 items-center gap-1 sm:gap-2')}>
          <IconButton
            icon={theme === 'dark' ? 'sun' : 'moon'}
            label={
              'Switch to ' + (theme === 'dark' ? 'light' : 'dark') + ' theme'
            }
            onClick={toggleTheme}
            className="pointer-coarse:size-11"
          />
          <Button
            variant="primary"
            disabled={packing}
            onClick={download}
            aria-label={packing ? 'Preparing download' : 'Download'}
            className="size-9 p-0 sm:w-auto sm:px-3 pointer-coarse:size-11"
          >
            <Icon name="download-square" />
            <span className="hidden sm:inline">
              {packing ? 'Preparing…' : 'Download'}
            </span>
          </Button>
        </div>
      </div>
    </header>
  );
}
