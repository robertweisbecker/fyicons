import * as React from 'react';
import type { IconProps } from './types';
const IconAmpersand = React.forwardRef<SVGSVGElement, IconProps>(function IconAmpersand(props, ref) {
  const idPrefix = React.useId().replace(/[^a-zA-Z0-9_-]/g, '') + '-';
  const {
    size = 16,
    color,
    title,
    ...svgProps
  } = props;
  return <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...svgProps} ref={ref} width={svgProps["width"] ?? size} height={svgProps["height"] ?? size} color={color} aria-labelledby={svgProps["aria-labelledby"] ?? (title ? idPrefix + "title" : undefined)} aria-label={svgProps["aria-label"] ?? title} role={svgProps["role"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? "img" : undefined)} aria-hidden={svgProps["aria-hidden"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? undefined : true)}>{title ? <title id={idPrefix + "title"}>{title}</title> : null}<path d="M5.29673 3.44007C5.82728 2.27286 7.16352 1.70708 8.37095 2.13831L8.43443 2.16077C9.65616 2.59726 10.3227 3.91418 9.95005 5.15687C9.77132 5.7523 9.37136 6.25732 8.83287 6.568L7.82603 7.14808L10.0604 9.91858L12.0995 7.20081C12.2651 6.98 12.5788 6.93482 12.7997 7.10022C13.0202 7.26589 13.0656 7.57962 12.9002 7.80042L10.7098 10.7194C11.408 11.5305 12.4257 12.0006 13.4999 12.0006C13.7759 12.0007 13.9999 12.2245 13.9999 12.5006C13.9996 12.7765 13.7758 13.0005 13.4999 13.0006C12.2073 13.0006 10.9791 12.4653 10.0985 11.5338L9.2606 12.652C8.6241 13.5005 7.62504 14.0006 6.56431 14.0006C4.84826 14.0004 3.40703 12.7055 3.2147 11.0026C3.06417 9.6671 3.71924 8.36442 4.88462 7.69202L6.31431 6.86683L5.62193 6.00843C5.03669 5.28273 4.91111 4.28883 5.29673 3.44007ZM5.38365 8.55823C4.56442 9.0311 4.10282 9.94879 4.20884 10.8903C4.34438 12.0898 5.35943 13.0004 6.56431 13.0006C7.31026 13.0006 8.01315 12.6491 8.4608 12.0524L9.44126 10.7438L6.94908 7.65394L5.38365 8.55823ZM8.03501 3.07972C7.31735 2.82341 6.52243 3.15955 6.20689 3.85315C5.97769 4.35769 6.0524 4.9491 6.40025 5.3805L7.19029 6.36097L8.33384 5.70179C8.65116 5.51855 8.88666 5.22071 8.99205 4.86976C9.21192 4.13679 8.81906 3.35968 8.09849 3.10218L8.03501 3.07972Z" fill="currentColor" style={{
      fill: "currentColor",
      fillOpacity: 1
    }} /></svg>;
});
export default IconAmpersand;
