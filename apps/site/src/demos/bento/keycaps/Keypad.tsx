'use client';

import {
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
  type CSSProperties,
  type ReactNode,
} from 'react';
import { spring } from 'motion';
import {
  IconArrowToRight,
  IconKbdCapsLock,
  IconKbdCommand,
  IconKbdCtrl,
  IconKbdDel,
  IconKbdOpt,
  IconKbdReturn,
  IconKbdShift,
  IconSlash,
} from 'fyicons';
import { prefersReducedMotion } from '@/lib/preferences';
import { palettes, type PaletteName } from './palettes';
import { PalettePicker } from './PalettePicker';
import {
  play,
  press as pressSound,
  release as releaseSound,
} from '@/lib/sounds';
import './keycaps.css';

const keys = [
  { label: 'ctrl', name: 'Control', Glyph: IconKbdCtrl },
  { label: 'opt', name: 'Option', Glyph: IconKbdOpt },
  { label: 'del', name: 'Delete', Glyph: IconKbdDel, tone: 'secondary' },
  { label: 'caps', name: 'Caps Lock', Glyph: IconKbdCapsLock },
  { label: 'cmd', name: 'Command', Glyph: IconKbdCommand, tone: 'command' },
  { label: 'ret', name: 'Return', Glyph: IconKbdReturn, tone: 'secondary' },
  { label: 'shift', name: 'Shift', Glyph: IconKbdShift },
  { label: 'tab', name: 'Tab', Glyph: IconArrowToRight },
  { label: 'slash', name: 'Slash', Glyph: IconSlash },
];

function keySoundOptions(index: number) {
  const { label } = keys[index];
  return {
    theme: label === 'del' ? 'mech' : 'press',
    volume: 0.65,
    key: label === 'del' ? 'delete' : label === 'ret' ? 'enter' : 'printable',
  } as const;
}

const inks = [
  'var(--command-color)',
  'var(--secondary-color)',
  '#fcf4de',
  'color-mix(in srgb, var(--case-color) 45%, var(--field-color))',
];

const release = spring({
  stiffness: 661,
  damping: 11,
  mass: 0.6,
  keyframes: [0, 1],
}).toString();
const fleckSize = 20;
const flightDistance = 65;
const rampTime = 2470;
const peakCount = 24;

type StreamPulse = { ramp: number; radialHeading: number };

function fleck(size: number, ink: number, dx: number, dy: number) {
  return {
    '--dx': dx + 'px',
    '--dy': dy + 'px',
    '--turn': (Math.random() - 0.5) * 230 + 'deg',
    '--flight-variation': Math.random() * 90 + 'ms',
    color: inks[ink % inks.length],
    width: (0.76 + Math.random() * 0.48) * size,
  } as CSSProperties;
}

function scatter(count: number, pulse?: StreamPulse) {
  const firstInk = Math.floor(Math.random() * inks.length);
  const sweep = 2 * Math.PI * (pulse ? (1 + 2 * pulse.ramp) / 3 : 1);
  const distance = flightDistance * (1 + (pulse?.ramp ?? 0));
  const heading = pulse?.radialHeading ?? Math.random() * 2 * Math.PI;
  return Array.from({ length: count }, (_, i) => {
    const angle = heading + ((i + Math.random()) / count - 0.5) * sweep;
    const reach = (0.72 + Math.random() * 0.56) * distance;
    return fleck(
      fleckSize,
      firstInk + i,
      Math.cos(angle) * reach,
      Math.sin(angle) * reach,
    );
  });
}

function plume(count: number, ramp: number) {
  const firstInk = Math.floor(Math.random() * inks.length);
  const size = fleckSize * 2;
  const reach = flightDistance * (1.8 + ramp);
  const radius = reach * (0.8 + 0.45 * ramp);
  const total = count * 2;
  return Array.from({ length: total }, (_, i) => {
    const lane = (2 * (i + Math.random())) / total - 1;
    // A quarter of the icons linger in the rising column beneath the expanding dome.
    const inColumn = i % 4 === 1;
    const dx = lane * radius * (inColumn ? 0.12 : 1);
    const lift = inColumn
      ? 0.15 + Math.random() * 0.65
      : 1 - lane * lane * 0.32 - Math.random() * 0.13;
    return fleck(size, firstInk + i, dx, -reach * lift);
  });
}

type Burst = {
  id: number;
  keyIndex: number;
  x: number;
  y: number;
  plume: boolean;
  particles: ReturnType<typeof scatter>;
};

