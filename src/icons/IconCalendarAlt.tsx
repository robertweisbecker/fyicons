import * as React from 'react';
import type { IconProps } from './types';
const IconCalendarAlt = React.forwardRef<SVGSVGElement, IconProps>(function IconCalendarAlt(props, ref) {
  const idPrefix = React.useId().replace(/[^a-zA-Z0-9_-]/g, '') + '-';
  const {
    size = 16,
    color,
    title,
    ...svgProps
  } = props;
  return <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...svgProps} ref={ref} width={svgProps["width"] ?? size} height={svgProps["height"] ?? size} color={color} aria-labelledby={svgProps["aria-labelledby"] ?? (title ? idPrefix + "title" : undefined)} aria-label={svgProps["aria-label"] ?? title} role={svgProps["role"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? "img" : undefined)} aria-hidden={svgProps["aria-hidden"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? undefined : true)}>{title ? <title id={idPrefix + "title"}>{title}</title> : null}<path d="M5 4.5C5 4.77614 5.22386 5 5.5 5C5.77614 5 6 4.77614 6 4.5V3H10V4.5C10 4.77614 10.2239 5 10.5 5C10.7761 5 11 4.77614 11 4.5V3H12C13.1046 3 14 3.89543 14 5V11.5C14 12.8807 12.8807 14 11.5 14H4.5C3.11929 14 2 12.8807 2 11.5V5C2 3.89543 2.89543 3 4 3H5V4.5ZM3.5 6C3.22386 6 3 6.22386 3 6.5V11.5C3 12.3284 3.67157 13 4.5 13H11.5C12.3284 13 13 12.3284 13 11.5V6.5C13 6.22386 12.7761 6 12.5 6H3.5ZM5.5 1.5C5.77614 1.5 6 1.72386 6 2V3H5V2C5 1.72386 5.22386 1.5 5.5 1.5ZM10.5 1.5C10.7761 1.5 11 1.72386 11 2V3H10V2C10 1.72386 10.2239 1.5 10.5 1.5Z" fill="currentColor" style={{
      fill: "currentColor",
      fillOpacity: 1
    }} /></svg>;
});
export default IconCalendarAlt;
