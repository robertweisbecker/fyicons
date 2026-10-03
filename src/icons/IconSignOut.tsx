import * as React from 'react';
import type { IconProps } from './types';
const IconSignOut = React.forwardRef<SVGSVGElement, IconProps>(function IconSignOut(props, ref) {
  const idPrefix = React.useId().replace(/[^a-zA-Z0-9_-]/g, '') + '-';
  const {
    size = 16,
    color,
    title,
    ...svgProps
  } = props;
  return <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...svgProps} ref={ref} width={svgProps["width"] ?? size} height={svgProps["height"] ?? size} color={color} aria-labelledby={svgProps["aria-labelledby"] ?? (title ? idPrefix + "title" : undefined)} aria-label={svgProps["aria-label"] ?? title} role={svgProps["role"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? "img" : undefined)} aria-hidden={svgProps["aria-hidden"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? undefined : true)}>{title ? <title id={idPrefix + "title"}>{title}</title> : null}<path d="M4.85352 5.14669C4.65825 4.95143 4.34175 4.95143 4.14648 5.14669L1.64648 7.64669C1.47575 7.81756 1.4539 8.08157 1.58203 8.2756L1.64648 8.35372L4.14648 10.8537C4.34171 11.0488 4.65829 11.0488 4.85352 10.8537C5.04873 10.6585 5.04864 10.342 4.85352 10.1467L3.20703 8.50021H8.5C8.77605 8.50021 8.99985 8.27622 9 8.00021C9 7.72406 8.77614 7.50021 8.5 7.50021H3.20703L4.85352 5.85372C5.04873 5.65851 5.04864 5.34196 4.85352 5.14669Z" fill="currentColor" style={{
      fill: "currentColor",
      fillOpacity: 1
    }} /><path d="M6.5 3.5V3C6.5 2.17157 7.17157 1.5 8 1.5H11C11.8284 1.5 12.5 2.17157 12.5 3V13C12.5 13.8284 11.8284 14.5 11 14.5H8C7.17157 14.5 6.5 13.8284 6.5 13V12.5" stroke="currentColor" style={{
      stroke: "currentColor",
      strokeOpacity: 1
    }} strokeLinecap="round" strokeLinejoin="round" /></svg>;
});
export default IconSignOut;
