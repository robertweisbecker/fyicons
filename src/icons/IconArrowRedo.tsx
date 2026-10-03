import * as React from 'react';
import type { IconProps } from './types';
const IconArrowRedo = React.forwardRef<SVGSVGElement, IconProps>(function IconArrowRedo(props, ref) {
  const idPrefix = React.useId().replace(/[^a-zA-Z0-9_-]/g, '') + '-';
  const {
    size = 16,
    color,
    title,
    ...svgProps
  } = props;
  return <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...svgProps} ref={ref} width={svgProps["width"] ?? size} height={svgProps["height"] ?? size} color={color} aria-labelledby={svgProps["aria-labelledby"] ?? (title ? idPrefix + "title" : undefined)} aria-label={svgProps["aria-label"] ?? title} role={svgProps["role"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? "img" : undefined)} aria-hidden={svgProps["aria-hidden"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? undefined : true)}>{title ? <title id={idPrefix + "title"}>{title}</title> : null}<path d="M11 3.50069C11 3.0887 11.4702 2.85318 11.7998 3.1003L14.4668 5.1003C14.7333 5.3003 14.7333 5.7001 14.4668 5.9001L11.7998 7.9001C11.4703 8.14712 11.0004 7.91237 11 7.50069V6.00069H6C4.34315 6.00069 3 7.34383 3 9.00069C3.00026 10.6573 4.3433 12.0007 6 12.0007H8.5C8.77614 12.0007 9 12.2245 9 12.5007C8.99974 12.7766 8.77598 13.0007 8.5 13.0007H6C3.79102 13.0007 2.00026 11.2096 2 9.00069C2 6.79155 3.79086 5.00069 6 5.00069H11V3.50069Z" fill="currentColor" style={{
      fill: "currentColor",
      fillOpacity: 1
    }} /></svg>;
});
export default IconArrowRedo;
