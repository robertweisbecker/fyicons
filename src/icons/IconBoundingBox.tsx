import * as React from 'react';
import type { IconProps } from './types';
const IconBoundingBox = React.forwardRef<SVGSVGElement, IconProps>(function IconBoundingBox(props, ref) {
  const idPrefix = React.useId().replace(/[^a-zA-Z0-9_-]/g, '') + '-';
  const {
    size = 16,
    color,
    title,
    ...svgProps
  } = props;
  return <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...svgProps} ref={ref} width={svgProps["width"] ?? size} height={svgProps["height"] ?? size} color={color} aria-labelledby={svgProps["aria-labelledby"] ?? (title ? idPrefix + "title" : undefined)} aria-label={svgProps["aria-label"] ?? title} role={svgProps["role"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? "img" : undefined)} aria-hidden={svgProps["aria-hidden"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? undefined : true)}>{title ? <title id={idPrefix + "title"}>{title}</title> : null}<path d="M5 2C5.55228 2 6 2.44772 6 3H10C10 2.44772 10.4477 2 11 2H13C13.5523 2 14 2.44772 14 3V5C14 5.55228 13.5523 6 13 6V10C13.5523 10 14 10.4477 14 11V13C14 13.5523 13.5523 14 13 14H11C10.4477 14 10 13.5523 10 13H6C6 13.5523 5.55228 14 5 14H3C2.44772 14 2 13.5523 2 13V11C2 10.4477 2.44772 10 3 10V6C2.44772 6 2 5.55228 2 5V3C2 2.44772 2.44772 2 3 2H5ZM3 13H5V11H3V13ZM11 13H13V11H11V13ZM6 5C6 5.55228 5.55228 6 5 6H4V10H5C5.55228 10 6 10.4477 6 11V12H10V11C10 10.4477 10.4477 10 11 10H12V6H11C10.4477 6 10 5.55228 10 5V4H6V5ZM3 5H5V3H3V5ZM11 5H13V3H11V5Z" fill="currentColor" fillOpacity={0.9} style={{
      fill: "currentColor",
      fillOpacity: 0.9
    }} /></svg>;
});
export default IconBoundingBox;
