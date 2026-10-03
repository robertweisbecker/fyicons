import * as React from 'react';
import type { IconProps } from './types';
const IconMenuAlt = React.forwardRef<SVGSVGElement, IconProps>(function IconMenuAlt(props, ref) {
  const idPrefix = React.useId().replace(/[^a-zA-Z0-9_-]/g, '') + '-';
  const {
    size = 16,
    color,
    title,
    ...svgProps
  } = props;
  return <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...svgProps} ref={ref} width={svgProps["width"] ?? size} height={svgProps["height"] ?? size} color={color} aria-labelledby={svgProps["aria-labelledby"] ?? (title ? idPrefix + "title" : undefined)} aria-label={svgProps["aria-label"] ?? title} role={svgProps["role"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? "img" : undefined)} aria-hidden={svgProps["aria-hidden"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? undefined : true)}>{title ? <title id={idPrefix + "title"}>{title}</title> : null}<path d="M8.5 12C8.77614 12 9 12.2239 9 12.5C9 12.7761 8.77614 13 8.5 13H3.5C3.22386 13 3 12.7761 3 12.5C3 12.2239 3.22386 12 3.5 12H8.5ZM12.5 8C12.7761 8 13 8.22386 13 8.5C13 8.77614 12.7761 9 12.5 9H3.5C3.22386 9 3 8.77614 3 8.5C3 8.22386 3.22386 8 3.5 8H12.5ZM10.5 4C10.7761 4 11 4.22386 11 4.5C11 4.77614 10.7761 5 10.5 5H3.5C3.22386 5 3 4.77614 3 4.5C3 4.22386 3.22386 4 3.5 4H10.5Z" fill="currentColor" style={{
      fill: "currentColor",
      fillOpacity: 1
    }} /></svg>;
});
export default IconMenuAlt;
