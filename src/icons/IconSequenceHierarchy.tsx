import * as React from 'react';
import type { IconProps } from './types';
const IconSequenceHierarchy = React.forwardRef<SVGSVGElement, IconProps>(function IconSequenceHierarchy(props, ref) {
  const idPrefix = React.useId().replace(/[^a-zA-Z0-9_-]/g, '') + '-';
  const {
    size = 16,
    color,
    title,
    ...svgProps
  } = props;
  return <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...svgProps} ref={ref} width={svgProps["width"] ?? size} height={svgProps["height"] ?? size} color={color} aria-labelledby={svgProps["aria-labelledby"] ?? (title ? idPrefix + "title" : undefined)} aria-label={svgProps["aria-label"] ?? title} role={svgProps["role"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? "img" : undefined)} aria-hidden={svgProps["aria-hidden"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? undefined : true)}>{title ? <title id={idPrefix + "title"}>{title}</title> : null}<path d="M6.5 7.5H5.5C4.94772 7.5 4.5 7.05228 4.5 6.5V4.5" stroke="currentColor" style={{
      stroke: "currentColor",
      strokeOpacity: 1
    }} strokeLinecap="round" strokeLinejoin="round" /><path d="M11 9.60356C11 9.55411 11.0146 9.50577 11.0421 9.46465C11.0696 9.42352 11.1086 9.39147 11.1543 9.37255C11.2 9.35362 11.2503 9.34867 11.2988 9.35832C11.3473 9.36797 11.3918 9.39179 11.4268 9.42676L13.3232 11.3232C13.3464 11.3464 13.3648 11.3739 13.3774 11.4043C13.39 11.4346 13.3964 11.4671 13.3964 11.5C13.3964 11.5328 13.39 11.5653 13.3774 11.5956C13.3648 11.626 13.3464 11.6535 13.3232 11.6768L11.4268 13.5732C11.3918 13.6081 11.3473 13.632 11.2988 13.6416C11.2503 13.6513 11.2 13.6463 11.1543 13.6274C11.1086 13.6085 11.0696 13.5764 11.0421 13.5353C11.0146 13.4942 11 13.4458 11 13.3964V9.60356Z" fill="currentColor" style={{
      fill: "currentColor",
      fillOpacity: 1
    }} /><path d="M6 5.60356C5.99999 5.55411 6.01465 5.50577 6.04212 5.46465C6.06959 5.42352 6.10864 5.39147 6.15432 5.37255C6.20001 5.35362 6.25028 5.34867 6.29879 5.35832C6.34729 5.36797 6.39184 5.39179 6.4268 5.42676L8.3232 7.32316C8.34642 7.34638 8.36484 7.37394 8.37741 7.40428C8.38998 7.43461 8.39645 7.46713 8.39645 7.49996C8.39645 7.5328 8.38998 7.56531 8.37741 7.59565C8.36484 7.62598 8.34642 7.65355 8.3232 7.67676L6.4268 9.57316C6.39184 9.60814 6.34729 9.63195 6.29879 9.6416C6.25028 9.65125 6.20001 9.6463 6.15432 9.62738C6.10864 9.60845 6.06959 9.5764 6.04212 9.53528C6.01465 9.49416 5.99999 9.44581 6 9.39636V5.60356Z" fill="currentColor" style={{
      fill: "currentColor",
      fillOpacity: 1
    }} /><rect x={3.5} y={2.5} width={2} height={2} rx={1} stroke="currentColor" style={{
      stroke: "currentColor",
      strokeOpacity: 1
    }} /><path d="M11 11.5H9.5C8.94772 11.5 8.5 11.0523 8.5 10.5V9.5" stroke="currentColor" style={{
      stroke: "currentColor",
      strokeOpacity: 1
    }} strokeLinecap="round" strokeLinejoin="round" /></svg>;
});
export default IconSequenceHierarchy;
