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
  return <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...svgProps} ref={ref} width={svgProps["width"] ?? size} height={svgProps["height"] ?? size} color={color} aria-labelledby={svgProps["aria-labelledby"] ?? (title ? idPrefix + "title" : undefined)} aria-label={svgProps["aria-label"] ?? title} role={svgProps["role"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? "img" : undefined)} aria-hidden={svgProps["aria-hidden"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? undefined : true)}>{title ? <title id={idPrefix + "title"}>{title}</title> : null}<path d="M7.21387 1.39676C7.69593 1.10017 8.30408 1.10017 8.78613 1.39676L14.2861 4.78153C14.7294 5.05454 14.9999 5.53822 15 6.05887V11.0003C14.9998 12.1045 14.1043 13.0001 13 13.0003H3C1.89558 13.0003 1.00025 12.1046 1 11.0003V6.05887C1.00007 5.53806 1.2703 5.05449 1.71387 4.78153L7.21387 1.39676ZM5.70703 9.00028L2.74219 11.9641C2.82451 11.9861 2.91077 12.0003 3 12.0003H13C13.089 12.0003 13.1747 11.986 13.2568 11.9641L10.293 9.00028H5.70703ZM2 11.0003C2.00004 11.0895 2.01222 11.1758 2.03418 11.2581L4.73828 8.55399L2 6.50028V11.0003ZM11.2607 8.55399L13.9648 11.2581C13.9868 11.1758 14 11.0895 14 11.0003V6.50028L11.2607 8.55399ZM8.26172 2.24832C8.1012 2.14974 7.8988 2.14975 7.73828 2.24832L2.3877 5.54032L5.66699 8.00028H10.333L13.6113 5.54032L8.26172 2.24832Z" fill="currentColor" style={{
      fill: "currentColor",
      fillOpacity: 1
    }} /></svg>;
});
export default IconEnvelopeOpen;
