import { type ComponentProps } from 'react';
import { createIconLookup } from '@/components/createIconLookup';

import { Toggle } from '@/components/ui/toggle';
import { ToggleGroup } from '@/components/ui/toggle-group';
import { createDemoControls } from '@/demos/components/DemoControls';
import { cn } from '@/lib/utils';
import { FormatControls, TextAlignment } from '../FormatStudy';
import { createGlyph } from '../Study';

import Glyph0 from 'fyicons/icons/IconAngle';
import Glyph1 from 'fyicons/icons/IconApps';
import Glyph2 from 'fyicons/icons/IconBorderRadius';
import Glyph3 from 'fyicons/icons/IconBucket';
import Glyph4 from 'fyicons/icons/IconCheckSm';
import Glyph5 from 'fyicons/icons/IconChevronDownSm';
import Glyph6 from 'fyicons/icons/IconChevronRightSm';
import Glyph7 from 'fyicons/icons/IconComponent';
import Glyph8 from 'fyicons/icons/IconEye';
import Glyph9 from 'fyicons/icons/IconEyeFill';
import Glyph10 from 'fyicons/icons/IconEyeSlash';
import Glyph11 from 'fyicons/icons/IconEyeSlashFill';
import Glyph12 from 'fyicons/icons/IconFont';
import Glyph13 from 'fyicons/icons/IconFrame';
import Glyph14 from 'fyicons/icons/IconHeight';
import Glyph15 from 'fyicons/icons/IconItalic';
import Glyph16 from 'fyicons/icons/IconLetterSpacing';
import Glyph17 from 'fyicons/icons/IconLineHeight';
import Glyph18 from 'fyicons/icons/IconLinkUnlink';
import Glyph19 from 'fyicons/icons/IconListBullet';
import Glyph20 from 'fyicons/icons/IconListOrdered';
import Glyph21 from 'fyicons/icons/IconLockOpen';
import Glyph22 from 'fyicons/icons/IconLockOpenFill';
import Glyph23 from 'fyicons/icons/IconMinus';
import Glyph24 from 'fyicons/icons/IconPlus';
import Glyph25 from 'fyicons/icons/IconShadow';
import Glyph26 from 'fyicons/icons/IconSlidersV';
import Glyph27 from 'fyicons/icons/IconSwatches';
import Glyph28 from 'fyicons/icons/IconTextBold';
import Glyph29 from 'fyicons/icons/IconTextStrikethrough';
import Glyph30 from 'fyicons/icons/IconTextTitle';
import Glyph31 from 'fyicons/icons/IconTextTitleFill';
import Glyph32 from 'fyicons/icons/IconTextUnderline';
import Glyph33 from 'fyicons/icons/IconWidth';
const Icon = createIconLookup({
  angle: { Component: Glyph0, id: '895:30680' },
  apps: { Component: Glyph1, id: '507:4365' },
  'border-radius': { Component: Glyph2, id: '114:2223' },
  bucket: { Component: Glyph3, id: '137:4742' },
  'check-sm': { Component: Glyph4, id: '158:11581' },
  'chevron-down-sm': { Component: Glyph5, id: '142:6351' },
  'chevron-right-sm': { Component: Glyph6, id: '142:6353' },
  component: { Component: Glyph7, id: '58:9529' },
  eye: { Component: Glyph8, id: '120:2551' },
  'eye-fill': { Component: Glyph9, id: '1010:19329' },
  'eye-slash': { Component: Glyph10, id: '120:2554' },
  'eye-slash-fill': { Component: Glyph11, id: '1366:1582' },
  font: { Component: Glyph12, id: '148:6692' },
  frame: { Component: Glyph13, id: '125:2609' },
  height: { Component: Glyph14, id: '919:32764' },
  italic: { Component: Glyph15, id: '161:11751' },
  'letter-spacing': { Component: Glyph16, id: '919:32842' },
  'line-height': { Component: Glyph17, id: '593:3739' },
  'link-unlink': { Component: Glyph18, id: '550:8814' },
  'list-bullet': { Component: Glyph19, id: '148:6841' },
  'list-ordered': { Component: Glyph20, id: '132:2732' },
  'lock-open': { Component: Glyph21, id: '193:13627' },
  'lock-open-fill': { Component: Glyph22, id: '752:4267' },
  minus: { Component: Glyph23, id: '667:899' },
  plus: { Component: Glyph24, id: '120:2544' },
  shadow: { Component: Glyph25, id: '130:2688' },
  'sliders-v': { Component: Glyph26, id: '529:7914' },
  swatches: { Component: Glyph27, id: '100:2283' },
  'text-bold': { Component: Glyph28, id: '101:4281' },
  'text-strikethrough': { Component: Glyph29, id: '338:7712' },
  'text-title': { Component: Glyph30, id: '58:9540' },
  'text-title-fill': { Component: Glyph31, id: '1084:12366' },
  'text-underline': { Component: Glyph32, id: '100:2288' },
  width: { Component: Glyph33, id: '919:32781' },
});

