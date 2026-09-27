import * as React from 'react';
import type { IconProps } from './types';
const IconSave = React.forwardRef<SVGSVGElement, IconProps>(function IconSave(props, ref) {
  const idPrefix = React.useId().replace(/[^a-zA-Z0-9_-]/g, '') + '-';
  const {
    size = 16,
    color,
    title,
    ...svgProps
  } = props;
  return <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...svgProps} ref={ref} width={svgProps["width"] ?? size} height={svgProps["height"] ?? size} color={color} aria-labelledby={svgProps["aria-labelledby"] ?? (title ? idPrefix + "title" : undefined)} aria-label={svgProps["aria-label"] ?? title} role={svgProps["role"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? "img" : undefined)} aria-hidden={svgProps["aria-hidden"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? undefined : true)}>{title ? <title id={idPrefix + "title"}>{title}</title> : null}<path d="M10.6113 2C10.9682 2.00007 11.3101 2.1422 11.5625 2.39453L13.6055 4.4375C13.8578 4.68988 13.9999 5.03179 14 5.38867V12.6543C13.9999 13.0112 13.8578 13.3531 13.6055 13.6055C13.3531 13.8578 13.0112 13.9999 12.6543 14H3.3457C2.98884 13.9999 2.64688 13.8578 2.39453 13.6055C2.14218 13.3531 2.00012 13.0112 2 12.6543V3.3457C2.00012 2.98884 2.14218 2.64688 2.39453 2.39453C2.64688 2.14218 2.98884 2.00012 3.3457 2H10.6113ZM3.3457 3C3.25406 3.00012 3.16637 3.03675 3.10156 3.10156C3.03675 3.16637 3.00012 3.25406 3 3.3457V12.6543C3.00012 12.7459 3.03675 12.8336 3.10156 12.8984C3.16637 12.9632 3.25406 12.9999 3.3457 13H5V10.25C5 9.55964 5.55964 9 6.25 9H9.75C10.4404 9 11 9.55964 11 10.25V13H12.6543C12.7459 12.9999 12.8336 12.9632 12.8984 12.8984C12.9632 12.8336 12.9999 12.7459 13 12.6543V5.38867C12.9999 5.29701 12.9632 5.20937 12.8984 5.14453L11 3.24609V4.75C11 5.30228 10.5523 5.75 10 5.75H6C5.44772 5.75 5 5.30228 5 4.75V3H3.3457ZM6.25 10C6.11193 10 6 10.1119 6 10.25V13H10V10.25C10 10.1119 9.88807 10 9.75 10H6.25ZM6 4.75H10V3H6V4.75Z" fill="currentColor" style={{
      fill: "currentColor",
      fillOpacity: 1
    }} /></svg>;
});
export default IconSave;
