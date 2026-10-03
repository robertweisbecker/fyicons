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
  return <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...svgProps} ref={ref} width={svgProps["width"] ?? size} height={svgProps["height"] ?? size} color={color} aria-labelledby={svgProps["aria-labelledby"] ?? (title ? idPrefix + "title" : undefined)} aria-label={svgProps["aria-label"] ?? title} role={svgProps["role"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? "img" : undefined)} aria-hidden={svgProps["aria-hidden"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? undefined : true)}>{title ? <title id={idPrefix + "title"}>{title}</title> : null}<path d="M9.85266 3.14669C9.6574 2.95143 9.34089 2.95143 9.14563 3.14669L4.64563 7.64669C4.45054 7.84197 4.45043 8.15852 4.64563 8.35372L9.14563 12.8537C9.34085 13.0488 9.65744 13.0488 9.85266 12.8537C10.0479 12.6585 10.0478 12.342 9.85266 12.1467L5.70618 8.00021L9.85266 3.85372C10.0479 3.65852 10.0478 3.34197 9.85266 3.14669Z" fill="currentColor" style={{
      fill: "currentColor",
      fillOpacity: 1
    }} /></svg>;
});
export default IconChevronLeft;