function shakeNeighbors(
  buttons: HTMLButtonElement[],
  trigger: HTMLButtonElement,
) {
  const amount = 4.6;
  const radius = 2.5;
  const grid = getComputedStyle(trigger.parentElement!);
  const origin = trigger.getBoundingClientRect();
  const pitchX = origin.width + parseFloat(grid.columnGap);
  const pitchY = origin.height + parseFloat(grid.rowGap);
  for (const button of buttons) {
    if (button === trigger) continue;
    const box = button.getBoundingClientRect();
    const dx = box.x + box.width / 2 - origin.x - origin.width / 2;
    const dy = box.y + box.height / 2 - origin.y - origin.height / 2;
    const distance = Math.hypot(dx, dy);
    if (!distance) continue;
    const rings = Math.hypot(dx / pitchX, dy / pitchY);
    if (rings > radius + 0.001) continue;
    const strength = amount * Math.exp(-0.95 * (rings - 1));
    const translate = (fraction: number) =>
      `translate(${(dx / distance) * strength * fraction}px, ${(dy / distance) * strength * fraction}px) rotate(${(dx / distance) * strength * fraction * 0.48}deg)`;
    const cap = button.firstElementChild!;
    // Separate the wave from the face's downward travel. Nearby presses can overlap.
    const waves = cap.getAnimations();
    if (waves.length >= 3) waves[0].cancel();
    cap.animate(
      [0, 1, -0.54, 0.26, -0.08, 0].map((fraction) => ({
        transform: translate(fraction),
      })),
      {
        delay: rings * 28,
        duration: 265,
        easing: 'ease-out',
        composite: 'add',
      },
    );
  }
}

