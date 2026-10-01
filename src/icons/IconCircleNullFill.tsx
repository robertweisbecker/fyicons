import * as React from 'react';
import type { IconProps } from './types';
const IconCircleNullFill = React.forwardRef<SVGSVGElement, IconProps>(function IconCircleNullFill(props, ref) {
  const idPrefix = React.useId().replace(/[^a-zA-Z0-9_-]/g, '') + '-';
  const {
    size = 16,
    color,
    title,
    ...svgProps
  } = props;
  return <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...svgProps} ref={ref} width={svgProps["width"] ?? size} height={svgProps["height"] ?? size} color={color} aria-labelledby={svgProps["aria-labelledby"] ?? (title ? idPrefix + "title" : undefined)} aria-label={svgProps["aria-label"] ?? title} role={svgProps["role"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? "img" : undefined)} aria-hidden={svgProps["aria-hidden"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? undefined : true)}>{title ? <title id={idPrefix + "title"}>{title}</title> : null}<path d="M8 1C11.866 1 15 4.13401 15 8C15 11.866 11.866 15 8 15C4.13401 15 1 11.866 1 8C1 4.13401 4.13401 1 8 1ZM10.5303 5.46973C10.2374 5.17683 9.76262 5.17683 9.46973 5.46973L5.46973 9.46973C5.17683 9.76262 5.17683 10.2374 5.46973 10.5303C5.76262 10.8232 6.23738 10.8232 6.53027 10.5303L10.5303 6.53027C10.8232 6.23738 10.8232 5.76262 10.5303 5.46973Z" fill="currentColor" style={{
      fill: "currentColor",
      fillOpacity: 1
    }} /></svg>;
});
export default IconCircleNullFill;
