import { Tabs } from '@base-ui/react/tabs';
import { Icon } from '@/components/Icon';
import { DesignApp } from './DesignApp';
import { FilesApp } from './FilesApp';
import { CodeApp } from './CodeApp';
import { MusicApp } from './MusicApp';
import { SocialApp } from './SocialApp';
import { AgentsApp } from './AgentsApp';

const apps = [
  { id: 'design', name: 'Design', icon: 'pen-tool' },
  { id: 'files', name: 'Files', icon: 'files-tilt' },
  { id: 'code', name: 'Code', icon: 'code' },
  { id: 'agents', name: 'Agents', icon: 'agent' },
  { id: 'social', name: 'Social', icon: 'thumbs-up' },
  { id: 'music', name: 'Media', icon: 'headphones' },
] as const;

function DesktopStatusBar() {
  return (
    <div
      className="relative z-10 flex h-9 min-w-0 items-center justify-between gap-4 border-b border-line bg-surface/60 px-3 text-xs backdrop-blur-md"
      aria-label="Computer status bar"
    >
      <div className="flex items-center gap-4">
        <Icon name="atom-spiral" />
        <span>File</span>
        <span>Edit</span>
        <span>View</span>
      </div>
      <div className="flex items-center gap-3">
        <div className="hidden items-center gap-3 @2xl/desktop:flex">
          {['sticky-note-2', 'keys', 'keyboard', 'bluetooth'].map((name) => (
            <Icon key={name} name={name} />
          ))}
        </div>
        <span className="flex items-center gap-1">
          <span className="hidden @sm/desktop:inline">100%</span>
          <Icon name="battery" />
        </span>
        <Icon name="wifi-fill" />
        <Icon name="switches" />
        <span className="hidden whitespace-nowrap @2xl/desktop:inline">
          Tue Oct 6 6:31 PM
        </span>
      </div>
    </div>
  );
}

export function DesktopShowcase() {
  return (
    <section
      aria-label="Icons in use"
      className="@container/desktop mx-auto max-w-250"
    >
      <Tabs.Root defaultValue="design">
        <Tabs.List
          aria-label="Demo apps"
          className="mx-auto my-4 flex max-w-2xl gap-1 rounded-full bg-canvas"
        >
          {apps.map((app) => (
            <Tabs.Tab
              key={app.id}
              value={app.id}
              className="flex min-h-14 min-w-0 flex-1 flex-col items-center justify-center gap-1 rounded-full px-2 py-2 text-muted hover:text-ink not-data-active:hover:bg-hover sm:min-h-11 sm:flex-row sm:gap-2 data-active:bg-surface data-active:text-ink data-active:shadow-sm data-active:ring data-active:ring-muted/30"
            >
              <Icon name={app.icon} size={20} />
              {app.name}
            </Tabs.Tab>
          ))}
        </Tabs.List>
        <div className="desktop-wallpaper overflow-hidden rounded-2xl border border-border">
          <DesktopStatusBar />
          <div className="h-152 sm:h-144">
            <Tabs.Panel
              value="design"
              keepMounted
              className="grid h-full min-w-0 place-items-center p-3 data-hidden:hidden sm:p-6 lg:p-8"
            >
              <DesignApp />
            </Tabs.Panel>
            <Tabs.Panel
              value="files"
              keepMounted
              className="grid h-full min-w-0 place-items-center p-3 data-hidden:hidden sm:p-6 lg:p-8"
            >
              <FilesApp />
            </Tabs.Panel>
            <Tabs.Panel
              value="code"
              keepMounted
              className="grid h-full min-w-0 place-items-center p-3 data-hidden:hidden sm:p-6 lg:p-8"
            >
              <CodeApp />
            </Tabs.Panel>
            <Tabs.Panel
              value="agents"
              keepMounted
              className="grid h-full min-w-0 place-items-center p-3 data-hidden:hidden sm:p-6 lg:p-8"
            >
              <AgentsApp />
            </Tabs.Panel>
            <Tabs.Panel
              value="social"
              keepMounted
              className="grid h-full min-w-0 place-items-center p-3 data-hidden:hidden sm:p-6 lg:p-8"
            >
              <SocialApp />
            </Tabs.Panel>
            <Tabs.Panel
              value="music"
              keepMounted
              className="grid h-full min-w-0 place-items-center p-3 data-hidden:hidden sm:p-6 lg:p-8"
            >
              <MusicApp />
            </Tabs.Panel>
          </div>
        </div>
      </Tabs.Root>
    </section>
  );
}
