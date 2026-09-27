import * as React from 'react';
import type { IconProps } from './types';
const IconSignal0 = React.forwardRef<SVGSVGElement, IconProps>(function IconSignal0(props, ref) {
  const idPrefix = React.useId().replace(/[^a-zA-Z0-9_-]/g, '') + '-';
  const {
    size = 16,
    color,
    title,
    ...svgProps
  } = props;
  return <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...svgProps} ref={ref} width={svgProps["width"] ?? size} height={svgProps["height"] ?? size} color={color} aria-labelledby={svgProps["aria-labelledby"] ?? (title ? idPrefix + "title" : undefined)} aria-label={svgProps["aria-label"] ?? title} role={svgProps["role"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? "img" : undefined)} aria-hidden={svgProps["aria-hidden"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? undefined : true)}>{title ? <title id={idPrefix + "title"}>{title}</title> : null}<path d="M2 12C2.27614 12 2.5 12.2239 2.5 12.5C2.5 12.7761 2.27614 13 2 13C1.72386 13 1.5 12.7761 1.5 12.5C1.5 12.2239 1.72386 12 2 12ZM6 12C6.27614 12 6.5 12.2239 6.5 12.5C6.5 12.7761 6.27614 13 6 13C5.72386 13 5.5 12.7761 5.5 12.5C5.5 12.2239 5.72386 12 6 12ZM10 12C10.2761 12 10.5 12.2239 10.5 12.5C10.5 12.7761 10.2761 13 10 13C9.72386 13 9.5 12.7761 9.5 12.5C9.5 12.2239 9.72386 12 10 12ZM14 12C14.2761 12 14.5 12.2239 14.5 12.5C14.5 12.7761 14.2761 13 14 13C13.7239 13 13.5 12.7761 13.5 12.5C13.5 12.2239 13.7239 12 14 12Z" fill="currentColor" style={{
      fill: "currentColor",
      fillOpacity: 1
    }} /></svg>;
});
export default IconSignal0;
