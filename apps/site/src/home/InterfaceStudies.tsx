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
import {
  IconAppsPlus,
  IconBattery,
  IconBatteryCharging,
  IconBatteryEmpty,
  IconBatteryFullCharging,
  IconBatteryLow,
  IconBatteryMedium,
  IconBluetooth,
  IconBrowserPointer,
  IconBrushTip,
  IconChatRound,
  IconCirclePlusFill,
  IconCloud,
  IconCode,
  IconCodeBlock,
  IconCodeRectangle,
  IconComputer,
  IconDesktop,
  IconDesktopSimple,
  IconDevices,
  IconEllipsis,
  IconFrame,
  IconGhost,
  IconHeading1,
  IconHeading2,
  IconHeading3,
  IconImageAdd,
  IconKeyboard,
  IconKeys,
  IconLaptop,
  IconLaptopFill,
  IconLineVertical,
  IconListBullet,
  IconListOrdered,
  IconMobile,
  IconParagraph,
  IconParagraphBlockquote,
  IconPenTip,
  IconPencilTip,
  IconPointer,
  IconPointerFill,
  IconRulersPointer,
  IconScribble,
  IconSquare,
  IconStickyNoteAlt,
  IconSwitches,
  IconTablet,
  IconTabletPencil,
  IconTelevision,
  IconTextBold,
  IconTextHighlight,
  IconTextIndent,
  IconTextOutdent,
  IconTextStrikethrough,
  IconTextTitle,
  IconTextTitleFill,
  IconTextUnderline,
  IconWifiFill,
  IconTextAlignStart,
  IconTextAlignCenter,
  IconTextAlignEnd,
  IconArrowToTop,
  IconArrowsToMiddle,
  IconArrowToBottom,
  IconTextAlignJustify,
} from 'fyicons';

const Icon = createIconLookup({
  'apps-plus': IconAppsPlus,
  battery: IconBattery,
  'battery-charging': IconBatteryCharging,
  'battery-empty': IconBatteryEmpty,
  'battery-full-charging': IconBatteryFullCharging,
  'battery-low': IconBatteryLow,
  'battery-medium': IconBatteryMedium,
  bluetooth: IconBluetooth,
  'browser-pointer': IconBrowserPointer,
  'brush-tip': IconBrushTip,
  'chat-round': IconChatRound,
  'circle-plus-fill': IconCirclePlusFill,
  cloud: IconCloud,
  code: IconCode,
  'code-block': IconCodeBlock,
  'code-rectangle': IconCodeRectangle,
  computer: IconComputer,
  desktop: IconDesktop,
  'desktop-simple': IconDesktopSimple,
  devices: IconDevices,
  ellipsis: IconEllipsis,
  frame: IconFrame,
  ghost: IconGhost,
  'heading-1': IconHeading1,
  'heading-2': IconHeading2,
  'heading-3': IconHeading3,
  'image-add': IconImageAdd,
  keyboard: IconKeyboard,
  keys: IconKeys,
  laptop: IconLaptop,
  'laptop-fill': IconLaptopFill,
  'line-vertical': IconLineVertical,
  'list-bullet': IconListBullet,
  'list-ordered': IconListOrdered,
  mobile: IconMobile,
  paragraph: IconParagraph,
  'paragraph-blockquote': IconParagraphBlockquote,
  'pen-tip': IconPenTip,
  'pencil-tip': IconPencilTip,
  pointer: IconPointer,
  'pointer-fill': IconPointerFill,
  'rulers-pointer': IconRulersPointer,
  scribble: IconScribble,
  square: IconSquare,
  'sticky-note-alt': IconStickyNoteAlt,
  switches: IconSwitches,
  tablet: IconTablet,
  'tablet-pencil': IconTabletPencil,
  television: IconTelevision,
  'text-bold': IconTextBold,
  'text-highlight': IconTextHighlight,
  'text-indent': IconTextIndent,
  'text-outdent': IconTextOutdent,
  'text-strikethrough': IconTextStrikethrough,
  'text-title': IconTextTitle,
  'text-title-fill': IconTextTitleFill,
  'text-underline': IconTextUnderline,
  'wifi-fill': IconWifiFill,
  'text-align-start': IconTextAlignStart,
  'text-align-center': IconTextAlignCenter,
  'text-align-end': IconTextAlignEnd,
  'align-top': IconArrowToTop,
  'align-middle': IconArrowsToMiddle,
  'align-bottom': IconArrowToBottom,
  'text-align-justify': IconTextAlignJustify,
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
