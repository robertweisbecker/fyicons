import { memo, useEffect, useLayoutEffect, useRef, type Dispatch } from 'react';
import { play } from '@/lib/sounds';
import {
  IconAlert,
  IconAmpersand,
  IconAsterisk,
  IconAtSign,
  IconBrackets,
  IconEquals,
  IconLineDiagonal,
  IconSlash,
  IconChevronUp,
  IconDollarSign,
  IconParenthesesType,
  IconPercent,
  IconPoundSign,
  IconCircleQuestion,
  IconDot,
  IconDotFill,
  IconKbdDel,
  IconKbdReturn,
  IconMinus,
  IconQuotes,
  IconQuotesFill,
  IconQuotesSimple,
  IconSquareMinus,
  IconSquareMinusFill,
} from 'fyicons';
import type { usePhysicalKeys } from './usePhysicalKeys';
import type { Edit, Glyph } from './printText';
import { alphabets } from './alphabet';

export type Family = keyof typeof alphabets;
export type Model = {
  text: string;
  family: Family;
  glyphs: Glyph[];
  setText: Dispatch<Edit>;
};
export const limit = 240;

function soundKey(key: string) {
  const role =
    key === 'Backspace'
      ? 'delete'
      : key === '\n'
        ? 'enter'
        : key === ' '
          ? 'space'
          : 'printable';
  play('type', { key: role, theme: 'mech', volume: 0.65 });
}

const punctuation = new Map([
  ['!', IconAlert],
  ['?', IconCircleQuestion],
  ['@', IconAtSign],
  ['#', IconPoundSign],
  ['$', IconDollarSign],
  ['%', IconPercent],
  ['^', IconChevronUp],
  ['&', IconAmpersand],
  ['*', IconAsterisk],
  ['=', IconEquals],
  ['\\', IconLineDiagonal],
  ['/', IconSlash],
]);
const dashes = {
  Letter: IconMinus,
  SquareLetter: IconSquareMinus,
  SquareLetterFill: IconSquareMinusFill,
};
const periods = {
  Letter: IconDotFill,
  SquareLetter: IconDot,
  SquareLetterFill: IconDotFill,
};
const quotes = {
  Letter: IconQuotesSimple,
  SquareLetter: IconQuotes,
  SquareLetterFill: IconQuotesFill,
};

const Character = memo(function Character({
  char,
  family,
  legend = false,
  opening = false,
}: {
  char: string;
  family: Family;
  legend?: boolean;
  opening?: boolean;
}) {
  const className = legend ? 'lp-legend' : 'lp-glyph';
  if ('()[]'.includes(char)) {
    const Pair = '()'.includes(char) ? IconParenthesesType : IconBrackets;
    return (
      <Pair
        className={className}
        viewBox={'(['.includes(char) ? '-4 0 16 16' : '4 0 16 16'}
        style={{ clipPath: 'inset(0 25%)' }}
      />
    );
  }
  if (char === '.') {
    const Period = periods[family];
    return <Period className={legend ? className : 'lp-glyph lp-period'} />;
  }
  if ('"“”'.includes(char)) {
    const Quote = quotes[family];
    return (
      <Quote
        className={className}
        style={opening ? { rotate: '180deg' } : undefined}
      />
    );
  }
  let Glyph = punctuation.get(char);
  if ('-‐‑‒–—'.includes(char)) Glyph = dashes[family];
  if (/^[a-z]$/i.test(char))
    Glyph = alphabets[family][char.toUpperCase().charCodeAt(0) - 65];
  return Glyph ? <Glyph className={className} /> : char;
});

export function Print({ text, family, glyphs }: Model) {
  const view = useRef<HTMLDivElement>(null);
  useLayoutEffect(() => {
    const el = view.current;
    if (el) el.scrollTop = el.scrollHeight;
  }, [text, family]);
  let insideQuote = false;
  return (
    <div
      className="lp-print"
      ref={view}
      role="img"
      aria-label={text || 'Empty output'}
    >
      <span aria-hidden="true">
        {glyphs.map(({ char, id }) => {
          const opening = char === '“' || (char === '"' && !insideQuote);
          if ('"“”'.includes(char)) insideQuote = opening;
          return (
            <Character key={id} char={char} family={family} opening={opening} />
          );
        })}
        <i className="lp-caret" />
      </span>
    </div>
  );
}

