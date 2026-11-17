import { useState } from 'react';
import { createIconLookup } from '@/components/createIconLookup';

import { ToggleGroup } from '@/components/ui/toggle-group';
import { createDemoControls } from '@/demos/components/DemoControls';
import { cn } from '@/lib/utils';
import { createGlyph } from '../Study';
import { DesignInspector, designFills } from './DesignInspector';
import { DesignRail } from './DesignRail';
import { Window, WindowControls } from './Window';

import Glyph0 from 'fyicons/icons/IconAngle';
import Glyph1 from 'fyicons/icons/IconApps';
import Glyph2 from 'fyicons/icons/IconAppsPlus';
import Glyph3 from 'fyicons/icons/IconArrowClockwise';
import Glyph4 from 'fyicons/icons/IconArrowLeft';
import Glyph5 from 'fyicons/icons/IconArrowRight';
import Glyph6 from 'fyicons/icons/IconBookOpen3';
import Glyph7 from 'fyicons/icons/IconBorderRadius';
import Glyph8 from 'fyicons/icons/IconBucket';
import Glyph9 from 'fyicons/icons/IconCaretsMaximize';
import Glyph10 from 'fyicons/icons/IconChatRound';
import Glyph11 from 'fyicons/icons/IconCheckSm';
import Glyph12 from 'fyicons/icons/IconChevronDownSm';
import Glyph13 from 'fyicons/icons/IconCirclePlus';
import Glyph14 from 'fyicons/icons/IconCirclePlusFill';
import Glyph15 from 'fyicons/icons/IconCircleUserFill';
import Glyph16 from 'fyicons/icons/IconCircleXFill';
import Glyph17 from 'fyicons/icons/IconCode';
import Glyph18 from 'fyicons/icons/IconComponent';
import Glyph19 from 'fyicons/icons/IconEllipsisV';
import Glyph20 from 'fyicons/icons/IconEye';
import Glyph21 from 'fyicons/icons/IconEyeFill';
import Glyph22 from 'fyicons/icons/IconEyeSlash';
import Glyph23 from 'fyicons/icons/IconEyeSlashFill';
import Glyph24 from 'fyicons/icons/IconFile';
import Glyph25 from 'fyicons/icons/IconFont';
import Glyph26 from 'fyicons/icons/IconFrame';
import Glyph27 from 'fyicons/icons/IconGas';
import Glyph28 from 'fyicons/icons/IconGasFill';
import Glyph29 from 'fyicons/icons/IconGlobeSimple';
import Glyph30 from 'fyicons/icons/IconHeight';
import Glyph31 from 'fyicons/icons/IconHome';
import Glyph32 from 'fyicons/icons/IconHomeFill';
import Glyph33 from 'fyicons/icons/IconInfo';
import Glyph34 from 'fyicons/icons/IconInfoFill';
import Glyph35 from 'fyicons/icons/IconLetterSpacing';
import Glyph36 from 'fyicons/icons/IconLineHeight';
import Glyph37 from 'fyicons/icons/IconLineHorizontal';
import Glyph38 from 'fyicons/icons/IconLinkUnlink';
import Glyph39 from 'fyicons/icons/IconLockOpen';
import Glyph40 from 'fyicons/icons/IconLockOpenFill';
import Glyph41 from 'fyicons/icons/IconMinus';
import Glyph42 from 'fyicons/icons/IconPenTool';
import Glyph43 from 'fyicons/icons/IconPlus';
import Glyph44 from 'fyicons/icons/IconPointer';
import Glyph45 from 'fyicons/icons/IconPointerFill';
import Glyph46 from 'fyicons/icons/IconPuzzlePiece';
import Glyph47 from 'fyicons/icons/IconRulersPointer';
import Glyph48 from 'fyicons/icons/IconScribble';
import Glyph49 from 'fyicons/icons/IconShadow';
import Glyph50 from 'fyicons/icons/IconSparkle';
import Glyph51 from 'fyicons/icons/IconSparkleFill';
import Glyph52 from 'fyicons/icons/IconSquare';
import Glyph53 from 'fyicons/icons/IconStarFill';
import Glyph54 from 'fyicons/icons/IconSwatches';
import Glyph55 from 'fyicons/icons/IconTextTitle';
import Glyph56 from 'fyicons/icons/IconTextTitleFill';
import Glyph57 from 'fyicons/icons/IconToken';
import Glyph58 from 'fyicons/icons/IconToolbox';
import Glyph59 from 'fyicons/icons/IconVideoFill';
import Glyph60 from 'fyicons/icons/IconWidth';
import Glyph61 from 'fyicons/icons/IconX';
import Glyph62 from 'fyicons/icons/IconZoomIn';
const Icon = createIconLookup({
  angle: { Component: Glyph0, id: '895:30680' },
  apps: { Component: Glyph1, id: '507:4365' },
  'apps-plus': { Component: Glyph2, id: '507:4379' },
  'arrow-clockwise': { Component: Glyph3, id: '334:6678' },
  'arrow-left': { Component: Glyph4, id: '518:4811' },
  'arrow-right': { Component: Glyph5, id: '518:4810' },
  'book-open-3': { Component: Glyph6, id: '918:31793' },
  'border-radius': { Component: Glyph7, id: '114:2223' },
  bucket: { Component: Glyph8, id: '137:4742' },
  'carets-maximize': { Component: Glyph9, id: '142:6370' },
  'chat-round': { Component: Glyph10, id: '245:15024' },
  'check-sm': { Component: Glyph11, id: '158:11581' },
  'chevron-down-sm': { Component: Glyph12, id: '142:6351' },
  'circle-plus': { Component: Glyph13, id: '721:395' },
  'circle-plus-fill': { Component: Glyph14, id: '721:399' },
  'circle-user-fill': { Component: Glyph15, id: '390:10591' },
  'circle-x-fill': { Component: Glyph16, id: '297:3620' },
  code: { Component: Glyph17, id: '58:9531' },
  component: { Component: Glyph18, id: '58:9529' },
  'ellipsis-v': { Component: Glyph19, id: '487:403' },
  eye: { Component: Glyph20, id: '120:2551' },
  'eye-fill': { Component: Glyph21, id: '1010:19329' },
  'eye-slash': { Component: Glyph22, id: '120:2554' },
  'eye-slash-fill': { Component: Glyph23, id: '1366:1582' },
  file: { Component: Glyph24, id: '224:14313' },
  font: { Component: Glyph25, id: '148:6692' },
  frame: { Component: Glyph26, id: '125:2609' },
  gas: { Component: Glyph27, id: '1020:10458' },
  'gas-fill': { Component: Glyph28, id: '1167:1488' },
  'globe-simple': { Component: Glyph29, id: '193:13372' },
  height: { Component: Glyph30, id: '919:32764' },
  home: { Component: Glyph31, id: '545:8586' },
  'home-fill': { Component: Glyph32, id: '545:8585' },
  info: { Component: Glyph33, id: '132:4339' },
  'info-fill': { Component: Glyph34, id: '487:1519' },
  'letter-spacing': { Component: Glyph35, id: '919:32842' },
  'line-height': { Component: Glyph36, id: '593:3739' },
  'line-horizontal': { Component: Glyph37, id: '475:520' },
  'link-unlink': { Component: Glyph38, id: '550:8814' },
  'lock-open': { Component: Glyph39, id: '193:13627' },
  'lock-open-fill': { Component: Glyph40, id: '752:4267' },
  minus: { Component: Glyph41, id: '667:899' },
  'pen-tool': { Component: Glyph42, id: '58:9553' },
  plus: { Component: Glyph43, id: '120:2544' },
  pointer: { Component: Glyph44, id: '140:6033' },
  'pointer-fill': { Component: Glyph45, id: '498:2179' },
  'puzzle-piece': { Component: Glyph46, id: '123:2474' },
  'rulers-pointer': { Component: Glyph47, id: '732:5189' },
  scribble: { Component: Glyph48, id: '118:2178' },
  shadow: { Component: Glyph49, id: '130:2688' },
  sparkle: { Component: Glyph50, id: '732:5505' },
  'sparkle-fill': { Component: Glyph51, id: '856:18075' },
  square: { Component: Glyph52, id: '245:15233' },
  'star-fill': { Component: Glyph53, id: '652:850' },
  swatches: { Component: Glyph54, id: '100:2283' },
  'text-title': { Component: Glyph55, id: '58:9540' },
  'text-title-fill': { Component: Glyph56, id: '1084:12366' },
  token: { Component: Glyph57, id: '158:11621' },
  toolbox: { Component: Glyph58, id: '702:1828' },
  'video-fill': { Component: Glyph59, id: '1013:19487' },
  width: { Component: Glyph60, id: '919:32781' },
  x: { Component: Glyph61, id: '506:3897' },
  'zoom-in': { Component: Glyph62, id: '716:3726' },
});

