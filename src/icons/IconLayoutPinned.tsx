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
  return <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...svgProps} ref={ref} width={svgProps["width"] ?? size} height={svgProps["height"] ?? size} color={color} aria-labelledby={svgProps["aria-labelledby"] ?? (title ? idPrefix + "title" : undefined)} aria-label={svgProps["aria-label"] ?? title} role={svgProps["role"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? "img" : undefined)} aria-hidden={svgProps["aria-hidden"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? undefined : true)}>{title ? <title id={idPrefix + "title"}>{title}</title> : null}<path d="M6.5 2.99984C6.77611 2.99984 6.99995 3.22374 7 3.49984C7 3.77598 6.77614 3.99984 6.5 3.99984H3C2.44775 3.99984 2.00005 4.4476 2 4.99984V10.9998C2 11.5521 2.44772 11.9998 3 11.9998H13C13.5523 11.9998 14 11.5521 14 10.9998V9.49984C14 9.22374 14.2239 8.99984 14.5 8.99984C14.7761 8.99984 15 9.22374 15 9.49984V10.9998C15 12.1044 14.1046 12.9998 13 12.9998H3C1.89543 12.9998 1 12.1044 1 10.9998V4.99984C1.00005 3.89531 1.89546 2.99984 3 2.99984H6.5ZM11.793 2.49984C12.1835 2.10943 12.8165 2.10943 13.207 2.49984L14.5 3.79281C14.8905 4.18331 14.8904 4.81635 14.5 5.20687L13 6.70687V8.29281C12.9999 9.18365 11.9229 9.62973 11.293 8.99984L10 7.70687L7.85352 9.85336C7.65825 10.0486 7.34175 10.0486 7.14648 9.85336C6.95127 9.65809 6.95124 9.34157 7.14648 9.14633L9.29297 6.99984L8 5.70687C7.37017 5.07691 7.81622 3.9999 8.70703 3.99984H10.293L11.793 2.49984Z" fill="currentColor" style={{
      fill: "currentColor",
      fillOpacity: 1
    }} /></svg>;
});
export default IconLayoutPinned;
