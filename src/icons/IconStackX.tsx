import * as React from 'react';
import type { IconProps } from './types';
const IconStackX = React.forwardRef<SVGSVGElement, IconProps>(function IconStackX(props, ref) {
  const idPrefix = React.useId().replace(/[^a-zA-Z0-9_-]/g, '') + '-';
  const {
    size = 16,
    color,
    title,
    ...svgProps
  } = props;
  return <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...svgProps} ref={ref} width={svgProps["width"] ?? size} height={svgProps["height"] ?? size} color={color} aria-labelledby={svgProps["aria-labelledby"] ?? (title ? idPrefix + "title" : undefined)} aria-label={svgProps["aria-label"] ?? title} role={svgProps["role"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? "img" : undefined)} aria-hidden={svgProps["aria-hidden"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? undefined : true)}>{title ? <title id={idPrefix + "title"}>{title}</title> : null}<path d="M2 3C2 2.44771 2.44772 2 3 2H10C10.5523 2 11 2.44772 11 3V4H12C12.5523 4 13 4.44772 13 5H14C14.5523 5 15 5.44771 15 6V11C15 11.5523 14.5523 12 14 12H13C13 12.5523 12.5523 13 12 13H11C11 13.5177 10.6067 13.9438 10.1025 13.9951L10 14H3L2.89746 13.9951C2.39333 13.9438 2 13.5177 2 13V3ZM12 12V5H11V12H12ZM10 13V3H3V13H10ZM13 6V11H14V6H13Z" fill="currentColor" style={{
      fill: "currentColor",
      fillOpacity: 1
    }} /></svg>;
});
export default IconStackX;
