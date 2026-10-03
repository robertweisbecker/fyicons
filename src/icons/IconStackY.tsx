import * as React from 'react';
import type { IconProps } from './types';
const IconStackY = React.forwardRef<SVGSVGElement, IconProps>(function IconStackY(props, ref) {
  const idPrefix = React.useId().replace(/[^a-zA-Z0-9_-]/g, '') + '-';
  const {
    size = 16,
    color,
    title,
    ...svgProps
  } = props;
  return <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...svgProps} ref={ref} width={svgProps["width"] ?? size} height={svgProps["height"] ?? size} color={color} aria-labelledby={svgProps["aria-labelledby"] ?? (title ? idPrefix + "title" : undefined)} aria-label={svgProps["aria-label"] ?? title} role={svgProps["role"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? "img" : undefined)} aria-hidden={svgProps["aria-hidden"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? undefined : true)}>{title ? <title id={idPrefix + "title"}>{title}</title> : null}<path d="M12 2C13.1046 2 14 2.89543 14 4V8C14 8.73976 13.5971 9.3835 13 9.72949V10.5C13 11.1528 12.5822 11.706 12 11.9121V12.5C12 13.3284 11.3284 14 10.5 14H5.5C4.67157 14 4 13.3284 4 12.5V11.9121C3.41782 11.706 3 11.1528 3 10.5V9.72949C2.4029 9.3835 2 8.73976 2 8V4C2 2.89543 2.89543 2 4 2H12ZM5 12V12.5C5 12.7761 5.22386 13 5.5 13H10.5C10.7761 13 11 12.7761 11 12.5V12H5ZM4 10.5C4 10.7761 4.22386 11 4.5 11H11.5C11.7761 11 12 10.7761 12 10.5V10H4V10.5ZM4 3C3.44772 3 3 3.44772 3 4V8C3 8.55228 3.44772 9 4 9H12C12.5523 9 13 8.55228 13 8V4C13 3.44772 12.5523 3 12 3H4Z" fill="currentColor" style={{
      fill: "currentColor",
      fillOpacity: 1
    }} /></svg>;
});
export default IconStackY;
