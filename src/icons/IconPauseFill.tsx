import * as React from 'react';
import type { IconProps } from './types';
const IconPauseFill = React.forwardRef<SVGSVGElement, IconProps>(function IconPauseFill(props, ref) {
  const idPrefix = React.useId().replace(/[^a-zA-Z0-9_-]/g, '') + '-';
  const {
    size = 16,
    color,
    title,
    ...svgProps
  } = props;
  return <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...svgProps} ref={ref} width={svgProps["width"] ?? size} height={svgProps["height"] ?? size} color={color} aria-labelledby={svgProps["aria-labelledby"] ?? (title ? idPrefix + "title" : undefined)} aria-label={svgProps["aria-label"] ?? title} role={svgProps["role"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? "img" : undefined)} aria-hidden={svgProps["aria-hidden"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? undefined : true)}>{title ? <title id={idPrefix + "title"}>{title}</title> : null}<path d="M6 2C6.55228 2 7 2.44772 7 3V13C7 13.5523 6.55228 14 6 14H4C3.44772 14 3 13.5523 3 13V3C3 2.44772 3.44772 2 4 2H6ZM12 2C12.5523 2 13 2.44772 13 3V13C13 13.5523 12.5523 14 12 14H10C9.44772 14 9 13.5523 9 13V3C9 2.44772 9.44772 2 10 2H12Z" fill="currentColor" style={{
      fill: "currentColor",
      fillOpacity: 1
    }} /></svg>;
});
export default IconPauseFill;
