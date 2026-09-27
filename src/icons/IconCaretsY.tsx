import * as React from 'react';
import type { IconProps } from './types';
const IconCaretsY = React.forwardRef<SVGSVGElement, IconProps>(function IconCaretsY(props, ref) {
  const idPrefix = React.useId().replace(/[^a-zA-Z0-9_-]/g, '') + '-';
  const {
    size = 16,
    color,
    title,
    ...svgProps
  } = props;
  return <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...svgProps} ref={ref} width={svgProps["width"] ?? size} height={svgProps["height"] ?? size} color={color} aria-labelledby={svgProps["aria-labelledby"] ?? (title ? idPrefix + "title" : undefined)} aria-label={svgProps["aria-label"] ?? title} role={svgProps["role"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? "img" : undefined)} aria-hidden={svgProps["aria-hidden"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? undefined : true)}>{title ? <title id={idPrefix + "title"}>{title}</title> : null}<path d="M10.2929 8.99994C10.7383 9 10.9613 9.53849 10.6464 9.85346L8.35347 12.1464C8.15821 12.3416 7.84169 12.3416 7.64643 12.1464L5.35347 9.85346C5.03856 9.53849 5.2616 9 5.70698 8.99994H10.2929ZM7.64643 3.85346C7.84169 3.65823 8.15821 3.65822 8.35347 3.85346L10.6464 6.14642C10.9613 6.46139 10.7383 6.99987 10.2929 6.99994H5.70698C5.26159 6.99989 5.03857 6.4614 5.35347 6.14642L7.64643 3.85346Z" fill="currentColor" style={{
      fill: "currentColor",
      fillOpacity: 1
    }} /></svg>;
});
export default IconCaretsY;
