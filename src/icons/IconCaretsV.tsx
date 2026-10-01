import * as React from 'react';
import type { IconProps } from './types';
const IconCaretsV = React.forwardRef<SVGSVGElement, IconProps>(function IconCaretsV(props, ref) {
  const idPrefix = React.useId().replace(/[^a-zA-Z0-9_-]/g, '') + '-';
  const {
    size = 16,
    color,
    title,
    ...svgProps
  } = props;
  return <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...svgProps} ref={ref} width={svgProps["width"] ?? size} height={svgProps["height"] ?? size} color={color} aria-labelledby={svgProps["aria-labelledby"] ?? (title ? idPrefix + "title" : undefined)} aria-label={svgProps["aria-label"] ?? title} role={svgProps["role"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? "img" : undefined)} aria-hidden={svgProps["aria-hidden"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? undefined : true)}>{title ? <title id={idPrefix + "title"}>{title}</title> : null}<path d="M10.7744 10.8293C11.0573 10.506 10.8277 10 10.3981 10H5.60188C5.1723 10 4.94272 10.506 5.2256 10.8293L7.62371 13.57C7.82292 13.7976 8.17708 13.7976 8.37629 13.57L10.7744 10.8293ZM10.7744 5.17075C11.0573 5.49404 10.8277 6 10.3981 6H5.60188C5.1723 6 4.94272 5.49404 5.2256 5.17075L7.62371 2.43004C7.82292 2.20238 8.17708 2.20238 8.37629 2.43004L10.7744 5.17075Z" fill="currentColor" style={{
      fill: "currentColor",
      fillOpacity: 1
    }} /></svg>;
});
export default IconCaretsV;
