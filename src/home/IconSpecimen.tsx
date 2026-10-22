import {
  useEffect,
  useId,
  useRef,
  useState,
  type FocusEvent,
  type PointerEvent,
} from 'react';
import { useReducedMotion } from 'motion/react';
import { Icon } from '@/components/Icon';
import './IconSpecimen.css';

// Centered construction paths from the drawing sheet, not artwork bounds.
const guides = {
  circle: { label: 'Circle', width: 13, height: 13, color: '#ec4899' },
  square: { label: 'Square', width: 11, height: 11, color: '#3b82f6' },
  horizontal: { label: 'Horizontal', width: 13, height: 9, color: '#10b981' },
  vertical: { label: 'Vertical', width: 9, height: 13, color: '#f59e0b' },
} as const;
type Guide = keyof typeof guides;

const samples: { name: string; label: string; guide: Guide }[] = [
  {
    name: 'chat-round-edit',
    label: 'ChatRoundEdit',
    guide: 'circle',
  },
  { name: 'swatch', label: 'Swatch', guide: 'square' },
  { name: 'envelope', label: 'Envelope', guide: 'horizontal' },
  { name: 'file-zip', label: 'FileZip', guide: 'vertical' },
  { name: 'skull', label: 'Skull', guide: 'circle' },
  { name: 'square-asterisk', label: 'SquareAsterisk', guide: 'square' },
  { name: 'scissors', label: 'Scissors', guide: 'horizontal' },
  { name: 'blocks', label: 'Blocks', guide: 'vertical' },
];
const cycleDuration = 8000; // 8 seconds
const showProgress = false;

function useSpecimen() {
  const reducedMotion = useReducedMotion();
  const [index, setIndex] = useState(0);
  const [playing, setPlaying] = useState(true);
  const [hovered, setHovered] = useState(false);
  const [focused, setFocused] = useState(false);
  const [visible, setVisible] = useState(false);
  const [pageVisible, setPageVisible] = useState(!document.hidden);
  const [instant, setInstant] = useState(false);
  const [cycle, setCycle] = useState(0);
  const [pinnedGuide, setPinnedGuide] = useState<Guide | null>(null);
  const [hoveredGuide, setHoveredGuide] = useState<Guide | null>(null);
  const [focusedGuide, setFocusedGuide] = useState<Guide | null>(null);
  const timer = useRef({ cycle: 0, remaining: cycleDuration });
  const root = useRef<HTMLElement>(null);
  const running =
    playing && !reducedMotion && !hovered && !focused && visible && pageVisible;

  useEffect(() => {
    const node = root.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      ([entry]) => setVisible(entry.intersectionRatio >= 0.25),
      { threshold: 0.25 },
    );
    observer.observe(node);
    const updateVisibility = () => setPageVisible(!document.hidden);
    document.addEventListener('visibilitychange', updateVisibility);
    return () => {
      observer.disconnect();
      document.removeEventListener('visibilitychange', updateVisibility);
    };
  }, []);

  useEffect(() => {
    if (timer.current.cycle !== cycle) {
      timer.current = { cycle, remaining: cycleDuration };
    }
    if (!running) return;

    const started = performance.now();
    const timeout = window.setTimeout(() => {
      setInstant(false);
      setPinnedGuide(null);
      setIndex((current) => (current + 1) % samples.length);
      setCycle((current) => current + 1);
    }, timer.current.remaining);

    return () => {
      window.clearTimeout(timeout);
      timer.current.remaining = Math.max(
        0,
        timer.current.remaining - (performance.now() - started),
      );
    };
  }, [cycle, running]);

  return {
    index,
    cycle,
    sample: samples[index],
    playing: playing && !reducedMotion,
    reducedMotion,
    running,
    inspectedGuide: hoveredGuide ?? focusedGuide ?? pinnedGuide,
    pinnedGuide,
    hoverGuide: (shape: Guide | null) => {
      setHoveredGuide(shape);
      if (shape) setInstant(false);
    },
    focusGuide: (shape: Guide | null) => {
      setFocusedGuide(shape);
      if (shape) setInstant(true);
    },
    pinGuide: (shape: Guide) =>
      setPinnedGuide((current) => (current === shape ? null : shape)),
    clearGuide: () => {
      setPinnedGuide(null);
      setHoveredGuide(null);
      setFocusedGuide(null);
    },
    select: (next: number, keyboard: boolean) => {
      setInstant(keyboard);
      setIndex(next);
      setPinnedGuide(null);
      setCycle((current) => current + 1);
    },
    toggle: () => setPlaying((current) => !current),
    visual: {
      onPointerEnter: (event: PointerEvent<HTMLDivElement>) => {
        if (event.pointerType !== 'touch') setHovered(true);
      },
      onPointerLeave: () => setHovered(false),
    },
    region: {
      ref: root,
      onPointerDown: () => setFocused(false),
      onFocus: (event: FocusEvent<HTMLElement>) =>
        setFocused(event.target.matches(':focus-visible')),
      onBlur: (event: FocusEvent<HTMLElement>) => {
        if (!event.currentTarget.contains(event.relatedTarget))
          setFocused(false);
      },
      'data-instant': instant || undefined,
    },
  };
}

