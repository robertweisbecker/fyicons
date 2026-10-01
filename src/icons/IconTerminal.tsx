import * as React from 'react';
import type { IconProps } from './types';
const IconTerminal = React.forwardRef<SVGSVGElement, IconProps>(function IconTerminal(props, ref) {
  const idPrefix = React.useId().replace(/[^a-zA-Z0-9_-]/g, '') + '-';
  const {
    size = 16,
    color,
    title,
    ...svgProps
  } = props;
  return <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...svgProps} ref={ref} width={svgProps["width"] ?? size} height={svgProps["height"] ?? size} color={color} aria-labelledby={svgProps["aria-labelledby"] ?? (title ? idPrefix + "title" : undefined)} aria-label={svgProps["aria-label"] ?? title} role={svgProps["role"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? "img" : undefined)} aria-hidden={svgProps["aria-hidden"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? undefined : true)}>{title ? <title id={idPrefix + "title"}>{title}</title> : null}<path d="M13 3C14.1046 3 15 3.89543 15 5V11C15 12.1046 14.1046 13 13 13H3C1.89543 13 1 12.1046 1 11V5C1 3.89543 1.89543 3 3 3H13ZM3 4C2.44772 4 2 4.44772 2 5V11C2 11.5523 2.44772 12 3 12H13C13.5523 12 14 11.5523 14 11V5C14 4.44772 13.5523 4 13 4H3ZM3.64648 5.64648C3.84175 5.45122 4.15825 5.45122 4.35352 5.64648L6.35352 7.64648C6.54878 7.84175 6.54878 8.15825 6.35352 8.35352L4.35352 10.3535C4.15825 10.5488 3.84175 10.5488 3.64648 10.3535C3.45122 10.1583 3.45122 9.84175 3.64648 9.64648L5.29297 8L3.64648 6.35352C3.45122 6.15825 3.45122 5.84175 3.64648 5.64648ZM10.5 9C10.7761 9 11 9.22386 11 9.5C11 9.77614 10.7761 10 10.5 10H7.5C7.22386 10 7 9.77614 7 9.5C7 9.22386 7.22386 9 7.5 9H10.5Z" fill="currentColor" style={{
      fill: "currentColor",
      fillOpacity: 1
    }} /></svg>;
});
export default IconTerminal;
