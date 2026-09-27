import * as React from 'react';
import type { IconProps } from './types';
const IconCopy = React.forwardRef<SVGSVGElement, IconProps>(function IconCopy(props, ref) {
  const idPrefix = React.useId().replace(/[^a-zA-Z0-9_-]/g, '') + '-';
  const {
    size = 16,
    color,
    title,
    ...svgProps
  } = props;
  return <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...svgProps} ref={ref} width={svgProps["width"] ?? size} height={svgProps["height"] ?? size} color={color} aria-labelledby={svgProps["aria-labelledby"] ?? (title ? idPrefix + "title" : undefined)} aria-label={svgProps["aria-label"] ?? title} role={svgProps["role"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? "img" : undefined)} aria-hidden={svgProps["aria-hidden"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? undefined : true)}>{title ? <title id={idPrefix + "title"}>{title}</title> : null}<path d="M9.5 1.25C10.6046 1.25 11.5 2.14543 11.5 3.25V4.25H12C13.1046 4.25 14 5.14543 14 6.25V12C14 13.1046 13.1046 14 12 14H6C4.89543 14 4 13.1046 4 12V11.25H3.5C2.39543 11.25 1.5 10.3546 1.5 9.25V3.25C1.5 2.14543 2.39543 1.25 3.5 1.25H9.5ZM11.5 9.25C11.5 10.3546 10.6046 11.25 9.5 11.25H5V12C5 12.5523 5.44772 13 6 13H12C12.5523 13 13 12.5523 13 12V6.25C13 5.69772 12.5523 5.25 12 5.25H11.5V9.25ZM3.5 2.25C2.94772 2.25 2.5 2.69772 2.5 3.25V9.25C2.5 9.80228 2.94772 10.25 3.5 10.25H9.5C10.0523 10.25 10.5 9.80228 10.5 9.25V3.25C10.5 2.69772 10.0523 2.25 9.5 2.25H3.5Z" fill="currentColor" style={{
      fill: "currentColor",
      fillOpacity: 1
    }} /></svg>;
});
export default IconCopy;