export const designFills = [
  { name: 'Lavender', color: 'var(--color-violet-300)' },
  { name: 'Blue', color: 'var(--color-sky-300)' },
  { name: 'Peach', color: 'var(--color-orange-200)' },
  { name: 'Mint', color: 'var(--color-emerald-200)' },
];

/** Read-only properties keep this UI specimen compact without adding fake inputs. */
function PropertyValue({
  label,
  icon,
  value,
}: {
  label: string;
  icon?: string;
  value: string;
}) {
  return (
    <div className="flex h-6 min-w-0 items-center gap-1 rounded-md bg-inset px-1 @min-[11rem]/inspector:gap-2 @min-[11rem]/inspector:px-2">
      <dt className="text-muted">
        {icon ? (
          <Icon name={icon} />
        ) : (
          <span className="inline-block size-4 text-center" aria-hidden>
            {label[0]}
          </span>
        )}
        <span className="sr-only">{label}</span>
      </dt>
      <dd className="m-0 truncate tabular-nums">{value}</dd>
    </div>
  );
}

export function DesignInspector({
  fill,
  onFillChange,
  fillVisible,
  onFillVisibleChange,
  className,
  ...props
}: {
  fill: (typeof designFills)[number];
  onFillChange: (fill: (typeof designFills)[number]) => void;
  fillVisible: boolean;
  onFillVisibleChange: (visible: boolean) => void;
} & ComponentProps<'aside'>) {
  return (
    <aside
      {...props}
      aria-label="Design inspector"
      className={cn(
        '@container/inspector z-10 flex min-h-0 w-48 max-w-1/2 min-w-0 shrink-0 flex-col overflow-y-auto overscroll-y-contain border-l border-line bg-surface text-[11px]',
        className,
      )}
    >
      <div className="flex h-9 shrink-0 items-center gap-2 border-b border-line px-2 @min-[13rem]/inspector:px-3">
        <Icon name="frame" />
        <span className="flex-1 font-medium">Button</span>
        <Glyph
          name="eye"
          className="hidden @min-[11rem]/inspector:inline-flex"
        />
        <Glyph
          name="lock-open"
          className="hidden @min-[11rem]/inspector:inline-flex"
        />
        <Glyph
          name="component"
          className="hidden @min-[11rem]/inspector:inline-flex"
        />
      </div>
      <div className="space-y-2 border-b border-line p-2 @min-[13rem]/inspector:p-3">
        <h3 className="sr-only font-medium">Layout</h3>
        <dl className="grid grid-cols-2 gap-1">
          <PropertyValue label="X position" value="0" />
          <PropertyValue label="Y position" value="0" />
          <PropertyValue label="Width" icon="width" value="160" />
          <PropertyValue label="Height" icon="height" value="48" />
          <PropertyValue label="Rotation" icon="angle" value="0°" />
          <PropertyValue
            label="Corner radius"
            icon="border-radius"
            value="12"
          />
        </dl>
      </div>
      <div className="space-y-2 border-b border-line p-2 @min-[13rem]/inspector:p-3">
        <h3 className="sr-only font-medium">Typography</h3>
        <div className="flex h-6 items-center gap-2 rounded-md bg-inset px-0.5 py-px pe-1">
          <div className="flex h-5 min-w-0 grow items-center gap-2 rounded-md bg-dialog ps-1.5 pe-2 outline outline-offset-(--surface-outline-offset) outline-border">
            <Icon name="text-title" className="text-muted" size={12} />
            <span className="min-w-0 flex-1 truncate">font-sans</span>
          </div>
          <Icon name="link-unlink" className="ms-auto text-muted" size={14} />
        </div>
        <dl className="grid grid-cols-2 gap-1">
          <span className="flex h-6 min-w-0 items-center justify-between rounded-md bg-inset px-1">
            Medium
            <Icon
              name="chevron-down-sm"
              className="hidden text-muted @min-[11rem]/inspector:block"
            />
          </span>
          <PropertyValue label="Font size" icon="font" value="14" />
          <PropertyValue label="Line height" icon="line-height" value="20" />
          <PropertyValue
            label="Letter spacing"
            icon="letter-spacing"
            value="0%"
          />
        </dl>
        <TextAlignment
          compact
          className="[&_svg]:size-3 @min-[9.5rem]/inspector:[&_svg]:size-4"
        />
        <FormatControls
          compact
          className="[&_svg]:size-3 @min-[9.5rem]/inspector:[&_svg]:size-4"
        />
      </div>
      <div className="space-y-2 border-b border-line p-2 @min-[13rem]/inspector:p-3">
        <div className="flex items-center justify-end gap-0.5">
          <h3 className="sr-only flex items-center gap-2 font-medium">Fill</h3>
          <Glyph
            name="swatches"
            className="w-4 text-muted @min-[11rem]/inspector:w-6"
          />
          <Glyph
            name="apps"
            className="w-4 text-muted @min-[11rem]/inspector:w-6"
          />
        </div>
        <div className="grid grid-cols-[1rem_minmax(0,1fr)_1rem_1rem] items-center gap-0.5 @min-[11rem]/inspector:grid-cols-[1.5rem_minmax(0,1fr)_1.5rem_1.5rem]">
          <Glyph name="bucket" className="w-full text-muted" />
          <ToggleGroup
            aria-label="Button fill"
            className="grid min-w-0 grid-cols-4 gap-0"
            value={[fill.name]}
            onValueChange={(values) => {
              const next = designFills.find((item) => item.name === values[0]);
              if (next) onFillChange(next);
            }}
          >
            {designFills.map((item) => (
              <Toggle
                key={item.name}
                value={item.name}
                aria-label={`${item.name} button`}
                size="icon-xs"
                className="w-full min-w-0"
              >
                <span
                  className="flex size-3 items-center justify-center rounded-full border border-black/10 text-violet-950 @min-[9.5rem]/inspector:size-4"
                  style={{ backgroundColor: item.color }}
                >
                  {fill.name === item.name && (
                    <Icon
                      name="check-sm"
                      className="size-3 @min-[9.5rem]/inspector:size-4"
                    />
                  )}
                </span>
              </Toggle>
            ))}
          </ToggleGroup>
          <DemoToggle
            pressed={!fillVisible}
            onPressedChange={(hidden) => onFillVisibleChange(!hidden)}
            icon="eye"
            activeIcon="eye-slash"
            label={fillVisible ? 'Hide fill' : 'Show fill'}
            size="icon-xs"
            className="w-full min-w-0"
          />
          <Glyph name="minus" className="w-full text-muted" />
        </div>
      </div>
      <div className="flex items-center justify-between border-b border-line px-2 py-2 @min-[13rem]/inspector:px-3">
        <h3 className="font-medium">Stroke</h3>
        <Glyph name="plus" className="text-muted" />
      </div>
      <div className="space-y-2 p-2 @min-[13rem]/inspector:p-3">
        <h3 className="font-medium">Effects</h3>
        <div className="flex items-center gap-2">
          <div className="flex h-6 min-w-0 flex-1 items-center gap-2 rounded-md border border-line px-2">
            <Icon name="shadow" className="text-muted" />
            <span className="min-w-0 flex-1 truncate" title="Drop shadow">
              Drop shadow
            </span>
          </div>
          <Icon name="eye" />
          <Icon name="minus" />
        </div>
      </div>
    </aside>
  );
}

const Glyph = createGlyph(Icon);

const { DemoToggle } = createDemoControls(Icon);
