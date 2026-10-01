import * as React from 'react';
import type { IconProps } from './types';
const IconPointerSwarm = React.forwardRef<SVGSVGElement, IconProps>(function IconPointerSwarm(props, ref) {
  const idPrefix = React.useId().replace(/[^a-zA-Z0-9_-]/g, '') + '-';
  const {
    size = 16,
    color,
    title,
    ...svgProps
  } = props;
  return <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...svgProps} ref={ref} width={svgProps["width"] ?? size} height={svgProps["height"] ?? size} color={color} aria-labelledby={svgProps["aria-labelledby"] ?? (title ? idPrefix + "title" : undefined)} aria-label={svgProps["aria-label"] ?? title} role={svgProps["role"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? "img" : undefined)} aria-hidden={svgProps["aria-hidden"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? undefined : true)}>{title ? <title id={idPrefix + "title"}>{title}</title> : null}<path d="M2.94868 2.31623L6.57697 3.52566C7.03282 3.67761 7.03282 4.32239 6.57697 4.47434L5.23717 4.92094C5.08787 4.97071 4.97071 5.08787 4.92094 5.23717L4.47434 6.57697C4.32239 7.03282 3.67761 7.03282 3.52566 6.57697L2.31623 2.94868C2.18593 2.5578 2.5578 2.18593 2.94868 2.31623Z" fill="currentColor" style={{
      fill: "currentColor",
      fillOpacity: 1
    }} /><path d="M2.94868 9.31623L6.57697 10.5257C7.03282 10.6776 7.03282 11.3224 6.57697 11.4743L5.23717 11.9209C5.08787 11.9707 4.97071 12.0879 4.92094 12.2372L4.47434 13.577C4.32239 14.0328 3.67761 14.0328 3.52566 13.577L2.31623 9.94868C2.18593 9.5578 2.5578 9.18593 2.94868 9.31623Z" fill="currentColor" style={{
      fill: "currentColor",
      fillOpacity: 1
    }} /><path d="M9.94868 2.31623L13.577 3.52566C14.0328 3.67761 14.0328 4.32239 13.577 4.47434L12.2372 4.92094C12.0879 4.97071 11.9707 5.08787 11.9209 5.23717L11.4743 6.57697C11.3224 7.03282 10.6776 7.03282 10.5257 6.57697L9.31623 2.94868C9.18593 2.5578 9.5578 2.18593 9.94868 2.31623Z" fill="currentColor" style={{
      fill: "currentColor",
      fillOpacity: 1
    }} /><path d="M9.94868 9.31623L13.577 10.5257C14.0328 10.6776 14.0328 11.3224 13.577 11.4743L12.2372 11.9209C12.0879 11.9707 11.9707 12.0879 11.9209 12.2372L11.4743 13.577C11.3224 14.0328 10.6776 14.0328 10.5257 13.577L9.31623 9.94868C9.18593 9.5578 9.5578 9.18593 9.94868 9.31623Z" fill="currentColor" style={{
      fill: "currentColor",
      fillOpacity: 1
    }} /></svg>;
});
export default IconPointerSwarm;
