import * as React from 'react';
import type { IconProps } from './types';
const IconArrowDown = React.forwardRef<SVGSVGElement, IconProps>(function IconArrowDown(props, ref) {
  const idPrefix = React.useId().replace(/[^a-zA-Z0-9_-]/g, '') + '-';
  const {
    size = 16,
    color,
    title,
    ...svgProps
  } = props;
  return <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...svgProps} ref={ref} width={svgProps["width"] ?? size} height={svgProps["height"] ?? size} color={color} aria-labelledby={svgProps["aria-labelledby"] ?? (title ? idPrefix + "title" : undefined)} aria-label={svgProps["aria-label"] ?? title} role={svgProps["role"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? "img" : undefined)} aria-hidden={svgProps["aria-hidden"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? undefined : true)}>{title ? <title id={idPrefix + "title"}>{title}</title> : null}<path d="M8 2C8.27613 2.00002 8.5 2.22387 8.5 2.5V11.793L12.1465 8.14648C12.3417 7.95124 12.6583 7.95123 12.8535 8.14648C13.0488 8.34174 13.0488 8.65826 12.8535 8.85352L8.35352 13.3535C8.15826 13.5488 7.84175 13.5488 7.64648 13.3535L3.14648 8.85352C2.95122 8.65825 2.95122 8.34175 3.14648 8.14648C3.34175 7.95124 3.65826 7.95123 3.85352 8.14648L7.5 11.793V2.5C7.5 2.22386 7.72386 2 8 2Z" fill="currentColor" style={{
      fill: "currentColor",
      fillOpacity: 1
    }} /></svg>;
});
export default IconArrowDown;
