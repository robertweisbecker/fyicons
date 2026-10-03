import * as React from 'react';
import type { IconProps } from './types';
const IconStarFill = React.forwardRef<SVGSVGElement, IconProps>(function IconStarFill(props, ref) {
  const idPrefix = React.useId().replace(/[^a-zA-Z0-9_-]/g, '') + '-';
  const {
    size = 16,
    color,
    title,
    ...svgProps
  } = props;
  return <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...svgProps} ref={ref} width={svgProps["width"] ?? size} height={svgProps["height"] ?? size} color={color} aria-labelledby={svgProps["aria-labelledby"] ?? (title ? idPrefix + "title" : undefined)} aria-label={svgProps["aria-label"] ?? title} role={svgProps["role"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? "img" : undefined)} aria-hidden={svgProps["aria-hidden"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? undefined : true)}>{title ? <title id={idPrefix + "title"}>{title}</title> : null}<path d="M7.15234 1.50684C7.53643 0.88352 8.46258 0.883444 8.84668 1.50684L8.9209 1.65039L10.2754 4.86816L13.7549 5.16211C14.5815 5.2331 14.9446 6.20246 14.4365 6.7998L14.3232 6.91406L11.6807 9.19629L12.4775 12.5957V12.5967C12.6649 13.4027 11.8571 14.0516 11.1309 13.7529L10.9863 13.6797L7.99902 11.8721L5.0127 13.6797C4.25472 14.1369 3.32138 13.4557 3.52148 12.5957L4.31543 9.19531L1.67578 6.91406C1.00804 6.33587 1.36304 5.23759 2.24512 5.16211L5.72266 4.86816L7.07812 1.65039L7.15234 1.50684Z" fill="currentColor" style={{
      fill: "currentColor",
      fillOpacity: 1
    }} /></svg>;
});
export default IconStarFill;
