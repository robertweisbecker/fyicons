import * as React from 'react';
import type { IconProps } from './types';
const IconSquarrowUp = React.forwardRef<SVGSVGElement, IconProps>(function IconSquarrowUp(props, ref) {
  const idPrefix = React.useId().replace(/[^a-zA-Z0-9_-]/g, '') + '-';
  const {
    size = 16,
    color,
    title,
    ...svgProps
  } = props;
  return <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...svgProps} ref={ref} width={svgProps["width"] ?? size} height={svgProps["height"] ?? size} color={color} aria-labelledby={svgProps["aria-labelledby"] ?? (title ? idPrefix + "title" : undefined)} aria-label={svgProps["aria-label"] ?? title} role={svgProps["role"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? "img" : undefined)} aria-hidden={svgProps["aria-hidden"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? undefined : true)}>{title ? <title id={idPrefix + "title"}>{title}</title> : null}<path d="M2 11.5C2 12.8807 3.11929 14 4.5 14H6C7.38071 14 8.5 12.8807 8.5 11.5V6.70703L10.1465 8.35352C10.3417 8.54878 10.6583 8.54878 10.8535 8.35352C11.0488 8.15825 11.0488 7.84175 10.8535 7.64648L8.35352 5.14648C8.15825 4.95122 7.84175 4.95122 7.64648 5.14648L5.14648 7.64648C4.95122 7.84175 4.95122 8.15825 5.14648 8.35352C5.34175 8.54878 5.65825 8.54878 5.85352 8.35352L7.5 6.70703V11.5C7.5 12.3284 6.82843 13 6 13H4.5C3.67157 13 3 12.3284 3 11.5V4.5C3 3.67157 3.67157 3 4.5 3H11.5C12.3284 3 13 3.67157 13 4.5V11.5C13 12.3284 12.3284 13 11.5 13C11.2239 13 11 13.2239 11 13.5C11 13.7761 11.2239 14 11.5 14C12.8807 14 14 12.8807 14 11.5V4.5C14 3.11929 12.8807 2 11.5 2H4.5C3.11929 2 2 3.11929 2 4.5V11.5Z" fill="currentColor" style={{
      fill: "currentColor",
      fillOpacity: 1
    }} /></svg>;
});
export default IconSquarrowUp;
