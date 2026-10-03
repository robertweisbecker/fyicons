import * as React from 'react';
import type { IconProps } from './types';
const IconChevronDownSm = React.forwardRef<SVGSVGElement, IconProps>(function IconChevronDownSm(props, ref) {
  const idPrefix = React.useId().replace(/[^a-zA-Z0-9_-]/g, '') + '-';
  const {
    size = 16,
    color,
    title,
    ...svgProps
  } = props;
  return <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...svgProps} ref={ref} width={svgProps["width"] ?? size} height={svgProps["height"] ?? size} color={color} aria-labelledby={svgProps["aria-labelledby"] ?? (title ? idPrefix + "title" : undefined)} aria-label={svgProps["aria-label"] ?? title} role={svgProps["role"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? "img" : undefined)} aria-hidden={svgProps["aria-hidden"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? undefined : true)}>{title ? <title id={idPrefix + "title"}>{title}</title> : null}<path d="M11.1465 6.14648C11.3417 5.95122 11.6583 5.95122 11.8535 6.14648C12.0487 6.34175 12.0488 6.65827 11.8535 6.85352L8.35352 10.3535C8.15827 10.5488 7.84175 10.5487 7.64648 10.3535L4.14648 6.85352C3.95122 6.65825 3.95122 6.34175 4.14648 6.14648C4.34175 5.95122 4.65825 5.95122 4.85352 6.14648L8 9.29297L11.1465 6.14648Z" fill="currentColor" style={{
      fill: "currentColor",
      fillOpacity: 1
    }} /></svg>;
});
export default IconChevronDownSm;
