import * as React from 'react';
import type { IconProps } from './types';
const IconEject = React.forwardRef<SVGSVGElement, IconProps>(function IconEject(props, ref) {
  const idPrefix = React.useId().replace(/[^a-zA-Z0-9_-]/g, '') + '-';
  const {
    size = 16,
    color,
    title,
    ...svgProps
  } = props;
  return <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...svgProps} ref={ref} width={svgProps["width"] ?? size} height={svgProps["height"] ?? size} color={color} aria-labelledby={svgProps["aria-labelledby"] ?? (title ? idPrefix + "title" : undefined)} aria-label={svgProps["aria-label"] ?? title} role={svgProps["role"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? "img" : undefined)} aria-hidden={svgProps["aria-hidden"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? undefined : true)}>{title ? <title id={idPrefix + "title"}>{title}</title> : null}<path d="M12.5001 9.99986C13.3283 10.0001 14 10.6717 14.0001 11.4999V12.4999C14.0001 13.3281 13.3283 13.9996 12.5001 13.9999H3.50013C2.6717 13.9999 2.00013 13.3283 2.00013 12.4999V11.4999C2.00021 10.6715 2.67175 9.99986 3.50013 9.99986H12.5001ZM3.50013 10.9999C3.22403 10.9999 3.00021 11.2238 3.00013 11.4999V12.4999C3.00013 12.776 3.22398 12.9999 3.50013 12.9999H12.5001C12.7761 12.9996 13.0001 12.7758 13.0001 12.4999V11.4999C13 11.2239 12.776 11.0001 12.5001 10.9999H3.50013ZM7.1681 2.3231C7.64232 1.89988 8.35896 1.8998 8.83313 2.3231L13.8663 6.81724C14.7226 7.5818 14.1822 8.99967 13.0343 8.99986H2.96595C1.81811 8.99962 1.27762 7.58178 2.13392 6.81724L7.1681 2.3231ZM8.16712 3.06919C8.07232 2.98462 7.92894 2.98466 7.83411 3.06919L2.79993 7.56333C2.62873 7.71619 2.73654 7.99962 2.96595 7.99986H13.0343C13.2638 7.99967 13.3715 7.7162 13.2003 7.56333L8.16712 3.06919Z" fill="currentColor" style={{
      fill: "currentColor",
      fillOpacity: 1
    }} /></svg>;
});
export default IconEject;
