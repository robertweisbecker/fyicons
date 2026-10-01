import * as React from 'react';
import type { IconProps } from './types';
const IconVolumeSlashFill = React.forwardRef<SVGSVGElement, IconProps>(function IconVolumeSlashFill(props, ref) {
  const idPrefix = React.useId().replace(/[^a-zA-Z0-9_-]/g, '') + '-';
  const {
    size = 16,
    color,
    title,
    ...svgProps
  } = props;
  return <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...svgProps} ref={ref} width={svgProps["width"] ?? size} height={svgProps["height"] ?? size} color={color} aria-labelledby={svgProps["aria-labelledby"] ?? (title ? idPrefix + "title" : undefined)} aria-label={svgProps["aria-label"] ?? title} role={svgProps["role"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? "img" : undefined)} aria-hidden={svgProps["aria-hidden"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? undefined : true)}>{title ? <title id={idPrefix + "title"}>{title}</title> : null}<path d="M10.9775 12.3919C10.836 13.0948 9.97987 13.4462 9.37988 12.973L6.25 10.5013H4.5C3.6717 10.5013 3.00019 9.82957 3 9.00129V7.00129C3.00012 6.29969 3.48201 5.71099 4.13281 5.54719L10.9775 12.3919ZM9.37988 3.02961C10.0356 2.51197 10.9999 2.9794 11 3.81477V9.58625L6.62109 5.20735L9.37988 3.02961Z" fill="currentColor" style={{
      fill: "currentColor",
      fillOpacity: 1
    }} /><path d="M2.5 2.5L13.5 13.5" stroke="currentColor" style={{
      stroke: "currentColor",
      strokeOpacity: 1
    }} strokeLinecap="round" /></svg>;
});
export default IconVolumeSlashFill;
