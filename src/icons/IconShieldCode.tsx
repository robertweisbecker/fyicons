import * as React from 'react';
import type { IconProps } from './types';
const IconShieldCode = React.forwardRef<SVGSVGElement, IconProps>(function IconShieldCode(props, ref) {
  const idPrefix = React.useId().replace(/[^a-zA-Z0-9_-]/g, '') + '-';
  const {
    size = 16,
    color,
    title,
    ...svgProps
  } = props;
  return <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...svgProps} ref={ref} width={svgProps["width"] ?? size} height={svgProps["height"] ?? size} color={color} aria-labelledby={svgProps["aria-labelledby"] ?? (title ? idPrefix + "title" : undefined)} aria-label={svgProps["aria-label"] ?? title} role={svgProps["role"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? "img" : undefined)} aria-hidden={svgProps["aria-hidden"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? undefined : true)}>{title ? <title id={idPrefix + "title"}>{title}</title> : null}<path d="M7.32324 1.2428C7.75983 1.08609 8.23818 1.08624 8.6748 1.2428L12.9365 2.77307C13.5655 2.99887 13.9694 3.61394 13.9268 4.28088L13.6855 8.05725C13.5666 9.91613 12.656 11.6358 11.1846 12.778L8.6123 14.775L8.4707 14.8668C8.17674 15.0238 7.82118 15.0241 7.52734 14.8668L7.38574 14.775L4.81348 12.778C3.434 11.7071 2.54705 10.1287 2.34375 8.40393L2.3125 8.05725L2.07129 4.28088C2.03136 3.65586 2.38417 3.07612 2.94629 2.81995L3.06152 2.77307L7.32324 1.2428ZM8.33691 2.1842C8.11868 2.10603 7.87933 2.10589 7.66113 2.1842L3.39941 3.71448C3.19045 3.78999 3.05534 3.99463 3.06934 4.21643L3.31055 7.99377C3.41118 9.56656 4.18185 11.0215 5.42676 11.9879L7.99902 13.985L10.5713 11.9879C11.8163 11.0215 12.5868 9.56663 12.6875 7.99377L12.9287 4.21643C12.9427 3.99427 12.8082 3.7897 12.5986 3.71448L8.33691 2.1842ZM6.39648 6.39612C6.59171 6.20115 6.90832 6.2011 7.10352 6.39612C7.29866 6.5913 7.29852 6.90788 7.10352 7.10315L6.20703 7.99963L7.10352 8.89612C7.29866 9.0913 7.29852 9.40788 7.10352 9.60315C6.90827 9.7984 6.59175 9.79837 6.39648 9.60315L5.14648 8.35315C4.95139 8.15787 4.95128 7.84133 5.14648 7.64612L6.39648 6.39612ZM8.89648 6.39612C9.09171 6.20115 9.40832 6.2011 9.60352 6.39612L10.8535 7.64612C11.0487 7.8413 11.0485 8.15788 10.8535 8.35315L9.60352 9.60315C9.40827 9.7984 9.09175 9.79837 8.89648 9.60315C8.70139 9.40787 8.70128 9.09132 8.89648 8.89612L9.79297 7.99963L8.89648 7.10315C8.70139 6.90787 8.70128 6.59133 8.89648 6.39612Z" fill="currentColor" style={{
      fill: "currentColor",
      fillOpacity: 1
    }} /></svg>;
});
export default IconShieldCode;
