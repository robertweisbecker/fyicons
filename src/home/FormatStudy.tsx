import { useState } from 'react';
import { ToggleGroup } from '@/components/ui/toggle-group';
import { Toggle } from '@/components/ui/toggle';
import { DemoToggle } from '@/demos/components/DemoControls';
import { cn } from '@/lib/utils';
import { Glyph, panel } from './Study';

export function FormatStudy() {
  const [marks, setMarks] = useState(['bold']);
  const [align, setAlign] = useState(['start']);
  const [list, setList] = useState(['none']);
  const [vertical, setVertical] = useState(['top']);

  return (
    <div
      className={cn(
        panel,
        'grid w-full max-w-[282px] grid-cols-[1fr_auto] items-center gap-y-2 p-4 text-sm max-[480px]:grid-cols-1 max-[480px]:gap-y-3 pointer-coarse:max-w-80',
      )}
    >
      <span>Format</span>
      <ToggleGroup
        multiple
        value={marks}
        onValueChange={setMarks}
        aria-label="Text formatting"
        className="gap-px"
      >
        {[
          ['bold', 'text-bold', 'Bold'],
          ['italic', 'italic', 'Italic'],
          ['underline', 'text-underline', 'Underline'],
          ['strike', 'text-strikethrough', 'Strikethrough'],
        ].map(([value, icon, label]) => (
          <DemoToggle key={value} value={value} icon={icon} label={label} />
        ))}
      </ToggleGroup>
      <span>List style</span>
      <div className="flex items-center">
        <ToggleGroup
          value={list}
          onValueChange={(v) => v.length && setList(v)}
          aria-label="List style"
          className="w-fit gap-px rounded-lg bg-bg p-0"
        >
          <DemoToggle
            value="none"
            icon="minus"
            label="None"
            variant="elevated"
          />
          <DemoToggle
            value="ordered"
            icon="list-ordered"
            label="Numbered list"
            variant="elevated"
          />
          <DemoToggle
            value="bullet"
            icon="list-bullet"
            label="Bullet list"
            variant="elevated"
          />
        </ToggleGroup>
        <Glyph name="chevron-right-sm" className="size-8" />
      </div>
      <span>Alignment</span>
      <ToggleGroup
        value={align}
        onValueChange={(v) => v.length && setAlign(v)}
        aria-label="Text alignment"
        className="w-fit gap-px rounded-lg bg-bg p-0"
      >
        {['start', 'center', 'end', 'justify'].map((value) => (
          <DemoToggle
            key={value}
            value={value}
            icon={'text-align-' + value}
            label={'Align ' + value}
            variant="elevated"
          />
        ))}
      </ToggleGroup>
      <span aria-hidden className="max-[480px]:hidden" />
      <div className="flex items-center">
        <ToggleGroup
          value={vertical}
          onValueChange={(v) => v.length && setVertical(v)}
          aria-label="Vertical alignment"
          className="w-fit gap-px rounded-lg bg-bg p-0"
        >
          {['top', 'middle', 'bottom'].map((value) => (
            <DemoToggle
              key={value}
              value={value}
              icon={'align-' + value}
              label={'Align ' + value}
              variant="elevated"
            />
          ))}
        </ToggleGroup>
        <Glyph name="sliders-v" className="size-8" />
      </div>
    </div>
  );
}
