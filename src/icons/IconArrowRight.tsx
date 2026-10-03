import * as React from 'react';
import type { IconProps } from './types';
const IconArrowRight = React.forwardRef<SVGSVGElement, IconProps>(function IconArrowRight(props, ref) {
  const idPrefix = React.useId().replace(/[^a-zA-Z0-9_-]/g, '') + '-';
  const {
    size = 16,
    color,
    title,
    ...svgProps
  } = props;
  return <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...svgProps} ref={ref} width={svgProps["width"] ?? size} height={svgProps["height"] ?? size} color={color} aria-labelledby={svgProps["aria-labelledby"] ?? (title ? idPrefix + "title" : undefined)} aria-label={svgProps["aria-label"] ?? title} role={svgProps["role"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? "img" : undefined)} aria-hidden={svgProps["aria-hidden"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? undefined : true)}>{title ? <title id={idPrefix + "title"}>{title}</title> : null}<path d="M8.64648 3.64693C8.84175 3.45167 9.15825 3.45167 9.35352 3.64693L13.3535 7.64693C13.5485 7.84222 13.5487 8.15879 13.3535 8.35397L9.35352 12.354C9.15832 12.5489 8.8417 12.5489 8.64648 12.354C8.45129 12.1588 8.45142 11.8422 8.64648 11.6469L11.793 8.50045H2.5C2.22403 8.50045 2.00028 8.27636 2 8.00045C2 7.72431 2.22386 7.50045 2.5 7.50045H11.793L8.64648 4.35397C8.45131 4.15879 8.45148 3.84222 8.64648 3.64693Z" fill="currentColor" style={{
      fill: "currentColor",
      fillOpacity: 1
    }} /></svg>;
});
export default IconArrowRight;
