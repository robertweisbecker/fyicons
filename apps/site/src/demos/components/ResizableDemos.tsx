import { useId, useState } from 'react';
import { usePanelRef } from 'react-resizable-panels';
import { Icon } from '@/components/Icon';
import { Button } from '@/components/ui/button';
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from '@/components/ui/resizable';
import { cn } from '@/lib/utils';

const workspaceIcons = [
  'heart-alt',
  'star',
  'bookmark',
  'bell-2',
  'sun-lg',
  'moon',
  'chat',
  'cloud-check',
] as const;

export function ResizableWorkspaceDemo() {
  const id = useId();
  const sidebar = usePanelRef();
  const [collapsed, setCollapsed] = useState(false);
  const [selected, setSelected] = useState<string>('star');
  return (
    <div className="flex flex-1 flex-col gap-3">
      <div className="flex h-72 flex-col overflow-hidden rounded-xl border border-line bg-surface">
        <header className="flex h-11 shrink-0 items-center gap-2 border-b border-line px-2">
          <Button
            variant="ghost"
            size="icon-sm"
            aria-label={
              collapsed
                ? 'Expand workspace sidebar'
                : 'Collapse workspace sidebar'
            }
            aria-expanded={!collapsed}
            aria-controls={`${id}-sidebar`}
            onClick={() => {
              if (sidebar.current?.isCollapsed()) sidebar.current.expand();
              else sidebar.current?.collapse();
            }}
          >
            <Icon name={collapsed ? 'panel-left-closed' : 'panel-left'} />
          </Button>
          <span className="text-xs font-medium">Icon workspace</span>
        </header>
        <ResizablePanelGroup
          orientation="horizontal"
          className="min-h-0 flex-1"
        >
          <ResizablePanel
            id={`${id}-sidebar`}
            panelRef={sidebar}
            defaultSize="26%"
            minSize="22%"
            maxSize="40%"
            collapsible
            collapsedSize={48}
            onResize={(size) => setCollapsed(size.inPixels <= 49)}
            className="overflow-auto bg-canvas p-2"
          >
            <div className="flex flex-col gap-1 text-xs text-muted">
              {[
                ['folder', 'All icons'],
                ['star', 'Favorites'],
                ['clock', 'Recent'],
              ].map(([icon, label], index) => (
                <div
                  key={label}
                  title={collapsed ? label : undefined}
                  className={cn(
                    'flex min-h-8 items-center gap-2 rounded-md px-2',
                    index === 0 && 'bg-selection text-ink',
                  )}
                >
                  <Icon name={icon} />
                  {!collapsed && <span className="truncate">{label}</span>}
                </div>
              ))}
            </div>
          </ResizablePanel>
          <ResizableHandle withHandle aria-label="Resize workspace sidebar" />
          <ResizablePanel
            defaultSize="46%"
            minSize="30%"
            className="overflow-auto p-3"
          >
            <h3 className="mb-3 text-xs font-medium">All icons</h3>
            <div className="grid grid-cols-[repeat(auto-fit,minmax(2.75rem,1fr))] gap-2">
              {workspaceIcons.map((name) => (
                <Button
                  key={name}
                  variant="ghost"
                  size="unstyled"
                  aria-label={`Preview ${name}`}
                  aria-pressed={selected === name}
                  onClick={() => setSelected(name)}
                  className="h-11 rounded-lg border border-line"
                >
                  <Icon name={name} />
                </Button>
              ))}
            </div>
          </ResizablePanel>
          <ResizableHandle withHandle aria-label="Resize workspace details" />
          <ResizablePanel
            defaultSize="28%"
            minSize="20%"
            className="overflow-auto p-3"
          >
            <h3 className="mb-3 text-xs font-medium">Details</h3>
            <div className="flex min-h-20 items-center justify-center rounded-lg bg-canvas">
              <Icon name={selected} size={32} />
            </div>
            <p className="mt-3 text-xs font-medium wrap-break-word">
              {selected}
            </p>
            <p className="mt-1 text-xs text-muted">16 × 16 px</p>
          </ResizablePanel>
        </ResizablePanelGroup>
      </div>
      <p className="text-xs text-muted">
        Drag either divider, or focus it and use the arrow keys.
      </p>
    </div>
  );
}

export function ResizableStackDemo() {
  return (
    <div className="flex flex-1 flex-col gap-3">
      <div className="h-72 overflow-hidden rounded-xl border border-line bg-surface">
        <ResizablePanelGroup orientation="vertical">
          <ResizablePanel
            defaultSize="65%"
            minSize="35%"
            maxSize="80%"
            className="overflow-auto p-4"
          >
            <h3 className="text-xs font-medium">Preview</h3>
            <div className="flex min-h-20 items-center justify-center gap-5 py-5 text-muted">
              <Icon name="sun-lg" size={24} />
              <Icon name="moon" size={24} />
              <Icon name="cloud-check" size={24} />
            </div>
          </ResizablePanel>
          <ResizableHandle
            withHandle
            aria-label="Resize preview and properties"
          />
          <ResizablePanel
            defaultSize="35%"
            minSize="20%"
            className="overflow-auto bg-canvas p-4"
          >
            <h3 className="mb-3 text-xs font-medium">Properties</h3>
            <dl className="grid grid-cols-2 gap-x-4 gap-y-2 text-xs">
              <dt className="text-muted">Size</dt>
              <dd className="text-right">16 × 16 px</dd>
              <dt className="text-muted">Stroke</dt>
              <dd className="text-right">1 px</dd>
            </dl>
          </ResizablePanel>
        </ResizablePanelGroup>
      </div>
      <p className="text-xs text-muted">Double-click the divider to reset.</p>
    </div>
  );
}
