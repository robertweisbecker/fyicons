'use client';

import { usePathname } from 'next/navigation';
import { useRef } from 'react';
import IconChevronDown from 'fyicons/icons/IconChevronDown';
import { Sidebar, SidebarItem, SidebarSection } from './Sidebar';
import { docsNavigation } from '@/lib/docs-navigation';

export function DocsSidebar() {
  const pathname = usePathname();
  const mobileMenu = useRef<HTMLDetailsElement>(null);
  const sections = docsNavigation.map(({ title, items }) => (
    <SidebarSection key={title} title={title}>
      {items.map((item) => (
        <SidebarItem
          key={item.href}
          href={item.href}
          icon={item.icon}
          active={pathname.replace(/\/$/, '') === item.href.replace(/\/$/, '')}
          nested={'nested' in item && item.nested === true}
          onClick={() => {
            if (mobileMenu.current) mobileMenu.current.open = false;
          }}
        >
          {item.title}
        </SidebarItem>
      ))}
    </SidebarSection>
  ));
  return (
    <>
      <Sidebar aria-label="Documentation">
        <nav aria-label="Docs">{sections}</nav>
      </Sidebar>
      <details
        ref={mobileMenu}
        className="group border-b border-line py-2 lg:hidden"
      >
        <summary className="flex min-h-9 cursor-pointer list-none items-center justify-between text-sm font-medium [&::-webkit-details-marker]:hidden">
          Documentation
          <IconChevronDown className="group-open:rotate-180" />
        </summary>
        <nav aria-label="Docs" className="pt-5 pb-1 [&_a]:min-h-9">
          {sections}
        </nav>
      </details>
    </>
  );
}
