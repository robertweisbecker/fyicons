import * as React from 'react';
import type { IconProps } from './types';
const IconCamera = React.forwardRef<SVGSVGElement, IconProps>(function IconCamera(props, ref) {
  const idPrefix = React.useId().replace(/[^a-zA-Z0-9_-]/g, '') + '-';
  const {
    size = 16,
    color,
    title,
    ...svgProps
  } = props;
  return <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...svgProps} ref={ref} width={svgProps["width"] ?? size} height={svgProps["height"] ?? size} color={color} aria-labelledby={svgProps["aria-labelledby"] ?? (title ? idPrefix + "title" : undefined)} aria-label={svgProps["aria-label"] ?? title} role={svgProps["role"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? "img" : undefined)} aria-hidden={svgProps["aria-hidden"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? undefined : true)}>{title ? <title id={idPrefix + "title"}>{title}</title> : null}<path d="M9.37891 2C9.90929 2.00008 10.418 2.21098 10.793 2.58594L11.6465 3.43945C12.0055 3.79839 12.4924 4 13 4C14.1046 4 15 4.89543 15 6V11C15 12.1046 14.1046 13 13 13H3C1.89543 13 1.00001 12.1046 1 11V6C1 4.89543 1.89543 4 3 4C3.50765 4 3.99454 3.79839 4.35352 3.43945L5.20703 2.58594C5.58199 2.21098 6.09071 2.00008 6.62109 2H9.37891ZM6.62109 3C6.35602 3.00006 6.10159 3.10545 5.91406 3.29297L5.06055 4.14648C4.51403 4.69296 3.77286 5 3 5C2.44772 5 2 5.44772 2 6V11L2.00488 11.1025C2.05622 11.6067 2.48234 12 3 12H13C13.5177 12 13.9438 11.6067 13.9951 11.1025L14 11V6C14 5.44772 13.5523 5 13 5C12.2271 5 11.486 4.69296 10.9395 4.14648L10.0859 3.29297C9.92182 3.12885 9.70644 3.02763 9.47754 3.00488L9.37891 3H6.62109ZM8 5C9.65685 5 11 6.34315 11 8C11 9.65685 9.65685 11 8 11C6.34315 11 5 9.65685 5 8C5 6.34315 6.34315 5 8 5ZM8 6C6.89543 6 6 6.89543 6 8C6 9.10457 6.89543 10 8 10C9.10457 10 10 9.10457 10 8C10 6.89543 9.10457 6 8 6ZM12.5 6C12.7761 6 13 6.22386 13 6.5C13 6.77614 12.7761 7 12.5 7C12.2239 7 12 6.77614 12 6.5C12 6.22386 12.2239 6 12.5 6Z" fill="currentColor" style={{
      fill: "currentColor",
      fillOpacity: 1
    }} /></svg>;
});
export default IconCamera;
