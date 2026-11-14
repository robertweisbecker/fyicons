'use client';

import type { ReactNode } from 'react';
import { Accordion } from '@base-ui/react/accordion';
import IconChevronDown from 'fyicons/icons/IconChevronDown';

export function DocsAccordion({
  children,
  labelledBy,
}: {
  children: ReactNode;
  labelledBy: string;
}) {
  return (
    <Accordion.Root
      multiple
      keepMounted
      role="group"
      aria-labelledby={labelledBy}
      className="my-6 overflow-hidden rounded-xl border border-line bg-bg"
    >
      {children}
    </Accordion.Root>
  );
}

export function DocsAccordionItem({
  children,
  title,
  value,
}: {
  children: ReactNode;
  title: string;
  value: string;
}) {
  return (
    <Accordion.Item
      value={value}
      className="border-b border-line last:border-b-0"
    >
      <Accordion.Header data-not-typeset="" className="m-0 text-lg">
        <Accordion.Trigger className="group flex min-h-11 w-full touch-manipulation items-center justify-between gap-4 px-4 py-3 text-left font-medium hover:bg-hover focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-current">
          {title}
          <IconChevronDown className="shrink-0 text-muted transition-transform duration-150 ease-out group-data-panel-open:rotate-180 motion-reduce:transition-none" />
        </Accordion.Trigger>
      </Accordion.Header>
      <Accordion.Panel className="h-(--accordion-panel-height) overflow-hidden transition-[height] duration-150 ease-out data-ending-style:h-0 data-starting-style:h-0 motion-reduce:transition-none">
        <div className="px-4 pt-0 pb-4 [&>p:first-child]:mt-0">{children}</div>
      </Accordion.Panel>
    </Accordion.Item>
  );
}
