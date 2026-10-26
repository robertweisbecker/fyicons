import { Icon } from '@/components/Icon';
import { ToggleGroup } from '@/components/ui/toggle-group';
import { DemoToggle, ControlDivider } from './DemoControls';

const marks = [
  ['bold', 'text-bold', 'Bold'],
  ['italic', 'italic', 'Italic'],
  ['underline', 'text-underline', 'Underline'],
  ['strike', 'text-strikethrough', 'Strikethrough'],
] as const;
const paragraphs = [
  'Good interfaces give the details room to breathe. Clear labels, considered spacing, and familiar symbols make the next step feel natural.',
  'A useful icon does more than decorate a button. It helps you understand what will happen next.',
];
const wordCount = paragraphs.join(' ').split(/\s+/).length;

export function EditorDemo() {
  return (
    <div className="flex flex-1 flex-col gap-4">
      <div
        role="toolbar"
        aria-label="Editor toolbar"
        className="flex flex-wrap items-center gap-1 rounded-xl bg-surface p-1.5 shadow-xs outline-1 outline-offset-(--surface-outline-offset) outline-ink/10"
      >
        <ToggleGroup multiple aria-label="Text formatting">
          {marks.map(([value, icon, label]) => (
            <DemoToggle key={value} value={value} label={label} icon={icon} />
          ))}
        </ToggleGroup>
        <ControlDivider />
        <ToggleGroup defaultValue={['paragraph']} aria-label="Paragraph style">
          {[
            ['paragraph', 'pilcrow', 'Paragraph'],
            ['quote', 'quotes', 'Quote'],
            ['list', 'list-bullet', 'Bulleted list'],
          ].map(([value, icon, label]) => (
            <DemoToggle
              key={value}
              value={value}
              label={label}
              icon={icon}
              activeIcon={value === 'quote' ? 'quotes-fill' : undefined}
            />
          ))}
        </ToggleGroup>
        <ControlDivider />
        <ToggleGroup defaultValue={['left']} aria-label="Paragraph alignment">
          {[
            ['left', 'text-align-start'],
            ['center', 'text-align-center'],
            ['right', 'text-align-end'],
          ].map(([value, icon]) => (
            <DemoToggle
              key={value}
              value={value}
              label={'Align ' + value}
              icon={icon}
            />
          ))}
        </ToggleGroup>
        <DemoToggle
          label="Copy document"
          icon="copy"
          activeIcon="copied"
          className="ml-auto"
        />
      </div>
      <div className="flex flex-1 flex-col rounded-xl bg-surface px-5 py-5 sm:px-7">
        <div className="mb-5 flex items-center gap-2 text-xs text-muted">
          <Icon name="notebook-open" />
          Studio notes<span className="ml-auto">Draft</span>
        </div>
        <h3 className="mb-4 font-serif text-3xl leading-tight">
          A little room to think.
        </h3>
        <div className="flex min-h-40 flex-col gap-5 text-base leading-7">
          {paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </div>
      <div className="flex items-center gap-1 text-muted">
        <DemoToggle label="Undo text edit" icon="arrow-counter-clockwise" />
        <DemoToggle label="Redo text edit" icon="arrow-clockwise" />
        <span className="ml-auto text-xs tabular-nums">{wordCount} words</span>
        <ControlDivider />
        <Icon name="eye" />
        <span className="text-xs">Only you</span>
      </div>
    </div>
  );
}
