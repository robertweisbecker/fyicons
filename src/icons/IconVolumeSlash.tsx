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
  return <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...svgProps} ref={ref} width={svgProps["width"] ?? size} height={svgProps["height"] ?? size} color={color} aria-labelledby={svgProps["aria-labelledby"] ?? (title ? idPrefix + "title" : undefined)} aria-label={svgProps["aria-label"] ?? title} role={svgProps["role"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? "img" : undefined)} aria-hidden={svgProps["aria-hidden"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? undefined : true)}>{title ? <title id={idPrefix + "title"}>{title}</title> : null}<path d="M2.14641 2.14693C2.34167 1.95167 2.65818 1.95167 2.85344 2.14693L6.20696 5.50045H6.31145L8.92668 3.21236C9.73472 2.50573 10.9993 3.07951 10.9999 4.15279V10.2934L13.8534 13.1469C14.0483 13.3422 14.0486 13.6588 13.8534 13.854C13.6583 14.049 13.3417 14.0488 13.1464 13.854L10.9999 11.7075V11.8471C10.9999 12.9211 9.73491 13.4956 8.92668 12.7885L6.31242 10.5005H4.49992C3.67153 10.5005 2.99997 9.82885 2.99992 9.00045V7.00045C3.00016 6.17227 3.67169 5.50052 4.49992 5.50045H4.79289L2.14641 2.85397C1.95117 2.65873 1.95122 2.3422 2.14641 2.14693ZM4.49992 6.50045C4.22394 6.50047 4.00016 6.72452 3.99992 7.00045V9.00045C3.99997 9.27656 4.22381 9.50045 4.49992 9.50045H6.49992L6.58977 9.50826C6.67779 9.52434 6.76079 9.56394 6.82903 9.6235L9.58489 12.0356C9.74653 12.1771 9.99992 12.0619 9.99992 11.8471V10.7075L5.79289 6.50045H4.49992ZM9.99992 4.15279C9.99927 3.93866 9.74633 3.82438 9.58489 3.96529L6.96379 6.25729L9.99992 9.29342V4.15279Z" fill="currentColor" style={{
      fill: "currentColor",
      fillOpacity: 1
    }} /></svg>;
});
export default IconVolumeSlash;
