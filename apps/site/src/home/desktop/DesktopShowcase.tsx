import { createIconLookup } from '@/components/createIconLookup';
import {
  DemoActivityBoundary,
  DeferredModule,
  useNearViewport,
} from '@/components/DeferredContent';
import type { ComponentType } from 'react';
import { useEffect, useId, useRef, useState } from 'react';
import { Tabs } from '@base-ui/react/tabs';
import {
  AnimatePresence,
  LayoutGroup,
  motion,
  MotionConfig,
} from 'motion/react';
import { DeviceBattery, DeviceClock } from '../DeviceStatus';
import './DesktopShowcase.css';
import {
  IconPenTool,
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
        <Icon name="cookie-bite-fill" className="rotate-75" />
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
            onValueChange={(value) => {
              setRequested(true);
              setActiveApp(value);
              setVisitedApps((previous) =>
                previous.has(value) ? previous : new Set(previous).add(value),
              );
            }}
            className="group/desktop relative"
          >
            <div className="absolute bottom-2 left-1/2 z-20 w-max max-w-full -translate-x-1/2 translate-y-1/2">
              <MotionConfig
                reducedMotion="user"
                transition={{ type: 'spring', duration: 0.28, bounce: 0 }}
              >
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
                            className="pointer-events-none absolute inset-0 -z-10 bg-white/10 text-white shadow-[inset_0_2px_1px_-1px_--alpha(currentColor_/_10%),var(--shadow-md)] ring-1 ring-black/20"
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
              <div className="relative isolate overflow-hidden rounded-[calc(var(--radius-2xl)-1px)] bg-neutral-900 [clip-path:inset(0_round_calc(var(--radius-2xl)-1px))]">
                <MeshBackdrop active={activeApp} />
                <DesktopStatusBar />
                <div className="grid h-152 sm:h-144">
                  {apps
                    .filter((app) => visitedApps.has(app.id))
                    .map((app) => (
                      <Tabs.Panel
                        key={app.id}
                        value={app.id}
                        keepMounted
                        className={panelClassName}
                      >
                        <DeferredModule
                          loader={appLoaders[app.id]}
                          enabled={near || requested}
                          active={visible && activeApp === app.id}
                          componentProps={{}}
                          fallback={
                            <div
                              role="status"
                              className="grid h-full w-full place-items-center text-sm text-white/70"
                            >
                              Loading demo…
                            </div>
                          }
                        />
                      </Tabs.Panel>
                    ))}
                </div>
              </div>
            </div>
          </Tabs.Root>
        </MotionConfig>
      </DemoActivityBoundary>
    </section>
  );
}

function MeshBackdrop({ active }: { active: string }) {
  const [layers, setLayers] = useState({
    first: active,
    second: active,
    front: false,
  });
  useEffect(() => {
    setLayers((previous) =>
      previous.front
        ? { ...previous, first: active, front: false }
        : { ...previous, second: active, front: true },
    );
  }, [active]);
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 -z-10"
    >
      <div
        className="showcase-mesh absolute inset-0 transition-opacity duration-200 motion-reduce:transition-none"
        data-app={layers.first}
        style={{ opacity: layers.front ? 0 : 1 }}
      />
      <div
        className="showcase-mesh absolute inset-0 transition-opacity duration-200 motion-reduce:transition-none"
        data-app={layers.second}
        style={{ opacity: layers.front ? 1 : 0 }}
      />
    </div>
  );
}
