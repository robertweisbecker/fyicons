'use client';

import { useEffect, useId, useState } from 'react';
import { Button } from '@/components/ui/button';
import './docs-navigation.css';
import { usePathname } from 'next/navigation';
import IconChevronDown from 'fyicons/icons/IconChevronDown';
import { cn } from '@/lib/utils';

export type DocHeading = { id: string; title: string; level: number };

export function TableOfContents({ headings }: { headings: DocHeading[] }) {
  const pathname = usePathname();
  const [active, setActive] = useState<string | undefined>(headings[0]?.id);
  const [open, setOpen] = useState(false);
  const navigationId = useId();

  useEffect(() => {
    setOpen(false);
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
      setActive(current);
    };
    const schedule = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    update();
    window.addEventListener('scroll', schedule, { passive: true });
    window.addEventListener('resize', schedule);
    window.addEventListener('hashchange', schedule);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener('scroll', schedule);
      window.removeEventListener('resize', schedule);
      window.removeEventListener('hashchange', schedule);
    };
  }, [headings, pathname]);

  if (!headings.length) return null;
  const current = headings.find(({ id }) => id === active) ?? headings[0];
  const links = (
    <ul className="border-s-2 border-border">
      {headings.map(({ id, title, level }) => (
        <li key={id}>
          <a
            href={`#${id}`}
            aria-current={active === id ? 'location' : undefined}
            className="docs-toc-link"
            data-level={level}
            onClick={() => {
              setActive(id);
              setOpen(false);
            }}
          >
            {title}
          </a>
        </li>
      ))}
    </ul>
  );
  return (
    <aside className="sticky top-(--site-header-height) z-20 -mx-4 self-start bg-canvas px-4 lg:top-[calc(var(--site-header-height)+2rem)] lg:col-start-3 lg:row-start-1 lg:mx-0 lg:mt-7 lg:max-h-[calc(100dvh-var(--site-header-height)-4rem)] lg:bg-transparent lg:px-0 lg:pt-0">
      <Button
        variant="unstyled"
        size="unstyled"
        aria-expanded={open}
        aria-controls={navigationId}
        className="flex min-h-12 w-full items-center justify-start gap-3 border-b border-line text-sm lg:hidden"
        onClick={() => setOpen(!open)}
      >
        <span className="shrink-0">On this page</span>
        <span className="min-w-0 flex-1 truncate text-start text-xs text-muted">
          {current.title}
        </span>
        <IconChevronDown className={cn('shrink-0', open && 'rotate-180')} />
      </Button>
      <nav
        id={navigationId}
        aria-label="On this page"
        className={cn(
          'max-h-[min(60dvh,24rem)] overflow-y-auto overscroll-contain pt-1 pb-4 lg:block lg:max-h-[inherit] lg:py-0',
          !open && 'hidden',
        )}
      >
        {links}
      </nav>
    </aside>
  );
}
