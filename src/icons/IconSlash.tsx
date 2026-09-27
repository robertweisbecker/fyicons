import * as React from 'react';
import type { IconProps } from './types';
const IconSlash = React.forwardRef<SVGSVGElement, IconProps>(function IconSlash(props, ref) {
  const idPrefix = React.useId().replace(/[^a-zA-Z0-9_-]/g, '') + '-';
  const {
    size = 16,
    color,
    title,
    ...svgProps
  } = props;
  return <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...svgProps} ref={ref} width={svgProps["width"] ?? size} height={svgProps["height"] ?? size} color={color} aria-labelledby={svgProps["aria-labelledby"] ?? (title ? idPrefix + "title" : undefined)} aria-label={svgProps["aria-label"] ?? title} role={svgProps["role"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? "img" : undefined)} aria-hidden={svgProps["aria-hidden"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? undefined : true)}>{title ? <title id={idPrefix + "title"}>{title}</title> : null}<path d="M11.0598 1.26258C11.1907 1.01968 11.4945 0.928835 11.7375 1.05945C11.9805 1.19039 12.0715 1.4941 11.9406 1.73718L4.94063 14.7372C4.80968 14.9802 4.50599 15.0712 4.26289 14.9403C4.02011 14.8093 3.92893 14.5056 4.05977 14.2626L11.0598 1.26258Z" fill="currentColor" style={{
      fill: "currentColor",
      fillOpacity: 1
    }} /></svg>;
});
export default IconSlash;
