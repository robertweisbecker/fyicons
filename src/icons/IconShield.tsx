import * as React from 'react';
import type { IconProps } from './types';
const IconShield = React.forwardRef<SVGSVGElement, IconProps>(function IconShield(props, ref) {
  const idPrefix = React.useId().replace(/[^a-zA-Z0-9_-]/g, '') + '-';
  const {
    size = 16,
    color,
    title,
    ...svgProps
  } = props;
  return <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...svgProps} ref={ref} width={svgProps["width"] ?? size} height={svgProps["height"] ?? size} color={color} aria-labelledby={svgProps["aria-labelledby"] ?? (title ? idPrefix + "title" : undefined)} aria-label={svgProps["aria-label"] ?? title} role={svgProps["role"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? "img" : undefined)} aria-hidden={svgProps["aria-hidden"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? undefined : true)}>{title ? <title id={idPrefix + "title"}>{title}</title> : null}<path d="M7.32422 1.24268C7.76092 1.08593 8.23906 1.086 8.67578 1.24268L12.9375 2.77295C13.5665 2.99874 13.9703 3.61382 13.9277 4.28076L13.6865 8.05713C13.5676 9.9161 12.657 11.6356 11.1855 12.7778L8.61328 14.7749L8.47168 14.8667C8.17763 15.0239 7.8223 15.0241 7.52832 14.8667L7.38672 14.7749L4.81445 12.7778C3.43483 11.7069 2.548 10.1287 2.34473 8.40381L2.31348 8.05713L2.07227 4.28076C2.03233 3.65557 2.38488 3.07589 2.94727 2.81982L3.0625 2.77295L7.32422 1.24268ZM8.33789 2.18408C8.11957 2.10579 7.88042 2.10572 7.66211 2.18408L3.40039 3.71436C3.19116 3.78973 3.05631 3.99434 3.07031 4.21631L3.31152 7.99365C3.41211 9.56659 4.18267 11.0213 5.42773 11.9878L8 13.9849L10.5723 11.9878C11.8174 11.0213 12.5879 9.5666 12.6885 7.99365L12.9297 4.21631C12.9437 3.99415 12.8091 3.78957 12.5996 3.71436L8.33789 2.18408Z" fill="currentColor" style={{
      fill: "currentColor",
      fillOpacity: 1
    }} /></svg>;
});
export default IconShield;
