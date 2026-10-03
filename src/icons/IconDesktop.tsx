import * as React from 'react';
import type { IconProps } from './types';
const IconDesktop = React.forwardRef<SVGSVGElement, IconProps>(function IconDesktop(props, ref) {
  const idPrefix = React.useId().replace(/[^a-zA-Z0-9_-]/g, '') + '-';
  const {
    size = 16,
    color,
    title,
    ...svgProps
  } = props;
  return <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...svgProps} ref={ref} width={svgProps["width"] ?? size} height={svgProps["height"] ?? size} color={color} aria-labelledby={svgProps["aria-labelledby"] ?? (title ? idPrefix + "title" : undefined)} aria-label={svgProps["aria-label"] ?? title} role={svgProps["role"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? "img" : undefined)} aria-hidden={svgProps["aria-hidden"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? undefined : true)}>{title ? <title id={idPrefix + "title"}>{title}</title> : null}<path d="M12.5 2C13.3284 2 14 2.67157 14 3.5V9.5C14 10.3284 13.3284 11 12.5 11H10V13H10.5C10.7761 13 11 13.2239 11 13.5C11 13.7761 10.7761 14 10.5 14H5.5C5.22386 14 5 13.7761 5 13.5C5 13.2239 5.22386 13 5.5 13H6V11H3.5C2.67157 11 2 10.3284 2 9.5V3.5C2 2.67157 2.67157 2 3.5 2H12.5ZM7 13H9V11H7V13ZM13 8.91211C12.8434 8.96757 12.6756 9 12.5 9H3.5C3.32438 9 3.15662 8.96757 3 8.91211V9.5C3 9.77614 3.22386 10 3.5 10H12.5C12.7761 10 13 9.77614 13 9.5V8.91211ZM3.5 3C3.22386 3 3 3.22386 3 3.5V7.5C3 7.77614 3.22386 8 3.5 8H12.5C12.7761 8 13 7.77614 13 7.5V3.5C13 3.22386 12.7761 3 12.5 3H3.5Z" fill="currentColor" style={{
      fill: "currentColor",
      fillOpacity: 1
    }} /></svg>;
});
export default IconDesktop;
