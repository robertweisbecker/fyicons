'use client';

import { useRouter } from 'next/navigation';
import { useEffect, useRef, useState, type ReactNode } from 'react';
import { flushSync } from 'react-dom';
import { SiteHeader } from './SiteHeader';
import { SiteFooter } from './SiteFooter';
import { GlobalSearch } from './Search';
import { SearchTriggerContext } from './SearchTrigger';
import { ToastProvider } from './ui/toast';
import { TooltipProvider } from './ui/tooltip';
import { usePreference } from '@/lib/preferences';
import { isEditableTarget } from '@/lib/keyboard';

const isTheme = (value: unknown): value is 'light' | 'dark' =>
  value === 'light' || value === 'dark';

export function SiteShell({ children }: { children: ReactNode }) {
  const router = useRouter();
  const [theme, setTheme] = usePreference<'light' | 'dark'>(
    'fyicons-theme-v1',
    'light',
    isTheme,
  );
  const [searchOpen, setSearchOpen] = useState(false);
  const input = useRef<HTMLInputElement>(null);
  const returnFocus = useRef<HTMLElement>(null);

  function openSearch(trigger?: HTMLElement) {
    const focused = trigger ?? document.activeElement;
    returnFocus.current =
      focused instanceof HTMLElement && focused !== document.body
        ? focused
        : null;
    // Mount the input inside the tap gesture so mobile browsers can show the keyboard.
    flushSync(() => setSearchOpen(true));
    input.current?.focus({ preventScroll: true });
  }

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    document
      .querySelector('meta[name="theme-color"]')
      ?.setAttribute('content', theme === 'dark' ? '#0a0a0a' : '#f5f5f5');
  }, [theme]);

  useEffect(() => {
    const key = (event: KeyboardEvent) => {
      if (event.defaultPrevented || isEditableTarget(event.target)) return;
      const shortcut =
        (event.metaKey || event.ctrlKey) && event.key.toLowerCase() === 'k';
      const slash =
        event.key === '/' && !event.metaKey && !event.ctrlKey && !event.altKey;
      if (!shortcut && !slash) return;
      event.preventDefault();
      if (shortcut && searchOpen) setSearchOpen(false);
      else openSearch();
    };
    document.addEventListener('keydown', key);
    return () => document.removeEventListener('keydown', key);
  });

  return (
    <ToastProvider>
      <TooltipProvider delay={350} closeDelay={100}>
        <div id="site-root" className="pt-(--site-header-height)">
          <a
            href="#main-content"
            onClick={(event) => {
              event.preventDefault();
              document.getElementById('main-content')?.focus();
            }}
            className="sr-only fixed top-2 left-2 z-80 rounded bg-ink px-4 py-3 text-canvas focus:not-sr-only"
          >
            Skip to content
          </a>
          <SiteHeader
            theme={theme}
            toggleTheme={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
          />
          <GlobalSearch
            open={searchOpen}
            onOpenChange={setSearchOpen}
            inputRef={input}
            returnFocusRef={returnFocus}
            select={(icon) =>
              router.push(`/icons/?icon=${encodeURIComponent(icon.name)}`)
            }
          />
          <main id="main-content" tabIndex={-1}>
            <SearchTriggerContext value={openSearch}>
              {children}
            </SearchTriggerContext>
          </main>
          <SiteFooter />
        </div>
      </TooltipProvider>
    </ToastProvider>
  );
}
