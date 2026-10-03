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
  return <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...svgProps} ref={ref} width={svgProps["width"] ?? size} height={svgProps["height"] ?? size} color={color} aria-labelledby={svgProps["aria-labelledby"] ?? (title ? idPrefix + "title" : undefined)} aria-label={svgProps["aria-label"] ?? title} role={svgProps["role"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? "img" : undefined)} aria-hidden={svgProps["aria-hidden"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? undefined : true)}>{title ? <title id={idPrefix + "title"}>{title}</title> : null}<path d="M8.5 1C9.88071 1 11 2.11929 11 3.5V11.5C11 13.433 9.433 15 7.5 15C5.567 15 4 13.433 4 11.5V6.5C4 6.22386 4.22386 6 4.5 6C4.77614 6 5 6.22386 5 6.5V11.5C5 12.8807 6.11929 14 7.5 14C8.88071 14 10 12.8807 10 11.5V3.5C10 2.67157 9.32843 2 8.5 2C7.67157 2 7 2.67157 7 3.5V11.5C7 11.7761 7.22386 12 7.5 12C7.77614 12 8 11.7761 8 11.5V4.5C8 4.22386 8.22386 4 8.5 4C8.77614 4 9 4.22386 9 4.5V11.5C9 12.3284 8.32843 13 7.5 13C6.67157 13 6 12.3284 6 11.5V3.5C6 2.11929 7.11929 1 8.5 1Z" fill="currentColor" style={{
      fill: "currentColor",
      fillOpacity: 1
    }} /></svg>;
});
export default IconPaperclip;
