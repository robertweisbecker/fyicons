import * as React from 'react';
import type { IconProps } from './types';
const IconPrinter = React.forwardRef<SVGSVGElement, IconProps>(function IconPrinter(props, ref) {
  const idPrefix = React.useId().replace(/[^a-zA-Z0-9_-]/g, '') + '-';
  const {
    size = 16,
    color,
    title,
    ...svgProps
  } = props;
  return <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...svgProps} ref={ref} width={svgProps["width"] ?? size} height={svgProps["height"] ?? size} color={color} aria-labelledby={svgProps["aria-labelledby"] ?? (title ? idPrefix + "title" : undefined)} aria-label={svgProps["aria-label"] ?? title} role={svgProps["role"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? "img" : undefined)} aria-hidden={svgProps["aria-hidden"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? undefined : true)}>{title ? <title id={idPrefix + "title"}>{title}</title> : null}<path d="M10.75 2C11.4404 2 12 2.55964 12 3.25V4H13C14.1046 4 15 4.89543 15 6V9C15 10.1046 14.1046 11 13 11H12V12.5C12 13.3284 11.3284 14 10.5 14H5.5L5.34668 13.9922C4.59028 13.9154 4 13.2767 4 12.5V11H3C1.89543 11 1 10.1046 1 9V6C1 4.89543 1.89543 4 3 4H4V3.25C4 2.55964 4.55964 2 5.25 2H10.75ZM5 12.5C5 12.7761 5.22386 13 5.5 13H10.5C10.7761 13 11 12.7761 11 12.5V9H5V12.5ZM3 5C2.44772 5 2 5.44772 2 6V9C2 9.55228 2.44772 10 3 10H4V9C3.72386 9 3.5 8.77614 3.5 8.5C3.5 8.22386 3.72386 8 4 8H12C12.2761 8 12.5 8.22386 12.5 8.5C12.5 8.77614 12.2761 9 12 9V10H13C13.5523 10 14 9.55228 14 9V6C14 5.44772 13.5523 5 13 5H3ZM12.5098 6C12.7859 6 13.0098 6.22386 13.0098 6.5C13.0098 6.77614 12.7859 7 12.5098 7H12.5C12.2239 7 12 6.77614 12 6.5C12 6.22386 12.2239 6 12.5 6H12.5098ZM5.25 3C5.11193 3 5 3.11193 5 3.25V4H11V3.25C11 3.11193 10.8881 3 10.75 3H5.25Z" fill="currentColor" style={{
      fill: "currentColor",
      fillOpacity: 1
    }} /></svg>;
});
export default IconPrinter;
