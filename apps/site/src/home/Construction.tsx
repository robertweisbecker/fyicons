import {
  IconBoundingBox,
  IconEasel,
  IconVectorBezier,
  IconVectorPath,
} from 'fyicons';
import {
  guides,
  guideStrokeWidth,
  GuideShape,
  PixelGrid,
  type Guide,
} from './construction-guides';

const constructionIcons = {
  circle: { Icon: IconVectorPath, name: 'VectorPath' },
  square: { Icon: IconBoundingBox, name: 'BoundingBox' },
  horizontal: { Icon: IconVectorBezier, name: 'VectorBezier' },
  vertical: { Icon: IconEasel, name: 'Easel' },
} as const;

export function Construction() {
  return (
    <div className="grid grid-cols-2 gap-x-4 gap-y-6 md:grid-cols-4">
      {(Object.keys(guides) as Guide[]).map((shape) => {
        const { label, width, height, color } = guides[shape];
        const { Icon: ExampleIcon, name } = constructionIcons[shape];
        // Include the centered 1px stroke in the guide's outer dimensions.
        const dimensions = `${width + guideStrokeWidth} × ${height + guideStrokeWidth}`;
        return (
          <figure key={shape} className="min-w-0 space-y-3">
            <div className="grid aspect-square place-items-center rounded-2xl bg-surface p-6 sm:p-8">
              <svg
                viewBox="0 0 16 16"
                className="w-full max-w-40 overflow-visible"
                role="img"
                aria-label={`${name} with a ${dimensions} pixel ${label.toLowerCase()} guide on a 16 × 16 pixel grid`}
              >
                <PixelGrid emphasized />
                <ExampleIcon
                  size={16}
                  aria-hidden="true"
                  className="**:stroke-current **:[fill-opacity:0.25]"
                  strokeDasharray="0.5 .25"
                  strokeWidth="0.125"

                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <g
                  stroke={color}
                  strokeWidth="0.25"
                  fill={color}
                  fillOpacity="0.1"
                  aria-hidden="true"
                >
                  <GuideShape shape={shape} outerBounds />
                </g>
              </svg>
            </div>
            <figcaption className="flex flex-wrap items-baseline gap-x-2 gap-y-1 text-sm">
              <span>{label}</span>
              <span className="font-mono text-xs text-muted">{dimensions}</span>
            </figcaption>
          </figure>
        );
      })}
    </div>
  );
}
