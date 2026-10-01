import * as React from 'react';
import type { IconProps } from './types';
const IconAlignBottom = React.forwardRef<SVGSVGElement, IconProps>(function IconAlignBottom(props, ref) {
  const idPrefix = React.useId().replace(/[^a-zA-Z0-9_-]/g, '') + '-';
  const {
    size = 16,
    color,
    title,
    ...svgProps
  } = props;
  return <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...svgProps} ref={ref} width={svgProps["width"] ?? size} height={svgProps["height"] ?? size} color={color} aria-labelledby={svgProps["aria-labelledby"] ?? (title ? idPrefix + "title" : undefined)} aria-label={svgProps["aria-label"] ?? title} role={svgProps["role"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? "img" : undefined)} aria-hidden={svgProps["aria-hidden"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? undefined : true)}>{title ? <title id={idPrefix + "title"}>{title}</title> : null}<path d="M13.5 13C13.7761 13 14 13.2239 14 13.5C14 13.7761 13.7761 14 13.5 14H2.5C2.22386 14 2 13.7761 2 13.5C2 13.2239 2.22386 13 2.5 13H13.5ZM8 2C8.27614 2 8.5 2.22386 8.5 2.5V9.79297L10.6465 7.64648C10.8417 7.45122 11.1583 7.45122 11.3535 7.64648C11.5488 7.84175 11.5488 8.15825 11.3535 8.35352L8.35352 11.3535C8.18265 11.5244 7.91869 11.5461 7.72461 11.418L7.64648 11.3535L4.64648 8.35352C4.45122 8.15825 4.45122 7.84175 4.64648 7.64648C4.84175 7.45122 5.15825 7.45122 5.35352 7.64648L7.5 9.79297V2.5C7.5 2.22386 7.72386 2 8 2Z" fill="currentColor" style={{
      fill: "currentColor",
      fillOpacity: 1
    }} /></svg>;
});
export default IconAlignBottom;
