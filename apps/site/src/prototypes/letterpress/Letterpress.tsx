'use client';
import { useReducer, useState, type CSSProperties } from 'react';
import { NumberField } from '@base-ui/react/number-field';
import { ToggleGroup } from '@base-ui/react/toggle-group';
import { Toggle } from '@/components/ui/toggle';
import {
  IconFont,
  IconFontSizeArrow,
  IconLetterSpacing,
  IconMinus,
  IconPlus,
  IconSquare,
  IconSquareFill,
} from 'fyicons';
import { createDraft, editDraft } from '@/prototypes/letterpress/print-text';
import { Ribbon } from '@/prototypes/letterpress/Ribbon';
import type { Family } from '@/prototypes/letterpress/Parts';
import '@/prototypes/letterpress/letterpress.css';

const styles = [
  ['Letter', IconFont],
  ['SquareLetter', IconSquare],
  ['SquareLetterFill', IconSquareFill],
] as const;

function Stepper({
  label,
  unit,
  icon: Icon,
  id,
  value,
  min,
  max,
  step,
  onChange,
}: {
  label: string;
  unit: 'pixels' | 'percent';
  icon: typeof IconFontSizeArrow;
  id: string;
  value: number;
  min: number;
  max: number;
  step: number;
  onChange: (value: number) => void;
}) {
  return (
    <NumberField.Root
      className="lp-stepper-field"
      value={value}
      min={min}
      max={max}
      step={step}
      format={
        unit === 'percent' ? { style: 'unit', unit: 'percent' } : undefined
      }
      onValueChange={(value) => {
        if (value !== null) onChange(value);
      }}
    >
      <NumberField.ScrubArea className="lp-stepper-scrub">
        <label htmlFor={id} title={`Drag to adjust ${label.toLowerCase()}`}>
          <Icon size={16} aria-hidden="true" />
          <span className="sr-only">
            {label} in {unit}
          </span>
        </label>
        <NumberField.ScrubAreaCursor aria-hidden="true">
          ↔
        </NumberField.ScrubAreaCursor>
      </NumberField.ScrubArea>
      <NumberField.Group className="lp-stepper">
        <NumberField.Decrement
          aria-label={`Decrease ${label.toLowerCase()}`}
          className="lp-pill-button"
        >
          <IconMinus size={16} />
        </NumberField.Decrement>
        <NumberField.Input id={id} className="lp-size-value" />
        <NumberField.Increment
          aria-label={`Increase ${label.toLowerCase()}`}
          className="lp-pill-button"
        >
          <IconPlus size={16} />
        </NumberField.Increment>
      </NumberField.Group>
    </NumberField.Root>
  );
}

export function Letterpress() {
  const [iconSize, setSize] = useState(24);
  const [spacingPercent, setSpacingPercent] = useState(0);
  const [{ text, glyphs }, setText] = useReducer(
    editDraft,
    'Hello world',
    createDraft,
  );
  const [family, setFamily] = useState<Family>('Letter');
  return (
    <div className="lp">
      <header>
        <h1>Letterpress</h1>
      </header>
      <div
        className="lp-stage"
        style={
          {
            '--lp-icon-size': iconSize + 'px',
            '--lp-letter-spacing': `${spacingPercent / 100}em`,
          } as CSSProperties
        }
      >
        <Ribbon {...{ text, glyphs, family, setText }} />
        <div className="lp-controls">
          <ToggleGroup<Family>
            aria-label="Letter style"
            className="lp-pill"
            value={[family]}
            onValueChange={([next]) => {
              if (next) setFamily(next);
            }}
          >
            {styles.map(([name, Icon]) => (
              <Toggle
                key={name}
                value={name}
                aria-label={name}
                title={name}
                variant="unstyled"
                size="unstyled"
                className="lp-pill-button"
              >
                <Icon size={16} />
              </Toggle>
            ))}
          </ToggleGroup>
          <div className="lp-steppers">
            <Stepper
              label="Icon size"
              unit="pixels"
              icon={IconFontSizeArrow}
              id="letterpress-icon-size"
              value={iconSize}
              min={16}
              max={48}
              step={4}
              onChange={setSize}
            />
            <Stepper
              label="Letter spacing"
              unit="percent"
              icon={IconLetterSpacing}
              id="letterpress-letter-spacing"
              value={spacingPercent}
              min={-25}
              max={25}
              step={1}
              onChange={setSpacingPercent}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
