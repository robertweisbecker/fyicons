import * as React from 'react';
import type { IconProps } from './types';
const IconVolumeNoneFill = React.forwardRef<SVGSVGElement, IconProps>(function IconVolumeNoneFill(props, ref) {
  const idPrefix = React.useId().replace(/[^a-zA-Z0-9_-]/g, '') + '-';
  const {
    size = 16,
    color,
    title,
    ...svgProps
  } = props;
  return <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...svgProps} ref={ref} width={svgProps["width"] ?? size} height={svgProps["height"] ?? size} color={color} aria-labelledby={svgProps["aria-labelledby"] ?? (title ? idPrefix + "title" : undefined)} aria-label={svgProps["aria-label"] ?? title} role={svgProps["role"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? "img" : undefined)} aria-hidden={svgProps["aria-hidden"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? undefined : true)}>{title ? <title id={idPrefix + "title"}>{title}</title> : null}<path d="M7.37988 3.02894C8.03566 2.51122 9 2.97859 9 3.8141V12.1862C9 13.0217 8.03566 13.489 7.37988 12.9713L4.25 10.4996L2.5 10.5006C1.6717 10.5006 1.0002 9.82889 1 9.00062V7.00062C1 6.17224 1.67162 5.50068 2.5 5.50062L4.25 5.49964L7.37988 3.02894Z" fill="currentColor" style={{
      fill: "currentColor",
      fillOpacity: 1
    }} /></svg>;
});
export default IconVolumeNoneFill;
