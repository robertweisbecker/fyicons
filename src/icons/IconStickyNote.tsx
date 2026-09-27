import * as React from 'react';
import type { IconProps } from './types';
const IconStickyNote = React.forwardRef<SVGSVGElement, IconProps>(function IconStickyNote(props, ref) {
  const idPrefix = React.useId().replace(/[^a-zA-Z0-9_-]/g, '') + '-';
  const {
    size = 16,
    color,
    title,
    ...svgProps
  } = props;
  return <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...svgProps} ref={ref} width={svgProps["width"] ?? size} height={svgProps["height"] ?? size} color={color} aria-labelledby={svgProps["aria-labelledby"] ?? (title ? idPrefix + "title" : undefined)} aria-label={svgProps["aria-label"] ?? title} role={svgProps["role"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? "img" : undefined)} aria-hidden={svgProps["aria-hidden"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? undefined : true)}>{title ? <title id={idPrefix + "title"}>{title}</title> : null}<path d="M12.5 2C13.3284 2 14 2.67157 14 3.5V8.08594C14 8.48371 13.8418 8.86522 13.5605 9.14648L9.14648 13.5605C8.86522 13.8418 8.48371 14 8.08594 14H4.5C3.11929 14 2 12.8807 2 11.5V3.5C2 2.67157 2.67157 2 3.5 2H12.5ZM3.5 3C3.22386 3 3 3.22386 3 3.5V11.5C3 12.3284 3.67157 13 4.5 13H8V10C8 8.89543 8.89543 8 10 8H13V3.5C13 3.22386 12.7761 3 12.5 3H3.5ZM10 9C9.44772 9 9 9.44772 9 10V12.293L12.293 9H10Z" fill="currentColor" style={{
      fill: "currentColor",
      fillOpacity: 1
    }} /></svg>;
});
export default IconStickyNote;
