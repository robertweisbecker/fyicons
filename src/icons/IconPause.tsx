import * as React from 'react';
import type { IconProps } from './types';
const IconPause = React.forwardRef<SVGSVGElement, IconProps>(function IconPause(props, ref) {
  const idPrefix = React.useId().replace(/[^a-zA-Z0-9_-]/g, '') + '-';
  const {
    size = 16,
    color,
    title,
    ...svgProps
  } = props;
  return <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...svgProps} ref={ref} width={svgProps["width"] ?? size} height={svgProps["height"] ?? size} color={color} aria-labelledby={svgProps["aria-labelledby"] ?? (title ? idPrefix + "title" : undefined)} aria-label={svgProps["aria-label"] ?? title} role={svgProps["role"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? "img" : undefined)} aria-hidden={svgProps["aria-hidden"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? undefined : true)}>{title ? <title id={idPrefix + "title"}>{title}</title> : null}<path d="M5.75 3C6.44036 3 7 3.55964 7 4.25V11.75C7 12.4404 6.44036 13 5.75 13H4.25C3.55964 13 3 12.4404 3 11.75V4.25C3 3.55964 3.55964 3 4.25 3H5.75ZM11.75 3C12.4404 3 13 3.55964 13 4.25V11.75C13 12.4404 12.4404 13 11.75 13H10.25C9.55964 13 9 12.4404 9 11.75V4.25C9 3.55964 9.55964 3 10.25 3H11.75ZM4.25 4C4.11193 4 4 4.11193 4 4.25V11.75C4 11.8881 4.11193 12 4.25 12H5.75C5.88807 12 6 11.8881 6 11.75V4.25C6 4.11193 5.88807 4 5.75 4H4.25ZM10.25 4C10.1119 4 10 4.11193 10 4.25V11.75C10 11.8881 10.1119 12 10.25 12H11.75C11.8881 12 12 11.8881 12 11.75V4.25C12 4.11193 11.8881 4 11.75 4H10.25Z" fill="currentColor" style={{
      fill: "currentColor",
      fillOpacity: 1
    }} /></svg>;
});
export default IconPause;
