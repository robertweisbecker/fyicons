import * as React from 'react';
import type { IconProps } from './types';
const IconNotebook = React.forwardRef<SVGSVGElement, IconProps>(function IconNotebook(props, ref) {
  const idPrefix = React.useId().replace(/[^a-zA-Z0-9_-]/g, '') + '-';
  const {
    size = 16,
    color,
    title,
    ...svgProps
  } = props;
  return <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...svgProps} ref={ref} width={svgProps["width"] ?? size} height={svgProps["height"] ?? size} color={color} aria-labelledby={svgProps["aria-labelledby"] ?? (title ? idPrefix + "title" : undefined)} aria-label={svgProps["aria-label"] ?? title} role={svgProps["role"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? "img" : undefined)} aria-hidden={svgProps["aria-hidden"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? undefined : true)}>{title ? <title id={idPrefix + "title"}>{title}</title> : null}<path d="M12 2C13.1046 2 14 2.89543 14 4V12C14 13.1046 13.1046 14 12 14H5C3.89543 14 3 13.1046 3 12V11H2.75C2.47386 11 2.25 10.7761 2.25 10.5C2.25 10.2239 2.47386 10 2.75 10H3V8.5H2.75C2.47386 8.5 2.25 8.27614 2.25 8C2.25 7.72386 2.47386 7.5 2.75 7.5H3V6H2.75C2.47386 6 2.25 5.77614 2.25 5.5C2.25 5.22386 2.47386 5 2.75 5H3V4C3 2.89543 3.89543 2 5 2H12ZM5 3C4.44772 3 4 3.44772 4 4V5H4.25C4.52614 5 4.75 5.22386 4.75 5.5C4.75 5.77614 4.52614 6 4.25 6H4V7.5H4.25C4.52614 7.5 4.75 7.72386 4.75 8C4.75 8.27614 4.52614 8.5 4.25 8.5H4V10H4.25C4.52614 10 4.75 10.2239 4.75 10.5C4.75 10.7761 4.52614 11 4.25 11H4V12C4 12.5523 4.44772 13 5 13H12C12.5523 13 13 12.5523 13 12V4C13 3.44772 12.5523 3 12 3H5ZM9.5 8C9.77614 8 10 8.22386 10 8.5C10 8.77614 9.77614 9 9.5 9H6.5C6.22386 9 6 8.77614 6 8.5C6 8.22386 6.22386 8 6.5 8H9.5ZM10.5 6C10.7761 6 11 6.22386 11 6.5C11 6.77614 10.7761 7 10.5 7H6.5C6.22386 7 6 6.77614 6 6.5C6 6.22386 6.22386 6 6.5 6H10.5Z" fill="currentColor" style={{
      fill: "currentColor",
      fillOpacity: 1
    }} /></svg>;
});
export default IconNotebook;
