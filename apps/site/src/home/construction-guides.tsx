import { useId } from 'react';

// Centered construction paths from the drawing sheet, not artwork bounds.
export const guides = {
  circle: { label: 'Circle', width: 13, height: 13, color: '#ec4899' },
  square: { label: 'Square', width: 11, height: 11, color: '#3b82f6' },
  horizontal: { label: 'Horizontal', width: 13, height: 9, color: '#10b981' },
  vertical: { label: 'Vertical', width: 9, height: 13, color: '#f59e0b' },
} as const;

export type Guide = keyof typeof guides;
export const guideStrokeWidth = 1;

export function GuideShape({
  shape,
  outerBounds = false,
}: {
  shape: Guide;
  outerBounds?: boolean;
}) {
  const guide = guides[shape];
  const width = guide.width + (outerBounds ? guideStrokeWidth : 0);
  const height = guide.height + (outerBounds ? guideStrokeWidth : 0);
  return shape === 'circle' ? (
    <circle cx="8" cy="8" r={width / 2} />
  ) : (
    <rect
      x={(16 - width) / 2}
      y={(16 - height) / 2}
      rx={1}
      ry={1}
      width={width}
      height={height}
    />
  );
}

export function PixelGrid({
  emphasized = false,
  extension = 0.5,
}: {
  emphasized?: boolean;
  extension?: number;
}) {
  const id = useId();
  return (
    <g aria-hidden="true">
      <defs>
        <pattern id={id} width="1" height="1" patternUnits="userSpaceOnUse">
          <path
            d="M 1 0 H 0 V 1"
            fill="none"
            stroke="var(--color-blue-400)"
            strokeWidth={emphasized ? '0.07' : '0.035'}
            strokeDasharray="0.08 0.08"
          />
        </pattern>
      </defs>
      <rect
        width="16"
        height="16"
        fill={`url(#${id})`}
        opacity={emphasized ? '0.8' : '0.45'}
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
        d={`M0 ${-extension}V${16 + extension}M16 ${-extension}V${16 + extension}M${-extension} 0H${16 + extension}M${-extension} 16H${16 + extension}`}
        fill="none"
        stroke={emphasized ? 'var(--border)' : 'var(--line)'}
        strokeWidth="1"
        vectorEffect="non-scaling-stroke"
      />
    </g>
  );
}
