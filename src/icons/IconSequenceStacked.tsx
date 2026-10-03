import * as React from 'react';
import type { IconProps } from './types';
const IconSequenceStacked = React.forwardRef<SVGSVGElement, IconProps>(function IconSequenceStacked(props, ref) {
  const idPrefix = React.useId().replace(/[^a-zA-Z0-9_-]/g, '') + '-';
  const {
    size = 16,
    color,
    title,
    ...svgProps
  } = props;
  return <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...svgProps} ref={ref} width={svgProps["width"] ?? size} height={svgProps["height"] ?? size} color={color} aria-labelledby={svgProps["aria-labelledby"] ?? (title ? idPrefix + "title" : undefined)} aria-label={svgProps["aria-label"] ?? title} role={svgProps["role"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? "img" : undefined)} aria-hidden={svgProps["aria-hidden"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? undefined : true)}>{title ? <title id={idPrefix + "title"}>{title}</title> : null}<path d="M7 7.5H5.5C4.94772 7.5 4.5 7.05228 4.5 6.5V4.5" stroke="currentColor" style={{
      stroke: "currentColor",
      strokeOpacity: 1
    }} strokeLinecap="round" strokeLinejoin="round" /><path d="M11 9.60356C11 9.55411 11.0146 9.50577 11.0421 9.46465C11.0696 9.42352 11.1086 9.39147 11.1543 9.37255C11.2 9.35362 11.2503 9.34867 11.2988 9.35832C11.3473 9.36797 11.3918 9.39179 11.4268 9.42676L13.3232 11.3232C13.3464 11.3464 13.3648 11.3739 13.3774 11.4043C13.39 11.4346 13.3964 11.4671 13.3964 11.5C13.3964 11.5328 13.39 11.5653 13.3774 11.5956C13.3648 11.626 13.3464 11.6535 13.3232 11.6768L11.4268 13.5732C11.3918 13.6081 11.3473 13.632 11.2988 13.6416C11.2503 13.6513 11.2 13.6463 11.1543 13.6274C11.1086 13.6085 11.0696 13.5764 11.0421 13.5353C11.0146 13.4942 11 13.4458 11 13.3964V9.60356Z" fill="currentColor" style={{
      fill: "currentColor",
      fillOpacity: 1
    }} /><rect x={7.5} y={6.5} width={2} height={2} rx={1} stroke="currentColor" style={{
      stroke: "currentColor",
      strokeOpacity: 1
    }} /><rect x={3.5} y={2.5} width={2} height={2} rx={1} stroke="currentColor" style={{
      stroke: "currentColor",
      strokeOpacity: 1
    }} /><path d="M11 11.5H9.5C8.94772 11.5 8.5 11.0523 8.5 10.5V8.5" stroke="currentColor" style={{
      stroke: "currentColor",
      strokeOpacity: 1
    }} strokeLinecap="round" strokeLinejoin="round" /></svg>;
});
export default IconSequenceStacked;
