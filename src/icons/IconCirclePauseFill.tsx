import * as React from 'react';
import type { IconProps } from './types';
const IconCirclePauseFill = React.forwardRef<SVGSVGElement, IconProps>(function IconCirclePauseFill(props, ref) {
  const idPrefix = React.useId().replace(/[^a-zA-Z0-9_-]/g, '') + '-';
  const {
    size = 16,
    color,
    title,
    ...svgProps
  } = props;
  return <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...svgProps} ref={ref} width={svgProps["width"] ?? size} height={svgProps["height"] ?? size} color={color} aria-labelledby={svgProps["aria-labelledby"] ?? (title ? idPrefix + "title" : undefined)} aria-label={svgProps["aria-label"] ?? title} role={svgProps["role"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? "img" : undefined)} aria-hidden={svgProps["aria-hidden"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? undefined : true)}>{title ? <title id={idPrefix + "title"}>{title}</title> : null}<path d="M8 1C11.866 1 15 4.13401 15 8C15 11.866 11.866 15 8 15C4.13401 15 1 11.866 1 8C1 4.13401 4.13401 1 8 1ZM5.5 5C5.22386 5 5 5.22386 5 5.5V10.5C5 10.7761 5.22386 11 5.5 11H6.5C6.77614 11 7 10.7761 7 10.5V5.5C7 5.22386 6.77614 5 6.5 5H5.5ZM9.5 5C9.22386 5 9 5.22386 9 5.5V10.5C9 10.7761 9.22386 11 9.5 11H10.5C10.7761 11 11 10.7761 11 10.5V5.5C11 5.22386 10.7761 5 10.5 5H9.5Z" fill="currentColor" style={{
      fill: "currentColor",
      fillOpacity: 1
    }} /></svg>;
});
export default IconCirclePauseFill;
