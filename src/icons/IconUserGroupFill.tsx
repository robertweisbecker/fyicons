import * as React from 'react';
import type { IconProps } from './types';
const IconUserGroupFill = React.forwardRef<SVGSVGElement, IconProps>(function IconUserGroupFill(props, ref) {
  const idPrefix = React.useId().replace(/[^a-zA-Z0-9_-]/g, '') + '-';
  const {
    size = 16,
    color,
    title,
    ...svgProps
  } = props;
  return <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...svgProps} ref={ref} width={svgProps["width"] ?? size} height={svgProps["height"] ?? size} color={color} aria-labelledby={svgProps["aria-labelledby"] ?? (title ? idPrefix + "title" : undefined)} aria-label={svgProps["aria-label"] ?? title} role={svgProps["role"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? "img" : undefined)} aria-hidden={svgProps["aria-hidden"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? undefined : true)}>{title ? <title id={idPrefix + "title"}>{title}</title> : null}<path d="M11.0004 9C12.0386 9.00003 12.8006 9.32389 13.3422 9.80762C13.8739 10.2825 14.1568 10.8786 14.309 11.3701C14.4459 11.8124 14.3252 12.238 14.058 12.5391C13.7984 12.8315 13.41 13 12.9994 13H9.67229C9.60544 13.1424 9.51959 13.2751 9.41448 13.3916C9.07098 13.7722 8.55088 14 8.00237 14H3.00237C2.45386 14 1.93374 13.7722 1.59026 13.3916C1.23724 13.0002 1.07198 12.4413 1.28264 11.8584C1.9022 10.1443 3.48854 9.00002 5.50237 9C6.67338 9 7.69816 9.38893 8.47405 10.0498C8.46351 10.0408 8.45342 10.0313 8.4428 10.0225C8.50998 9.94902 8.58128 9.87664 8.65862 9.80762C9.20047 9.32414 9.96245 9 11.0004 9ZM5.50041 3C6.88112 3 8.00041 4.11929 8.00041 5.5C8.00041 6.88071 6.88112 8 5.50041 8C4.11972 7.99998 3.00041 6.8807 3.00041 5.5C3.00041 4.1193 4.11972 3.00002 5.50041 3ZM10.9955 4C12.1001 4.00006 12.9955 4.89547 12.9955 6C12.9955 7.10453 12.1001 7.99994 10.9955 8C9.891 7.99996 8.99553 7.10455 8.99553 6C8.99553 4.89545 9.891 4.00004 10.9955 4Z" fill="currentColor" style={{
      fill: "currentColor",
      fillOpacity: 1
    }} /></svg>;
});
export default IconUserGroupFill;
