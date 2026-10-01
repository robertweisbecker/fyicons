import * as React from 'react';
import type { IconProps } from './types';
const IconGridRowEnd = React.forwardRef<SVGSVGElement, IconProps>(function IconGridRowEnd(props, ref) {
  const idPrefix = React.useId().replace(/[^a-zA-Z0-9_-]/g, '') + '-';
  const {
    size = 16,
    color,
    title,
    ...svgProps
  } = props;
  return <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...svgProps} ref={ref} width={svgProps["width"] ?? size} height={svgProps["height"] ?? size} color={color} aria-labelledby={svgProps["aria-labelledby"] ?? (title ? idPrefix + "title" : undefined)} aria-label={svgProps["aria-label"] ?? title} role={svgProps["role"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? "img" : undefined)} aria-hidden={svgProps["aria-hidden"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? undefined : true)}>{title ? <title id={idPrefix + "title"}>{title}</title> : null}<rect x={3.02891} y={1.02854} width={9.95} height={13.95} stroke="#FDC700" style={{
      stroke: "color(display-p3 0.9922 0.7804 0.0000)",
      strokeOpacity: 1
    }} strokeWidth={0.05} /><rect x={2.02891} y={2.02854} width={11.95} height={11.95} stroke="#2B7FFF" style={{
      stroke: "color(display-p3 0.1686 0.4980 1.0000)",
      strokeOpacity: 1
    }} strokeWidth={0.05} /><rect x={1.02891} y={3.02854} width={13.95} height={9.95} stroke="#00C950" style={{
      stroke: "color(display-p3 0.0000 0.7882 0.3137)",
      strokeOpacity: 1
    }} strokeWidth={0.05} /><circle cx={8.00391} cy={8.00354} r={3.995} stroke="currentColor" style={{
      stroke: "currentColor",
      strokeOpacity: 1
    }} strokeWidth={0.01} /><g opacity={0.2}><mask id={idPrefix + "path-5-inside-1_560_9099"} fill="white"><path d="M11.5039 8.00354L8.00391 4.50354L4.50391 8.00354L8.00391 11.5035L11.5039 8.00354Z" /></mask><path d="M11.5039 8.00354L8.00391 4.50354L4.50391 8.00354L8.00391 11.5035L11.5039 8.00354Z" stroke="currentColor" style={{
        stroke: "currentColor",
        strokeOpacity: 1
      }} strokeWidth={0.02} mask={`url(#${idPrefix}path-5-inside-1_560_9099)`} /></g><g opacity={0.2}><mask id={idPrefix + "path-6-inside-2_560_9099"} fill="white"><path d="M10.5039 8.00354L8.00391 5.50354L5.50391 8.00354L8.00391 10.5035L10.5039 8.00354Z" /></mask><path d="M10.5039 8.00354L8.00391 5.50354L5.50391 8.00354L8.00391 10.5035L10.5039 8.00354Z" stroke="currentColor" style={{
        stroke: "currentColor",
        strokeOpacity: 1
      }} strokeWidth={0.02} mask={`url(#${idPrefix}path-6-inside-2_560_9099)`} /></g><path d="M16.0039 0.00354004L0.00390625 16.0035" stroke="#71717B" style={{
      stroke: "color(display-p3 0.4431 0.4431 0.4824)",
      strokeOpacity: 1
    }} strokeWidth={0.01} /><path d="M0.00390577 0.00354004L16.0039 16.0035" stroke="#71717B" style={{
      stroke: "color(display-p3 0.4431 0.4431 0.4824)",
      strokeOpacity: 1
    }} strokeWidth={0.01} /><circle cx={8.00391} cy={8.00354} r={6.995} stroke="currentColor" style={{
      stroke: "currentColor",
      strokeOpacity: 1
    }} strokeWidth={0.01} /><path d="M12.7539 9.00354C13.4443 9.00354 14.0039 9.56318 14.0039 10.2535V12.7535C14.0039 13.4439 13.4443 14.0035 12.7539 14.0035H3.25391C2.56355 14.0035 2.00391 13.4439 2.00391 12.7535V10.2535C2.00391 9.56318 2.56355 9.00354 3.25391 9.00354H12.7539ZM3.25391 10.0035C3.11584 10.0035 3.00391 10.1155 3.00391 10.2535V12.7535C3.00391 12.8916 3.11584 13.0035 3.25391 13.0035H12.7539C12.892 13.0035 13.0039 12.8916 13.0039 12.7535V10.2535C13.0039 10.1155 12.892 10.0035 12.7539 10.0035H3.25391ZM5.75391 2.00354C6.44426 2.00354 7.00391 2.56318 7.00391 3.25354V5.75354C7.00391 6.4439 6.44426 7.00354 5.75391 7.00354H3.25391C2.56355 7.00354 2.00391 6.4439 2.00391 5.75354V3.25354C2.00391 2.56318 2.56355 2.00354 3.25391 2.00354H5.75391ZM12.7539 2.00354C13.4443 2.00354 14.0039 2.56318 14.0039 3.25354V5.75354C14.0039 6.4439 13.4443 7.00354 12.7539 7.00354H10.2539C9.56355 7.00354 9.00391 6.4439 9.00391 5.75354V3.25354C9.00391 2.56318 9.56355 2.00354 10.2539 2.00354H12.7539ZM3.25391 3.00354C3.11584 3.00354 3.00391 3.11547 3.00391 3.25354V5.75354C3.00391 5.89161 3.11584 6.00354 3.25391 6.00354H5.75391C5.89198 6.00354 6.00391 5.89161 6.00391 5.75354V3.25354C6.00391 3.11547 5.89198 3.00354 5.75391 3.00354H3.25391ZM10.2539 3.00354C10.1158 3.00354 10.0039 3.11547 10.0039 3.25354V5.75354C10.0039 5.89161 10.1158 6.00354 10.2539 6.00354H12.7539C12.892 6.00354 13.0039 5.89161 13.0039 5.75354V3.25354C13.0039 3.11547 12.892 3.00354 12.7539 3.00354H10.2539Z" fill="currentColor" style={{
      fill: "currentColor",
      fillOpacity: 1
    }} /></svg>;
});
export default IconGridRowEnd;
