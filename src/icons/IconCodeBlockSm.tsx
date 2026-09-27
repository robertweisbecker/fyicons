import * as React from 'react';
import type { IconProps } from './types';
const IconCodeBlockSm = React.forwardRef<SVGSVGElement, IconProps>(function IconCodeBlockSm(props, ref) {
  const idPrefix = React.useId().replace(/[^a-zA-Z0-9_-]/g, '') + '-';
  const {
    size = 16,
    color,
    title,
    ...svgProps
  } = props;
  return <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...svgProps} ref={ref} width={svgProps["width"] ?? size} height={svgProps["height"] ?? size} color={color} aria-labelledby={svgProps["aria-labelledby"] ?? (title ? idPrefix + "title" : undefined)} aria-label={svgProps["aria-label"] ?? title} role={svgProps["role"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? "img" : undefined)} aria-hidden={svgProps["aria-hidden"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? undefined : true)}>{title ? <title id={idPrefix + "title"}>{title}</title> : null}<path d="M11 2C12.6569 2 14 3.34315 14 5V11C14 12.6569 12.6569 14 11 14H5C3.34315 14 2 12.6569 2 11V5C2 3.34315 3.34315 2 5 2H11ZM5 3C3.89543 3 3 3.89543 3 5V11C3 12.1046 3.89543 13 5 13H11C12.1046 13 13 12.1046 13 11V5C13 3.89543 12.1046 3 11 3H5ZM6.14648 6.14648C6.34175 5.95122 6.65825 5.95122 6.85352 6.14648C7.04878 6.34175 7.04878 6.65825 6.85352 6.85352L5.70703 8L6.85352 9.14648C7.04878 9.34175 7.04878 9.65825 6.85352 9.85352C6.65825 10.0488 6.34175 10.0488 6.14648 9.85352L4.64648 8.35352C4.45122 8.15825 4.45122 7.84175 4.64648 7.64648L6.14648 6.14648ZM9.14648 6.14648C9.34175 5.95122 9.65825 5.95122 9.85352 6.14648L11.3535 7.64648C11.5488 7.84175 11.5488 8.15825 11.3535 8.35352L9.85352 9.85352C9.65825 10.0488 9.34175 10.0488 9.14648 9.85352C8.95122 9.65825 8.95122 9.34175 9.14648 9.14648L10.293 8L9.14648 6.85352C8.95122 6.65825 8.95122 6.34175 9.14648 6.14648Z" fill="currentColor" style={{
      fill: "currentColor",
      fillOpacity: 1
    }} /></svg>;
});
export default IconCodeBlockSm;
