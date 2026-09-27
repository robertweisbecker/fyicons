import * as React from 'react';
import type { IconProps } from './types';
const IconWaveform = React.forwardRef<SVGSVGElement, IconProps>(function IconWaveform(props, ref) {
  const idPrefix = React.useId().replace(/[^a-zA-Z0-9_-]/g, '') + '-';
  const {
    size = 16,
    color,
    title,
    ...svgProps
  } = props;
  return <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...svgProps} ref={ref} width={svgProps["width"] ?? size} height={svgProps["height"] ?? size} color={color} aria-labelledby={svgProps["aria-labelledby"] ?? (title ? idPrefix + "title" : undefined)} aria-label={svgProps["aria-label"] ?? title} role={svgProps["role"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? "img" : undefined)} aria-hidden={svgProps["aria-hidden"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? undefined : true)}>{title ? <title id={idPrefix + "title"}>{title}</title> : null}<path d="M5.5 3C5.77614 3 6 3.22386 6 3.5V12.5C6 12.7761 5.77614 13 5.5 13C5.22386 13 5 12.7761 5 12.5V3.5C5 3.22386 5.22386 3 5.5 3ZM11.5 4C11.7761 4 12 4.22386 12 4.5V11.5C12 11.7761 11.7761 12 11.5 12C11.2239 12 11 11.7761 11 11.5V4.5C11 4.22386 11.2239 4 11.5 4ZM3.5 5C3.77614 5 4 5.22386 4 5.5V10.5C4 10.7761 3.77614 11 3.5 11C3.22386 11 3 10.7761 3 10.5V5.5C3 5.22386 3.22386 5 3.5 5ZM7.5 5C7.77614 5 8 5.22386 8 5.5V10.5C8 10.7761 7.77614 11 7.5 11C7.22386 11 7 10.7761 7 10.5V5.5C7 5.22386 7.22386 5 7.5 5ZM9.5 6C9.77614 6 10 6.22386 10 6.5V9.5C10 9.77614 9.77614 10 9.5 10C9.22386 10 9 9.77614 9 9.5V6.5C9 6.22386 9.22386 6 9.5 6ZM13.5 6C13.7761 6 14 6.22386 14 6.5V9.5C14 9.77614 13.7761 10 13.5 10C13.2239 10 13 9.77614 13 9.5V6.5C13 6.22386 13.2239 6 13.5 6Z" fill="currentColor" style={{
      fill: "currentColor",
      fillOpacity: 1
    }} /></svg>;
});
export default IconWaveform;
