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
  return <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...svgProps} ref={ref} width={svgProps["width"] ?? size} height={svgProps["height"] ?? size} color={color} aria-labelledby={svgProps["aria-labelledby"] ?? (title ? idPrefix + "title" : undefined)} aria-label={svgProps["aria-label"] ?? title} role={svgProps["role"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? "img" : undefined)} aria-hidden={svgProps["aria-hidden"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? undefined : true)}>{title ? <title id={idPrefix + "title"}>{title}</title> : null}<path d="M5.5 5.00041C5.77614 5.00041 6 5.22427 6 5.50041C5.99976 5.77635 5.77599 6.00041 5.5 6.00041H5C4.44772 6.00041 4 6.44813 4 7.00041V13.0004C4.00024 13.5525 4.44786 14.0004 5 14.0004H11C11.5521 14.0004 11.9998 13.5525 12 13.0004V7.00041C12 6.44813 11.5523 6.00041 11 6.00041H10.5C10.224 6.00041 10.0002 5.77635 10 5.50041C10 5.22427 10.2239 5.00041 10.5 5.00041H11C12.1046 5.00041 13 5.89584 13 7.00041V13.0004C12.9998 14.1048 12.1044 15.0004 11 15.0004H5C3.89558 15.0004 3.00024 14.1048 3 13.0004V7.00041C3 5.89584 3.89543 5.00041 5 5.00041H5.5ZM8 2.00041C8.27614 2.00041 8.5 2.22427 8.5 2.50041V9.79338L10.1465 8.1469C10.3417 7.95163 10.6583 7.95163 10.8535 8.1469C11.0486 8.34218 11.0487 8.65873 10.8535 8.85393L8.35352 11.3539C8.1827 11.5245 7.91859 11.5464 7.72461 11.4184L7.64648 11.3539L5.14648 8.85393C4.95129 8.65873 4.95143 8.34218 5.14648 8.1469C5.34175 7.95163 5.65825 7.95163 5.85352 8.1469L7.5 9.79338V2.50041C7.5 2.22427 7.72386 2.00041 8 2.00041Z" fill="currentColor" style={{
      fill: "currentColor",
      fillOpacity: 1
    }} /></svg>;
});
export default IconDownloadSquare;
