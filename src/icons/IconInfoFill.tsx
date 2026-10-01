import * as React from 'react';
import type { IconProps } from './types';
const IconInfoFill = React.forwardRef<SVGSVGElement, IconProps>(function IconInfoFill(props, ref) {
  const idPrefix = React.useId().replace(/[^a-zA-Z0-9_-]/g, '') + '-';
  const {
    size = 16,
    color,
    title,
    ...svgProps
  } = props;
  return <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...svgProps} ref={ref} width={svgProps["width"] ?? size} height={svgProps["height"] ?? size} color={color} aria-labelledby={svgProps["aria-labelledby"] ?? (title ? idPrefix + "title" : undefined)} aria-label={svgProps["aria-label"] ?? title} role={svgProps["role"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? "img" : undefined)} aria-hidden={svgProps["aria-hidden"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? undefined : true)}>{title ? <title id={idPrefix + "title"}>{title}</title> : null}<path d="M8 1C11.866 1 15 4.13401 15 8C15 11.866 11.866 15 8 15C4.13401 15 1 11.866 1 8C1 4.13401 4.13401 1 8 1ZM7.5 7C7.22386 7 7 7.22386 7 7.5C7 7.77614 7.22386 8 7.5 8V11C7.5 11.5523 7.94772 12 8.5 12C8.77614 12 9 11.7761 9 11.5C9 11.2239 8.77614 11 8.5 11V8C8.5 7.44772 8.05228 7 7.5 7ZM8 4.25C7.58579 4.25 7.25 4.58579 7.25 5C7.25 5.41421 7.58579 5.75 8 5.75C8.41421 5.75 8.75 5.41421 8.75 5C8.75 4.58579 8.41421 4.25 8 4.25Z" fill="currentColor" style={{
      fill: "currentColor",
      fillOpacity: 1
    }} /></svg>;
});
export default IconInfoFill;
