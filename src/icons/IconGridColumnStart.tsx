import * as React from 'react';
import type { IconProps } from './types';
const IconGridColumnStart = React.forwardRef<SVGSVGElement, IconProps>(function IconGridColumnStart(props, ref) {
  const idPrefix = React.useId().replace(/[^a-zA-Z0-9_-]/g, '') + '-';
  const {
    size = 16,
    color,
    title,
    ...svgProps
  } = props;
  return <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...svgProps} ref={ref} width={svgProps["width"] ?? size} height={svgProps["height"] ?? size} color={color} aria-labelledby={svgProps["aria-labelledby"] ?? (title ? idPrefix + "title" : undefined)} aria-label={svgProps["aria-label"] ?? title} role={svgProps["role"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? "img" : undefined)} aria-hidden={svgProps["aria-hidden"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? undefined : true)}>{title ? <title id={idPrefix + "title"}>{title}</title> : null}<path d="M5.5 2C6.32843 2 7 2.67157 7 3.5V12.5C7 13.3284 6.32843 14 5.5 14H3.5C2.67157 14 2 13.3284 2 12.5V3.5C2 2.67157 2.67157 2 3.5 2H5.5ZM12.5 9C13.3284 9 14 9.67157 14 10.5V12.5C14 13.3284 13.3284 14 12.5 14H10.5C9.67157 14 9 13.3284 9 12.5V10.5C9 9.67157 9.67157 9 10.5 9H12.5ZM3.5 3C3.22386 3 3 3.22386 3 3.5V12.5C3 12.7761 3.22386 13 3.5 13H5.5C5.77614 13 6 12.7761 6 12.5V3.5C6 3.22386 5.77614 3 5.5 3H3.5ZM10.5 10C10.2239 10 10 10.2239 10 10.5V12.5C10 12.7761 10.2239 13 10.5 13H12.5C12.7761 13 13 12.7761 13 12.5V10.5C13 10.2239 12.7761 10 12.5 10H10.5ZM12.5 2C13.3284 2 14 2.67157 14 3.5V5.5C14 6.32843 13.3284 7 12.5 7H10.5C9.67157 7 9 6.32843 9 5.5V3.5C9 2.67157 9.67157 2 10.5 2H12.5ZM10.5 3C10.2239 3 10 3.22386 10 3.5V5.5C10 5.77614 10.2239 6 10.5 6H12.5C12.7761 6 13 5.77614 13 5.5V3.5C13 3.22386 12.7761 3 12.5 3H10.5Z" fill="currentColor" style={{
      fill: "currentColor",
      fillOpacity: 1
    }} /></svg>;
});
export default IconGridColumnStart;
