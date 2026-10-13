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

export function AgentsStudy() {
  const [mode, setMode] = useState('Plan');
  return (
    <div className="w-full max-w-[477px] rounded-xl bg-canvas p-2.5 text-muted">
      <Collapsible.Root defaultOpen className="mb-4 text-xs leading-4">
        <Collapsible.Trigger
          render={
            <Button
              variant="ghost"
              size="unstyled"
              className="group w-fit justify-start gap-1 rounded-sm text-xs leading-4 font-normal hover:text-ink"
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
      <div className="mb-2 flex flex-wrap items-center gap-1 rounded-[10px] bg-ink/8 p-2 text-xs text-ink">
        <Icon name="target-bullseye" />
        <span className="mr-auto">Pursuing goal</span>
        <span className="inline-flex items-center gap-0.5 rounded-full bg-ink/8 pr-1.5 pl-0.5 text-muted">
          <Icon name="agent-subagent" size={14} />2
        </span>
        <span className="inline-flex items-center gap-0.5 rounded-full bg-ink/8 pr-1.5 pl-0.5 text-muted">
          <Icon name="clock" size={12} />
          1:13
        </span>
        <Icon name="line-vertical" size={12} className="text-border" />
        <DemoIconButton
          label="Edit goal"
          icon="pencil"
          size="icon-xs"
          className="pointer-coarse:size-11"
        />
        <DemoToggle
          label="Goal playback"
          icon="circle-play"
          activeIcon="circle-pause"
          size="icon-xs"
          className="pointer-coarse:size-11"
        />
        <DemoIconButton
          label="Delete goal"
          icon="trash"
          size="icon-xs"
          className="pointer-coarse:size-11"
        />
        <DemoIconButton
          label="Expand goal"
          icon="arrows-expand"
          size="icon-xs"
          className="pointer-coarse:size-11"
        />
      </div>
      <div className="flex min-h-33 flex-col justify-between gap-12 rounded-[14px] border border-border bg-surface p-3">
        <p className="text-sm text-ink">Hello</p>
        <div className="flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-1">
            <DemoIconButton
              label="Add attachment"
              icon="plus"
              variant="neutral"
              size="icon-xs"
              className="rounded-full pointer-coarse:size-11"
            />
            <DemoIconButton
              label="Security options"
              icon="shield-code"
              size="icon-xs"
              className="pointer-coarse:size-11"
            />
            <Icon name="line-vertical" className="text-border" />
            <Menu>
              <MenuTrigger
                aria-label="Agent mode"
                render={
                  <Button
                    variant="ghost"
                    size="icon-xs"
                    className="pointer-coarse:size-11"
                  />
                }
              >
                <Icon name="lightbulb-sm" />
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
              label="Response speed"
              icon="gauge-simple-high"
              size="icon-xs"
              className="pointer-coarse:size-11"
            />
            <DemoToggle
              label="Quick action"
              icon="lightning-bolt"
              activeIcon="lightning-bolt-fill"
              size="icon-xs"
              className="pointer-coarse:size-11"
            />
            <DemoToggle
              label="Voice input"
              icon="microphone"
              activeIcon="microphone-fill"
              size="icon-xs"
              className="pointer-coarse:size-11"
            />
            <DemoIconButton
              label="Send message"
              icon="arrow-up"
              variant="default"
              size="icon-xs"
              className="rounded-full pointer-coarse:size-11"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
