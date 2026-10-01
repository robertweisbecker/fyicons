import * as React from 'react';
import type { IconProps } from './types';
const IconGitBranch = React.forwardRef<SVGSVGElement, IconProps>(function IconGitBranch(props, ref) {
  const idPrefix = React.useId().replace(/[^a-zA-Z0-9_-]/g, '') + '-';
  const {
    size = 16,
    color,
    title,
    ...svgProps
  } = props;
  return <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...svgProps} ref={ref} width={svgProps["width"] ?? size} height={svgProps["height"] ?? size} color={color} aria-labelledby={svgProps["aria-labelledby"] ?? (title ? idPrefix + "title" : undefined)} aria-label={svgProps["aria-label"] ?? title} role={svgProps["role"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? "img" : undefined)} aria-hidden={svgProps["aria-hidden"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? undefined : true)}>{title ? <title id={idPrefix + "title"}>{title}</title> : null}<path d="M11 2C12.1046 2 13 2.89543 13 4C13 4.94674 12.3415 5.73702 11.458 5.94434C11.2482 7.11285 10.2289 8 9 8H8C6.76422 8 5.73994 8.897 5.53809 10.0752C6.38105 10.3104 7 11.082 7 12C7 13.1046 6.10457 14 5 14C3.89543 14 3 13.1046 3 12C3 11.0683 3.63768 10.2877 4.5 10.0654V5.93359C3.6378 5.71129 3 4.93162 3 4C3 2.89543 3.89543 2 5 2C6.10457 2 7 2.89543 7 4C7 4.93162 6.3622 5.71129 5.5 5.93359V8.05176C6.1353 7.40311 7.02033 7 8 7H9C9.68322 7 10.2583 6.5428 10.4395 5.91797C9.60806 5.67539 9 4.90974 9 4C9 2.89543 9.89543 2 11 2ZM5 11C4.44772 11 4 11.4477 4 12C4 12.5523 4.44772 13 5 13C5.55228 13 6 12.5523 6 12C6 11.4477 5.55228 11 5 11ZM5 3C4.44772 3 4 3.44772 4 4C4 4.55228 4.44772 5 5 5C5.55228 5 6 4.55228 6 4C6 3.44772 5.55228 3 5 3ZM11 3C10.4477 3 10 3.44772 10 4C10 4.55228 10.4477 5 11 5C11.5523 5 12 4.55228 12 4C12 3.44772 11.5523 3 11 3Z" fill="currentColor" style={{
      fill: "currentColor",
      fillOpacity: 1
    }} /></svg>;
});
export default IconGitBranch;