function GuideShape({ shape }: { shape: Guide }) {
  const { width, height } = guides[shape];
  return shape === 'circle' ? (
    <circle cx="8" cy="8" r={width / 2} />
  ) : (
    <rect
      x={(16 - width) / 2}
      y={(16 - height) / 2}
      width={width}
      height={height}
    />
  );
}

function GuideHandles({ shape }: { shape: Guide }) {
  const { width, height } = guides[shape];
  const x = (16 - width) / 2;
  const y = (16 - height) / 2;
  return (
    <g className="specimen-handles opacity-0 transition-opacity duration-240 group-data-instant/specimen:transition-none! group-data-active/guide:opacity-100">
      {shape === 'circle' && (
        <rect
          x={x}
          y={y}
          width={width}
          height={height}
          fill="none"
          opacity="0.35"
        />
      )}
      {[
        [x, y],
        [x + width, y],
        [x, y + height],
        [x + width, y + height],
      ].map(([cx, cy], index) => (
        <rect
          key={index}
          x={cx - 0.17}
          y={cy - 0.17}
          width="0.34"
          height="0.34"
          fill="var(--bg)"
        />
      ))}
    </g>
  );
}

function PixelSpecimen({
  index,
  inspectedGuide,
}: {
  index: number;
  inspectedGuide: Guide | null;
}) {
  const id = useId();
  const sample = samples[index];
  return (
    <svg
      className="specimen-grid-preview"
      viewBox="0 0 16 16"
      role="img"
      aria-label={`${sample.label} on a 16 by 16 pixel grid; ${guides[inspectedGuide ?? sample.guide].label.toLowerCase()} guide ${inspectedGuide ? 'previewed' : 'highlighted'}`}
    >
      <defs>
        <pattern
          id={`${id}-pixels`}
          width="1"
          height="1"
          patternUnits="userSpaceOnUse"
        >
          <path
            d="M 1 0 H 0 V 1"
            fill="none"
            stroke="var(--color-blue-400)"
            strokeWidth="0.035"
            strokeDasharray="0.08 0.08"
          />
        </pattern>
      </defs>
      <g aria-hidden="true">
        <rect
          width="16"
          height="16"
          fill={`url(#${id}-pixels)`}
          opacity="0.45"
        />
        <g
          fill="none"
          stroke="var(--color-blue-400)"
          strokeWidth="0.04"
          opacity="0.45"
        >
          <path d="M0 0L16 16M16 0L0 16" opacity="0.28" />
        </g>
        <path
          d="M0 -.5V16.5M16 -.5V16.5M-.5 0H16M-.5 16H16"
          fill="none"
          stroke="var(--line)"
          strokeWidth="1"
          vectorEffect="non-scaling-stroke"
        />
      </g>
      {samples.map((item, sampleIndex) => (
        <g
          key={item.name}
          className="specimen-art"
          data-active={sampleIndex === index || undefined}
          aria-hidden="true"
        >
          <Icon name={item.name} width={16} height={16} />
        </g>
      ))}
      {(Object.keys(guides) as Guide[]).map((shape) => (
        <g
          key={shape}
          className="specimen-guide group/guide pointer-events-none"
          data-guide={shape}
          data-active={(!inspectedGuide && shape === sample.guide) || undefined}
          data-preview={shape === inspectedGuide || undefined}
          style={{ color: guides[shape].color }}
          fill="currentColor"
          stroke="currentColor"
          strokeWidth="0.07"
          aria-hidden="true"
        >
          <g className="specimen-guide-outline opacity-20 transition-[opacity,fill-opacity] duration-240 ease-[ease] [fill-opacity:0] group-data-instant/specimen:transition-none! group-data-preview/guide:opacity-100 group-data-preview/guide:[fill-opacity:0.2] group-data-active/guide:opacity-85 group-data-active/guide:[fill-opacity:0.2]">
            <GuideShape shape={shape} />
          </g>
          <GuideHandles shape={shape} />
        </g>
      ))}
      <g
        fill="var(--text)"
        fontSize="0.45"
        fontFamily="ui-monospace, monospace"
        aria-hidden="true"
      >
        {[0, 4, 8, 12, 16].map((value) => (
          <g key={value}>
            <text
              x={value === 0 ? 0.55 : value === 16 ? 15.55 : value}
              y="0.65"
              textAnchor="middle"
            >
              {value}
            </text>
            {value > 0 && (
              <text
                x="0.55"
                y={value === 16 ? 15.65 : value + 0.15}
                textAnchor="middle"
              >
                {value}
              </text>
            )}
          </g>
        ))}
      </g>
    </svg>
  );
}

