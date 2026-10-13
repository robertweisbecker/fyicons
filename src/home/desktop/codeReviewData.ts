import type { ProjectFile } from '@/components/FileTree';

export const reviewChanges = [
  {
    path: 'src/components/ui/badge.tsx',
    before: ['<span className="rounded px-2">', '  {children}', '</span>'],
    after: ['<Badge variant="neutral">', '  {children}', '</Badge>'],
  },
  {
    path: 'src/components/CategorySidebar.tsx',
    before: ['<Icon name="folder" />', '<span>{category.name}</span>'],
    after: ['<Icon name={category.icon} />', '<span>{category.label}</span>'],
  },
  {
    path: 'src/components/Inspector.tsx',
    before: ['<div>{icon.name}</div>'],
    after: [
      '<div className="flex items-center gap-2">',
      '  <Icon name={icon.name} /> {icon.name}',
      '</div>',
    ],
  },
];

export const reviewFiles: ProjectFile[] = [
  ...reviewChanges.map(({ path }) => ({
    path,
    icon: 'atom-tilt',
    change: 'M',
  })),
  { path: 'docs/TODO.md', icon: 'markdown-fill' },
  { path: 'README.md', icon: 'markdown-fill' },
  { path: 'robots.txt', icon: 'file-text' },
];
