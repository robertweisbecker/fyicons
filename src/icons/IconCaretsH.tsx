import * as React from 'react';
import type { IconProps } from './types';
const IconCaretsH = React.forwardRef<SVGSVGElement, IconProps>(function IconCaretsH(props, ref) {
  const idPrefix = React.useId().replace(/[^a-zA-Z0-9_-]/g, '') + '-';
  const {
    size = 16,
    color,
    title,
    ...svgProps
  } = props;
  return <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...svgProps} ref={ref} width={svgProps["width"] ?? size} height={svgProps["height"] ?? size} color={color} aria-labelledby={svgProps["aria-labelledby"] ?? (title ? idPrefix + "title" : undefined)} aria-label={svgProps["aria-label"] ?? title} role={svgProps["role"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? "img" : undefined)} aria-hidden={svgProps["aria-hidden"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? undefined : true)}>{title ? <title id={idPrefix + "title"}>{title}</title> : null}<path d="M5.17075 10.7744C5.49404 11.0573 6 10.8277 6 10.3981V5.60188C6 5.1723 5.49404 4.94272 5.17075 5.2256L2.43004 7.62371C2.20238 7.82292 2.20238 8.17708 2.43004 8.37629L5.17075 10.7744ZM10.8293 10.7744C10.506 11.0573 10 10.8277 10 10.3981V5.60188C10 5.1723 10.506 4.94272 10.8293 5.2256L13.57 7.62371C13.7976 7.82292 13.7976 8.17708 13.57 8.37629L10.8293 10.7744Z" fill="currentColor" style={{
      fill: "currentColor",
      fillOpacity: 1
    }} /></svg>;
});
export default IconCaretsH;
