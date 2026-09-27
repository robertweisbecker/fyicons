import * as React from 'react';
import type { IconProps } from './types';
const IconAlignMiddleV = React.forwardRef<SVGSVGElement, IconProps>(function IconAlignMiddleV(props, ref) {
  const idPrefix = React.useId().replace(/[^a-zA-Z0-9_-]/g, '') + '-';
  const {
    size = 16,
    color,
    title,
    ...svgProps
  } = props;
  return <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...svgProps} ref={ref} width={svgProps["width"] ?? size} height={svgProps["height"] ?? size} color={color} aria-labelledby={svgProps["aria-labelledby"] ?? (title ? idPrefix + "title" : undefined)} aria-label={svgProps["aria-label"] ?? title} role={svgProps["role"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? "img" : undefined)} aria-hidden={svgProps["aria-hidden"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? undefined : true)}>{title ? <title id={idPrefix + "title"}>{title}</title> : null}<path d="M7.72461 9.58203C7.91869 9.45387 8.18265 9.47562 8.35352 9.64648L10.3535 11.6465C10.5488 11.8417 10.5488 12.1583 10.3535 12.3535C10.1583 12.5488 9.84175 12.5488 9.64648 12.3535L8.5 11.207V14.5C8.5 14.7761 8.27614 15 8 15C7.72386 15 7.5 14.7761 7.5 14.5V11.207L6.35352 12.3535C6.15825 12.5488 5.84175 12.5488 5.64648 12.3535C5.45122 12.1583 5.45122 11.8417 5.64648 11.6465L7.64648 9.64648L7.72461 9.58203ZM12.5 7.5C12.7761 7.5 13 7.72386 13 8C13 8.27614 12.7761 8.5 12.5 8.5H3.5C3.22386 8.5 3 8.27614 3 8C3 7.72386 3.22386 7.5 3.5 7.5H12.5ZM8 1C8.27614 1 8.5 1.22386 8.5 1.5V4.79297L9.64648 3.64648C9.84175 3.45122 10.1583 3.45122 10.3535 3.64648C10.5488 3.84175 10.5488 4.15825 10.3535 4.35352L8.35352 6.35352C8.18265 6.52438 7.91869 6.54613 7.72461 6.41797L7.64648 6.35352L5.64648 4.35352C5.45122 4.15825 5.45122 3.84175 5.64648 3.64648C5.84175 3.45122 6.15825 3.45122 6.35352 3.64648L7.5 4.79297V1.5C7.5 1.22386 7.72386 1 8 1Z" fill="currentColor" fillOpacity={1} style={{
      fill: "currentColor",
      fillOpacity: 1
    }} /></svg>;
});
export default IconAlignMiddleV;
