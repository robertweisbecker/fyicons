import * as React from 'react';
import type { IconProps } from './types';
const IconStackX = React.forwardRef<SVGSVGElement, IconProps>(function IconStackX(props, ref) {
  const idPrefix = React.useId().replace(/[^a-zA-Z0-9_-]/g, '') + '-';
  const {
    size = 16,
    color,
    title,
    ...svgProps
  } = props;
  return <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...svgProps} ref={ref} width={svgProps["width"] ?? size} height={svgProps["height"] ?? size} color={color} aria-labelledby={svgProps["aria-labelledby"] ?? (title ? idPrefix + "title" : undefined)} aria-label={svgProps["aria-label"] ?? title} role={svgProps["role"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? "img" : undefined)} aria-hidden={svgProps["aria-hidden"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? undefined : true)}>{title ? <title id={idPrefix + "title"}>{title}</title> : null}<path d="M2 4C2 2.89543 2.89543 2 4 2H8C8.73975 2 9.3835 2.4029 9.72949 3H10.5C11.1528 3 11.706 3.41782 11.9121 4H12.5C13.3284 4 14 4.67157 14 5.5V10.5C14 11.3284 13.3284 12 12.5 12H11.9121C11.706 12.5822 11.1528 13 10.5 13H9.72949C9.3835 13.5971 8.73976 14 8 14H4C2.89543 14 2 13.1046 2 12V4ZM12 11H12.5C12.7761 11 13 10.7761 13 10.5V5.5C13 5.22386 12.7761 5 12.5 5H12V11ZM10.5 12C10.7761 12 11 11.7761 11 11.5V4.5C11 4.22386 10.7761 4 10.5 4H10V12H10.5ZM3 12C3 12.5523 3.44772 13 4 13H8C8.55228 13 9 12.5523 9 12V4C9 3.44772 8.55228 3 8 3H4C3.44772 3 3 3.44772 3 4V12Z" fill="currentColor" style={{
      fill: "currentColor",
      fillOpacity: 1
    }} /></svg>;
});
export default IconStackX;
