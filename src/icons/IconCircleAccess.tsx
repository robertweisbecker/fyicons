import * as React from 'react';
import type { IconProps } from './types';
const IconCircleAccess = React.forwardRef<SVGSVGElement, IconProps>(function IconCircleAccess(props, ref) {
  const idPrefix = React.useId().replace(/[^a-zA-Z0-9_-]/g, '') + '-';
  const {
    size = 16,
    color,
    title,
    ...svgProps
  } = props;
  return <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...svgProps} ref={ref} width={svgProps["width"] ?? size} height={svgProps["height"] ?? size} color={color} aria-labelledby={svgProps["aria-labelledby"] ?? (title ? idPrefix + "title" : undefined)} aria-label={svgProps["aria-label"] ?? title} role={svgProps["role"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? "img" : undefined)} aria-hidden={svgProps["aria-hidden"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? undefined : true)}>{title ? <title id={idPrefix + "title"}>{title}</title> : null}<path d="M8 1C11.866 1 15 4.13401 15 8C15 11.866 11.866 15 8 15C4.13409 14.9999 1 11.8659 1 8C1 4.13407 4.13409 1.0001 8 1ZM8 2C4.68637 2.0001 2 4.68635 2 8C2 11.3136 4.68637 13.9999 8 14C11.3137 14 14 11.3137 14 8C14 4.68629 11.3137 2 8 2ZM10.5 7C10.7761 7 10.9999 7.22395 11 7.5C11 7.77614 10.7761 8 10.5 8H9.5C9.22386 8 9 8.22386 9 8.5V8.55566C9 9.09896 9.12619 9.63514 9.36914 10.1211L9.94727 11.2764C10.0706 11.5233 9.9705 11.8238 9.72363 11.9473C9.47671 12.0707 9.17627 11.9705 9.05273 11.7236L8.47559 10.5684C8.41952 10.4562 8.36914 10.3417 8.32324 10.2256C8.27045 10.092 8.14362 10 8 10C7.85639 10 7.72955 10.092 7.67676 10.2256C7.63086 10.3417 7.58049 10.4562 7.52441 10.5684L6.94727 11.7236C6.82376 11.9706 6.52335 12.0708 6.27637 11.9473C6.02939 11.8238 5.92924 11.5233 6.05273 11.2764L6.63086 10.1211C6.87381 9.63514 7 9.09897 7 8.55566V8.5C7 8.22386 6.77614 8 6.5 8H5.5C5.22386 8 5 7.77614 5 7.5C5.0001 7.22395 5.22392 7 5.5 7H10.5ZM8.00098 4C8.55326 4 9.00098 4.44772 9.00098 5C9.00098 5.55228 8.55326 6 8.00098 6C7.44869 6 7.00098 5.55228 7.00098 5C7.00098 4.44772 7.44869 4 8.00098 4Z" fill="currentColor" style={{
      fill: "currentColor",
      fillOpacity: 1
    }} /></svg>;
});
export default IconCircleAccess;
