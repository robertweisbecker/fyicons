import * as React from 'react';
import type { IconProps } from './types';
const IconSendFill = React.forwardRef<SVGSVGElement, IconProps>(function IconSendFill(props, ref) {
  const idPrefix = React.useId().replace(/[^a-zA-Z0-9_-]/g, '') + '-';
  const {
    size = 16,
    color,
    title,
    ...svgProps
  } = props;
  return <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...svgProps} ref={ref} width={svgProps["width"] ?? size} height={svgProps["height"] ?? size} color={color} aria-labelledby={svgProps["aria-labelledby"] ?? (title ? idPrefix + "title" : undefined)} aria-label={svgProps["aria-label"] ?? title} role={svgProps["role"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? "img" : undefined)} aria-hidden={svgProps["aria-hidden"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? undefined : true)}>{title ? <title id={idPrefix + "title"}>{title}</title> : null}<path d="M1.91776 3.82348C1.44381 2.54279 2.78886 1.34637 4.00565 1.96606L13.2264 6.66332C14.3185 7.2197 14.3185 8.78077 13.2264 9.33715L4.00565 14.0344C2.78898 14.6539 1.44409 13.4575 1.91776 12.177L2.91581 9.47973C3.13358 8.89121 3.69457 8.50042 4.32206 8.50024H8.49687C8.77295 8.50024 8.99677 8.27629 8.99687 8.00024C8.99687 7.72409 8.77301 7.50024 8.49687 7.50024H4.32206C3.69457 7.50005 3.13358 7.10926 2.91581 6.52074L1.91776 3.82348Z" fill="currentColor" style={{
      fill: "currentColor",
      fillOpacity: 1
    }} /></svg>;
});
export default IconSendFill;
