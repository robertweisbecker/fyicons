import * as React from 'react';
import type { IconProps } from './types';
const IconLayoutPinned = React.forwardRef<SVGSVGElement, IconProps>(function IconLayoutPinned(props, ref) {
  const idPrefix = React.useId().replace(/[^a-zA-Z0-9_-]/g, '') + '-';
  const {
    size = 16,
    color,
    title,
    ...svgProps
  } = props;
  return <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...svgProps} ref={ref} width={svgProps["width"] ?? size} height={svgProps["height"] ?? size} color={color} aria-labelledby={svgProps["aria-labelledby"] ?? (title ? idPrefix + "title" : undefined)} aria-label={svgProps["aria-label"] ?? title} role={svgProps["role"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? "img" : undefined)} aria-hidden={svgProps["aria-hidden"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? undefined : true)}>{title ? <title id={idPrefix + "title"}>{title}</title> : null}<path d="M6.5 2.99991C6.77611 2.99991 6.99995 3.22381 7 3.49991C7 3.77605 6.77614 3.99991 6.5 3.99991H3C2.44775 3.99991 2.00005 4.44767 2 4.99991V10.9999C2 11.5522 2.44772 11.9999 3 11.9999H13C13.5523 11.9999 14 11.5522 14 10.9999V9.49991C14 9.22381 14.2239 8.99991 14.5 8.99991C14.7761 8.99991 15 9.22381 15 9.49991V10.9999C15 12.1045 14.1046 12.9999 13 12.9999H3C1.89543 12.9999 1 12.1045 1 10.9999V4.99991C1.00005 3.89538 1.89546 2.99991 3 2.99991H6.5ZM11.793 2.49991C12.1835 2.1095 12.8165 2.1095 13.207 2.49991L14.5 3.79288C14.8905 4.18338 14.8904 4.81642 14.5 5.20694L13 6.70694V8.29288C12.9999 9.18371 11.9229 9.6298 11.293 8.99991L10 7.70694L7.85352 9.85343C7.65825 10.0487 7.34175 10.0487 7.14648 9.85343C6.95127 9.65816 6.95124 9.34164 7.14648 9.14639L9.29297 6.99991L8 5.70694C7.37017 5.07698 7.81622 3.99997 8.70703 3.99991H10.293L11.793 2.49991Z" fill="currentColor" style={{
      fill: "currentColor",
      fillOpacity: 1
    }} /></svg>;
});
export default IconLayoutPinned;
