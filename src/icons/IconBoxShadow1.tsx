import * as React from 'react';
import type { IconProps } from './types';
const IconBoxShadow1 = React.forwardRef<SVGSVGElement, IconProps>(function IconBoxShadow1(props, ref) {
  const idPrefix = React.useId().replace(/[^a-zA-Z0-9_-]/g, '') + '-';
  const {
    size = 16,
    color,
    title,
    ...svgProps
  } = props;
  return <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...svgProps} ref={ref} width={svgProps["width"] ?? size} height={svgProps["height"] ?? size} color={color} aria-labelledby={svgProps["aria-labelledby"] ?? (title ? idPrefix + "title" : undefined)} aria-label={svgProps["aria-label"] ?? title} role={svgProps["role"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? "img" : undefined)} aria-hidden={svgProps["aria-hidden"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? undefined : true)}>{title ? <title id={idPrefix + "title"}>{title}</title> : null}<rect x={3.25} y={2.5} width={10} height={9} rx={1.5} stroke="currentColor" style={{
      stroke: "currentColor",
      strokeOpacity: 1
    }} strokeLinecap="round" strokeLinejoin="round" /><path d="M1.64645 13.1464C1.45118 13.3417 1.45118 13.6583 1.64645 13.8536C1.84171 14.0488 2.15829 14.0488 2.35355 13.8536L2 13.5L1.64645 13.1464ZM3.64645 13.1464C3.45118 13.3417 3.45118 13.6583 3.64645 13.8536C3.84171 14.0488 4.15829 14.0488 4.35355 13.8536L4 13.5L3.64645 13.1464ZM5.64645 13.1464C5.45118 13.3417 5.45118 13.6583 5.64645 13.8536C5.84171 14.0488 6.15829 14.0488 6.35355 13.8536L6 13.5L5.64645 13.1464ZM7.64645 13.1464C7.45118 13.3417 7.45118 13.6583 7.64645 13.8536C7.84171 14.0488 8.15829 14.0488 8.35355 13.8536L8 13.5L7.64645 13.1464ZM9.64645 13.1464C9.45118 13.3417 9.45118 13.6583 9.64645 13.8536C9.84171 14.0488 10.1583 14.0488 10.3536 13.8536L10 13.5L9.64645 13.1464ZM4 11.5L3.64645 11.1464L1.64645 13.1464L2 13.5L2.35355 13.8536L4.35355 11.8536L4 11.5ZM6 11.5L5.64645 11.1464L3.64645 13.1464L4 13.5L4.35355 13.8536L6.35355 11.8536L6 11.5ZM8 11.5L7.64645 11.1464L5.64645 13.1464L6 13.5L6.35355 13.8536L8.35355 11.8536L8 11.5ZM10 11.5L9.64645 11.1464L7.64645 13.1464L8 13.5L8.35355 13.8536L10.3536 11.8536L10 11.5ZM12 11.5L11.6464 11.1464L9.64645 13.1464L10 13.5L10.3536 13.8536L12.3536 11.8536L12 11.5Z" fill="currentColor" style={{
      fill: "currentColor",
      fillOpacity: 1
    }} /></svg>;
});
export default IconBoxShadow1;
