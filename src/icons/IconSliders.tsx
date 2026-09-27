import * as React from 'react';
import type { IconProps } from './types';
const IconSliders = React.forwardRef<SVGSVGElement, IconProps>(function IconSliders(props, ref) {
  const idPrefix = React.useId().replace(/[^a-zA-Z0-9_-]/g, '') + '-';
  const {
    size = 16,
    color,
    title,
    ...svgProps
  } = props;
  return <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...svgProps} ref={ref} width={svgProps["width"] ?? size} height={svgProps["height"] ?? size} color={color} aria-labelledby={svgProps["aria-labelledby"] ?? (title ? idPrefix + "title" : undefined)} aria-label={svgProps["aria-label"] ?? title} role={svgProps["role"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? "img" : undefined)} aria-hidden={svgProps["aria-hidden"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? undefined : true)}>{title ? <title id={idPrefix + "title"}>{title}</title> : null}<path d="M9.5 9C10.7095 9 11.7186 9.85886 11.9502 11H13.498C13.7742 11 13.998 11.2239 13.998 11.5C13.998 11.7761 13.7742 12 13.498 12H11.9502C11.7186 13.1411 10.7095 14 9.5 14C8.29051 14 7.28142 13.1411 7.0498 12H2.5C2.22386 12 2 11.7761 2 11.5C2 11.2239 2.22386 11 2.5 11H7.0498C7.28142 9.85886 8.29051 9 9.5 9ZM9.5 10C8.67157 10 8 10.6716 8 11.5C8 12.3284 8.67157 13 9.5 13C10.3284 13 11 12.3284 11 11.5C11 10.6716 10.3284 10 9.5 10ZM6.5 2C7.71082 2 8.72003 2.8609 8.9502 4.00391C8.96631 4.00234 8.9825 4 8.99902 4H13.499C13.7752 4 13.999 4.22386 13.999 4.5C13.999 4.77614 13.7752 5 13.499 5H8.99902C8.98247 5 8.96634 4.99669 8.9502 4.99512C8.72039 6.13859 7.71115 7 6.5 7C5.29051 7 4.28142 6.14114 4.0498 5H2.5C2.22386 5 2 4.77614 2 4.5C2 4.22386 2.22386 4 2.5 4H4.0498C4.28142 2.85886 5.29051 2 6.5 2ZM6.5 3C5.67157 3 5 3.67157 5 4.5C5 5.32843 5.67157 6 6.5 6C7.32843 6 8 5.32843 8 4.5C8 3.67157 7.32843 3 6.5 3Z" fill="currentColor" style={{
      fill: "currentColor",
      fillOpacity: 1
    }} /></svg>;
});
export default IconSliders;
