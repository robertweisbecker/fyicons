import * as React from 'react';
import type { IconProps } from './types';
const IconBookmarkFill = React.forwardRef<SVGSVGElement, IconProps>(function IconBookmarkFill(props, ref) {
  const idPrefix = React.useId().replace(/[^a-zA-Z0-9_-]/g, '') + '-';
  const {
    size = 16,
    color,
    title,
    ...svgProps
  } = props;
  return <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...svgProps} ref={ref} width={svgProps["width"] ?? size} height={svgProps["height"] ?? size} color={color} aria-labelledby={svgProps["aria-labelledby"] ?? (title ? idPrefix + "title" : undefined)} aria-label={svgProps["aria-label"] ?? title} role={svgProps["role"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? "img" : undefined)} aria-hidden={svgProps["aria-hidden"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? undefined : true)}>{title ? <title id={idPrefix + "title"}>{title}</title> : null}<path d="M11 1C12.1046 1 13 1.89543 13 3V13.5518C12.9998 14.7379 11.5986 15.367 10.7119 14.5791L8 12.1689L5.28809 14.5791C4.4014 15.367 3.00019 14.7379 3 13.5518V3C3 1.89543 3.89543 1 5 1H11Z" fill="currentColor" style={{
      fill: "currentColor",
      fillOpacity: 1
    }} /></svg>;
});
export default IconBookmarkFill;