export function IconSpecimen() {
  const state = useSpecimen();
  const guide = guides[state.sample.guide];
  const playbackLabel = state.playing
    ? 'Pause automatic cycling'
    : 'Resume automatic cycling';
  return (
    <section
      className="icon-specimen group/specimen"
      aria-label="Icon spotlight"
      {...state.region}
    >
      <div className="specimen-stage">
        <div className="specimen-visual relative" {...state.visual}>
          <PixelSpecimen
            index={state.index}
            inspectedGuide={state.inspectedGuide}
          />
          <span
            className="specimen-name pointer-events-none absolute top-full left-[3.4375%] mt-2 font-mono text-[11px] leading-4"
            aria-live={state.playing ? 'off' : 'polite'}
          >
            {state.sample.label}
          </span>
        </div>
        <div className="specimen-notes">
          {!state.reducedMotion && (
            <button
              type="button"
              className="flex shrink-0 items-center gap-1 rounded py-1 text-[11px] leading-4 text-muted hover:text-ink"
              aria-label={playbackLabel}
              onClick={state.toggle}
            >
              <Icon
                name={state.playing ? 'pause-fill' : 'play-fill'}
                className="size-3"
              />
              {state.playing ? 'Pause' : 'Play'}
            </button>
          )}
          <ul
            className="specimen-legend mt-auto"
            aria-label="Construction guides"
            onKeyDown={(event) => {
              if (event.key === 'Escape') state.clearGuide();
            }}
          >
            {(Object.keys(guides) as Guide[]).map((shape) => {
              const item = guides[shape];
              const active =
                shape === (state.inspectedGuide ?? state.sample.guide);
              return (
                <li key={shape}>
                  <button
                    type="button"
                    className="group/legend flex items-center gap-1 rounded whitespace-nowrap"
                    data-active={active || undefined}
                    aria-label={`Inspect ${item.label.toLowerCase()} guide, ${item.width} by ${item.height}`}
                    aria-pressed={state.pinnedGuide === shape}
                    style={{ color: item.color }}
                    onPointerEnter={(event) => {
                      if (event.pointerType !== 'touch')
                        state.hoverGuide(shape);
                    }}
                    onPointerLeave={() => state.hoverGuide(null)}
                    onFocus={(event) => {
                      if (event.target.matches(':focus-visible'))
                        state.focusGuide(shape);
                    }}
                    onBlur={() => state.focusGuide(null)}
                    onClick={() => state.pinGuide(shape)}
                  >
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 16 16"
                      aria-hidden="true"
                      fill={active ? 'currentColor' : 'none'}
                      stroke="currentColor"
                      strokeWidth="1.25"
                    >
                      <GuideShape shape={shape} />
                    </svg>
                    <span
                      className="invisible text-[9px] leading-3.5 text-muted group-data-active/legend:visible"
                      aria-hidden="true"
                    >
                      {item.width} × {item.height}
                    </span>
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      <div
        className="specimen-choices"
        role="group"
        aria-label="Preview an icon"
      >
        {samples.map((sample, index) => (
          <button
            type="button"
            key={sample.name}
            className="specimen-choice group/choice relative grid h-9 place-items-center rounded-lg text-muted hover:bg-hover hover:text-ink aria-pressed:text-ink"
            aria-label={`Preview ${sample.label}`}
            aria-pressed={state.index === index}
            title={sample.label}
            onClick={(event) => state.select(index, event.detail === 0)}
          >
            {state.index === index && (
              <Icon
                name="point-down"
                className="pointer-events-none absolute -top-3 left-1/2 -translate-x-1/2 text-ink"
              />
            )}
            <Icon
              name={sample.name}
              className="transition-transform duration-150 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] group-active/choice:scale-[0.97]"
            />
          </button>
        ))}
      </div>
      {showProgress && (
        <div className="specimen-cycle-track mx-2 mt-2" aria-hidden="true">
          <span
            key={state.cycle}
            className="specimen-cycle-progress"
            data-running={state.running || undefined}
            style={{
              animationDuration: `${cycleDuration}ms`,
              background: guide.color,
            }}
          />
        </div>
      )}
    </section>
  );
}
