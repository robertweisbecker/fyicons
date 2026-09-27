import * as React from 'react';
import type { IconProps } from './types';
const IconCaretsX = React.forwardRef<SVGSVGElement, IconProps>(function IconCaretsX(props, ref) {
  const idPrefix = React.useId().replace(/[^a-zA-Z0-9_-]/g, '') + '-';
  const {
    size = 16,
    color,
    title,
    ...svgProps
  } = props;
  return <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...svgProps} ref={ref} width={svgProps["width"] ?? size} height={svgProps["height"] ?? size} color={color} aria-labelledby={svgProps["aria-labelledby"] ?? (title ? idPrefix + "title" : undefined)} aria-label={svgProps["aria-label"] ?? title} role={svgProps["role"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? "img" : undefined)} aria-hidden={svgProps["aria-hidden"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? undefined : true)}>{title ? <title id={idPrefix + "title"}>{title}</title> : null}<path d="M6.14835 5.35379C6.46333 5.03881 7.00186 5.26185 7.00186 5.7073V10.2932C7.0016 10.7384 6.46329 10.9613 6.14835 10.6468L3.85538 8.35379C3.66015 8.15856 3.66022 7.84203 3.85538 7.64676L6.14835 5.35379ZM9.00089 5.7073C9.00089 5.26185 9.53942 5.03881 9.8544 5.35379L12.1474 7.64676C12.3425 7.84203 12.3426 8.15858 12.1474 8.35379L9.8544 10.6468C9.53948 10.9614 9.00117 10.7384 9.00089 10.2932V5.7073Z" fill="currentColor" style={{
      fill: "currentColor",
      fillOpacity: 1
    }} /></svg>;
});
export default IconCaretsX;
