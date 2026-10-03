import * as React from 'react';
import type { IconProps } from './types';
const IconLayoutPin = React.forwardRef<SVGSVGElement, IconProps>(function IconLayoutPin(props, ref) {
  const idPrefix = React.useId().replace(/[^a-zA-Z0-9_-]/g, '') + '-';
  const {
    size = 16,
    color,
    title,
    ...svgProps
  } = props;
  return <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...svgProps} ref={ref} width={svgProps["width"] ?? size} height={svgProps["height"] ?? size} color={color} aria-labelledby={svgProps["aria-labelledby"] ?? (title ? idPrefix + "title" : undefined)} aria-label={svgProps["aria-label"] ?? title} role={svgProps["role"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? "img" : undefined)} aria-hidden={svgProps["aria-hidden"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? undefined : true)}>{title ? <title id={idPrefix + "title"}>{title}</title> : null}<path d="M6.5 3C6.77614 3 7 3.22386 7 3.5C6.99994 3.77609 6.7761 4 6.5 4H3C2.44772 4 2 4.44772 2 5V11C2.00006 11.5522 2.44775 12 3 12H13C13.5522 12 13.9999 11.5522 14 11V9.5C14 9.22386 14.2239 9 14.5 9C14.7761 9 15 9.22386 15 9.5V11C14.9999 12.1045 14.1045 13 13 13H3C1.89547 13 1.00006 12.1045 1 11V5C1 3.89543 1.89543 3 3 3H6.5ZM11.793 2.5C12.1835 2.10953 12.8165 2.10953 13.207 2.5L14.5 3.79297C14.8904 4.18349 14.8905 4.81654 14.5 5.20703L13 6.70703V8.29297C12.9998 9.1837 11.9229 9.62978 11.293 9L10 7.70703L7.85352 9.85352C7.65827 10.0487 7.34173 10.0487 7.14648 9.85352C6.95124 9.65827 6.95128 9.34175 7.14648 9.14648L9.29297 7L8 5.70703C7.37011 5.07708 7.8162 4.00006 8.70703 4H10.293L11.793 2.5ZM11 4.70703C10.8125 4.89451 10.5581 4.99998 10.293 5H8.70703L12 8.29297V6.70703C12 6.44187 12.1055 6.18751 12.293 6L13.793 4.5L12.5 3.20703L11 4.70703Z" fill="currentColor" style={{
      fill: "currentColor",
      fillOpacity: 1
    }} /></svg>;
});
export default IconLayoutPin;
