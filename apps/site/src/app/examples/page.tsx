import type { Metadata } from 'next';
import Bento from '@/demos/bento/Bento';

export const metadata: Metadata = {
  title: 'Examples',
  description: 'See FYIcons in menus, toolbars, and other interface examples.',
};
export default function ExamplesPage() {
  return <Bento />;
}
