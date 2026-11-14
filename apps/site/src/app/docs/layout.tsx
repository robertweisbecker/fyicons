import type { ReactNode } from 'react';
import { DocsSidebar } from '@/components/DocsSidebar';

export default function DocsLayout({ children }: { children: ReactNode }) {
  return (
    <div className="mx-auto min-h-[calc(100dvh-var(--site-header-height))] max-w-400 gap-6 px-4 pb-20 sm:px-6 lg:grid lg:grid-cols-[var(--sidebar-width)_minmax(0,1fr)_var(--sidebar-width)] lg:pt-4">
      <DocsSidebar />
      {children}
    </div>
  );
}
