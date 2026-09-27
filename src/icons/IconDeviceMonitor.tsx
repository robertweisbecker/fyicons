import * as React from 'react';
import type { IconProps } from './types';
const IconDeviceMonitor = React.forwardRef<SVGSVGElement, IconProps>(function IconDeviceMonitor(props, ref) {
  const idPrefix = React.useId().replace(/[^a-zA-Z0-9_-]/g, '') + '-';
  const {
    size = 16,
    color,
    title,
    ...svgProps
  } = props;
  return <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...svgProps} ref={ref} width={svgProps["width"] ?? size} height={svgProps["height"] ?? size} color={color} aria-labelledby={svgProps["aria-labelledby"] ?? (title ? idPrefix + "title" : undefined)} aria-label={svgProps["aria-label"] ?? title} role={svgProps["role"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? "img" : undefined)} aria-hidden={svgProps["aria-hidden"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? undefined : true)}>{title ? <title id={idPrefix + "title"}>{title}</title> : null}<path d="M13.5 2C14.3284 2 15 2.67157 15 3.5V9.5C15 10.3284 14.3284 11 13.5 11H10V13H10.5C10.7761 13 11 13.2239 11 13.5C11 13.7761 10.7761 14 10.5 14H5.5C5.22386 14 5 13.7761 5 13.5C5 13.2239 5.22386 13 5.5 13H6V11H2.5C1.67157 11 1 10.3284 1 9.5V3.5C1 2.67157 1.67157 2 2.5 2H13.5ZM7 13H9V11H7V13ZM14 8.7793C13.8449 8.83998 13.6766 8.875 13.5 8.875H2.5C2.32335 8.875 2.15515 8.83998 2 8.7793V9.5C2 9.77614 2.22386 10 2.5 10H13.5C13.7761 10 14 9.77614 14 9.5V8.7793ZM2.5 3C2.22386 3 2 3.22386 2 3.5V7.87207C2.11394 8.02493 2.29469 8.125 2.5 8.125H13.5C13.7053 8.125 13.8861 8.02493 14 7.87207V3.5C14 3.22386 13.7761 3 13.5 3H2.5Z" fill="currentColor" style={{
      fill: "currentColor",
      fillOpacity: 1
    }} /></svg>;
});
export default IconDeviceMonitor;
