import * as React from 'react';
import type { IconProps } from './types';
const IconTextAlignStart = React.forwardRef<SVGSVGElement, IconProps>(function IconTextAlignStart(props, ref) {
  const idPrefix = React.useId().replace(/[^a-zA-Z0-9_-]/g, '') + '-';
  const {
    size = 16,
    color,
    title,
    ...svgProps
  } = props;
  return <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...svgProps} ref={ref} width={svgProps["width"] ?? size} height={svgProps["height"] ?? size} color={color} aria-labelledby={svgProps["aria-labelledby"] ?? (title ? idPrefix + "title" : undefined)} aria-label={svgProps["aria-label"] ?? title} role={svgProps["role"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? "img" : undefined)} aria-hidden={svgProps["aria-hidden"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? undefined : true)}>{title ? <title id={idPrefix + "title"}>{title}</title> : null}<path d="M5.5 12C5.77614 12 6 12.2239 6 12.5C6 12.7761 5.77614 13 5.5 13H1.5C1.22386 13 1 12.7761 1 12.5C1 12.2239 1.22386 12 1.5 12H5.5ZM10.5 9C10.7761 9 11 9.22386 11 9.5C11 9.77614 10.7761 10 10.5 10H1.5C1.22386 10 1 9.77614 1 9.5C1 9.22386 1.22386 9 1.5 9H10.5ZM7.5 6C7.77614 6 8 6.22386 8 6.5C8 6.77614 7.77614 7 7.5 7H1.5C1.22386 7 1 6.77614 1 6.5C1 6.22386 1.22386 6 1.5 6H7.5ZM14.5 3C14.7761 3 15 3.22386 15 3.5C15 3.77614 14.7761 4 14.5 4H1.5C1.22386 4 1 3.77614 1 3.5C1 3.22386 1.22386 3 1.5 3H14.5Z" fill="currentColor" style={{
      fill: "currentColor",
      fillOpacity: 1
    }} /></svg>;
});
export default IconTextAlignStart;
