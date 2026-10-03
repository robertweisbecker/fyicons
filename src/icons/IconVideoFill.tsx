import * as React from 'react';
import type { IconProps } from './types';
const IconVideoFill = React.forwardRef<SVGSVGElement, IconProps>(function IconVideoFill(props, ref) {
  const idPrefix = React.useId().replace(/[^a-zA-Z0-9_-]/g, '') + '-';
  const {
    size = 16,
    color,
    title,
    ...svgProps
  } = props;
  return <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...svgProps} ref={ref} width={svgProps["width"] ?? size} height={svgProps["height"] ?? size} color={color} aria-labelledby={svgProps["aria-labelledby"] ?? (title ? idPrefix + "title" : undefined)} aria-label={svgProps["aria-label"] ?? title} role={svgProps["role"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? "img" : undefined)} aria-hidden={svgProps["aria-hidden"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? undefined : true)}>{title ? <title id={idPrefix + "title"}>{title}</title> : null}<path d="M9 3C10.1046 3 11 3.89543 11 5V11C11 12.1046 10.1046 13 9 13H3C1.89543 13 1 12.1046 1 11V5C1 3.89543 1.89543 3 3 3H9ZM13.4004 4.2002C14.0596 3.70596 15 4.17602 15 5V11C15 11.824 14.0596 12.294 13.4004 11.7998L12 10.749V5.24902L13.4004 4.2002Z" fill="currentColor" style={{
      fill: "currentColor",
      fillOpacity: 1
    }} /></svg>;
});
export default IconVideoFill;
