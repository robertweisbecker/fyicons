import { createIconLookup } from '@/components/icon-lookup';
import { cn } from '@/lib/utils';
import {
  DemoActivityBoundary,
  DeferredModule,
  useNearViewport,
} from '@/components/DeferredContent';
import type { ComponentType, CSSProperties } from 'react';
import { useId, useRef, useState } from 'react';
import { Tabs } from '@base-ui/react/tabs';
import {
  AnimatePresence,
  LayoutGroup,
  motion,
  MotionConfig,
} from 'motion/react';
import { DeviceBattery, DeviceClock } from '@/home/DeviceStatus';
import './DesktopShowcase.css';
import {
  IconPenTool,
  IconCaretsMaximize,
  IconMinus,
  IconX,
  IconFiles,
  IconFilesTilt,
  IconCode,
  IconChatSparkles,
  IconThumbsUp,
  IconHeadphones,
  IconCookieBiteFill,
  IconStickyNoteAlt,
  IconKeys,
  IconKeyboard,
  IconBluetooth,
  IconWifiFill,
  IconIntelligenceCupertino,
  IconSwitchesCupertino,
  IconUser,
} from 'fyicons';

const Icon = createIconLookup({
  'pen-tool': IconPenTool,
  'carets-maximize': IconCaretsMaximize,
  minus: IconMinus,
  x: IconX,
  files: IconFiles,
  'files-tilt': IconFilesTilt,
  code: IconCode,
  'chat-sparkles': IconChatSparkles,
  'thumbs-up': IconThumbsUp,
  headphones: IconHeadphones,
  'cookie-bite-fill': IconCookieBiteFill,
  'sticky-note-alt': IconStickyNoteAlt,
  keys: IconKeys,
  keyboard: IconKeyboard,
  bluetooth: IconBluetooth,
  'wifi-fill': IconWifiFill,
  'intelligence-cupertino': IconIntelligenceCupertino,
  'switches-cupertino': IconSwitchesCupertino,
  user: IconUser,
});

const apps = [
  { id: 'design', name: 'Design', icon: 'pen-tool' },
  { id: 'files', name: 'Files', icon: 'files-tilt' },
  { id: 'code', name: 'Code', icon: 'code' },
  { id: 'agents', name: 'Chat', icon: 'chat-sparkles' },
  { id: 'social', name: 'Social', icon: 'thumbs-up' },
  { id: 'music', name: 'Media', icon: 'headphones' },
] as const;

const appLoaders: Record<string, () => Promise<ComponentType>> = {
  design: () => import('./DesignApp').then((module) => module.DesignApp),
  files: () => import('./FilesApp').then((module) => module.FilesApp),
  code: () => import('./CodeApp').then((module) => module.CodeApp),
  music: () => import('./MusicApp').then((module) => module.MusicApp),
  social: () => import('./SocialApp').then((module) => module.SocialApp),
  agents: () => import('./AgentsApp').then((module) => module.AgentsApp),
};

function WindowControls() {
  return (
    <span
      className="group/traffic pointer-events-auto flex w-20 shrink-0 items-center justify-center gap-2"
      aria-hidden
    >
      {(
        [
          ['x', 'bg-red-400'],
          ['minus', 'bg-yellow-400'],
          ['carets-maximize', 'bg-green-500'],
        ] as const
      ).map(([icon, color]) => (
        <span
          key={icon}
          className={cn(
            'flex size-3.5 items-center justify-center rounded-full text-black/60 inset-ring inset-ring-black/5',
            color,
          )}
        >
          <Icon
            name={icon}
            size={11}
            className="opacity-0 group-hover/traffic:opacity-100"
          />
        </span>
      ))}
    </span>
  );
}

function DesktopStatusBar() {
  return (
    <div
      className="relative z-10 flex h-9 min-w-0 items-center justify-between gap-4 border-b border-line bg-surface/60 px-3 text-xs backdrop-blur-md"
      aria-label="Computer status bar"
    >
      <div className="flex items-center gap-4">
        <Icon name="cookie-bite-fill" className="rotate-75" />
        <span>File</span>
        <span>Edit</span>
        <span>View</span>
      </div>
      <div className="flex items-center gap-3">
        <div className="hidden items-center gap-3 @2xl/desktop:flex">
          {(['sticky-note-alt', 'keys', 'keyboard', 'bluetooth'] as const).map(
            (name) => (
              <Icon key={name} name={name} />
            ),
          )}
        </div>
        <DeviceBattery percentageClassName="hidden @sm/desktop:inline" />
        <Icon name="wifi-fill" />
        <Icon name="intelligence-cupertino" />
        <Icon name="switches-cupertino" />
        <DeviceClock className="hidden @2xl/desktop:inline" />
      </div>
    </div>
  );
}

