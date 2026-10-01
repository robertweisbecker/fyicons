import * as React from 'react';
import type { IconProps } from './types';
const IconTextHighlight = React.forwardRef<SVGSVGElement, IconProps>(function IconTextHighlight(props, ref) {
  const idPrefix = React.useId().replace(/[^a-zA-Z0-9_-]/g, '') + '-';
  const {
    size = 16,
    color,
    title,
    ...svgProps
  } = props;
  return <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...svgProps} ref={ref} width={svgProps["width"] ?? size} height={svgProps["height"] ?? size} color={color} aria-labelledby={svgProps["aria-labelledby"] ?? (title ? idPrefix + "title" : undefined)} aria-label={svgProps["aria-label"] ?? title} role={svgProps["role"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? "img" : undefined)} aria-hidden={svgProps["aria-hidden"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? undefined : true)}>{title ? <title id={idPrefix + "title"}>{title}</title> : null}<path d="M3.55935 2.91028C8.06624 2.27929 9.7702 4.39889 12.8308 3.83021C13.379 3.72832 13.9302 4.15269 13.8719 4.70716L13.0535 12.4923C13.0211 12.7987 12.8047 13.0574 12.5027 13.1183C9.31085 13.7615 5.8659 12.2835 3.41189 12.5558C2.79897 12.6236 2.08702 12.1274 2.14822 11.5138L2.94412 3.56263C2.97743 3.22982 3.22812 2.95669 3.55935 2.91028ZM8.00076 5.00013C7.82219 5.00016 7.65903 5.09568 7.5701 5.24622L7.53689 5.31458L5.53787 10.3146C5.43553 10.5709 5.55991 10.8615 5.81619 10.964C6.0723 11.0659 6.36308 10.9416 6.4656 10.6857L6.78982 9.87513H9.21365L9.53787 10.6857C9.64062 10.9417 9.93111 11.0664 10.1873 10.964C10.4429 10.8612 10.5677 10.5706 10.4656 10.3146L8.46463 5.31458C8.38876 5.1251 8.2048 5.00048 8.00076 5.00013ZM8.91287 9.12513H7.08963L8.00076 6.84485L8.91287 9.12513Z" fill="currentColor" style={{
      fill: "currentColor",
      fillOpacity: 1
    }} /></svg>;
});
export default IconTextHighlight;
