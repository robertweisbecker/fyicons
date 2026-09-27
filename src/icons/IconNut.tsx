import * as React from 'react';
import type { IconProps } from './types';
const IconNut = React.forwardRef<SVGSVGElement, IconProps>(function IconNut(props, ref) {
  const idPrefix = React.useId().replace(/[^a-zA-Z0-9_-]/g, '') + '-';
  const {
    size = 16,
    color,
    title,
    ...svgProps
  } = props;
  return <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...svgProps} ref={ref} width={svgProps["width"] ?? size} height={svgProps["height"] ?? size} color={color} aria-labelledby={svgProps["aria-labelledby"] ?? (title ? idPrefix + "title" : undefined)} aria-label={svgProps["aria-label"] ?? title} role={svgProps["role"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? "img" : undefined)} aria-hidden={svgProps["aria-hidden"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? undefined : true)}>{title ? <title id={idPrefix + "title"}>{title}</title> : null}<path d="M7.42188 1.15875C7.76807 0.913682 8.23193 0.913682 8.57812 1.15875L13.5781 4.70074C13.8426 4.88815 13.9999 5.19301 14 5.51715V10.482C14 10.8062 13.8426 11.1109 13.5781 11.2984L8.57812 14.8404L8.44336 14.9205C8.16427 15.0586 7.83573 15.0586 7.55664 14.9205L7.42188 14.8404L2.42188 11.2984C2.15739 11.1109 2 10.8062 2 10.482V5.51715C2.00012 5.23337 2.12062 4.96412 2.32812 4.77594L2.42188 4.70074L7.42188 1.15875ZM3 5.51715V10.482L8 14.024L13 10.482V5.51715L8 1.97516L3 5.51715ZM8 5.49957C9.38057 5.49957 10.4998 6.61905 10.5 7.99957C10.5 9.38029 9.38071 10.4996 8 10.4996C6.61929 10.4996 5.5 9.38029 5.5 7.99957C5.50023 6.61905 6.61943 5.49957 8 5.49957ZM8 6.49957C7.17171 6.49957 6.50023 7.17134 6.5 7.99957C6.5 8.828 7.17157 9.49957 8 9.49957C8.82843 9.49957 9.5 8.828 9.5 7.99957C9.49977 7.17134 8.82829 6.49957 8 6.49957Z" fill="currentColor" style={{
      fill: "currentColor",
      fillOpacity: 1
    }} /></svg>;
});
export default IconNut;
