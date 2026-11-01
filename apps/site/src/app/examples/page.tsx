import type { Metadata } from 'next';
import Examples from '@/demos/Examples';

export const metadata: Metadata = {
  title: 'Examples',
  description: 'See FYIcons in menus, toolbars, and other interface examples.',
};
export default function ExamplesPage() {
  return (
    <div className="mx-auto max-w-400 px-4 pb-10 sm:px-6">
      <Examples />
    </div>
  );
}
