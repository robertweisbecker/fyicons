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
  return <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...svgProps} ref={ref} width={svgProps["width"] ?? size} height={svgProps["height"] ?? size} color={color} aria-labelledby={svgProps["aria-labelledby"] ?? (title ? idPrefix + "title" : undefined)} aria-label={svgProps["aria-label"] ?? title} role={svgProps["role"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? "img" : undefined)} aria-hidden={svgProps["aria-hidden"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? undefined : true)}>{title ? <title id={idPrefix + "title"}>{title}</title> : null}<path d="M6 5.05115C6.00012 4.447 6.66745 4.10658 7.15039 4.41639L7.24414 4.4867L10.6143 7.43592C10.9556 7.73476 10.9557 8.26607 10.6143 8.56482L7.24414 11.514C6.75933 11.938 6.00044 11.5935 6 10.9496V5.05115Z" fill="currentColor" style={{
      fill: "currentColor",
      fillOpacity: 1
    }} /></svg>;
});
export default IconCaretRightRounded;
