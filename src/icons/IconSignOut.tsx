import * as React from 'react';
import type { IconProps } from './types';
const IconSignOut = React.forwardRef<SVGSVGElement, IconProps>(function IconSignOut(props, ref) {
  const idPrefix = React.useId().replace(/[^a-zA-Z0-9_-]/g, '') + '-';
  const {
    size = 16,
    color,
    title,
    ...svgProps
  } = props;
  return <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...svgProps} ref={ref} width={svgProps["width"] ?? size} height={svgProps["height"] ?? size} color={color} aria-labelledby={svgProps["aria-labelledby"] ?? (title ? idPrefix + "title" : undefined)} aria-label={svgProps["aria-label"] ?? title} role={svgProps["role"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? "img" : undefined)} aria-hidden={svgProps["aria-hidden"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? undefined : true)}>{title ? <title id={idPrefix + "title"}>{title}</title> : null}<path d="M4.85352 5.1466C4.65825 4.95134 4.34175 4.95134 4.14648 5.1466L1.64648 7.6466C1.47568 7.81746 1.45388 8.08145 1.58203 8.27551L1.64648 8.35363L4.14648 10.8536C4.34173 11.0488 4.65827 11.0488 4.85352 10.8536C5.04876 10.6584 5.04872 10.3419 4.85352 10.1466L3.20703 8.50011H8.5C8.7761 8.50011 8.99993 8.2762 9 8.00011C9 7.72397 8.77614 7.50011 8.5 7.50011H3.20703L4.85352 5.85363C5.04876 5.65839 5.04872 5.34187 4.85352 5.1466Z" fill="currentColor" style={{
      fill: "currentColor",
      fillOpacity: 1
    }} /><path d="M6.5 3.5V3C6.5 2.17157 7.17157 1.5 8 1.5H11C11.8284 1.5 12.5 2.17157 12.5 3V13C12.5 13.8284 11.8284 14.5 11 14.5H8C7.17157 14.5 6.5 13.8284 6.5 13V12.5" stroke="currentColor" style={{
      stroke: "currentColor",
      strokeOpacity: 1
    }} strokeLinecap="round" strokeLinejoin="round" /></svg>;
});
export default IconSignOut;
