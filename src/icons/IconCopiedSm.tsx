import * as React from 'react';
import type { IconProps } from './types';
const IconCopiedSm = React.forwardRef<SVGSVGElement, IconProps>(function IconCopiedSm(props, ref) {
  const idPrefix = React.useId().replace(/[^a-zA-Z0-9_-]/g, '') + '-';
  const {
    size = 16,
    color,
    title,
    ...svgProps
  } = props;
  return <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...svgProps} ref={ref} width={svgProps["width"] ?? size} height={svgProps["height"] ?? size} color={color} aria-labelledby={svgProps["aria-labelledby"] ?? (title ? idPrefix + "title" : undefined)} aria-label={svgProps["aria-label"] ?? title} role={svgProps["role"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? "img" : undefined)} aria-hidden={svgProps["aria-hidden"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? undefined : true)}>{title ? <title id={idPrefix + "title"}>{title}</title> : null}<g clipPath={`url(#${idPrefix}clip0_610_12054)`}><path d="M6.03029 2.81934C6.36527 1.48014 7.72225 0.66535 9.06154 1L13.1807 2.03028C14.5199 2.36523 15.3346 3.72224 15 5.06153L13.9697 9.18067C13.641 10.4947 12.3291 11.301 11.0147 11.0147C11.301 12.3292 10.495 13.6412 9.18068 13.9697L5.06154 15C3.72209 15.3348 2.36518 14.5201 2.03029 13.1807L1.00001 9.06153C0.66516 7.72206 1.47989 6.36516 2.81935 6.03028L5.38771 5.38672C5.38829 5.38423 5.38904 5.38141 5.38966 5.37891L6.03029 2.81934ZM9.00001 7.06153C8.79908 6.25785 7.98436 5.76881 7.18068 5.96973L3.06154 7C2.25788 7.20095 1.76882 8.01567 1.96974 8.81934L3.00001 12.9385C3.20097 13.7421 4.0157 14.2312 4.81935 14.0303L8.93849 13C9.74214 12.7991 10.2312 11.9843 10.0303 11.1807L9.00001 7.06153ZM7.1045 7.51075C7.3744 7.56858 7.54692 7.8346 7.48927 8.1045L6.73927 11.6045C6.70585 11.7604 6.5996 11.8909 6.45411 11.9561C6.30857 12.0211 6.14041 12.0136 6.00197 11.9346L4.25197 10.9346C4.0123 10.7976 3.92865 10.4917 4.06544 10.252C4.20241 10.0123 4.50833 9.9286 4.74806 10.0654L5.90333 10.7256L6.51075 7.89551C6.56859 7.62561 6.83461 7.4531 7.1045 7.51075ZM8.81935 1.96973C8.01586 1.76901 7.20106 2.25813 7.00001 3.06153L6.48634 5.11231L6.93849 5C8.27797 4.66515 9.63487 5.47986 9.96974 6.81934L10.7451 9.9209L11.1807 10.0303C11.9841 10.231 12.7989 9.74184 13 8.93848L14.0303 4.81934C14.231 4.01584 13.7419 3.20102 12.9385 3L8.81935 1.96973Z" fill="currentColor" style={{
        fill: "currentColor",
        fillOpacity: 1
      }} /></g><defs><clipPath id={idPrefix + "clip0_610_12054"}><rect width={16} height={16} fill="white" style={{
          fill: "white",
          fillOpacity: 1
        }} /></clipPath></defs></svg>;
});
export default IconCopiedSm;
