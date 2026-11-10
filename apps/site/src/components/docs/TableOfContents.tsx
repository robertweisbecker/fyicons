'use client';

import {
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
  type MouseEvent,
} from 'react';
import './docs-navigation.css';
import { usePathname } from 'next/navigation';
import { DocsMobileNavigation } from './DocsMobileNavigation';

export type DocHeading = { id: string; title: string; level: number };

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
  const pendingTarget = useRef<string | undefined>(undefined);

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
    pendingTarget.current = undefined;
    const sections = headings.flatMap(({ id }) => {
      const element = document.getElementById(id);
      return element ? [element] : [];
    });
    let frame = 0;
    const update = () => {
      frame = 0;
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
      // Keep click selection stable while smooth scrolling passes other sections.
      if (pendingTarget.current && current !== pendingTarget.current) return;
      pendingTarget.current = undefined;
      setActive(current);
    };
    const schedule = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    const releaseSelection = () => {
      pendingTarget.current = undefined;
      schedule();
    };
    const hashChange = () => {
      if (
        window.location.hash !==
        `#${encodeURIComponent(pendingTarget.current ?? '')}`
      )
        pendingTarget.current = undefined;
      schedule();
    };
    const interrupt = () => {
      if (pendingTarget.current) releaseSelection();
    };
    const interruptions = ['wheel', 'pointerdown', 'keydown'] as const;
    update();
    window.addEventListener('scroll', schedule, { passive: true });
    window.addEventListener('resize', releaseSelection);
    window.addEventListener('hashchange', hashChange);
    document.addEventListener('scrollend', releaseSelection);
    for (const event of interruptions)
      window.addEventListener(event, interrupt, { passive: true });
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener('scroll', schedule);
      window.removeEventListener('resize', releaseSelection);
      window.removeEventListener('hashchange', hashChange);
      document.removeEventListener('scrollend', releaseSelection);
      for (const event of interruptions)
        window.removeEventListener(event, interrupt);
    };
  }, [headings, pathname]);

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
    pendingTarget.current = id;
    setActive(id);
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
        onHeadingSelect={selectHeading}
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
