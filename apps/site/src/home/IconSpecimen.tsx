import {
  useEffect,
  useId,
  useRef,
  useState,
  type CSSProperties,
  type FocusEvent,
  type PointerEvent,
} from 'react';
import { motion, MotionConfig } from 'motion/react';
import { useReducedMotionPreference } from '@/lib/preferences';
import { Icon } from '@/components/Icon';
import { Tooltip, TooltipGroup } from '@/components/ui/tooltip';
import {
  guides,
  guideStrokeWidth,
  GuideShape,
  PixelGrid,
  type Guide,
} from './construction-guides';
import './IconSpecimen.css';

const specimenTransition = {
  type: 'tween',
  duration: 0.65,
  ease: [0.42, 0, 0.58, 1],
} as const;
// CSS artwork and Motion guides must arrive on the same curve and duration.
const specimenMotionStyle = {
  '--specimen-duration': `${specimenTransition.duration}s`,
  '--specimen-easing': `cubic-bezier(${specimenTransition.ease.join(',')})`,
} as CSSProperties;

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
  const reducedMotion = useReducedMotionPreference();
  const [index, setIndex] = useState(0);
  const [playing, setPlaying] = useState(true);
  const [hovered, setHovered] = useState(false);
  const [focused, setFocused] = useState(false);
  const [visible, setVisible] = useState(false);
  const [pageVisible, setPageVisible] = useState(true);
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
    instant: instant || Boolean(reducedMotion),
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

function ActiveGuide({ shape, instant }: { shape: Guide; instant: boolean }) {
  const { width, height, color } = guides[shape];
  const x = (16 - width) / 2;
  const y = (16 - height) / 2;
  const outline = {
    attrX: x,
    attrY: y,
    width,
    height,
    rx: shape === 'circle' ? width / 2 : 0,
    ry: shape === 'circle' ? height / 2 : 0,
  };
  return (
    <MotionConfig transition={instant ? { duration: 0 } : specimenTransition}>
      <motion.g
        className="specimen-active-guide pointer-events-none"
        data-guide={shape}
        initial={false}
        animate={{ color }}
        fill="none"
        stroke="currentColor"
        strokeWidth="0.07"
        aria-hidden="true"
      >
        {/* Animate the path geometry without scaling its centered stroke. */}
        <motion.rect
          initial={false}
          animate={outline}
          strokeWidth={guideStrokeWidth}
          opacity="0.12"
        />
        <motion.rect
          initial={false}
          animate={outline}
          fill="currentColor"
          fillOpacity="0.2"
          opacity="0.85"
        />
      </motion.g>
    </MotionConfig>
  );
}

function BoundingBox({ shape, instant }: { shape: Guide; instant: boolean }) {
  const { width, height, color } = guides[shape];
  return (
    <motion.div
      layout={!instant}
      initial={false}
      animate={{ color }}
      transition={instant ? { duration: 0 } : specimenTransition}
      className="specimen-bounds pointer-events-none absolute outline outline-offset-[-0.5px] outline-current/50"
      style={{
        left: `${((16 - width) / 32) * 100}%`,
        top: `${((16 - height) / 32) * 100}%`,
        width: `${(width / 16) * 100}%`,
        height: `${(height / 16) * 100}%`,
      }}
      aria-hidden="true"
    >
      {[
        [0, 0],
        [100, 0],
        [0, 100],
        [100, 100],
      ].map(([left, top], index) => (
        <motion.span
          key={index}
          layout={instant ? false : 'position'}
          transition={instant ? { duration: 0 } : specimenTransition}
          className="specimen-handle absolute size-1.5 -translate-1/2 border border-current bg-white"
          style={{ left: `${left}%`, top: `${top}%` }}
        />
      ))}
    </motion.div>
  );
}

