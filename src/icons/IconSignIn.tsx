import * as React from 'react';
import type { IconProps } from './types';
const IconSignIn = React.forwardRef<SVGSVGElement, IconProps>(function IconSignIn(props, ref) {
  const idPrefix = React.useId().replace(/[^a-zA-Z0-9_-]/g, '') + '-';
  const {
    size = 16,
    color,
    title,
    ...svgProps
  } = props;
  return <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...svgProps} ref={ref} width={svgProps["width"] ?? size} height={svgProps["height"] ?? size} color={color} aria-labelledby={svgProps["aria-labelledby"] ?? (title ? idPrefix + "title" : undefined)} aria-label={svgProps["aria-label"] ?? title} role={svgProps["role"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? "img" : undefined)} aria-hidden={svgProps["aria-hidden"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? undefined : true)}>{title ? <title id={idPrefix + "title"}>{title}</title> : null}<path d="M7.14648 5.14668C7.34175 4.95141 7.65825 4.95141 7.85352 5.14668L10.3535 7.64668C10.5243 7.81754 10.5461 8.08154 10.418 8.27558L10.3535 8.35371L7.85352 10.8537C7.65828 11.0488 7.34172 11.0488 7.14648 10.8537C6.95125 10.6585 6.95131 10.3419 7.14648 10.1467L8.79297 8.50019H3.5C3.22392 8.50019 3.0001 8.27625 3 8.00019C3 7.72405 3.22386 7.50019 3.5 7.50019H8.79297L7.14648 5.85371C6.95125 5.65848 6.95131 5.34195 7.14648 5.14668Z" fill="currentColor" style={{
      fill: "currentColor",
      fillOpacity: 1
    }} /><path d="M4.5 3.5V3C4.5 2.17157 5.17157 1.5 6 1.5H11C11.8284 1.5 12.5 2.17157 12.5 3V13C12.5 13.8284 11.8284 14.5 11 14.5H6C5.17157 14.5 4.5 13.8284 4.5 13V12.5" stroke="currentColor" style={{
      stroke: "currentColor",
      strokeOpacity: 1
    }} strokeLinecap="round" strokeLinejoin="round" /></svg>;
});
export default IconSignIn;
