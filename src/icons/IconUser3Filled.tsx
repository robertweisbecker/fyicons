import * as React from 'react';
import type { IconProps } from './types';
const IconUser3Filled = React.forwardRef<SVGSVGElement, IconProps>(function IconUser3Filled(props, ref) {
  const idPrefix = React.useId().replace(/[^a-zA-Z0-9_-]/g, '') + '-';
  const {
    size = 16,
    color,
    title,
    ...svgProps
  } = props;
  return <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...svgProps} ref={ref} width={svgProps["width"] ?? size} height={svgProps["height"] ?? size} color={color} aria-labelledby={svgProps["aria-labelledby"] ?? (title ? idPrefix + "title" : undefined)} aria-label={svgProps["aria-label"] ?? title} role={svgProps["role"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? "img" : undefined)} aria-hidden={svgProps["aria-hidden"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? undefined : true)}>{title ? <title id={idPrefix + "title"}>{title}</title> : null}<path d="M7.9976 1C9.47423 1.00016 10.9984 1.88246 10.9986 4.08789C10.9986 5.79518 10.6414 7.34242 9.81269 8.22625C9.65801 8.39121 9.7252 8.71191 9.94248 8.77457C11.853 9.32555 13.4275 10.6679 14.2876 12.4248C14.9252 13.727 13.7472 14.9997 12.2974 15H3.70268C2.25265 15 1.07395 13.7272 1.71147 12.4248C2.57103 10.6689 4.14401 9.3264 6.05297 8.77468C6.27006 8.71194 6.33714 8.39165 6.18265 8.22673C5.35468 7.34287 4.99858 5.79531 4.99858 4.08789C4.99874 1.88226 6.52085 1 7.9976 1Z" fill="currentColor" style={{
      fill: "currentColor",
      fillOpacity: 1
    }} /></svg>;
});
export default IconUser3Filled;
