import * as React from 'react';
import type { IconProps } from './types';
const IconSquareX = React.forwardRef<SVGSVGElement, IconProps>(function IconSquareX(props, ref) {
  const idPrefix = React.useId().replace(/[^a-zA-Z0-9_-]/g, '') + '-';
  const {
    size = 16,
    color,
    title,
    ...svgProps
  } = props;
  return <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...svgProps} ref={ref} width={svgProps["width"] ?? size} height={svgProps["height"] ?? size} color={color} aria-labelledby={svgProps["aria-labelledby"] ?? (title ? idPrefix + "title" : undefined)} aria-label={svgProps["aria-label"] ?? title} role={svgProps["role"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? "img" : undefined)} aria-hidden={svgProps["aria-hidden"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? undefined : true)}>{title ? <title id={idPrefix + "title"}>{title}</title> : null}<path d="M11 2C12.6569 2 14 3.34315 14 5V11C14 12.6569 12.6569 14 11 14H5C3.34315 14 2 12.6569 2 11V5C2 3.34315 3.34315 2 5 2H11ZM5 3C3.89543 3 3 3.89543 3 5V11C3 12.1046 3.89543 13 5 13H11C12.1046 13 13 12.1046 13 11V5C13 3.89543 12.1046 3 11 3H5ZM9.64648 5.64648C9.84175 5.45122 10.1583 5.45122 10.3535 5.64648C10.5488 5.84175 10.5488 6.15825 10.3535 6.35352L8.70703 8L10.3535 9.64648C10.5488 9.84175 10.5488 10.1583 10.3535 10.3535C10.1583 10.5488 9.84175 10.5488 9.64648 10.3535L8 8.70703L6.35352 10.3535C6.15825 10.5488 5.84175 10.5488 5.64648 10.3535C5.45122 10.1583 5.45122 9.84175 5.64648 9.64648L7.29297 8L5.64648 6.35352C5.45122 6.15825 5.45122 5.84175 5.64648 5.64648C5.84175 5.45122 6.15825 5.45122 6.35352 5.64648L8 7.29297L9.64648 5.64648Z" fill="currentColor" style={{
      fill: "currentColor",
      fillOpacity: 1
    }} /></svg>;
});
export default IconSquareX;
