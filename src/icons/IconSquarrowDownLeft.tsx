import * as React from 'react';
import type { IconProps } from './types';
const IconSquarrowDownLeft = React.forwardRef<SVGSVGElement, IconProps>(function IconSquarrowDownLeft(props, ref) {
  const idPrefix = React.useId().replace(/[^a-zA-Z0-9_-]/g, '') + '-';
  const {
    size = 16,
    color,
    title,
    ...svgProps
  } = props;
  return <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...svgProps} ref={ref} width={svgProps["width"] ?? size} height={svgProps["height"] ?? size} color={color} aria-labelledby={svgProps["aria-labelledby"] ?? (title ? idPrefix + "title" : undefined)} aria-label={svgProps["aria-label"] ?? title} role={svgProps["role"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? "img" : undefined)} aria-hidden={svgProps["aria-hidden"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? undefined : true)}>{title ? <title id={idPrefix + "title"}>{title}</title> : null}<path d="M11.5 14C12.8807 14 14 12.8807 14 11.5V7.32812C13.9998 5.10114 11.3073 3.98593 9.73242 5.56055L6 9.29297V6.5C6 6.22386 5.77614 6 5.5 6C5.22386 6 5 6.22386 5 6.5V10.5C5 10.533 5.0023 10.5662 5.00879 10.5986C5.01898 10.6497 5.03903 10.6971 5.06348 10.7412C5.08563 10.7812 5.11251 10.8195 5.14648 10.8535C5.18046 10.8875 5.21875 10.9144 5.25879 10.9365C5.30293 10.961 5.35033 10.981 5.40137 10.9912C5.43383 10.9977 5.46701 11 5.5 11H9.5C9.77614 11 10 10.7761 10 10.5C10 10.2239 9.77614 10 9.5 10H6.70703L10.4395 6.26758C11.3844 5.32292 12.9998 5.99204 13 7.32812V11.5C13 12.3284 12.3284 13 11.5 13H4.5C3.67157 13 3 12.3284 3 11.5V4.5C3 3.67157 3.67157 3 4.5 3H8.5C8.77614 3 9 2.77614 9 2.5C9 2.22386 8.77614 2 8.5 2H4.5C3.11929 2 2 3.11929 2 4.5V11.5C2 12.8807 3.11929 14 4.5 14H11.5Z" fill="currentColor" style={{
      fill: "currentColor",
      fillOpacity: 1
    }} /></svg>;
});
export default IconSquarrowDownLeft;
