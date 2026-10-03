import * as React from 'react';
import type { IconProps } from './types';
const IconListLog = React.forwardRef<SVGSVGElement, IconProps>(function IconListLog(props, ref) {
  const idPrefix = React.useId().replace(/[^a-zA-Z0-9_-]/g, '') + '-';
  const {
    size = 16,
    color,
    title,
    ...svgProps
  } = props;
  return <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...svgProps} ref={ref} width={svgProps["width"] ?? size} height={svgProps["height"] ?? size} color={color} aria-labelledby={svgProps["aria-labelledby"] ?? (title ? idPrefix + "title" : undefined)} aria-label={svgProps["aria-label"] ?? title} role={svgProps["role"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? "img" : undefined)} aria-hidden={svgProps["aria-hidden"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? undefined : true)}>{title ? <title id={idPrefix + "title"}>{title}</title> : null}<path d="M11.5 13C11.7761 13 12 13.2239 12 13.5C12 13.7761 11.7761 14 11.5 14H6.5C6.22386 14 6 13.7761 6 13.5C6 13.2239 6.22386 13 6.5 13H11.5ZM3.5 10C3.77614 10 4 10.2239 4 10.5C4 10.7761 3.77614 11 3.5 11H1.5C1.22386 11 1 10.7761 1 10.5C1 10.2239 1.22386 10 1.5 10H3.5ZM14.5 10C14.7761 10 15 10.2239 15 10.5C15 10.7761 14.7761 11 14.5 11H6.5C6.22386 11 6 10.7761 6 10.5C6 10.2239 6.22386 10 6.5 10H14.5ZM11.5 6C11.7761 6 12 6.22386 12 6.5C12 6.77614 11.7761 7 11.5 7H6.5C6.22386 7 6 6.77614 6 6.5C6 6.22386 6.22386 6 6.5 6H11.5ZM3.5 3C3.77614 3 4 3.22386 4 3.5C4 3.77614 3.77614 4 3.5 4H1.5C1.22386 4 1 3.77614 1 3.5C1 3.22386 1.22386 3 1.5 3H3.5ZM14.5 3C14.7761 3 15 3.22386 15 3.5C15 3.77614 14.7761 4 14.5 4H6.5C6.22386 4 6 3.77614 6 3.5C6 3.22386 6.22386 3 6.5 3H14.5Z" fill="currentColor" style={{
      fill: "currentColor",
      fillOpacity: 1
    }} /></svg>;
});
export default IconListLog;
