import * as React from 'react';
import type { IconProps } from './types';
const IconOverlayBottomCenter = React.forwardRef<SVGSVGElement, IconProps>(function IconOverlayBottomCenter(props, ref) {
  const idPrefix = React.useId().replace(/[^a-zA-Z0-9_-]/g, '') + '-';
  const {
    size = 16,
    color,
    title,
    ...svgProps
  } = props;
  return <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...svgProps} ref={ref} width={svgProps["width"] ?? size} height={svgProps["height"] ?? size} color={color} aria-labelledby={svgProps["aria-labelledby"] ?? (title ? idPrefix + "title" : undefined)} aria-label={svgProps["aria-label"] ?? title} role={svgProps["role"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? "img" : undefined)} aria-hidden={svgProps["aria-hidden"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? undefined : true)}>{title ? <title id={idPrefix + "title"}>{title}</title> : null}<path fillRule="evenodd" clipRule="evenodd" d="M3 2H13V10H3V2ZM2 11V2C2 1.448 2.448 1 3 1H13C13.552 1 14 1.448 14 2V14C14 14.552 13.552 15 13 15H3C2.448 15 2 14.552 2 14V11Z" fill="currentColor" style={{
      fill: "currentColor",
      fillOpacity: 1
    }} /></svg>;
});
export default IconOverlayBottomCenter;
