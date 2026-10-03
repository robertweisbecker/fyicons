import * as React from 'react';
import type { IconProps } from './types';
const IconLightningBolt = React.forwardRef<SVGSVGElement, IconProps>(function IconLightningBolt(props, ref) {
  const idPrefix = React.useId().replace(/[^a-zA-Z0-9_-]/g, '') + '-';
  const {
    size = 16,
    color,
    title,
    ...svgProps
  } = props;
  return <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...svgProps} ref={ref} width={svgProps["width"] ?? size} height={svgProps["height"] ?? size} color={color} aria-labelledby={svgProps["aria-labelledby"] ?? (title ? idPrefix + "title" : undefined)} aria-label={svgProps["aria-label"] ?? title} role={svgProps["role"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? "img" : undefined)} aria-hidden={svgProps["aria-hidden"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? undefined : true)}>{title ? <title id={idPrefix + "title"}>{title}</title> : null}<path d="M8.08789 1.2168C8.21196 1.03635 8.4393 0.957527 8.64844 1.02246C8.85752 1.08745 8.99997 1.28105 9 1.5V6H12.0498C12.8548 6.00024 13.3291 6.90299 12.873 7.56641L7.91211 14.7832C7.78803 14.9637 7.56072 15.0425 7.35156 14.9775C7.14249 14.9125 7 14.719 7 14.5V10H3.9502C3.14523 9.99974 2.67086 9.097 3.12695 8.43359L8.08789 1.2168ZM3.9502 9H7.5C7.77612 9 7.99997 9.22389 8 9.5V12.8896L12.0498 7H8.5C8.22387 6.99999 8 6.77613 8 6.5V3.10938L3.9502 9Z" fill="currentColor" style={{
      fill: "currentColor",
      fillOpacity: 1
    }} /></svg>;
});
export default IconLightningBolt;
