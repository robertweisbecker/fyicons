import * as React from 'react';
import type { IconProps } from './types';
const IconArrowRow = React.forwardRef<SVGSVGElement, IconProps>(function IconArrowRow(props, ref) {
  const idPrefix = React.useId().replace(/[^a-zA-Z0-9_-]/g, '') + '-';
  const {
    size = 16,
    color,
    title,
    ...svgProps
  } = props;
  return <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...svgProps} ref={ref} width={svgProps["width"] ?? size} height={svgProps["height"] ?? size} color={color} aria-labelledby={svgProps["aria-labelledby"] ?? (title ? idPrefix + "title" : undefined)} aria-label={svgProps["aria-label"] ?? title} role={svgProps["role"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? "img" : undefined)} aria-hidden={svgProps["aria-hidden"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? undefined : true)}>{title ? <title id={idPrefix + "title"}>{title}</title> : null}<path d="M10.1504 8.15002C10.3457 7.95476 10.6622 7.95476 10.8574 8.15002L12.8574 10.15C12.8872 10.1798 12.912 10.2141 12.9336 10.2506C12.9438 10.268 12.9539 10.2851 12.9619 10.3033C12.966 10.3128 12.9681 10.3229 12.9717 10.3326C12.9781 10.3501 12.9839 10.3675 12.9883 10.3854C12.9915 10.3986 12.994 10.4118 12.9961 10.4254C12.9993 10.4459 13.0012 10.4663 13.002 10.4869C13.0021 10.4925 13.0039 10.498 13.0039 10.5035C13.0039 10.5078 13.0021 10.512 13.002 10.5162C13.0014 10.5392 12.9988 10.5618 12.9951 10.5846C12.9937 10.5931 12.993 10.6016 12.9912 10.61C12.9784 10.6691 12.9563 10.7267 12.9219 10.7789L12.8574 10.8571L10.8574 12.8571C10.6622 13.0523 10.3457 13.0523 10.1504 12.8571C9.95513 12.6618 9.95513 12.3453 10.1504 12.15L11.2969 11.0035H3.50391C3.22776 11.0035 3.00391 10.7797 3.00391 10.5035C3.00391 10.2274 3.22776 10.0035 3.50391 10.0035H11.2969L10.1504 8.85706C9.95513 8.66179 9.95513 8.34529 10.1504 8.15002ZM6.00391 2.00354C6.55619 2.00354 7.00391 2.45126 7.00391 3.00354V6.00354C7.00391 6.55582 6.55619 7.00354 6.00391 7.00354H3.00391C2.45162 7.00354 2.00391 6.55582 2.00391 6.00354V3.00354C2.00391 2.45126 2.45162 2.00354 3.00391 2.00354H6.00391ZM13.0039 2.00354C13.5562 2.00354 14.0039 2.45126 14.0039 3.00354V6.00354C14.0039 6.55582 13.5562 7.00354 13.0039 7.00354H10.0039C9.45162 7.00354 9.00391 6.55582 9.00391 6.00354V3.00354C9.00391 2.45126 9.45162 2.00354 10.0039 2.00354H13.0039ZM3.00391 6.00354H6.00391V3.00354H3.00391V6.00354ZM10.0039 6.00354H13.0039V3.00354H10.0039V6.00354Z" fill="currentColor" style={{
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
    }} strokeWidth={0.01} /><g opacity={0.2}><mask id={idPrefix + "path-6-inside-1_560_9102"} fill="white"><path d="M11.5039 8.00354L8.00391 4.50354L4.50391 8.00354L8.00391 11.5035L11.5039 8.00354Z" /></mask><path d="M11.5039 8.00354L8.00391 4.50354L4.50391 8.00354L8.00391 11.5035L11.5039 8.00354Z" stroke="currentColor" style={{
        stroke: "currentColor",
        strokeOpacity: 1
      }} strokeWidth={0.02} mask={`url(#${idPrefix}path-6-inside-1_560_9102)`} /></g><g opacity={0.2}><mask id={idPrefix + "path-7-inside-2_560_9102"} fill="white"><path d="M10.5039 8.00354L8.00391 5.50354L5.50391 8.00354L8.00391 10.5035L10.5039 8.00354Z" /></mask><path d="M10.5039 8.00354L8.00391 5.50354L5.50391 8.00354L8.00391 10.5035L10.5039 8.00354Z" stroke="currentColor" style={{
        stroke: "currentColor",
        strokeOpacity: 1
      }} strokeWidth={0.02} mask={`url(#${idPrefix}path-7-inside-2_560_9102)`} /></g><path d="M16.0039 0.00354004L0.00390625 16.0035" stroke="#71717B" style={{
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
export default IconArrowRow;
