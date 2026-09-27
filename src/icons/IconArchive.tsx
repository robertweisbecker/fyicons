import * as React from 'react';
import type { IconProps } from './types';
const IconArchive = React.forwardRef<SVGSVGElement, IconProps>(function IconArchive(props, ref) {
  const idPrefix = React.useId().replace(/[^a-zA-Z0-9_-]/g, '') + '-';
  const {
    size = 16,
    color,
    title,
    ...svgProps
  } = props;
  return <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...svgProps} ref={ref} width={svgProps["width"] ?? size} height={svgProps["height"] ?? size} color={color} aria-labelledby={svgProps["aria-labelledby"] ?? (title ? idPrefix + "title" : undefined)} aria-label={svgProps["aria-label"] ?? title} role={svgProps["role"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? "img" : undefined)} aria-hidden={svgProps["aria-hidden"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? undefined : true)}>{title ? <title id={idPrefix + "title"}>{title}</title> : null}<path d="M13.75 2C14.4404 2 15 2.55964 15 3.25V4.75C15 5.35471 14.5705 5.85876 14 5.97461V11.25C14 12.7688 12.7688 14 11.25 14H4.75C3.23122 14 2 12.7688 2 11.25V5.97461C1.42948 5.85876 1 5.35471 1 4.75V3.25C1 2.55964 1.55964 2 2.25 2H13.75ZM3 11.25C3 12.2165 3.7835 13 4.75 13H11.25C12.2165 13 13 12.2165 13 11.25V6H3V11.25ZM9 7.75C9.27614 7.75 9.5 7.97386 9.5 8.25V8.75C9.5 9.02614 9.27614 9.25 9 9.25H7C6.72386 9.25 6.5 9.02614 6.5 8.75V8.25C6.5 7.97386 6.72386 7.75 7 7.75H9ZM2.25 3C2.11193 3 2 3.11193 2 3.25V4.75C2 4.88807 2.11193 5 2.25 5H13.75C13.8881 5 14 4.88807 14 4.75V3.25C14 3.11193 13.8881 3 13.75 3H2.25Z" fill="currentColor" style={{
      fill: "currentColor",
      fillOpacity: 1
    }} /></svg>;
});
export default IconArchive;
