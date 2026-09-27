import * as React from 'react';
import type { IconProps } from './types';
const IconDirUp = React.forwardRef<SVGSVGElement, IconProps>(function IconDirUp(props, ref) {
  const idPrefix = React.useId().replace(/[^a-zA-Z0-9_-]/g, '') + '-';
  const {
    size = 16,
    color,
    title,
    ...svgProps
  } = props;
  return <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...svgProps} ref={ref} width={svgProps["width"] ?? size} height={svgProps["height"] ?? size} color={color} aria-labelledby={svgProps["aria-labelledby"] ?? (title ? idPrefix + "title" : undefined)} aria-label={svgProps["aria-label"] ?? title} role={svgProps["role"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? "img" : undefined)} aria-hidden={svgProps["aria-hidden"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? undefined : true)}>{title ? <title id={idPrefix + "title"}>{title}</title> : null}<path d="M8.00085 2.49963C8.10021 2.49967 8.19672 2.52932 8.2782 2.58362L8.35437 2.64612L11.8544 6.14612C12.0495 6.34129 12.0494 6.65787 11.8544 6.85315C11.6591 7.04841 11.3426 7.04841 11.1473 6.85315L8.50085 4.20667V13.4996C8.50085 13.7757 8.27692 13.9995 8.00085 13.9996C7.72471 13.9996 7.50085 13.7758 7.50085 13.4996V4.20667L4.85437 6.85315C4.65911 7.04842 4.3426 7.04841 4.14734 6.85315C3.95224 6.65788 3.95214 6.34133 4.14734 6.14612L7.64734 2.64612C7.74108 2.55252 7.86837 2.49963 8.00085 2.49963Z" fill="currentColor" fillOpacity={1} style={{
      fill: "currentColor",
      fillOpacity: 1
    }} /></svg>;
});
export default IconDirUp;
