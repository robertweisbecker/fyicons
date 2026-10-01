import * as React from 'react';
import type { IconProps } from './types';
const IconBoxShadow = React.forwardRef<SVGSVGElement, IconProps>(function IconBoxShadow(props, ref) {
  const idPrefix = React.useId().replace(/[^a-zA-Z0-9_-]/g, '') + '-';
  const {
    size = 16,
    color,
    title,
    ...svgProps
  } = props;
  return <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...svgProps} ref={ref} width={svgProps["width"] ?? size} height={svgProps["height"] ?? size} color={color} aria-labelledby={svgProps["aria-labelledby"] ?? (title ? idPrefix + "title" : undefined)} aria-label={svgProps["aria-label"] ?? title} role={svgProps["role"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? "img" : undefined)} aria-hidden={svgProps["aria-hidden"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? undefined : true)}>{title ? <title id={idPrefix + "title"}>{title}</title> : null}<path d="M8 2C10.7614 2 13 4.23858 13 7C13 8.00209 12.7039 8.93441 12.1963 9.7168C13.3085 10.1703 14 10.8002 14 11.5C14 12.8807 11.3136 13.9999 8 14C4.68629 14 2 12.8807 2 11.5C2 10.8002 2.69048 10.1693 3.80273 9.71582C3.29562 8.93368 3 8.00157 3 7C3 4.23861 5.23862 2.00005 8 2ZM8 3C5.7909 3.00005 4 4.79089 4 7C4 9.20911 5.7909 11 8 11C10.2091 11 12 9.20914 12 7C12 4.79086 10.2091 3 8 3Z" fill="currentColor" style={{
      fill: "currentColor",
      fillOpacity: 1
    }} /></svg>;
});
export default IconBoxShadow;
