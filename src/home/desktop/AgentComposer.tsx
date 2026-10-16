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
        Thinking…
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
  const [mode, setMode] = useState('Goal');
  return (
    <div className="w-full text-muted">
      <div className="mb-2 flex flex-wrap items-center gap-2.5 rounded-xl bg-dialog px-2 py-1.5 text-xs text-ink shadow-xs ring-1 ring-line">
        <Icon name="target-bullseye" />
        <span className="mr-auto">
          Pursuing <span className="line-through opacity-30">goal</span>{' '}
          Immortan Joe
        </span>
        <span className="inline-flex items-center gap-1">
          <Icon name="agent-subagent" />2
        </span>
        <span className="inline-flex items-center gap-1">
          <Icon name="clock" />
          1:47:02
        </span>
        <div className="flex w-full items-center justify-end gap-1 @md/window:w-auto">
          <Icon
            name="line-vertical"
            className="hidden text-border @md/window:block"
          />
          <DemoIconButton label="Edit goal" icon="pencil" size="icon-xs" />
          <DemoToggle
            label="Goal playback"
            icon="circle-play"
            activeIcon="circle-pause"
            size="icon-xs"
          />
          <DemoIconButton label="Delete goal" icon="trash" size="icon-xs" />
          <DemoIconButton
            label="Expand goal"
            icon="arrows-expand"
            size="icon-xs"
          />
        </div>
      </div>
      <div className="flex min-h-28 flex-col justify-between gap-6 rounded-xl border border-border bg-surface p-3">
        <p className="text-sm text-muted/50">Ask anything…</p>
        <div className="flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-1">
            <DemoIconButton
              label="Add"
              icon="plus"
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
                aria-label="Agent mode"
                render={<Button variant="ghost" size="xs" />}
              >
                <Icon name="target-bullseye" className="text-muted" />
                Goal
              </MenuTrigger>
              <MenuContent side="top" className="w-40">
                <MenuRadioGroup
                  value={mode}
                  onValueChange={setMode}
                  aria-label="Agent mode"
                >
                  {[
                    ['lightbulb-simple', 'Plan'],
                    ['target', 'Goal'],
                    ['pointers', 'Orchestrate'],
                  ].map(([icon, label]) => (
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
            <DemoIconButton
              label="Effort"
              icon="gauge-simple-high"
              size="icon-xs"
            />
            <DemoToggle
              label="Speed"
              icon="lightning-bolt"
              activeIcon="lightning-bolt-fill"
              size="icon-xs"
            />
            <DemoToggle
              label="Dictate"
              icon="microphone"
              activeIcon="microphone-fill"
              size="icon-xs"
            />
            <DemoIconButton
              label="Send"
              icon="arrow-up"
              variant="default"
              size="icon-xs"
              className="rounded-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
