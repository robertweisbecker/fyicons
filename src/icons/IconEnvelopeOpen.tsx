import * as React from 'react';
import type { IconProps } from './types';
const IconEnvelopeOpen = React.forwardRef<SVGSVGElement, IconProps>(function IconEnvelopeOpen(props, ref) {
  const idPrefix = React.useId().replace(/[^a-zA-Z0-9_-]/g, '') + '-';
  const {
    size = 16,
    color,
    title,
    ...svgProps
  } = props;
  return <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...svgProps} ref={ref} width={svgProps["width"] ?? size} height={svgProps["height"] ?? size} color={color} aria-labelledby={svgProps["aria-labelledby"] ?? (title ? idPrefix + "title" : undefined)} aria-label={svgProps["aria-label"] ?? title} role={svgProps["role"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? "img" : undefined)} aria-hidden={svgProps["aria-hidden"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? undefined : true)}>{title ? <title id={idPrefix + "title"}>{title}</title> : null}<path d="M7.21387 1.3967C7.69593 1.10011 8.30408 1.1001 8.78613 1.3967L14.2861 4.78147C14.7294 5.05448 14.9999 5.53816 15 6.05881V11.0002C14.9998 12.1045 14.1043 13.0001 13 13.0002H3C1.89558 13.0002 1.00025 12.1046 1 11.0002V6.05881C1.00007 5.538 1.2703 5.05443 1.71387 4.78147L7.21387 1.3967ZM5.70703 9.00022L2.74219 11.9641C2.82451 11.986 2.91077 12.0002 3 12.0002H13C13.089 12.0002 13.1747 11.9859 13.2568 11.9641L10.293 9.00022H5.70703ZM2 11.0002C2.00004 11.0894 2.01222 11.1757 2.03418 11.258L4.73828 8.55393L2 6.50022V11.0002ZM11.2607 8.55393L13.9648 11.258C13.9868 11.1757 14 11.0895 14 11.0002V6.50022L11.2607 8.55393ZM8.26172 2.24826C8.1012 2.14968 7.8988 2.14968 7.73828 2.24826L2.3877 5.54026L5.66699 8.00022H10.333L13.6113 5.54026L8.26172 2.24826Z" fill="currentColor" style={{
      fill: "currentColor",
      fillOpacity: 1
    }} /></svg>;
});
export default IconEnvelopeOpen;
