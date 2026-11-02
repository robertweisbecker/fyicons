import type { ProjectFile } from '@/components/FileTree';

export const reviewChanges = [
  {
    path: 'src/components/ui/copy-button.tsx',
    before: ["import { Copy, Check } from 'lucide-react';"],
    after: [
      'import {',
      '  IconCopy as Copy,',
      '  IconCheck as Check,',
      "} from 'fyicons';",
    ],
  },
  {
    path: 'src/components/CategorySidebar.tsx',
    before: ["import { Folder, ChevronRight } from 'lucide-react';"],
    after: [
      'import {',
      '  IconFolder as Folder,',
      '  IconChevronRight as ChevronRight,',
      "} from 'fyicons';",
    ],
  },
  {
    path: 'src/components/Inspector.tsx',
    before: ["import { Copy, Download } from 'lucide-react';"],
    after: [
      'import {',
      '  IconCopy as Copy,',
      '  IconDownload as Download,',
      "} from 'fyicons';",
    ],
  },
];

export const reviewFiles: ProjectFile[] = [
  ...reviewChanges.map(({ path }) => ({
    path,
    icon: 'atom-react',
    change: 'M',
  })),
  { path: 'docs/TODO.md', icon: 'markdown-fill' },
  { path: 'README.md', icon: 'markdown-fill' },
  { path: 'robots.txt', icon: 'file-text' },
];
