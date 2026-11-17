import { useState } from 'react';
import { Collapsible } from '@base-ui/react/collapsible';
import { createIconLookup } from '@/components/createIconLookup';

import { Button } from '@/components/ui/button';
import {
  Menu,
  MenuTrigger,
  MenuContent,
  MenuRadioGroup,
  MenuRadioItem,
} from '@/components/ui/menu';
import { createDemoControls } from '@/demos/components/DemoControls';

import Glyph0 from 'fyicons/icons/IconAgent';
import Glyph1 from 'fyicons/icons/IconArrowUp';
import Glyph2 from 'fyicons/icons/IconBolt';
import Glyph3 from 'fyicons/icons/IconBoltFill';
import Glyph4 from 'fyicons/icons/IconBookReading';
import Glyph5 from 'fyicons/icons/IconChevronRightSm';
import Glyph6 from 'fyicons/icons/IconChevronsExpand';
import Glyph7 from 'fyicons/icons/IconCirclePause';
import Glyph8 from 'fyicons/icons/IconCirclePauseFill';
import Glyph9 from 'fyicons/icons/IconCirclePlay';
import Glyph10 from 'fyicons/icons/IconCirclePlayFill';
import Glyph11 from 'fyicons/icons/IconFileSkill';
import Glyph12 from 'fyicons/icons/IconGaugeHigh';
import Glyph13 from 'fyicons/icons/IconGaugeLow';
import Glyph14 from 'fyicons/icons/IconGhost';
import Glyph15 from 'fyicons/icons/IconLightbulb';
import Glyph16 from 'fyicons/icons/IconLightbulbFill';
import Glyph17 from 'fyicons/icons/IconLightbulbOn';
import Glyph18 from 'fyicons/icons/IconLineVertical';
import Glyph19 from 'fyicons/icons/IconMicrophone';
import Glyph20 from 'fyicons/icons/IconMicrophoneFill';
import Glyph21 from 'fyicons/icons/IconNotePad';
import Glyph22 from 'fyicons/icons/IconPencil';
import Glyph23 from 'fyicons/icons/IconPlug';
import Glyph24 from 'fyicons/icons/IconPlusSm';
import Glyph25 from 'fyicons/icons/IconPointers';
import Glyph26 from 'fyicons/icons/IconShieldCode';
import Glyph27 from 'fyicons/icons/IconTarget';
import Glyph28 from 'fyicons/icons/IconTargetBullseye';
import Glyph29 from 'fyicons/icons/IconTextTitle';
import Glyph30 from 'fyicons/icons/IconTextTitleFill';
import Glyph31 from 'fyicons/icons/IconThoughtBubble';
import Glyph32 from 'fyicons/icons/IconTimer';
import Glyph33 from 'fyicons/icons/IconTimerFill';
import Glyph34 from 'fyicons/icons/IconTrash';
import Glyph35 from 'fyicons/icons/IconWaveform';
import Glyph36 from 'fyicons/icons/IconWrenchTilt';
const Icon = createIconLookup({
  agent: { Component: Glyph0, id: '154:11361' },
  'arrow-up': { Component: Glyph1, id: '518:4787' },
  bolt: { Component: Glyph2, id: '102:5518' },
  'bolt-fill': { Component: Glyph3, id: '717:4006' },
  'book-reading': { Component: Glyph4, id: '134:4679' },
  'chevron-right-sm': { Component: Glyph5, id: '142:6353' },
  'chevrons-maximize': { Component: Glyph6, id: '816:11019' },
  'circle-pause': { Component: Glyph7, id: '96:1634' },
  'circle-pause-fill': { Component: Glyph8, id: '578:2366' },
  'circle-play': { Component: Glyph9, id: '124:2541' },
  'circle-play-fill': { Component: Glyph10, id: '578:2376' },
  'file-skill': { Component: Glyph11, id: '679:539' },
  'gauge-high': { Component: Glyph12, id: '375:6429' },
  'gauge-low': { Component: Glyph13, id: '375:6430' },
  ghost: { Component: Glyph14, id: '727:314' },
  lightbulb: { Component: Glyph15, id: '233:14817' },
  'lightbulb-fill': { Component: Glyph16, id: '1205:11038' },
  'lightbulb-on': { Component: Glyph17, id: '847:16024' },
  'line-vertical': { Component: Glyph18, id: '469:1980' },
  microphone: { Component: Glyph19, id: '58:9539' },
  'microphone-fill': { Component: Glyph20, id: '748:4674' },
  'note-pad': { Component: Glyph21, id: '599:4487' },
  pencil: { Component: Glyph22, id: '132:2419' },
  plug: { Component: Glyph23, id: '224:14651' },
  'plus-sm': { Component: Glyph24, id: '101:3662' },
  pointers: { Component: Glyph25, id: '697:229' },
  'shield-code': { Component: Glyph26, id: '193:13727' },
  target: { Component: Glyph27, id: '667:1186' },
  'target-bullseye': { Component: Glyph28, id: '342:7916' },
  text: { Component: Glyph29, id: '58:9540' },
  'text-fill': { Component: Glyph30, id: '1084:12366' },
  'thought-bubble': { Component: Glyph31, id: '282:17058' },
  timer: { Component: Glyph32, id: '299:6105' },
  'timer-fill': { Component: Glyph33, id: '716:3755' },
  trash: { Component: Glyph34, id: '100:2287' },
  waveform: { Component: Glyph35, id: '372:5489' },
  'wrench-tilt': { Component: Glyph36, id: '313:17439' },
});

