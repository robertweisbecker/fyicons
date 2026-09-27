import * as React from 'react';
import type { IconProps } from './types';
const IconVolumeMedFill = React.forwardRef<SVGSVGElement, IconProps>(function IconVolumeMedFill(props, ref) {
  const idPrefix = React.useId().replace(/[^a-zA-Z0-9_-]/g, '') + '-';
  const {
    size = 16,
    color,
    title,
    ...svgProps
  } = props;
  return <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...svgProps} ref={ref} width={svgProps["width"] ?? size} height={svgProps["height"] ?? size} color={color} aria-labelledby={svgProps["aria-labelledby"] ?? (title ? idPrefix + "title" : undefined)} aria-label={svgProps["aria-label"] ?? title} role={svgProps["role"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? "img" : undefined)} aria-hidden={svgProps["aria-hidden"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? undefined : true)}>{title ? <title id={idPrefix + "title"}>{title}</title> : null}<path d="M7.73633 3.18952C8.2149 2.73946 8.99972 3.07848 9 3.73542V12.2637C9 12.9209 8.21499 13.2606 7.73633 12.8106L4.75 10.0001H3C2.44772 10.0001 2 9.55236 2 9.00007V7.00007C2.00002 6.44783 2.44776 6.00012 3 6.00007H4.75L7.73633 3.18952ZM10.4951 6.06355C10.5871 6.08704 10.6776 6.11694 10.7656 6.15339C11.008 6.25382 11.2285 6.40153 11.4141 6.58698C11.5995 6.77245 11.7472 6.99316 11.8477 7.23542C11.9481 7.47781 11.9999 7.73869 12 8.00105C12 8.26342 11.948 8.52423 11.8477 8.76667C11.7472 9.00903 11.5995 9.22955 11.4141 9.41511C11.2285 9.60068 11.0081 9.7482 10.7656 9.8487C10.6775 9.8852 10.5872 9.91601 10.4951 9.93952C10.2276 10.0078 10 9.77719 10 9.50105V9.3946C10 9.17765 10.1824 9.0079 10.3828 8.92487C10.504 8.87462 10.6143 8.80083 10.707 8.70808C10.7997 8.61534 10.8737 8.50495 10.9238 8.38386C10.9739 8.26274 11 8.1321 11 8.00105C10.9999 7.87002 10.974 7.73929 10.9238 7.61823C10.8736 7.49725 10.7997 7.38665 10.707 7.29401C10.6143 7.20139 10.5039 7.12739 10.3828 7.07722C10.1824 6.99421 10 6.82537 10 6.60847V6.50105C10.0002 6.22509 10.2277 5.99527 10.4951 6.06355Z" fill="currentColor" style={{
      fill: "currentColor",
      fillOpacity: 1
    }} /></svg>;
});
export default IconVolumeMedFill;
