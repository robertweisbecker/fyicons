import * as React from 'react';
import type { IconProps } from './types';
const IconHeartWide = React.forwardRef<SVGSVGElement, IconProps>(function IconHeartWide(props, ref) {
  const idPrefix = React.useId().replace(/[^a-zA-Z0-9_-]/g, '') + '-';
  const {
    size = 16,
    color,
    title,
    ...svgProps
  } = props;
  return <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...svgProps} ref={ref} width={svgProps["width"] ?? size} height={svgProps["height"] ?? size} color={color} aria-labelledby={svgProps["aria-labelledby"] ?? (title ? idPrefix + "title" : undefined)} aria-label={svgProps["aria-label"] ?? title} role={svgProps["role"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? "img" : undefined)} aria-hidden={svgProps["aria-hidden"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? undefined : true)}>{title ? <title id={idPrefix + "title"}>{title}</title> : null}<path d="M3.87012 2.26729C5.40901 1.8548 6.91474 2.41351 8 3.67549C9.08526 2.41351 10.591 1.8548 12.1299 2.26729C13.8512 2.72891 14.9999 4.27695 15 5.99971C14.9999 7.69518 14.1031 9.06004 12.8564 10.2839C11.6194 11.4982 9.94864 12.6561 8.30078 13.8991C8.12266 14.0333 7.87734 14.0333 7.69922 13.8991C6.05136 12.6561 4.38058 11.4982 3.14355 10.2839C1.89691 9.06004 1.00007 7.69518 1 5.99971C1.00014 4.27695 2.14884 2.72891 3.87012 2.26729ZM11.8701 3.23311C10.6167 2.89729 9.3212 3.41957 8.41602 4.77705C8.32327 4.91606 8.16712 4.99971 8 4.99971C7.83288 4.99971 7.67673 4.91606 7.58398 4.77705C6.6788 3.41957 5.38335 2.89729 4.12988 3.23311C2.85169 3.57574 2.00014 4.72291 2 5.99971C2.00007 7.3039 2.67809 8.42671 3.84375 9.571C4.94989 10.6568 6.41342 11.6893 8 12.8767C9.58658 11.6893 11.0501 10.6568 12.1562 9.571C13.3219 8.42671 13.9999 7.3039 14 5.99971C13.9999 4.72291 13.1483 3.57574 11.8701 3.23311Z" fill="currentColor" style={{
      fill: "currentColor",
      fillOpacity: 1
    }} /></svg>;
});
export default IconHeartWide;
