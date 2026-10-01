import * as React from 'react';
import type { IconProps } from './types';
const IconSquarrowUpRight = React.forwardRef<SVGSVGElement, IconProps>(function IconSquarrowUpRight(props, ref) {
  const idPrefix = React.useId().replace(/[^a-zA-Z0-9_-]/g, '') + '-';
  const {
    size = 16,
    color,
    title,
    ...svgProps
  } = props;
  return <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...svgProps} ref={ref} width={svgProps["width"] ?? size} height={svgProps["height"] ?? size} color={color} aria-labelledby={svgProps["aria-labelledby"] ?? (title ? idPrefix + "title" : undefined)} aria-label={svgProps["aria-label"] ?? title} role={svgProps["role"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? "img" : undefined)} aria-hidden={svgProps["aria-hidden"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? undefined : true)}>{title ? <title id={idPrefix + "title"}>{title}</title> : null}<path d="M4.5 2C3.11929 2 2 3.11929 2 4.5V8.67188C2.00024 10.8989 4.69272 12.0141 6.26758 10.4395L10 6.70703V9.5C10 9.77614 10.2239 10 10.5 10C10.7761 10 11 9.77614 11 9.5V5.5C11 5.46701 10.9977 5.43383 10.9912 5.40137C10.981 5.35033 10.961 5.30293 10.9365 5.25879C10.9144 5.21875 10.8875 5.18046 10.8535 5.14648C10.8195 5.11251 10.7812 5.08563 10.7412 5.06348C10.6971 5.03903 10.6497 5.01898 10.5986 5.00879C10.5662 5.0023 10.533 5 10.5 5H6.5C6.22386 5 6 5.22386 6 5.5C6 5.77614 6.22386 6 6.5 6H9.29297L5.56055 9.73242C4.61565 10.6771 3.00024 10.008 3 8.67188V4.5C3 3.67157 3.67157 3 4.5 3H11.5C12.3284 3 13 3.67157 13 4.5V11.5C13 12.3284 12.3284 13 11.5 13H7.5C7.22386 13 7 13.2239 7 13.5C7 13.7761 7.22386 14 7.5 14H11.5C12.8807 14 14 12.8807 14 11.5V4.5C14 3.11929 12.8807 2 11.5 2H4.5Z" fill="currentColor" style={{
      fill: "currentColor",
      fillOpacity: 1
    }} /></svg>;
});
export default IconSquarrowUpRight;
