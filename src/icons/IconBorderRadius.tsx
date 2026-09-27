import * as React from 'react';
import type { IconProps } from './types';
const IconBorderRadius = React.forwardRef<SVGSVGElement, IconProps>(function IconBorderRadius(props, ref) {
  const idPrefix = React.useId().replace(/[^a-zA-Z0-9_-]/g, '') + '-';
  const {
    size = 16,
    color,
    title,
    ...svgProps
  } = props;
  return <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...svgProps} ref={ref} width={svgProps["width"] ?? size} height={svgProps["height"] ?? size} color={color} aria-labelledby={svgProps["aria-labelledby"] ?? (title ? idPrefix + "title" : undefined)} aria-label={svgProps["aria-label"] ?? title} role={svgProps["role"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? "img" : undefined)} aria-hidden={svgProps["aria-hidden"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? undefined : true)}>{title ? <title id={idPrefix + "title"}>{title}</title> : null}<path d="M2.5 9C2.77614 9 3 9.22386 3 9.5V11C3 12.1046 3.89543 13 5 13H6.5C6.77614 13 7 13.2239 7 13.5C7 13.7761 6.77614 14 6.5 14H5C3.34315 14 2 12.6569 2 11V9.5C2 9.22386 2.22386 9 2.5 9ZM13.5 9C13.7761 9 14 9.22386 14 9.5V11C14 12.6569 12.6569 14 11 14H9.5C9.22386 14 9 13.7761 9 13.5C9 13.2239 9.22386 13 9.5 13H11C12.1046 13 13 12.1046 13 11V9.5C13 9.22386 13.2239 9 13.5 9ZM6.5 2C6.77614 2 7 2.22386 7 2.5C7 2.77614 6.77614 3 6.5 3H5C3.89543 3 3 3.89543 3 5V6.5C3 6.77614 2.77614 7 2.5 7C2.22386 7 2 6.77614 2 6.5V5C2 3.34315 3.34315 2 5 2H6.5ZM11 2C12.6569 2 14 3.34315 14 5V6.5C14 6.77614 13.7761 7 13.5 7C13.2239 7 13 6.77614 13 6.5V5C13 3.89543 12.1046 3 11 3H9.5C9.22386 3 9 2.77614 9 2.5C9 2.22386 9.22386 2 9.5 2H11Z" fill="currentColor" style={{
      fill: "currentColor",
      fillOpacity: 1
    }} /></svg>;
});
export default IconBorderRadius;
