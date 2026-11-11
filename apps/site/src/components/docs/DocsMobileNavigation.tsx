'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import IconChevronDown from 'fyicons/icons/IconChevronDown';
import { Icon } from '@/components/Icon';
import { Button } from '@/components/ui/button';
import {
  Menu,
  MenuContent,
  MenuLinkItem,
  MenuTrigger,
} from '@/components/ui/menu';
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectGroup,
  SelectItem,
} from '@/components/ui/select';
import { docsNavigation } from '@/lib/docs-navigation';
import type { DocHeading } from './TableOfContents';

const pages = docsNavigation.flatMap(({ items }) => items);

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
  const page = pages.find(
    ({ href }) => href.replace(/\/$/, '') === pathname.replace(/\/$/, ''),
  );
  const mobileHeadings = headings.filter(({ level }) => level === 2);
  const activeIndex = headings.findIndex(({ id }) => id === active);
  let current = mobileHeadings[0];
  for (let index = 0; index <= activeIndex; index++) {
    if (headings[index].level === 2) current = headings[index];
  }
  return (
    <nav
      aria-label="Documentation navigation"
      className="docs-breadcrumbs lg:hidden"
    >
      <Menu>
        <MenuTrigger
          aria-label={`Documentation page: ${page?.title ?? 'Pages'}`}
          render={
            <Button
              variant="text"
              size="unstyled"
              className="docs-breadcrumb-trigger min-w-0 shrink"
            />
          }
        >
          <span key={page?.href} className="docs-breadcrumb-label">
            <span className="truncate">{page?.title ?? 'Pages'}</span>
            <IconChevronDown />
          </span>
        </MenuTrigger>
        <MenuContent aria-label="Documentation pages" className="w-72">
          {pages.map((item) => (
            <MenuLinkItem
              key={item.href}
              href={item.href}
              render={<Link href={item.href} />}
              aria-current={page?.href === item.href ? 'page' : undefined}
              closeOnClick
              size="lg"
              className={
                'nested' in item && item.nested === true ? 'ps-6' : undefined
              }
            >
              <Icon name={item.icon} className="text-muted" />
              {item.title}
            </MenuLinkItem>
          ))}
        </MenuContent>
      </Menu>
      {current && (
        <>
          <span aria-hidden="true" className="text-muted/50">
            /
          </span>
          <Select
            items={mobileHeadings.map(({ id, title }) => ({
              value: id,
              label: title,
            }))}
            value={current.id}
            onValueChange={(id) => {
              if (id !== null) onHeadingSelect(id);
            }}
          >
            <SelectTrigger
              variant="text"
              size="unstyled"
              aria-label={`On this page: ${current.title}`}
              className="docs-breadcrumb-trigger min-w-0 flex-1 shrink justify-start"
            >
              <SelectValue
                key={current.id}
                className="docs-breadcrumb-label truncate"
              />
            </SelectTrigger>
            <SelectContent aria-label="On this page" className="w-72">
              <SelectGroup>
                {mobileHeadings.map(({ id, title }) => (
                  <SelectItem key={id} value={id}>
                    {title}
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
        </>
      )}
    </nav>
  );
}
