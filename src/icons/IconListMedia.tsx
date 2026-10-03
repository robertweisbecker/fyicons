import * as React from 'react';
import type { IconProps } from './types';
const IconListMedia = React.forwardRef<SVGSVGElement, IconProps>(function IconListMedia(props, ref) {
  const idPrefix = React.useId().replace(/[^a-zA-Z0-9_-]/g, '') + '-';
  const {
    size = 16,
    color,
    title,
    ...svgProps
  } = props;
  return <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...svgProps} ref={ref} width={svgProps["width"] ?? size} height={svgProps["height"] ?? size} color={color} aria-labelledby={svgProps["aria-labelledby"] ?? (title ? idPrefix + "title" : undefined)} aria-label={svgProps["aria-label"] ?? title} role={svgProps["role"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? "img" : undefined)} aria-hidden={svgProps["aria-hidden"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? undefined : true)}>{title ? <title id={idPrefix + "title"}>{title}</title> : null}<path d="M5.10254 10.0049C5.60667 10.0562 6 10.4823 6 11V13L5.99512 13.1025C5.94379 13.6067 5.51768 14 5 14H3C2.44772 14 2 13.5523 2 13V11C2 10.4477 2.44772 10 3 10H5L5.10254 10.0049ZM10.5 13C10.7761 13 11 13.2239 11 13.5C11 13.7761 10.7761 14 10.5 14H7.5C7.22386 14 7 13.7761 7 13.5C7 13.2239 7.22386 13 7.5 13H10.5ZM3 13H5V11H3V13ZM13.5 10C13.7761 10 14 10.2239 14 10.5C14 10.7761 13.7761 11 13.5 11H7.5C7.22386 11 7 10.7761 7 10.5C7 10.2239 7.22386 10 7.5 10H13.5ZM5 2C5.55228 2 6 2.44772 6 3V5C6 5.55228 5.55228 6 5 6H3C2.44772 6 2 5.55228 2 5V3C2 2.44772 2.44772 2 3 2H5ZM10.5 5C10.7761 5 11 5.22386 11 5.5C11 5.77614 10.7761 6 10.5 6H7.5C7.22386 6 7 5.77614 7 5.5C7 5.22386 7.22386 5 7.5 5H10.5ZM3 5H5V3H3V5ZM13.5 2C13.7761 2 14 2.22386 14 2.5C14 2.77614 13.7761 3 13.5 3H7.5C7.22386 3 7 2.77614 7 2.5C7 2.22386 7.22386 2 7.5 2H13.5Z" fill="currentColor" style={{
      fill: "currentColor",
      fillOpacity: 1
    }} /></svg>;
});
export default IconListMedia;
