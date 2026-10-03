import * as React from 'react';
import type { IconProps } from './types';
const IconSquares = React.forwardRef<SVGSVGElement, IconProps>(function IconSquares(props, ref) {
  const idPrefix = React.useId().replace(/[^a-zA-Z0-9_-]/g, '') + '-';
  const {
    size = 16,
    color,
    title,
    ...svgProps
  } = props;
  return <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...svgProps} ref={ref} width={svgProps["width"] ?? size} height={svgProps["height"] ?? size} color={color} aria-labelledby={svgProps["aria-labelledby"] ?? (title ? idPrefix + "title" : undefined)} aria-label={svgProps["aria-label"] ?? title} role={svgProps["role"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? "img" : undefined)} aria-hidden={svgProps["aria-hidden"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? undefined : true)}>{title ? <title id={idPrefix + "title"}>{title}</title> : null}<path d="M6.37598 2.36175C6.75377 1.32401 7.90165 0.788937 8.93945 1.16643L13.6387 2.87639C14.6764 3.25426 15.2116 4.40208 14.834 5.43987L13.124 10.1381C12.9232 10.6899 12.504 11.0977 12 11.3032V12.0004C12 13.105 11.1046 14.0004 10 14.0004H4C2.89543 14.0004 2 13.105 2 12.0004V6.00042C2 4.89585 2.89543 4.00042 4 4.00042H5.7793L6.37598 2.36175ZM4 5.00042C3.44772 5.00042 3 5.44813 3 6.00042V12.0004C3 12.5527 3.44772 13.0004 4 13.0004H10C10.5523 13.0004 11 12.5527 11 12.0004V6.00042C11 5.44813 10.5523 5.00042 10 5.00042H4ZM8.59766 2.10589C8.07887 1.91723 7.50541 2.1849 7.31641 2.70354L6.84375 4.00042H10C11.1046 4.00042 12 4.89585 12 6.00042V10.1088C12.0777 10.0194 12.1406 9.9144 12.1836 9.79632L13.8936 5.09807C14.0823 4.57913 13.8148 4.00472 13.2959 3.81585L8.59766 2.10589Z" fill="currentColor" style={{
      fill: "currentColor",
      fillOpacity: 1
    }} /></svg>;
});
export default IconSquares;
