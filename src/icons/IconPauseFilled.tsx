import * as React from 'react';
import type { IconProps } from './types';
const IconPauseFilled = React.forwardRef<SVGSVGElement, IconProps>(function IconPauseFilled(props, ref) {
  const idPrefix = React.useId().replace(/[^a-zA-Z0-9_-]/g, '') + '-';
  const {
    size = 16,
    color,
    title,
    ...svgProps
  } = props;
  return <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...svgProps} ref={ref} width={svgProps["width"] ?? size} height={svgProps["height"] ?? size} color={color} aria-labelledby={svgProps["aria-labelledby"] ?? (title ? idPrefix + "title" : undefined)} aria-label={svgProps["aria-label"] ?? title} role={svgProps["role"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? "img" : undefined)} aria-hidden={svgProps["aria-hidden"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? undefined : true)}>{title ? <title id={idPrefix + "title"}>{title}</title> : null}<path d="M6.25 3C6.66421 3 7 3.33579 7 3.75V12.25C7 12.6642 6.66421 13 6.25 13H4.75C4.33579 13 4 12.6642 4 12.25V3.75C4 3.33579 4.33579 3 4.75 3H6.25ZM11.25 3C11.6642 3 12 3.33579 12 3.75V12.25C12 12.6642 11.6642 13 11.25 13H9.75C9.33579 13 9 12.6642 9 12.25V3.75C9 3.33579 9.33579 3 9.75 3H11.25Z" fill="currentColor" style={{
      fill: "currentColor",
      fillOpacity: 1
    }} /></svg>;
});
export default IconPauseFilled;
