import * as React from 'react';
import type { IconProps } from './types';
const IconListImages = React.forwardRef<SVGSVGElement, IconProps>(function IconListImages(props, ref) {
  const idPrefix = React.useId().replace(/[^a-zA-Z0-9_-]/g, '') + '-';
  const {
    size = 16,
    color,
    title,
    ...svgProps
  } = props;
  return <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...svgProps} ref={ref} width={svgProps["width"] ?? size} height={svgProps["height"] ?? size} color={color} aria-labelledby={svgProps["aria-labelledby"] ?? (title ? idPrefix + "title" : undefined)} aria-label={svgProps["aria-label"] ?? title} role={svgProps["role"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? "img" : undefined)} aria-hidden={svgProps["aria-hidden"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? undefined : true)}>{title ? <title id={idPrefix + "title"}>{title}</title> : null}<path d="M5.10254 9.00488C5.60667 9.05621 6 9.48232 6 10V12L5.99512 12.1025C5.94379 12.6067 5.51768 13 5 13H3C2.44772 13 2 12.5523 2 12V10C2 9.44772 2.44772 9 3 9H5L5.10254 9.00488ZM3 12H5V10H3V12ZM10.5 11C10.7761 11 11 11.2239 11 11.5C11 11.7761 10.7761 12 10.5 12H7.5C7.22386 12 7 11.7761 7 11.5C7 11.2239 7.22386 11 7.5 11H10.5ZM13.5 9C13.7761 9 14 9.22386 14 9.5C14 9.77614 13.7761 10 13.5 10H7.5C7.22386 10 7 9.77614 7 9.5C7 9.22386 7.22386 9 7.5 9H13.5ZM5.10254 3.00488C5.60667 3.05621 6 3.48232 6 4V6L5.99512 6.10254C5.94379 6.60667 5.51768 7 5 7H3C2.44772 7 2 6.55228 2 6V4C2 3.44772 2.44772 3 3 3H5L5.10254 3.00488ZM3 6H5V4H3V6ZM10.5 5C10.7761 5 11 5.22386 11 5.5C11 5.77614 10.7761 6 10.5 6H7.5C7.22386 6 7 5.77614 7 5.5C7 5.22386 7.22386 5 7.5 5H10.5ZM13.5 3C13.7761 3 14 3.22386 14 3.5C14 3.77614 13.7761 4 13.5 4H7.5C7.22386 4 7 3.77614 7 3.5C7 3.22386 7.22386 3 7.5 3H13.5Z" fill="currentColor" style={{
      fill: "currentColor",
      fillOpacity: 1
    }} /></svg>;
});
export default IconListImages;