function Backspace({
  setText,
  pressed,
  empty,
}: Pick<Model, 'setText'> & { pressed: boolean; empty: boolean }) {
  const timer = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);

  function stop() {
    clearTimeout(timer.current);
    timer.current = undefined;
  }

  function erase() {
    if (empty) return;
    soundKey('Backspace');
    setText((current) => Array.from(current).slice(0, -1).join(''));
  }

  function start() {
    if (empty || timer.current !== undefined) return;
    erase();
    function repeat() {
      erase();
      timer.current = setTimeout(repeat, 65);
    }
    timer.current = setTimeout(repeat, 360);
  }

  useLayoutEffect(() => {
    if (empty) stop();
  }, [empty]);

  useEffect(() => {
    window.addEventListener('blur', stop);
    document.addEventListener('visibilitychange', stop);
    return () => {
      stop();
      window.removeEventListener('blur', stop);
      document.removeEventListener('visibilitychange', stop);
    };
  }, []);

  return (
    <button
      type="button"
      className="lp-key lp-action lp-backspace"
      aria-label="Backspace"
      title="Backspace"
      data-pressed={pressed || undefined}
      onPointerDown={(e) => {
        if (!e.isPrimary || e.button !== 0) return;
        e.currentTarget.setPointerCapture(e.pointerId);
        start();
      }}
      onPointerUp={stop}
      onPointerCancel={stop}
      onLostPointerCapture={stop}
      onBlur={stop}
      onContextMenu={(e) => e.preventDefault()}
      onKeyDown={(e) => {
        if (!['Enter', ' ', 'Backspace'].includes(e.key)) return;
        e.preventDefault();
        if (!e.repeat) start();
      }}
      onKeyUp={(e) => {
        if (!['Enter', ' ', 'Backspace'].includes(e.key)) return;
        e.preventDefault();
        stop();
      }}
      onClick={(e) => {
        if (e.detail === 0) erase();
      }}
    >
      <span className="lp-cap">
        <IconKbdDel className="lp-legend" />
      </span>
    </button>
  );
}

const rows = [
  '!@#$%^&*()-=',
  'QWERTYUIOP[]\\',
  'ASDFGHJKL;"',
  'ZXCVBNM,.?',
  ' ',
];

export function Keyboard({
  text,
  setText,
  pressed,
}: Model & { pressed: string[] }) {
  function enter(key: string) {
    if (text.length >= limit) return;
    soundKey(key);
    setText((current) => (current + key).slice(0, limit));
  }
  return (
    <div aria-label="Typing keys" role="group" className="lp-keys">
      {rows.map((row, index) => (
        <div className="lp-row" key={row}>
          {[...row].map((key) => (
            <button
              type="button"
              key={key}
              className={key === ' ' ? 'lp-key lp-space' : 'lp-key'}
              aria-label={key === ' ' ? 'Space' : key}
              data-pressed={pressed.includes(key) || undefined}
              onClick={() => enter(key)}
            >
              <span className="lp-cap">
                {key !== ' ' && <Character char={key} family="Letter" legend />}
              </span>
            </button>
          ))}
          {index === 0 && (
            <Backspace
              empty={!text}
              setText={setText}
              pressed={pressed.includes('Backspace')}
            />
          )}
          {index === 2 && (
            <button
              type="button"
              className="lp-key lp-action lp-return"
              aria-label="Return"
              title="Return"
              data-pressed={pressed.includes('Enter') || undefined}
              onClick={() => enter('\n')}
            >
              <span className="lp-cap">
                <IconKbdReturn className="lp-legend" />
              </span>
            </button>
          )}
        </div>
      ))}
    </div>
  );
}

// The display doubles as a native editor. While editing, expose the source text,
// caret and selection so paste, undo and mobile keyboards work normally.
export function Display({
  inputEvents,
  ...props
}: Model & Pick<ReturnType<typeof usePhysicalKeys>, 'inputEvents'>) {
  return (
    <div className="lp-display">
      <Print {...props} />
      <textarea
        {...inputEvents}
        aria-label="Edit display text"
        maxLength={limit}
        value={props.text}
        onChange={(e) => {
          const input = e.nativeEvent as InputEvent;
          if (!input.isComposing) {
            if (input.inputType?.startsWith('delete')) soundKey('Backspace');
            else if (input.inputType === 'insertLineBreak') soundKey('\n');
            else if (input.inputType === 'insertText' && input.data)
              soundKey(input.data);
          }
          props.setText({ text: e.target.value, caret: e.target.selectionEnd });
        }}
        spellCheck={false}
      />
    </div>
  );
}
