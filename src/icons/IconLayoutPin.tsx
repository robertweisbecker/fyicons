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
  return <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...svgProps} ref={ref} width={svgProps["width"] ?? size} height={svgProps["height"] ?? size} color={color} aria-labelledby={svgProps["aria-labelledby"] ?? (title ? idPrefix + "title" : undefined)} aria-label={svgProps["aria-label"] ?? title} role={svgProps["role"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? "img" : undefined)} aria-hidden={svgProps["aria-hidden"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? undefined : true)}>{title ? <title id={idPrefix + "title"}>{title}</title> : null}<path d="M6.5 3.00011C6.77614 3.00011 7 3.22397 7 3.50011C6.99994 3.7762 6.7761 4.00011 6.5 4.00011H3C2.44772 4.00011 2 4.44783 2 5.00011V11.0001C2.00006 11.5523 2.44775 12.0001 3 12.0001H13C13.5522 12.0001 13.9999 11.5523 14 11.0001V9.50011C14 9.22397 14.2239 9.00011 14.5 9.00011C14.7761 9.00011 15 9.22397 15 9.50011V11.0001C14.9999 12.1046 14.1045 13.0001 13 13.0001H3C1.89547 13.0001 1.00006 12.1046 1 11.0001V5.00011C1 3.89555 1.89543 3.00011 3 3.00011H6.5ZM11.793 2.50011C12.1835 2.10964 12.8165 2.10964 13.207 2.50011L14.5 3.79308C14.8904 4.1836 14.8905 4.81665 14.5 5.20715L13 6.70715V8.29308C12.9998 9.18382 11.9229 9.6299 11.293 9.00011L10 7.70715L7.85352 9.85363C7.65827 10.0488 7.34173 10.0488 7.14648 9.85363C6.95124 9.65839 6.95128 9.34187 7.14648 9.1466L9.29297 7.00011L8 5.70715C7.37011 5.07719 7.8162 4.00018 8.70703 4.00011H10.293L11.793 2.50011ZM11 4.70715C10.8125 4.89463 10.5581 5.00009 10.293 5.00011H8.70703L12 8.29308V6.70715C12 6.44198 12.1055 6.18763 12.293 6.00011L13.793 4.50011L12.5 3.20715L11 4.70715Z" fill="currentColor" style={{
      fill: "currentColor",
      fillOpacity: 1
    }} /></svg>;
});
export default IconLayoutPin;
