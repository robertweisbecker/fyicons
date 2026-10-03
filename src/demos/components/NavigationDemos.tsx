import { useState } from 'react';
import { Collapsible } from '@base-ui/react/collapsible';
import { Button } from '@/components/ui/button';
import { ToggleGroup } from '@/components/ui/toggle-group';
import { Toggle } from '@/components/ui/toggle';
import { ToggleIcon } from '@/components/ToggleIcon';
import { Icon } from '@/components/Icon';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';

export function FileExplorerDemo() {
  const [selected, setSelected] = useState('Button.tsx');
  return (
    <div className="flex flex-1 flex-col gap-4">
      <div className="flex items-center gap-2 font-medium">
        <Icon name="folder-open" />
        Interface kit<Badge variant="outline">5 files</Badge>
      </div>
      <nav
        aria-label="Project files"
        className="rounded-xl border border-line bg-surface p-2"
      >
        <Collapsible.Root defaultOpen>
          <Collapsible.Trigger className="group flex h-9 w-full items-center gap-2 rounded-lg px-2 text-sm hover:bg-hover">
            <Icon
              name="chevron-right-sm"
              className="group-data-panel-open:rotate-90"
            />
            <Icon name="folder" />
            src
          </Collapsible.Trigger>
          <Collapsible.Panel className="ml-4 border-l border-line pl-2">
            <Collapsible.Root defaultOpen>
              <Collapsible.Trigger className="group flex h-9 w-full items-center gap-2 rounded-lg px-2 text-sm hover:bg-hover">
                <Icon
                  name="chevron-right-sm"
                  className="group-data-panel-open:rotate-90"
                />
                <Icon name="folder" />
                components
              </Collapsible.Trigger>
              <Collapsible.Panel className="ml-4 border-l border-line pl-2">
                {['Button.tsx', 'Checkbox.tsx', 'Icon.tsx'].map((file) => (
                  <Button
                    key={file}
                    variant="ghost"
                    size="unstyled"
                    onClick={() => setSelected(file)}
                    aria-current={selected === file ? 'page' : undefined}
                    className={cn(
                      'flex h-9 w-full justify-start gap-2 px-2 text-sm font-normal',
                      selected === file && 'bg-current/10',
                    )}
                  >
                    <Icon name="file-code" />
                    {file}
                  </Button>
                ))}
              </Collapsible.Panel>
            </Collapsible.Root>
            <Button
              variant="ghost"
              className="w-full justify-start font-normal"
              onClick={() => setSelected('styles.css')}
            >
              <Icon name="file-code" />
              styles.css
            </Button>
          </Collapsible.Panel>
        </Collapsible.Root>
        <Button
          variant="ghost"
          className="w-full justify-start font-normal"
          onClick={() => setSelected('README.md')}
        >
          <Icon name="markdown" />
          README.md
        </Button>
      </nav>
      <p
        aria-live="polite"
        className="mt-auto flex items-center gap-2 text-xs text-muted"
      >
        <Icon name="file" />
        {selected}
      </p>
    </div>
  );
}
export function SidebarDemo() {
  const [value, setValue] = useState(['Inbox']);
  return (
    <nav
      aria-label="Workspace navigation"
      className="flex flex-1 flex-col gap-5"
    >
      <div className="flex items-center gap-2 font-semibold">
        <Icon name="component" />
        Workspace
      </div>
      <ToggleGroup
        orientation="vertical"
        value={value}
        onValueChange={(v) => v.length && setValue(v)}
        aria-label="Workspace section"
      >
        {[
          ['Inbox', 'inbox', 'inbox-2'],
          ['Projects', 'folder', 'folder-full'],
          ['Saved', 'bookmark', 'bookmark-fill'],
          ['People', 'users-two', 'users-two-fill'],
        ].map(([label, icon, activeIcon]) => (
          <Toggle
            key={label}
            value={label}
            className="w-full justify-start gap-3 px-3 font-normal"
          >
            <ToggleIcon icon={icon} activeIcon={activeIcon} />
            {label}
            {label === 'Inbox' && (
              <span className="ml-auto text-xs tabular-nums opacity-60">8</span>
            )}
          </Toggle>
        ))}
      </ToggleGroup>
      <Button
        variant="ghost"
        className="mt-auto w-fit text-muted"
        onClick={() => setValue(['Projects'])}
      >
        <Icon name="plus" />
        New project
      </Button>
    </nav>
  );
}
export function BreadcrumbsDemo() {
  const [path, setPath] = useState(['Workspace', 'Design system', 'Icons']);
  return (
    <div className="flex flex-1 flex-col justify-center gap-6">
      <nav aria-label="Document breadcrumb">
        <ol className="flex flex-wrap items-center gap-1 text-sm">
          {path.map((part, i) => (
            <li key={part} className="flex items-center gap-1">
              {i > 0 && <Icon name="chevron-right-sm" className="text-muted" />}
              {i === path.length - 1 ? (
                <span aria-current="page" className="px-2 font-medium">
                  {part}
                </span>
              ) : (
                <Button
                  variant="ghost"
                  onClick={() => setPath(path.slice(0, i + 1))}
                >
                  <Icon name={i === 0 ? 'home' : 'folder'} />
                  {part}
                </Button>
              )}
            </li>
          ))}
        </ol>
      </nav>
      <div className="flex items-center gap-2 text-xs text-muted">
        <Icon name="git-branch" />
        main<span className="opacity-40">/</span>
        <Icon name="lock" />
        Private
        {path.length < 3 && (
          <Button
            variant="text"
            size="sm"
            onClick={() => setPath(['Workspace', 'Design system', 'Icons'])}
          >
            Reset
          </Button>
        )}
      </div>
    </div>
  );
}
