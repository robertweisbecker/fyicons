import * as React from 'react';
import type { IconProps } from './types';
const IconOverlayTopLeft = React.forwardRef<SVGSVGElement, IconProps>(function IconOverlayTopLeft(props, ref) {
  const idPrefix = React.useId().replace(/[^a-zA-Z0-9_-]/g, '') + '-';
  const {
    size = 16,
    color,
    title,
    ...svgProps
  } = props;
  return <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...svgProps} ref={ref} width={svgProps["width"] ?? size} height={svgProps["height"] ?? size} color={color} aria-labelledby={svgProps["aria-labelledby"] ?? (title ? idPrefix + "title" : undefined)} aria-label={svgProps["aria-label"] ?? title} role={svgProps["role"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? "img" : undefined)} aria-hidden={svgProps["aria-hidden"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? undefined : true)}>{title ? <title id={idPrefix + "title"}>{title}</title> : null}<path fillRule="evenodd" clipRule="evenodd" d="M3 1C2.448 1 2 1.448 2 2V14C2 14.552 2.448 15 3 15H13C13.552 15 14 14.552 14 14V2C14 1.448 13.552 1 13 1H3ZM7 14V2H13V14H7Z" fill="currentColor" style={{
      fill: "currentColor",
      fillOpacity: 1
    }} /></svg>;
});
export default IconOverlayTopLeft;
