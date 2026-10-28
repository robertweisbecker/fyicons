import { useRef, useState } from 'react';
import { Icon } from '@/components/Icon';
import { Button } from '@/components/ui/button';
import {
  InputGroup,
  InputGroupAddon,
  InputGroupTextarea,
} from '@/components/ui/input-group';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { DemoIconButton, DemoToggle } from './DemoControls';

const suggestions = [
  ['code', 'Review code', 'Review this component and suggest improvements.'],
  [
    'thought-bubble',
    'Explore an idea',
    'Help me explore a new direction for this interface.',
  ],
  [
    'workflow',
    'Plan a project',
    'Break this project into a clear set of next steps.',
  ],
];
export function ComposerDemo() {
  const [prompt, setPrompt] = useState('');
  const [attached, setAttached] = useState(true);
  const [mode, setMode] = useState<string | null>('Thoughtful');
  const [sent, setSent] = useState(false);
  const [web, setWeb] = useState(false);
  const input = useRef<HTMLTextAreaElement>(null);
  const form = useRef<HTMLFormElement>(null);
  return (
    <form
      ref={form}
      onSubmit={(e) => {
        e.preventDefault();
        if (prompt.trim()) {
          setSent(true);
          setPrompt('');
          input.current?.focus();
        }
      }}
      className="flex flex-1 flex-col gap-4"
    >
      <h3 className="text-2xl font-semibold tracking-tight">
        New conversation
      </h3>
      <div className="flex flex-wrap gap-2">
        {suggestions.map(([icon, label, text]) => (
          <Button
            key={label}
            variant="outline"
            size="sm"
            className="rounded-full font-normal"
            onClick={() => {
              setPrompt(text);
              setSent(false);
              input.current?.focus();
            }}
          >
            <Icon name={icon} />
            {label}
          </Button>
        ))}
      </div>
      <InputGroup className="shadow-xs">
        <div className="flex min-h-11 items-center px-3 pt-2">
          {attached ? (
            <span className="flex items-center gap-2 rounded-lg border border-line bg-canvas py-0.5 pr-0.5 pl-2.5 text-xs">
              <Icon name="file-code" />
              navigation.tsx
              <DemoIconButton
                label="Remove attachment"
                icon="x"
                size="icon-xs"
                onClick={() => setAttached(false)}
              />
            </span>
          ) : (
            <Button
              variant="ghost"
              size="sm"
              className="text-muted"
              onClick={() => setAttached(true)}
            >
              <Icon name="plus-sm" />
              Add context
            </Button>
          )}
        </div>
        <InputGroupTextarea
          ref={input}
          value={prompt}
          onChange={(e) => {
            setPrompt(e.target.value);
            setSent(false);
          }}
          aria-label="Chat message"
          placeholder="Ask a question or describe a change…"
          className="min-h-20 text-base md:text-sm"
          onKeyDown={(e) => {
            if ((e.metaKey || e.ctrlKey) && e.key === 'Enter') {
              e.preventDefault();
              form.current?.requestSubmit();
            }
          }}
        />
        <InputGroupAddon className="grid grid-cols-[auto_minmax(0,1fr)_auto_auto] gap-1 border-t border-line/60">
          <DemoIconButton
            label="Attach context"
            icon="paperclip-tilt"
            onClick={() => setAttached(!attached)}
          />
          <Select value={mode} onValueChange={setMode}>
            <SelectTrigger
              aria-label="Response mode"
              className="min-h-8 w-fit min-w-0 justify-start gap-1.5 border-0 bg-transparent px-1.5"
            >
              <Icon
                name={
                  mode === 'Quick'
                    ? 'bolt'
                    : mode === 'Research'
                      ? 'binoculars'
                      : 'brain'
                }
              />
              <SelectValue className="min-w-0 truncate" />
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
          <DemoToggle
            label="Search the web"
            icon="globe"
            pressed={web}
            onPressedChange={setWeb}
          />
          <Button
            type="submit"
            size="icon"
            className="ml-auto"
            disabled={!prompt.trim()}
            aria-label="Send message"
          >
            <Icon name={sent ? 'check' : 'send-fill'} />
          </Button>
        </InputGroupAddon>
      </InputGroup>
      <div className="flex items-center gap-2 text-xs text-muted" role="status">
        <Icon name={sent ? 'circle-check' : web ? 'globe' : 'lock'} />
        {sent
          ? 'Message sent'
          : web
            ? 'Web search enabled'
            : 'Private conversation'}
        <span className="ml-auto hidden items-center gap-1 sm:flex">
          <Icon name="kbd-command-small" />
          <Icon name="kbd-return" />
          to send
        </span>
      </div>
    </form>
  );
}
