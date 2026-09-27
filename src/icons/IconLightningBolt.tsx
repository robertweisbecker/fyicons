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
  return <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...svgProps} ref={ref} width={svgProps["width"] ?? size} height={svgProps["height"] ?? size} color={color} aria-labelledby={svgProps["aria-labelledby"] ?? (title ? idPrefix + "title" : undefined)} aria-label={svgProps["aria-label"] ?? title} role={svgProps["role"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? "img" : undefined)} aria-hidden={svgProps["aria-hidden"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? undefined : true)}>{title ? <title id={idPrefix + "title"}>{title}</title> : null}<path d="M8.08789 1.21674C8.21196 1.03629 8.4393 0.957465 8.64844 1.0224C8.85752 1.08739 8.99997 1.28099 9 1.49994V5.99994H12.0498C12.8548 6.00018 13.3291 6.90293 12.873 7.56635L7.91211 14.7831C7.78803 14.9636 7.56072 15.0424 7.35156 14.9775C7.14249 14.9125 7 14.7189 7 14.4999V9.99994H3.9502C3.14523 9.99968 2.67086 9.09694 3.12695 8.43353L8.08789 1.21674ZM3.9502 8.99994H7.5C7.77612 8.99994 7.99997 9.22383 8 9.49994V12.8896L12.0498 6.99994H8.5C8.22387 6.99992 8 6.77607 8 6.49994V3.10931L3.9502 8.99994Z" fill="currentColor" style={{
      fill: "currentColor",
      fillOpacity: 1
    }} /></svg>;
});
export default IconLightningBolt;
