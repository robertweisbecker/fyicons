import { Collapsible } from '@base-ui/react/collapsible';
import { createIconLookup } from '@/components/createIconLookup';

import { Button } from './ui/button';
import { cn } from '@/lib/utils';

import Glyph0 from 'fyicons/icons/IconAtomReact';
import Glyph1 from 'fyicons/icons/IconChevronDownSm';
import Glyph2 from 'fyicons/icons/IconChevronRightSm';
import Glyph3 from 'fyicons/icons/IconFolder';
import Glyph4 from 'fyicons/icons/IconFolderFill';
import Glyph5 from 'fyicons/icons/IconFolderOpen';
import Glyph6 from 'fyicons/icons/IconFolderOpenFill';
import Glyph7 from 'fyicons/icons/IconGhost';
import Glyph8 from 'fyicons/icons/IconLetterM';
import Glyph9 from 'fyicons/icons/IconMarkdownFill';
import Glyph10 from 'fyicons/icons/IconPage';
import Glyph11 from 'fyicons/icons/IconSquareDot';
import Glyph12 from 'fyicons/icons/IconTextTitle';
import Glyph13 from 'fyicons/icons/IconTextTitleFill';
import Glyph14 from 'fyicons/icons/IconFileText';
const Icon = createIconLookup({
  'atom-react': { Component: Glyph0, id: '360:11316' },
  'chevron-down-sm': { Component: Glyph1, id: '142:6351' },
  'chevron-right-sm': { Component: Glyph2, id: '142:6353' },
  folder: { Component: Glyph3, id: '102:4392' },
  'folder-fill': { Component: Glyph4, id: '741:7685' },
  'folder-open': { Component: Glyph5, id: '102:4393' },
  'folder-open-fill': { Component: Glyph6, id: '741:7694' },
  ghost: { Component: Glyph7, id: '727:314' },
  'letter-m': { Component: Glyph8, id: '732:4681' },
  'markdown-fill': { Component: Glyph9, id: '666:353' },
  page: { Component: Glyph10, id: '820:11209' },
  'square-dot': { Component: Glyph11, id: '732:4593' },
  text: { Component: Glyph12, id: '58:9540' },
  'text-fill': { Component: Glyph13, id: '1084:12366' },
  'file-text': { Component: Glyph14, id: '102:5434' },
});

export type ProjectFile = { path: string; icon: string; change?: string };
export const fileIconColors: Record<string, string> = {
  atom: 'text-sky-400',
  'atom-react': 'text-sky-400',
  'markdown-fill': 'text-zinc-500',
};
type Node = {
  name: string;
  path: string;
  children: Node[];
  file?: ProjectFile;
};

export function fileFolders(files: readonly ProjectFile[]) {
  return [
    ...new Set(
      files.flatMap(({ path }) => {
        const parts = path.split('/').slice(0, -1);
        return parts.map((_, index) => parts.slice(0, index + 1).join('/'));
      }),
    ),
  ];
}

function fileNodes(files: readonly ProjectFile[]) {
  const root: Node = { name: '', path: '', children: [] };
  for (const file of files) {
    let parent = root;
    for (const name of file.path.split('/')) {
      let node = parent.children.find((child) => child.name === name);
      if (!node) {
        node = {
          name,
          path: parent.path ? `${parent.path}/${name}` : name,
          children: [],
        };
        parent.children.push(node);
      }
      parent = node;
    }
    parent.file = file;
  }
  return root.children;
}

export function FileTree({
  files,
  selected,
  onSelect,
  openFolders,
  onOpenFoldersChange,
  compact = false,
}: {
  files: readonly ProjectFile[];
  selected: string;
  onSelect: (path: string) => void;
  openFolders: string[];
  onOpenFoldersChange: (folders: string[]) => void;
  compact?: boolean;
}) {
  const changedFolders = new Set(
    fileFolders(files.filter((file) => file.change)),
  );
  const row = (file: ProjectFile) => (
    <Button
      key={file.path}
      variant="ghost"
      size={compact ? 'sm' : 'default'}
      aria-label={file.path}
      aria-description={file.change === 'M' ? 'Modified' : undefined}
      aria-current={selected === file.path ? 'page' : undefined}
      title={file.path}
      onClick={() => onSelect(file.path)}
      className={cn(
        'w-full min-w-0 justify-start gap-2 px-2 font-normal',
        selected === file.path && 'bg-current/10',
      )}
    >
      <span className="size-4 shrink-0" aria-hidden />
      <Icon name={file.icon} className={fileIconColors[file.icon]} />
      <span className="min-w-0 flex-1 truncate text-left">
        {file.path.split('/').at(-1)}
      </span>
      {file.change === 'M' ? (
        <Icon name="letter-m" className="text-muted" />
      ) : (
        file.change && <span className="text-xs text-muted">{file.change}</span>
      )}
    </Button>
  );
  const render = (node: Node) => {
    if (node.file) return row(node.file);
    const open = openFolders.includes(node.path);
    return (
      <Collapsible.Root
        key={node.path}
        open={open}
        onOpenChange={(next) =>
          onOpenFoldersChange(
            next
              ? [...openFolders, node.path]
              : openFolders.filter((path) => path !== node.path),
          )
        }
      >
        <Collapsible.Trigger
          className={cn(
            'flex w-full min-w-0 items-center gap-2 px-2 text-left hover:bg-current/5 focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-muted',
            compact ? 'h-7 rounded-md text-xs' : 'min-h-9 rounded-lg text-sm',
          )}
          aria-label={`${node.path} folder`}
          aria-description={
            changedFolders.has(node.path) ? 'Contains changed files' : undefined
          }
        >
          <Icon
            name={open ? 'chevron-down-sm' : 'chevron-right-sm'}
            className="text-muted"
          />
          <Icon
            name={open ? 'folder-open' : 'folder'}
            className="text-blue-500"
          />
          <span className="min-w-0 flex-1 truncate">{node.name}</span>
          {changedFolders.has(node.path) && (
            <Icon name="square-dot" className="text-muted" />
          )}
        </Collapsible.Trigger>
        <Collapsible.Panel
          className={
            compact
              ? 'ml-2 border-l border-line pl-2'
              : 'ml-4 border-l border-line pl-2'
          }
        >
          {node.children.map(render)}
        </Collapsible.Panel>
      </Collapsible.Root>
    );
  };
  return <div>{fileNodes(files).map(render)}</div>;
}