function PixelSpecimen({
  index,
  inspectedGuide,
  instant,
}: {
  index: number;
  inspectedGuide: Guide | null;
  instant: boolean;
}) {
  const sample = samples[index];
  return (
    <svg
      className="specimen-grid-preview"
      viewBox="0 0 16 16"
      role="img"
      aria-label={`${sample.label} on a 16 by 16 pixel grid; ${guides[inspectedGuide ?? sample.guide].label.toLowerCase()} guide ${inspectedGuide ? 'previewed' : 'highlighted'}`}
    >
      <PixelGrid />
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
          className="specimen-guide pointer-events-none"
          data-guide={shape}
          style={{ color: guides[shape].color }}
          fill="none"
          stroke="currentColor"
          strokeWidth="0.07"
          aria-hidden="true"
        >
          <g strokeWidth={guideStrokeWidth} opacity="0.05">
            <GuideShape shape={shape} />
          </g>
          <g opacity="0.4">
            <GuideShape shape={shape} />
          </g>
        </g>
      ))}
      <ActiveGuide shape={inspectedGuide ?? sample.guide} instant={instant} />
      <g
        className="pointer-events-none fill-ink/60"
        fontSize="0.45"
        fontFamily="ui-monospace, monospace"
        dominantBaseline="central"
        aria-hidden="true"
      >
        {[0, 4, 8, 12, 16].map((value) => (
          <g key={value}>
            <text x={value} y="-0.85" textAnchor="middle">
              {value}
            </text>
            {value > 0 && (
              <text x="-0.7" y={value} textAnchor="end">
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
  const pointerLayoutId = useId();
  const guide = guides[state.sample.guide];
  const playbackLabel = state.playing
    ? 'Pause automatic cycling'
    : 'Resume automatic cycling';
  return (
    <section
      className="icon-specimen group/specimen"
      aria-label="Icon spotlight"
      style={specimenMotionStyle}
      {...state.region}
    >
      <div className="specimen-stage pt-7 pb-6 pl-8 md:py-10 md:pl-16">
        <div className="specimen-visual relative" {...state.visual}>
          <PixelSpecimen
            index={state.index}
            inspectedGuide={state.inspectedGuide}
            instant={state.instant}
          />
          <BoundingBox
            shape={state.inspectedGuide ?? state.sample.guide}
            instant={state.instant}
          />
          <div className="absolute inset-x-[3.4375%] top-full mt-1 flex items-center justify-between gap-2 font-mono text-[11px] leading-4">
            <span
              className="specimen-name pointer-events-none"
              aria-live={state.playing ? 'off' : 'polite'}
            >
              {state.sample.label}
            </span>
            {!state.reducedMotion && (
              <button
                type="button"
                className="flex shrink-0 items-center gap-1 rounded py-1 text-muted hover:text-ink"
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
          </div>
        </div>
        <div className="specimen-notes">
          <ul
            className="mt-auto flex w-full flex-col"
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
                    className="flex min-h-6 w-full items-center rounded py-1"
                    aria-label={`Inspect ${item.label.toLowerCase()} guide`}
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
        <TooltipGroup>
          {samples.map((sample, index) => (
            <Tooltip key={sample.name} label={sample.label}>
              <button
                type="button"
                className="specimen-choice group/choice relative grid aspect-square h-9 place-items-center rounded-lg text-muted hover:bg-hover hover:text-ink aria-pressed:text-ink"
                aria-label={`Preview ${sample.label}`}
                aria-pressed={state.index === index}
                onClick={(event) => state.select(index, event.detail === 0)}
              >
                {state.index === index && (
                  <motion.span
                    aria-hidden="true"
                    layoutId={pointerLayoutId}
                    transition={
                      state.instant ? { duration: 0 } : specimenTransition
                    }
                    className="pointer-events-none absolute inset-x-0 -top-3 mx-auto w-fit text-ink"
                  >
                    <Icon name="point-down" />
                  </motion.span>
                )}
                <Icon
                  name={sample.name}
                  className="transition-transform duration-150 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] group-active/choice:scale-[0.97]"
                />
              </button>
            </Tooltip>
          ))}
        </TooltipGroup>
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
