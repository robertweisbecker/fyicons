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
  return <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...svgProps} ref={ref} width={svgProps["width"] ?? size} height={svgProps["height"] ?? size} color={color} aria-labelledby={svgProps["aria-labelledby"] ?? (title ? idPrefix + "title" : undefined)} aria-label={svgProps["aria-label"] ?? title} role={svgProps["role"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? "img" : undefined)} aria-hidden={svgProps["aria-hidden"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? undefined : true)}>{title ? <title id={idPrefix + "title"}>{title}</title> : null}<path d="M8.5 2.00036C8.77614 2.00036 9 2.22422 9 2.50036C8.9998 2.77634 8.77602 3.00036 8.5 3.00036H5C3.89543 3.00036 3 3.89579 3 5.00036V11.0004C3.0002 12.1048 3.89555 13.0004 5 13.0004H11C12.1044 13.0004 12.9998 12.1048 13 11.0004V7.50036C13 7.22422 13.2239 7.00036 13.5 7.00036C13.7761 7.00036 14 7.22422 14 7.50036V11.0004C13.9998 12.657 12.6567 14.0004 11 14.0004H5C3.34327 14.0004 2.0002 12.657 2 11.0004V5.00036C2 3.34351 3.34315 2.00036 5 2.00036H8.5ZM12.75 1.75036C13.1642 1.33614 13.8358 1.33614 14.25 1.75036C14.664 2.16459 14.6641 2.83622 14.25 3.25036L7.46777 10.0326C7.32415 10.1762 7.15243 10.2892 6.96387 10.3646L5.29199 11.0336C5.08791 11.1152 4.88517 10.9124 4.9668 10.7084L5.63574 9.03552C5.71117 8.84709 5.82427 8.67612 5.96777 8.53259L12.75 1.75036Z" fill="currentColor" style={{
      fill: "currentColor",
      fillOpacity: 1
    }} /></svg>;
});
export default IconPencilEditFill;
