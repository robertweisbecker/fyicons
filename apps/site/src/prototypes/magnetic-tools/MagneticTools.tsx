'use client';

import {
  useEffect,
  useMemo,
  useRef,
  useState,
  type CSSProperties,
} from 'react';
import { DialRoot, useDialKit, type DialConfig } from 'dialkit';
import { spring } from 'motion';
import 'dialkit/styles.css';
import '@/prototypes/magnetic-tools/magnetic-tools.css';

const maxColumns = 8;

const controls = {
  grid: {
    'Frame width (%)': [100, 35, 100, 1],
    'Spacing (px)': [24, 0, 64, 1],
    'Icon size (px)': [24, 12, 56, 1],
  },
  magnet: {
    'Point tips at cursor': true,
    'Magnetism (%)': [50, 0, 100, 1],
    rotation: { type: 'spring', visualDuration: 0.22, bounce: 0.18 },
  },
} satisfies DialConfig;

// Direction of the tip in the original artwork.
const southwestTips = new Set([
  'broom',
  'broom-sweep',
  'brush',
  'brush-simple',
  'bucket',
  'compass',
  'compass-fill',
  'compass-simple',
  'eraser',
  'erasing',
  'drawing',
  'edit',
  'edit-solid',
  'eyedropper',
  'hammer',
  'highlighter',
  'key',
  'layout-pin',
  'layout-pinned',
  'link',
  'link-slash',
  'link-unlink',
  'marker',
  'microphone-music',
  'paint-brush',
  'paint-can',
  'party-popper',
  'pen',
  'pen-tool',
  'pen-tool-alt',
  'pencil',
  'pin',
  'pin-fill',
  'plug',
  'plug-simple',
  'plugs',
  'plugs-plugged',
  'plugs-unplug',
  'quill',
  'ruler',
  'screw',
  'umbrella',
]);
function tipBearing(name: string) {
  return southwestTips.has(name) ? 135 : -45;
}

type Point = { x: number; y: number };
type Tool = { name: string; url: string };

