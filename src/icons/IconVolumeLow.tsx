import * as React from 'react';
import type { IconProps } from './types';
const IconVolumeLow = React.forwardRef<SVGSVGElement, IconProps>(function IconVolumeLow(props, ref) {
  const idPrefix = React.useId().replace(/[^a-zA-Z0-9_-]/g, '') + '-';
  const {
    size = 16,
    color,
    title,
    ...svgProps
  } = props;
  return <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...svgProps} ref={ref} width={svgProps["width"] ?? size} height={svgProps["height"] ?? size} color={color} aria-labelledby={svgProps["aria-labelledby"] ?? (title ? idPrefix + "title" : undefined)} aria-label={svgProps["aria-label"] ?? title} role={svgProps["role"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? "img" : undefined)} aria-hidden={svgProps["aria-hidden"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? undefined : true)}>{title ? <title id={idPrefix + "title"}>{title}</title> : null}<path d="M6.92676 3.21283C7.73486 2.50589 8.99957 3.07971 9 4.15326V11.8476C9 12.9215 7.73498 13.4961 6.92676 12.789L4.3125 10.5009H2.5C1.67161 10.5009 1.00004 9.82931 1 9.00092V7.00092C1.00008 6.1726 1.67167 5.50098 2.5 5.50092H4.31152L6.92676 3.21283ZM8 4.15326C7.99957 3.93886 7.74647 3.82454 7.58496 3.96576L4.8291 6.37689C4.73797 6.45661 4.62107 6.50091 4.5 6.50092H2.5C2.22392 6.50094 2.00008 6.72485 2 7.00092V9.00092C2.00004 9.27702 2.22389 9.50092 2.5 9.50092H4.5L4.58984 9.50873C4.67792 9.52482 4.76084 9.56435 4.8291 9.62396L7.58496 12.0361C7.7466 12.1775 8 12.0624 8 11.8476V4.15326Z" fill="currentColor" style={{
      fill: "currentColor",
      fillOpacity: 1
    }} /></svg>;
});
export default IconVolumeLow;
