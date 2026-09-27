import * as React from 'react';
import type { IconProps } from './types';
const IconShieldUser = React.forwardRef<SVGSVGElement, IconProps>(function IconShieldUser(props, ref) {
  const idPrefix = React.useId().replace(/[^a-zA-Z0-9_-]/g, '') + '-';
  const {
    size = 16,
    color,
    title,
    ...svgProps
  } = props;
  return <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...svgProps} ref={ref} width={svgProps["width"] ?? size} height={svgProps["height"] ?? size} color={color} aria-labelledby={svgProps["aria-labelledby"] ?? (title ? idPrefix + "title" : undefined)} aria-label={svgProps["aria-label"] ?? title} role={svgProps["role"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? "img" : undefined)} aria-hidden={svgProps["aria-hidden"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? undefined : true)}>{title ? <title id={idPrefix + "title"}>{title}</title> : null}<path d="M7.32324 1.2428C7.75983 1.08609 8.23818 1.08624 8.6748 1.2428L12.9365 2.77307C13.5655 2.99887 13.9694 3.61394 13.9268 4.28088L13.6855 8.05725C13.5666 9.91613 12.656 11.6358 11.1846 12.778L8.6123 14.775L8.4707 14.8668C8.17674 15.0238 7.82118 15.0241 7.52734 14.8668L7.38574 14.775L4.81348 12.778C3.434 11.7071 2.54705 10.1287 2.34375 8.40393L2.3125 8.05725L2.07129 4.28088C2.03136 3.65586 2.38417 3.07612 2.94629 2.81995L3.06152 2.77307L7.32324 1.2428ZM8 9.49963C6.61941 9.49963 5.5002 10.6191 5.5 11.9996V12.0446L7.99902 13.985L10.5 12.0426V11.9996C10.4998 10.6191 9.38055 9.49968 8 9.49963ZM8.33691 2.1842C8.11868 2.10603 7.87933 2.10589 7.66113 2.1842L3.39941 3.71448C3.19045 3.78999 3.05534 3.99463 3.06934 4.21643L3.31055 7.99377C3.38637 9.17875 3.84299 10.2965 4.5957 11.1891C4.83736 10.1708 5.52269 9.32397 6.4375 8.86682C6.01423 8.4577 5.75 7.8848 5.75 7.24963C5.7502 6.00716 6.75748 4.99963 8 4.99963C9.24248 4.99968 10.2498 6.00719 10.25 7.24963C10.25 7.88501 9.98504 8.45768 9.56152 8.86682C10.4761 9.32357 11.1611 10.1695 11.4033 11.1871C12.1554 10.2948 12.6117 9.17822 12.6875 7.99377L12.9287 4.21643C12.9427 3.99427 12.8082 3.7897 12.5986 3.71448L8.33691 2.1842ZM8 5.99963C7.30977 5.99963 6.7502 6.55945 6.75 7.24963C6.75 7.93999 7.30964 8.49963 8 8.49963C8.69032 8.49959 9.25 7.93996 9.25 7.24963C9.2498 6.55947 8.6902 5.99968 8 5.99963Z" fill="currentColor" style={{
      fill: "currentColor",
      fillOpacity: 1
    }} /></svg>;
});
export default IconShieldUser;
