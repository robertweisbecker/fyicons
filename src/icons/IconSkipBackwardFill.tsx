import * as React from 'react';
import type { IconProps } from './types';
const IconSkipBackwardFill = React.forwardRef<SVGSVGElement, IconProps>(function IconSkipBackwardFill(props, ref) {
  const idPrefix = React.useId().replace(/[^a-zA-Z0-9_-]/g, '') + '-';
  const {
    size = 16,
    color,
    title,
    ...svgProps
  } = props;
  return <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...svgProps} ref={ref} width={svgProps["width"] ?? size} height={svgProps["height"] ?? size} color={color} aria-labelledby={svgProps["aria-labelledby"] ?? (title ? idPrefix + "title" : undefined)} aria-label={svgProps["aria-label"] ?? title} role={svgProps["role"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? "img" : undefined)} aria-hidden={svgProps["aria-hidden"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? undefined : true)}>{title ? <title id={idPrefix + "title"}>{title}</title> : null}<path d="M4.5 4C4.77614 4 5 4.22386 5 4.5V11.5C5 11.7761 4.77614 12 4.5 12H3.5C3.22386 12 3 11.7761 3 11.5V4.5C3 4.22386 3.22386 4 3.5 4H4.5ZM11.6885 4.2373C12.2751 3.90743 13 4.33187 13 5.00488V10.9951C13 11.6681 12.2751 12.0926 11.6885 11.7627L6.36328 8.7666C5.76566 8.4301 5.76566 7.5699 6.36328 7.2334L11.6885 4.2373Z" fill="currentColor" style={{
      fill: "currentColor",
      fillOpacity: 1
    }} /></svg>;
});
export default IconSkipBackwardFill;
