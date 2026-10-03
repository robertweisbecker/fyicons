import * as React from 'react';
import type { IconProps } from './types';
const IconSkipForwardFill = React.forwardRef<SVGSVGElement, IconProps>(function IconSkipForwardFill(props, ref) {
  const idPrefix = React.useId().replace(/[^a-zA-Z0-9_-]/g, '') + '-';
  const {
    size = 16,
    color,
    title,
    ...svgProps
  } = props;
  return <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...svgProps} ref={ref} width={svgProps["width"] ?? size} height={svgProps["height"] ?? size} color={color} aria-labelledby={svgProps["aria-labelledby"] ?? (title ? idPrefix + "title" : undefined)} aria-label={svgProps["aria-label"] ?? title} role={svgProps["role"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? "img" : undefined)} aria-hidden={svgProps["aria-hidden"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? undefined : true)}>{title ? <title id={idPrefix + "title"}>{title}</title> : null}<path d="M12.5 4C12.7761 4 13 4.22386 13 4.5V11.5C13 11.7761 12.7761 12 12.5 12H11.5C11.2239 12 11 11.7761 11 11.5V4.5C11 4.22386 11.2239 4 11.5 4H12.5ZM3 5.00488C3 4.33187 3.72493 3.90743 4.31152 4.2373L9.63672 7.2334C10.2343 7.5699 10.2343 8.4301 9.63672 8.7666L4.31152 11.7627C3.72493 12.0926 3 11.6681 3 10.9951V5.00488Z" fill="currentColor" style={{
      fill: "currentColor",
      fillOpacity: 1
    }} /></svg>;
});
export default IconSkipForwardFill;
