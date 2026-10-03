import * as React from 'react';
import type { IconProps } from './types';
const IconStickyNote2 = React.forwardRef<SVGSVGElement, IconProps>(function IconStickyNote2(props, ref) {
  const idPrefix = React.useId().replace(/[^a-zA-Z0-9_-]/g, '') + '-';
  const {
    size = 16,
    color,
    title,
    ...svgProps
  } = props;
  return <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...svgProps} ref={ref} width={svgProps["width"] ?? size} height={svgProps["height"] ?? size} color={color} aria-labelledby={svgProps["aria-labelledby"] ?? (title ? idPrefix + "title" : undefined)} aria-label={svgProps["aria-label"] ?? title} role={svgProps["role"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? "img" : undefined)} aria-hidden={svgProps["aria-hidden"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? undefined : true)}>{title ? <title id={idPrefix + "title"}>{title}</title> : null}<path d="M11.5 2C12.8805 2.00019 14 3.11941 14 4.5V9.26367C14 10.2105 13.4649 11.0764 12.6182 11.5L8.14551 13.7363C8.04624 13.7859 7.94326 13.8274 7.83887 13.8633C7.70953 13.9841 7.52656 14.0278 7.35645 13.9766C7.24789 13.991 7.13843 14 7.02832 14H4.5C3.11929 14 2 12.8807 2 11.5V4.5C2 3.11929 3.11929 2 4.5 2H11.5ZM4.5 3C3.67157 3 3 3.67157 3 4.5V11.5C3 12.3284 3.67157 13 4.5 13H7.02832C7.09454 13 7.16031 12.9941 7.22559 12.9854L9.2998 9.5293C9.86814 8.58226 11.0968 8.27451 12.0439 8.84277L12.9883 9.41016C12.993 9.36165 13 9.31305 13 9.26367V4.5C13 3.67169 12.3283 3.00019 11.5 3H4.5ZM11.5293 9.7002C11.0558 9.41608 10.4414 9.57049 10.1572 10.0439L8.81152 12.2842L12.1709 10.6055C12.3185 10.5316 12.4478 10.4327 12.5605 10.3193L11.5293 9.7002Z" fill="currentColor" style={{
      fill: "currentColor",
      fillOpacity: 1
    }} /></svg>;
});
export default IconStickyNote2;
