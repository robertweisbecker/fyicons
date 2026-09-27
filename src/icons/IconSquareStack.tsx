import * as React from 'react';
import type { IconProps } from './types';
const IconSquareStack = React.forwardRef<SVGSVGElement, IconProps>(function IconSquareStack(props, ref) {
  const idPrefix = React.useId().replace(/[^a-zA-Z0-9_-]/g, '') + '-';
  const {
    size = 16,
    color,
    title,
    ...svgProps
  } = props;
  return <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...svgProps} ref={ref} width={svgProps["width"] ?? size} height={svgProps["height"] ?? size} color={color} aria-labelledby={svgProps["aria-labelledby"] ?? (title ? idPrefix + "title" : undefined)} aria-label={svgProps["aria-label"] ?? title} role={svgProps["role"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? "img" : undefined)} aria-hidden={svgProps["aria-hidden"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? undefined : true)}>{title ? <title id={idPrefix + "title"}>{title}</title> : null}<path d="M6.37598 2.36136C6.7538 1.32369 7.90168 0.788582 8.93945 1.16605L13.6387 2.87601C14.6763 3.25386 15.2115 4.40171 14.834 5.43949L13.124 10.1377C12.9232 10.6895 12.504 11.0973 12 11.3028V12C11.9999 13.1045 11.1045 14 10 14H4C2.89547 14 2.00006 13.1045 2 12V6.00003C2 4.89546 2.89543 4.00003 4 4.00003H5.7793L6.37598 2.36136ZM4 5.00003C3.44772 5.00003 3 5.44775 3 6.00003V12C3.00006 12.5523 3.44775 13 4 13H10C10.5522 13 10.9999 12.5523 11 12V6.00003C11 5.44775 10.5523 5.00003 10 5.00003H4ZM8.59766 2.1055C8.07891 1.91687 7.50543 2.18458 7.31641 2.70316L6.84375 4.00003H10C11.1046 4.00003 12 4.89546 12 6.00003V10.1084C12.0777 10.0191 12.1406 9.91399 12.1836 9.79593L13.8936 5.09769C14.0823 4.57877 13.8148 4.00433 13.2959 3.81546L8.59766 2.1055Z" fill="currentColor" style={{
      fill: "currentColor",
      fillOpacity: 1
    }} /></svg>;
});
export default IconSquareStack;
