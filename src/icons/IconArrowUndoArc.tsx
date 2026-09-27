import * as React from 'react';
import type { IconProps } from './types';
const IconArrowUndoArc = React.forwardRef<SVGSVGElement, IconProps>(function IconArrowUndoArc(props, ref) {
  const idPrefix = React.useId().replace(/[^a-zA-Z0-9_-]/g, '') + '-';
  const {
    size = 16,
    color,
    title,
    ...svgProps
  } = props;
  return <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...svgProps} ref={ref} width={svgProps["width"] ?? size} height={svgProps["height"] ?? size} color={color} aria-labelledby={svgProps["aria-labelledby"] ?? (title ? idPrefix + "title" : undefined)} aria-label={svgProps["aria-label"] ?? title} role={svgProps["role"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? "img" : undefined)} aria-hidden={svgProps["aria-hidden"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? undefined : true)}>{title ? <title id={idPrefix + "title"}>{title}</title> : null}<path d="M7.99707 2.99994C5.23567 2.99994 2.9971 5.23854 2.99707 7.99994H1.60059C1.37789 7.99997 1.26637 8.26921 1.42383 8.4267L3.32031 10.3232C3.41794 10.4208 3.5762 10.4208 3.67383 10.3232L5.57031 8.4267C5.72777 8.26921 5.61625 7.99997 5.39355 7.99994H3.99707C3.9971 5.79083 5.78795 3.99994 7.99707 3.99994C10.2062 3.99994 11.997 5.79083 11.9971 7.99994C11.997 10.209 10.2062 11.9999 7.99707 11.9999C7.72095 11.9999 7.4971 12.2238 7.49707 12.4999C7.4971 12.7761 7.72095 12.9999 7.99707 12.9999C10.7585 12.9999 12.997 10.7613 12.9971 7.99994C12.997 5.23854 10.7585 2.99994 7.99707 2.99994Z" fill="currentColor" style={{
      fill: "currentColor",
      fillOpacity: 1
    }} /></svg>;
});
export default IconArrowUndoArc;
