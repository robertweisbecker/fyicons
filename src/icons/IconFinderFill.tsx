import * as React from 'react';
import type { IconProps } from './types';
const IconFinderFill = React.forwardRef<SVGSVGElement, IconProps>(function IconFinderFill(props, ref) {
  const idPrefix = React.useId().replace(/[^a-zA-Z0-9_-]/g, '') + '-';
  const {
    size = 16,
    color,
    title,
    ...svgProps
  } = props;
  return <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...svgProps} ref={ref} width={svgProps["width"] ?? size} height={svgProps["height"] ?? size} color={color} aria-labelledby={svgProps["aria-labelledby"] ?? (title ? idPrefix + "title" : undefined)} aria-label={svgProps["aria-label"] ?? title} role={svgProps["role"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? "img" : undefined)} aria-hidden={svgProps["aria-hidden"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? undefined : true)}>{title ? <title id={idPrefix + "title"}>{title}</title> : null}<path d="M11.5 2.00024C12.8807 2.00024 14 3.11953 14 4.50024V11.5002C14 12.881 12.8807 14.0002 11.5 14.0002H4.5C3.11929 14.0002 2 12.881 2 11.5002V4.50024C2 3.11953 3.11929 2.00024 4.5 2.00024H11.5ZM7.21973 8.34204C7.11191 8.66567 7.35226 9.00003 7.69336 9.00024H8V11.0002L7.78223 10.9954C7.28695 10.9729 6.88049 10.8721 6.52734 10.6956C6.12385 10.4938 5.75788 10.177 5.40039 9.70044C5.2348 9.47966 4.92109 9.43451 4.7002 9.59985C4.47946 9.76548 4.43422 10.0792 4.59961 10.3C5.0279 10.8711 5.50769 11.3039 6.08008 11.5901C6.58099 11.8405 7.12894 11.9668 7.73633 11.9944L8 12.0002V13.0002H11.5C12.3284 13.0002 13 12.3287 13 11.5002V4.50024C13 3.67182 12.3284 3.00024 11.5 3.00024H9L7.21973 8.34204ZM10.5996 9.70044C10.7652 9.47971 11.0789 9.43451 11.2998 9.59985C11.5205 9.76547 11.5657 10.0792 11.4004 10.3C10.7754 11.1333 10.0504 11.6595 9.11523 11.8801C8.76508 11.9627 8.394 12.0002 8 12.0002V11.0002C8.33047 11.0002 8.62236 10.9683 8.88477 10.9065C9.55129 10.7493 10.0878 10.3826 10.5996 9.70044ZM5.5 5.00024C5.22387 5.00026 5 5.22411 5 5.50024V6.50024C5.00014 6.77625 5.22396 7.00022 5.5 7.00024C5.77599 7.00017 5.99986 6.77622 6 6.50024V5.50024C6 5.22415 5.77608 5.00032 5.5 5.00024ZM10.5 5.00024C10.7761 5.00024 11 5.2241 11 5.50024V6.50024C10.9999 6.77627 10.7761 7.00024 10.5 7.00024C10.2239 7.00024 10.0001 6.77627 10 6.50024V5.50024C10 5.2241 10.2239 5.00024 10.5 5.00024Z" fill="currentColor" style={{
      fill: "currentColor",
      fillOpacity: 1
    }} /><path d="M7.5 9.5H8.5" stroke="currentColor" style={{
      stroke: "currentColor",
      strokeOpacity: 1
    }} strokeLinecap="round" strokeLinejoin="round" /></svg>;
});
export default IconFinderFill;
