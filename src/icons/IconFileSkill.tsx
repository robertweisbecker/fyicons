import * as React from 'react';
import type { IconProps } from './types';
const IconFileSkill = React.forwardRef<SVGSVGElement, IconProps>(function IconFileSkill(props, ref) {
  const idPrefix = React.useId().replace(/[^a-zA-Z0-9_-]/g, '') + '-';
  const {
    size = 16,
    color,
    title,
    ...svgProps
  } = props;
  return <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...svgProps} ref={ref} width={svgProps["width"] ?? size} height={svgProps["height"] ?? size} color={color} aria-labelledby={svgProps["aria-labelledby"] ?? (title ? idPrefix + "title" : undefined)} aria-label={svgProps["aria-label"] ?? title} role={svgProps["role"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? "img" : undefined)} aria-hidden={svgProps["aria-hidden"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? undefined : true)}>{title ? <title id={idPrefix + "title"}>{title}</title> : null}<path d="M9.5 2C10.8807 2 12 3.11929 12 4.5V7H13.5C13.7761 7 14 7.22386 14 7.5V13.5C14 14.3284 13.3284 15 12.5 15H4.5C3.11929 15 2 13.8807 2 12.5V4.5C2 3.11929 3.11929 2 4.5 2H9.5ZM4.5 3C3.67157 3 3 3.67157 3 4.5V12.5C3 13.3284 3.67157 14 4.5 14H11.0869C11.0315 13.8435 11 13.6755 11 13.5V4.5C11 3.67157 10.3284 3 9.5 3H4.5ZM12 13.5C12 13.7761 12.2239 14 12.5 14C12.7761 14 13 13.7761 13 13.5V8H12V13.5ZM7.5 9C7.77614 9 8 9.22386 8 9.5C8 9.77614 7.77614 10 7.5 10H4.5C4.22386 10 4 9.77614 4 9.5C4 9.22386 4.22386 9 4.5 9H7.5ZM9.55176 9C9.8279 9 10.0518 9.22386 10.0518 9.5C10.0518 9.77614 9.8279 10 9.55176 10C9.27562 10 9.05176 9.77614 9.05176 9.5C9.05176 9.22386 9.27562 9 9.55176 9ZM5.5 7C5.77614 7 6 7.22386 6 7.5C6 7.77614 5.77614 8 5.5 8H4.5C4.22386 8 4 7.77614 4 7.5C4 7.22386 4.22386 7 4.5 7H5.5ZM9.5 7C9.77614 7 10 7.22386 10 7.5C10 7.77614 9.77614 8 9.5 8H7.5C7.22386 8 7 7.77614 7 7.5C7 7.22386 7.22386 7 7.5 7H9.5ZM4.5 5C4.77614 5 5 5.22386 5 5.5C5 5.77614 4.77614 6 4.5 6C4.22386 6 4 5.77614 4 5.5C4 5.22386 4.22386 5 4.5 5ZM9.5 5C9.77614 5 10 5.22386 10 5.5C10 5.77614 9.77614 6 9.5 6H6.5C6.22386 6 6 5.77614 6 5.5C6 5.22386 6.22386 5 6.5 5H9.5Z" fill="currentColor" style={{
      fill: "currentColor",
      fillOpacity: 1
    }} /></svg>;
});
export default IconFileSkill;
