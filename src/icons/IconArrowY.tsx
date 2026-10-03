import * as React from 'react';
import type { IconProps } from './types';
const IconArrowY = React.forwardRef<SVGSVGElement, IconProps>(function IconArrowY(props, ref) {
  const idPrefix = React.useId().replace(/[^a-zA-Z0-9_-]/g, '') + '-';
  const {
    size = 16,
    color,
    title,
    ...svgProps
  } = props;
  return <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...svgProps} ref={ref} width={svgProps["width"] ?? size} height={svgProps["height"] ?? size} color={color} aria-labelledby={svgProps["aria-labelledby"] ?? (title ? idPrefix + "title" : undefined)} aria-label={svgProps["aria-label"] ?? title} role={svgProps["role"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? "img" : undefined)} aria-hidden={svgProps["aria-hidden"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? undefined : true)}>{title ? <title id={idPrefix + "title"}>{title}</title> : null}<path d="M7.99987 1.50024C8.13244 1.50026 8.25964 1.55301 8.35339 1.64673L10.8534 4.14673C11.0483 4.34201 11.0485 4.65863 10.8534 4.85376C10.6583 5.04884 10.3416 5.04861 10.1464 4.85376L8.4989 3.2063V11.7942L10.1464 10.1477C10.3416 9.9528 10.6582 9.95269 10.8534 10.1477C11.0484 10.343 11.0486 10.6605 10.8534 10.8557L8.35437 13.3538C8.26064 13.4474 8.13331 13.5002 8.00085 13.5002C7.90153 13.5002 7.80495 13.4705 7.72351 13.4163L7.64734 13.3538L5.14831 10.8538C4.95312 10.6585 4.95316 10.342 5.14831 10.1467C5.34358 9.95151 5.6601 9.95149 5.85534 10.1467L7.4989 11.7913V3.20825L5.85437 4.85376C5.65918 5.04877 5.34257 5.04871 5.14734 4.85376C4.95215 4.65855 4.95223 4.342 5.14734 4.14673L7.64636 1.64673L7.72253 1.58423C7.80402 1.52991 7.9005 1.50027 7.99987 1.50024Z" fill="currentColor" style={{
      fill: "currentColor",
      fillOpacity: 1
    }} /></svg>;
});
export default IconArrowY;
