import * as React from 'react';
import type { IconProps } from './types';
const IconBuildingLandmark = React.forwardRef<SVGSVGElement, IconProps>(function IconBuildingLandmark(props, ref) {
  const idPrefix = React.useId().replace(/[^a-zA-Z0-9_-]/g, '') + '-';
  const {
    size = 16,
    color,
    title,
    ...svgProps
  } = props;
  return <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...svgProps} ref={ref} width={svgProps["width"] ?? size} height={svgProps["height"] ?? size} color={color} aria-labelledby={svgProps["aria-labelledby"] ?? (title ? idPrefix + "title" : undefined)} aria-label={svgProps["aria-label"] ?? title} role={svgProps["role"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? "img" : undefined)} aria-hidden={svgProps["aria-hidden"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? undefined : true)}>{title ? <title id={idPrefix + "title"}>{title}</title> : null}<path d="M7.46289 1.74864C7.79039 1.5403 8.20961 1.5403 8.53711 1.74864L13.4697 4.88731C13.8 5.09754 13.9999 5.46258 14 5.85411C14 6.4374 13.5638 6.91725 13 6.98887V12.9996H13.5C13.776 12.9996 13.9998 13.2237 14 13.4996C14 13.7758 13.7761 13.9996 13.5 13.9996H2.5C2.22386 13.9996 2 13.7758 2 13.4996C2.00023 13.2237 2.224 12.9996 2.5 12.9996H3V6.98887C2.43617 6.91725 2 6.4374 2 5.85411C2.00012 5.46258 2.19996 5.09754 2.53027 4.88731L7.46289 1.74864ZM4 12.9996H12V6.99962H4V12.9996ZM5.5 7.99962C5.776 7.99962 5.99977 8.22367 6 8.49962V11.4996C6 11.7758 5.77614 11.9996 5.5 11.9996C5.22386 11.9996 5 11.7758 5 11.4996V8.49962C5.00023 8.22367 5.224 7.99962 5.5 7.99962ZM8 7.99962C8.276 7.99962 8.49977 8.22367 8.5 8.49962V11.4996C8.5 11.7758 8.27614 11.9996 8 11.9996C7.72386 11.9996 7.5 11.7758 7.5 11.4996V8.49962C7.50023 8.22367 7.724 7.99962 8 7.99962ZM10.5 7.99962C10.776 7.99962 10.9998 8.22367 11 8.49962V11.4996C11 11.7758 10.7761 11.9996 10.5 11.9996C10.2239 11.9996 10 11.7758 10 11.4996V8.49962C10.0002 8.22367 10.224 7.99962 10.5 7.99962ZM3.06738 5.73106C3.02548 5.75773 3.00012 5.80446 3 5.85411C3 5.93449 3.06514 5.99956 3.14551 5.99962H12.8545C12.9349 5.99956 13 5.93449 13 5.85411C12.9999 5.80446 12.9745 5.75773 12.9326 5.73106L8 2.59239L3.06738 5.73106ZM8 4.00059C8.27614 4.00059 8.5 4.22445 8.5 4.50059C8.49974 4.77651 8.27598 5.00059 8 5.00059C7.72402 5.00059 7.50026 4.77651 7.5 4.50059C7.5 4.22445 7.72386 4.00059 8 4.00059Z" fill="currentColor" style={{
      fill: "currentColor",
      fillOpacity: 1
    }} /></svg>;
});
export default IconBuildingLandmark;
