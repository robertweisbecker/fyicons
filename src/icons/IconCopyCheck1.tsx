import * as React from 'react';
import type { IconProps } from './types';
const IconCopyCheck1 = React.forwardRef<SVGSVGElement, IconProps>(function IconCopyCheck1(props, ref) {
  const idPrefix = React.useId().replace(/[^a-zA-Z0-9_-]/g, '') + '-';
  const {
    size = 16,
    color,
    title,
    ...svgProps
  } = props;
  return <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...svgProps} ref={ref} width={svgProps["width"] ?? size} height={svgProps["height"] ?? size} color={color} aria-labelledby={svgProps["aria-labelledby"] ?? (title ? idPrefix + "title" : undefined)} aria-label={svgProps["aria-label"] ?? title} role={svgProps["role"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? "img" : undefined)} aria-hidden={svgProps["aria-hidden"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? undefined : true)}>{title ? <title id={idPrefix + "title"}>{title}</title> : null}<path d="M10.5 10.5H13C13.8284 10.5 14.5 9.82843 14.5 9V3C14.5 2.17157 13.8284 1.5 13 1.5H7C6.17157 1.5 5.5 2.17157 5.5 3V5.5" stroke="currentColor" style={{
      stroke: "currentColor",
      strokeOpacity: 1
    }} strokeLinecap="round" strokeLinejoin="round" /><path d="M1.5 7C1.5 6.17157 2.17157 5.5 3 5.5H9C9.82843 5.5 10.5 6.17157 10.5 7V13C10.5 13.8284 9.82843 14.5 9 14.5H3C2.17157 14.5 1.5 13.8284 1.5 13V7Z" stroke="currentColor" style={{
      stroke: "currentColor",
      strokeOpacity: 1
    }} strokeLinecap="round" strokeLinejoin="round" /><path d="M4.375 10.375L5.75 11.625L7.625 8.375" stroke="currentColor" style={{
      stroke: "currentColor",
      strokeOpacity: 1
    }} strokeLinecap="round" strokeLinejoin="round" /></svg>;
});
export default IconCopyCheck1;
