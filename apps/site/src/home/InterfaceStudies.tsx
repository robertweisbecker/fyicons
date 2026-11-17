import { createIconLookup } from '@/components/createIconLookup';

import { Button } from '@/components/ui/button';
import {
  Menu,
  MenuTrigger,
  MenuContent,
  MenuGroup,
  MenuGroupLabel,
  MenuItem,
} from '@/components/ui/menu';
import { ToggleGroup } from '@/components/ui/toggle-group';
import { createDemoControls } from '@/demos/components/DemoControls';
import { cn } from '@/lib/utils';
import { createGlyph, panel } from './Study';
import { DeviceBattery, DeviceClock } from './DeviceStatus';

import Glyph0 from 'fyicons/icons/IconAppsPlus';
import Glyph1 from 'fyicons/icons/IconBattery';
import Glyph2 from 'fyicons/icons/IconBatteryCharging';
import Glyph3 from 'fyicons/icons/IconBatteryEmpty';
import Glyph4 from 'fyicons/icons/IconBatteryFullCharging';
import Glyph5 from 'fyicons/icons/IconBatteryLow';
import Glyph6 from 'fyicons/icons/IconBatteryMedium';
import Glyph7 from 'fyicons/icons/IconBluetooth';
import Glyph8 from 'fyicons/icons/IconBrowserPointer';
import Glyph9 from 'fyicons/icons/IconBrushTip';
import Glyph10 from 'fyicons/icons/IconChatRound';
import Glyph11 from 'fyicons/icons/IconCirclePlusFill';
import Glyph12 from 'fyicons/icons/IconCloud';
import Glyph13 from 'fyicons/icons/IconCode';
import Glyph14 from 'fyicons/icons/IconCodeBlock';
import Glyph15 from 'fyicons/icons/IconCodeRectangle';
import Glyph16 from 'fyicons/icons/IconComputer';
import Glyph17 from 'fyicons/icons/IconDesktop';
import Glyph18 from 'fyicons/icons/IconDesktopSimple';
import Glyph19 from 'fyicons/icons/IconDevices';
import Glyph20 from 'fyicons/icons/IconEllipsis';
import Glyph21 from 'fyicons/icons/IconFrame';
import Glyph22 from 'fyicons/icons/IconGhost';
import Glyph23 from 'fyicons/icons/IconHeading1';
import Glyph24 from 'fyicons/icons/IconHeading2';
import Glyph25 from 'fyicons/icons/IconHeading3';
import Glyph26 from 'fyicons/icons/IconImageAdd';
import Glyph27 from 'fyicons/icons/IconKeyboard';
import Glyph28 from 'fyicons/icons/IconKeys';
import Glyph29 from 'fyicons/icons/IconLaptop';
import Glyph30 from 'fyicons/icons/IconLaptopFill';
import Glyph31 from 'fyicons/icons/IconLineVertical';
import Glyph32 from 'fyicons/icons/IconListBullet';
import Glyph33 from 'fyicons/icons/IconListOrdered';
import Glyph34 from 'fyicons/icons/IconMobile';
import Glyph35 from 'fyicons/icons/IconParagraph';
import Glyph36 from 'fyicons/icons/IconParagraphBlockquote';
import Glyph37 from 'fyicons/icons/IconPenTip';
import Glyph38 from 'fyicons/icons/IconPencilTip';
import Glyph39 from 'fyicons/icons/IconPointer';
import Glyph40 from 'fyicons/icons/IconPointerFill';
import Glyph41 from 'fyicons/icons/IconRulersPointer';
import Glyph42 from 'fyicons/icons/IconScribble';
import Glyph43 from 'fyicons/icons/IconSquare';
import Glyph44 from 'fyicons/icons/IconStickyNoteAlt';
import Glyph45 from 'fyicons/icons/IconSwitches';
import Glyph46 from 'fyicons/icons/IconTablet';
import Glyph47 from 'fyicons/icons/IconTabletPencil';
import Glyph48 from 'fyicons/icons/IconTelevision';
import Glyph49 from 'fyicons/icons/IconTextBold';
import Glyph50 from 'fyicons/icons/IconTextHighlight';
import Glyph51 from 'fyicons/icons/IconTextIndent';
import Glyph52 from 'fyicons/icons/IconTextOutdent';
import Glyph53 from 'fyicons/icons/IconTextStrikethrough';
import Glyph54 from 'fyicons/icons/IconTextTitle';
import Glyph55 from 'fyicons/icons/IconTextTitleFill';
import Glyph56 from 'fyicons/icons/IconTextUnderline';
import Glyph57 from 'fyicons/icons/IconWifiFill';
import Glyph58 from 'fyicons/icons/IconTextAlignStart';
import Glyph59 from 'fyicons/icons/IconTextAlignCenter';
import Glyph60 from 'fyicons/icons/IconTextAlignEnd';
import Glyph61 from 'fyicons/icons/IconArrowToTop';
import Glyph62 from 'fyicons/icons/IconArrowsToMiddle';
import Glyph63 from 'fyicons/icons/IconArrowToBottom';
import Glyph64 from 'fyicons/icons/IconTextAlignJustify';
const Icon = createIconLookup({
  'apps-plus': { Component: Glyph0, id: '507:4379' },
  battery: { Component: Glyph1, id: '101:4287' },
  'battery-charging': { Component: Glyph2, id: '101:4288' },
  'battery-empty': { Component: Glyph3, id: '101:4289' },
  'battery-full-charging': { Component: Glyph4, id: '895:31023' },
  'battery-low': { Component: Glyph5, id: '101:4286' },
  'battery-medium': { Component: Glyph6, id: '101:4285' },
  bluetooth: { Component: Glyph7, id: '101:4282' },
  'browser-pointer': { Component: Glyph8, id: '701:1751' },
  'brush-tip': { Component: Glyph9, id: '137:4861' },
  'chat-round': { Component: Glyph10, id: '245:15024' },
  'circle-plus-fill': { Component: Glyph11, id: '721:399' },
  cloud: { Component: Glyph12, id: '129:5293' },
  code: { Component: Glyph13, id: '58:9531' },
  'code-block': { Component: Glyph14, id: '498:526' },
  'code-rectangle': { Component: Glyph15, id: '158:11603' },
  computer: { Component: Glyph16, id: '193:12982' },
  desktop: { Component: Glyph17, id: '59:9598' },
  'desktop-simple': { Component: Glyph18, id: '698:257' },
  devices: { Component: Glyph19, id: '378:8613' },
  ellipsis: { Component: Glyph20, id: '101:4340' },
  frame: { Component: Glyph21, id: '125:2609' },
  ghost: { Component: Glyph22, id: '727:314' },
  'heading-1': { Component: Glyph23, id: '59:9594' },
  'heading-2': { Component: Glyph24, id: '59:9593' },
  'heading-3': { Component: Glyph25, id: '59:9592' },
  'image-add': { Component: Glyph26, id: '747:3750' },
  keyboard: { Component: Glyph27, id: '495:2162' },
  keys: { Component: Glyph28, id: '752:4321' },
  laptop: { Component: Glyph29, id: '59:9597' },
  'laptop-fill': { Component: Glyph30, id: '193:13034' },
  'line-vertical': { Component: Glyph31, id: '469:1980' },
  'list-bullet': { Component: Glyph32, id: '148:6841' },
  'list-ordered': { Component: Glyph33, id: '132:2732' },
  mobile: { Component: Glyph34, id: '378:8193' },
  paragraph: { Component: Glyph35, id: '701:1671' },
  'paragraph-blockquote': { Component: Glyph36, id: '378:8119' },
  'pen-tip': { Component: Glyph37, id: '137:4862' },
  'pencil-tip': { Component: Glyph38, id: '137:4864' },
  pointer: { Component: Glyph39, id: '140:6033' },
  'pointer-fill': { Component: Glyph40, id: '498:2179' },
  'rulers-pointer': { Component: Glyph41, id: '732:5189' },
  scribble: { Component: Glyph42, id: '118:2178' },
  square: { Component: Glyph43, id: '245:15233' },
  'sticky-note-alt': { Component: Glyph44, id: '392:10963' },
  switches: { Component: Glyph45, id: '732:1177' },
  tablet: { Component: Glyph46, id: '486:595' },
  'tablet-pencil': { Component: Glyph47, id: '520:5287' },
  television: { Component: Glyph48, id: '472:526' },
  'text-bold': { Component: Glyph49, id: '101:4281' },
  'text-highlight': { Component: Glyph50, id: '577:717' },
  'text-indent': { Component: Glyph51, id: '376:6540' },
  'text-outdent': { Component: Glyph52, id: '717:4192' },
  'text-strikethrough': { Component: Glyph53, id: '338:7712' },
  'text-title': { Component: Glyph54, id: '58:9540' },
  'text-title-fill': { Component: Glyph55, id: '1084:12366' },
  'text-underline': { Component: Glyph56, id: '100:2288' },
  'wifi-fill': { Component: Glyph57, id: '498:491' },
  'text-align-start': { Component: Glyph58, id: '142:6374' },
  'text-align-center': { Component: Glyph59, id: '142:6375' },
  'text-align-end': { Component: Glyph60, id: '142:6376' },
  'align-top': { Component: Glyph61, id: '518:4797' },
  'align-middle': { Component: Glyph62, id: '521:7822' },
  'align-bottom': { Component: Glyph63, id: '518:4796' },
  'text-align-justify': { Component: Glyph64, id: '286:19656' },
});

