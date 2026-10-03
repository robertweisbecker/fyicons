import * as React from 'react';
import type { IconProps } from './types';
const IconChevronLeftSm = React.forwardRef<SVGSVGElement, IconProps>(function IconChevronLeftSm(props, ref) {
  const idPrefix = React.useId().replace(/[^a-zA-Z0-9_-]/g, '') + '-';
  const {
    size = 16,
    color,
    title,
    ...svgProps
  } = props;
  return <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...svgProps} ref={ref} width={svgProps["width"] ?? size} height={svgProps["height"] ?? size} color={color} aria-labelledby={svgProps["aria-labelledby"] ?? (title ? idPrefix + "title" : undefined)} aria-label={svgProps["aria-label"] ?? title} role={svgProps["role"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? "img" : undefined)} aria-hidden={svgProps["aria-hidden"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? undefined : true)}>{title ? <title id={idPrefix + "title"}>{title}</title> : null}<path d="M9.14648 4.14648C9.34175 3.95122 9.65825 3.95122 9.85352 4.14648C10.0487 4.34175 10.0488 4.65827 9.85352 4.85352L6.70703 8L9.85352 11.1465C10.0487 11.3417 10.0488 11.6583 9.85352 11.8535C9.65827 12.0488 9.34175 12.0487 9.14648 11.8535L5.64648 8.35352C5.45122 8.15825 5.45122 7.84175 5.64648 7.64648L9.14648 4.14648Z" fill="currentColor" style={{
      fill: "currentColor",
      fillOpacity: 1
    }} /></svg>;
});
export default IconChevronLeftSm;
