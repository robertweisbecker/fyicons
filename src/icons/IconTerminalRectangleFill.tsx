import * as React from 'react';
import type { IconProps } from './types';
const IconTerminalRectangleFill = React.forwardRef<SVGSVGElement, IconProps>(function IconTerminalRectangleFill(props, ref) {
  const idPrefix = React.useId().replace(/[^a-zA-Z0-9_-]/g, '') + '-';
  const {
    size = 16,
    color,
    title,
    ...svgProps
  } = props;
  return <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...svgProps} ref={ref} width={svgProps["width"] ?? size} height={svgProps["height"] ?? size} color={color} aria-labelledby={svgProps["aria-labelledby"] ?? (title ? idPrefix + "title" : undefined)} aria-label={svgProps["aria-label"] ?? title} role={svgProps["role"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? "img" : undefined)} aria-hidden={svgProps["aria-hidden"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? undefined : true)}>{title ? <title id={idPrefix + "title"}>{title}</title> : null}<path d="M13 3C14.1046 3 15 3.89543 15 5V11C15 12.1046 14.1046 13 13 13H3C1.89543 13 1 12.1046 1 11V5C1 3.89543 1.89543 3 3 3H13ZM4.35352 5.64648C4.15825 5.45148 3.84167 5.45135 3.64648 5.64648C3.4513 5.84167 3.45147 6.15823 3.64648 6.35352L5.29297 8L3.64648 9.64648C3.4513 9.84166 3.45147 10.1582 3.64648 10.3535C3.84175 10.5488 4.15825 10.5488 4.35352 10.3535L6.35352 8.35352C6.54873 8.15825 6.54876 7.84173 6.35352 7.64648L4.35352 5.64648ZM7.5 9C7.22405 9.00011 7.00016 9.22406 7 9.5C7.0002 9.77591 7.22407 9.99989 7.5 10H10.5C10.776 10 10.9998 9.77597 11 9.5C10.9998 9.22399 10.776 9 10.5 9H7.5Z" fill="currentColor" style={{
      fill: "currentColor",
      fillOpacity: 1
    }} /></svg>;
});
export default IconTerminalRectangleFill;
