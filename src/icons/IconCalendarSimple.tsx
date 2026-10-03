import * as React from 'react';
import type { IconProps } from './types';
const IconCalendarSimple = React.forwardRef<SVGSVGElement, IconProps>(function IconCalendarSimple(props, ref) {
  const idPrefix = React.useId().replace(/[^a-zA-Z0-9_-]/g, '') + '-';
  const {
    size = 16,
    color,
    title,
    ...svgProps
  } = props;
  return <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...svgProps} ref={ref} width={svgProps["width"] ?? size} height={svgProps["height"] ?? size} color={color} aria-labelledby={svgProps["aria-labelledby"] ?? (title ? idPrefix + "title" : undefined)} aria-label={svgProps["aria-label"] ?? title} role={svgProps["role"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? "img" : undefined)} aria-hidden={svgProps["aria-hidden"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? undefined : true)}>{title ? <title id={idPrefix + "title"}>{title}</title> : null}<path d="M10.5 1C10.7761 1 11 1.22386 11 1.5V2H11.5C12.8807 2 14 3.11929 14 4.5V11.5C14 12.8807 12.8807 14 11.5 14H4.5C3.11929 14 2 12.8807 2 11.5V4.5C2 3.11929 3.11929 2 4.5 2H5V1.5C5 1.22386 5.22386 1 5.5 1C5.77614 1 6 1.22386 6 1.5V2H10V1.5C10 1.22386 10.2239 1 10.5 1ZM3 6V11.5C3 12.3284 3.67157 13 4.5 13H7.5C10.5376 13 13 10.5376 13 7.5V6H3ZM13 10.9609C12.4813 11.7835 11.7844 12.4812 10.9619 13H11.5C12.3284 13 13 12.3284 13 11.5V10.9609ZM4.5 3C3.67157 3 3 3.67157 3 4.5V5H13V4.5C13 3.67157 12.3284 3 11.5 3H11V3.5C11 3.77614 10.7761 4 10.5 4C10.2239 4 10 3.77614 10 3.5V3H6V3.5C6 3.77614 5.77614 4 5.5 4C5.22386 4 5 3.77614 5 3.5V3H4.5Z" fill="currentColor" style={{
      fill: "currentColor",
      fillOpacity: 1
    }} /></svg>;
});
export default IconCalendarSimple;
