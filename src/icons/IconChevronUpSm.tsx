import * as React from 'react';
import type { IconProps } from './types';
const IconChevronUpSm = React.forwardRef<SVGSVGElement, IconProps>(function IconChevronUpSm(props, ref) {
  const idPrefix = React.useId().replace(/[^a-zA-Z0-9_-]/g, '') + '-';
  const {
    size = 16,
    color,
    title,
    ...svgProps
  } = props;
  return <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...svgProps} ref={ref} width={svgProps["width"] ?? size} height={svgProps["height"] ?? size} color={color} aria-labelledby={svgProps["aria-labelledby"] ?? (title ? idPrefix + "title" : undefined)} aria-label={svgProps["aria-label"] ?? title} role={svgProps["role"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? "img" : undefined)} aria-hidden={svgProps["aria-hidden"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? undefined : true)}>{title ? <title id={idPrefix + "title"}>{title}</title> : null}<path d="M8 5.5C8.13259 5.50001 8.25976 5.55272 8.35352 5.64648L11.8535 9.14648C12.0487 9.34175 12.0488 9.65827 11.8535 9.85352C11.6583 10.0488 11.3417 10.0487 11.1465 9.85352L8 6.70703L4.85352 9.85352C4.65827 10.0488 4.34175 10.0487 4.14648 9.85352C3.95122 9.65825 3.95122 9.34175 4.14648 9.14648L7.64648 5.64648C7.74025 5.55272 7.86739 5.5 8 5.5Z" fill="currentColor" style={{
      fill: "currentColor",
      fillOpacity: 1
    }} /></svg>;
});
export default IconChevronUpSm;
