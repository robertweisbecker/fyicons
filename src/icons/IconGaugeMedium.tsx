import * as React from 'react';
import type { IconProps } from './types';
const IconGaugeMedium = React.forwardRef<SVGSVGElement, IconProps>(function IconGaugeMedium(props, ref) {
  const idPrefix = React.useId().replace(/[^a-zA-Z0-9_-]/g, '') + '-';
  const {
    size = 16,
    color,
    title,
    ...svgProps
  } = props;
  return <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...svgProps} ref={ref} width={svgProps["width"] ?? size} height={svgProps["height"] ?? size} color={color} aria-labelledby={svgProps["aria-labelledby"] ?? (title ? idPrefix + "title" : undefined)} aria-label={svgProps["aria-label"] ?? title} role={svgProps["role"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? "img" : undefined)} aria-hidden={svgProps["aria-hidden"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? undefined : true)}>{title ? <title id={idPrefix + "title"}>{title}</title> : null}<path d="M7.99964 2C9.38392 2 10.7373 2.41073 11.8883 3.17969C13.0394 3.94882 13.9366 5.04229 14.4664 6.32129C14.9962 7.60027 15.1349 9.00747 14.8649 10.3652C14.5948 11.7231 13.9288 12.9712 12.9498 13.9502C12.7546 14.1453 12.437 14.1454 12.2418 13.9502C12.0468 13.755 12.0468 13.4374 12.2418 13.2422C13.0808 12.4032 13.6528 11.3346 13.8844 10.1709C14.1159 9.00703 13.9967 7.80044 13.5426 6.7041C13.0885 5.6078 12.3193 4.67001 11.3327 4.01074C10.3461 3.35177 9.18603 3 7.99964 3C6.81328 3.00007 5.65312 3.35173 4.66663 4.01074C3.68006 4.67002 2.91076 5.60784 2.45667 6.7041C2.00262 7.80039 1.8834 9.0071 2.11488 10.1709C2.34641 11.3346 2.91852 12.4032 3.75746 13.2422C3.95272 13.4374 3.95271 13.7549 3.75746 13.9502C3.56218 14.1453 3.24465 14.1454 3.04945 13.9502C2.07058 12.9713 1.40449 11.723 1.13441 10.3652C0.864428 9.00754 1.00313 7.60021 1.53285 6.32129C2.06262 5.04233 2.95997 3.94884 4.11097 3.17969C5.26196 2.41068 6.61539 2.00007 7.99964 2ZM7.99964 6C8.27578 6 8.49964 6.22386 8.49964 6.5V10.1338C8.79862 10.3067 8.99957 10.6298 8.99964 11C8.99953 11.5522 8.55186 12 7.99964 12C7.44762 11.9998 6.99976 11.552 6.99964 11C6.99972 10.6301 7.20101 10.3068 7.49964 10.1338V6.5C7.49964 6.22398 7.72367 6.0002 7.99964 6Z" fill="currentColor" style={{
      fill: "currentColor",
      fillOpacity: 1
    }} /></svg>;
});
export default IconGaugeMedium;
