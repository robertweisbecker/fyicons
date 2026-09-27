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
  return <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...svgProps} ref={ref} width={svgProps["width"] ?? size} height={svgProps["height"] ?? size} color={color} aria-labelledby={svgProps["aria-labelledby"] ?? (title ? idPrefix + "title" : undefined)} aria-label={svgProps["aria-label"] ?? title} role={svgProps["role"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? "img" : undefined)} aria-hidden={svgProps["aria-hidden"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? undefined : true)}>{title ? <title id={idPrefix + "title"}>{title}</title> : null}<path d="M7.14648 4.14651C7.34175 3.95125 7.65825 3.95125 7.85352 4.14651L11.3535 7.64651C11.5487 7.84178 11.5488 8.1583 11.3535 8.35355L7.85352 11.8535C7.65827 12.0488 7.34175 12.0488 7.14648 11.8535C6.95122 11.6583 6.95122 11.3418 7.14648 11.1465L10.293 8.00003L7.14648 4.85355C6.95122 4.65828 6.95122 4.34178 7.14648 4.14651Z" fill="currentColor" style={{
      fill: "currentColor",
      fillOpacity: 1
    }} /></svg>;
});
export default IconChevronRightSm;
