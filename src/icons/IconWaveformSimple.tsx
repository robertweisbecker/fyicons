import * as React from 'react';
import type { IconProps } from './types';
const IconWaveformSimple = React.forwardRef<SVGSVGElement, IconProps>(function IconWaveformSimple(props, ref) {
  const idPrefix = React.useId().replace(/[^a-zA-Z0-9_-]/g, '') + '-';
  const {
    size = 16,
    color,
    title,
    ...svgProps
  } = props;
  return <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...svgProps} ref={ref} width={svgProps["width"] ?? size} height={svgProps["height"] ?? size} color={color} aria-labelledby={svgProps["aria-labelledby"] ?? (title ? idPrefix + "title" : undefined)} aria-label={svgProps["aria-label"] ?? title} role={svgProps["role"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? "img" : undefined)} aria-hidden={svgProps["aria-hidden"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? undefined : true)}>{title ? <title id={idPrefix + "title"}>{title}</title> : null}<path d="M6.5 1C6.77614 1 7 1.22386 7 1.5V14.5C7 14.7761 6.77614 15 6.5 15C6.22386 15 6 14.7761 6 14.5V1.5C6 1.22386 6.22386 1 6.5 1ZM3.5 3C3.77614 3 4 3.22386 4 3.5V12.5C4 12.7761 3.77614 13 3.5 13C3.22386 13 3 12.7761 3 12.5V3.5C3 3.22386 3.22386 3 3.5 3ZM9.5 4C9.77614 4 10 4.22386 10 4.5V11.5C10 11.7761 9.77614 12 9.5 12C9.22386 12 9 11.7761 9 11.5V4.5C9 4.22386 9.22386 4 9.5 4ZM12.5 6C12.7761 6 13 6.22386 13 6.5V9.5C13 9.77614 12.7761 10 12.5 10C12.2239 10 12 9.77614 12 9.5V6.5C12 6.22386 12.2239 6 12.5 6Z" fill="currentColor" style={{
      fill: "currentColor",
      fillOpacity: 1
    }} /></svg>;
});
export default IconWaveformSimple;
