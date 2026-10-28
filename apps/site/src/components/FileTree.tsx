import { Collapsible } from '@base-ui/react/collapsible';
import { Icon } from './Icon';
import { Button } from './ui/button';
import { cn } from '@/lib/utils';

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
  const row = (file: ProjectFile) => (
    <Button
      key={file.path}
      variant="ghost"
      size={compact ? 'sm' : 'default'}
      aria-label={file.path}
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
      {file.change && <span className="text-xs text-muted">{file.change}</span>}
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
        >
          <Icon
            name={open ? 'chevron-down-sm' : 'chevron-right-sm'}
            className="text-muted"
          />
          <Icon
            name={open ? 'folder-open' : 'folder'}
            className="text-blue-500"
          />
          <span className="truncate">{node.name}</span>
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
