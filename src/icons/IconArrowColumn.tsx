import * as React from 'react';
import type { IconProps } from './types';
const IconArrowColumn = React.forwardRef<SVGSVGElement, IconProps>(function IconArrowColumn(props, ref) {
  const idPrefix = React.useId().replace(/[^a-zA-Z0-9_-]/g, '') + '-';
  const {
    size = 16,
    color,
    title,
    ...svgProps
  } = props;
  return <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...svgProps} ref={ref} width={svgProps["width"] ?? size} height={svgProps["height"] ?? size} color={color} aria-labelledby={svgProps["aria-labelledby"] ?? (title ? idPrefix + "title" : undefined)} aria-label={svgProps["aria-label"] ?? title} role={svgProps["role"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? "img" : undefined)} aria-hidden={svgProps["aria-hidden"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? undefined : true)}>{title ? <title id={idPrefix + "title"}>{title}</title> : null}<path d="M6.00391 9.00354C6.55619 9.00354 7.00391 9.45126 7.00391 10.0035V13.0035C7.00391 13.5558 6.55619 14.0035 6.00391 14.0035H3.00391C2.45162 14.0035 2.00391 13.5558 2.00391 13.0035V10.0035C2.00391 9.45126 2.45162 9.00354 3.00391 9.00354H6.00391ZM3.00391 13.0035H6.00391V10.0035H3.00391V13.0035ZM11.5039 3.00354C11.78 3.00354 12.0039 3.2274 12.0039 3.50354V11.2965L13.1504 10.15C13.3457 9.95476 13.6622 9.95476 13.8574 10.15C14.0527 10.3453 14.0527 10.6618 13.8574 10.8571L11.8574 12.8571C11.6866 13.0279 11.4226 13.0497 11.2285 12.9215L11.1504 12.8571L9.15039 10.8571C8.95513 10.6618 8.95513 10.3453 9.15039 10.15C9.34565 9.95476 9.66216 9.95476 9.85742 10.15L11.0039 11.2965V3.50354C11.0039 3.2274 11.2278 3.00354 11.5039 3.00354ZM6.00391 2.00354C6.55619 2.00354 7.00391 2.45126 7.00391 3.00354V6.00354C7.00391 6.55582 6.55619 7.00354 6.00391 7.00354H3.00391C2.45162 7.00354 2.00391 6.55582 2.00391 6.00354V3.00354C2.00391 2.45126 2.45162 2.00354 3.00391 2.00354H6.00391ZM3.00391 6.00354H6.00391V3.00354H3.00391V6.00354Z" fill="currentColor" style={{
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
    }} strokeWidth={0.01} /><g opacity={0.2}><mask id={idPrefix + "path-6-inside-1_560_9103"} fill="white"><path d="M11.5039 8.00354L8.00391 4.50354L4.50391 8.00354L8.00391 11.5035L11.5039 8.00354Z" /></mask><path d="M11.5039 8.00354L8.00391 4.50354L4.50391 8.00354L8.00391 11.5035L11.5039 8.00354Z" stroke="currentColor" style={{
        stroke: "currentColor",
        strokeOpacity: 1
      }} strokeWidth={0.02} mask={`url(#${idPrefix}path-6-inside-1_560_9103)`} /></g><g opacity={0.2}><mask id={idPrefix + "path-7-inside-2_560_9103"} fill="white"><path d="M10.5039 8.00354L8.00391 5.50354L5.50391 8.00354L8.00391 10.5035L10.5039 8.00354Z" /></mask><path d="M10.5039 8.00354L8.00391 5.50354L5.50391 8.00354L8.00391 10.5035L10.5039 8.00354Z" stroke="currentColor" style={{
        stroke: "currentColor",
        strokeOpacity: 1
      }} strokeWidth={0.02} mask={`url(#${idPrefix}path-7-inside-2_560_9103)`} /></g><path d="M16.0039 0.00354004L0.00390625 16.0035" stroke="#71717B" style={{
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
export default IconArrowColumn;
