import * as React from 'react';
import type { IconProps } from './types';
const IconStack2 = React.forwardRef<SVGSVGElement, IconProps>(function IconStack2(props, ref) {
  const idPrefix = React.useId().replace(/[^a-zA-Z0-9_-]/g, '') + '-';
  const {
    size = 16,
    color,
    title,
    ...svgProps
  } = props;
  return <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...svgProps} ref={ref} width={svgProps["width"] ?? size} height={svgProps["height"] ?? size} color={color} aria-labelledby={svgProps["aria-labelledby"] ?? (title ? idPrefix + "title" : undefined)} aria-label={svgProps["aria-label"] ?? title} role={svgProps["role"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? "img" : undefined)} aria-hidden={svgProps["aria-hidden"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? undefined : true)}>{title ? <title id={idPrefix + "title"}>{title}</title> : null}<path d="M12.5 2C13.3284 2 14 2.67157 14 3.5V10.5C14 11.1528 13.5822 11.706 13 11.9121V12.5C13 13.3284 12.3284 14 11.5 14H4.5C3.67157 14 3 13.3284 3 12.5V11.9121C2.41782 11.706 2 11.1528 2 10.5V3.5C2 2.67157 2.67157 2 3.5 2H12.5ZM4 12.5C4 12.7761 4.22386 13 4.5 13H11.5C11.7761 13 12 12.7761 12 12.5V12H4V12.5ZM3.5 3C3.22386 3 3 3.22386 3 3.5V10.5C3 10.7761 3.22386 11 3.5 11H12.5C12.7761 11 13 10.7761 13 10.5V3.5C13 3.22386 12.7761 3 12.5 3H3.5Z" fill="currentColor" style={{
      fill: "currentColor",
      fillOpacity: 1
    }} /></svg>;
});
export default IconStack2;
