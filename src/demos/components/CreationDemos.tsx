import { useRef, useState } from 'react';
import { Icon } from '@/components/Icon';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
  InputGroup,
  InputGroupAddon,
  InputGroupTextarea,
} from '@/components/ui/input-group';
import { Toggle } from '@/components/ui/toggle';
import { ToggleGroup } from '@/components/ui/toggle-group';
import { ToggleIcon } from '@/components/ToggleIcon';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { copy } from '@/lib/downloads';
import { cn } from '@/lib/utils';

export function ComposerDemo() {
  const [prompt, setPrompt] = useState('');
  const [attached, setAttached] = useState(true);
  const [mode, setMode] = useState<string | null>('Thoughtful');
  const [sent, setSent] = useState(false);
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        if (prompt.trim()) {
          setSent(true);
          setPrompt('');
        }
      }}
      className="flex flex-1 flex-col justify-center gap-5"
    >
      <div>
        <div className="mb-2 flex items-center gap-2 text-sm text-muted">
          <Icon name="sparkles" />
          Start a conversation
        </div>
        <h3 className="text-2xl font-semibold tracking-tight">
          What are you working on?
        </h3>
      </div>
      <InputGroup>
        {attached && (
          <div className="px-4 pt-3">
            <Badge variant="outline">
              <Icon name="file-code" />
              navigation.tsx
              <Button
                size="icon-sm"
                variant="ghost"
                aria-label="Remove attachment"
                onClick={() => setAttached(false)}
              >
                <Icon name="xmark-sm" />
              </Button>
            </Badge>
          </div>
        )}
        <InputGroupTextarea
          value={prompt}
          onChange={(e) => {
            setPrompt(e.target.value);
            setSent(false);
          }}
          aria-label="Chat message"
          placeholder="Describe a change, ask a question…"
        />
        <InputGroupAddon>
          <Button
            variant="ghost"
            size="icon"
            aria-label="Attach context"
            onClick={() => setAttached(!attached)}
          >
            <Icon name="paperclip" />
          </Button>
          <Select value={mode} onValueChange={setMode}>
            <SelectTrigger
              aria-label="Response mode"
              className="min-h-8 border-0 bg-transparent px-2"
            >
              <Icon name="brain" />
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                {['Thoughtful', 'Quick', 'Research'].map((value) => (
                  <SelectItem key={value} value={value}>
                    {value}
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
          <Toggle size="icon" aria-label="Search the web">
            <ToggleIcon icon="globe" activeIcon="earth" />
          </Toggle>
          <Button
            type="submit"
            size="icon"
            className="ml-auto"
            disabled={!prompt.trim()}
            aria-label="Send message"
          >
            <Icon name="arrow-up" />
          </Button>
        </InputGroupAddon>
      </InputGroup>
      <p
        role="status"
        className="flex min-h-4 items-center gap-2 text-xs text-muted"
      >
        <Icon name={sent ? 'circle-check' : 'lock'} />
        {sent
          ? 'Message sent. Ready for your next idea.'
          : 'Private conversation'}
      </p>
    </form>
  );
}
const initialDocument =
  'Good interfaces give the details room to breathe. Clear labels, considered spacing, and familiar symbols make the next step feel natural.';

export function EditorDemo({ notify }: { notify: (message: string) => void }) {
  const [formats, setFormats] = useState<string[]>([]);
  const [align, setAlign] = useState(['left']);
  const [words, setWords] = useState(initialDocument.split(/\s+/).length);
  const editor = useRef<HTMLDivElement>(null);
  return (
    <div className="flex flex-1 flex-col gap-5">
      <div
        className="flex flex-wrap items-center gap-2 rounded-xl border border-line bg-surface p-1.5"
        role="toolbar"
        aria-label="Editor toolbar"
      >
        <ToggleGroup
          multiple
          value={formats}
          onValueChange={setFormats}
          aria-label="Text formatting"
        >
          {[
            ['bold', 'text-bold'],
            ['italic', 'italic'],
            ['underline', 'text-underline'],
            ['quote', 'quote-alt'],
          ].map(([value, icon]) => (
            <Toggle key={value} value={value} size="icon" aria-label={value}>
              {value === 'quote' ? (
                <ToggleIcon icon={icon} activeIcon="quote-alt-fill" />
              ) : (
                <Icon name={icon} />
              )}
            </Toggle>
          ))}
        </ToggleGroup>
        <span className="h-5 w-px bg-line" />
        <ToggleGroup
          value={align}
          onValueChange={(v) => v.length && setAlign(v)}
          aria-label="Paragraph alignment"
        >
          {[
            ['left', 'text-align-start'],
            ['center', 'text-align-center'],
            ['right', 'text-align-end'],
          ].map(([value, icon]) => (
            <Toggle
              value={value}
              key={value}
              size="icon"
              aria-label={'Align ' + value}
            >
              <Icon name={icon} />
            </Toggle>
          ))}
        </ToggleGroup>
        <Button
          variant="ghost"
          size="icon"
          aria-label="Copy text"
          className="ml-auto"
          onClick={async () =>
            notify(
              (await copy(editor.current?.innerText ?? ''))
                ? 'Text copied'
                : 'Clipboard unavailable',
            )
          }
        >
          <Icon name="copy-lg" />
        </Button>
      </div>
      <div className="px-2 py-3">
        <h3 className="mb-4 font-serif text-3xl">A little room to think.</h3>
        <div
          ref={editor}
          contentEditable
          suppressContentEditableWarning
          role="textbox"
          aria-label="Rich text document"
          aria-multiline="true"
          onInput={(e) =>
            setWords(
              e.currentTarget.innerText.trim().split(/\s+/).filter(Boolean)
                .length,
            )
          }
          className={cn(
            'min-h-24 text-sm leading-7 outline-none',
            formats.includes('bold') && 'font-bold',
            formats.includes('italic') && 'italic',
            formats.includes('underline') && 'underline',
            formats.includes('quote') && 'border-l-2 border-current/30 pl-4',
            align[0] === 'center' && 'text-center',
            align[0] === 'right' && 'text-right',
          )}
        >
          {initialDocument}
        </div>
      </div>
      <div className="mt-auto flex items-center justify-between text-xs text-muted">
        <span className="flex items-center gap-2">
          <Icon name="text" />
          {words} words
        </span>
        <span className="flex items-center gap-2">
          <Icon name="cloud-check" />
          Draft
        </span>
      </div>
    </div>
  );
}
export function SearchDemo() {
  const [query, setQuery] = useState('');
  const [result, setResult] = useState('');
  const items = [
    ['Design tokens', 'variable'],
    ['Icon library', 'grid'],
    ['Keyboard shortcuts', 'keyboard'],
  ];
  return (
    <div className="flex flex-1 flex-col rounded-xl border border-line bg-surface">
      <label className="flex items-center gap-3 border-b border-line px-4">
        <Icon name="search" />
        <input
          aria-label="Find a command"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Find a command…"
          className="h-12 min-w-0 flex-1 bg-transparent text-sm outline-none placeholder:text-muted"
        />
        <Icon name="kbd-command" className="text-muted" />
      </label>
      <div className="flex flex-col gap-1 p-2">
        {items
          .filter(([name]) => name.toLowerCase().includes(query.toLowerCase()))
          .map(([name, icon]) => (
            <Button
              key={name}
              variant="ghost"
              className="h-10 justify-start font-normal"
              onClick={() => setResult(name)}
            >
              <Icon name={icon} />
              {name}
              <span className="ml-auto text-xs text-muted">
                <Icon name="chevron-right-sm" />
              </span>
            </Button>
          ))}
        {!items.some(([name]) =>
          name.toLowerCase().includes(query.toLowerCase()),
        ) && <p className="p-3 text-sm text-muted">No matching commands.</p>}
      </div>
      <p aria-live="polite" className="mt-auto px-4 py-3 text-xs text-muted">
        {result ? `${result} selected` : 'Search projects, tools, and files'}
      </p>
    </div>
  );
}
