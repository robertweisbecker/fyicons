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
  return <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...svgProps} ref={ref} width={svgProps["width"] ?? size} height={svgProps["height"] ?? size} color={color} aria-labelledby={svgProps["aria-labelledby"] ?? (title ? idPrefix + "title" : undefined)} aria-label={svgProps["aria-label"] ?? title} role={svgProps["role"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? "img" : undefined)} aria-hidden={svgProps["aria-hidden"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? undefined : true)}>{title ? <title id={idPrefix + "title"}>{title}</title> : null}<path d="M10.2929 9.99995C10.7383 10 10.9614 10.5385 10.6465 10.8535L8.35349 13.1464C8.15824 13.3416 7.8417 13.3416 7.64646 13.1464L5.35349 10.8535C5.03853 10.5385 5.26161 10 5.707 9.99995H10.2929ZM7.64646 2.85347C7.84172 2.65822 8.15823 2.65821 8.35349 2.85347L10.6465 5.14644C10.9613 5.46141 10.7383 5.99985 10.2929 5.99995H5.707C5.2616 5.99993 5.0386 5.46142 5.35349 5.14644L7.64646 2.85347Z" fill="currentColor" style={{
      fill: "currentColor",
      fillOpacity: 1
    }} /></svg>;
});
export default IconCaretsY;
