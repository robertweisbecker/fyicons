import * as React from 'react';
import type { IconProps } from './types';
const IconQuoteBlock = React.forwardRef<SVGSVGElement, IconProps>(function IconQuoteBlock(props, ref) {
  const idPrefix = React.useId().replace(/[^a-zA-Z0-9_-]/g, '') + '-';
  const {
    size = 16,
    color,
    title,
    ...svgProps
  } = props;
  return <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...svgProps} ref={ref} width={svgProps["width"] ?? size} height={svgProps["height"] ?? size} color={color} aria-labelledby={svgProps["aria-labelledby"] ?? (title ? idPrefix + "title" : undefined)} aria-label={svgProps["aria-label"] ?? title} role={svgProps["role"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? "img" : undefined)} aria-hidden={svgProps["aria-hidden"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? undefined : true)}>{title ? <title id={idPrefix + "title"}>{title}</title> : null}<path d="M12 2.00049C13.1043 2.00075 14 2.89608 14 4.00049V12.0005C13.9997 13.1047 13.1042 14.0002 12 14.0005H4C2.89559 14.0005 2.00026 13.1048 2 12.0005V8.50049C2 8.22435 2.22386 8.00049 2.5 8.00049C2.77592 8.00075 3 8.22451 3 8.50049V12.0005C3.00026 12.5526 3.44788 13.0005 4 13.0005H12C12.5519 13.0002 12.9997 12.5524 13 12.0005V4.00049C13 3.44836 12.5521 3.00075 12 3.00049H9.5C9.22402 3.00049 9.00026 2.77641 9 2.50049C9 2.22435 9.22386 2.00049 9.5 2.00049H12ZM3.19727 1.86572C3.88326 1.94238 4.37729 2.5606 4.30078 3.24658C4.22487 3.92474 3.61998 4.41311 2.94336 4.3501C3.03594 4.67483 3.18355 5.01209 3.41992 5.30811C3.59208 5.52375 3.55724 5.83788 3.3418 6.01025C3.12608 6.18242 2.81099 6.14775 2.63867 5.93213C2.12084 5.28376 1.9203 4.53597 1.84473 3.97412C1.80664 3.69069 1.79973 3.44509 1.80176 3.26904C1.80279 3.18083 1.8062 3.10816 1.80957 3.05713C1.81122 3.03211 1.81215 3.01135 1.81348 2.99658L1.81641 2.96826C1.89341 2.28267 2.51156 1.78929 3.19727 1.86572ZM6.19727 1.86572C6.88326 1.94238 7.37729 2.5606 7.30078 3.24658C7.22486 3.92474 6.61998 4.41312 5.94336 4.3501C6.03594 4.67483 6.18355 5.01209 6.41992 5.30811C6.59216 5.52378 6.55734 5.83788 6.3418 6.01025C6.12606 6.18243 5.81099 6.1478 5.63867 5.93213C5.12085 5.28376 4.9203 4.53597 4.84473 3.97412C4.80665 3.6907 4.79973 3.44509 4.80176 3.26904C4.80279 3.18083 4.8062 3.10816 4.80957 3.05713C4.81122 3.0321 4.81215 3.01135 4.81348 2.99658L4.81641 2.96826C4.89339 2.2827 5.51161 1.78937 6.19727 1.86572Z" fill="currentColor" style={{
      fill: "currentColor",
      fillOpacity: 1
    }} /></svg>;
});
export default IconQuoteBlock;
