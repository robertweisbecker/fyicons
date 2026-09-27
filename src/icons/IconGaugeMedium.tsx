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
  return <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...svgProps} ref={ref} width={svgProps["width"] ?? size} height={svgProps["height"] ?? size} color={color} aria-labelledby={svgProps["aria-labelledby"] ?? (title ? idPrefix + "title" : undefined)} aria-label={svgProps["aria-label"] ?? title} role={svgProps["role"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? "img" : undefined)} aria-hidden={svgProps["aria-hidden"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? undefined : true)}>{title ? <title id={idPrefix + "title"}>{title}</title> : null}<path d="M7.99964 1C9.38392 1 10.7373 1.41073 11.8883 2.17969C13.0394 2.94882 13.9366 4.04229 14.4664 5.32129C14.9962 6.60027 15.1349 8.00747 14.8649 9.36523C14.5948 10.7231 13.9288 11.9712 12.9498 12.9502C12.7546 13.1453 12.437 13.1454 12.2418 12.9502C12.0468 12.755 12.0468 12.4374 12.2418 12.2422C13.0808 11.4032 13.6528 10.3346 13.8844 9.1709C14.1159 8.00703 13.9967 6.80044 13.5426 5.7041C13.0885 4.6078 12.3193 3.67001 11.3327 3.01074C10.3461 2.35177 9.18603 2 7.99964 2C6.81328 2.00007 5.65312 2.35173 4.66663 3.01074C3.68006 3.67002 2.91076 4.60784 2.45667 5.7041C2.00262 6.80039 1.8834 8.0071 2.11488 9.1709C2.34641 10.3346 2.91852 11.4032 3.75746 12.2422C3.95272 12.4374 3.95271 12.7549 3.75746 12.9502C3.56218 13.1453 3.24465 13.1454 3.04945 12.9502C2.07058 11.9713 1.40449 10.723 1.13441 9.36523C0.864428 8.00754 1.00313 6.60021 1.53285 5.32129C2.06262 4.04233 2.95997 2.94884 4.11097 2.17969C5.26196 1.41068 6.61539 1.00007 7.99964 1ZM7.99964 5C8.27578 5 8.49964 5.22386 8.49964 5.5V9.13379C8.79862 9.30669 8.99957 9.62984 8.99964 10C8.99953 10.5522 8.55186 11 7.99964 11C7.44762 10.9998 6.99976 10.552 6.99964 10C6.99972 9.6301 7.20101 9.30678 7.49964 9.13379V5.5C7.49964 5.22398 7.72367 5.0002 7.99964 5Z" fill="currentColor" style={{
      fill: "currentColor",
      fillOpacity: 1
    }} /></svg>;
});
export default IconGaugeMedium;
