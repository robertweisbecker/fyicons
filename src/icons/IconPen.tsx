import * as React from 'react';
import type { IconProps } from './types';
const IconPen = React.forwardRef<SVGSVGElement, IconProps>(function IconPen(props, ref) {
  const idPrefix = React.useId().replace(/[^a-zA-Z0-9_-]/g, '') + '-';
  const {
    size = 16,
    color,
    title,
    ...svgProps
  } = props;
  return <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...svgProps} ref={ref} width={svgProps["width"] ?? size} height={svgProps["height"] ?? size} color={color} aria-labelledby={svgProps["aria-labelledby"] ?? (title ? idPrefix + "title" : undefined)} aria-label={svgProps["aria-label"] ?? title} role={svgProps["role"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? "img" : undefined)} aria-hidden={svgProps["aria-hidden"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? undefined : true)}>{title ? <title id={idPrefix + "title"}>{title}</title> : null}<path d="M9.64648 2.64624C10.6701 1.62265 12.3298 1.6227 13.3535 2.64624C14.3772 3.66991 14.3772 5.32958 13.3535 6.35327L7.76758 11.9392C6.77314 12.9336 5.48299 13.5782 4.09082 13.7771L2.57031 13.9949C2.41467 14.017 2.25766 13.9644 2.14648 13.8533C2.03539 13.7421 1.98279 13.585 2.00488 13.4294L2.22266 11.9089C2.42158 10.5168 3.06621 9.22658 4.06055 8.23218L9.64648 2.64624ZM12.6465 3.35327C12.0133 2.72026 10.9866 2.72021 10.3535 3.35327L4.76758 8.93921C3.92622 9.78063 3.38023 10.8726 3.21191 12.0505L3.08887 12.9099L3.94922 12.7878C5.12722 12.6196 6.21908 12.0736 7.06055 11.2322L12.6465 5.64624C13.2796 5.01307 13.2796 3.98642 12.6465 3.35327Z" fill="currentColor" style={{
      fill: "currentColor",
      fillOpacity: 1
    }} /></svg>;
});
export default IconPen;
