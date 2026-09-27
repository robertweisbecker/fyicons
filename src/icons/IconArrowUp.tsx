import * as React from 'react';
import type { IconProps } from './types';
const IconArrowUp = React.forwardRef<SVGSVGElement, IconProps>(function IconArrowUp(props, ref) {
  const idPrefix = React.useId().replace(/[^a-zA-Z0-9_-]/g, '') + '-';
  const {
    size = 16,
    color,
    title,
    ...svgProps
  } = props;
  return <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...svgProps} ref={ref} width={svgProps["width"] ?? size} height={svgProps["height"] ?? size} color={color} aria-labelledby={svgProps["aria-labelledby"] ?? (title ? idPrefix + "title" : undefined)} aria-label={svgProps["aria-label"] ?? title} role={svgProps["role"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? "img" : undefined)} aria-hidden={svgProps["aria-hidden"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? undefined : true)}>{title ? <title id={idPrefix + "title"}>{title}</title> : null}<path d="M7.72553 2.58209C7.91961 2.45392 8.18358 2.47568 8.35444 2.64654L12.8544 7.14654C13.0497 7.3418 13.0497 7.65832 12.8544 7.85357C12.6592 8.0488 12.3427 8.0488 12.1474 7.85357L8.50093 4.20709V13.5001C8.5009 13.7762 8.27705 14.0001 8.00093 14.0001C7.7248 14.0001 7.50096 13.7762 7.50093 13.5001V4.20709L3.85444 7.85357C3.65919 8.0488 3.34266 8.0488 3.14741 7.85357C2.95216 7.65832 2.95217 7.3418 3.14741 7.14654L7.64741 2.64654L7.72553 2.58209Z" fill="currentColor" style={{
      fill: "currentColor",
      fillOpacity: 1
    }} /></svg>;
});
export default IconArrowUp;
