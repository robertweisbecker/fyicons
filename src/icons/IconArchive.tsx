import * as React from 'react';
import type { IconProps } from './types';
const IconArchive = React.forwardRef<SVGSVGElement, IconProps>(function IconArchive(props, ref) {
  const idPrefix = React.useId().replace(/[^a-zA-Z0-9_-]/g, '') + '-';
  const {
    size = 16,
    color,
    title,
    ...svgProps
  } = props;
  return <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...svgProps} ref={ref} width={svgProps["width"] ?? size} height={svgProps["height"] ?? size} color={color} aria-labelledby={svgProps["aria-labelledby"] ?? (title ? idPrefix + "title" : undefined)} aria-label={svgProps["aria-label"] ?? title} role={svgProps["role"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? "img" : undefined)} aria-hidden={svgProps["aria-hidden"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? undefined : true)}>{title ? <title id={idPrefix + "title"}>{title}</title> : null}<path d="M13.5 2C14.3284 2 15 2.67157 15 3.5V5.5C15 6.15466 14.5799 6.70932 13.9951 6.91406C13.9975 6.94242 14 6.97101 14 7V11C14 12.6569 12.6569 14 11 14H5C3.34315 14 2 12.6569 2 11V7C2 6.97104 2.00149 6.9424 2.00391 6.91406C1.41959 6.70908 1 6.15434 1 5.5V3.5C1 2.67157 1.67157 2 2.5 2H13.5ZM3 11C3 12.1046 3.89543 13 5 13H11C12.1046 13 13 12.1046 13 11V7H3V11ZM9 8.75C9.27614 8.75 9.5 8.97386 9.5 9.25V9.75C9.5 10.0261 9.27614 10.25 9 10.25H7C6.72386 10.25 6.5 10.0261 6.5 9.75V9.25C6.5 8.97386 6.72386 8.75 7 8.75H9ZM2.5 3C2.22386 3 2 3.22386 2 3.5V5.5C2 5.77614 2.22386 6 2.5 6H13.5C13.7761 6 14 5.77614 14 5.5V3.5C14 3.22386 13.7761 3 13.5 3H2.5Z" fill="currentColor" style={{
      fill: "currentColor",
      fillOpacity: 1
    }} /></svg>;
});
export default IconArchive;
