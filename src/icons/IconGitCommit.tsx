import * as React from 'react';
import type { IconProps } from './types';
const IconGitCommit = React.forwardRef<SVGSVGElement, IconProps>(function IconGitCommit(props, ref) {
  const idPrefix = React.useId().replace(/[^a-zA-Z0-9_-]/g, '') + '-';
  const {
    size = 16,
    color,
    title,
    ...svgProps
  } = props;
  return <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...svgProps} ref={ref} width={svgProps["width"] ?? size} height={svgProps["height"] ?? size} color={color} aria-labelledby={svgProps["aria-labelledby"] ?? (title ? idPrefix + "title" : undefined)} aria-label={svgProps["aria-label"] ?? title} role={svgProps["role"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? "img" : undefined)} aria-hidden={svgProps["aria-hidden"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? undefined : true)}>{title ? <title id={idPrefix + "title"}>{title}</title> : null}<path d="M8 5C9.48647 5 10.7199 6.08118 10.958 7.5H14.5C14.7761 7.5 15 7.72389 15 8C15 8.27614 14.7761 8.5 14.5 8.5H10.958C10.7199 9.91882 9.48647 11 8 11C6.51353 11 5.28007 9.91882 5.04199 8.5H1.5C1.22386 8.5 1 8.27614 1 8C1.00003 7.72389 1.22388 7.5 1.5 7.5H5.04199C5.28007 6.08118 6.51353 5 8 5ZM8 6C6.89543 6 6 6.89543 6 8C6 9.10457 6.89543 10 8 10C9.10457 10 10 9.10457 10 8C10 6.89543 9.10457 6 8 6Z" fill="currentColor" style={{
      fill: "currentColor",
      fillOpacity: 1
    }} /></svg>;
});
export default IconGitCommit;
