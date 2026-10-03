import * as React from 'react';
import type { IconProps } from './types';
const IconCalculatorSimple = React.forwardRef<SVGSVGElement, IconProps>(function IconCalculatorSimple(props, ref) {
  const idPrefix = React.useId().replace(/[^a-zA-Z0-9_-]/g, '') + '-';
  const {
    size = 16,
    color,
    title,
    ...svgProps
  } = props;
  return <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...svgProps} ref={ref} width={svgProps["width"] ?? size} height={svgProps["height"] ?? size} color={color} aria-labelledby={svgProps["aria-labelledby"] ?? (title ? idPrefix + "title" : undefined)} aria-label={svgProps["aria-label"] ?? title} role={svgProps["role"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? "img" : undefined)} aria-hidden={svgProps["aria-hidden"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? undefined : true)}>{title ? <title id={idPrefix + "title"}>{title}</title> : null}<path d="M11.5 1C12.3284 1 13 1.67157 13 2.5V13.5C13 14.3284 12.3284 15 11.5 15H4.5C3.67157 15 3 14.3284 3 13.5V2.5C3 1.67157 3.67157 1 4.5 1H11.5ZM4 13.5C4 13.7761 4.22386 14 4.5 14H6V12H4V13.5ZM10 14H11.5C11.7761 14 12 13.7761 12 13.5V9H10V14ZM7 12V14H9V12H7ZM7 11H9V9H7V11ZM4 11H6V9H4V11ZM4 8H6V6H4V8ZM10 8H12V6H10V8ZM7 8H9V6H7V8ZM4.5 2C4.22386 2 4 2.22386 4 2.5V5H12V2.5C12 2.22386 11.7761 2 11.5 2H4.5Z" fill="currentColor" style={{
      fill: "currentColor",
      fillOpacity: 1
    }} /></svg>;
});
export default IconCalculatorSimple;
