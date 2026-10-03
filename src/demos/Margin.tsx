import { cn } from '../lib/utils';
import { useRef, useState } from 'react';
import { ToggleIcon } from '@/components/ToggleIcon';
import { ToggleGroup } from '@/components/ui/toggle-group';
import { Toggle } from '@/components/ui/toggle';
import { Icon } from '../components/Icon';
import { IconButton } from '@/components/IconButton';
import { copy } from '../lib/downloads';
import { readPreference } from '../lib/preferences';

const initialText =
  'Review the updated navigation and check the spacing between labels and icons.\n\nConfirm keyboard focus, selected states, and contrast before the next release.';
export function Margin({ notify }: { notify: (message: string) => void }) {
  const initial = useRef(
    readPreference('fyicons-writing-demo-v1', initialText),
  );
  const [text, setText] = useState(initial.current);
  const [formats, setFormats] = useState<string[]>([]);
  const editor = useRef<HTMLDivElement>(null);
  const save = (value: string) => {
    setText(value);
    try {
      localStorage.setItem('fyicons-writing-demo-v1', JSON.stringify(value));
    } catch {
      /* Optional local save. */
    }
  };
  return (
    <div
      className={cn(
        'demo-card flex h-115 flex-col overflow-hidden rounded-xl border border-neutral-200 bg-olive-50 text-olive-600 scheme-light shadow-sm max-[680px]:h-117.5',
      )}
    >
      <div
        className={cn(
          'flex h-14 items-center justify-between border-b border-olive-200 px-5',
        )}
      >
        <strong className={cn('flex items-center gap-2')}>
          <Icon name="book-open" />
          margin
        </strong>
        <span
          className={cn(
            'flex items-center gap-1 rounded-md border border-olive-200 bg-white px-1 text-xs text-olive-600',
          )}
        >
          <Icon name="cloud" className="text-olive-400" />
          Synced
        </span>
        <Toggle size="icon" aria-label="Bookmark this document">
          <ToggleIcon icon="bookmark" activeIcon="bookmark-fill" />
        </Toggle>
      </div>
      <div
        className={cn(
          'flex items-center gap-2 border-b border-olive-200 px-5 py-3 text-xs text-olive-500',
        )}
      >
        <Icon name="library" />
        Library
        <Icon name="chevron-right-sm" />
        <Icon name="notebook-open" />
        Meeting notes
        <Icon name="chevron-right-sm" />
        <span
          className={cn('flex items-center gap-1 font-medium text-olive-700')}
        >
          <Icon name="sticky-note" />
          Note
        </span>
      </div>
      <div
        className={cn(
          'flex flex-wrap items-center gap-1 border-b border-olive-200 bg-olive-100 px-3 py-1',
        )}
        role="toolbar"
        aria-label="Document formatting"
      >
        <ToggleGroup
          multiple
          value={formats}
          onValueChange={setFormats}
          aria-label="Text styles"
        >
          {[
            ['bold', 'text-bold', 'Bold'],
            ['italic', 'italic', 'Italic'],
            ['underline', 'text-underline', 'Underline'],
            ['list', 'list-bullet', 'Toggle list'],
            ['quote', 'quote-alt', 'Toggle quote'],
          ].map(([value, icon, label]) => (
            <Toggle size="icon" key={value} aria-label={label} value={value}>
              {value === 'quote' ? (
                <ToggleIcon icon="quote-alt" activeIcon="quotes" />
              ) : (
                <Icon name={icon} />
              )}
            </Toggle>
          ))}
        </ToggleGroup>
        <IconButton
          icon="arrow-undo"
          label="Restore original text"
          onClick={() => {
            if (editor.current) editor.current.textContent = initialText;
            save(initialText);
            setFormats([]);
          }}
        />
        <IconButton
          icon="copy-lg"
          label="Copy document text"
          onClick={async () =>
            notify(
              (await copy(text)) ? 'Document copied' : 'Clipboard unavailable',
            )
          }
        />
      </div>
      <div className={cn('min-h-0 flex-1 overflow-auto px-7 py-5')}>
        <h4 className={cn('mb-4 font-serif text-3xl tracking-normal')}>
          Review notes
        </h4>
        <div
          ref={editor}
          contentEditable
          suppressContentEditableWarning
          role="textbox"
          aria-label="Document text"
          aria-multiline="true"
          spellCheck={false}
          onInput={(event) => save(event.currentTarget.textContent ?? '')}
          className={cn(
            'min-h-22 text-sm leading-relaxed whitespace-pre-wrap outline-none',
            formats.includes('bold') && 'font-bold',
            formats.includes('italic') && 'italic',
            formats.includes('underline') && 'underline',
            formats.includes('quote') ? 'border-l-2 border-rose-400 pl-3' : '',
            formats.includes('list')
              ? "list-treatment relative pl-4 before:absolute before:left-0 before:content-['•']"
              : '',
          )}
        >
          {initial.current}
        </div>
        <p
          className={cn(
            'mt-5 flex items-center gap-2 rounded-md bg-amber-500/10 p-2 text-xs text-amber-700',
          )}
        >
          <Icon name="lightbulb" className="text-amber-500" />
          Next review: Friday
        </p>
      </div>
      <div
        className={cn(
          'flex items-center justify-between border-t border-olive-200 px-5 py-3 text-xs text-stone-500',
        )}
      >
        <span className={cn('flex items-center gap-1')}>
          <Icon name="pen" />
          {text.trim().split(/\s+/).filter(Boolean).length} words
        </span>
        <span className={cn('flex items-center gap-1')}>
          <Icon name="eye-open" />
          Only you
        </span>
      </div>
    </div>
  );
}
