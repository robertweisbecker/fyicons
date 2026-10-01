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
  return <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...svgProps} ref={ref} width={svgProps["width"] ?? size} height={svgProps["height"] ?? size} color={color} aria-labelledby={svgProps["aria-labelledby"] ?? (title ? idPrefix + "title" : undefined)} aria-label={svgProps["aria-label"] ?? title} role={svgProps["role"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? "img" : undefined)} aria-hidden={svgProps["aria-hidden"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? undefined : true)}>{title ? <title id={idPrefix + "title"}>{title}</title> : null}<path d="M2.5 10C2.77614 10 3 10.2239 3 10.5V11C3 12.1046 3.89543 13 5 13H5.5C5.77614 13 6 13.2239 6 13.5C6 13.7761 5.77614 14 5.5 14H5C3.34315 14 2 12.6569 2 11V10.5C2 10.2239 2.22386 10 2.5 10ZM13.5 10C13.7761 10 14 10.2239 14 10.5V11C14 12.6569 12.6569 14 11 14H10.5C10.2239 14 10 13.7761 10 13.5C10 13.2239 10.2239 13 10.5 13H11C12.1046 13 13 12.1046 13 11V10.5C13 10.2239 13.2239 10 13.5 10ZM5.5 9.75C5.91421 9.75 6.25 10.0858 6.25 10.5C6.25 10.9142 5.91421 11.25 5.5 11.25C5.08579 11.25 4.75 10.9142 4.75 10.5C4.75 10.0858 5.08579 9.75 5.5 9.75ZM10.5 9.75C10.9142 9.75 11.25 10.0858 11.25 10.5C11.25 10.9142 10.9142 11.25 10.5 11.25C10.0858 11.25 9.75 10.9142 9.75 10.5C9.75 10.0858 10.0858 9.75 10.5 9.75ZM5.5 4.75C5.91421 4.75 6.25 5.08579 6.25 5.5C6.25 5.91421 5.91421 6.25 5.5 6.25C5.08579 6.25 4.75 5.91421 4.75 5.5C4.75 5.08579 5.08579 4.75 5.5 4.75ZM10.5 4.75C10.9142 4.75 11.25 5.08579 11.25 5.5C11.25 5.91421 10.9142 6.25 10.5 6.25C10.0858 6.25 9.75 5.91421 9.75 5.5C9.75 5.08579 10.0858 4.75 10.5 4.75ZM5.5 2C5.77614 2 6 2.22386 6 2.5C6 2.77614 5.77614 3 5.5 3H5C3.89543 3 3 3.89543 3 5V5.5C3 5.77614 2.77614 6 2.5 6C2.22386 6 2 5.77614 2 5.5V5C2 3.34315 3.34315 2 5 2H5.5ZM11 2C12.6569 2 14 3.34315 14 5V5.5C14 5.77614 13.7761 6 13.5 6C13.2239 6 13 5.77614 13 5.5V5C13 3.89543 12.1046 3 11 3H10.5C10.2239 3 10 2.77614 10 2.5C10 2.22386 10.2239 2 10.5 2H11Z" fill="currentColor" style={{
      fill: "currentColor",
      fillOpacity: 1
    }} /></svg>;
});
export default IconBorderRadius;
