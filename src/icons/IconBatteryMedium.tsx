import * as React from 'react';
import type { IconProps } from './types';
const IconBatteryMedium = React.forwardRef<SVGSVGElement, IconProps>(function IconBatteryMedium(props, ref) {
  const idPrefix = React.useId().replace(/[^a-zA-Z0-9_-]/g, '') + '-';
  const {
    size = 16,
    color,
    title,
    ...svgProps
  } = props;
  return <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...svgProps} ref={ref} width={svgProps["width"] ?? size} height={svgProps["height"] ?? size} color={color} aria-labelledby={svgProps["aria-labelledby"] ?? (title ? idPrefix + "title" : undefined)} aria-label={svgProps["aria-label"] ?? title} role={svgProps["role"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? "img" : undefined)} aria-hidden={svgProps["aria-hidden"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? undefined : true)}>{title ? <title id={idPrefix + "title"}>{title}</title> : null}<path d="M11 3C12.6569 3 14 4.34315 14 6C14.5523 6 15 6.44772 15 7V9C15 9.55228 14.5523 10 14 10C14 11.6569 12.6569 13 11 13H4C2.34315 13 1 11.6569 1 10V6C1 4.34315 2.34315 3 4 3H11ZM4 4C2.89543 4 2 4.89543 2 6V10C2 11.1046 2.89543 12 4 12H11C12.1046 12 13 11.1046 13 10V6C13 4.89543 12.1046 4 11 4H4ZM8 5C8.55228 5 9 5.44772 9 6V10C9 10.5523 8.55228 11 8 11H4C3.44772 11 3 10.5523 3 10V6C3 5.44772 3.44772 5 4 5H8Z" fill="currentColor" style={{
      fill: "currentColor",
      fillOpacity: 1
    }} /></svg>;
});
export default IconBatteryMedium;
