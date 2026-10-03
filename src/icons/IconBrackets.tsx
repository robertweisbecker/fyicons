import * as React from 'react';
import type { IconProps } from './types';
const IconBrackets = React.forwardRef<SVGSVGElement, IconProps>(function IconBrackets(props, ref) {
  const idPrefix = React.useId().replace(/[^a-zA-Z0-9_-]/g, '') + '-';
  const {
    size = 16,
    color,
    title,
    ...svgProps
  } = props;
  return <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...svgProps} ref={ref} width={svgProps["width"] ?? size} height={svgProps["height"] ?? size} color={color} aria-labelledby={svgProps["aria-labelledby"] ?? (title ? idPrefix + "title" : undefined)} aria-label={svgProps["aria-label"] ?? title} role={svgProps["role"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? "img" : undefined)} aria-hidden={svgProps["aria-hidden"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? undefined : true)}>{title ? <title id={idPrefix + "title"}>{title}</title> : null}<path d="M5.4986 2C5.77455 2.00023 5.9986 2.224 5.9986 2.5C5.9986 2.776 5.77455 2.99977 5.4986 3H5.2486C4.69631 3 4.2486 3.44772 4.2486 4V4.91992C4.2486 6.25695 3.4625 7.45527 2.2652 8C3.4625 8.54473 4.2486 9.74305 4.2486 11.0801V12C4.2486 12.5523 4.69631 13 5.2486 13H5.4986C5.77455 13.0002 5.9986 13.224 5.9986 13.5C5.9986 13.776 5.77455 13.9998 5.4986 14H5.2486C4.14403 14 3.2486 13.1046 3.2486 12V11.0801C3.2486 10.0535 2.59151 9.14132 1.61774 8.81641C0.83315 8.55479 0.833148 7.44521 1.61774 7.18359C2.59151 6.85868 3.2486 5.94651 3.2486 4.91992V4C3.2486 2.89543 4.14403 2 5.2486 2H5.4986ZM11.0006 2C12.1051 2 13.0006 2.89543 13.0006 4V5.03711C13.0006 6.00527 13.6063 6.87031 14.5162 7.20117C15.2623 7.47262 15.2623 8.52738 14.5162 8.79883C13.6063 9.12969 13.0006 9.99473 13.0006 10.9629V12C13.0006 13.1046 12.1051 14 11.0006 14H10.5006C10.2244 14 10.0006 13.7761 10.0006 13.5C10.0006 13.2239 10.2244 13 10.5006 13H11.0006C11.5528 13 12.0006 12.5523 12.0006 12V10.9629C12.0006 9.69342 12.7275 8.54985 13.8492 8C12.7275 7.45015 12.0006 6.30658 12.0006 5.03711V4C12.0006 3.44772 11.5528 3 11.0006 3H10.5006C10.2244 3 10.0006 2.77614 10.0006 2.5C10.0006 2.22386 10.2244 2 10.5006 2H11.0006Z" fill="currentColor" style={{
      fill: "currentColor",
      fillOpacity: 1
    }} /></svg>;
});
export default IconBrackets;
