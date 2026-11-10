'use client';

import { usePathname } from 'next/navigation';
import { Sidebar, SidebarItem, SidebarSection } from './Sidebar';
import { docsNavigation } from '@/lib/docs-navigation';

export function DocsSidebar() {
  const pathname = usePathname();
  const sections = docsNavigation.map(({ title, items }) => (
    <SidebarSection key={title} title={title}>
      {items.map((item) => (
        <SidebarItem
          key={item.href}
          href={item.href}
          icon={item.icon}
          active={pathname.replace(/\/$/, '') === item.href.replace(/\/$/, '')}
          nested={'nested' in item && item.nested === true}
        >
          {item.title}
        </SidebarItem>
      ))}
    </SidebarSection>
  ));
  return (
    <Sidebar aria-label="Documentation">
      <nav aria-label="Docs">{sections}</nav>
    </Sidebar>
  );
}
