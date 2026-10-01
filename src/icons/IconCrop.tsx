import * as React from 'react';
import type { IconProps } from './types';
const IconCrop = React.forwardRef<SVGSVGElement, IconProps>(function IconCrop(props, ref) {
  const idPrefix = React.useId().replace(/[^a-zA-Z0-9_-]/g, '') + '-';
  const {
    size = 16,
    color,
    title,
    ...svgProps
  } = props;
  return <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...svgProps} ref={ref} width={svgProps["width"] ?? size} height={svgProps["height"] ?? size} color={color} aria-labelledby={svgProps["aria-labelledby"] ?? (title ? idPrefix + "title" : undefined)} aria-label={svgProps["aria-label"] ?? title} role={svgProps["role"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? "img" : undefined)} aria-hidden={svgProps["aria-hidden"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? undefined : true)}>{title ? <title id={idPrefix + "title"}>{title}</title> : null}<path d="M4.5 1C4.77614 1 5 1.22386 5 1.5V4H10.5C11.3284 4 12 4.67157 12 5.5V11H14.5C14.7761 11 15 11.2239 15 11.5C15 11.7761 14.7761 12 14.5 12H12V14.5C12 14.7761 11.7761 15 11.5 15C11.2239 15 11 14.7761 11 14.5V12H5.5C4.67157 12 4 11.3284 4 10.5V5H1.5C1.22386 5 1 4.77614 1 4.5C1 4.22386 1.22386 4 1.5 4H4V1.5C4 1.22386 4.22386 1 4.5 1ZM5 10.5C5 10.7761 5.22386 11 5.5 11H11V5.5C11 5.22386 10.7761 5 10.5 5H5V10.5Z" fill="currentColor" style={{
      fill: "currentColor",
      fillOpacity: 1
    }} /></svg>;
});
export default IconCrop;
