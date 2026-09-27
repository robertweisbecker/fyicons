import * as React from 'react';
import type { IconProps } from './types';
const IconVolumeMedSlashFill = React.forwardRef<SVGSVGElement, IconProps>(function IconVolumeMedSlashFill(props, ref) {
  const idPrefix = React.useId().replace(/[^a-zA-Z0-9_-]/g, '') + '-';
  const {
    size = 16,
    color,
    title,
    ...svgProps
  } = props;
  return <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...svgProps} ref={ref} width={svgProps["width"] ?? size} height={svgProps["height"] ?? size} color={color} aria-labelledby={svgProps["aria-labelledby"] ?? (title ? idPrefix + "title" : undefined)} aria-label={svgProps["aria-label"] ?? title} role={svgProps["role"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? "img" : undefined)} aria-hidden={svgProps["aria-hidden"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? undefined : true)}>{title ? <title id={idPrefix + "title"}>{title}</title> : null}<path d="M9 11.1208V12.0886C8.99991 12.7343 8.23816 13.0781 7.75391 12.6511L4.75 10.0007H3C2.44775 10.0007 2.00005 9.55293 2 9.00068V7.00068C2.00002 6.44845 2.44776 6.00073 3 6.00068H3.87988L9 11.1208ZM10.4951 6.06416C10.7976 6.14146 11.0801 6.28988 11.3184 6.49873C11.683 6.81861 11.9191 7.26097 11.9824 7.74189C12.0456 8.2227 11.9325 8.71073 11.6631 9.11396C11.6063 9.19892 11.541 9.27682 11.4727 9.35126L10.7656 8.64423C10.7887 8.61676 10.8109 8.58835 10.8311 8.5583C10.9657 8.35671 11.0227 8.11213 10.9912 7.87177C10.9595 7.63153 10.8413 7.41052 10.6592 7.25068C10.6037 7.20204 10.5434 7.1596 10.4795 7.1247C10.2373 6.99238 10.0003 6.77855 10 6.50263C10 6.22651 10.2276 5.99583 10.4951 6.06416ZM7.75391 3.35029C8.23817 2.92303 8.99997 3.26699 9 3.91279V6.87861L6.54102 4.41962L7.75391 3.35029Z" fill="currentColor" style={{
      fill: "currentColor",
      fillOpacity: 1
    }} /><path d="M2.5 2.5L13.5 13.5" stroke="currentColor" style={{
      stroke: "currentColor",
      strokeOpacity: 1
    }} strokeLinecap="round" /></svg>;
});
export default IconVolumeMedSlashFill;
