import { useRef, useState } from 'react';
import { createIconLookup } from '@/components/createIconLookup';

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
import { createDemoControls } from './DemoControls';

import Glyph0 from 'fyicons/icons/IconAlert';
import Glyph1 from 'fyicons/icons/IconAlertFill';
import Glyph2 from 'fyicons/icons/IconBinoculars';
import Glyph3 from 'fyicons/icons/IconBolt';
import Glyph4 from 'fyicons/icons/IconBoltFill';
import Glyph5 from 'fyicons/icons/IconBrain';
import Glyph6 from 'fyicons/icons/IconCheck';
import Glyph7 from 'fyicons/icons/IconCircleCheck';
import Glyph8 from 'fyicons/icons/IconCircleCheckFill';
import Glyph9 from 'fyicons/icons/IconCode';
import Glyph10 from 'fyicons/icons/IconCopied';
import Glyph11 from 'fyicons/icons/IconCopiedFill';
import Glyph12 from 'fyicons/icons/IconCopy';
import Glyph13 from 'fyicons/icons/IconError';
import Glyph14 from 'fyicons/icons/IconErrorFill';
import Glyph15 from 'fyicons/icons/IconFileCode';
import Glyph16 from 'fyicons/icons/IconGhost';
import Glyph17 from 'fyicons/icons/IconGlobe';
import Glyph18 from 'fyicons/icons/IconKbdCommandSmall';
import Glyph19 from 'fyicons/icons/IconKbdReturn';
import Glyph20 from 'fyicons/icons/IconLock';
import Glyph21 from 'fyicons/icons/IconLockFill';
import Glyph22 from 'fyicons/icons/IconPaperclipTilt';
import Glyph23 from 'fyicons/icons/IconPlusSm';
import Glyph24 from 'fyicons/icons/IconSendFill';
import Glyph25 from 'fyicons/icons/IconThoughtBubble';
import Glyph26 from 'fyicons/icons/IconWorkflow';
import Glyph27 from 'fyicons/icons/IconX';
const Icon = createIconLookup({
  alert: { Component: Glyph0, id: '667:563' },
  'alert-fill': { Component: Glyph1, id: '667:570' },
  binoculars: { Component: Glyph2, id: '345:9824' },
  bolt: { Component: Glyph3, id: '102:5518' },
  'bolt-fill': { Component: Glyph4, id: '717:4006' },
  brain: { Component: Glyph5, id: '395:11019' },
  check: { Component: Glyph6, id: '96:1604' },
  'circle-check': { Component: Glyph7, id: '158:11585' },
  'circle-check-fill': { Component: Glyph8, id: '506:2715' },
  code: { Component: Glyph9, id: '58:9531' },
  copied: { Component: Glyph10, id: '548:8698' },
  'copied-fill': { Component: Glyph11, id: '892:30476' },
  copy: { Component: Glyph12, id: '245:15242' },
  error: { Component: Glyph13, id: '1001:675' },
  'error-fill': { Component: Glyph14, id: '1001:681' },
  'file-code': { Component: Glyph15, id: '548:8661' },
  ghost: { Component: Glyph16, id: '727:314' },
  globe: { Component: Glyph17, id: '158:11702' },
  'kbd-command-small': { Component: Glyph18, id: '297:3574' },
  'kbd-return': { Component: Glyph19, id: '505:502' },
  lock: { Component: Glyph20, id: '101:4339' },
  'lock-fill': { Component: Glyph21, id: '752:4245' },
  'paperclip-tilt': { Component: Glyph22, id: '315:17581' },
  'plus-sm': { Component: Glyph23, id: '101:3662' },
  'send-fill': { Component: Glyph24, id: '679:4229' },
  'thought-bubble': { Component: Glyph25, id: '282:17058' },
  workflow: { Component: Glyph26, id: '310:6412' },
  x: { Component: Glyph27, id: '506:3897' },
});

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

const { DemoIconButton, DemoToggle } = createDemoControls(Icon);
