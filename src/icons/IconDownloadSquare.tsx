import * as React from 'react';
import type { IconProps } from './types';
const IconDownloadSquare = React.forwardRef<SVGSVGElement, IconProps>(function IconDownloadSquare(props, ref) {
  const idPrefix = React.useId().replace(/[^a-zA-Z0-9_-]/g, '') + '-';
  const {
    size = 16,
    color,
    title,
    ...svgProps
  } = props;
  return <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...svgProps} ref={ref} width={svgProps["width"] ?? size} height={svgProps["height"] ?? size} color={color} aria-labelledby={svgProps["aria-labelledby"] ?? (title ? idPrefix + "title" : undefined)} aria-label={svgProps["aria-label"] ?? title} role={svgProps["role"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? "img" : undefined)} aria-hidden={svgProps["aria-hidden"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? undefined : true)}>{title ? <title id={idPrefix + "title"}>{title}</title> : null}<path d="M5.5 5.00043C5.77614 5.00043 6 5.22428 6 5.50043C5.99977 5.77637 5.776 6.00043 5.5 6.00043H5C4.44772 6.00043 4 6.44814 4 7.00043V12.0004C4.00023 12.5525 4.44786 13.0004 5 13.0004H11C11.5521 13.0004 11.9998 12.5525 12 12.0004V7.00043C12 6.44814 11.5523 6.00043 11 6.00043H10.5C10.224 6.0004 10.0002 5.77636 10 5.50043C10 5.2243 10.2239 5.00045 10.5 5.00043H11C12.1046 5.00043 13 5.89586 13 7.00043V12.0004C12.9998 13.1048 12.1044 14.0004 11 14.0004H5C3.89557 14.0004 3.00023 13.1048 3 12.0004V7.00043C3 5.89586 3.89543 5.00043 5 5.00043H5.5ZM8 2.00043C8.27614 2.00043 8.5 2.22428 8.5 2.50043V9.2934L9.64648 8.14691C9.84175 7.95165 10.1583 7.95165 10.3535 8.14691C10.5486 8.34219 10.5487 8.65875 10.3535 8.85394L8.35352 10.8539C8.33112 10.8763 8.30648 10.8953 8.28125 10.9125C8.27632 10.9159 8.27068 10.9181 8.26562 10.9213C8.24378 10.9351 8.22154 10.9474 8.19824 10.9575C8.19219 10.9601 8.18586 10.9619 8.17969 10.9643C8.1572 10.973 8.13463 10.9804 8.11133 10.9858C8.10069 10.9882 8.08998 10.9899 8.0791 10.9916C8.06089 10.9946 8.04279 10.9966 8.02441 10.9975C8.01629 10.9979 8.00822 11.0004 8 11.0004C7.9931 11.0004 7.98632 10.9978 7.97949 10.9975C7.96011 10.9967 7.94107 10.9947 7.92188 10.9916C7.91201 10.9901 7.90224 10.9889 7.89258 10.9868C7.83388 10.9739 7.77645 10.9526 7.72461 10.9184L7.64648 10.8539L5.64648 8.85394C5.45129 8.65875 5.45144 8.34219 5.64648 8.14691C5.84175 7.95165 6.15825 7.95165 6.35352 8.14691L7.5 9.2934V2.50043C7.5 2.22428 7.72386 2.00043 8 2.00043Z" fill="currentColor" style={{
      fill: "currentColor",
      fillOpacity: 1
    }} /></svg>;
});
export default IconDownloadSquare;
