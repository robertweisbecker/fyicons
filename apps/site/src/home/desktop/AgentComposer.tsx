import { useState } from 'react';
import { Collapsible } from '@base-ui/react/collapsible';
import { Icon } from '@/components/Icon';
import { Button } from '@/components/ui/button';
import {
  Menu,
  MenuTrigger,
  MenuContent,
  MenuRadioGroup,
  MenuRadioItem,
} from '@/components/ui/menu';
import { DemoIconButton, DemoToggle } from '@/demos/components/DemoControls';

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
