import type { MouseEvent } from 'react';
import { Icon } from '@/components/Icon';
import { githubHref, npmHref, pageHref, type Page } from '@/lib/navigation';
import { cn } from '@/lib/utils';

const linkClassName =
  'rounded-sm hover:text-ink focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-muted';

export function SiteFooter({
  page,
  navigate,
}: {
  page: Page;
  navigate: (page: Page, event: MouseEvent<HTMLAnchorElement>) => void;
}) {
  return (
    <footer
      className={cn(
        'mx-auto flex max-w-400 flex-col items-start justify-between gap-6 border-t border-line px-4 py-8 text-sm text-muted sm:flex-row sm:px-6',
        page === 'home' && 'max-w-7xl',
      )}
    >
      <div className="shrink-0 space-y-2">
        <a
          href={pageHref('home')}
          onClick={(event) => navigate('home', event)}
          className={cn(linkClassName, 'font-medium tracking-tight text-ink')}
          aria-label="FYIcons home"
        >
          fyicons
        </a>
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
        {(['home', 'library', 'examples'] as const).map((item) => (
          <a
            key={item}
            href={pageHref(item)}
            onClick={(event) => navigate(item, event)}
            aria-current={page === item ? 'page' : undefined}
            className={linkClassName}
          >
            {item === 'home'
              ? 'Home'
              : item === 'library'
                ? 'Library'
                : 'Examples'}
          </a>
        ))}
        <a
          href={githubHref}
          target="_blank"
          rel="noreferrer"
          className={cn(linkClassName, 'inline-flex items-center gap-1')}
        >
          GitHub
          <Icon name="arrow-up-right" size={14} />
        </a>
        <a
          href={npmHref}
          target="_blank"
          rel="noreferrer"
          className={cn(linkClassName, 'inline-flex items-center gap-1')}
        >
          NPM
          <Icon name="arrow-up-right" size={14} />
        </a>
      </nav>
    </footer>
  );
}
