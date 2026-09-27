import * as React from 'react';
import type { IconProps } from './types';
const IconArrowUpRight2 = React.forwardRef<SVGSVGElement, IconProps>(function IconArrowUpRight2(props, ref) {
  const idPrefix = React.useId().replace(/[^a-zA-Z0-9_-]/g, '') + '-';
  const {
    size = 16,
    color,
    title,
    ...svgProps
  } = props;
  return <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...svgProps} ref={ref} width={svgProps["width"] ?? size} height={svgProps["height"] ?? size} color={color} aria-labelledby={svgProps["aria-labelledby"] ?? (title ? idPrefix + "title" : undefined)} aria-label={svgProps["aria-label"] ?? title} role={svgProps["role"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? "img" : undefined)} aria-hidden={svgProps["aria-hidden"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? undefined : true)}>{title ? <title id={idPrefix + "title"}>{title}</title> : null}<path d="M12.5 3C12.7761 3.00002 13 3.22387 13 3.5V10.5C13 10.7761 12.7761 11 12.5 11C12.2239 11 12 10.7761 12 10.5V4.70703L3.85352 12.8535C3.65826 13.0488 3.34175 13.0488 3.14648 12.8535C2.95122 12.6583 2.95122 12.3417 3.14648 12.1465L11.293 4H5.5C5.22386 4 5 3.77614 5 3.5C5 3.22386 5.22386 3 5.5 3H12.5Z" fill="currentColor" style={{
      fill: "currentColor",
      fillOpacity: 1
    }} /></svg>;
});
export default IconArrowUpRight2;
