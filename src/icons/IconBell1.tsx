import * as React from 'react';
import type { IconProps } from './types';
const IconBell1 = React.forwardRef<SVGSVGElement, IconProps>(function IconBell1(props, ref) {
  const idPrefix = React.useId().replace(/[^a-zA-Z0-9_-]/g, '') + '-';
  const {
    size = 16,
    color,
    title,
    ...svgProps
  } = props;
  return <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...svgProps} ref={ref} width={svgProps["width"] ?? size} height={svgProps["height"] ?? size} color={color} aria-labelledby={svgProps["aria-labelledby"] ?? (title ? idPrefix + "title" : undefined)} aria-label={svgProps["aria-label"] ?? title} role={svgProps["role"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? "img" : undefined)} aria-hidden={svgProps["aria-hidden"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? undefined : true)}>{title ? <title id={idPrefix + "title"}>{title}</title> : null}<path d="M8.00064 1C8.55293 1 9.00064 1.44772 9.00064 2V3.12305C10.7809 3.56979 12.0991 5.18075 12.0993 7.09961V7.98535C12.0994 8.91264 12.4232 9.81097 13.0143 10.5254L13.7379 11.3994C14.2651 12.0365 13.8119 12.9999 12.985 13H9.50064V13.5C9.50064 14.3284 8.82907 15 8.00064 15C7.17221 15 6.50064 14.3284 6.50064 13.5V13H3.01431C2.18733 13 1.73412 12.0365 2.26138 11.3994L2.98502 10.5254C3.57615 9.81098 3.89994 8.91262 3.90006 7.98535V7.09961C3.90023 5.17993 5.21922 3.56802 7.00064 3.12207V2C7.00064 1.44773 7.44838 1.00002 8.00064 1ZM7.99966 4C6.28771 4 4.90027 5.38771 4.90006 7.09961V7.98535C4.89994 9.1454 4.49508 10.2693 3.75552 11.1631L3.06216 12H12.9372L12.2438 11.1631C11.5042 10.2693 11.0994 9.14542 11.0993 7.98535V7.09961C11.0991 5.38774 9.71157 4.00006 7.99966 4Z" fill="currentColor" style={{
      fill: "currentColor",
      fillOpacity: 1
    }} /></svg>;
});
export default IconBell1;
