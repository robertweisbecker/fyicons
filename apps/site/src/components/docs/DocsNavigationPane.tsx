'use client';
import { NavigationMenu } from '@base-ui/react/navigation-menu';
import type { ReactNode } from 'react';
import { ScrollArea } from '@/components/ui/scroll-area';
import type { DocSection } from '@/lib/docs-navigation';
export const docLinkClass =
  'flex min-h-8 items-center gap-2 rounded-md px-2 py-1.5 text-[13px] leading-snug hover:bg-hover focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-focus aria-[current]:bg-ink/8 aria-[current]:font-medium';

export function DocsNavigationPane({
  title,
  children,
}: {
  title: ReactNode;
  children: ReactNode;
}) {
  return (
    <div className="flex min-h-0 min-w-0 flex-col">
      <p className="shrink-0 px-4 pt-3 pb-1.5 text-xs font-medium text-muted">
        {title}
      </p>
      <ScrollArea.Root className="flex min-h-0 flex-col">
        <ScrollArea.Viewport tabIndex={-1} className="overscroll-contain">
          <ScrollArea.Content className="min-w-0! px-2 pb-2">
            {children}
          </ScrollArea.Content>
        </ScrollArea.Viewport>
        <ScrollArea.Scrollbar />
      </ScrollArea.Root>
    </div>
  );
}

export function DocSectionLinks({
  sections,
  activeId,
  onHeadingSelect,
}: {
  sections: DocSection[];
  activeId?: string;
  onHeadingSelect: (id: string) => void;
}) {
  return sections.map(({ id, title }) => {
    const fragment = '#' + encodeURIComponent(id);
    return (
      <NavigationMenu.Item key={id}>
        <NavigationMenu.Link
          href={fragment}
          aria-current={id === activeId ? 'location' : undefined}
          closeOnClick
          className={docLinkClass}
          onClick={(event) => {
            if (
              event.button !== 0 ||
              event.metaKey ||
              event.ctrlKey ||
              event.shiftKey ||
              event.altKey
            )
              return;
            event.preventDefault();
            onHeadingSelect(id);
          }}
        >
          {title}
        </NavigationMenu.Link>
      </NavigationMenu.Item>
    );
  });
}
