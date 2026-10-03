import * as React from 'react';
import type { IconProps } from './types';
const IconFullscreenExitLandscape = React.forwardRef<SVGSVGElement, IconProps>(function IconFullscreenExitLandscape(props, ref) {
  const idPrefix = React.useId().replace(/[^a-zA-Z0-9_-]/g, '') + '-';
  const {
    size = 16,
    color,
    title,
    ...svgProps
  } = props;
  return <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...svgProps} ref={ref} width={svgProps["width"] ?? size} height={svgProps["height"] ?? size} color={color} aria-labelledby={svgProps["aria-labelledby"] ?? (title ? idPrefix + "title" : undefined)} aria-label={svgProps["aria-label"] ?? title} role={svgProps["role"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? "img" : undefined)} aria-hidden={svgProps["aria-hidden"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? undefined : true)}>{title ? <title id={idPrefix + "title"}>{title}</title> : null}<path d="M6.5 9C6.77614 9 7 9.22386 7 9.5V12.5C7 12.7761 6.77614 13 6.5 13C6.22386 13 6 12.7761 6 12.5V10H1.5C1.22386 10 1 9.77614 1 9.5C1 9.22386 1.22386 9 1.5 9H6.5ZM14.5 9C14.7761 9 15 9.22386 15 9.5C15 9.77614 14.7761 10 14.5 10H10V12.5C10 12.7761 9.77614 13 9.5 13C9.22386 13 9 12.7761 9 12.5V9.5C9 9.22386 9.22386 9 9.5 9H14.5ZM6.5 3C6.77614 3 7 3.22386 7 3.5V6.5C7 6.77614 6.77614 7 6.5 7H1.5C1.22386 7 1 6.77614 1 6.5C1 6.22386 1.22386 6 1.5 6H6V3.5C6 3.22386 6.22386 3 6.5 3ZM9.5 3C9.77614 3 10 3.22386 10 3.5V6H14.5C14.7761 6 15 6.22386 15 6.5C15 6.77614 14.7761 7 14.5 7H9.5C9.22386 7 9 6.77614 9 6.5V3.5C9 3.22386 9.22386 3 9.5 3Z" fill="currentColor" style={{
      fill: "currentColor",
      fillOpacity: 1
    }} /></svg>;
});
export default IconFullscreenExitLandscape;
