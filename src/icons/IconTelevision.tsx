import * as React from 'react';
import type { IconProps } from './types';
const IconTelevision = React.forwardRef<SVGSVGElement, IconProps>(function IconTelevision(props, ref) {
  const idPrefix = React.useId().replace(/[^a-zA-Z0-9_-]/g, '') + '-';
  const {
    size = 16,
    color,
    title,
    ...svgProps
  } = props;
  return <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...svgProps} ref={ref} width={svgProps["width"] ?? size} height={svgProps["height"] ?? size} color={color} aria-labelledby={svgProps["aria-labelledby"] ?? (title ? idPrefix + "title" : undefined)} aria-label={svgProps["aria-label"] ?? title} role={svgProps["role"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? "img" : undefined)} aria-hidden={svgProps["aria-hidden"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? undefined : true)}>{title ? <title id={idPrefix + "title"}>{title}</title> : null}<path d="M14 3C14.5523 3 15 3.44771 15 4V11C15 11.5523 14.5523 12 14 12H12.4551L13.8154 13.1133C14.029 13.2881 14.0604 13.6027 13.8857 13.8164C13.7109 14.0299 13.3963 14.0614 13.1826 13.8867L11.3594 12.3955C11.0468 12.1399 10.6548 12 10.251 12H5.74805C5.34422 12 4.95224 12.1399 4.63965 12.3955L2.81641 13.8867C2.60274 14.0613 2.28811 14.0299 2.11328 13.8164C1.93864 13.6028 1.97012 13.2881 2.18359 13.1133L3.54395 12H2C1.44772 12 1 11.5523 1 11V4C1 3.44772 1.44772 3 2 3H14ZM2 11H14V4H2V11Z" fill="currentColor" style={{
      fill: "currentColor",
      fillOpacity: 1
    }} /></svg>;
});
export default IconTelevision;
