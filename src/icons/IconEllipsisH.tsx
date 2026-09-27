import * as React from 'react';
import type { IconProps } from './types';
const IconEllipsisH = React.forwardRef<SVGSVGElement, IconProps>(function IconEllipsisH(props, ref) {
  const idPrefix = React.useId().replace(/[^a-zA-Z0-9_-]/g, '') + '-';
  const {
    size = 16,
    color,
    title,
    ...svgProps
  } = props;
  return <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...svgProps} ref={ref} width={svgProps["width"] ?? size} height={svgProps["height"] ?? size} color={color} aria-labelledby={svgProps["aria-labelledby"] ?? (title ? idPrefix + "title" : undefined)} aria-label={svgProps["aria-label"] ?? title} role={svgProps["role"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? "img" : undefined)} aria-hidden={svgProps["aria-hidden"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? undefined : true)}>{title ? <title id={idPrefix + "title"}>{title}</title> : null}<path d="M3 6.75C3.69036 6.75 4.25 7.30964 4.25 8C4.25 8.69036 3.69036 9.25 3 9.25C2.30964 9.25 1.75 8.69036 1.75 8C1.75 7.30964 2.30964 6.75 3 6.75ZM8 6.75C8.69036 6.75 9.25 7.30964 9.25 8C9.25 8.69036 8.69036 9.25 8 9.25C7.30964 9.25 6.75 8.69036 6.75 8C6.75 7.30964 7.30964 6.75 8 6.75ZM13 6.75C13.6904 6.75 14.25 7.30964 14.25 8C14.25 8.69036 13.6904 9.25 13 9.25C12.3096 9.25 11.75 8.69036 11.75 8C11.75 7.30964 12.3096 6.75 13 6.75Z" fill="currentColor" style={{
      fill: "currentColor",
      fillOpacity: 1
    }} /></svg>;
});
export default IconEllipsisH;
