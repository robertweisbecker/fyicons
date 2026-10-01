import * as React from 'react';
import type { IconProps } from './types';
const IconTextAlignLeft = React.forwardRef<SVGSVGElement, IconProps>(function IconTextAlignLeft(props, ref) {
  const idPrefix = React.useId().replace(/[^a-zA-Z0-9_-]/g, '') + '-';
  const {
    size = 16,
    color,
    title,
    ...svgProps
  } = props;
  return <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...svgProps} ref={ref} width={svgProps["width"] ?? size} height={svgProps["height"] ?? size} color={color} aria-labelledby={svgProps["aria-labelledby"] ?? (title ? idPrefix + "title" : undefined)} aria-label={svgProps["aria-label"] ?? title} role={svgProps["role"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? "img" : undefined)} aria-hidden={svgProps["aria-hidden"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? undefined : true)}>{title ? <title id={idPrefix + "title"}>{title}</title> : null}<path d="M11 11.5C11 11.7761 10.7761 12 10.5 12H1.5C1.22386 12 1 11.7761 1 11.5C1 11.2239 1.22386 11 1.5 11H10.5C10.7761 11 11 11.2239 11 11.5ZM9 7.5C9 7.77614 8.77614 8 8.5 8H1.5C1.22386 8 1 7.77614 1 7.5C1 7.22386 1.22386 7 1.5 7H8.5C8.77614 7 9 7.22386 9 7.5ZM15 3.5C15 3.77614 14.7761 4 14.5 4H1.5C1.22386 4 1 3.77614 1 3.5C1 3.22386 1.22386 3 1.5 3H14.5C14.7761 3 15 3.22386 15 3.5Z" fill="currentColor" style={{
      fill: "currentColor",
      fillOpacity: 1
    }} /></svg>;
});
export default IconTextAlignLeft;
