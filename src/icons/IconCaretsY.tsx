import * as React from 'react';
import type { IconProps } from './types';
const IconCaretsY = React.forwardRef<SVGSVGElement, IconProps>(function IconCaretsY(props, ref) {
  const idPrefix = React.useId().replace(/[^a-zA-Z0-9_-]/g, '') + '-';
  const {
    size = 16,
    color,
    title,
    ...svgProps
  } = props;
  return <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...svgProps} ref={ref} width={svgProps["width"] ?? size} height={svgProps["height"] ?? size} color={color} aria-labelledby={svgProps["aria-labelledby"] ?? (title ? idPrefix + "title" : undefined)} aria-label={svgProps["aria-label"] ?? title} role={svgProps["role"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? "img" : undefined)} aria-hidden={svgProps["aria-hidden"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? undefined : true)}>{title ? <title id={idPrefix + "title"}>{title}</title> : null}<path d="M10.2929 10C10.7383 10.0001 10.9614 10.5386 10.6465 10.8535L8.35349 13.1465C8.15824 13.3417 7.8417 13.3417 7.64646 13.1465L5.35349 10.8535C5.03853 10.5386 5.26161 10.0001 5.707 10H10.2929ZM7.64646 2.85353C7.84172 2.65829 8.15823 2.65827 8.35349 2.85353L10.6465 5.1465C10.9613 5.46147 10.7383 5.99991 10.2929 6.00001H5.707C5.2616 5.99999 5.0386 5.46148 5.35349 5.1465L7.64646 2.85353Z" fill="currentColor" style={{
      fill: "currentColor",
      fillOpacity: 1
    }} /></svg>;
});
export default IconCaretsY;
