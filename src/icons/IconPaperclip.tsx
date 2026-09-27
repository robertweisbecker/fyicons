import * as React from 'react';
import type { IconProps } from './types';
const IconPaperclip = React.forwardRef<SVGSVGElement, IconProps>(function IconPaperclip(props, ref) {
  const idPrefix = React.useId().replace(/[^a-zA-Z0-9_-]/g, '') + '-';
  const {
    size = 16,
    color,
    title,
    ...svgProps
  } = props;
  return <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...svgProps} ref={ref} width={svgProps["width"] ?? size} height={svgProps["height"] ?? size} color={color} aria-labelledby={svgProps["aria-labelledby"] ?? (title ? idPrefix + "title" : undefined)} aria-label={svgProps["aria-label"] ?? title} role={svgProps["role"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? "img" : undefined)} aria-hidden={svgProps["aria-hidden"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? undefined : true)}>{title ? <title id={idPrefix + "title"}>{title}</title> : null}<path d="M9.5 1C11.433 1 13 2.567 13 4.5V10C13 12.7614 10.7614 15 8 15C5.23858 15 3 12.7614 3 10V6.5C3 6.22386 3.22386 6 3.5 6C3.77614 6 4 6.22386 4 6.5V10C4 12.2091 5.79086 14 8 14C10.2091 14 12 12.2091 12 10V4.5C12 3.11929 10.8807 2 9.5 2C8.11929 2 7 3.11929 7 4.5V10C7 10.5523 7.44772 11 8 11C8.55228 11 9 10.5523 9 10V4.5C9 4.22386 9.22386 4 9.5 4C9.77614 4 10 4.22386 10 4.5V10C10 11.1046 9.10457 12 8 12C6.89543 12 6 11.1046 6 10V4.5C6 2.567 7.567 1 9.5 1Z" fill="currentColor" style={{
      fill: "currentColor",
      fillOpacity: 1
    }} /></svg>;
});
export default IconPaperclip;
