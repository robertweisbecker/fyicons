import * as React from 'react';
import type { IconProps } from './types';
const IconGitCompare = React.forwardRef<SVGSVGElement, IconProps>(function IconGitCompare(props, ref) {
  const idPrefix = React.useId().replace(/[^a-zA-Z0-9_-]/g, '') + '-';
  const {
    size = 16,
    color,
    title,
    ...svgProps
  } = props;
  return <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...svgProps} ref={ref} width={svgProps["width"] ?? size} height={svgProps["height"] ?? size} color={color} aria-labelledby={svgProps["aria-labelledby"] ?? (title ? idPrefix + "title" : undefined)} aria-label={svgProps["aria-label"] ?? title} role={svgProps["role"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? "img" : undefined)} aria-hidden={svgProps["aria-hidden"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? undefined : true)}>{title ? <title id={idPrefix + "title"}>{title}</title> : null}<path d="M9.22363 3.01904C9.55591 2.79752 10.001 3.03571 10.001 3.43506V4.00049H10.5C11.6045 4.00053 12.5 4.89596 12.5 6.00049V10.0659C13.3622 10.2882 14 11.0688 14 12.0005C13.9998 13.1048 13.1044 14.0004 12 14.0005C10.8956 14.0004 10.0002 13.1048 10 12.0005C10 11.0689 10.6378 10.2882 11.5 10.0659V6.00049C11.5 5.44824 11.0522 5.00053 10.5 5.00049H10.001V5.56592C10.0007 5.96499 9.55579 6.20329 9.22363 5.98193L7.625 4.9165C7.32825 4.71866 7.32845 4.28248 7.625 4.08447L9.22363 3.01904ZM4 2.00049C5.10434 2.00075 5.99999 2.89609 6 4.00049C5.99999 4.93208 5.36215 5.71272 4.5 5.93506V10.0005C4.50003 10.5527 4.94776 11.0005 5.5 11.0005H5.99805V10.4341C5.99842 10.0351 6.44328 9.79689 6.77539 10.0181L8.37402 11.0845C8.67035 11.2824 8.67041 11.7186 8.37402 11.9165L6.77539 12.9819C6.44311 13.2035 5.99805 12.9653 5.99805 12.5659V12.0005H5.5C4.39548 12.0005 3.50003 11.105 3.5 10.0005V5.93506C2.63775 5.71279 2.00001 4.93215 2 4.00049C2.00001 2.89597 2.8955 2.00056 4 2.00049ZM12 11.0005C11.4478 11.0006 11 11.4483 11 12.0005C11.0002 12.5525 11.4479 13.0004 12 13.0005C12.5521 13.0004 12.9998 12.5525 13 12.0005C13 11.4483 12.5522 11.0006 12 11.0005ZM4 3.00049C3.44779 3.00056 3.00001 3.44826 3 4.00049C3.00001 4.55272 3.44778 5.00041 4 5.00049C4.55206 5.00023 4.99999 4.55261 5 4.00049C4.99999 3.44837 4.55206 3.00075 4 3.00049Z" fill="currentColor" style={{
      fill: "currentColor",
      fillOpacity: 1
    }} /></svg>;
});
export default IconGitCompare;
