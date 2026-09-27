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
  return <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...svgProps} ref={ref} width={svgProps["width"] ?? size} height={svgProps["height"] ?? size} color={color} aria-labelledby={svgProps["aria-labelledby"] ?? (title ? idPrefix + "title" : undefined)} aria-label={svgProps["aria-label"] ?? title} role={svgProps["role"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? "img" : undefined)} aria-hidden={svgProps["aria-hidden"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? undefined : true)}>{title ? <title id={idPrefix + "title"}>{title}</title> : null}<path d="M7.72559 2.58203C7.91963 2.45411 8.18372 2.47572 8.35449 2.64648L12.8545 7.14648C13.0494 7.34169 13.0494 7.65831 12.8545 7.85352C12.6593 8.0487 12.3427 8.04855 12.1475 7.85352L8.00098 3.70703L3.85449 7.85352C3.65931 8.0487 3.34274 8.04855 3.14746 7.85352C2.9522 7.65825 2.9522 7.34175 3.14746 7.14648L7.64746 2.64648L7.72559 2.58203Z" fill="currentColor" style={{
      fill: "currentColor",
      fillOpacity: 1
    }} /></svg>;
});
export default IconKbdCtrl;
