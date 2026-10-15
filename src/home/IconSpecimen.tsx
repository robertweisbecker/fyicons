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
  { name: 'swatch', label: 'Image', guide: 'square' },
  { name: 'envelope', label: 'Envelope', guide: 'horizontal' },
  { name: 'file-zip', label: 'FileZip', guide: 'vertical' },
  { name: 'skull', label: 'Globe', guide: 'circle' },
  { name: 'square-asterisk', label: 'SquareAsterisk', guide: 'square' },
  { name: 'scissors', label: 'Scissors', guide: 'horizontal' },
  { name: 'blocks', label: 'Blocks', guide: 'vertical' },
];
const cycleDuration = 8000; // 8 seconds

function useSpecimen() {
  const reducedMotion = useReducedMotion();
  const [index, setIndex] = useState(0);
  const [playing, setPlaying] = useState(true);
  const [hovered, setHovered] = useState(false);
  const [focused, setFocused] = useState(false);
  const [visible, setVisible] = useState(false);
  const [pageVisible, setPageVisible] = useState(!document.hidden);
  const [instant, setInstant] = useState(false);
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

  return {
    index,
    sample: samples[index],
    playing: playing && !reducedMotion,
    reducedMotion,
    running,
    select: (next: number, keyboard: boolean) => {
      setInstant(keyboard);
      setIndex(next);
      setPlaying(false);
    },
    toggle: () => setPlaying((current) => !current),
    advance: () => {
      setInstant(false);
      setIndex((current) => (current + 1) % samples.length);
    },
    visual: {
      onPointerEnter: (event: PointerEvent<HTMLDivElement>) => {
        if (event.pointerType !== 'touch') setHovered(true);
      },
      onPointerLeave: () => setHovered(false),
    },
    region: {
      ref: root,
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
    <g className="specimen-handles">
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

function PixelSpecimen({ index }: { index: number }) {
  const id = useId();
  const sample = samples[index];
  return (
    <svg
      className="specimen-grid-preview"
      viewBox="0 0 16 16"
      role="img"
      aria-label={`${sample.label} on a 16 by 16 pixel grid; ${guides[sample.guide].label.toLowerCase()} guide highlighted`}
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
          className="specimen-guide"
          data-guide={shape}
          data-active={shape === sample.guide || undefined}
          style={{ color: guides[shape].color }}
          fill="currentColor"
          stroke="currentColor"
          strokeWidth="0.07"
          aria-hidden="true"
        >
          <g className="specimen-guide-outline">
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
      className="icon-specimen"
      aria-label="Icon spotlight"
      {...state.region}
    >
      <div className="specimen-stage">
        <div className="specimen-visual" {...state.visual}>
          <PixelSpecimen index={state.index} />
        </div>
        <div
          className="specimen-notes"
          aria-live={state.playing ? 'off' : 'polite'}
        >
          <span className="specimen-name">{state.sample.label}</span>
          <ul className="specimen-legend" aria-label="Construction guides">
            {(Object.keys(guides) as Guide[]).map((shape) => {
              const item = guides[shape];
              const active = shape === state.sample.guide;
              return (
                <li
                  key={shape}
                  className="specimen-legend-item"
                  data-active={active || undefined}
                  aria-label={`${item.label}: ${item.width} by ${item.height}${active ? ', active guide' : ''}`}
                  style={{ color: item.color }}
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
                  <span className="specimen-dimensions" aria-hidden="true">
                    {item.width} × {item.height}
                  </span>
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
            className="specimen-choice"
            aria-label={`Preview ${sample.label}`}
            aria-pressed={state.index === index}
            title={sample.label}
            onClick={(event) => state.select(index, event.detail === 0)}
          >
            <Icon name={sample.name} className="size-4.5 min-[900px]:size-5" />
          </button>
        ))}
      </div>
      <div className="specimen-playback">
        <div className="specimen-native" title="Actual size: 16 × 16 px">
          <Icon name={state.sample.name} />
          <span className="sr-only">Actual size: 16 × 16 px</span>
        </div>
        <div className="specimen-cycle-track" aria-hidden="true">
          <span
            key={state.index}
            className="specimen-cycle-progress"
            data-running={state.running || undefined}
            onAnimationEnd={state.advance}
            style={{
              animationDuration: `${cycleDuration}ms`,
              background: guide.color,
            }}
          />
        </div>
        {!state.reducedMotion && (
          <button
            type="button"
            className="grid size-7 shrink-0 place-items-center rounded-full bg-hover text-muted hover:text-ink"
            aria-label={playbackLabel}
            title={playbackLabel}
            onClick={state.toggle}
          >
            <Icon
              name={state.playing ? 'pause-fill' : 'play-fill'}
              className="size-3"
            />
          </button>
        )}
      </div>
    </section>
  );
}