const agentModes = {
  Plan: { icon: 'lightbulb', activeIcon: 'lightbulb-on' },
  Goal: { icon: 'target', activeIcon: 'target-bullseye' },
  Orchestrate: { icon: 'pointers', activeIcon: 'pointers' },
} as const;

export function AgentActivity({
  open,
  onOpenChange,
}: {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}) {
  return (
    <Collapsible.Root
      open={open}
      onOpenChange={onOpenChange}
      className="shrink-0 text-xs leading-4 text-muted"
    >
      <Collapsible.Trigger
        render={
          <Button
            variant="ghost"
            size="unstyled"
            className="group hover:bg-unset w-fit justify-start gap-1 rounded-sm text-xs leading-4 font-normal hover:text-ink"
          />
        }
      >
        <Icon name="thought-bubble" />
        <span className="shimmer">Thinking…</span>
        <Icon
          name="chevron-right-sm"
          className="ml-auto transition-transform duration-150 ease-out group-focus-visible:transition-none group-data-panel-open:rotate-90 motion-reduce:transition-none"
        />
      </Collapsible.Trigger>
      <Collapsible.Panel className="flex flex-col gap-2 pt-2">
        {[
          ['book-reading', 'Read 4 files'],
          ['plug', 'Used a plugin'],
          ['file-skill', 'Read a skill'],
          ['note-pad', 'Referenced memory'],
          ['wrench-tilt', 'Used tool'],
        ].map(([icon, label]) => (
          <p key={icon} className="flex items-center gap-1">
            <Icon name={icon} />
            {label}
          </p>
        ))}
      </Collapsible.Panel>
    </Collapsible.Root>
  );
}

export function AgentComposer() {
  const [mode, setMode] = useState<keyof typeof agentModes>('Goal');
  return (
    <div className="w-full">
      <div className="mb-2 flex items-center gap-1.5 rounded-xl bg-surface px-2 py-1.5 text-xs shadow-sm outline outline-offset-(--surface-outline-offset) outline-line @md/window:gap-2.5">
        <Icon name="target-bullseye" />
        <span className="mr-auto min-w-0 flex-1 @md/window:truncate">
          Pursuing{' '}
          <span className="hidden line-through opacity-50 @md/window:inline">
            goal
          </span>{' '}
          <span className="whitespace-nowrap">Immortan Joe</span>
        </span>
        <span className="inline-flex items-center gap-1">
          <Icon name="agent" />2
        </span>
        <span className="hidden shrink-0 items-center gap-1 @md/window:inline-flex">
          <Icon name="timer" />
          1:47:02
        </span>
        <div className="flex shrink-0 items-center justify-end gap-1">
          <Icon
            name="line-vertical"
            className="hidden text-border @md/window:block"
          />
          <DemoIconButton label="Edit goal" icon="pencil" size="icon-xs" />
          <DemoToggle
            label="Play/pause"
            icon="circle-pause"
            activeIcon="circle-play"
            size="icon-xs"
            // variant="ghost"
            className="data-pressed:bg-transparent"
          />
          <DemoIconButton
            label="Cancel"
            icon="trash"
            size="icon-xs"
            className="@max-md/window:hidden"
          />
          <DemoIconButton
            label="View"
            icon="chevrons-maximize"
            size="icon-xs"
          />
        </div>
      </div>
      <div className="flex min-h-20 flex-col justify-between gap-6 rounded-3xl bg-dialog p-3 outline outline-offset-(--surface-outline-offset) outline-border">
        <p className="text-sm text-muted/50">Ask anything…</p>
        <div className="flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-1">
            <DemoIconButton
              label="Add"
              icon="plus-sm"
              variant="neutral"
              size="icon-xs"
              className="rounded-full"
            />
            <DemoIconButton
              label="Approval"
              icon="shield-code"
              size="icon-xs"
            />
            <Icon name="line-vertical" className="text-border" />
            <Menu>
              <MenuTrigger
                aria-label={`Agent mode: ${mode}`}
                render={
                  <Button variant="ghost" size="xs" className="rounded-full" />
                }
              >
                <Icon
                  name={agentModes[mode].activeIcon}
                  className="text-muted"
                />
                {mode}
              </MenuTrigger>
              <MenuContent side="top" className="w-40">
                <MenuRadioGroup
                  value={mode}
                  onValueChange={setMode}
                  aria-label="Agent mode"
                >
                  {Object.entries(agentModes).map(([label, { icon }]) => (
                    <MenuRadioItem key={icon} value={label} size="sm">
                      <Icon name={icon} className="text-muted" />
                      {label}
                    </MenuRadioItem>
                  ))}
                </MenuRadioGroup>
              </MenuContent>
            </Menu>
          </div>
          <div className="flex items-center gap-1">
            <DemoToggle
              label="Effort"
              icon="gauge-low"
              activeIcon="gauge-high"
              size="icon-xs"
              className="data-pressed:text-focus"
            />
            <DemoToggle
              label="Speed"
              icon="bolt"
              activeIcon="bolt-fill"
              size="icon-xs"
              variant="text"
            />
            <DemoToggle
              label="Dictate"
              icon="microphone"
              activeIcon="waveform"
              size="icon-xs"
              variant="text"
            />
            <DemoIconButton
              label="Send"
              icon="arrow-up"
              variant="default"
              size="icon-xs"
              className="rounded-full bg-blue-500 text-white hover:bg-blue-600 active:bg-blue-700"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

const { DemoIconButton, DemoToggle } = createDemoControls(Icon);
