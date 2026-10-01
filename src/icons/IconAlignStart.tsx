import * as React from 'react';
import type { IconProps } from './types';
const IconAlignStart = React.forwardRef<SVGSVGElement, IconProps>(function IconAlignStart(props, ref) {
  const idPrefix = React.useId().replace(/[^a-zA-Z0-9_-]/g, '') + '-';
  const {
    size = 16,
    color,
    title,
    ...svgProps
  } = props;
  return <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...svgProps} ref={ref} width={svgProps["width"] ?? size} height={svgProps["height"] ?? size} color={color} aria-labelledby={svgProps["aria-labelledby"] ?? (title ? idPrefix + "title" : undefined)} aria-label={svgProps["aria-label"] ?? title} role={svgProps["role"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? "img" : undefined)} aria-hidden={svgProps["aria-hidden"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? undefined : true)}>{title ? <title id={idPrefix + "title"}>{title}</title> : null}<path d="M3 13.5C3 13.7761 2.77614 14 2.5 14C2.22386 14 2 13.7761 2 13.5V2.5C2 2.22386 2.22386 2 2.5 2C2.77614 2 3 2.22386 3 2.5V13.5ZM14 8C14 8.27614 13.7761 8.5 13.5 8.5H6.20703L8.35352 10.6465C8.54878 10.8417 8.54878 11.1583 8.35352 11.3535C8.15825 11.5488 7.84175 11.5488 7.64648 11.3535L4.64648 8.35352C4.47562 8.18265 4.45387 7.91869 4.58203 7.72461L4.64648 7.64648L7.64648 4.64648C7.84175 4.45122 8.15825 4.45122 8.35352 4.64648C8.54878 4.84175 8.54878 5.15825 8.35352 5.35352L6.20703 7.5H13.5C13.7761 7.5 14 7.72386 14 8Z" fill="currentColor" style={{
      fill: "currentColor",
      fillOpacity: 1
    }} /></svg>;
});
export default IconAlignStart;
