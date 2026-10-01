import * as React from 'react';
import type { IconProps } from './types';
const IconBoxShadow3 = React.forwardRef<SVGSVGElement, IconProps>(function IconBoxShadow3(props, ref) {
  const idPrefix = React.useId().replace(/[^a-zA-Z0-9_-]/g, '') + '-';
  const {
    size = 16,
    color,
    title,
    ...svgProps
  } = props;
  return <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...svgProps} ref={ref} width={svgProps["width"] ?? size} height={svgProps["height"] ?? size} color={color} aria-labelledby={svgProps["aria-labelledby"] ?? (title ? idPrefix + "title" : undefined)} aria-label={svgProps["aria-label"] ?? title} role={svgProps["role"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? "img" : undefined)} aria-hidden={svgProps["aria-hidden"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? undefined : true)}>{title ? <title id={idPrefix + "title"}>{title}</title> : null}<rect x={1.5} y={3.5} width={9} height={9} rx={4.5} fill="#DDDDDD" stroke="currentColor" style={{
      fill: "color(display-p3 0.8676 0.8676 0.8676)",
      fillOpacity: 1,
      stroke: "currentColor",
      strokeOpacity: 1
    }} strokeLinecap="round" strokeLinejoin="round" /><path d="M11.7109 7.60736C13.8119 8.1459 15.25 9.23833 15.25 10.4999C15.25 12.2949 12.3399 13.7499 8.75 13.7499C8.22879 13.7499 7.72206 13.718 7.23633 13.6601C9.80306 13.1952 11.75 10.9507 11.75 8.24994C11.75 8.03249 11.7355 7.81822 11.7109 7.60736Z" fill="currentColor" style={{
      fill: "currentColor",
      fillOpacity: 1
    }} /></svg>;
});
export default IconBoxShadow3;
