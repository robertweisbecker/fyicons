import * as React from 'react';
import type { IconProps } from './types';
const IconDirUp = React.forwardRef<SVGSVGElement, IconProps>(function IconDirUp(props, ref) {
  const idPrefix = React.useId().replace(/[^a-zA-Z0-9_-]/g, '') + '-';
  const {
    size = 16,
    color,
    title,
    ...svgProps
  } = props;
  return <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...svgProps} ref={ref} width={svgProps["width"] ?? size} height={svgProps["height"] ?? size} color={color} aria-labelledby={svgProps["aria-labelledby"] ?? (title ? idPrefix + "title" : undefined)} aria-label={svgProps["aria-label"] ?? title} role={svgProps["role"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? "img" : undefined)} aria-hidden={svgProps["aria-hidden"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? undefined : true)}>{title ? <title id={idPrefix + "title"}>{title}</title> : null}<path d="M7.65231 2.65056C7.82317 2.47979 8.08717 2.45797 8.28121 2.5861L8.35934 2.65056L12.3574 6.6486C12.5522 6.84386 12.5524 7.1605 12.3574 7.35563C12.1623 7.55069 11.8456 7.55045 11.6504 7.35563L8.50582 4.2111V12.5041C8.50562 12.7799 8.28162 13.0038 8.00582 13.0041C7.7298 13.0041 7.50603 12.78 7.50582 12.5041V4.2111L4.35934 7.35759C4.1642 7.55273 3.8476 7.55249 3.65231 7.35759C3.45704 7.16233 3.45704 6.84582 3.65231 6.65056L7.65231 2.65056Z" fill="currentColor" style={{
      fill: "currentColor",
      fillOpacity: 1
    }} /><rect x={3.02891} y={1.02854} width={9.95} height={13.95} stroke="#FDC700" style={{
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
    }} strokeWidth={0.01} /><g opacity={0.2}><mask id={idPrefix + "path-6-inside-1_518_4787"} fill="white"><path d="M11.5039 8.00354L8.00391 4.50354L4.50391 8.00354L8.00391 11.5035L11.5039 8.00354Z" /></mask><path d="M11.5039 8.00354L8.00391 4.50354L4.50391 8.00354L8.00391 11.5035L11.5039 8.00354Z" stroke="currentColor" style={{
        stroke: "currentColor",
        strokeOpacity: 1
      }} strokeWidth={0.02} mask={`url(#${idPrefix}path-6-inside-1_518_4787)`} /></g><g opacity={0.2}><mask id={idPrefix + "path-7-inside-2_518_4787"} fill="white"><path d="M10.5039 8.00354L8.00391 5.50354L5.50391 8.00354L8.00391 10.5035L10.5039 8.00354Z" /></mask><path d="M10.5039 8.00354L8.00391 5.50354L5.50391 8.00354L8.00391 10.5035L10.5039 8.00354Z" stroke="currentColor" style={{
        stroke: "currentColor",
        strokeOpacity: 1
      }} strokeWidth={0.02} mask={`url(#${idPrefix}path-7-inside-2_518_4787)`} /></g><path d="M16.0039 0.00354004L0.00390625 16.0035" stroke="#71717B" style={{
      stroke: "color(display-p3 0.4431 0.4431 0.4824)",
      strokeOpacity: 1
    }} strokeWidth={0.01} /><path d="M0.00390577 0.00354004L16.0039 16.0035" stroke="#71717B" style={{
      stroke: "color(display-p3 0.4431 0.4431 0.4824)",
      strokeOpacity: 1
    }} strokeWidth={0.01} /><circle cx={8.00391} cy={8.00354} r={6.995} stroke="currentColor" style={{
      stroke: "currentColor",
      strokeOpacity: 1
    }} strokeWidth={0.01} /></svg>;
});
export default IconDirUp;
