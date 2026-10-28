import { useState } from 'react';
import { Tabs } from '@base-ui/react/tabs';
import { ScrollArea } from '@base-ui/react/scroll-area';
import { Icon } from '@/components/Icon';

import { DesignApp } from './DesignApp';
import { FilesApp } from './FilesApp';
import { CodeApp } from './CodeApp';
import { MusicApp } from './MusicApp';
import { SocialApp } from './SocialApp';
import { AgentsApp } from './AgentsApp';
import { DeviceBattery, DeviceClock } from '../DeviceStatus';

const glassRainbow =
  'https://misc-assets.raycast.com/wallpapers/glass-rainbow-preview.png';
const blossom =
  'https://misc-assets.raycast.com/wallpapers/blossom-2-preview.png';
const asciiHalftone =
  'https://misc-assets.raycast.com/wallpapers/ascii_halftone_preview.png';
const moonrise =
  'https://misc-assets.raycast.com/wallpapers/moonrise-preview.png';
const blueDistortion =
  'https://misc-assets.raycast.com/wallpapers/blue_distortion_1_preview.png';
const glaze = 'https://misc-assets.raycast.com/wallpapers/glaze_1_preview.png';

const apps = [
  { id: 'design', name: 'Design', icon: 'pen-tool', wallpaper: glassRainbow },
  { id: 'files', name: 'Files', icon: 'files-tilt', wallpaper: blossom },
  { id: 'code', name: 'Code', icon: 'code', wallpaper: asciiHalftone },
  { id: 'agents', name: 'Chat', icon: 'chat-sparkles', wallpaper: moonrise },
  {
    id: 'social',
    name: 'Social',
    icon: 'thumbs-up',
    wallpaper: blueDistortion,
  },
  { id: 'music', name: 'Media', icon: 'headphones', wallpaper: glaze },
] as const;

const panelClassName =
  'col-start-1 row-start-1 z-1 grid h-full min-h-0 min-w-0 place-items-center p-3 pb-10 sm:p-6 sm:pb-10 lg:p-8 lg:pb-10 ' +
  'transition-[opacity,translate] duration-[120ms,200ms] ease-[cubic-bezier(0.22,1,0.36,1)] ' +
  'data-starting-style:opacity-0 data-ending-style:z-0 data-ending-style:opacity-0 data-ending-style:duration-180 data-ending-style:ease-[linear,cubic-bezier(0.22,1,0.36,1)] ' +
  'data-starting-style:data-[activation-direction=right]:translate-x-2 data-starting-style:data-[activation-direction=left]:-translate-x-2 ' +
  'data-ending-style:data-[activation-direction=right]:-translate-x-1 data-ending-style:data-[activation-direction=left]:translate-x-1 ' +
  'group-has-[[role=tab]:focus-visible]/desktop:transition-none!';

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
          {['sticky-note-alt', 'keys', 'keyboard', 'bluetooth'].map((name) => (
            <Icon key={name} name={name} />
          ))}
        </div>
        <DeviceBattery percentageClassName="hidden @sm/desktop:inline" />
        <Icon name="wifi-fill" />
        <Icon name="atom-spiral" />
        <Icon name="switches-ios" />
        <DeviceClock className="hidden @2xl/desktop:inline" />
      </div>
    </div>
  );
}

export function DesktopShowcase() {
  const [activeApp, setActiveApp] = useState<string>('design');

  return (
    <section
      aria-label="Icons in use"
      className="@container/desktop mx-auto max-w-250 pb-4"
    >
      <Tabs.Root
        value={activeApp}
        onValueChange={setActiveApp}
        className="group/desktop relative"
      >
        <ScrollArea.Root className="absolute! bottom-2 left-1/2 z-20 w-max max-w-[calc(100%-1.5rem)] -translate-x-1/2 translate-y-1/2 rounded-full bg-neutral-700 shadow-lg ring-1 ring-white/10 dark:bg-dialog">
          <Tabs.List
            aria-label="Demo apps"
            render={<ScrollArea.Viewport />}
            className="relative isolate flex scroll-px-4 gap-1 overscroll-x-contain rounded-[inherit] [mask-image:linear-gradient(to_right,transparent,black_min(1.5rem,var(--scroll-area-overflow-x-start)),black_calc(100%_-_min(1.5rem,var(--scroll-area-overflow-x-end))),transparent)] p-1.5"
          >
            {apps.map((app) => (
              <Tabs.Tab
                key={app.id}
                value={app.id}
                className="relative z-1 flex min-h-9 shrink-0 items-center justify-center gap-1.5 rounded-full px-3 py-2 text-sm whitespace-nowrap text-white/72 outline-offset-2 transition-colors duration-150 ease-out hover:text-white not-data-active:hover:bg-current/5 focus-visible:outline-2 data-active:text-white data-active:outline-focus"
              >
                <Icon name={app.icon} size={20} />
                {app.name}
              </Tabs.Tab>
            ))}
            <Tabs.Indicator className="pointer-events-none absolute top-(--active-tab-top) left-0 h-(--active-tab-height) w-(--active-tab-width) translate-x-(--active-tab-left) rounded-full bg-white/10 text-white shadow-[inset_0_2px_1px_-1px_--alpha(currentColor_/_10%),var(--shadow-md)] ring-1 ring-black/20 transition-[translate,width] duration-150 ease-in-out group-has-[[role=tab]:focus-visible]/desktop:transition-none!" />
          </Tabs.List>
        </ScrollArea.Root>
        <div className="rounded-2xl border border-border">
          {/* Clip the backdrop inside the border so it cannot cover the rounded frame. */}
          <div className="relative isolate overflow-hidden rounded-[calc(var(--radius-2xl)-1px)] bg-neutral-900 [clip-path:inset(0_round_calc(var(--radius-2xl)-1px))]">
            {apps.map((app) => (
              <img
                key={app.id}
                src={app.wallpaper}
                alt=""
                aria-hidden="true"
                loading="lazy"
                decoding="async"
                data-active={activeApp === app.id ? '' : undefined}
                className="pointer-events-none absolute inset-0 -z-10 size-full object-cover opacity-0 transition-opacity duration-200 ease-[ease] group-has-[[role=tab]:focus-visible]/desktop:transition-none! motion-reduce:transition-none data-active:opacity-100"
              />
            ))}
            <DesktopStatusBar />
            <div className="grid h-152 sm:h-144">
              <Tabs.Panel value="design" keepMounted className={panelClassName}>
                <DesignApp />
              </Tabs.Panel>
              <Tabs.Panel value="files" keepMounted className={panelClassName}>
                <FilesApp />
              </Tabs.Panel>
              <Tabs.Panel value="code" keepMounted className={panelClassName}>
                <CodeApp />
              </Tabs.Panel>
              <Tabs.Panel value="agents" keepMounted className={panelClassName}>
                <AgentsApp />
              </Tabs.Panel>
              <Tabs.Panel value="social" keepMounted className={panelClassName}>
                <SocialApp />
              </Tabs.Panel>
              <Tabs.Panel value="music" keepMounted className={panelClassName}>
                <MusicApp />
              </Tabs.Panel>
            </div>
          </div>
        </div>
      </Tabs.Root>
    </section>
  );
}
