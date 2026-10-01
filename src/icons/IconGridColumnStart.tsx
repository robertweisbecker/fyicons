import * as React from 'react';
import type { IconProps } from './types';
const IconGridColumnStart = React.forwardRef<SVGSVGElement, IconProps>(function IconGridColumnStart(props, ref) {
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
    }} strokeWidth={0.01} /><g opacity={0.2}><mask id={idPrefix + "path-5-inside-1_560_9101"} fill="white"><path d="M11.5039 8.00354L8.00391 4.50354L4.50391 8.00354L8.00391 11.5035L11.5039 8.00354Z" /></mask><path d="M11.5039 8.00354L8.00391 4.50354L4.50391 8.00354L8.00391 11.5035L11.5039 8.00354Z" stroke="currentColor" style={{
        stroke: "currentColor",
        strokeOpacity: 1
      }} strokeWidth={0.02} mask={`url(#${idPrefix}path-5-inside-1_560_9101)`} /></g><g opacity={0.2}><mask id={idPrefix + "path-6-inside-2_560_9101"} fill="white"><path d="M10.5039 8.00354L8.00391 5.50354L5.50391 8.00354L8.00391 10.5035L10.5039 8.00354Z" /></mask><path d="M10.5039 8.00354L8.00391 5.50354L5.50391 8.00354L8.00391 10.5035L10.5039 8.00354Z" stroke="currentColor" style={{
        stroke: "currentColor",
        strokeOpacity: 1
      }} strokeWidth={0.02} mask={`url(#${idPrefix}path-6-inside-2_560_9101)`} /></g><path d="M16.0039 0.00354004L0.00390625 16.0035" stroke="#71717B" style={{
      stroke: "color(display-p3 0.4431 0.4431 0.4824)",
      strokeOpacity: 1
    }} strokeWidth={0.01} /><path d="M0.00390577 0.00354004L16.0039 16.0035" stroke="#71717B" style={{
      stroke: "color(display-p3 0.4431 0.4431 0.4824)",
      strokeOpacity: 1
    }} strokeWidth={0.01} /><circle cx={8.00391} cy={8.00354} r={6.995} stroke="currentColor" style={{
      stroke: "currentColor",
      strokeOpacity: 1
    }} strokeWidth={0.01} /><path d="M5.50391 2.00354C6.33233 2.00354 7.00391 2.67511 7.00391 3.50354V12.5035C7.00391 13.332 6.33233 14.0035 5.50391 14.0035H3.50391C2.67548 14.0035 2.00391 13.332 2.00391 12.5035V3.50354C2.00391 2.67511 2.67548 2.00354 3.50391 2.00354H5.50391ZM12.5039 9.00354C13.3323 9.00354 14.0039 9.67511 14.0039 10.5035V12.5035C14.0039 13.332 13.3323 14.0035 12.5039 14.0035H10.5039C9.67548 14.0035 9.00391 13.332 9.00391 12.5035V10.5035C9.00391 9.67511 9.67548 9.00354 10.5039 9.00354H12.5039ZM3.50391 3.00354C3.22776 3.00354 3.00391 3.2274 3.00391 3.50354V12.5035C3.00391 12.7797 3.22776 13.0035 3.50391 13.0035H5.50391C5.78005 13.0035 6.00391 12.7797 6.00391 12.5035V3.50354C6.00391 3.2274 5.78005 3.00354 5.50391 3.00354H3.50391ZM10.5039 10.0035C10.2278 10.0035 10.0039 10.2274 10.0039 10.5035V12.5035C10.0039 12.7797 10.2278 13.0035 10.5039 13.0035H12.5039C12.78 13.0035 13.0039 12.7797 13.0039 12.5035V10.5035C13.0039 10.2274 12.78 10.0035 12.5039 10.0035H10.5039ZM12.5039 2.00354C13.3323 2.00354 14.0039 2.67511 14.0039 3.50354V5.50354C14.0039 6.33197 13.3323 7.00354 12.5039 7.00354H10.5039C9.67548 7.00354 9.00391 6.33197 9.00391 5.50354V3.50354C9.00391 2.67511 9.67548 2.00354 10.5039 2.00354H12.5039ZM10.5039 3.00354C10.2278 3.00354 10.0039 3.2274 10.0039 3.50354V5.50354C10.0039 5.77968 10.2278 6.00354 10.5039 6.00354H12.5039C12.78 6.00354 13.0039 5.77968 13.0039 5.50354V3.50354C13.0039 3.2274 12.78 3.00354 12.5039 3.00354H10.5039Z" fill="currentColor" style={{
      fill: "currentColor",
      fillOpacity: 1
    }} /></svg>;
});
export default IconGridColumnStart;
