import * as React from 'react';
import type { IconProps } from './types';
const IconShieldCheck = React.forwardRef<SVGSVGElement, IconProps>(function IconShieldCheck(props, ref) {
  const idPrefix = React.useId().replace(/[^a-zA-Z0-9_-]/g, '') + '-';
  const {
    size = 16,
    color,
    title,
    ...svgProps
  } = props;
  return <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...svgProps} ref={ref} width={svgProps["width"] ?? size} height={svgProps["height"] ?? size} color={color} aria-labelledby={svgProps["aria-labelledby"] ?? (title ? idPrefix + "title" : undefined)} aria-label={svgProps["aria-label"] ?? title} role={svgProps["role"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? "img" : undefined)} aria-hidden={svgProps["aria-hidden"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? undefined : true)}>{title ? <title id={idPrefix + "title"}>{title}</title> : null}<path d="M7.32324 1.2428C7.75983 1.08609 8.23818 1.08624 8.6748 1.2428L12.9365 2.77307C13.5655 2.99887 13.9694 3.61394 13.9268 4.28088L13.6855 8.05725C13.5666 9.91613 12.656 11.6358 11.1846 12.778L8.6123 14.775L8.4707 14.8668C8.17674 15.0238 7.82118 15.0241 7.52734 14.8668L7.38574 14.775L4.81348 12.778C3.434 11.7071 2.54705 10.1287 2.34375 8.40393L2.3125 8.05725L2.07129 4.28088C2.03136 3.65586 2.38417 3.07612 2.94629 2.81995L3.06152 2.77307L7.32324 1.2428ZM8.33691 2.1842C8.11868 2.10603 7.87933 2.10589 7.66113 2.1842L3.39941 3.71448C3.19045 3.78999 3.05534 3.99463 3.06934 4.21643L3.31055 7.99377C3.41118 9.56656 4.18185 11.0215 5.42676 11.9879L7.99902 13.985L10.5713 11.9879C11.8163 11.0215 12.5868 9.56663 12.6875 7.99377L12.9287 4.21643C12.9427 3.99427 12.8082 3.7897 12.5986 3.71448L8.33691 2.1842ZM9.57617 5.73499C9.72254 5.50115 10.0306 5.42975 10.2646 5.57581C10.4987 5.72206 10.5698 6.03017 10.4238 6.26428L8.20215 9.81995C8.12141 9.94912 7.98533 10.0351 7.83398 10.0524C7.68273 10.0695 7.53147 10.0165 7.42383 9.90881L5.64648 8.13049C5.45159 7.9352 5.45134 7.6186 5.64648 7.42346C5.84166 7.22876 6.15837 7.22871 6.35352 7.42346L7.68652 8.75745L9.57617 5.73499Z" fill="currentColor" style={{
      fill: "currentColor",
      fillOpacity: 1
    }} /></svg>;
});
export default IconShieldCheck;
