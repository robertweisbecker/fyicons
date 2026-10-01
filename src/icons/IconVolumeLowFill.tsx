import * as React from 'react';
import type { IconProps } from './types';
const IconVolumeLowFill = React.forwardRef<SVGSVGElement, IconProps>(function IconVolumeLowFill(props, ref) {
  const idPrefix = React.useId().replace(/[^a-zA-Z0-9_-]/g, '') + '-';
  const {
    size = 16,
    color,
    title,
    ...svgProps
  } = props;
  return <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...svgProps} ref={ref} width={svgProps["width"] ?? size} height={svgProps["height"] ?? size} color={color} aria-labelledby={svgProps["aria-labelledby"] ?? (title ? idPrefix + "title" : undefined)} aria-label={svgProps["aria-label"] ?? title} role={svgProps["role"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? "img" : undefined)} aria-hidden={svgProps["aria-hidden"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? undefined : true)}>{title ? <title id={idPrefix + "title"}>{title}</title> : null}<path d="M7.37988 3.02899C8.03566 2.51127 9 2.97864 9 3.81415V12.1862C9 13.0217 8.03566 13.4891 7.37988 12.9714L4.25 10.4997L2.5 10.5007C1.6717 10.5007 1.0002 9.82894 1 9.00067V7.00067C1 6.17229 1.67162 5.50073 2.5 5.50067L4.25 5.4997L7.37988 3.02899Z" fill="currentColor" style={{
      fill: "currentColor",
      fillOpacity: 1
    }} /></svg>;
});
export default IconVolumeLowFill;
