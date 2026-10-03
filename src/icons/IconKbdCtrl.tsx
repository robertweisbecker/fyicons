import * as React from 'react';
import type { IconProps } from './types';
const IconKbdCtrl = React.forwardRef<SVGSVGElement, IconProps>(function IconKbdCtrl(props, ref) {
  const idPrefix = React.useId().replace(/[^a-zA-Z0-9_-]/g, '') + '-';
  const {
    size = 16,
    color,
    title,
    ...svgProps
  } = props;
  return <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...svgProps} ref={ref} width={svgProps["width"] ?? size} height={svgProps["height"] ?? size} color={color} aria-labelledby={svgProps["aria-labelledby"] ?? (title ? idPrefix + "title" : undefined)} aria-label={svgProps["aria-label"] ?? title} role={svgProps["role"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? "img" : undefined)} aria-hidden={svgProps["aria-hidden"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? undefined : true)}>{title ? <title id={idPrefix + "title"}>{title}</title> : null}<path d="M7.72451 2.58117C7.91853 2.45312 8.18258 2.4749 8.35342 2.64562L12.8534 7.14562C13.0486 7.34084 13.0486 7.65738 12.8534 7.85265C12.6582 8.04792 12.3416 8.04792 12.1464 7.85265L7.9999 3.70617L3.85342 7.85265C3.65815 8.04792 3.34165 8.04792 3.14639 7.85265C2.95125 7.65738 2.95116 7.34084 3.14639 7.14562L7.64639 2.64562L7.72451 2.58117Z" fill="currentColor" style={{
      fill: "currentColor",
      fillOpacity: 1
    }} /></svg>;
});
export default IconKbdCtrl;
