import * as React from 'react';
import type { IconProps } from './types';
const IconHome = React.forwardRef<SVGSVGElement, IconProps>(function IconHome(props, ref) {
  const idPrefix = React.useId().replace(/[^a-zA-Z0-9_-]/g, '') + '-';
  const {
    size = 16,
    color,
    title,
    ...svgProps
  } = props;
  return <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...svgProps} ref={ref} width={svgProps["width"] ?? size} height={svgProps["height"] ?? size} color={color} aria-labelledby={svgProps["aria-labelledby"] ?? (title ? idPrefix + "title" : undefined)} aria-label={svgProps["aria-label"] ?? title} role={svgProps["role"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? "img" : undefined)} aria-hidden={svgProps["aria-hidden"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? undefined : true)}>{title ? <title id={idPrefix + "title"}>{title}</title> : null}<path d="M7.01074 1.85144C7.61481 1.32025 8.54723 1.35873 9.10449 1.9657L13.6045 6.87488C13.8581 7.15159 13.9989 7.51366 13.999 7.88855V12.4999C13.9988 13.3279 13.3275 13.9999 12.499 13.9999H9.49902C9.22304 13.9997 8.99902 13.7759 8.99902 13.4999V8.99988H6.99902V13.4999C6.99902 13.776 6.77517 13.9999 6.49902 13.9999H3.49902C2.72305 13.9993 2.08379 13.4092 2.00684 12.6532L1.99902 12.4999V7.88855C1.99914 7.51234 2.14177 7.15062 2.39453 6.87488L6.89453 1.9657L7.01074 1.85144ZM8.36816 2.64148C8.19476 2.45285 7.91238 2.42951 7.71191 2.57117L7.63086 2.64148L3.13086 7.55066C3.04583 7.64353 2.99913 7.76478 2.99902 7.88855V12.4999L3.00879 12.6005C3.05545 12.828 3.25768 12.9995 3.49902 12.9999H5.99902V8.99988C5.99925 8.4476 6.4481 8.00059 6.99902 7.99988H8.99902C9.55117 7.99988 9.99879 8.44779 9.99902 8.99988V12.9999H12.499C12.7405 12.9999 12.9426 12.8285 12.9893 12.6005L12.999 12.4999V7.88855C12.9989 7.76347 12.9523 7.64256 12.8682 7.55066L8.36816 2.64148Z" fill="currentColor" style={{
      fill: "currentColor",
      fillOpacity: 1
    }} /></svg>;
});
export default IconHome;
