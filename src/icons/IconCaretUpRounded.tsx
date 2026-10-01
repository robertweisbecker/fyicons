import * as React from 'react';
import type { IconProps } from './types';
const IconCaretUpRounded = React.forwardRef<SVGSVGElement, IconProps>(function IconCaretUpRounded(props, ref) {
  const idPrefix = React.useId().replace(/[^a-zA-Z0-9_-]/g, '') + '-';
  const {
    size = 16,
    color,
    title,
    ...svgProps
  } = props;
  return <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...svgProps} ref={ref} width={svgProps["width"] ?? size} height={svgProps["height"] ?? size} color={color} aria-labelledby={svgProps["aria-labelledby"] ?? (title ? idPrefix + "title" : undefined)} aria-label={svgProps["aria-label"] ?? title} role={svgProps["role"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? "img" : undefined)} aria-hidden={svgProps["aria-hidden"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? undefined : true)}>{title ? <title id={idPrefix + "title"}>{title}</title> : null}<path d="M7.43396 5.38534C7.73274 5.0442 8.2641 5.0442 8.56287 5.38534L11.5121 8.75546C11.9364 9.24036 11.5919 9.99948 10.9476 9.9996H5.0492C4.44505 9.99948 4.10463 9.33215 4.41443 8.84921L4.48475 8.75546L7.43396 5.38534Z" fill="currentColor" style={{
      fill: "currentColor",
      fillOpacity: 1
    }} /></svg>;
});
export default IconCaretUpRounded;
