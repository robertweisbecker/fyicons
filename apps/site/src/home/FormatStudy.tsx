import { useState } from 'react';
import { ToggleGroup } from '@/components/ui/toggle-group';
import { createDemoControls } from '@/demos/components/DemoControls';
import { cn } from '@/lib/utils';
import { createGlyph, panel } from './Study';

export function FormatStudy() {
  return (
    <div className={cn(panel, 'w-full max-w-72 p-4')}>
      <FormatControls />
    </div>
  );
}

export function FormatControls({
  compact = false,
  className,
}: {
  compact?: boolean;
  className?: string;
}) {
  const [marks, setMarks] = useState(['bold']);
  const [list, setList] = useState(['none']);
  const size = compact ? 'icon-xs' : 'icon';

  return (
    <div
      className={cn(
        'grid items-center',
        compact
          ? 'grid-cols-2 gap-x-1 text-xs'
          : 'grid-cols-[1fr_auto] gap-x-2 gap-y-2 text-sm max-sm:grid-cols-1 max-sm:gap-y-3',
        className,
      )}
    >
      {!compact && <span>Format</span>}
      <ToggleGroup
        multiple
        value={marks}
        onValueChange={setMarks}
        aria-label="Text formatting"
        className={compact ? 'grid min-w-0 grid-cols-4 gap-0' : 'gap-px'}
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
            className={compact ? 'w-full min-w-0' : undefined}
          />
        ))}
      </ToggleGroup>
      {!compact && <span>List style</span>}
      <div className="flex min-w-0 items-center">
        <ToggleGroup
          value={list}
          onValueChange={(v) => v.length && setList(v)}
          aria-label="List style"
          className={cn(
            'rounded-md bg-inset p-0',
            compact ? 'grid min-w-0 flex-1 grid-cols-3 gap-0' : 'w-fit gap-px',
          )}
        >
          <DemoToggle
            value="none"
            icon="minus"
            label="None"
            size={size}
            variant="elevated"
            className={compact ? 'w-full min-w-0' : 'flex-1'}
          />
          <DemoToggle
            value="ordered"
            icon="list-ordered"
            label="Numbered list"
            size={size}
            variant="elevated"
            className={compact ? 'w-full min-w-0' : 'flex-1'}
          />
          <DemoToggle
            value="bullet"
            icon="list-bullet"
            label="Bullet list"
            size={size}
            variant="elevated"
            className={compact ? 'w-full min-w-0' : 'flex-1'}
          />
        </ToggleGroup>
        {!compact && <Glyph name="chevron-right-sm" className="size-8" />}
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
          compact ? 'grid min-w-0 grid-cols-3 gap-0' : 'w-fit gap-px',
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
            className={compact ? 'w-full min-w-0' : 'flex-1'}
          />
        ))}
      </ToggleGroup>
      <div className="flex min-w-0 items-center">
        <ToggleGroup
          value={vertical}
          onValueChange={(v) => v.length && setVertical(v)}
          aria-label="Vertical alignment"
          className={cn(
            'w-fit rounded-md bg-inset p-0',
            compact ? 'grid min-w-0 flex-1 grid-cols-3 gap-0' : 'gap-px',
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
              className={compact ? 'w-full min-w-0' : 'flex-1'}
            />
          ))}
        </ToggleGroup>
        {!compact && (
          <Glyph name="sliders-v" className="size-8 text-xs text-muted" />
        )}
      </div>
    </div>
  );
}

import { createIconLookup } from '@/components/createIconLookup';

import Glyph0 from 'fyicons/icons/IconTextBold';
import Glyph1 from 'fyicons/icons/IconItalic';
import Glyph2 from 'fyicons/icons/IconTextUnderline';
import Glyph3 from 'fyicons/icons/IconTextStrikethrough';
import Glyph4 from 'fyicons/icons/IconMinus';
import Glyph5 from 'fyicons/icons/IconListOrdered';
import Glyph6 from 'fyicons/icons/IconListBullet';
import Glyph7 from 'fyicons/icons/IconChevronRightSm';
import Glyph8 from 'fyicons/icons/IconSlidersV';
import Glyph9 from 'fyicons/icons/IconTextAlignStart';
import Glyph10 from 'fyicons/icons/IconTextAlignCenter';
import Glyph11 from 'fyicons/icons/IconTextAlignEnd';
import Glyph12 from 'fyicons/icons/IconArrowToTop';
import Glyph13 from 'fyicons/icons/IconArrowsToMiddle';
import Glyph14 from 'fyicons/icons/IconArrowToBottom';
import Glyph15 from 'fyicons/icons/IconTextAlignJustify';
const Icon = createIconLookup({
  'text-bold': { Component: Glyph0, id: '101:4281' },
  italic: { Component: Glyph1, id: '161:11751' },
  'text-underline': { Component: Glyph2, id: '100:2288' },
  'text-strikethrough': { Component: Glyph3, id: '338:7712' },
  minus: { Component: Glyph4, id: '667:899' },
  'list-ordered': { Component: Glyph5, id: '132:2732' },
  'list-bullet': { Component: Glyph6, id: '148:6841' },
  'chevron-right-sm': { Component: Glyph7, id: '142:6353' },
  'sliders-v': { Component: Glyph8, id: '529:7914' },
  'text-align-start': { Component: Glyph9, id: '142:6374' },
  'text-align-center': { Component: Glyph10, id: '142:6375' },
  'text-align-end': { Component: Glyph11, id: '142:6376' },
  'align-top': { Component: Glyph12, id: '518:4797' },
  'align-middle': { Component: Glyph13, id: '521:7822' },
  'align-bottom': { Component: Glyph14, id: '518:4796' },
  'text-align-justify': { Component: Glyph15, id: '286:19656' },
});

const Glyph = createGlyph(Icon);

const { DemoToggle } = createDemoControls(Icon);
