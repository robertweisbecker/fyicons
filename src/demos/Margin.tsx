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
        'demo-card flex h-115 flex-col overflow-hidden rounded-xl border border-neutral-200 bg-taupe-50 text-olive-600 scheme-light shadow-sm max-[680px]:h-117.5',
      )}
    >
      <div
        className={cn(
          'flex h-14 items-center justify-between border-b border-taupe-200 px-5',
        )}
      >
        <strong className={cn('flex items-center gap-2')}>
          <Icon name="book-open" />
          margin
        </strong>
        <span className={cn('flex items-center gap-2 text-xs text-stone-500')}>
          <Icon name="cloud" />
          Saved locally
        </span>
        <Toggle size="icon" aria-label="Bookmark this document">
          <ToggleIcon icon="bookmark" activeIcon="bookmark-fill" />
        </Toggle>
      </div>
      <div
        className={cn(
          'flex items-center gap-2 border-b border-olive-200 px-5 py-3 text-xs text-stone-500',
        )}
      >
        <Icon name="library" />
        Personal library
        <Icon name="chevron-right-sm" />
        Review notes
      </div>
      <div
        className={cn(
          'flex flex-wrap items-center gap-1 border-b border-olive-200 px-4 py-1',
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
            ['quote', 'quote-outline', 'Toggle quote'],
          ].map(([value, icon, label]) => (
            <Toggle size="icon" key={value} aria-label={label} value={value}>
              {value === 'quote' ? (
                <ToggleIcon icon="quote-outline" activeIcon="quote-default" />
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
          icon="copy"
          label="Copy document text"
          onClick={async () =>
            notify(
              (await copy(text)) ? 'Document copied' : 'Clipboard unavailable',
            )
          }
        />
      </div>
      <div className={cn('min-h-0 flex-1 overflow-auto px-7 py-5')}>
        <div
          className={cn(
            'mb-3 flex items-center gap-2 text-xs tracking-normal text-olive-500',
          )}
        >
          <Icon name="sun" />
          Project notes
        </div>
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
            formats.includes('quote') ? 'border-l-2 border-olive-400 pl-3' : '',
            formats.includes('list')
              ? "list-treatment relative pl-4 before:absolute before:left-0 before:content-['•']"
              : '',
          )}
        >
          {initial.current}
        </div>
        <p
          className={cn('mt-5 flex items-center gap-2 text-xs text-stone-500')}
        >
          <Icon name="lightbulb" />
          Next review: Friday
        </p>
      </div>
      <div
        className={cn(
          'flex items-center justify-between border-t border-olive-200 px-5 py-3 text-xs text-stone-500',
        )}
      >
        <span className={cn('flex items-center gap-2')}>
          <Icon name="file-text" />
          {text.trim().split(/\s+/).filter(Boolean).length} words
        </span>
        <span className={cn('flex items-center gap-2')}>
          <Icon name="lock" />
          Only you
        </span>
      </div>
    </div>
  );
}
