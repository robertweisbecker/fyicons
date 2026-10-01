import * as React from 'react';
import type { IconProps } from './types';
const IconSquarrowDownRight = React.forwardRef<SVGSVGElement, IconProps>(function IconSquarrowDownRight(props, ref) {
  const idPrefix = React.useId().replace(/[^a-zA-Z0-9_-]/g, '') + '-';
  const {
    size = 16,
    color,
    title,
    ...svgProps
  } = props;
  return <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...svgProps} ref={ref} width={svgProps["width"] ?? size} height={svgProps["height"] ?? size} color={color} aria-labelledby={svgProps["aria-labelledby"] ?? (title ? idPrefix + "title" : undefined)} aria-label={svgProps["aria-label"] ?? title} role={svgProps["role"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? "img" : undefined)} aria-hidden={svgProps["aria-hidden"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? undefined : true)}>{title ? <title id={idPrefix + "title"}>{title}</title> : null}<path d="M10.5 10.5L5.91421 5.91422C4.65428 4.65429 2.5 5.54662 2.5 7.32843L2.5 11.5C2.5 12.6046 3.39543 13.5 4.5 13.5L11.5 13.5C12.6046 13.5 13.5 12.6046 13.5 11.5L13.5 4.5C13.5 3.39543 12.6046 2.5 11.5 2.5L7.5 2.5" stroke="currentColor" style={{
      stroke: "currentColor",
      strokeOpacity: 1
    }} strokeLinecap="round" strokeLinejoin="round" /><path d="M6.5 10.5L10.5 10.5L10.5 6.5" stroke="currentColor" style={{
      stroke: "currentColor",
      strokeOpacity: 1
    }} strokeLinecap="round" strokeLinejoin="round" /></svg>;
});
export default IconSquarrowDownRight;
