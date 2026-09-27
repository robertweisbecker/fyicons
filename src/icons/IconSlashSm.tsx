import * as React from 'react';
import type { IconProps } from './types';
const IconSlashSm = React.forwardRef<SVGSVGElement, IconProps>(function IconSlashSm(props, ref) {
  const idPrefix = React.useId().replace(/[^a-zA-Z0-9_-]/g, '') + '-';
  const {
    size = 16,
    color,
    title,
    ...svgProps
  } = props;
  return <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...svgProps} ref={ref} width={svgProps["width"] ?? size} height={svgProps["height"] ?? size} color={color} aria-labelledby={svgProps["aria-labelledby"] ?? (title ? idPrefix + "title" : undefined)} aria-label={svgProps["aria-label"] ?? title} role={svgProps["role"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? "img" : undefined)} aria-hidden={svgProps["aria-hidden"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? undefined : true)}>{title ? <title id={idPrefix + "title"}>{title}</title> : null}<path d="M10.0931 4.20908C10.2537 3.98445 10.5667 3.93238 10.7914 4.09287C11.0159 4.25341 11.0681 4.56647 10.9076 4.79111L5.9076 11.7911C5.7471 12.0157 5.43402 12.0677 5.20936 11.9073C4.98473 11.7468 4.93267 11.4338 5.09315 11.2091L10.0931 4.20908Z" fill="currentColor" style={{
      fill: "currentColor",
      fillOpacity: 1
    }} /></svg>;
});
export default IconSlashSm;
