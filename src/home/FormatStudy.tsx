import { useState } from 'react';
import { ToggleGroup } from '@/components/ui/toggle-group';
import { DemoToggle } from '@/demos/components/DemoControls';
import { cn } from '@/lib/utils';
import { Glyph, panel } from './Study';

export function FormatStudy() {
  return (
    <div className={cn(panel, 'w-full max-w-72 p-4')}>
      <FormatControls />
    </div>
  );
}

export function FormatControls({ compact = false }: { compact?: boolean }) {
  const [marks, setMarks] = useState(['bold']);
  const [list, setList] = useState(['none']);
  const size = compact ? 'icon-xs' : 'icon';

  return (
    <div
      className={cn(
        'grid grid-cols-[1fr_auto] items-center gap-x-2',
        compact
          ? 'gap-y-1 text-xs'
          : 'gap-y-2 text-sm max-sm:grid-cols-1 max-sm:gap-y-3',
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
          <DemoToggle
            key={value}
            value={value}
            icon={icon}
            label={label}
            size={size}
          />
        ))}
      </ToggleGroup>
      <span>List style</span>
      <div className="flex items-center">
        <ToggleGroup
          value={list}
          onValueChange={(v) => v.length && setList(v)}
          aria-label="List style"
          className="w-fit gap-px rounded-md bg-inset p-0"
        >
          <DemoToggle
            value="none"
            icon="minus"
            label="None"
            size={size}
            variant="elevated"
          />
          <DemoToggle
            value="ordered"
            icon="list-ordered"
            label="Numbered list"
            size={size}
            variant="elevated"
          />
          <DemoToggle
            value="bullet"
            icon="list-bullet"
            label="Bullet list"
            size={size}
            variant="elevated"
          />
        </ToggleGroup>
        <Glyph
          name="chevron-right-sm"
          className={compact ? 'size-6' : 'size-8'}
        />
      </div>
      {!compact && (
        <>
          <span className="self-start">Alignment</span>
          <TextAlignment />
        </>
      )}
    </div>
  );
}

export function TextAlignment({
  compact = false,
  className,
}: {
  compact?: boolean;
  className?: string;
}) {
  const [align, setAlign] = useState(['start']);
  const [vertical, setVertical] = useState(['top']);
  const size = compact ? 'icon-xs' : 'icon';
  return (
    <div
      className={cn(
        compact
          ? 'grid w-full flex-1 grid-cols-2 items-center gap-x-1'
          : 'space-y-2',
        className,
      )}
    >
      <ToggleGroup
        value={align}
        onValueChange={(v) => v.length && setAlign(v)}
        aria-label="Text alignment"
        className={cn(
          'rounded-md bg-inset p-0',
          compact ? 'flex-1 gap-0' : 'w-fit gap-px',
        )}
      >
        {['start', 'center', 'end'].map((value) => (
          <DemoToggle
            key={value}
            value={value}
            icon={'text-align-' + value}
            label={'Align ' + value}
            size={size}
            variant="elevated"
            className="flex-1"
          />
        ))}
      </ToggleGroup>
      <div className="flex items-center">
        <ToggleGroup
          value={vertical}
          onValueChange={(v) => v.length && setVertical(v)}
          aria-label="Vertical alignment"
          className={cn(
            'w-fit rounded-md bg-inset p-0',
            compact ? 'flex-1 gap-0' : 'gap-px',
          )}
        >
          {['top', 'middle', 'bottom'].map((value) => (
            <DemoToggle
              key={value}
              value={value}
              icon={'align-' + value}
              label={'Align ' + value}
              size={size}
              variant="elevated"
            />
          ))}
        </ToggleGroup>
        <Glyph
          name="sliders-v"

          className={cn(compact ? 'size-6' : 'size-8', 'text-xs text-muted')}
        />
      </div>
    </div>
  );
}
