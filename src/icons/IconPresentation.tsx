import * as React from 'react';
import type { IconProps } from './types';
const IconPresentation = React.forwardRef<SVGSVGElement, IconProps>(function IconPresentation(props, ref) {
  const idPrefix = React.useId().replace(/[^a-zA-Z0-9_-]/g, '') + '-';
  const {
    size = 16,
    color,
    title,
    ...svgProps
  } = props;
  return <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...svgProps} ref={ref} width={svgProps["width"] ?? size} height={svgProps["height"] ?? size} color={color} aria-labelledby={svgProps["aria-labelledby"] ?? (title ? idPrefix + "title" : undefined)} aria-label={svgProps["aria-label"] ?? title} role={svgProps["role"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? "img" : undefined)} aria-hidden={svgProps["aria-hidden"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? undefined : true)}>{title ? <title id={idPrefix + "title"}>{title}</title> : null}<path d="M8 2C8.27614 2 8.5 2.22386 8.5 2.5V3H13.5C13.7761 3 14 3.22386 14 3.5V10C14 11.1046 13.1046 12 12 12H9.99902L10.8994 13.2002C11.0647 13.4211 11.0196 13.7348 10.7988 13.9004C10.578 14.0656 10.2642 14.0204 10.0986 13.7998L8.74902 12H7.25L5.90039 13.7998C5.73481 14.0205 5.42106 14.0656 5.2002 13.9004C4.97968 13.7347 4.93434 13.421 5.09961 13.2002L6 12H4C2.89543 12 2 11.1046 2 10V3.5C2 3.22386 2.22386 3 2.5 3H7.5V2.5C7.5 2.22386 7.72386 2 8 2ZM3 10C3 10.5523 3.44772 11 4 11H12C12.5523 11 13 10.5523 13 10V4H3V10Z" fill="currentColor" style={{
      fill: "currentColor",
      fillOpacity: 1
    }} /><path d="M14.5 3.5H1.5" stroke="currentColor" style={{
      stroke: "currentColor",
      strokeOpacity: 1
    }} strokeLinecap="round" /></svg>;
});
export default IconPresentation;
