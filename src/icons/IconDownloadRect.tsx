import * as React from 'react';
import type { IconProps } from './types';
const IconDownloadRect = React.forwardRef<SVGSVGElement, IconProps>(function IconDownloadRect(props, ref) {
  const idPrefix = React.useId().replace(/[^a-zA-Z0-9_-]/g, '') + '-';
  const {
    size = 16,
    color,
    title,
    ...svgProps
  } = props;
  return <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...svgProps} ref={ref} width={svgProps["width"] ?? size} height={svgProps["height"] ?? size} color={color} aria-labelledby={svgProps["aria-labelledby"] ?? (title ? idPrefix + "title" : undefined)} aria-label={svgProps["aria-label"] ?? title} role={svgProps["role"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? "img" : undefined)} aria-hidden={svgProps["aria-hidden"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? undefined : true)}>{title ? <title id={idPrefix + "title"}>{title}</title> : null}<path d="M5 5H3C2.44772 5 2 5.44772 2 6V11C2 11.5523 2.44772 12 3 12H13C13.5523 12 14 11.5523 14 11V6C14 5.44772 13.5523 5 13 5H11V4H13C14.1046 4 15 4.89543 15 6V11C15 12.1046 14.1046 13 13 13H3C1.89543 13 1 12.1046 1 11V6C1 4.89543 1.89543 4 3 4H5V5ZM8 2C8.27614 2 8.5 2.22386 8.5 2.5V8.29297L9.64648 7.14648C9.84175 6.95122 10.1583 6.95122 10.3535 7.14648C10.5488 7.34175 10.5488 7.65825 10.3535 7.85352L8.35352 9.85352C8.15825 10.0488 7.84175 10.0488 7.64648 9.85352L5.64648 7.85352C5.45122 7.65825 5.45122 7.34175 5.64648 7.14648C5.84175 6.95122 6.15825 6.95122 6.35352 7.14648L7.5 8.29297V2.5C7.5 2.22386 7.72386 2 8 2Z" fill="currentColor" style={{
      fill: "currentColor",
      fillOpacity: 1
    }} /></svg>;
});
export default IconDownloadRect;
