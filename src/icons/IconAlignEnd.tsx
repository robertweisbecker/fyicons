import * as React from 'react';
import type { IconProps } from './types';
const IconAlignEnd = React.forwardRef<SVGSVGElement, IconProps>(function IconAlignEnd(props, ref) {
  const idPrefix = React.useId().replace(/[^a-zA-Z0-9_-]/g, '') + '-';
  const {
    size = 16,
    color,
    title,
    ...svgProps
  } = props;
  return <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...svgProps} ref={ref} width={svgProps["width"] ?? size} height={svgProps["height"] ?? size} color={color} aria-labelledby={svgProps["aria-labelledby"] ?? (title ? idPrefix + "title" : undefined)} aria-label={svgProps["aria-label"] ?? title} role={svgProps["role"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? "img" : undefined)} aria-hidden={svgProps["aria-hidden"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? undefined : true)}>{title ? <title id={idPrefix + "title"}>{title}</title> : null}<path d="M13 2.5C13 2.22386 13.2239 2 13.5 2C13.7761 2 14 2.22386 14 2.5V13.5C14 13.7761 13.7761 14 13.5 14C13.2239 14 13 13.7761 13 13.5V2.5ZM2 8C2 7.72386 2.22386 7.5 2.5 7.5H9.79297L7.64648 5.35352C7.45122 5.15825 7.45122 4.84175 7.64648 4.64648C7.84175 4.45122 8.15825 4.45122 8.35352 4.64648L11.3535 7.64648C11.5244 7.81735 11.5461 8.08131 11.418 8.27539L11.3535 8.35352L8.35352 11.3535C8.15825 11.5488 7.84175 11.5488 7.64648 11.3535C7.45122 11.1583 7.45122 10.8417 7.64648 10.6465L9.79297 8.5H2.5C2.22386 8.5 2 8.27614 2 8Z" fill="currentColor" style={{
      fill: "currentColor",
      fillOpacity: 1
    }} /></svg>;
});
export default IconAlignEnd;
