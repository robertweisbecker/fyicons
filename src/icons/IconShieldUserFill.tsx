import * as React from 'react';
import type { IconProps } from './types';
const IconShieldUserFill = React.forwardRef<SVGSVGElement, IconProps>(function IconShieldUserFill(props, ref) {
  const idPrefix = React.useId().replace(/[^a-zA-Z0-9_-]/g, '') + '-';
  const {
    size = 16,
    color,
    title,
    ...svgProps
  } = props;
  return <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...svgProps} ref={ref} width={svgProps["width"] ?? size} height={svgProps["height"] ?? size} color={color} aria-labelledby={svgProps["aria-labelledby"] ?? (title ? idPrefix + "title" : undefined)} aria-label={svgProps["aria-label"] ?? title} role={svgProps["role"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? "img" : undefined)} aria-hidden={svgProps["aria-hidden"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? undefined : true)}>{title ? <title id={idPrefix + "title"}>{title}</title> : null}<path d="M7.32324 1.2428C7.75983 1.08609 8.23818 1.08624 8.6748 1.2428L12.9365 2.77307C13.5655 2.99887 13.9694 3.61394 13.9268 4.28088L13.6855 8.05725C13.5666 9.91613 12.656 11.6358 11.1846 12.778L8.6123 14.775L8.4707 14.8668C8.17674 15.0238 7.82118 15.0241 7.52734 14.8668L7.38574 14.775L4.81348 12.778C3.434 11.7071 2.54705 10.1287 2.34375 8.40393L2.3125 8.05725L2.07129 4.28088C2.03136 3.65586 2.38417 3.07612 2.94629 2.81995L3.06152 2.77307L7.32324 1.2428ZM8.33691 2.1842C8.11868 2.10603 7.87933 2.10589 7.66113 2.1842L3.39941 3.71448C3.19045 3.78999 3.05534 3.99463 3.06934 4.21643L3.31055 7.99377C3.40219 9.42607 4.05135 10.7586 5.10645 11.7155C5.45159 10.4395 6.61486 9.49963 8 9.49963C9.38471 9.49967 10.5471 10.4391 10.8926 11.7145C11.9474 10.7577 12.5958 9.42583 12.6875 7.99377L12.9287 4.21643C12.9427 3.99427 12.8082 3.7897 12.5986 3.71448L8.33691 2.1842ZM8 5.24963C8.96634 5.24968 9.7498 6.03333 9.75 6.99963C9.75 7.96611 8.96646 8.74959 8 8.74963C7.0335 8.74963 6.25 7.96613 6.25 6.99963C6.2502 6.03331 7.03363 5.24963 8 5.24963Z" fill="currentColor" style={{
      fill: "currentColor",
      fillOpacity: 1
    }} /></svg>;
});
export default IconShieldUserFill;
