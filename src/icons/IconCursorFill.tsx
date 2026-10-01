import * as React from 'react';
import type { IconProps } from './types';
const IconCursorFill = React.forwardRef<SVGSVGElement, IconProps>(function IconCursorFill(props, ref) {
  const idPrefix = React.useId().replace(/[^a-zA-Z0-9_-]/g, '') + '-';
  const {
    size = 16,
    color,
    title,
    ...svgProps
  } = props;
  return <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...svgProps} ref={ref} width={svgProps["width"] ?? size} height={svgProps["height"] ?? size} color={color} aria-labelledby={svgProps["aria-labelledby"] ?? (title ? idPrefix + "title" : undefined)} aria-label={svgProps["aria-label"] ?? title} role={svgProps["role"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? "img" : undefined)} aria-hidden={svgProps["aria-hidden"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? undefined : true)}>{title ? <title id={idPrefix + "title"}>{title}</title> : null}<path d="M1.69629 3.60272C1.28969 2.42127 2.4211 1.28983 3.60254 1.69647L13.0664 4.95917C14.4656 5.44191 14.3943 7.44578 12.9639 7.82733L11.0449 8.33807L13.3525 10.6457C14.1001 11.3932 14.1 12.6052 13.3525 13.3527C12.605 14.1003 11.3931 14.1003 10.6455 13.3527L8.33789 11.0451L7.82715 12.9641C7.44559 14.3945 5.44173 14.4658 4.95898 13.0666L1.69629 3.60272Z" fill="currentColor" style={{
      fill: "currentColor",
      fillOpacity: 1
    }} /></svg>;
});
export default IconCursorFill;
