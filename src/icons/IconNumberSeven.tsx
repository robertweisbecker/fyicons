import * as React from 'react';
import type { IconProps } from './types';
const IconNumberSeven = React.forwardRef<SVGSVGElement, IconProps>(function IconNumberSeven(props, ref) {
  const idPrefix = React.useId().replace(/[^a-zA-Z0-9_-]/g, '') + '-';
  const {
    size = 16,
    color,
    title,
    ...svgProps
  } = props;
  return <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...svgProps} ref={ref} width={svgProps["width"] ?? size} height={svgProps["height"] ?? size} color={color} aria-labelledby={svgProps["aria-labelledby"] ?? (title ? idPrefix + "title" : undefined)} aria-label={svgProps["aria-label"] ?? title} role={svgProps["role"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? "img" : undefined)} aria-hidden={svgProps["aria-hidden"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? undefined : true)}>{title ? <title id={idPrefix + "title"}>{title}</title> : null}<path d="M11 2C12.6569 2 14 3.34315 14 5V11C14 12.6569 12.6569 14 11 14H5C3.34315 14 2 12.6569 2 11V5C2 3.34315 3.34315 2 5 2H11ZM5 3C3.89543 3 3 3.89543 3 5V11C3 12.1046 3.89543 13 5 13H11C12.1046 13 13 12.1046 13 11V5C13 3.89543 12.1046 3 11 3H5ZM9.5 4.99902C9.66563 4.99905 9.82101 5.08176 9.91406 5.21875C10.0069 5.35589 10.0251 5.53072 9.96387 5.68457L7.96484 10.6855C7.86231 10.9419 7.57086 11.0664 7.31445 10.9639C7.05844 10.8611 6.93372 10.5707 7.03613 10.3145L8.76172 5.99902H6.5C6.22389 5.99899 6 5.77515 6 5.49902C6.00053 5.22335 6.22421 4.99906 6.5 4.99902H9.5Z" fill="currentColor" style={{
      fill: "currentColor",
      fillOpacity: 1
    }} /></svg>;
});
export default IconNumberSeven;
