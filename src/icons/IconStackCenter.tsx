import * as React from 'react';
import type { IconProps } from './types';
const IconStackCenter = React.forwardRef<SVGSVGElement, IconProps>(function IconStackCenter(props, ref) {
  const idPrefix = React.useId().replace(/[^a-zA-Z0-9_-]/g, '') + '-';
  const {
    size = 16,
    color,
    title,
    ...svgProps
  } = props;
  return <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...svgProps} ref={ref} width={svgProps["width"] ?? size} height={svgProps["height"] ?? size} color={color} aria-labelledby={svgProps["aria-labelledby"] ?? (title ? idPrefix + "title" : undefined)} aria-label={svgProps["aria-label"] ?? title} role={svgProps["role"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? "img" : undefined)} aria-hidden={svgProps["aria-hidden"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? undefined : true)}>{title ? <title id={idPrefix + "title"}>{title}</title> : null}<path d="M1 5C1 4.44771 1.44772 4 2 4H4C4 3.44772 4.44772 3 5 3H11C11.5523 3 12 3.44772 12 4H14L14.1025 4.00488C14.6067 4.05621 15 4.48232 15 5V11C15 11.5523 14.5523 12 14 12H12C12 12.5523 11.5523 13 11 13H5C4.44772 13 4 12.5523 4 12H2C1.44772 12 1 11.5523 1 11V5ZM11 12V4H5V12H11ZM4 11V5H2V11H4ZM12 5V11H14V5H12Z" fill="currentColor" style={{
      fill: "currentColor",
      fillOpacity: 1
    }} /></svg>;
});
export default IconStackCenter;
