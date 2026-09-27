import * as React from 'react';
import type { IconProps } from './types';
const IconVolumeSlash = React.forwardRef<SVGSVGElement, IconProps>(function IconVolumeSlash(props, ref) {
  const idPrefix = React.useId().replace(/[^a-zA-Z0-9_-]/g, '') + '-';
  const {
    size = 16,
    color,
    title,
    ...svgProps
  } = props;
  return <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...svgProps} ref={ref} width={svgProps["width"] ?? size} height={svgProps["height"] ?? size} color={color} aria-labelledby={svgProps["aria-labelledby"] ?? (title ? idPrefix + "title" : undefined)} aria-label={svgProps["aria-label"] ?? title} role={svgProps["role"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? "img" : undefined)} aria-hidden={svgProps["aria-hidden"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? undefined : true)}>{title ? <title id={idPrefix + "title"}>{title}</title> : null}<path d="M2.14643 2.14681C2.34169 1.95155 2.6582 1.95155 2.85346 2.14681L6.20697 5.50033H6.31147L8.9267 3.21224C9.73472 2.50568 10.9992 3.07947 10.9999 4.15267V10.2933L13.8535 13.1468C14.0484 13.3421 14.0486 13.6587 13.8535 13.8538C13.6583 14.0489 13.3417 14.0487 13.1464 13.8538L10.9999 11.7074V11.847C10.9999 12.9209 9.73492 13.4955 8.9267 12.7884L6.31244 10.5003H4.49994C3.67155 10.5003 2.99999 9.82873 2.99994 9.00033V7.00033C3.00022 6.17219 3.67174 5.5004 4.49994 5.50033H4.79291L2.14643 2.85384C1.95118 2.65859 1.9512 2.34208 2.14643 2.14681ZM4.49994 6.50033C4.22399 6.50035 4.00022 6.72444 3.99994 7.00033V9.00033C3.99999 9.27644 4.22383 9.50033 4.49994 9.50033H6.49994L6.58979 9.50814C6.67778 9.52422 6.76082 9.56384 6.82904 9.62338L9.5849 12.0355C9.74655 12.1769 9.99994 12.0618 9.99994 11.847V10.7074L5.79291 6.50033H4.49994ZM9.99994 4.15267C9.99922 3.93861 9.74633 3.82434 9.5849 3.96517L6.96381 6.25716L9.99994 9.2933V4.15267Z" fill="currentColor" style={{
      fill: "currentColor",
      fillOpacity: 1
    }} /></svg>;
});
export default IconVolumeSlash;
