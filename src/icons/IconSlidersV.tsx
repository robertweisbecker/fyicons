import * as React from 'react';
import type { IconProps } from './types';
const IconSlidersV = React.forwardRef<SVGSVGElement, IconProps>(function IconSlidersV(props, ref) {
  const idPrefix = React.useId().replace(/[^a-zA-Z0-9_-]/g, '') + '-';
  const {
    size = 16,
    color,
    title,
    ...svgProps
  } = props;
  return <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...svgProps} ref={ref} width={svgProps["width"] ?? size} height={svgProps["height"] ?? size} color={color} aria-labelledby={svgProps["aria-labelledby"] ?? (title ? idPrefix + "title" : undefined)} aria-label={svgProps["aria-label"] ?? title} role={svgProps["role"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? "img" : undefined)} aria-hidden={svgProps["aria-hidden"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? undefined : true)}>{title ? <title id={idPrefix + "title"}>{title}</title> : null}<path d="M4.5 15C4.77614 15 5 14.7761 5 14.5V12.9492C6.14105 12.7175 7 11.7094 7 10.5C7 9.29051 6.14114 8.28142 5 8.0498V1.5C5 1.22386 4.77614 1 4.5 1C4.22386 1 4 1.22386 4 1.5V8.0498C2.85886 8.28142 2 9.29051 2 10.5C2 11.7094 2.85895 12.7175 4 12.9492V14.5C4 14.7761 4.22386 15 4.5 15ZM11.5 15C11.7761 15 12 14.7761 12 14.5V7.9502C13.1411 7.71858 14 6.70949 14 5.5C14 4.29057 13.141 3.28247 12 3.05078V1.5C12 1.22386 11.7761 1 11.5 1C11.2239 1 11 1.22386 11 1.5V3.05078C9.85895 3.28247 9 4.29057 9 5.5C9 6.70949 9.85886 7.71858 11 7.9502V14.5C11 14.7761 11.2239 15 11.5 15ZM11.5 7C10.6716 7 10 6.32843 10 5.5C10 4.67157 10.6716 4 11.5 4C12.3284 4 13 4.67157 13 5.5C13 6.32843 12.3284 7 11.5 7ZM4.5 12C3.67157 12 3 11.3284 3 10.5C3 9.67157 3.67157 9 4.5 9C5.32843 9 6 9.67157 6 10.5C6 11.3284 5.32843 12 4.5 12Z" fill="currentColor" fillOpacity={1} style={{
      fill: "currentColor",
      fillOpacity: 1
    }} /></svg>;
});
export default IconSlidersV;
