import * as React from 'react';
import type { IconProps } from './types';
const IconAlignHorizontalCenter = React.forwardRef<SVGSVGElement, IconProps>(function IconAlignHorizontalCenter(props, ref) {
  const idPrefix = React.useId().replace(/[^a-zA-Z0-9_-]/g, '') + '-';
  const {
    size = 16,
    color,
    title,
    ...svgProps
  } = props;
  return <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...svgProps} ref={ref} width={svgProps["width"] ?? size} height={svgProps["height"] ?? size} color={color} aria-labelledby={svgProps["aria-labelledby"] ?? (title ? idPrefix + "title" : undefined)} aria-label={svgProps["aria-label"] ?? title} role={svgProps["role"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? "img" : undefined)} aria-hidden={svgProps["aria-hidden"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? undefined : true)}>{title ? <title id={idPrefix + "title"}>{title}</title> : null}<path d="M6.41797 7.72461C6.54613 7.91869 6.52438 8.18265 6.35352 8.35352L4.35352 10.3535C4.15825 10.5488 3.84175 10.5488 3.64648 10.3535C3.45122 10.1583 3.45122 9.84175 3.64648 9.64648L4.79297 8.5H1.5C1.22386 8.5 1 8.27614 1 8C1 7.72386 1.22386 7.5 1.5 7.5H4.79297L3.64648 6.35352C3.45122 6.15825 3.45122 5.84175 3.64648 5.64648C3.84175 5.45122 4.15825 5.45122 4.35352 5.64648L6.35352 7.64648L6.41797 7.72461ZM8.5 13.5C8.5 13.7761 8.27614 14 8 14C7.72386 14 7.5 13.7761 7.5 13.5V2.5C7.5 2.22386 7.72386 2 8 2C8.27614 2 8.5 2.22386 8.5 2.5V13.5ZM15 8C15 8.27614 14.7761 8.5 14.5 8.5H11.207L12.3535 9.64648C12.5488 9.84175 12.5488 10.1583 12.3535 10.3535C12.1583 10.5488 11.8417 10.5488 11.6465 10.3535L9.64648 8.35352C9.47562 8.18265 9.45387 7.91869 9.58203 7.72461L9.64648 7.64648L11.6465 5.64648C11.8417 5.45122 12.1583 5.45122 12.3535 5.64648C12.5488 5.84175 12.5488 6.15825 12.3535 6.35352L11.207 7.5H14.5C14.7761 7.5 15 7.72386 15 8Z" fill="currentColor" style={{
      fill: "currentColor",
      fillOpacity: 1
    }} /></svg>;
});
export default IconAlignHorizontalCenter;