export function MagneticTools({ tools }: { tools: Tool[] }) {
  const { grid, magnet } = useDialKit('Magnetic tools', controls);
  const [columns, setColumns] = useState(maxColumns);
  const orderedTools = useMemo(() => {
    const byBearing = [...tools].sort(
      (a, b) => tipBearing(b.name) - tipBearing(a.name),
    );
    const slots = new Array<Tool>(tools.length);
    let index = 0;
    // Fill columns from the left, leaving the rightmost slots for northeast tips.
    for (let col = 0; col < columns; col++) {
      for (let slot = col; slot < slots.length; slot += columns) {
        slots[slot] = byBearing[index++];
      }
    }
    return slots;
  }, [tools, columns]);
  const size = grid['Icon size (px)'];
  const gap = grid['Spacing (px)'];
  const aimTips = magnet['Point tips at cursor'];
  const magnetism = magnet['Magnetism (%)'] / 100;
  const frame = useRef<HTMLDivElement>(null);
  const lattice = useRef<HTMLDivElement>(null);
  const pointer = useRef<Point | null>(null);
  const timing = useMemo(() => {
    const motion = magnet.rotation;
    if (motion.type === 'easing')
      return `${motion.duration}s cubic-bezier(${motion.ease.join(',')})`;
    return spring({ ...motion, keyframes: [0, 1] }).toString();
  }, [magnet.rotation]);

  useEffect(() => {
    const surface = frame.current!;
    const gridElement = lattice.current!;
    const cells = Array.from(gridElement.children) as HTMLElement[];
    const bearings = cells.map((cell) => {
      const degrees = aimTips ? Number(cell.dataset.bearing) : -45;
      return (degrees * Math.PI) / 180;
    });
    const pitch = size + gap;
    const radius = magnetism * 8 * pitch;
    const lockRadius = Math.min(pitch, radius / 2);
    let request = 0;
    let centers: Point[] = [];
    function measure() {
      setColumns(
        getComputedStyle(gridElement).gridTemplateColumns.split(' ').length,
      );
      centers = cells.map((cell) => ({
        x: cell.offsetLeft + size / 2,
        y: cell.offsetTop + size / 2,
      }));
      schedule();
    }

    function update() {
      request = 0;
      const origin = gridElement.getBoundingClientRect();
      const cursor = pointer.current;
      cells.forEach((cell, i) => {
        let target = 0;
        if (cursor && radius > 0) {
          const dx = cursor.x - origin.left - centers[i].x;
          const dy = cursor.y - origin.top - centers[i].y;
          const distance = Math.hypot(dx, dy);
          if (distance < 0.5) return; // No bearing at the pivot itself.
          const t = Math.max(
            0,
            Math.min(1, (radius - distance) / (radius - lockRadius)),
          );
          const pull = t * t * (3 - 2 * t);
          // At zero pull the source artwork has zero rotation.
          const toward = Math.atan2(dy, dx) - bearings[i];
          target =
            (Math.atan2(
              pull * Math.sin(toward),
              1 - pull + pull * Math.cos(toward),
            ) *
              180) /
            Math.PI;
        }
        const previous = Number(cell.dataset.angle ?? 0);
        const difference = target - previous;
        const delta = difference - 360 * Math.round(difference / 360);
        if (Math.abs(delta) < 0.001) return;
        const next = previous + delta;
        cell.dataset.angle = String(next);
        cell.style.transform = `rotate(${next}deg)`;
      });
    }
    function schedule() {
      if (!request) request = requestAnimationFrame(update);
    }
    function point(event: PointerEvent) {
      if (!event.isPrimary) return;
      pointer.current = { x: event.clientX, y: event.clientY };
      schedule();
    }
    function clear() {
      pointer.current = null;
      schedule();
    }
    function release(event: PointerEvent) {
      if (event.pointerType !== 'mouse' && event.isPrimary) clear();
    }
    function scroll() {
      if (pointer.current) schedule();
    }
    const listeners = new AbortController();
    const options = { signal: listeners.signal };
    surface.addEventListener('pointerenter', point, options);
    surface.addEventListener('pointerdown', point, options);
    surface.addEventListener('pointermove', point, options);
    surface.addEventListener('pointerleave', clear, options);
    surface.addEventListener('pointercancel', clear, options);
    surface.addEventListener('pointerup', release, options);
    window.addEventListener('blur', clear, options);
    window.addEventListener('scroll', scroll, { ...options, capture: true });
    const observer = new ResizeObserver(measure);
    observer.observe(gridElement);
    observer.observe(surface);
    measure();
    return () => {
      observer.disconnect();
      cancelAnimationFrame(request);
      listeners.abort();
    };
  }, [orderedTools, gap, size, magnetism, aimTips]);

  return (
    <section className="mx-auto max-w-6xl px-4 py-8 sm:px-6 sm:py-12">
      <h1 className="mb-6 text-3xl font-semibold tracking-tight">
        Magnetic tools
      </h1>
      <div className="grid items-start gap-5 lg:grid-cols-[minmax(0,1fr)_19rem]">
        <div
          ref={frame}
          className="magnetic-frame"
          style={{ width: `${grid['Frame width (%)']}%` }}
          role="img"
          aria-label="Tool icons turn toward the pointer and return to their original orientations when it leaves."
        >
          <div
            ref={lattice}
            className="magnetic-grid"
            style={
              {
                width: `min(100%, ${maxColumns * size + (maxColumns - 1) * gap}px)`,
                gridTemplateColumns: `repeat(auto-fit, ${size}px)`,
                gridAutoRows: size,
                gap,
                '--rotation': timing,
              } as CSSProperties
            }
          >
            {orderedTools.map((tool) => {
              return (
                <span
                  key={tool.name}
                  className="magnetic-pivot"
                  data-bearing={tipBearing(tool.name)}
                >
                  <span
                    className="magnetic-tool"
                    data-tool={tool.name}
                    style={{
                      maskImage: `url("${tool.url}")`,
                    }}
                  />
                </span>
              );
            })}
          </div>
        </div>
        <aside aria-label="Magnetic field controls" className="min-w-0">
          <DialRoot mode="inline" defaultOpen theme="system" />
        </aside>
      </div>
    </section>
  );
}
