import { useState, type ReactNode } from 'react';
import { Collapsible } from '@base-ui/react/collapsible';
import { Button } from '@/components/ui/button';
import { ToggleGroup } from '@/components/ui/toggle-group';
import { Toggle } from '@/components/ui/toggle';
import { ToggleIcon } from '@/components/ToggleIcon';
import { Icon } from '@/components/Icon';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { cn } from '@/lib/utils';
import { icons } from '@/lib/catalog';
import { CopyButton, DemoIconButton } from './DemoControls';

function Folder({
  name,
  open,
  onOpenChange,
  children,
}: {
  name: string;
  open: boolean;
  onOpenChange: (open: boolean) => void;
  children: ReactNode;
}) {
  return (
    <Collapsible.Root open={open} onOpenChange={onOpenChange}>
      <Collapsible.Trigger className="flex min-h-9 w-full items-center gap-2 rounded-lg px-2 text-sm hover:bg-current/5 pointer-coarse:min-h-11">
        <Icon
          name="chevron-right-sm"
          className={cn('text-muted', open && 'rotate-90')}
        />
        <Icon name={open ? 'folder-open' : 'folder'} />
        {name}
      </Collapsible.Trigger>
      <Collapsible.Panel className="ml-4 border-l border-line pl-2">
        {children}
      </Collapsible.Panel>
    </Collapsible.Root>
  );
}
const filePaths: Record<string, string> = {
  'Button.tsx': 'src/components/Button.tsx',
  'Checkbox.tsx': 'src/components/Checkbox.tsx',
  'Icon.tsx': 'src/components/Icon.tsx',
  'styles.css': 'src/styles.css',
  'cover.png': 'assets/cover.png',
  'logo.svg': 'assets/logo.svg',
  'README.md': 'README.md',
};
const files = [
  ['Button.tsx', 'file-code', 'M'],
  ['Checkbox.tsx', 'file-code', ''],
  ['Icon.tsx', 'file-code', 'A'],
] as const;
export function FileExplorerDemo() {
  const [selected, setSelected] = useState('Button.tsx');
  const [openFolders, setOpenFolders] = useState(['src', 'components']);
  const allOpen = openFolders.length > 0;
  const folderState = (name: string) => ({
    open: openFolders.includes(name),
    onOpenChange: (open: boolean) =>
      setOpenFolders((previous) =>
        open ? [...previous, name] : previous.filter((item) => item !== name),
      ),
  });
  const row = (name: string, icon: string, change = '') => (
    <Button
      key={name}
      variant="ghost"
      size="unstyled"
      onClick={() => setSelected(name)}
      aria-current={selected === name ? 'page' : undefined}
      className={cn(
        'flex min-h-9 w-full justify-start gap-2 rounded-lg px-2 text-sm font-normal pointer-coarse:min-h-11',
        selected === name && 'bg-current/10',
      )}
    >
      <Icon name={icon} />
      <span className="truncate">{name}</span>
      {change && <span className="ml-auto text-xs text-muted">{change}</span>}
    </Button>
  );
  return (
    <div className="flex flex-1 flex-col gap-4">
      <div className="flex items-center gap-2">
        <Icon name="git-branch" />
        <span className="text-sm font-medium">interface-kit</span>
        <span className="ml-auto text-xs text-muted">main</span>
        <DemoIconButton
          label={allOpen ? 'Collapse folders' : 'Expand folders'}
          icon={allOpen ? 'arrows-compress' : 'arrows-expand'}
          onClick={() =>
            setOpenFolders(allOpen ? [] : ['src', 'components', 'assets'])
          }
        />
      </div>
      <nav
        aria-label="Project files"
        className="min-h-68 rounded-xl border border-line bg-surface p-2"
      >
        <div>
          <Folder name="src" {...folderState('src')}>
            <Folder name="components" {...folderState('components')}>
              {files.map(([name, icon, change]) => row(name, icon, change))}
            </Folder>
            {row('styles.css', 'paint-bucket')}
          </Folder>
          <Folder name="assets" {...folderState('assets')}>
            {row('cover.png', 'file-image')}
            {row('logo.svg', 'vector-path')}
          </Folder>
          {row('README.md', 'markdown')}
        </div>
      </nav>
      <div className="mt-auto flex min-w-0 items-center gap-2 text-xs text-muted">
        <Icon name="file" />
        <span className="min-w-0 flex-1 truncate" aria-live="polite">
          {selected}
        </span>
        <CopyButton
          label="Copy file path"
          getText={() => 'interface-kit/' + filePaths[selected]}
        />
      </div>
    </div>
  );
}
export function SidebarDemo() {
  const [value, setValue] = useState(['Inbox']);
  const [projects, setProjects] = useState(['Website', 'Design system']);
  const [projectsOpen, setProjectsOpen] = useState(true);
  return (
    <nav
      aria-label="Workspace navigation"
      className="flex flex-1 flex-col gap-4"
    >
      <div className="flex items-center gap-3">
        <div className="grid size-9 place-items-center rounded-xl bg-ink text-canvas">
          <Icon name="asterisk" />
        </div>
        <div>
          <p className="text-sm font-semibold">Studio</p>
          <p className="text-xs text-muted">Personal workspace</p>
        </div>
        <DemoIconButton
          className="ml-auto"
          label="Add project"
          icon="plus"
          onClick={() => {
            setProjects((p) => [...p, `Untitled ${p.length - 1}`]);
            setProjectsOpen(true);
          }}
        />
      </div>
      <ToggleGroup
        orientation="vertical"
        value={value}
        onValueChange={(v) => v.length && setValue(v)}
        aria-label="Workspace section"
      >
        {[
          ['Inbox', 'inbox', 'inbox-2', '8'],
          ['Today', 'calendar', 'calendar-alt', '3'],
          ['Saved', 'bookmark', 'bookmark-fill', ''],
          ['People', 'users-two', 'users-two-fill', ''],
        ].map(([label, icon, active, count]) => (
          <Toggle
            key={label}
            value={label}
            className="min-h-9 w-full justify-start gap-3 px-3 font-normal pointer-coarse:min-h-11"
          >
            <ToggleIcon icon={icon} activeIcon={active} />
            {label}
            <span className="ml-auto text-xs text-muted tabular-nums">
              {count}
            </span>
          </Toggle>
        ))}
      </ToggleGroup>
      <Collapsible.Root open={projectsOpen} onOpenChange={setProjectsOpen}>
        <Collapsible.Trigger className="flex h-9 w-full items-center gap-2 text-xs text-muted pointer-coarse:h-11">
          <Icon name={projectsOpen ? 'folder-open' : 'folder'} />
          Projects
          <Icon
            name={projectsOpen ? 'chevron-down-sm' : 'chevron-right-sm'}
            className="ml-auto"
          />
        </Collapsible.Trigger>
        <Collapsible.Panel className="max-h-32 overflow-auto">
          <ToggleGroup
            orientation="vertical"
            value={value}
            onValueChange={(v) => v.length && setValue(v)}
            aria-label="Project navigation"
          >
            {projects.map((name, i) => (
              <Toggle
                key={name}
                value={name}
                className="min-h-9 w-full justify-start gap-3 px-3 font-normal pointer-coarse:min-h-11"
              >
                <Icon
                  name={i === 0 ? 'globe' : i === 1 ? 'component' : 'folder'}
                />
                <span className="truncate">{name}</span>
              </Toggle>
            ))}
          </ToggleGroup>
        </Collapsible.Panel>
      </Collapsible.Root>
      <div className="mt-auto flex items-center gap-2 pt-2">
        <Avatar className="size-7 bg-current/10">
          <AvatarFallback className="text-xs">JD</AvatarFallback>
        </Avatar>
        <span className="text-xs">Jamie Davis</span>
        <DemoIconButton
          label="Workspace settings"
          icon="settings-small"
          className="ml-auto"
          onClick={() => setValue(['Settings'])}
        />
        <span className="sr-only" role="status">
          {value[0]} selected
        </span>
      </div>
    </nav>
  );
}
const crumbs = ['Workspace', 'Design system', 'Icons'];
export function BreadcrumbsDemo() {
  const [depth, setDepth] = useState(3);
  return (
    <div className="flex flex-1 flex-col gap-5">
      <nav aria-label="Document breadcrumb">
        <ol className="flex flex-wrap items-center gap-1 text-sm">
          {crumbs.slice(0, depth).map((part, i) => (
            <li key={part} className="flex items-center gap-1">
              {i > 0 && <Icon name="chevron-right-sm" className="text-muted" />}
              {i === depth - 1 ? (
                <span aria-current="page" className="px-2 font-medium">
                  {part}
                </span>
              ) : (
                <Button
                  variant="ghost"
                  className="pointer-coarse:min-h-11"
                  onClick={() => setDepth(i + 1)}
                >
                  <Icon name={i === 0 ? 'home-simple' : 'folder'} />
                  {part}
                </Button>
              )}
            </li>
          ))}
        </ol>
      </nav>
      <div className="flex items-center gap-3 rounded-xl border border-line bg-surface p-4">
        <Icon name={depth === 3 ? 'component' : 'folder-open'} />
        <div className="min-w-0 flex-1">
          <p className="text-sm font-medium">{crumbs[depth - 1]}</p>
          <p className="mt-1 text-xs text-muted">
            {depth === 3 ? `${icons.length} components` : 'Project folder'}
          </p>
        </div>
        {depth < 3 ? (
          <DemoIconButton
            label="Open Icons folder"
            icon="arrow-right"
            onClick={() => setDepth(3)}
          />
        ) : (
          <CopyButton
            label="Copy location"
            getText={() => '/workspace/design-system/icons'}
          />
        )}
      </div>
    </div>
  );
}
