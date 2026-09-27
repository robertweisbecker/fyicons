import * as React from 'react';
import type { IconProps } from './types';
const IconTextAlignJustify = React.forwardRef<SVGSVGElement, IconProps>(function IconTextAlignJustify(props, ref) {
  const idPrefix = React.useId().replace(/[^a-zA-Z0-9_-]/g, '') + '-';
  const {
    size = 16,
    color,
    title,
    ...svgProps
  } = props;
  return <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...svgProps} ref={ref} width={svgProps["width"] ?? size} height={svgProps["height"] ?? size} color={color} aria-labelledby={svgProps["aria-labelledby"] ?? (title ? idPrefix + "title" : undefined)} aria-label={svgProps["aria-label"] ?? title} role={svgProps["role"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? "img" : undefined)} aria-hidden={svgProps["aria-hidden"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? undefined : true)}>{title ? <title id={idPrefix + "title"}>{title}</title> : null}<path d="M12.5 12C12.7761 12 13 12.2239 13 12.5C13 12.7761 12.7761 13 12.5 13H3.5C3.22386 13 3 12.7761 3 12.5C3 12.2239 3.22386 12 3.5 12H12.5ZM12.5 9C12.7761 9 13 9.22386 13 9.5C13 9.77614 12.7761 10 12.5 10H3.5C3.22386 10 3 9.77614 3 9.5C3 9.22386 3.22386 9 3.5 9H12.5ZM12.5 6C12.7761 6 13 6.22386 13 6.5C13 6.77614 12.7761 7 12.5 7H3.5C3.22386 7 3 6.77614 3 6.5C3 6.22386 3.22386 6 3.5 6H12.5ZM12.5 3C12.7761 3 13 3.22386 13 3.5C13 3.77614 12.7761 4 12.5 4H3.5C3.22386 4 3 3.77614 3 3.5C3 3.22386 3.22386 3 3.5 3H12.5Z" fill="currentColor" style={{
      fill: "currentColor",
      fillOpacity: 1
    }} /></svg>;
});
export default IconTextAlignJustify;
