import * as React from 'react';
import type { IconProps } from './types';
const IconCaretRightRounded = React.forwardRef<SVGSVGElement, IconProps>(function IconCaretRightRounded(props, ref) {
  const idPrefix = React.useId().replace(/[^a-zA-Z0-9_-]/g, '') + '-';
  const {
    size = 16,
    color,
    title,
    ...svgProps
  } = props;
  return <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...svgProps} ref={ref} width={svgProps["width"] ?? size} height={svgProps["height"] ?? size} color={color} aria-labelledby={svgProps["aria-labelledby"] ?? (title ? idPrefix + "title" : undefined)} aria-label={svgProps["aria-label"] ?? title} role={svgProps["role"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? "img" : undefined)} aria-hidden={svgProps["aria-hidden"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? undefined : true)}>{title ? <title id={idPrefix + "title"}>{title}</title> : null}<path d="M8 5.05042C8.00039 4.44657 8.66756 4.10609 9.15039 4.41565L9.24414 4.48596L12.6143 7.43518C12.9557 7.73394 12.9556 8.26525 12.6143 8.56409L9.24414 11.5133C8.75924 11.9376 8.00013 11.5931 8 10.9489V5.05042Z" fill="currentColor" style={{
      fill: "currentColor",
      fillOpacity: 1
    }} /></svg>;
});
export default IconCaretRightRounded;
