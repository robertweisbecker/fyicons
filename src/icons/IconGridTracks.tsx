import * as React from 'react';
import type { IconProps } from './types';
const IconGridTracks = React.forwardRef<SVGSVGElement, IconProps>(function IconGridTracks(props, ref) {
  const idPrefix = React.useId().replace(/[^a-zA-Z0-9_-]/g, '') + '-';
  const {
    size = 16,
    color,
    title,
    ...svgProps
  } = props;
  return <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...svgProps} ref={ref} width={svgProps["width"] ?? size} height={svgProps["height"] ?? size} color={color} aria-labelledby={svgProps["aria-labelledby"] ?? (title ? idPrefix + "title" : undefined)} aria-label={svgProps["aria-label"] ?? title} role={svgProps["role"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? "img" : undefined)} aria-hidden={svgProps["aria-hidden"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? undefined : true)}>{title ? <title id={idPrefix + "title"}>{title}</title> : null}<path d="M5 14.5C5 14.7761 4.77614 15 4.5 15C4.22386 15 4 14.7761 4 14.5V13H5V14.5ZM8.5 14.5C8.5 14.7761 8.27614 15 8 15C7.72386 15 7.5 14.7761 7.5 14.5V13H8.5V14.5ZM12 14.5C12 14.7761 11.7761 15 11.5 15C11.2239 15 11 14.7761 11 14.5V13H12V14.5ZM3 12H1.5C1.22386 12 1 11.7761 1 11.5C1 11.2239 1.22386 11 1.5 11H3V12ZM14.5 11C14.7761 11 15 11.2239 15 11.5C15 11.7761 14.7761 12 14.5 12H13V11H14.5ZM12 12H4V4H12V12ZM5 11H7.5V8.5H5V11ZM8.5 11H11V8.5H8.5V11ZM3 8.5H1.5C1.22386 8.5 1 8.27614 1 8C1 7.72386 1.22386 7.5 1.5 7.5H3V8.5ZM14.5 7.5C14.7761 7.5 15 7.72386 15 8C15 8.27614 14.7761 8.5 14.5 8.5H13V7.5H14.5ZM5 7.5H7.5V5H5V7.5ZM8.5 7.5H11V5H8.5V7.5ZM3 5H1.5C1.22386 5 1 4.77614 1 4.5C1 4.22386 1.22386 4 1.5 4H3V5ZM14.5 4C14.7761 4 15 4.22386 15 4.5C15 4.77614 14.7761 5 14.5 5H13V4H14.5ZM4.5 1C4.77614 1 5 1.22386 5 1.5V3H4V1.5C4 1.22386 4.22386 1 4.5 1ZM8 1C8.27614 1 8.5 1.22386 8.5 1.5V3H7.5V1.5C7.5 1.22386 7.72386 1 8 1ZM11.5 1C11.7761 1 12 1.22386 12 1.5V3H11V1.5C11 1.22386 11.2239 1 11.5 1Z" fill="currentColor" style={{
      fill: "currentColor",
      fillOpacity: 1
    }} /></svg>;
});
export default IconGridTracks;