export function StatusBarStudy() {
  return (
    <div className="flex max-w-full flex-wrap items-center justify-center gap-x-4 gap-y-3 bg-inset p-2 text-xs">
      <div className="flex items-center gap-4">
        {['sticky-note-alt', 'keys', 'keyboard', 'bluetooth'].map((name) => (
          <Icon key={name} name={name} />
        ))}
        <DeviceBattery />
        <Icon name="wifi-fill" />
        <Icon name="switches" />
      </div>
      <DeviceClock />
    </div>
  );
}

export function EditorStudy() {
  return (
    <div
      className={cn(
        panel,
        'flex max-w-full flex-wrap items-center justify-center gap-1 p-2',
      )}
    >
      <Glyph name="pointer" />
      <Glyph name="line-vertical" className="w-4 text-border" />
      <Glyph name="pen-tip" />
      <Glyph name="brush-tip" />
      <Glyph name="pencil-tip" />
      <Glyph name="line-vertical" className="w-4 text-border" />
      <Glyph name="frame" />
      <Glyph name="square" />
      <Glyph name="text-title" />
      <Glyph name="chat-round" />
      <Glyph name="apps-plus" />
      <Glyph name="line-vertical" className="w-4 text-border" />
      <ToggleGroup
        defaultValue={['scribble']}
        aria-label="Editor mode"
        className="gap-0 rounded-md bg-canvas p-px"
      >
        {[
          ['scribble', 'Draw'],
          ['rulers-pointer', 'Measure'],
          ['code', 'Code'],
        ].map(([icon, label]) => (
          <DemoToggle
            variant="elevated"
            key={icon}
            value={icon}
            icon={icon}
            label={label}
            size="icon-sm"
          />
        ))}
      </ToggleGroup>
    </div>
  );
}

