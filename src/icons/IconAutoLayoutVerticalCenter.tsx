import * as React from 'react';
import type { IconProps } from './types';
const IconAutoLayoutVerticalCenter = React.forwardRef<SVGSVGElement, IconProps>(function IconAutoLayoutVerticalCenter(props, ref) {
  const idPrefix = React.useId().replace(/[^a-zA-Z0-9_-]/g, '') + '-';
  const {
    size = 16,
    color,
    title,
    ...svgProps
  } = props;
  return <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...svgProps} ref={ref} width={svgProps["width"] ?? size} height={svgProps["height"] ?? size} color={color} aria-labelledby={svgProps["aria-labelledby"] ?? (title ? idPrefix + "title" : undefined)} aria-label={svgProps["aria-label"] ?? title} role={svgProps["role"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? "img" : undefined)} aria-hidden={svgProps["aria-hidden"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? undefined : true)}>{title ? <title id={idPrefix + "title"}>{title}</title> : null}<path d="M4.5 3C4.22386 3 4 3.22386 4 3.5L4 4.5C4 4.77614 4.22386 5 4.5 5L11.5 5C11.7761 5 12 4.77614 12 4.5V3.5C12 3.22386 11.7761 3 11.5 3L4.5 3Z" fill="currentColor" style={{
      fill: "currentColor",
      fillOpacity: 1
    }} /><path d="M3.5 7C3.22386 7 3 7.22386 3 7.5L3 8.5C3 8.77614 3.22386 9 3.5 9L12.5 9C12.7761 9 13 8.77614 13 8.5V7.5C13 7.22386 12.7761 7 12.5 7L3.5 7Z" fill="currentColor" style={{
      fill: "currentColor",
      fillOpacity: 1
    }} /><path d="M5.5 11C5.22386 11 5 11.2239 5 11.5L5 12.5C5 12.7761 5.22386 13 5.5 13L10.5 13C10.7761 13 11 12.7761 11 12.5V11.5C11 11.2239 10.7761 11 10.5 11L5.5 11Z" fill="currentColor" style={{
      fill: "currentColor",
      fillOpacity: 1
    }} /></svg>;
});
export default IconAutoLayoutVerticalCenter;
