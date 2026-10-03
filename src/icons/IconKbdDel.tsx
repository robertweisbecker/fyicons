import * as React from 'react';
import type { IconProps } from './types';
const IconKbdDel = React.forwardRef<SVGSVGElement, IconProps>(function IconKbdDel(props, ref) {
  const idPrefix = React.useId().replace(/[^a-zA-Z0-9_-]/g, '') + '-';
  const {
    size = 16,
    color,
    title,
    ...svgProps
  } = props;
  return <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...svgProps} ref={ref} width={svgProps["width"] ?? size} height={svgProps["height"] ?? size} color={color} aria-labelledby={svgProps["aria-labelledby"] ?? (title ? idPrefix + "title" : undefined)} aria-label={svgProps["aria-label"] ?? title} role={svgProps["role"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? "img" : undefined)} aria-hidden={svgProps["aria-hidden"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? undefined : true)}>{title ? <title id={idPrefix + "title"}>{title}</title> : null}<path d="M12.4996 3C13.8802 3.00012 14.9996 4.11936 14.9996 5.5V10.5C14.9996 11.8806 13.8802 12.9999 12.4996 13H6.35702C5.67199 13 5.01647 12.7192 4.54452 12.2227L1.53768 9.05859C0.990045 8.4824 0.987134 7.57887 1.53085 6.99902L4.54159 3.79004C5.01417 3.28633 5.67413 3 6.36483 3H12.4996ZM6.36483 4C5.95054 4 5.55461 4.17158 5.27108 4.47363L2.26034 7.68262C2.0791 7.87581 2.07995 8.17704 2.26229 8.36914L5.2701 11.5332C5.55327 11.831 5.94607 12 6.35702 12H12.4996C13.3279 11.9999 13.9996 11.3284 13.9996 10.5V5.5C13.9996 4.67165 13.3279 4.00012 12.4996 4H6.36483ZM11.148 5.64648C11.3433 5.45122 11.6598 5.45122 11.8551 5.64648C12.0503 5.84175 12.0503 6.15825 11.8551 6.35352L10.2076 8L11.8541 9.64648C12.0493 9.84175 12.0493 10.1583 11.8541 10.3535C11.6588 10.5488 11.3423 10.5488 11.1471 10.3535L9.50057 8.70703L7.85506 10.3535C7.6598 10.5488 7.3433 10.5488 7.14803 10.3535C6.95277 10.1583 6.95277 9.84175 7.14803 9.64648L8.79354 8L7.14706 6.35352C6.95179 6.15825 6.95179 5.84175 7.14706 5.64648C7.34232 5.45122 7.65883 5.45122 7.85409 5.64648L9.50057 7.29297L11.148 5.64648Z" fill="currentColor" style={{
      fill: "currentColor",
      fillOpacity: 1
    }} /></svg>;
});
export default IconKbdDel;
