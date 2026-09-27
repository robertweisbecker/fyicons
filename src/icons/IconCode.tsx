import * as React from 'react';
import type { IconProps } from './types';
const IconCode = React.forwardRef<SVGSVGElement, IconProps>(function IconCode(props, ref) {
  const idPrefix = React.useId().replace(/[^a-zA-Z0-9_-]/g, '') + '-';
  const {
    size = 16,
    color,
    title,
    ...svgProps
  } = props;
  return <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...svgProps} ref={ref} width={svgProps["width"] ?? size} height={svgProps["height"] ?? size} color={color} aria-labelledby={svgProps["aria-labelledby"] ?? (title ? idPrefix + "title" : undefined)} aria-label={svgProps["aria-label"] ?? title} role={svgProps["role"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? "img" : undefined)} aria-hidden={svgProps["aria-hidden"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? undefined : true)}>{title ? <title id={idPrefix + "title"}>{title}</title> : null}<path d="M9.02533 3.3414C9.11277 3.07969 9.39633 2.93781 9.65815 3.02499C9.92001 3.11228 10.0616 3.39593 9.97455 3.6578L6.97455 12.6578C6.88723 12.9198 6.60371 13.0615 6.34174 12.9742C6.07987 12.8868 5.93803 12.6033 6.02533 12.3414L9.02533 3.3414ZM4.12006 4.17441C4.29967 3.96508 4.61554 3.94049 4.82514 4.11972C5.03465 4.2993 5.05913 4.61513 4.87983 4.8248L2.15815 7.9996L4.87983 11.1744C5.05926 11.384 5.03457 11.6998 4.82514 11.8795C4.61547 12.059 4.2997 12.0344 4.12006 11.8248L1.12006 8.3248C0.96005 8.13764 0.95991 7.86148 1.12006 7.67441L4.12006 4.17441ZM11.1747 4.11972C11.3843 3.94045 11.7002 3.9651 11.8798 4.17441L14.8798 7.67441C15.04 7.8615 15.0399 8.13764 14.8798 8.3248L11.8798 11.8248C11.7002 12.0344 11.3844 12.059 11.1747 11.8795C10.9654 11.6998 10.9406 11.384 11.1201 11.1744L13.8408 7.9996L11.1201 4.8248C10.9408 4.61513 10.9652 4.29929 11.1747 4.11972Z" fill="currentColor" style={{
      fill: "currentColor",
      fillOpacity: 1
    }} /></svg>;
});
export default IconCode;
