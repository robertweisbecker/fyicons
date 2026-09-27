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
  return <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...svgProps} ref={ref} width={svgProps["width"] ?? size} height={svgProps["height"] ?? size} color={color} aria-labelledby={svgProps["aria-labelledby"] ?? (title ? idPrefix + "title" : undefined)} aria-label={svgProps["aria-label"] ?? title} role={svgProps["role"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? "img" : undefined)} aria-hidden={svgProps["aria-hidden"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? undefined : true)}>{title ? <title id={idPrefix + "title"}>{title}</title> : null}<path d="M11.5 1C12.3284 1 13 1.67157 13 2.5V13.9326C12.9999 14.7804 12.0107 15.2439 11.3594 14.7012L8 11.9004L4.64062 14.7012C3.98933 15.2439 3.00011 14.7804 3 13.9326V2.5C3 1.67157 3.67157 1 4.5 1H11.5Z" fill="currentColor" style={{
      fill: "currentColor",
      fillOpacity: 1
    }} /></svg>;
});
export default IconBookmarkFill;
