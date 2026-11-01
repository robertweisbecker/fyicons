import type { Metadata } from 'next';
import { Suspense } from 'react';
import { IconsBrowser } from '@/components/IconsBrowser';

export const metadata: Metadata = {
  title: 'Icons',
  description:
    'Search and browse FYIcons by category. Inspect, copy, or download icons for your project.',
};
export default function IconsPage() {
  return (
    <Suspense
      fallback={
        <p className="py-20 text-center text-sm text-muted">Loading icons…</p>
      }
    >
      <IconsBrowser />
    </Suspense>
  );
}
