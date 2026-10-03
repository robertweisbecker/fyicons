import * as React from 'react';
import type { IconProps } from './types';
const IconThumbsDownFill = React.forwardRef<SVGSVGElement, IconProps>(function IconThumbsDownFill(props, ref) {
  const idPrefix = React.useId().replace(/[^a-zA-Z0-9_-]/g, '') + '-';
  const {
    size = 16,
    color,
    title,
    ...svgProps
  } = props;
  return <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...svgProps} ref={ref} width={svgProps["width"] ?? size} height={svgProps["height"] ?? size} color={color} aria-labelledby={svgProps["aria-labelledby"] ?? (title ? idPrefix + "title" : undefined)} aria-label={svgProps["aria-label"] ?? title} role={svgProps["role"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? "img" : undefined)} aria-hidden={svgProps["aria-hidden"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? undefined : true)}>{title ? <title id={idPrefix + "title"}>{title}</title> : null}<path d="M7.29688 12.0088C6.99186 12.8147 7.04109 14.1684 6.10059 13.9824C4.62986 13.7441 4.90273 11.0368 5.11426 9.99609H3.61719C2.74929 9.99609 2.04601 9.2925 2.0459 8.4248C2.0459 8.13225 2.11409 7.85668 2.23047 7.60938C2.08528 7.35461 2 7.06059 2 6.74609C2.00001 6.23836 2.21885 5.78538 2.5625 5.4668C2.55303 5.39502 2.5459 5.32154 2.5459 5.24609C2.54591 4.73875 2.76486 4.28689 3.10742 3.96875C3.09799 3.89589 3.09082 3.82176 3.09082 3.74609C3.09084 2.77961 3.87433 1.99609 4.84082 1.99609H5.25L5.95117 1.99512C5.96257 1.99512 5.97396 1.99602 5.98535 1.99609H6.11328V2C6.42358 2.01007 6.73283 2.04686 7.03613 2.11426L7.52246 2.22266C8.30742 2.39709 8.98984 2.87964 9.41602 3.56152L9.79199 4.16309C9.92762 4.38009 9.99986 4.63083 10 4.88672L10.001 7.46582C10.0011 7.98214 9.97107 8.54139 9.62109 8.9209C9.27332 9.29771 8.47498 10.0394 7.88867 10.7451C7.59176 11.1026 7.43503 11.6892 7.29688 12.0088ZM11.5 8.125C11.224 8.12485 11 7.90105 11 7.625V4.55078C11 4.26421 10.9328 3.98144 10.8037 3.72559C10.7256 3.57071 10.7334 3.38606 10.8242 3.23828C10.9152 3.09047 11.0764 3.00006 11.25 3H12.0557C12.2416 3 12.4646 3.0342 12.6748 3.15723C13.0899 3.40028 14 4.09862 14 5.5C14 6.84962 13.1536 7.6147 12.7402 7.90723C12.5058 8.07303 12.2406 8.12496 12.0127 8.125H11.5Z" fill="currentColor" style={{
      fill: "currentColor",
      fillOpacity: 1
    }} /></svg>;
});
export default IconThumbsDownFill;
