import * as React from 'react';
import type { IconProps } from './types';
const IconStackV = React.forwardRef<SVGSVGElement, IconProps>(function IconStackV(props, ref) {
  const idPrefix = React.useId().replace(/[^a-zA-Z0-9_-]/g, '') + '-';
  const {
    size = 16,
    color,
    title,
    ...svgProps
  } = props;
  return <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...svgProps} ref={ref} width={svgProps["width"] ?? size} height={svgProps["height"] ?? size} color={color} aria-labelledby={svgProps["aria-labelledby"] ?? (title ? idPrefix + "title" : undefined)} aria-label={svgProps["aria-label"] ?? title} role={svgProps["role"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? "img" : undefined)} aria-hidden={svgProps["aria-hidden"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? undefined : true)}>{title ? <title id={idPrefix + "title"}>{title}</title> : null}<path d="M13 2C13.5523 2 14 2.44772 14 3V9C14 9.51768 13.6067 9.94379 13.1025 9.99512L13 10V11C13 11.5177 12.6067 11.9438 12.1025 11.9951L12 12V13C12 13.5523 11.5523 14 11 14H5C4.48232 14 4.05621 13.6067 4.00488 13.1025L4 13V12C3.48232 12 3.05621 11.6067 3.00488 11.1025L3 11V10L2.89746 9.99512C2.39333 9.94379 2 9.51768 2 9V3C2 2.44772 2.44772 2 3 2H13ZM5 13H11V12H5V13ZM4 11H12V10H4V11ZM3 9H13V3H3V9Z" fill="currentColor" style={{
      fill: "currentColor",
      fillOpacity: 1
    }} /></svg>;
});
export default IconStackV;
