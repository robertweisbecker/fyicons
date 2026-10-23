import { Icon } from '@/components/Icon';
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
import { DemoToggle } from '@/demos/components/DemoControls';
import { cn } from '@/lib/utils';
import { Glyph, panel } from './Study';

export function StatusBarStudy() {
  return (
    <div className="flex max-w-full flex-wrap items-center justify-center gap-x-4 gap-y-3 bg-inset p-2 text-xs">
      <div className="flex items-center gap-4">
        {['sticky-note-2', 'keys', 'keyboard', 'bluetooth'].map((name) => (
          <Icon key={name} name={name} />
        ))}
        <span className="flex items-center gap-1">
          100%
          <Icon name="battery" />
        </span>
        <Icon name="wifi-fill" />
        <Icon name="switches" />
      </div>
      <span className="whitespace-nowrap">Tue Oct 6 6:31 PM</span>
    </div>
  );
}

export function EditorStudy() {
  return (
    <div className={cn(panel, 'flex items-center justify-center gap-1 p-2')}>
      <Glyph name="pointer" />
      <Glyph name="line-vertical" className="w-4 text-border" />
      <Glyph name="pen-tip" />
      <Glyph name="brush-tip" />
      <Glyph name="pencil-tip" />
      <Glyph name="line-vertical" className="w-4 text-border" />
      <Glyph name="frame" />
      <Glyph name="square" />
      <Glyph name="text" />
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
          ['pointer-rulers', 'Measure'],
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
                ['text-blockquote', 'Blockquote'],
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