const tools = [
  ['pointer', 'Move'],
  ['frame', 'Frame'],
  ['square', 'Rectangle'],
  ['pen-tool', 'Pen'],
  ['text-title', 'Text'],
  ['chat-round', 'Comment'],
  ['apps-plus', 'Actions'],
] as const;
export function DesignApp() {
  const [tool, setTool] = useState(['pointer']);
  const [fill, setFill] = useState(designFills[0]);
  const [fillVisible, setFillVisible] = useState(true);
  return (
    <Window
      title="Design"
      header={
        <div
          className="flex h-9 shrink-0 items-center border-b border-line bg-bg text-xs text-muted"
          aria-label="Design app bar"
        >
          <WindowControls />
          <DemoIconButton
            label="Design home"
            icon="home"
            size="icon-sm"
            className="mx-1"
          />
          <DemoIconButton
            label="Community"
            icon="globe-simple"
            size="icon-sm"
            className="mr-1"
          />
          <div className="flex h-full min-w-0 items-center gap-2 border-x border-line bg-surface px-3 text-ink">
            <Icon name="pen-tool" className="text-control-accent" />
            <span className="min-w-0 truncate">Design</span>
            <Glyph name="x" className="ml-3 text-muted" />
          </div>
        </div>
      }
    >
      <div className="relative flex min-h-0 flex-1">
        <DesignRail />
        <div
          className="@container/design-canvas relative isolate flex min-h-0 min-w-0 flex-1 items-center justify-center overflow-hidden bg-inset p-2 pb-28 @2xl/window:p-4 @2xl/window:pb-28"
          role="region"
          aria-label="Design canvas"
        >
          <div className="relative shrink-0 scale-40 @min-[6rem]/design-canvas:scale-60 @min-[8rem]/design-canvas:scale-75 @min-[10rem]/design-canvas:scale-90 @min-[12rem]/design-canvas:scale-100">
            <div
              className="relative h-12 w-40 rounded-xl p-px shadow-[0_2px_1px_#00000012,0_7px_10px_-3px_#00000026]"
              style={{
                backgroundColor: fillVisible
                  ? `color-mix(in srgb, ${fill.color}, black 24%)`
                  : 'transparent',
              }}
            >
              <div
                className={cn(
                  'inline-flex h-[calc(100%-3px)] w-full shrink-0 items-center justify-center gap-2 rounded-[11px] border border-white/40 bg-linear-to-b from-white/45 via-white/10 to-black/5 text-sm leading-5 font-medium shadow-[inset_0_1px_0_#ffffffb3,inset_0_-1px_0_#0000000f]',
                  fillVisible
                    ? 'text-violet-950 [text-shadow:0_1px_0_#ffffff60]'
                    : 'text-ink',
                )}
                style={{
                  backgroundColor: fillVisible ? fill.color : 'transparent',
                }}
              >
                <Icon name="plus" />
                Create
              </div>
              <span
                aria-hidden
                className="pointer-events-none absolute -inset-2 border border-control-accent"
              >
                <span className="absolute -top-1 -left-1 size-2 border border-control-accent bg-white" />
                <span className="absolute -top-1 -right-1 size-2 border border-control-accent bg-white" />
                <span className="absolute -bottom-1 -left-1 size-2 border border-control-accent bg-white" />
                <span className="absolute -right-1 -bottom-1 size-2 border border-control-accent bg-white" />
              </span>
            </div>
            <span className="absolute top-full left-1/2 mt-3 -translate-x-1/2 rounded bg-control-accent px-1.5 py-px text-xs whitespace-nowrap text-white">
              160 × 48
            </span>
          </div>
          <div className="absolute inset-x-2 bottom-4 flex justify-center">
            <div
              className="flex w-fit max-w-full flex-wrap items-center justify-center gap-1 rounded-xl bg-surface p-1 shadow-md ring ring-line"
              aria-label="Canvas toolbar"
            >
              <ToggleGroup
                aria-label="Canvas tools"
                value={tool}
                onValueChange={(v) => v.length && setTool(v)}
                className="max-w-full shrink-0 flex-wrap justify-center gap-0.5"
              >
                {tools.map(([icon, label]) => (
                  <DemoToggle
                    key={icon}
                    value={icon}
                    icon={icon}
                    label={`${label}`}
                    size="icon-sm"
                    className={cn(
                      'data-pressed:bg-control-accent data-pressed:text-white data-pressed:hover:bg-control-accent',
                      [
                        'square',
                        'text-title',
                        'chat-round',
                        'apps-plus',
                      ].includes(icon) && 'max-md:hidden',
                    )}
                  />
                ))}
              </ToggleGroup>
              <ToggleGroup
                defaultValue={['rulers-pointer']}
                aria-label="Canvas mode"
                className="max-w-full shrink-0 flex-wrap justify-center gap-0 rounded-md bg-canvas p-px"
              >
                {[
                  ['scribble', 'Draw'],
                  ['rulers-pointer', 'Design'],
                  ['code', 'Dev Mode'],
                ].map(([icon, label]) => (
                  <DemoToggle
                    key={icon}
                    value={icon}
                    icon={icon}
                    label={`${label}`}
                    variant="elevated"
                    size="icon-sm"
                  />
                ))}
              </ToggleGroup>
            </div>
          </div>
        </div>
        <DesignInspector
          fill={fill}
          onFillChange={setFill}
          fillVisible={fillVisible}
          onFillVisibleChange={setFillVisible}
        />
      </div>
    </Window>
  );
}

const Glyph = createGlyph(Icon);

const { DemoIconButton, DemoToggle } = createDemoControls(Icon);
