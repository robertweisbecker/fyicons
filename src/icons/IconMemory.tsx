import * as React from 'react';
import type { IconProps } from './types';
const IconMemory = React.forwardRef<SVGSVGElement, IconProps>(function IconMemory(props, ref) {
  const idPrefix = React.useId().replace(/[^a-zA-Z0-9_-]/g, '') + '-';
  const {
    size = 16,
    color,
    title,
    ...svgProps
  } = props;
  return <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...svgProps} ref={ref} width={svgProps["width"] ?? size} height={svgProps["height"] ?? size} color={color} aria-labelledby={svgProps["aria-labelledby"] ?? (title ? idPrefix + "title" : undefined)} aria-label={svgProps["aria-label"] ?? title} role={svgProps["role"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? "img" : undefined)} aria-hidden={svgProps["aria-hidden"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? undefined : true)}>{title ? <title id={idPrefix + "title"}>{title}</title> : null}<path d="M8 1.125C9.47555 1.125 10.9155 1.38279 12.0029 1.86328C13.0475 2.32487 13.875 3.05186 13.875 4V12C13.875 12.9481 13.0475 13.6751 12.0029 14.1367C10.9155 14.6172 9.47555 14.875 8 14.875C6.52445 14.875 5.08449 14.6172 3.99707 14.1367C2.95248 13.6751 2.125 12.9481 2.125 12V4C2.125 3.05186 2.95248 2.32487 3.99707 1.86328C5.08449 1.38279 6.52445 1.125 8 1.125ZM12.875 9.64453C12.6154 9.83185 12.3194 9.99688 12.0029 10.1367C10.9155 10.6172 9.47555 10.875 8 10.875C6.52445 10.875 5.08449 10.6172 3.99707 10.1367C3.6806 9.99688 3.38464 9.83185 3.125 9.64453V12C3.125 12.3116 3.43011 12.7925 4.40137 13.2217C5.32996 13.632 6.62448 13.875 8 13.875C9.37552 13.875 10.67 13.632 11.5986 13.2217C12.5699 12.7925 12.875 12.3116 12.875 12V9.64453ZM12.875 5.64453C12.6154 5.83185 12.3194 5.99688 12.0029 6.13672C10.9155 6.61721 9.47555 6.875 8 6.875C6.52445 6.875 5.08449 6.61721 3.99707 6.13672C3.6806 5.99688 3.38464 5.83185 3.125 5.64453V8C3.125 8.31159 3.43011 8.79249 4.40137 9.22168C5.32996 9.63199 6.62448 9.875 8 9.875C9.37552 9.875 10.67 9.63199 11.5986 9.22168C12.5699 8.79249 12.875 8.31159 12.875 8V5.64453ZM8 2.125C6.62448 2.125 5.32996 2.36801 4.40137 2.77832C3.43011 3.20751 3.125 3.68841 3.125 4C3.125 4.31159 3.43011 4.79249 4.40137 5.22168C5.32996 5.63199 6.62448 5.875 8 5.875C9.37552 5.875 10.67 5.63199 11.5986 5.22168C12.5699 4.79249 12.875 4.31159 12.875 4C12.875 3.68841 12.5699 3.20751 11.5986 2.77832C10.67 2.36801 9.37552 2.125 8 2.125Z" fill="currentColor" style={{
      fill: "currentColor",
      fillOpacity: 1
    }} /></svg>;
});
export default IconMemory;