export function DesktopShowcase() {
  const [activeApp, setActiveApp] = useState<string>('design');
  const [visitedApps, setVisitedApps] = useState(() => new Set(['design']));
  const activeIndex = apps.findIndex((app) => app.id === activeApp);
  const [keyboardSwitch, setKeyboardSwitch] = useState(false);
  const dockTransition = keyboardSwitch
    ? { duration: 0 }
    : { type: 'spring' as const, duration: 0.28, bounce: 0 };
  const dockId = useId();
  const root = useRef<HTMLElement>(null);
  const { near, visible } = useNearViewport(root);
  const [requested, setRequested] = useState(false);

  return (
    <section
      ref={root}
      aria-label="Icons in use"
      className="@container/desktop mx-auto max-w-250 pb-4"
    >
      <DemoActivityBoundary active={visible}>
        <MotionConfig reducedMotion="user">
          <Tabs.Root
            value={activeApp}
            onValueChange={(value, { event }) => {
              const target = event.target;
              setKeyboardSwitch(
                event instanceof KeyboardEvent ||
                  (target instanceof Element &&
                    target.matches(':focus-visible')),
              );
              setRequested(true);
              setActiveApp(value);
              setVisitedApps((previous) =>
                previous.has(value) ? previous : new Set(previous).add(value),
              );
            }}
            data-instant={keyboardSwitch || undefined}
            className="desktop-showcase relative"
          >
            <div className="absolute bottom-2 left-1/2 z-20 w-max max-w-full -translate-x-1/2 translate-y-1/2">
              <MotionConfig reducedMotion="user" transition={dockTransition}>
                <LayoutGroup id={dockId}>
                  <Tabs.List
                    aria-label="Demo apps"
                    render={<motion.div layout style={{ borderRadius: 999 }} />}
                    className="relative isolate flex gap-0.5 bg-neutral-700 p-1.5 shadow-lg ring-1 ring-white/10 md:gap-1 dark:bg-dialog"
                  >
                    {apps.map((app) => (
                      <Tabs.Tab
                        key={app.id}
                        value={app.id}
                        aria-label={app.name}
                        render={
                          <motion.button layout style={{ borderRadius: 999 }} />
                        }
                        className="relative z-1 flex h-8 shrink-0 items-center justify-center px-2 py-2 text-sm whitespace-nowrap text-white/72 outline-offset-2 transition-colors duration-150 ease-out hover:text-white not-data-active:hover:bg-current/5 focus-visible:outline-2 motion-reduce:transition-none sm:h-9 md:px-3 data-active:px-3 data-active:text-white data-active:outline-focus"
                      >
                        {activeApp === app.id && (
                          <motion.span
                            layoutId="active-app"
                            aria-hidden="true"
                            style={{ borderRadius: 999 }}
                            className="pointer-events-none absolute inset-0 -z-10 bg-white/10 text-white shadow-[inset_0_2px_1px_-1px_--alpha(currentColor/10%),var(--shadow-md)] ring-1 ring-black/20"
                          />
                        )}
                        <motion.span
                          layout
                          className="relative flex min-w-0 items-center overflow-hidden"
                        >
                          <motion.span
                            layout="position"
                            className="flex shrink-0"
                          >
                            <Icon
                              name={app.icon}
                              className="size-4 sm:size-5"
                            />
                          </motion.span>
                          <motion.span
                            layout="position"
                            aria-hidden="true"
                            className="ml-1.5 hidden md:block"
                          >
                            {app.name}
                          </motion.span>
                          <AnimatePresence initial={false} mode="popLayout">
                            {activeApp === app.id && (
                              <motion.span
                                key="label"
                                layout="position"
                                aria-hidden="true"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                className="ml-1.5 md:hidden"
                              >
                                {app.name}
                              </motion.span>
                            )}
                          </AnimatePresence>
                        </motion.span>
                      </Tabs.Tab>
                    ))}
                  </Tabs.List>
                </LayoutGroup>
              </MotionConfig>
            </div>
            <div className="rounded-2xl border border-border">
              {/* Clip the backdrop inside the border so it cannot cover the rounded frame. */}
              <div className="showcase-screen relative isolate overflow-hidden rounded-[calc(var(--radius-2xl)-1px)] bg-neutral-900 [clip-path:inset(0_round_calc(var(--radius-2xl)-1px))]">
                <motion.div
                  aria-hidden="true"
                  className="showcase-wallpaper pointer-events-none absolute inset-y-0 left-0 -z-10"
                  initial={false}
                  animate={{ x: `${(-75 * activeIndex) / (apps.length - 1)}%` }}
                  transition={dockTransition}
                >
                  {apps.slice(1).map((app, index) => (
                    <span
                      key={app.id}
                      style={
                        {
                          '--from': `var(--${apps[index].id})`,
                          '--to': `var(--${app.id})`,
                        } as CSSProperties
                      }
                    />
                  ))}
                </motion.div>
                <DesktopStatusBar />
                <div className="grid h-152 p-3 pb-10 sm:h-144 sm:p-6 sm:pb-10 lg:p-8 lg:pb-10">
                  <div
                    className="showcase-windows relative isolate min-h-0 min-w-0"
                    data-app={activeApp}
                  >
                    <div
                      aria-hidden="true"
                      className="showcase-window-shadow pointer-events-none absolute inset-0 -z-10"
                    />
                    <div className="showcase-window-frame grid h-full place-items-center bg-surface">
                      {apps.map((app, index) => (
                        <Tabs.Panel
                          key={app.id}
                          value={app.id}
                          keepMounted
                          data-app={app.id}
                          data-side={index < activeIndex ? 'left' : 'right'}
                          className="showcase-panel relative z-1 col-start-1 row-start-1 grid h-full min-h-0 w-full min-w-0 rounded-xl bg-surface focus-visible:-outline-offset-2"
                        >
                          {visitedApps.has(app.id) && (
                            <DeferredModule
                              loader={appLoaders[app.id]}
                              enabled={near || requested}
                              active={visible && activeApp === app.id}
                              componentProps={{}}
                              fallback={
                                <div className="absolute inset-0 grid place-items-center text-sm text-muted">
                                  Loading demo…
                                </div>
                              }
                            />
                          )}
                        </Tabs.Panel>
                      ))}
                      <div className="showcase-window-controls pointer-events-none absolute inset-x-0 top-0 z-10 flex h-9 items-center">
                        <WindowControls />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Tabs.Root>
        </MotionConfig>
      </DemoActivityBoundary>
    </section>
  );
}
