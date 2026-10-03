import * as React from 'react';
import type { IconProps } from './types';
const IconTerminalFill = React.forwardRef<SVGSVGElement, IconProps>(function IconTerminalFill(props, ref) {
  const idPrefix = React.useId().replace(/[^a-zA-Z0-9_-]/g, '') + '-';
  const {
    size = 16,
    color,
    title,
    ...svgProps
  } = props;
  return <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...svgProps} ref={ref} width={svgProps["width"] ?? size} height={svgProps["height"] ?? size} color={color} aria-labelledby={svgProps["aria-labelledby"] ?? (title ? idPrefix + "title" : undefined)} aria-label={svgProps["aria-label"] ?? title} role={svgProps["role"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? "img" : undefined)} aria-hidden={svgProps["aria-hidden"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? undefined : true)}>{title ? <title id={idPrefix + "title"}>{title}</title> : null}<path d="M11 2C12.6569 2 14 3.34315 14 5V11C14 12.6569 12.6569 14 11 14H5C3.34315 14 2 12.6569 2 11V5C2 3.34315 3.34315 2 5 2H11ZM5.85449 6.14746C5.65923 5.9522 5.34272 5.9522 5.14746 6.14746C4.9522 6.34272 4.9522 6.65923 5.14746 6.85449L6.79395 8.50098L5.14746 10.1475C4.9522 10.3427 4.9522 10.6592 5.14746 10.8545C5.34275 11.0494 5.65934 11.0496 5.85449 10.8545L7.85449 8.85449C8.04964 8.65934 8.04942 8.34275 7.85449 8.14746L5.85449 6.14746ZM8.50098 10.001C8.22483 10.001 8.00098 10.2248 8.00098 10.501C8.00124 10.7769 8.225 11.001 8.50098 11.001H10.501C10.7767 11.0007 11.0007 10.7767 11.001 10.501C11.001 10.225 10.7769 10.0012 10.501 10.001H8.50098Z" fill="currentColor" style={{
      fill: "currentColor",
      fillOpacity: 1
    }} /></svg>;
});
export default IconTerminalFill;