export function Keypad({ heading }: { heading?: ReactNode }) {
  const [palette, setPalette] = useState<PaletteName>('Sage');
  const colors = palettes[palette];
  const field = useRef<HTMLDivElement>(null);
  const serial = useRef(0);
  const holds = useRef(
    new Map<
      HTMLButtonElement,
      {
        source: number | string;
        timer: number;
        index: number;
        deferredSound: boolean;
      }
    >(),
  );
  const [bursts, setBursts] = useState<Burst[]>([]);
  const [shiftHeld, setShiftHeld] = useState(false);
  const [capsLocked, setCapsLocked] = useState(false);
  const lock = useRef(capsLocked);
  useLayoutEffect(() => {
    lock.current = capsLocked;
  }, [capsLocked]);

  function releaseKey(
    button: HTMLButtonElement,
    source?: number | string,
    completed = false,
  ) {
    const hold = holds.current.get(button);
    if (!hold || (source !== undefined && hold.source !== source)) return;
    window.clearTimeout(hold.timer);
    holds.current.delete(button);
    delete button.dataset.held;
    const { label } = keys[hold.index];
    if (label === 'shift') setShiftHeld(false);
    if (label === 'caps' && completed) setCapsLocked((locked) => !locked);
    if (hold.deferredSound) {
      if (completed) play('type', keySoundOptions(hold.index));
    } else {
      releaseSound('type');
    }
  }

  useEffect(() => {
    function releaseAll() {
      for (const button of holds.current.keys()) releaseKey(button);
    }
    function onVisibilityChange() {
      if (document.hidden) releaseAll();
    }
    window.addEventListener('blur', releaseAll);
    document.addEventListener('visibilitychange', onVisibilityChange);
    return () => {
      releaseAll();
      window.removeEventListener('blur', releaseAll);
      document.removeEventListener('visibilitychange', onVisibilityChange);
    };
  }, []);

  function emit(
    button: HTMLButtonElement,
    index: number,
    count: number,
    pulse?: StreamPulse,
  ) {
    const root = field.current;
    if (!root || !count) return;
    const rect = button.querySelector('svg')!.getBoundingClientRect();
    const frame = root.getBoundingClientRect();
    const y = rect.y - frame.y + rect.height / 2;
    const locked = lock.current;
    const burst = {
      id: ++serial.current,
      keyIndex: index,
      x: rect.x - frame.x + rect.width / 2,
      y,
      plume: locked,
      particles: locked
        ? plume(count, pulse?.ramp ?? 0)
        : scatter(count, pulse),
    };
    setBursts((previous) => [...previous.slice(-7), burst]);
    play('count', { emphasis: 'subtle', duration: 650, volume: 0.65 });
  }

  function strike(button: HTMLButtonElement, index: number) {
    const root = field.current;
    if (!root || prefersReducedMotion()) return;
    shakeNeighbors(
      Array.from(root.querySelectorAll<HTMLButtonElement>('.keycap-switch')),
      button,
    );
    if (keys[index].label !== 'caps') emit(button, index, 20);
  }

  function press(
    button: HTMLButtonElement,
    index: number,
    source: number | string,
    deferredSound = false,
  ) {
    if (holds.current.has(button)) return;
    button.dataset.held = '';
    const { label } = keys[index];
    if (label === 'shift') setShiftHeld(true);
    if (!deferredSound) pressSound('type', keySoundOptions(index));
    strike(button, index);
    const hold = { source, timer: 0, index, deferredSound };
    holds.current.set(button, hold);
    if (label === 'caps') return;
    const streamStart = performance.now();
    const radialHeading = Math.random() * 2 * Math.PI;
    function pulse() {
      if (prefersReducedMotion()) return;
      const elapsed = Math.max(0, performance.now() - streamStart);
      const ramp = Math.min(1, elapsed / rampTime);
      const count = Math.ceil(peakCount * (0.2 + 0.8 * ramp));
      emit(button, index, count, { ramp, radialHeading });
      hold.timer = window.setTimeout(pulse, 145 - 60 * ramp);
    }
    hold.timer = window.setTimeout(pulse, 0);
  }

  return (
    <div
      className="keycap-field"
      ref={field}
      style={
        {
          '--field-color': colors.background,
          '--case-color': colors.case,
          '--command-color': colors.command,
          '--secondary-color': colors.secondary,
        } as CSSProperties
      }
    >
      <div className="keycap-field-header">
        {heading}
        <PalettePicker value={palette} onChange={setPalette} />
      </div>
      <div
        className="keycap-tray"
        role="group"
        aria-label="Keyboard icon keys"
        data-caps-locked={capsLocked}
        style={
          {
            '--release': release,
          } as CSSProperties
        }
      >
        <span className="keycap-caps-lamp" aria-hidden="true" />
        {keys.map(({ label, name, Glyph, tone }, index) => (
          <button
            type="button"
            className="keycap-switch"
            key={label}
            aria-label={name}
            aria-pressed={label === 'caps' ? capsLocked : undefined}
            data-tone={tone}
            onPointerDown={(e) => {
              if (e.button !== 0) return;
              e.currentTarget.setPointerCapture(e.pointerId);
              press(
                e.currentTarget,
                index,
                e.pointerId,
                e.pointerType !== 'mouse',
              );
            }}
            onPointerUp={(e) => releaseKey(e.currentTarget, e.pointerId, true)}
            onPointerCancel={(e) => releaseKey(e.currentTarget, e.pointerId)}
            onLostPointerCapture={(e) =>
              releaseKey(e.currentTarget, e.pointerId)
            }
            onKeyDown={(e) => {
              if (e.key !== ' ' && e.key !== 'Enter') return;
              e.preventDefault();
              if (e.repeat) return;
              press(e.currentTarget, index, e.key);
            }}
            onKeyUp={(e) => {
              if (e.key === ' ' || e.key === 'Enter') {
                e.preventDefault();
                releaseKey(e.currentTarget, e.key, true);
              }
            }}
            onBlur={(e) => {
              const source = holds.current.get(e.currentTarget)?.source;
              if (typeof source === 'string')
                releaseKey(e.currentTarget, source);
            }}
            onClick={(e) => {
              if (e.detail === 0) {
                play('type', keySoundOptions(index));
                strike(e.currentTarget, index);
                if (label === 'caps') setCapsLocked((locked) => !locked);
              }
            }}
          >
            <span className="keycap-mount">
              <span className="keycap-plunger">
                <span className="keycap-top">
                  <Glyph size={18} />
                  <span className="keycap-legend">
                    {capsLocked !== shiftHeld ? label.toUpperCase() : label}
                  </span>
                </span>
              </span>
            </span>
          </button>
        ))}
      </div>
      <div className="keycap-effects" aria-hidden="true">
        {bursts.map((burst) => {
          const { Glyph } = keys[burst.keyIndex];
          return (
            <span
              key={burst.id}
              className="keycap-burst"
              data-plume={burst.plume || undefined}
              style={
                {
                  left: burst.x,
                  top: burst.y,
                } as CSSProperties
              }
              onAnimationEnd={(e) => {
                if (e.target === e.currentTarget)
                  setBursts((all) =>
                    all.filter((item) => item.id !== burst.id),
                  );
              }}
            >
              {burst.particles.map((style, i) => (
                <span key={i} className="keycap-fleck" style={style}>
                  <Glyph size="100%" />
                </span>
              ))}
            </span>
          );
        })}
      </div>
    </div>
  );
}
