import * as React from 'react';
import type { IconProps } from './types';
const IconEllipsisV = React.forwardRef<SVGSVGElement, IconProps>(function IconEllipsisV(props, ref) {
  const idPrefix = React.useId().replace(/[^a-zA-Z0-9_-]/g, '') + '-';
  const {
    size = 16,
    color,
    title,
    ...svgProps
  } = props;
  return <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...svgProps} ref={ref} width={svgProps["width"] ?? size} height={svgProps["height"] ?? size} color={color} aria-labelledby={svgProps["aria-labelledby"] ?? (title ? idPrefix + "title" : undefined)} aria-label={svgProps["aria-label"] ?? title} role={svgProps["role"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? "img" : undefined)} aria-hidden={svgProps["aria-hidden"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? undefined : true)}>{title ? <title id={idPrefix + "title"}>{title}</title> : null}<path d="M8 11.75C8.69036 11.75 9.25 12.3096 9.25 13C9.25 13.6904 8.69036 14.25 8 14.25C7.30964 14.25 6.75 13.6904 6.75 13C6.75 12.3096 7.30964 11.75 8 11.75ZM8 6.75C8.69036 6.75 9.25 7.30964 9.25 8C9.25 8.69036 8.69036 9.25 8 9.25C7.30964 9.25 6.75 8.69036 6.75 8C6.75 7.30964 7.30964 6.75 8 6.75ZM8 1.75C8.69036 1.75 9.25 2.30964 9.25 3C9.25 3.69036 8.69036 4.25 8 4.25C7.30964 4.25 6.75 3.69036 6.75 3C6.75 2.30964 7.30964 1.75 8 1.75Z" fill="currentColor" style={{
      fill: "currentColor",
      fillOpacity: 1
    }} /></svg>;
});
export default IconEllipsisV;
