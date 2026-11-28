'use client';
import { NavigationMenu } from '@base-ui/react/navigation-menu';
import { IconChevronDownSm, IconMenuAlt, IconSlashSm } from 'fyicons';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import type { ReactNode } from 'react';
import { UIIcon } from '@/components/UIIcon';
import { Button } from '@/components/ui/button';
import { docsPages, mobileDocSections } from '@/lib/docs-navigation';
import { isSameRoute } from '@/lib/navigation';
import { useMediaQuery } from '@/lib/use-media-query';
import { cn } from '@/lib/utils';
import type { DocHeading } from './TableOfContents';
import {
  DocsNavigationPane,
  DocSectionLinks,
  docLinkClass,
} from './DocsNavigationPane';

// Shared popup motion and viewport sizing from Base UI's Tailwind Navigation Menu demo.
const splitMenuClasses = {
  positioner:
    "h-[var(--positioner-height)] w-[var(--positioner-width)] max-w-[var(--available-width)] transition-[top,left,right,bottom] duration-[var(--duration)] ease-[var(--easing)] before:absolute before:content-[''] data-instant:transition-none data-[side=bottom]:before:top-[-10px] data-[side=bottom]:before:right-0 data-[side=bottom]:before:left-0 data-[side=bottom]:before:h-2.5 data-[side=left]:before:top-0 data-[side=left]:before:right-[-10px] data-[side=left]:before:bottom-0 data-[side=left]:before:w-2.5 data-[side=right]:before:top-0 data-[side=right]:before:bottom-0 data-[side=right]:before:left-[-10px] data-[side=right]:before:w-2.5 data-[side=top]:before:right-0 data-[side=top]:before:bottom-[-10px] data-[side=top]:before:left-0 data-[side=top]:before:h-2.5",
  popup:
    'relative h-[var(--popup-height)] w-[var(--popup-width)] origin-[var(--transform-origin)] transition-[opacity,transform,width,height,scale] duration-[var(--duration)] ease-[var(--easing)] data-ending-style:scale-90 data-ending-style:opacity-0 data-ending-style:duration-150 data-ending-style:ease-[ease] data-starting-style:scale-90 data-starting-style:opacity-0',
  viewport: 'relative h-full w-full overflow-hidden',
  content:
    'h-full w-[calc(100vw-40px)] min-[500px]:w-max min-[500px]:max-w-[400px] transition-[opacity,transform,translate] duration-[var(--duration)] ease-[var(--easing)] data-starting-style:opacity-0 data-ending-style:opacity-0 data-starting-style:data-[activation-direction=left]:translate-x-[-50%] data-starting-style:data-[activation-direction=right]:translate-x-[50%] data-ending-style:data-[activation-direction=left]:translate-x-[50%] data-ending-style:data-[activation-direction=right]:translate-x-[-50%]',
};

function MenuItem({
  label,
  valueLabel,
  trigger,
  children,
}: {
  label: string;
  valueLabel: string;
  trigger: ReactNode;
  children: ReactNode;
}) {
  return (
    <NavigationMenu.Item className="min-w-0">
      <NavigationMenu.Trigger
        aria-label={label + ': ' + valueLabel}
        render={<Button variant="ghost" size="sm" />}
        className="max-w-full gap-1.5 text-[13px] data-popup-open:bg-hover"
      >
        {trigger}
      </NavigationMenu.Trigger>
      <NavigationMenu.Content
        className={cn(
          'grid max-h-[min(26rem,var(--available-height))] grid-rows-[minmax(0,1fr)]',
          splitMenuClasses.content,
          'motion-reduce:transition-none',
        )}
      >
        <DocsNavigationPane title={label}>
          <ul aria-label={label} className="space-y-0.5">
            {children}
          </ul>
        </DocsNavigationPane>
      </NavigationMenu.Content>
    </NavigationMenu.Item>
  );
}

export function DocsMobileNavigation({
  headings,
  active,
  onHeadingSelect,
}: {
  headings: DocHeading[];
  active: string | undefined;
  onHeadingSelect: (id: string) => void;
}) {
  const pathname = usePathname();
  const desktop = useMediaQuery('(width >= 64rem)');
  if (desktop) return null;
  const page = docsPages.find(({ href }) => isSameRoute(pathname, href));
  const { sections, current } = mobileDocSections(headings, active);
  const title = page?.title ?? 'Documentation';
  return (
    <NavigationMenu.Root
      aria-label="Documentation navigation"
      className="min-w-0 border-b border-line py-2 lg:hidden"
    >
      <NavigationMenu.List className="flex min-w-0 items-center">
        <MenuItem
          label="Documentation"
          valueLabel={title}
          trigger={
            <>
              <IconMenuAlt aria-hidden="true" className="shrink-0 text-muted" />
              <span className="truncate">{title}</span>
            </>
          }
        >
          {docsPages.map((item) => (
            <li key={item.href}>
              <NavigationMenu.Link
                active={item.href === page?.href}
                closeOnClick
                render={<Link href={item.href} prefetch={false} />}
                className={docLinkClass}
              >
                <UIIcon name={item.icon} className="shrink-0 text-muted" />
                {item.title}
              </NavigationMenu.Link>
            </li>
          ))}
        </MenuItem>
        {current && (
          <>
            <li aria-hidden="true" className="shrink-0 text-muted/60">
              <IconSlashSm />
            </li>
            <MenuItem
              label="On this page"
              valueLabel={current.title}
              trigger={
                <>
                  <span className="truncate">{current.title}</span>
                  <NavigationMenu.Icon className="shrink-0 text-muted transition-transform duration-200 ease-[ease] data-popup-open:rotate-180 motion-reduce:transition-none">
                    <IconChevronDownSm aria-hidden="true" />
                  </NavigationMenu.Icon>
                </>
              }
            >
              <DocSectionLinks
                sections={sections}
                activeId={current.id}
                onHeadingSelect={onHeadingSelect}
              />
            </MenuItem>
          </>
        )}
      </NavigationMenu.List>
      <NavigationMenu.Portal>
        <NavigationMenu.Positioner
          sideOffset={10}
          collisionPadding={{ top: 5, bottom: 5, left: 20, right: 20 }}
          collisionAvoidance={{ side: 'none' }}
          positionMethod="fixed"
          className={cn(
            splitMenuClasses.positioner,
            'z-70 [--duration:0.35s] [--easing:cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none',
          )}
        >
          <NavigationMenu.Popup
            aria-label="Documentation links"
            className={cn(
              splitMenuClasses.popup,
              'overflow-hidden rounded-xl bg-surface text-ink shadow-lg ring-1 ring-ink/10 motion-reduce:transition-none',
            )}
          >
            <NavigationMenu.Viewport className={splitMenuClasses.viewport} />
          </NavigationMenu.Popup>
        </NavigationMenu.Positioner>
      </NavigationMenu.Portal>
    </NavigationMenu.Root>
  );
}
