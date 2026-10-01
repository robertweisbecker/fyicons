import * as React from 'react';
import type { IconProps } from './types';
const IconChevronLeft = React.forwardRef<SVGSVGElement, IconProps>(function IconChevronLeft(props, ref) {
  const idPrefix = React.useId().replace(/[^a-zA-Z0-9_-]/g, '') + '-';
  const {
    size = 16,
    color,
    title,
    ...svgProps
  } = props;
  return <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...svgProps} ref={ref} width={svgProps["width"] ?? size} height={svgProps["height"] ?? size} color={color} aria-labelledby={svgProps["aria-labelledby"] ?? (title ? idPrefix + "title" : undefined)} aria-label={svgProps["aria-label"] ?? title} role={svgProps["role"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? "img" : undefined)} aria-hidden={svgProps["aria-hidden"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? undefined : true)}>{title ? <title id={idPrefix + "title"}>{title}</title> : null}<path d="M9.85266 3.14681C9.6574 2.95155 9.34089 2.95155 9.14563 3.14681L4.64563 7.64681C4.45054 7.84209 4.45043 8.15864 4.64563 8.35384L9.14563 12.8538C9.34085 13.0489 9.65744 13.0489 9.85266 12.8538C10.0479 12.6586 10.0478 12.3421 9.85266 12.1468L5.70618 8.00033L9.85266 3.85384C10.0479 3.65864 10.0478 3.34209 9.85266 3.14681Z" fill="currentColor" style={{
      fill: "currentColor",
      fillOpacity: 1
    }} /></svg>;
});
export default IconChevronLeft;