export function DevicesStudy() {
  return (
    <div className={cn(panel, 'w-46 p-1 text-sm')}>
      <div className="flex h-8 items-center gap-2 px-1.5 text-xs text-muted">
        <Icon name="devices" />
        Devices
      </div>
      {[
        ['mobile', 'Mobile'],
        ['tablet', 'Tablet'],
        ['tablet-pencil', 'Tablet'],
        ['laptop', 'Laptop'],
        ['desktop', 'Desktop'],
        ['desktop-simple', 'Desktop'],
        ['computer', 'Desktop'],
        ['television', 'TV'],
        ['browser-pointer', 'Remote'],
        ['cloud', 'Cloud'],
      ].map(([icon, label], i) => (
        <div
          key={icon}
          className={cn(
            'flex h-8 items-center gap-2 rounded-md px-1.5',
            i === 0 && 'bg-hover text-ink',
          )}
        >
          <Icon name={icon} />
          {label}
        </div>
      ))}
    </div>
  );
}

export function RichTextStudy() {
  return (
    <div className="w-full max-w-96 min-w-0">
      <div className="flex items-center gap-1 rounded-md bg-surface p-1 text-muted">
        <div className="flex min-w-0 flex-1 items-center gap-1 overflow-x-auto p-1">
          <div className="flex shrink-0 gap-px">
            {[
              ['text-bold', 'Bold'],
              ['text-strikethrough', 'Strikethrough'],
              ['text-underline', 'Underline'],
            ].map(([icon, label]) => (
              <DemoToggle key={icon} icon={icon} label={label} size="icon-sm" />
            ))}
          </div>
          <span aria-hidden className="h-3 w-px shrink-0 bg-line" />
          <div className="flex shrink-0 gap-px">
            <ToggleGroup aria-label="Rich text list style" className="gap-px">
              {[
                ['list-ordered', 'Numbered list'],
                ['list-bullet', 'Bullet list'],
              ].map(([icon, label]) => (
                <DemoToggle
                  key={icon}
                  value={icon}
                  icon={icon}
                  label={label}
                  size="icon-sm"
                />
              ))}
            </ToggleGroup>
            <Menu>
              <MenuTrigger
                aria-label="More formatting"
                render={<Button variant="ghost" size="icon-sm" />}
              >
                <Icon name="ellipsis" />
              </MenuTrigger>
              <MenuContent className="w-40">
                <MenuGroup>
                  {[
                    ['text-indent', 'Indent'],
                    ['text-outdent', 'Outdent'],
                  ].map(([icon, label]) => (
                    <MenuItem key={icon}>
                      <Icon name={icon} className="text-muted" />
                      {label}
                    </MenuItem>
                  ))}
                </MenuGroup>
              </MenuContent>
            </Menu>
          </div>
          <span aria-hidden className="h-3 w-px shrink-0 bg-line" />
          <ToggleGroup
            aria-label="Rich text alignment"
            className="shrink-0 gap-px"
          >
            {['start', 'center', 'end', 'justify'].map((value) => (
              <DemoToggle
                key={value}
                value={value}
                icon={'text-align-' + value}
                label={'Align ' + value}
                size="icon-sm"
              />
            ))}
          </ToggleGroup>
        </div>
        <span aria-hidden className="h-3 w-px shrink-0 bg-line" />
        <Menu>
          <MenuTrigger
            aria-label="Insert"
            render={<Button variant="ghost" size="icon-sm" />}
          >
            <Icon name="circle-plus-fill" />
          </MenuTrigger>
          <MenuContent align="end" className="w-56">
            <MenuGroup>
              <MenuGroupLabel>Insert</MenuGroupLabel>
              {[
                ['image-add', 'Image'],
                ['heading-1', 'Heading 1'],
                ['heading-2', 'Heading 2'],
                ['heading-3', 'Heading 3'],
                ['paragraph', 'Text'],
                ['paragraph-blockquote', 'Blockquote'],
                ['code-rectangle', 'Inline code'],
                ['code-block', 'Code block'],
                ['text-highlight', 'Mark'],
              ].map(([icon, label]) => (
                <MenuItem key={icon}>
                  <Icon name={icon} className="text-muted" />
                  {label}
                </MenuItem>
              ))}
            </MenuGroup>
          </MenuContent>
        </Menu>
      </div>
    </div>
  );
}

const Glyph = createGlyph(Icon);

const { DemoToggle } = createDemoControls(Icon);
