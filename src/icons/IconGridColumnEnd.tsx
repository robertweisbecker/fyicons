import * as React from 'react';
import type { IconProps } from './types';
const IconGridColumnEnd = React.forwardRef<SVGSVGElement, IconProps>(function IconGridColumnEnd(props, ref) {
  const idPrefix = React.useId().replace(/[^a-zA-Z0-9_-]/g, '') + '-';
  const {
    size = 16,
    color,
    title,
    ...svgProps
  } = props;
  return <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...svgProps} ref={ref} width={svgProps["width"] ?? size} height={svgProps["height"] ?? size} color={color} aria-labelledby={svgProps["aria-labelledby"] ?? (title ? idPrefix + "title" : undefined)} aria-label={svgProps["aria-label"] ?? title} role={svgProps["role"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? "img" : undefined)} aria-hidden={svgProps["aria-hidden"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? undefined : true)}>{title ? <title id={idPrefix + "title"}>{title}</title> : null}<path d="M5.75 9C6.44036 9 7 9.55964 7 10.25V12.75C7 13.4404 6.44036 14 5.75 14H3.25C2.55964 14 2 13.4404 2 12.75V10.25C2 9.55964 2.55964 9 3.25 9H5.75ZM12.75 2C13.4404 2 14 2.55964 14 3.25V12.75C14 13.4404 13.4404 14 12.75 14H10.25C9.55964 14 9 13.4404 9 12.75V3.25C9 2.55964 9.55964 2 10.25 2H12.75ZM3.25 10C3.11193 10 3 10.1119 3 10.25V12.75C3 12.8881 3.11193 13 3.25 13H5.75C5.88807 13 6 12.8881 6 12.75V10.25C6 10.1119 5.88807 10 5.75 10H3.25ZM10.25 3C10.1119 3 10 3.11193 10 3.25V12.75C10 12.8881 10.1119 13 10.25 13H12.75C12.8881 13 13 12.8881 13 12.75V3.25C13 3.11193 12.8881 3 12.75 3H10.25ZM5.75 2C6.44036 2 7 2.55964 7 3.25V5.75C7 6.44036 6.44036 7 5.75 7H3.25C2.55964 7 2 6.44036 2 5.75V3.25C2 2.55964 2.55964 2 3.25 2H5.75ZM3.25 3C3.11193 3 3 3.11193 3 3.25V5.75C3 5.88807 3.11193 6 3.25 6H5.75C5.88807 6 6 5.88807 6 5.75V3.25C6 3.11193 5.88807 3 5.75 3H3.25Z" fill="currentColor" style={{
      fill: "currentColor",
      fillOpacity: 1
    }} /></svg>;
});
export default IconGridColumnEnd;
