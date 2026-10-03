import * as React from 'react';
import type { IconProps } from './types';
const IconChevronRight = React.forwardRef<SVGSVGElement, IconProps>(function IconChevronRight(props, ref) {
  const idPrefix = React.useId().replace(/[^a-zA-Z0-9_-]/g, '') + '-';
  const {
    size = 16,
    color,
    title,
    ...svgProps
  } = props;
  return <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...svgProps} ref={ref} width={svgProps["width"] ?? size} height={svgProps["height"] ?? size} color={color} aria-labelledby={svgProps["aria-labelledby"] ?? (title ? idPrefix + "title" : undefined)} aria-label={svgProps["aria-label"] ?? title} role={svgProps["role"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? "img" : undefined)} aria-hidden={svgProps["aria-hidden"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? undefined : true)}>{title ? <title id={idPrefix + "title"}>{title}</title> : null}<path d="M6.14648 2.14648C6.34175 1.95122 6.65825 1.95122 6.85352 2.14648L12.3535 7.64648C12.5487 7.84175 12.5488 8.15827 12.3535 8.35352L6.85352 13.8535C6.65827 14.0488 6.34175 14.0487 6.14648 13.8535C5.95122 13.6583 5.95122 13.3417 6.14648 13.1465L11.293 8L6.14648 2.85352C5.95122 2.65825 5.95122 2.34175 6.14648 2.14648Z" fill="currentColor" style={{
      fill: "currentColor",
      fillOpacity: 1
    }} /></svg>;
});
export default IconChevronRight;
