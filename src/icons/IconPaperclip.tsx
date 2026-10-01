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
  return <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...svgProps} ref={ref} width={svgProps["width"] ?? size} height={svgProps["height"] ?? size} color={color} aria-labelledby={svgProps["aria-labelledby"] ?? (title ? idPrefix + "title" : undefined)} aria-label={svgProps["aria-label"] ?? title} role={svgProps["role"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? "img" : undefined)} aria-hidden={svgProps["aria-hidden"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? undefined : true)}>{title ? <title id={idPrefix + "title"}>{title}</title> : null}<path d="M9.5 2C11.433 2 13 3.567 13 5.5V10C13 12.7614 10.7614 15 8 15C5.23858 15 3 12.7614 3 10V9.5C3 9.22386 3.22386 9 3.5 9C3.77614 9 4 9.22386 4 9.5V10C4 12.2091 5.79086 14 8 14C10.2091 14 12 12.2091 12 10V5.5C12 4.11929 10.8807 3 9.5 3C8.11929 3 7 4.11929 7 5.5V10C7 10.5523 7.44772 11 8 11C8.55228 11 9 10.5523 9 10V6.5C9 6.22386 9.22386 6 9.5 6C9.77614 6 10 6.22386 10 6.5V10C10 11.1046 9.10457 12 8 12C6.89543 12 6 11.1046 6 10V5.5C6 3.567 7.567 2 9.5 2Z" fill="currentColor" style={{
      fill: "currentColor",
      fillOpacity: 1
    }} /></svg>;
});
export default IconPaperclip;
