import * as React from 'react';
import type { IconProps } from './types';
const IconMoonFill = React.forwardRef<SVGSVGElement, IconProps>(function IconMoonFill(props, ref) {
  const idPrefix = React.useId().replace(/[^a-zA-Z0-9_-]/g, '') + '-';
  const {
    size = 16,
    color,
    title,
    ...svgProps
  } = props;
  return <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...svgProps} ref={ref} width={svgProps["width"] ?? size} height={svgProps["height"] ?? size} color={color} aria-labelledby={svgProps["aria-labelledby"] ?? (title ? idPrefix + "title" : undefined)} aria-label={svgProps["aria-label"] ?? title} role={svgProps["role"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? "img" : undefined)} aria-hidden={svgProps["aria-hidden"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? undefined : true)}>{title ? <title id={idPrefix + "title"}>{title}</title> : null}<path d="M6.99512 2.08553C7.20234 2.05067 7.409 2.14983 7.5127 2.3326C7.61629 2.51552 7.59448 2.744 7.45801 2.90389C6.86077 3.60303 6.50011 4.50864 6.5 5.49959C6.5 7.70873 8.29086 9.49959 10.5 9.49959C11.4911 9.49959 12.3962 9.13835 13.0957 8.54061C13.2554 8.40421 13.4841 8.3817 13.667 8.48494C13.8499 8.58852 13.9488 8.79624 13.9141 9.0035C13.4359 11.8389 10.9721 13.9996 8 13.9996C4.68629 13.9996 2 11.3133 2 7.99959C2.00023 5.02815 4.16042 2.56409 6.99512 2.08553Z" fill="currentColor" style={{
      fill: "currentColor",
      fillOpacity: 1
    }} /></svg>;
});
export default IconMoonFill;
