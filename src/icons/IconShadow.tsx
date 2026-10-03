import * as React from 'react';
import type { IconProps } from './types';
const IconShadow = React.forwardRef<SVGSVGElement, IconProps>(function IconShadow(props, ref) {
  const idPrefix = React.useId().replace(/[^a-zA-Z0-9_-]/g, '') + '-';
  const {
    size = 16,
    color,
    title,
    ...svgProps
  } = props;
  return <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...svgProps} ref={ref} width={svgProps["width"] ?? size} height={svgProps["height"] ?? size} color={color} aria-labelledby={svgProps["aria-labelledby"] ?? (title ? idPrefix + "title" : undefined)} aria-label={svgProps["aria-label"] ?? title} role={svgProps["role"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? "img" : undefined)} aria-hidden={svgProps["aria-hidden"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? undefined : true)}>{title ? <title id={idPrefix + "title"}>{title}</title> : null}<rect x={3.5} y={1.5} width={9} height={8} rx={1} stroke="currentColor" style={{
      stroke: "currentColor",
      strokeOpacity: 1
    }} strokeLinecap="round" strokeLinejoin="round" /><rect x={3.125} y={13.125} width={0.75} height={0.75} rx={0.375} fill="currentColor" style={{
      fill: "currentColor",
      fillOpacity: 1
    }} /><rect x={1.125} y={13.125} width={0.75} height={0.75} rx={0.375} fill="currentColor" style={{
      fill: "currentColor",
      fillOpacity: 1
    }} /><rect x={3} y={11} width={1} height={1} rx={0.5} fill="currentColor" style={{
      fill: "currentColor",
      fillOpacity: 1
    }} /><rect x={5.125} y={13.125} width={0.75} height={0.75} rx={0.375} fill="currentColor" style={{
      fill: "currentColor",
      fillOpacity: 1
    }} /><rect x={2.125} y={12.125} width={0.75} height={0.75} rx={0.375} fill="currentColor" style={{
      fill: "currentColor",
      fillOpacity: 1
    }} /><rect x={5} y={11} width={1} height={1} rx={0.5} fill="currentColor" style={{
      fill: "currentColor",
      fillOpacity: 1
    }} /><rect x={4.25} y={14.25} width={0.5} height={0.5} rx={0.25} fill="currentColor" style={{
      fill: "currentColor",
      fillOpacity: 1
    }} /><rect x={2.25} y={14.25} width={0.5} height={0.5} rx={0.25} fill="currentColor" style={{
      fill: "currentColor",
      fillOpacity: 1
    }} /><rect x={7.125} y={13.125} width={0.75} height={0.75} rx={0.375} fill="currentColor" style={{
      fill: "currentColor",
      fillOpacity: 1
    }} /><rect x={4.125} y={12.125} width={0.75} height={0.75} rx={0.375} fill="currentColor" style={{
      fill: "currentColor",
      fillOpacity: 1
    }} /><rect x={9.125} y={13.125} width={0.75} height={0.75} rx={0.375} fill="currentColor" style={{
      fill: "currentColor",
      fillOpacity: 1
    }} /><rect x={6.125} y={12.125} width={0.75} height={0.75} rx={0.375} fill="currentColor" style={{
      fill: "currentColor",
      fillOpacity: 1
    }} /><rect x={11.125} y={13.125} width={0.75} height={0.75} rx={0.375} fill="currentColor" style={{
      fill: "currentColor",
      fillOpacity: 1
    }} /><rect x={8.125} y={12.125} width={0.75} height={0.75} rx={0.375} fill="currentColor" style={{
      fill: "currentColor",
      fillOpacity: 1
    }} /><rect x={10.125} y={12.125} width={0.75} height={0.75} rx={0.375} fill="currentColor" style={{
      fill: "currentColor",
      fillOpacity: 1
    }} /><rect x={12.125} y={12.125} width={0.75} height={0.75} rx={0.375} fill="currentColor" style={{
      fill: "currentColor",
      fillOpacity: 1
    }} /><rect x={7} y={11} width={1} height={1} rx={0.5} fill="currentColor" style={{
      fill: "currentColor",
      fillOpacity: 1
    }} /><rect x={9} y={11} width={1} height={1} rx={0.5} fill="currentColor" style={{
      fill: "currentColor",
      fillOpacity: 1
    }} /><rect x={11} y={11} width={1} height={1} rx={0.5} fill="currentColor" style={{
      fill: "currentColor",
      fillOpacity: 1
    }} /><rect x={6.25} y={14.25} width={0.5} height={0.5} rx={0.25} fill="currentColor" style={{
      fill: "currentColor",
      fillOpacity: 1
    }} /><rect x={8.25} y={14.25} width={0.5} height={0.5} rx={0.25} fill="currentColor" style={{
      fill: "currentColor",
      fillOpacity: 1
    }} /><rect x={10.25} y={14.25} width={0.5} height={0.5} rx={0.25} fill="currentColor" style={{
      fill: "currentColor",
      fillOpacity: 1
    }} /><rect x={12.25} y={14.25} width={0.5} height={0.5} rx={0.25} fill="currentColor" style={{
      fill: "currentColor",
      fillOpacity: 1
    }} /></svg>;
});
export default IconShadow;
