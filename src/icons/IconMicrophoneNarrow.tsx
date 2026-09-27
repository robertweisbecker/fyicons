import * as React from 'react';
import type { IconProps } from './types';
const IconMicrophoneNarrow = React.forwardRef<SVGSVGElement, IconProps>(function IconMicrophoneNarrow(props, ref) {
  const idPrefix = React.useId().replace(/[^a-zA-Z0-9_-]/g, '') + '-';
  const {
    size = 16,
    color,
    title,
    ...svgProps
  } = props;
  return <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...svgProps} ref={ref} width={svgProps["width"] ?? size} height={svgProps["height"] ?? size} color={color} aria-labelledby={svgProps["aria-labelledby"] ?? (title ? idPrefix + "title" : undefined)} aria-label={svgProps["aria-label"] ?? title} role={svgProps["role"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? "img" : undefined)} aria-hidden={svgProps["aria-hidden"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? undefined : true)}>{title ? <title id={idPrefix + "title"}>{title}</title> : null}<path d="M11.5 6C11.7761 6 12 6.22386 12 6.5V8C12 10.0411 10.471 11.7234 8.49609 11.9678C8.49678 11.9785 8.5 11.9891 8.5 12V13H9.5C9.77614 13 10 13.2239 10 13.5C10 13.7761 9.77614 14 9.5 14H6.5C6.22386 14 6 13.7761 6 13.5C6 13.2239 6.22386 13 6.5 13H7.5V12C7.5 11.9891 7.50225 11.9785 7.50293 11.9678C5.52845 11.7229 4 10.0407 4 8V6.5C4 6.22386 4.22386 6 4.5 6C4.77614 6 5 6.22386 5 6.5V8C5 9.65685 6.34315 11 8 11C9.65685 11 11 9.65685 11 8V6.5C11 6.22386 11.2239 6 11.5 6ZM8 2C9.10457 2 10 2.89543 10 4V8C10 9.10457 9.10457 10 8 10C6.89543 10 6 9.10457 6 8V4C6 2.89543 6.89543 2 8 2ZM8 3C7.44772 3 7 3.44772 7 4V8C7 8.55228 7.44772 9 8 9C8.55228 9 9 8.55228 9 8V4C9 3.44772 8.55228 3 8 3Z" fill="currentColor" style={{
      fill: "currentColor",
      fillOpacity: 1
    }} /></svg>;
});
export default IconMicrophoneNarrow;
