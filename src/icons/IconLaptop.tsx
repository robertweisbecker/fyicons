import * as React from 'react';
import type { IconProps } from './types';
const IconLaptop = React.forwardRef<SVGSVGElement, IconProps>(function IconLaptop(props, ref) {
  const idPrefix = React.useId().replace(/[^a-zA-Z0-9_-]/g, '') + '-';
  const {
    size = 16,
    color,
    title,
    ...svgProps
  } = props;
  return <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...svgProps} ref={ref} width={svgProps["width"] ?? size} height={svgProps["height"] ?? size} color={color} aria-labelledby={svgProps["aria-labelledby"] ?? (title ? idPrefix + "title" : undefined)} aria-label={svgProps["aria-label"] ?? title} role={svgProps["role"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? "img" : undefined)} aria-hidden={svgProps["aria-hidden"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? undefined : true)}>{title ? <title id={idPrefix + "title"}>{title}</title> : null}<path d="M12 3C13.1046 3 14 3.89543 14 5V10H14.25C14.6642 10 15 10.3358 15 10.75V11C15 12.1046 14.1046 13 13 13H3C1.89543 13 1 12.1046 1 11V10.75C1 10.3358 1.33579 10 1.75 10H2V5C2 3.89543 2.89543 3 4 3H12ZM2 11C2 11.5523 2.44772 12 3 12H13C13.5523 12 14 11.5523 14 11H9.86523C9.69227 11.2987 9.36997 11.5 9 11.5H7C6.63003 11.5 6.30773 11.2987 6.13477 11H2ZM4 4C3.44772 4 3 4.44772 3 5V10H7V10.5H9V10H13V5C13 4.44772 12.5523 4 12 4H4Z" fill="currentColor" style={{
      fill: "currentColor",
      fillOpacity: 1
    }} /></svg>;
});
export default IconLaptop;
