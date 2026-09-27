import * as React from 'react';
import type { IconProps } from './types';
const IconNewspaper = React.forwardRef<SVGSVGElement, IconProps>(function IconNewspaper(props, ref) {
  const idPrefix = React.useId().replace(/[^a-zA-Z0-9_-]/g, '') + '-';
  const {
    size = 16,
    color,
    title,
    ...svgProps
  } = props;
  return <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...svgProps} ref={ref} width={svgProps["width"] ?? size} height={svgProps["height"] ?? size} color={color} aria-labelledby={svgProps["aria-labelledby"] ?? (title ? idPrefix + "title" : undefined)} aria-label={svgProps["aria-label"] ?? title} role={svgProps["role"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? "img" : undefined)} aria-hidden={svgProps["aria-hidden"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? undefined : true)}>{title ? <title id={idPrefix + "title"}>{title}</title> : null}<path d="M12 2C13.1046 2 14 2.89543 14 4V12C14 13.1046 13.1046 14 12 14H3.5C2.67157 14 2 13.3284 2 12.5V6.5C2 6.22386 2.22386 6 2.5 6H4V4C4 2.89543 4.89543 2 6 2H12ZM3 12.5C3 12.7761 3.22386 13 3.5 13C3.77614 13 4 12.7761 4 12.5V7H3V12.5ZM6 3C5.44772 3 5 3.44772 5 4V12.5C5 12.6755 4.96847 12.8435 4.91309 13H12C12.5523 13 13 12.5523 13 12V4C13 3.44772 12.5523 3 12 3H6ZM8.5 10C8.77614 10 9 10.2239 9 10.5C9 10.7761 8.77614 11 8.5 11H6.5C6.22386 11 6 10.7761 6 10.5C6 10.2239 6.22386 10 6.5 10H8.5ZM11.5 8C11.7761 8 12 8.22386 12 8.5C12 8.77614 11.7761 9 11.5 9H6.5C6.22386 9 6 8.77614 6 8.5C6 8.22386 6.22386 8 6.5 8H11.5ZM8.5 4C8.77614 4 9 4.22386 9 4.5V6.5C9 6.77614 8.77614 7 8.5 7H6.5C6.22386 7 6 6.77614 6 6.5V4.5C6 4.22386 6.22386 4 6.5 4H8.5ZM11.5 6C11.7761 6 12 6.22386 12 6.5C12 6.77614 11.7761 7 11.5 7H10.5C10.2239 7 10 6.77614 10 6.5C10 6.22386 10.2239 6 10.5 6H11.5ZM7 6H8V5H7V6ZM11.5 4C11.7761 4 12 4.22386 12 4.5C12 4.77614 11.7761 5 11.5 5H10.5C10.2239 5 10 4.77614 10 4.5C10 4.22386 10.2239 4 10.5 4H11.5Z" fill="currentColor" style={{
      fill: "currentColor",
      fillOpacity: 1
    }} /></svg>;
});
export default IconNewspaper;
