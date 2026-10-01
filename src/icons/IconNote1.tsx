import * as React from 'react';
import type { IconProps } from './types';
const IconNote1 = React.forwardRef<SVGSVGElement, IconProps>(function IconNote1(props, ref) {
  const idPrefix = React.useId().replace(/[^a-zA-Z0-9_-]/g, '') + '-';
  const {
    size = 16,
    color,
    title,
    ...svgProps
  } = props;
  return <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...svgProps} ref={ref} width={svgProps["width"] ?? size} height={svgProps["height"] ?? size} color={color} aria-labelledby={svgProps["aria-labelledby"] ?? (title ? idPrefix + "title" : undefined)} aria-label={svgProps["aria-label"] ?? title} role={svgProps["role"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? "img" : undefined)} aria-hidden={svgProps["aria-hidden"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? undefined : true)}>{title ? <title id={idPrefix + "title"}>{title}</title> : null}<path d="M9.5 1C9.77614 1 10 1.22386 10 1.5V2H10.5C11.8807 2 13 3.11929 13 4.5V12.5C13 13.8807 11.8807 15 10.5 15H5.5C4.11929 15 3 13.8807 3 12.5V4.5C3 3.11929 4.11929 2 5.5 2H6V1.5C6 1.22386 6.22386 1 6.5 1C6.77614 1 7 1.22386 7 1.5V2H9V1.5C9 1.22386 9.22386 1 9.5 1ZM5.5 3C4.67157 3 4 3.67157 4 4.5V12.5C4 13.3284 4.67157 14 5.5 14H10.5C11.3284 14 12 13.3284 12 12.5V4.5C12 3.67157 11.3284 3 10.5 3H10V3.5C10 3.77614 9.77614 4 9.5 4C9.22386 4 9 3.77614 9 3.5V3H7V3.5C7 3.77614 6.77614 4 6.5 4C6.22386 4 6 3.77614 6 3.5V3H5.5ZM8.5 9C8.77614 9 9 9.22386 9 9.5C9 9.77614 8.77614 10 8.5 10H5.5C5.22386 10 5 9.77614 5 9.5C5 9.22386 5.22386 9 5.5 9H8.5ZM10.5 6C10.7761 6 11 6.22386 11 6.5C11 6.77614 10.7761 7 10.5 7H5.5C5.22386 7 5 6.77614 5 6.5C5 6.22386 5.22386 6 5.5 6H10.5Z" fill="currentColor" style={{
      fill: "currentColor",
      fillOpacity: 1
    }} /></svg>;
});
export default IconNote1;
