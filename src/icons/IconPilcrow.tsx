import * as React from 'react';
import type { IconProps } from './types';
const IconPilcrow = React.forwardRef<SVGSVGElement, IconProps>(function IconPilcrow(props, ref) {
  const idPrefix = React.useId().replace(/[^a-zA-Z0-9_-]/g, '') + '-';
  const {
    size = 16,
    color,
    title,
    ...svgProps
  } = props;
  return <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...svgProps} ref={ref} width={svgProps["width"] ?? size} height={svgProps["height"] ?? size} color={color} aria-labelledby={svgProps["aria-labelledby"] ?? (title ? idPrefix + "title" : undefined)} aria-label={svgProps["aria-label"] ?? title} role={svgProps["role"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? "img" : undefined)} aria-hidden={svgProps["aria-hidden"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? undefined : true)}>{title ? <title id={idPrefix + "title"}>{title}</title> : null}<path d="M12.5 2C12.7761 2 13 2.22386 13 2.5C13 2.77614 12.7761 3 12.5 3H12V13H12.5C12.7761 13 13 13.2239 13 13.5C13 13.7761 12.7761 14 12.5 14H12C11.4477 14 11 13.5523 11 13V3H9V13C9 13.5523 8.55228 14 8 14H7.5C7.22386 14 7 13.7761 7 13.5C7 13.2239 7.22386 13 7.5 13H8V9H6.5C5.57174 9 4.68177 8.63099 4.02539 7.97461C3.36901 7.31823 3 6.42826 3 5.5C3 4.57174 3.36901 3.68177 4.02539 3.02539C4.68177 2.36901 5.57174 2 6.5 2H12.5ZM6.5 3C5.83696 3 5.20126 3.26358 4.73242 3.73242C4.26358 4.20126 4 4.83696 4 5.5C4 6.16304 4.26358 6.79874 4.73242 7.26758C5.20126 7.73642 5.83696 8 6.5 8H8V3H6.5Z" fill="currentColor" style={{
      fill: "currentColor",
      fillOpacity: 1
    }} /></svg>;
});
export default IconPilcrow;
