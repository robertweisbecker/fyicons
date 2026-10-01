import * as React from 'react';
import type { IconProps } from './types';
const IconPencilEditFill = React.forwardRef<SVGSVGElement, IconProps>(function IconPencilEditFill(props, ref) {
  const idPrefix = React.useId().replace(/[^a-zA-Z0-9_-]/g, '') + '-';
  const {
    size = 16,
    color,
    title,
    ...svgProps
  } = props;
  return <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...svgProps} ref={ref} width={svgProps["width"] ?? size} height={svgProps["height"] ?? size} color={color} aria-labelledby={svgProps["aria-labelledby"] ?? (title ? idPrefix + "title" : undefined)} aria-label={svgProps["aria-label"] ?? title} role={svgProps["role"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? "img" : undefined)} aria-hidden={svgProps["aria-hidden"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? undefined : true)}>{title ? <title id={idPrefix + "title"}>{title}</title> : null}<path d="M8.5 2.00028C8.77614 2.00028 9 2.22414 9 2.50028C8.99985 2.77629 8.77605 3.00028 8.5 3.00028H5C3.89543 3.00028 3 3.89571 3 5.00028V11.0003C3.00015 12.1047 3.89553 13.0003 5 13.0003H11C12.1045 13.0003 12.9998 12.1047 13 11.0003V7.50028C13 7.22414 13.2239 7.00028 13.5 7.00028C13.7761 7.00028 14 7.22414 14 7.50028V11.0003C13.9998 12.657 12.6568 14.0003 11 14.0003H5C3.34324 14.0003 2.00015 12.657 2 11.0003V5.00028C2 3.34343 3.34315 2.00028 5 2.00028H8.5ZM12.75 1.75028C13.1642 1.33607 13.8358 1.33607 14.25 1.75028C14.664 2.16451 14.6641 2.83613 14.25 3.25028L8.46777 9.03251C8.32415 9.1761 8.15243 9.28911 7.96387 9.36454L6.29199 10.0335C6.08791 10.1151 5.88517 9.91237 5.9668 9.70829L6.63574 8.03544C6.71117 7.84701 6.82427 7.67604 6.96777 7.53251L12.75 1.75028Z" fill="currentColor" style={{
      fill: "currentColor",
      fillOpacity: 1
    }} /></svg>;
});
export default IconPencilEditFill;
