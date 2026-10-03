import * as React from 'react';
import type { IconProps } from './types';
const IconChevronRightSm = React.forwardRef<SVGSVGElement, IconProps>(function IconChevronRightSm(props, ref) {
  const idPrefix = React.useId().replace(/[^a-zA-Z0-9_-]/g, '') + '-';
  const {
    size = 16,
    color,
    title,
    ...svgProps
  } = props;
  return <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...svgProps} ref={ref} width={svgProps["width"] ?? size} height={svgProps["height"] ?? size} color={color} aria-labelledby={svgProps["aria-labelledby"] ?? (title ? idPrefix + "title" : undefined)} aria-label={svgProps["aria-label"] ?? title} role={svgProps["role"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? "img" : undefined)} aria-hidden={svgProps["aria-hidden"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? undefined : true)}>{title ? <title id={idPrefix + "title"}>{title}</title> : null}<path d="M6.14648 4.14648C6.34175 3.95122 6.65825 3.95122 6.85352 4.14648L10.3535 7.64648C10.5487 7.84175 10.5488 8.15827 10.3535 8.35352L6.85352 11.8535C6.65827 12.0488 6.34175 12.0487 6.14648 11.8535C5.95122 11.6583 5.95122 11.3417 6.14648 11.1465L9.29297 8L6.14648 4.85352C5.95122 4.65825 5.95122 4.34175 6.14648 4.14648Z" fill="currentColor" style={{
      fill: "currentColor",
      fillOpacity: 1
    }} /></svg>;
});
export default IconChevronRightSm;
