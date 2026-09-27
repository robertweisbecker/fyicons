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
  return <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...svgProps} ref={ref} width={svgProps["width"] ?? size} height={svgProps["height"] ?? size} color={color} aria-labelledby={svgProps["aria-labelledby"] ?? (title ? idPrefix + "title" : undefined)} aria-label={svgProps["aria-label"] ?? title} role={svgProps["role"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? "img" : undefined)} aria-hidden={svgProps["aria-hidden"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? undefined : true)}>{title ? <title id={idPrefix + "title"}>{title}</title> : null}<path d="M3.99902 3.0003C5.10351 3.0003 5.99889 3.89585 5.99902 5.0003C5.99889 5.93178 5.36208 6.71355 4.5 6.93585V11.5003C4.50016 12.0524 4.94787 12.5002 5.5 12.5003H5.99902V11.2073C5.9993 10.7622 6.53761 10.5392 6.85254 10.8538L8.64551 12.6468C8.84063 12.842 8.84059 13.1586 8.64551 13.3538L6.85254 15.1468C6.5376 15.4614 5.99926 15.2384 5.99902 14.7933V13.5003H5.5C4.39558 13.5002 3.50016 12.6047 3.5 11.5003V6.93585C2.63747 6.71386 1.99916 5.9321 1.99902 5.0003C1.99916 3.89605 2.89481 3.00063 3.99902 3.0003ZM9.14648 0.853818C9.46147 0.538836 10 0.761881 10 1.20733V2.5003H10.499C11.6036 2.5003 12.499 3.39573 12.499 4.5003V9.06476C13.3617 9.28676 14 10.0684 14 11.0003C13.9998 12.1046 13.1042 13 12 13.0003C10.8957 13.0001 10.0002 12.1046 10 11.0003C10 10.0688 10.637 9.28719 11.499 9.06476V4.5003C11.499 3.94802 11.0513 3.5003 10.499 3.5003H10V4.79327C9.99969 5.23838 9.4614 5.46139 9.14648 5.14679L7.35352 3.35382C7.15851 3.15865 7.15863 2.84203 7.35352 2.64679L9.14648 0.853818ZM12 10.0003C11.4479 10.0005 11 10.4481 11 11.0003C11.0002 11.5523 11.448 12.0001 12 12.0003C12.552 12 12.9998 11.5523 13 11.0003C13 10.4482 12.5521 10.0006 12 10.0003ZM3.99902 4.0003C3.4471 4.00063 2.99916 4.44834 2.99902 5.0003C2.99918 5.55225 3.44711 5.99998 3.99902 6.0003C4.55121 6.0003 4.99886 5.55245 4.99902 5.0003C4.99889 4.44814 4.55122 4.0003 3.99902 4.0003Z" fill="currentColor" style={{
      fill: "currentColor",
      fillOpacity: 1
    }} /></svg>;
});
export default IconGitCompare;
