import { Tabs } from '@base-ui/react/tabs';
import { Icon } from '@/components/Icon';
import { MusicStudy } from '../MusicStudy';
import { ProfileStudy } from '../SocialStudy';
import { DesignApp } from './DesignApp';
import { FilesApp } from './FilesApp';
import { CodeApp } from './CodeApp';
import { BrowserWindow } from './Window';

const apps = [
  { id: 'design', name: 'Design', icon: 'pen-tool' },
  { id: 'files', name: 'Files', icon: 'folder-open' },
  { id: 'code', name: 'Code', icon: 'code' },
  { id: 'social', name: 'Social', icon: 'chat-round' },
  { id: 'music', name: 'Music', icon: 'headphones' },
] as const;

function DesktopStatusBar() {
  return (
    <div
      className="flex h-9 min-w-0 items-center justify-between gap-4 border-b border-line bg-surface px-3 text-xs"
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
        <div className="overflow-hidden rounded-2xl border border-border bg-bg shadow-lg">
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
              value="social"
              keepMounted
              className="grid h-full min-w-0 place-items-center p-3 data-hidden:hidden sm:p-6 lg:p-8"
            >
              <BrowserWindow>
                <ProfileStudy />
              </BrowserWindow>
            </Tabs.Panel>
            <Tabs.Panel
              value="music"
              keepMounted
              className="grid h-full min-w-0 place-items-center p-3 data-hidden:hidden sm:p-6 lg:p-8"
            >
              <div
                className="dark w-full max-w-80 rounded-2xl shadow-xl"
                data-theme="dark"
              >
                <MusicStudy />
              </div>
            </Tabs.Panel>
          </div>
        </div>
        <Tabs.List
          aria-label="Demo apps"
          className="mx-auto mt-6 flex max-w-xl gap-1"
        >
          {apps.map((app) => (
            <Tabs.Tab
              key={app.id}
              value={app.id}
              className="flex min-h-14 min-w-0 flex-1 flex-col items-center justify-center gap-1 rounded-xl px-2 py-2 text-sm text-muted data-active:bg-surface data-active:text-ink data-active:shadow-sm sm:min-h-11 sm:flex-row sm:gap-2"
            >
              <Icon name={app.icon} />
              {app.name}
            </Tabs.Tab>
          ))}
        </Tabs.List>
      </Tabs.Root>
    </section>
  );
}
