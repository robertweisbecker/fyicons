import * as React from 'react';
import type { IconProps } from './types';
const IconBag = React.forwardRef<SVGSVGElement, IconProps>(function IconBag(props, ref) {
  const idPrefix = React.useId().replace(/[^a-zA-Z0-9_-]/g, '') + '-';
  const {
    size = 16,
    color,
    title,
    ...svgProps
  } = props;
  return <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...svgProps} ref={ref} width={svgProps["width"] ?? size} height={svgProps["height"] ?? size} color={color} aria-labelledby={svgProps["aria-labelledby"] ?? (title ? idPrefix + "title" : undefined)} aria-label={svgProps["aria-label"] ?? title} role={svgProps["role"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? "img" : undefined)} aria-hidden={svgProps["aria-hidden"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? undefined : true)}>{title ? <title id={idPrefix + "title"}>{title}</title> : null}<path d="M8 1C9.65685 1 11 2.34315 11 4C12.6569 4 14 5.34315 14 7V11C14 12.6569 12.6569 14 11 14H5C3.34315 14 2 12.6569 2 11V7C2 5.34315 3.34315 4 5 4C5 2.34315 6.34315 1 8 1ZM5 5C3.89543 5 3 5.89543 3 7V11C3 12.1046 3.89543 13 5 13H11C12.1046 13 13 12.1046 13 11V7C13 5.89543 12.1046 5 11 5V6.5C11 6.77614 10.7761 7 10.5 7C10.2239 7 10 6.77614 10 6.5V5H6V6.5C6 6.77614 5.77614 7 5.5 7C5.22386 7 5 6.77614 5 6.5V5ZM8 2C6.89543 2 6 2.89543 6 4H10C10 2.89543 9.10457 2 8 2Z" fill="currentColor" style={{
      fill: "currentColor",
      fillOpacity: 1
    }} /></svg>;
});
export default IconBag;
