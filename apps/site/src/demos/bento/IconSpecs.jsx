import { useId, useLayoutEffect, useRef, useState } from 'react';
import { Button } from '@/components/ui/button';
import { byName } from '@/lib/catalog';

const colors = ['#7543b7', '#096986', '#a03963', '#80531b', '#08705b'];

function measureIcons(content, layer) {
  const bounds = layer.getBoundingClientRect();
  const viewportBounds = content
    .querySelector('[data-example-viewport]')
    .getBoundingClientRect();
  const icons = [];
  for (const svg of content.querySelectorAll('svg.fy-icon')) {
    const rect = svg.getBoundingClientRect();
    if (
      !rect.width ||
      !rect.height ||
      rect.top < viewportBounds.top ||
      rect.bottom > viewportBounds.bottom ||
      (svg.checkVisibility &&
        !svg.checkVisibility({
          opacityProperty: true,
          visibilityProperty: true,
        }))
    )
      continue;
    const viewport = svg.closest('[data-slot="scroll-area-viewport"]');
    if (viewport) {
      const clip = viewport.getBoundingClientRect();
      if (rect.left < clip.left || rect.right > clip.right) continue;
    }
    const nameClass = [...svg.classList].find(
      (c) => c.startsWith('fy-') && c !== 'fy-icon',
    );
    const name = byName.get(nameClass?.slice(3))?.componentName;
    if (!name) continue;
    icons.push({
      node: svg,
      name,
      x: rect.left - bounds.left,
      y: rect.top - bounds.top,
      w: rect.width,
      h: rect.height,
    });
  }
  return icons;
}

export default function IconSpecs({ content, active, onInspect }) {
  const layer = useRef(null);
  const mask = useId();
  const [icons, setIcons] = useState([]);
  useLayoutEffect(() => {
    const subject = content.current;
    const overlay = layer.current;
    let frame = 0;
    const assignedIds = new Map();
    function measure() {
      frame = 0;
      const measured = measureIcons(subject, overlay);
      for (const { node } of measured) {
        if (!node.id) {
          const id = mask + '-glyph-' + assignedIds.size;
          node.id = id;
          assignedIds.set(node, id);
        }
      }
      setIcons(measured);
    }
    function schedule() {
      if (!frame) frame = requestAnimationFrame(measure);
    }
    const resize = new ResizeObserver(schedule);
    resize.observe(subject);
    resize.observe(overlay);
    const changes = new MutationObserver(schedule);
    changes.observe(subject, {
      childList: true,
      characterData: true,
      attributes: true,
      subtree: true,
    });
    subject.addEventListener('scroll', schedule, true);
    measure();
    return () => {
      resize.disconnect();
      changes.disconnect();
      cancelAnimationFrame(frame);
      for (const [node, id] of assignedIds)
        if (node.id === id) node.removeAttribute('id');
      subject.removeEventListener('scroll', schedule, true);
    };
  }, [content, mask]);
  const selected = icons.find((icon) => icon.node === active);
  const index = icons.indexOf(selected);
  const color = colors[index % colors.length];
  // Keep the label inside its tile, including the first and last icons in a row.
  const labelWidth = selected ? Math.ceil(selected.name.length * 6.7) + 54 : 0;
  const left = selected
    ? Math.max(
        4,
        Math.min(
          selected.x + selected.w / 2 - labelWidth / 2,
          layer.current.clientWidth - labelWidth - 4,
        ),
      )
    : 0;
  const above = selected && selected.y >= 34;
  const edge = selected && (above ? selected.y : selected.y + selected.h);
  const labelTop = above ? edge - 32 : edge + 10;
  return (
    <div
      ref={layer}
      className="absolute inset-0 z-10 overflow-hidden rounded-[inherit]"
      data-spec-overlay=""
      onPointerDown={(e) => {
        if (e.target === e.currentTarget) onInspect(null);
      }}
      onPointerLeave={(e) => {
        if (e.pointerType === 'mouse') onInspect(null);
      }}
      onKeyDown={(e) => {
        if (e.key === 'Escape') onInspect(null);
      }}
    >
      <svg
        className="pointer-events-none absolute inset-0 size-full"
        aria-hidden="true"
      >
        <defs>
          <mask
            id={mask}
            maskUnits="userSpaceOnUse"
            x="0"
            y="0"
            width="100%"
            height="100%"
          >
            <rect width="100%" height="100%" fill="white" />
            <g style={{ filter: 'brightness(0)' }}>
              {icons.map(({ node, x, y, w, h }, i) => (
                <use
                  key={i}
                  href={'#' + node.id}
                  x={x}
                  y={y}
                  width={w}
                  height={h}
                />
              ))}
            </g>
          </mask>
        </defs>
        <rect
          width="100%"
          height="100%"
          fill="var(--spec-veil, var(--canvas))"
          opacity=".63"
          mask={`url(#${mask})`}
        />
      </svg>
      {icons.map(({ node, name, x, y, w, h }, i) => (
        <Button
          variant="unstyled"
          size="unstyled"
          key={i}
          type="button"
          aria-label={name + ', ' + Math.round(w) + ' pixels'}
          aria-pressed={node === active}
          onPointerEnter={(e) => {
            if (e.pointerType !== 'touch') onInspect(node);
          }}
          onPointerLeave={(e) => {
            if (e.pointerType !== 'touch') onInspect(null);
          }}
          onFocus={() => onInspect(node)}
          onBlur={() => onInspect(null)}
          onClick={() => onInspect(node)}
          className="absolute cursor-crosshair rounded-[2px] border border-dashed outline-offset-2 focus-visible:outline-2"
          style={{
            left: x - 1,
            top: y - 1,
            width: w + 2,
            height: h + 2,
            color: colors[i % colors.length],
            borderColor: node === active ? 'currentColor' : 'transparent',
            backgroundColor:
              node === active
                ? 'color-mix(in srgb,currentColor 16%,transparent)'
                : 'transparent',
          }}
        />
      ))}
      {selected && (
        <>
          <svg
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 size-full"
          >
            <line
              x1={selected.x + selected.w / 2}
              y1={edge}
              x2={selected.x + selected.w / 2}
              y2={above ? labelTop + 22 : labelTop}
              stroke={color}
            />
          </svg>
          <code
            aria-hidden="true"
            className="pointer-events-none absolute flex h-[22px] items-center justify-center gap-2 rounded px-1.5 font-mono text-[11px] whitespace-nowrap text-white shadow-sm"
            style={{
              left,
              top: labelTop,
              width: labelWidth,
              backgroundColor: color,
            }}
          >
            {selected.name}
            <span className="opacity-80">{Math.round(selected.w)}px</span>
          </code>
        </>
      )}
    </div>
  );
}
