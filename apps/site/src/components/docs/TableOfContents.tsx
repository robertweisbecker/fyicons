'use client';

import {
  useCallback,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
  type MouseEvent,
} from 'react';
import './docs-navigation.css';
import { usePathname } from 'next/navigation';
import { DocsMobileNavigation } from './DocsMobileNavigation';
import { isEditableTarget } from '@/lib/keyboard';

export type DocHeading = { id: string; title: string; level: number };

const SCROLL_SETTLE_MS = 150;
const scrollKeys = new Set([
  'ArrowUp',
  'ArrowDown',
  'PageUp',
  'PageDown',
  'Home',
  'End',
  ' ',
]);

function positionIndicator(list: HTMLUListElement, animate = false) {
  const link = list.querySelector<HTMLAnchorElement>(
    '[aria-current="location"]',
  );
  if (!link || !list.getClientRects().length) return;
  list.toggleAttribute('data-toc-animate', animate);
  list.style.setProperty('--toc-indicator-y', `${link.offsetTop}px`);
}

export function TableOfContents({ headings }: { headings: DocHeading[] }) {
  const pathname = usePathname();
  const [active, setActive] = useState<string | undefined>(headings[0]?.id);
  const list = useRef<HTMLUListElement>(null);
  const previous = useRef({ active, pathname });
  const selection = useRef<{ id: string; settling: boolean } | undefined>(
    undefined,
  );
  const frame = useRef(0);
  const settleTimer = useRef<number | undefined>(undefined);

  const finishSelection = useCallback(() => {
    if (!selection.current?.settling) return;
    window.clearTimeout(settleTimer.current);
    settleTimer.current = undefined;
    cancelAnimationFrame(frame.current);
    frame.current = 0;
    selection.current.settling = false;
    // Preserve the chosen highlight until a later scroll, even at the page bottom.
  }, []);

  const waitForQuiet = useCallback(() => {
    window.clearTimeout(settleTimer.current);
    settleTimer.current = window.setTimeout(finishSelection, SCROLL_SETTLE_MS);
  }, [finishSelection]);

  const selectSection = useCallback(
    (id: string) => {
      cancelAnimationFrame(frame.current);
      frame.current = 0;
      selection.current = { id, settling: true };
      setActive(id);
      waitForQuiet();
    },
    [waitForQuiet],
  );

  useLayoutEffect(() => {
    if (list.current)
      positionIndicator(
        list.current,
        previous.current.pathname === pathname &&
          previous.current.active !== active,
      );
    previous.current = { active, pathname };
  }, [active, pathname, headings]);

  useLayoutEffect(() => {
    const element = list.current;
    if (!element) return;
    const observer = new ResizeObserver(() => positionIndicator(element));
    observer.observe(element);
    return () => observer.disconnect();
  }, [headings]);

  useEffect(() => {
    selection.current = undefined;
    const sections = headings.flatMap(({ id }) => {
      const element = document.getElementById(id);
      return element ? [element] : [];
    });
    const update = () => {
      frame.current = 0;
      if (selection.current?.settling) return;
      selection.current = undefined;
      let current: string | undefined = sections[0]?.id;
      const padding =
        parseFloat(
          getComputedStyle(document.documentElement).scrollPaddingTop,
        ) || 0;
      for (const section of sections) {
        const offset =
          padding +
          (parseFloat(getComputedStyle(section).scrollMarginTop) || 0);
        if (section.getBoundingClientRect().top > offset + 1) break;
        current = section.id;
      }
      if (
        Math.ceil(window.scrollY + window.innerHeight) >=
        document.documentElement.scrollHeight - 1
      ) {
        current = sections.at(-1)?.id;
      }
      setActive(current);
    };
    const schedule = () => {
      if (!frame.current) frame.current = requestAnimationFrame(update);
    };
    const scroll = () => {
      if (selection.current?.settling) waitForQuiet();
      else schedule();
    };
    const resize = () => {
      finishSelection();
      schedule();
    };
    const selectHash = () => {
      let id = window.location.hash.slice(1);
      try {
        id = decodeURIComponent(id);
      } catch {
        // Keep literal percent signs in existing heading fragments usable.
      }
      if (!sections.some((section) => section.id === id)) return false;
      // A click's matching hash event can arrive after scrolling has settled.
      if (selection.current?.id !== id) selectSection(id);
      return true;
    };
    const hashChange = () => {
      if (!selectHash()) {
        finishSelection();
        schedule();
      }
    };
    const keyDown = (event: KeyboardEvent) => {
      if (
        !event.defaultPrevented &&
        scrollKeys.has(event.key) &&
        !isEditableTarget(event.target)
      )
        finishSelection();
    };
    if (!selectHash()) update();
    window.addEventListener('scroll', scroll, { passive: true });
    window.addEventListener('resize', resize);
    window.addEventListener('hashchange', hashChange);
    document.addEventListener('scrollend', finishSelection);
    window.addEventListener('wheel', finishSelection, { passive: true });
    window.addEventListener('touchmove', finishSelection, { passive: true });
    window.addEventListener('keydown', keyDown);
    return () => {
      window.clearTimeout(settleTimer.current);
      settleTimer.current = undefined;
      cancelAnimationFrame(frame.current);
      frame.current = 0;
      selection.current = undefined;
      window.removeEventListener('scroll', scroll);
      window.removeEventListener('resize', resize);
      window.removeEventListener('hashchange', hashChange);
      document.removeEventListener('scrollend', finishSelection);
      window.removeEventListener('wheel', finishSelection);
      window.removeEventListener('touchmove', finishSelection);
      window.removeEventListener('keydown', keyDown);
    };
  }, [headings, pathname, finishSelection, selectSection, waitForQuiet]);

  function selectHeading(id: string, event: MouseEvent<HTMLAnchorElement>) {
    if (
      event.defaultPrevented ||
      event.button !== 0 ||
      event.metaKey ||
      event.ctrlKey ||
      event.shiftKey ||
      event.altKey
    )
      return;
    selectSection(id);
  }

  const links = (
    <ul ref={list} className="docs-toc-list border-s-2 border-border">
      {headings.map(({ id, title, level }) => (
        <li key={id}>
          <a
            href={`#${id}`}
            aria-current={active === id ? 'location' : undefined}
            className="docs-toc-link"
            data-level={level}
            onClick={(event) => selectHeading(id, event)}
          >
            {title}
          </a>
        </li>
      ))}
    </ul>
  );
  return (
    <aside className="docs-toc">
      <DocsMobileNavigation
        headings={headings}
        active={active}
        onHeadingSelect={(id) => {
          selectSection(id);
          window.location.hash = encodeURIComponent(id);
        }}
      />
      <nav
        aria-label="On this page"
        className="hidden max-h-[inherit] overflow-y-auto overscroll-contain lg:block"
      >
        {links}
      </nav>
    </aside>
  );
}
