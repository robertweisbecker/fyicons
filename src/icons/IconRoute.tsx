import * as React from 'react';
import type { IconProps } from './types';
const IconRoute = React.forwardRef<SVGSVGElement, IconProps>(function IconRoute(props, ref) {
  const idPrefix = React.useId().replace(/[^a-zA-Z0-9_-]/g, '') + '-';
  const {
    size = 16,
    color,
    title,
    ...svgProps
  } = props;
  return <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...svgProps} ref={ref} width={svgProps["width"] ?? size} height={svgProps["height"] ?? size} color={color} aria-labelledby={svgProps["aria-labelledby"] ?? (title ? idPrefix + "title" : undefined)} aria-label={svgProps["aria-label"] ?? title} role={svgProps["role"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? "img" : undefined)} aria-hidden={svgProps["aria-hidden"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? undefined : true)}>{title ? <title id={idPrefix + "title"}>{title}</title> : null}<path d="M4.50098 0.999634C5.71035 0.999634 6.71942 1.85867 6.95117 2.99963H10.25C11.7687 2.99963 12.9998 4.23102 13 5.74963C13 7.26842 11.7688 8.49963 10.25 8.49963H5.75C4.78362 8.49964 4.0002 9.28331 4 10.2496C4 11.2161 4.7835 11.9996 5.75 11.9996H9.0498C9.28156 10.8587 10.2906 9.99963 11.5 9.99963C12.8806 9.99963 13.9998 11.1191 14 12.4996C14 13.8803 12.8807 14.9996 11.5 14.9996C10.2904 14.9996 9.28129 14.1409 9.0498 12.9996H5.75C4.23122 12.9996 3 11.7684 3 10.2496C3.0002 8.73102 4.23134 7.49964 5.75 7.49963H10.25C11.2165 7.49963 12 6.71613 12 5.74963C11.9998 4.7833 11.2164 3.99963 10.25 3.99963H6.95117C6.71969 5.14095 5.71059 5.99963 4.50098 5.99963C3.12026 5.99963 2.00098 4.88035 2.00098 3.49963C2.00117 2.11909 3.12039 0.999634 4.50098 0.999634ZM11.5 10.9996C10.6717 10.9996 10.0002 11.6714 10 12.4996C10 13.3281 10.6716 13.9996 11.5 13.9996C12.3284 13.9996 13 13.3281 13 12.4996C12.9998 11.6714 12.3283 10.9996 11.5 10.9996ZM4.50098 1.99963C3.67267 1.99963 3.00117 2.67138 3.00098 3.49963C3.00098 4.32806 3.67255 4.99963 4.50098 4.99963C5.32757 4.99963 5.99704 4.33139 6 3.50549V3.4928C5.99612 2.66769 5.327 1.99963 4.50098 1.99963Z" fill="currentColor" style={{
      fill: "currentColor",
      fillOpacity: 1
    }} /></svg>;
});
export default IconRoute;
