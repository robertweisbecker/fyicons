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
  return <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...svgProps} ref={ref} width={svgProps["width"] ?? size} height={svgProps["height"] ?? size} color={color} aria-labelledby={svgProps["aria-labelledby"] ?? (title ? idPrefix + "title" : undefined)} aria-label={svgProps["aria-label"] ?? title} role={svgProps["role"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? "img" : undefined)} aria-hidden={svgProps["aria-hidden"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? undefined : true)}>{title ? <title id={idPrefix + "title"}>{title}</title> : null}<path d="M8 1C11.866 1 15 4.13401 15 8C15 11.866 11.866 15 8 15C4.13401 15 1 11.866 1 8C1 4.13401 4.13401 1 8 1ZM7.5 8C7.22386 8 7 8.22386 7 8.5C7 8.77614 7.22386 9 7.5 9H7.70703L7.54297 10.96C7.49632 11.5197 7.93832 12 8.5 12C8.77614 12 9 11.7761 9 11.5C9 11.2384 8.79891 11.0258 8.54297 11.0039L8.70312 9.08301C8.75168 8.50015 8.29185 8.00025 7.70703 8H7.5ZM8 5.25C7.58579 5.25 7.25 5.58579 7.25 6C7.25 6.41421 7.58579 6.75 8 6.75C8.41421 6.75 8.75 6.41421 8.75 6C8.75 5.58579 8.41421 5.25 8 5.25Z" fill="currentColor" style={{
      fill: "currentColor",
      fillOpacity: 1
    }} /></svg>;
});
export default IconInfoFill;
