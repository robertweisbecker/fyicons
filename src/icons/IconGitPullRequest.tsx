import * as React from 'react';
import type { IconProps } from './types';
const IconGitPullRequest = React.forwardRef<SVGSVGElement, IconProps>(function IconGitPullRequest(props, ref) {
  const idPrefix = React.useId().replace(/[^a-zA-Z0-9_-]/g, '') + '-';
  const {
    size = 16,
    color,
    title,
    ...svgProps
  } = props;
  return <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...svgProps} ref={ref} width={svgProps["width"] ?? size} height={svgProps["height"] ?? size} color={color} aria-labelledby={svgProps["aria-labelledby"] ?? (title ? idPrefix + "title" : undefined)} aria-label={svgProps["aria-label"] ?? title} role={svgProps["role"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? "img" : undefined)} aria-hidden={svgProps["aria-hidden"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? undefined : true)}>{title ? <title id={idPrefix + "title"}>{title}</title> : null}<path d="M9.14746 1.85398C9.46244 1.539 10.001 1.76204 10.001 2.20749V3.50046H10.501C11.6055 3.50046 12.501 4.39589 12.501 5.50046V10.0659C13.3628 10.2885 14 11.0691 14 12.0005C13.9998 13.1048 13.1044 14.0005 12 14.0005C10.8957 14.0003 10.0002 13.1047 10 12.0005C10 11.0685 10.6383 10.2869 11.501 10.0649V5.50046C11.501 4.94818 11.0533 4.50046 10.501 4.50046H10.001V5.79343C10.0006 6.23847 9.46235 6.46157 9.14746 6.14695L7.35449 4.35398C7.15941 4.15884 7.15964 3.84222 7.35449 3.64695L9.14746 1.85398ZM4 1.99949C5.10439 1.99949 5.99971 2.89516 6 3.99949C6 4.93106 5.36213 5.71073 4.5 5.93308V10.0649C5.36216 10.2871 5.99975 11.068 6 11.9995C6 13.1041 5.10457 13.9995 4 13.9995C2.89543 13.9995 2 13.1041 2 11.9995C2.00025 11.068 2.63784 10.2871 3.5 10.0649V5.93308C2.63787 5.71073 2 4.93106 2 3.99949C2.00029 2.89516 2.89561 1.99949 4 1.99949ZM12 11.0005C11.4478 11.0006 11 11.4483 11 12.0005C11.0002 12.5525 11.448 13.0003 12 13.0005C12.5521 13.0005 12.9998 12.5526 13 12.0005C13 11.4482 12.5523 11.0005 12 11.0005ZM4 10.9995C3.44789 10.9995 3.00029 11.4474 3 11.9995C3 12.5518 3.44772 12.9995 4 12.9995C4.55228 12.9995 5 12.5518 5 11.9995C4.99971 11.4474 4.55211 10.9995 4 10.9995ZM4 2.99949C3.44789 2.99949 3.00029 3.44745 3 3.99949C3 4.55177 3.44772 4.99949 4 4.99949C4.55228 4.99949 5 4.55177 5 3.99949C4.99971 3.44745 4.55211 2.99949 4 2.99949Z" fill="currentColor" style={{
      fill: "currentColor",
      fillOpacity: 1
    }} /></svg>;
});
export default IconGitPullRequest;
