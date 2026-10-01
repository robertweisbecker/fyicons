import * as React from 'react';
import type { IconProps } from './types';
const IconBuildingArch = React.forwardRef<SVGSVGElement, IconProps>(function IconBuildingArch(props, ref) {
  const idPrefix = React.useId().replace(/[^a-zA-Z0-9_-]/g, '') + '-';
  const {
    size = 16,
    color,
    title,
    ...svgProps
  } = props;
  return <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...svgProps} ref={ref} width={svgProps["width"] ?? size} height={svgProps["height"] ?? size} color={color} aria-labelledby={svgProps["aria-labelledby"] ?? (title ? idPrefix + "title" : undefined)} aria-label={svgProps["aria-label"] ?? title} role={svgProps["role"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? "img" : undefined)} aria-hidden={svgProps["aria-hidden"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? undefined : true)}>{title ? <title id={idPrefix + "title"}>{title}</title> : null}<path d="M14.5 2C14.7761 2 15 2.22386 15 2.5C15 2.77614 14.7761 3 14.5 3H14V5C14.2761 5 14.5 5.22386 14.5 5.5C14.5 5.77614 14.2761 6 14 6V13C14 13.5523 13.5523 14 13 14H10C9.44772 14 9 13.5523 9 13V8C9 7.44772 8.55228 7 8 7C7.44772 7 7 7.44772 7 8V13C7 13.5523 6.55229 14 6 14H3C2.44772 14 2 13.5523 2 13V6C1.72386 6 1.5 5.77614 1.5 5.5C1.5 5.22386 1.72386 5 2 5V3H1.5C1.22386 3 1 2.77614 1 2.5C1 2.22386 1.22386 2 1.5 2H14.5ZM8 5C7.60603 5 7.21554 5.07775 6.85156 5.22852C6.48774 5.37928 6.15738 5.60043 5.87891 5.87891C5.60043 6.15738 5.37928 6.48774 5.22852 6.85156C5.07775 7.21554 5 7.60603 5 8C5 8.27614 4.77614 8.5 4.5 8.5C4.22386 8.5 4 8.27614 4 8C4 7.47483 4.10376 6.95494 4.30469 6.46973C4.37176 6.30781 4.44981 6.15113 4.53711 6H3V9H3.5C3.77614 9 4 9.22386 4 9.5C4 9.77614 3.77614 10 3.5 10H3V13H6V12H5.5C5.22386 12 5 11.7761 5 11.5C5 11.2239 5.22386 11 5.5 11H6V8C6 6.89543 6.89543 6 8 6C9.10457 6 10 6.89543 10 8V9H10.5C10.7761 9 11 9.22386 11 9.5C11 9.77614 10.7761 10 10.5 10H10V13H13V12H12.5C12.2239 12 12 11.7761 12 11.5C12 11.2239 12.2239 11 12.5 11H13V6H11.4629C11.5502 6.15113 11.6282 6.30781 11.6953 6.46973C11.8962 6.95494 12 7.47483 12 8C12 8.27614 11.7761 8.5 11.5 8.5C11.2239 8.5 11 8.27614 11 8C11 7.60603 10.9222 7.21554 10.7715 6.85156C10.6207 6.48774 10.3996 6.15738 10.1211 5.87891C9.84262 5.60043 9.51226 5.37928 9.14844 5.22852C8.78446 5.07775 8.39397 5 8 5ZM3 5H5.25C5.28238 5 5.31406 5.00291 5.34473 5.00879C5.67744 4.71344 6.05771 4.47535 6.46973 4.30469C6.95494 4.10376 7.47483 4 8 4C8.52517 4 9.04506 4.10376 9.53027 4.30469C9.93778 4.47348 10.3135 4.70912 10.6436 5H13V3H3V5Z" fill="currentColor" style={{
      fill: "currentColor",
      fillOpacity: 1
    }} /></svg>;
});
export default IconBuildingArch;
