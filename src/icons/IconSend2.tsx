import * as React from 'react';
import type { IconProps } from './types';
const IconSend2 = React.forwardRef<SVGSVGElement, IconProps>(function IconSend2(props, ref) {
  const idPrefix = React.useId().replace(/[^a-zA-Z0-9_-]/g, '') + '-';
  const {
    size = 16,
    color,
    title,
    ...svgProps
  } = props;
  return <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...svgProps} ref={ref} width={svgProps["width"] ?? size} height={svgProps["height"] ?? size} color={color} aria-labelledby={svgProps["aria-labelledby"] ?? (title ? idPrefix + "title" : undefined)} aria-label={svgProps["aria-label"] ?? title} role={svgProps["role"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? "img" : undefined)} aria-hidden={svgProps["aria-hidden"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? undefined : true)}>{title ? <title id={idPrefix + "title"}>{title}</title> : null}<path d="M2 4.17755C1.99992 2.69079 3.56469 1.72362 4.89453 2.38849L12.9873 6.43439C14.277 7.07931 14.2769 8.92025 12.9873 9.56525L4.89453 13.6111C3.56482 14.276 2.00023 13.3096 2 11.8231V9.85724C2.0001 9.02143 2.51521 8.29527 3.25781 7.99884C2.51579 7.70216 2.00109 6.97781 2.00098 6.1424L2 4.17755ZM4.44727 3.28302C3.78238 2.95063 3.00002 3.43423 3 4.17755L3.00098 6.1424C3.00105 6.65609 3.39022 7.08639 3.90137 7.13752L7.5498 7.50275C7.80523 7.52842 7.99991 7.74311 8 7.99982C8 8.2566 7.80526 8.4712 7.5498 8.49689L3.90039 8.86212C3.38939 8.91335 3.00012 9.34367 3 9.85724V11.8231C3.00023 12.5662 3.7825 13.0498 4.44727 12.7176L12.54 8.67072C13.0926 8.39424 13.0927 7.60531 12.54 7.32892L4.44727 3.28302Z" fill="currentColor" style={{
      fill: "currentColor",
      fillOpacity: 1
    }} /></svg>;
});
export default IconSend2;
