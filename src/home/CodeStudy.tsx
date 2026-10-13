import { useState } from 'react';
import { Collapsible } from '@base-ui/react/collapsible';
import { Icon } from '@/components/Icon';
import { DemoToggle } from '@/demos/components/DemoControls';
import { cn } from '@/lib/utils';
import { Glyph, panel } from './Study';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

const files = [
  ['file.js', 'file-code', 'square-minus', 'text-red-500'],
  ['file.jsx', 'atom', 'square-plus', 'text-emerald-600'],
  ['file.jsx', 'atom', 'git-modified', 'text-orange-500'],
] as const;

export function CodeStudy() {
  const [open, setOpen] = useState(true);
  return (
    <div className={cn(panel, 'w-full overflow-hidden')}>
      <div className="flex flex-wrap items-center gap-1 border-b border-line p-3 text-xs">
        <Button variant="ghost" size="sm">
          <Icon name="book-bookmark" />
          fyicons
        </Button>
        <Icon name="slash" className="text-border" />
        <div className="flex items-center gap-px">
          <Button
            variant="neutral"
            size="xs"
            className="rounded-lg rounded-e-sm"
          >
            <Icon name="git-branch" />
            main
          </Button>
          <Button
            variant="neutral"
            size="icon-xs"
            aria-label="Branch options"
            className="rounded-lg rounded-s-sm"
          >
            <Icon name="chevron-down-sm" />
          </Button>
        </div>
        <div className="ml-auto flex items-center gap-2">
          <Glyph name="search" className="text-muted" />
          <DemoToggle
            label="Show source files"
            icon="folder-view"
            activeIcon="folder-view-fill"
            size="icon-sm"
            pressed={open}
            onPressedChange={setOpen}
            className="data-pressed:bg-selection data-pressed:text-control-accent"
          />
          <DemoToggle label="Show changes" icon="diff" size="icon-sm" />
        </div>
      </div>
      <div className="min-h-60 p-2 text-sm">
        <Collapsible.Root open={open} onOpenChange={setOpen}>
          <Collapsible.Trigger className="flex h-8 w-full items-center gap-2 rounded-lg px-2 hover:bg-hover">
            <Icon name={open ? 'caret-down' : 'caret-right'} />
            <Icon
              name={open ? 'folder-open-fill' : 'folder-fill'}
              className="text-control-accent"
            />
            src
            <Icon name="square-dot" className="ml-auto text-control-accent" />
          </Collapsible.Trigger>
          <Collapsible.Panel>
            {files.map(([name, icon, change, color], index) => (
              <div
                key={index}
                className="flex h-8 items-center gap-2 pr-2 pl-14"
              >
                <Icon
                  name={icon}
                  className={
                    icon === 'atom' ? 'text-control-accent' : 'text-ink'
                  }
                />
                <span className="flex-1">{name}</span>
                <Icon name={change} className={color} />
              </div>
            ))}
          </Collapsible.Panel>
        </Collapsible.Root>
        <div className="flex h-8 items-center gap-2 px-2">
          <Icon name="caret-right" />
          <Icon name="folder-fill" className="text-control-accent" />
          docs
        </div>
        <div className="flex h-8 items-center gap-2 px-8">
          <Icon name="markdown-fill" className="text-muted" />
          README.md
        </div>
        <div className="flex h-8 items-center gap-2 px-8">
          <Icon name="file-text" className="text-muted" />
          robots.txt
        </div>
      </div>
      <div className="flex flex-wrap gap-2 border-t border-line p-3 text-sm">
        {[
          ['agent', 'Ask'],
          ['bug-1', 'Review'],
          ['git-pull-request', 'Create PR'],
        ].map(([icon, label]) => (
          <span
            key={label}
            className="inline-flex h-7 items-center gap-1 rounded-md bg-current/5 px-2"
          >
            <Icon name={icon} />
            {label}
          </span>
        ))}
      </div>
    </div>
  );
}
