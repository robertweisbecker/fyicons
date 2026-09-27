import * as React from 'react';
import type { IconProps } from './types';
const IconArrowUpRight1 = React.forwardRef<SVGSVGElement, IconProps>(function IconArrowUpRight1(props, ref) {
  const idPrefix = React.useId().replace(/[^a-zA-Z0-9_-]/g, '') + '-';
  const {
    size = 16,
    color,
    title,
    ...svgProps
  } = props;
  return <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...svgProps} ref={ref} width={svgProps["width"] ?? size} height={svgProps["height"] ?? size} color={color} aria-labelledby={svgProps["aria-labelledby"] ?? (title ? idPrefix + "title" : undefined)} aria-label={svgProps["aria-label"] ?? title} role={svgProps["role"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? "img" : undefined)} aria-hidden={svgProps["aria-hidden"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? undefined : true)}>{title ? <title id={idPrefix + "title"}>{title}</title> : null}<path d="M12.5 3C12.7761 3.00002 13 3.22387 13 3.5V10.5C13 10.7761 12.7761 11 12.5 11C12.2238 11 12 10.7761 12 10.5V4.70703L4.85348 11.8535C4.65822 12.0488 4.34171 12.0488 4.14645 11.8535C3.95118 11.6583 3.95118 11.3417 4.14645 11.1465L11.2929 4H5.49996C5.22382 4 4.99996 3.77614 4.99996 3.5C4.99996 3.22386 5.22382 3 5.49996 3H12.5Z" fill="currentColor" style={{
      fill: "currentColor",
      fillOpacity: 1
    }} /></svg>;
});
export default IconArrowUpRight1;
