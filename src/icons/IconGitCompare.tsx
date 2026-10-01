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
  return <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...svgProps} ref={ref} width={svgProps["width"] ?? size} height={svgProps["height"] ?? size} color={color} aria-labelledby={svgProps["aria-labelledby"] ?? (title ? idPrefix + "title" : undefined)} aria-label={svgProps["aria-label"] ?? title} role={svgProps["role"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? "img" : undefined)} aria-hidden={svgProps["aria-hidden"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? undefined : true)}>{title ? <title id={idPrefix + "title"}>{title}</title> : null}<path d="M9.22363 3.0188C9.55591 2.79728 10.001 3.03547 10.001 3.43481V4.00024H10.5C11.6045 4.00028 12.5 4.89571 12.5 6.00024V10.0657C13.3622 10.2879 14 11.0686 14 12.0002C13.9998 13.1046 13.1044 14.0002 12 14.0002C10.8956 14.0002 10.0002 13.1046 10 12.0002C10 11.0686 10.6378 10.2879 11.5 10.0657V6.00024C11.5 5.448 11.0522 5.00028 10.5 5.00024H10.001V5.56567C10.0007 5.96474 9.55579 6.20305 9.22363 5.98169L7.625 4.91626C7.32825 4.71841 7.32845 4.28223 7.625 4.08423L9.22363 3.0188ZM4 2.00024C5.10434 2.0005 5.99999 2.89584 6 4.00024C5.99999 4.93183 5.36215 5.71248 4.5 5.93481V10.0002C4.50003 10.5525 4.94776 11.0002 5.5 11.0002H5.99805V10.4338C5.99842 10.0349 6.44328 9.79665 6.77539 10.0178L8.37402 11.0842C8.67035 11.2822 8.67041 11.7183 8.37402 11.9163L6.77539 12.9817C6.44311 13.2032 5.99805 12.965 5.99805 12.5657V12.0002H5.5C4.39548 12.0002 3.50003 11.1048 3.5 10.0002V5.93481C2.63775 5.71255 2.00001 4.9319 2 4.00024C2.00001 2.89573 2.8955 2.00032 4 2.00024ZM12 11.0002C11.4478 11.0003 11 11.448 11 12.0002C11.0002 12.5523 11.4479 13.0002 12 13.0002C12.5521 13.0002 12.9998 12.5523 13 12.0002C13 11.448 12.5522 11.0003 12 11.0002ZM4 3.00024C3.44779 3.00032 3.00001 3.44801 3 4.00024C3.00001 4.55248 3.44778 5.00017 4 5.00024C4.55206 4.99999 4.99999 4.55236 5 4.00024C4.99999 3.44813 4.55206 3.0005 4 3.00024Z" fill="currentColor" style={{
      fill: "currentColor",
      fillOpacity: 1
    }} /></svg>;
});
export default IconGitCompare;
