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
  return <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...svgProps} ref={ref} width={svgProps["width"] ?? size} height={svgProps["height"] ?? size} color={color} aria-labelledby={svgProps["aria-labelledby"] ?? (title ? idPrefix + "title" : undefined)} aria-label={svgProps["aria-label"] ?? title} role={svgProps["role"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? "img" : undefined)} aria-hidden={svgProps["aria-hidden"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? undefined : true)}>{title ? <title id={idPrefix + "title"}>{title}</title> : null}<path d="M5.14835 5.35376C5.46333 5.03877 6.00186 5.26182 6.00186 5.70727V10.2932C6.0016 10.7383 5.46329 10.9613 5.14835 10.6467L2.85538 8.35376C2.66015 8.15853 2.66022 7.842 2.85538 7.64673L5.14835 5.35376ZM10.0009 5.70727C10.0009 5.26182 10.5394 5.03877 10.8544 5.35376L13.1474 7.64673C13.3425 7.842 13.3426 8.15855 13.1474 8.35376L10.8544 10.6467C10.5395 10.9614 10.0012 10.7383 10.0009 10.2932V5.70727Z" fill="currentColor" style={{
      fill: "currentColor",
      fillOpacity: 1
    }} /></svg>;
});
export default IconCaretsX;
