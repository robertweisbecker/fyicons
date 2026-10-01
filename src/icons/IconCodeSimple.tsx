import * as React from 'react';
import type { IconProps } from './types';
const IconCodeSimple = React.forwardRef<SVGSVGElement, IconProps>(function IconCodeSimple(props, ref) {
  const idPrefix = React.useId().replace(/[^a-zA-Z0-9_-]/g, '') + '-';
  const {
    size = 16,
    color,
    title,
    ...svgProps
  } = props;
  return <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...svgProps} ref={ref} width={svgProps["width"] ?? size} height={svgProps["height"] ?? size} color={color} aria-labelledby={svgProps["aria-labelledby"] ?? (title ? idPrefix + "title" : undefined)} aria-label={svgProps["aria-label"] ?? title} role={svgProps["role"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? "img" : undefined)} aria-hidden={svgProps["aria-hidden"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? undefined : true)}>{title ? <title id={idPrefix + "title"}>{title}</title> : null}<path d="M5.1709 4.12412C5.37869 3.94227 5.69411 3.96323 5.87598 4.171C6.05755 4.37879 6.03677 4.6943 5.8291 4.87608L2.25977 8.0001L5.8291 11.1241C6.0366 11.306 6.05775 11.6215 5.87598 11.8292C5.69418 12.0368 5.37867 12.0576 5.1709 11.8761L1.17188 8.37608C1.06349 8.28121 1.00107 8.14413 1.00098 8.0001C1.00098 7.85596 1.06343 7.71907 1.17188 7.62412L5.1709 4.12412ZM10.124 4.171C10.3059 3.96324 10.6213 3.9423 10.8291 4.12412L14.8291 7.62412C14.9374 7.71905 15 7.85606 15 8.0001C14.9999 8.14412 14.9375 8.28121 14.8291 8.37608L10.8301 11.8761C10.6224 12.0578 10.3069 12.0367 10.125 11.8292C9.94318 11.6215 9.96421 11.306 10.1719 11.1241L13.7412 8.0001L10.1709 4.87608C9.96319 4.69427 9.94234 4.3788 10.124 4.171Z" fill="currentColor" style={{
      fill: "currentColor",
      fillOpacity: 1
    }} /></svg>;
});
export default IconCodeSimple;
