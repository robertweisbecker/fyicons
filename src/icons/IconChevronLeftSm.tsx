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
  return <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...svgProps} ref={ref} width={svgProps["width"] ?? size} height={svgProps["height"] ?? size} color={color} aria-labelledby={svgProps["aria-labelledby"] ?? (title ? idPrefix + "title" : undefined)} aria-label={svgProps["aria-label"] ?? title} role={svgProps["role"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? "img" : undefined)} aria-hidden={svgProps["aria-hidden"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? undefined : true)}>{title ? <title id={idPrefix + "title"}>{title}</title> : null}<path d="M9.14648 4.14651C9.34175 3.95125 9.65825 3.95125 9.85352 4.14651C10.0487 4.34178 10.0488 4.6583 9.85352 4.85355L6.70703 8.00003L9.85352 11.1465C10.0487 11.3418 10.0488 11.6583 9.85352 11.8535C9.65827 12.0488 9.34175 12.0488 9.14648 11.8535L5.64648 8.35355C5.45122 8.15828 5.45122 7.84178 5.64648 7.64651L9.14648 4.14651Z" fill="currentColor" style={{
      fill: "currentColor",
      fillOpacity: 1
    }} /></svg>;
});
export default IconChevronLeftSm;
