import * as React from 'react';
import type { IconProps } from './types';
const IconCopiedLg = React.forwardRef<SVGSVGElement, IconProps>(function IconCopiedLg(props, ref) {
  const idPrefix = React.useId().replace(/[^a-zA-Z0-9_-]/g, '') + '-';
  const {
    size = 16,
    color,
    title,
    ...svgProps
  } = props;
  return <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...svgProps} ref={ref} width={svgProps["width"] ?? size} height={svgProps["height"] ?? size} color={color} aria-labelledby={svgProps["aria-labelledby"] ?? (title ? idPrefix + "title" : undefined)} aria-label={svgProps["aria-label"] ?? title} role={svgProps["role"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? "img" : undefined)} aria-hidden={svgProps["aria-hidden"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? undefined : true)}>{title ? <title id={idPrefix + "title"}>{title}</title> : null}<path d="M9.5 1C10.8807 1 12 2.11929 12 3.5V4H12.5C13.8807 4 15 5.11929 15 6.5V12.5C15 13.8807 13.8807 15 12.5 15H6.5C5.11929 15 4 13.8807 4 12.5V12H3.5C2.11929 12 1 10.8807 1 9.5V3.5C1 2.11929 2.11929 1 3.5 1H9.5ZM12 9.5C12 10.8807 10.8807 12 9.5 12H5V12.5C5 13.3284 5.67157 14 6.5 14H12.5C13.3284 14 14 13.3284 14 12.5V6.5C14 5.67157 13.3284 5 12.5 5H12V9.5ZM3.5 2C2.67157 2 2 2.67157 2 3.5V9.5C2 10.3284 2.67157 11 3.5 11H9.5C10.3284 11 11 10.3284 11 9.5V3.5C11 2.67157 10.3284 2 9.5 2H3.5ZM7.81543 4.50195C7.95246 4.26255 8.25845 4.17877 8.49805 4.31543C8.73751 4.45238 8.82112 4.75842 8.68457 4.99805L6.68457 8.49805C6.60728 8.63321 6.47071 8.72437 6.31641 8.74512C6.16202 8.76579 6.00667 8.71361 5.89648 8.60352L4.39648 7.10352C4.20142 6.90826 4.20134 6.59169 4.39648 6.39648C4.59171 6.2015 4.90831 6.20147 5.10352 6.39648L6.13965 7.43262L7.81543 4.50195Z" fill="currentColor" style={{
      fill: "currentColor",
      fillOpacity: 1
    }} /></svg>;
});
export default IconCopiedLg;
