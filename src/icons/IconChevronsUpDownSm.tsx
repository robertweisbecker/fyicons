import * as React from 'react';
import type { IconProps } from './types';
const IconChevronsUpDownSm = React.forwardRef<SVGSVGElement, IconProps>(function IconChevronsUpDownSm(props, ref) {
  const idPrefix = React.useId().replace(/[^a-zA-Z0-9_-]/g, '') + '-';
  const {
    size = 16,
    color,
    title,
    ...svgProps
  } = props;
  return <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...svgProps} ref={ref} width={svgProps["width"] ?? size} height={svgProps["height"] ?? size} color={color} aria-labelledby={svgProps["aria-labelledby"] ?? (title ? idPrefix + "title" : undefined)} aria-label={svgProps["aria-label"] ?? title} role={svgProps["role"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? "img" : undefined)} aria-hidden={svgProps["aria-hidden"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? undefined : true)}>{title ? <title id={idPrefix + "title"}>{title}</title> : null}<path d="M9.64634 9.64643C9.84156 9.45121 10.1581 9.4513 10.3534 9.64643C10.5486 9.84169 10.5486 10.1582 10.3534 10.3535L8.35338 12.3535C8.15811 12.5487 7.84158 12.5487 7.64634 12.3535L5.64634 10.3535C5.45124 10.1582 5.4512 9.84166 5.64634 9.64643C5.84156 9.45122 6.1581 9.4513 6.35338 9.64643L7.99986 11.2929L9.64634 9.64643ZM7.64732 3.64643C7.84259 3.45132 8.15914 3.45122 8.35435 3.64643L10.3544 5.64643C10.5495 5.84165 10.5494 6.15822 10.3544 6.35346C10.1591 6.54869 9.84259 6.54863 9.64732 6.35346L8.00084 4.70698L6.35435 6.35346C6.15912 6.54869 5.84259 6.54863 5.64732 6.35346C5.45206 6.1582 5.45206 5.84169 5.64732 5.64643L7.64732 3.64643Z" fill="currentColor" style={{
      fill: "currentColor",
      fillOpacity: 1
    }} /></svg>;
});
export default IconChevronsUpDownSm;
