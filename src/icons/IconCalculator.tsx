import * as React from 'react';
import type { IconProps } from './types';
const IconCalculator = React.forwardRef<SVGSVGElement, IconProps>(function IconCalculator(props, ref) {
  const idPrefix = React.useId().replace(/[^a-zA-Z0-9_-]/g, '') + '-';
  const {
    size = 16,
    color,
    title,
    ...svgProps
  } = props;
  return <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...svgProps} ref={ref} width={svgProps["width"] ?? size} height={svgProps["height"] ?? size} color={color} aria-labelledby={svgProps["aria-labelledby"] ?? (title ? idPrefix + "title" : undefined)} aria-label={svgProps["aria-label"] ?? title} role={svgProps["role"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? "img" : undefined)} aria-hidden={svgProps["aria-hidden"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? undefined : true)}>{title ? <title id={idPrefix + "title"}>{title}</title> : null}<path d="M11 1C12.1046 1 13 1.89543 13 3V13C13 14.1046 12.1046 15 11 15H5C3.89543 15 3 14.1046 3 13V3C3 1.89543 3.89543 1 5 1H11ZM5 2C4.44772 2 4 2.44772 4 3V13C4 13.5523 4.44772 14 5 14H11C11.5523 14 12 13.5523 12 13V3C12 2.44772 11.5523 2 11 2H5ZM5.5 12C5.77614 12 6 12.2239 6 12.5C6 12.7761 5.77614 13 5.5 13C5.22386 13 5 12.7761 5 12.5C5 12.2239 5.22386 12 5.5 12ZM7.5 12C7.77614 12 8 12.2239 8 12.5C8 12.7761 7.77614 13 7.5 13C7.22386 13 7 12.7761 7 12.5C7 12.2239 7.22386 12 7.5 12ZM10.5 10C10.7761 10 11 10.2239 11 10.5V12.5C11 12.7761 10.7761 13 10.5 13H9.5C9.22386 13 9 12.7761 9 12.5V10.5C9 10.2239 9.22386 10 9.5 10H10.5ZM5.5 10C5.77614 10 6 10.2239 6 10.5C6 10.7761 5.77614 11 5.5 11C5.22386 11 5 10.7761 5 10.5C5 10.2239 5.22386 10 5.5 10ZM7.5 10C7.77614 10 8 10.2239 8 10.5C8 10.7761 7.77614 11 7.5 11C7.22386 11 7 10.7761 7 10.5C7 10.2239 7.22386 10 7.5 10ZM5.5 8C5.77614 8 6 8.22386 6 8.5C6 8.77614 5.77614 9 5.5 9C5.22386 9 5 8.77614 5 8.5C5 8.22386 5.22386 8 5.5 8ZM7.5 8C7.77614 8 8 8.22386 8 8.5C8 8.77614 7.77614 9 7.5 9C7.22386 9 7 8.77614 7 8.5C7 8.22386 7.22386 8 7.5 8ZM10.5 8C10.7761 8 11 8.22386 11 8.5C11 8.77614 10.7761 9 10.5 9H9.5C9.22386 9 9 8.77614 9 8.5C9 8.22386 9.22386 8 9.5 8H10.5ZM10.5 3C10.7761 3 11 3.22386 11 3.5V6.5C11 6.74171 10.8286 6.94371 10.6006 6.99023L10.5 7H5.5L5.39941 6.99023C5.17145 6.94371 5 6.74171 5 6.5V3.5C5 3.22386 5.22386 3 5.5 3H10.5ZM6 6H10V4H6V6Z" fill="currentColor" style={{
      fill: "currentColor",
      fillOpacity: 1
    }} /></svg>;
});
export default IconCalculator;
