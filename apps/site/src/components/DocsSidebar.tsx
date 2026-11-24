'use client';

import { Fragment } from 'react';
import { usePathname } from 'next/navigation';
import { Sidebar, SidebarItem, SidebarSection } from './Sidebar';
import { docsNavigation } from '@/lib/docs-navigation';

export function DocsSidebar() {
  const pathname = usePathname();
  const sections = docsNavigation.map(({ title, items }) => (
    <SidebarSection key={title} title={title}>
      {items.map((item) => (
        <Fragment key={item.href}>
          {'separatorBefore' in item && item.separatorBefore && (
            <hr className="my-3 border-border" />
          )}
          <SidebarItem
            href={item.href}
            icon={item.icon}
            active={
              pathname.replace(/\/$/, '') === item.href.replace(/\/$/, '')
            }
            nested={'nested' in item && item.nested === true}
          >
            {item.title}
          </SidebarItem>
        </Fragment>
      ))}
    </SidebarSection>
  ));
  return (
    <Sidebar aria-label="Documentation">
      <nav aria-label="Docs">{sections}</nav>
    </Sidebar>
  );
}
