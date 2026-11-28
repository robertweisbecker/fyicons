'use client';
import { NavigationMenu } from '@base-ui/react/navigation-menu';
import { IconMenuAlt, IconArrowRight } from 'fyicons';
import { useId, useSyncExternalStore } from 'react';
import { UIIcon, type UIIconName } from '@/components/UIIcon';
import { Button } from '@/components/ui/button';
import {
  DocsNavigationPane,
  docLinkClass,
} from '@/components/docs/DocsNavigationPane';

const pages = [
  {
    title: 'About',
    icon: 'info',
    description: 'FYIcons is a collection of icons drawn on a 16-pixel grid.',
    sections: ['Optimization', 'Updates and contributions', 'License'],
  },
  {
    title: 'Getting started',
    icon: 'book-open',
    description: 'Add icons to a React project or use the SVG files directly.',
    sections: ['React', 'SVG files'],
  },
  {
    title: 'Styling',
    icon: 'palette',
    description: 'Match icons to the color and size of the surrounding text.',
    sections: ['Color inheritance', 'Size'],
  },
  {
    title: 'React',
    icon: 'atom-react',
    description: 'Import individual icons as React components.',
    sections: [
      'Installation',
      'Usage',
      'Compose icons',
      'Using states & variants',
    ],
  },
  {
    title: 'Changelog',
    icon: 'note',
    description: 'New icons and changes in each release.',
    sections: [
      '0.7.0',
      '0.6.0',
      '0.5.3',
      '0.5.2',
      '0.5.1',
      '0.5.0',
      '0.4.2',
      '0.4.1',
      '0.4.0',
      '0.3.2',
      '0.3.1',
      '0.3.0',
      '0.2.1',
      '0.2.0',
      '0.1.0',
    ],
  },
  {
    title: 'License',
    icon: 'file-text',
    description: 'FYIcons is distributed under the MIT license.',
    sections: ['MIT license', 'Colophon'],
  },
] satisfies { icon: UIIconName; [key: string]: unknown }[];

type SamplePage = (typeof pages)[number];

function fragment(page: SamplePage, section?: string) {
  return (
    '#' +
    encodeURIComponent(page.title) +
    (section ? '/' + encodeURIComponent(section) : '')
  );
}

function subscribeToHash(onChange: () => void) {
  window.addEventListener('hashchange', onChange);
  return () => window.removeEventListener('hashchange', onChange);
}

function PagePreviews({
  page,
  current,
}: {
  page: SamplePage;
  current: string;
}) {
  const panelId = useId();
  return (
    <NavigationMenu.Root<string>
      orientation="vertical"
      defaultValue={page.title}
      className="grid min-h-0 min-w-0 grid-cols-[minmax(max-content,2fr)_minmax(0,3fr)] divide-x divide-line"
    >
      <DocsNavigationPane title="Pages">
        <NavigationMenu.List aria-label="Pages" className="space-y-0.5">
          {pages.map((item) => {
            const isCurrentPage = item === page;
            return (
              <NavigationMenu.Item key={item.title} value={item.title}>
                <NavigationMenu.Trigger
                  aria-controls={panelId}
                  aria-current={isCurrentPage ? 'page' : undefined}
                  className="flex min-h-8 w-full items-center gap-2 rounded-md px-2 py-1.5 text-start text-[13px] leading-snug whitespace-nowrap hover:bg-hover focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-focus aria-[current=page]:font-medium data-popup-open:bg-ink/8"
                >
                  <UIIcon name={item.icon} className="shrink-0 text-muted" />
                  {item.title}
                </NavigationMenu.Trigger>
                <NavigationMenu.Content className="flex min-h-0 flex-col">
                  <DocsNavigationPane
                    title={
                      <NavigationMenu.Link
                        href={fragment(item)}
                        closeOnClick
                        className="inline-flex items-center gap-1 rounded-sm hover:text-ink focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-focus"
                      >
                        {item.title}
                        <IconArrowRight
                          aria-hidden="true"
                          className="size-3 shrink-0"
                        />
                      </NavigationMenu.Link>
                    }
                  >
                    <ul
                      aria-label={'Sections for ' + item.title}
                      className="space-y-0.5"
                    >
                      {item.sections.map((section) => (
                        <li key={section}>
                          <NavigationMenu.Link
                            href={fragment(item, section)}
                            aria-current={
                              isCurrentPage && section === current
                                ? 'location'
                                : undefined
                            }
                            closeOnClick
                            className={docLinkClass}
                          >
                            {section}
                          </NavigationMenu.Link>
                        </li>
                      ))}
                    </ul>
                  </DocsNavigationPane>
                </NavigationMenu.Content>
              </NavigationMenu.Item>
            );
          })}
        </NavigationMenu.List>
      </DocsNavigationPane>
      <NavigationMenu.Viewport
        id={panelId}
        className="relative flex min-h-0 min-w-0 flex-col [&>div]:flex [&>div]:min-h-0 [&>div]:flex-col"
      />
    </NavigationMenu.Root>
  );
}

export function CombinedDocsNavigation() {
  const hash = useSyncExternalStore(
    subscribeToHash,
    () => window.location.hash,
    () => '',
  );
  const page =
    pages.find((item) => fragment(item) === hash.split('/')[0]) ?? pages[0];
  const current =
    page.sections.find((section) => fragment(page, section) === hash) ??
    page.sections[0];
  return (
    <div className="mx-auto max-w-2xl px-4 pb-16">
      <NavigationMenu.Root
        aria-label="Documentation navigation"
        className="sticky top-(--site-header-height) z-20 min-w-0 border-b border-line bg-canvas py-2"
      >
        <NavigationMenu.List>
          <NavigationMenu.Item>
            <NavigationMenu.Trigger
              render={<Button variant="ghost" size="sm" />}
              className="max-w-full gap-1 text-[13px] data-popup-open:bg-hover"
            >
              <IconMenuAlt className="hidden shrink-0 text-muted min-[360px]:block" />
              <span className="truncate">{page.title}</span>
              <span aria-hidden className="text-muted/50">
                /
              </span>
              <span className="truncate text-muted">{current}</span>
            </NavigationMenu.Trigger>
            <NavigationMenu.Content className="grid max-h-[min(26rem,var(--available-height))] w-96 max-w-(--available-width) grid-rows-[minmax(0,1fr)]">
              <PagePreviews page={page} current={current} />
            </NavigationMenu.Content>
          </NavigationMenu.Item>
        </NavigationMenu.List>
        <NavigationMenu.Portal>
          <NavigationMenu.Positioner
            align="start"
            sideOffset={6}
            collisionPadding={12}
            positionMethod="fixed"
            className="z-70 max-w-(--available-width)"
          >
            <NavigationMenu.Popup
              aria-label="Documentation links"
              className="relative origin-(--transform-origin) overflow-hidden rounded-xl bg-surface text-ink shadow-lg ring-1 ring-ink/10 motion-safe:transition-[opacity,scale] motion-safe:duration-150 motion-safe:data-ending-style:scale-98 motion-safe:data-ending-style:opacity-0 motion-safe:data-starting-style:scale-98 motion-safe:data-starting-style:opacity-0"
            >
              <NavigationMenu.Viewport className="relative h-full w-full overflow-hidden" />
            </NavigationMenu.Popup>
          </NavigationMenu.Positioner>
        </NavigationMenu.Portal>
      </NavigationMenu.Root>
      <article className="typeset typeset-docs pt-8">
        <h1 id={page.title}>{page.title}</h1>
        <p>{page.description}</p>
        <h2 id={page.title + '/' + current}>{current}</h2>
      </article>
    </div>
  );
}
