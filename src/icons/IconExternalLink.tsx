import * as React from 'react';
import type { IconProps } from './types';
const IconExternalLink = React.forwardRef<SVGSVGElement, IconProps>(function IconExternalLink(props, ref) {
  const idPrefix = React.useId().replace(/[^a-zA-Z0-9_-]/g, '') + '-';
  const {
    size = 16,
    color,
    title,
    ...svgProps
  } = props;
  return <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...svgProps} ref={ref} width={svgProps["width"] ?? size} height={svgProps["height"] ?? size} color={color} aria-labelledby={svgProps["aria-labelledby"] ?? (title ? idPrefix + "title" : undefined)} aria-label={svgProps["aria-label"] ?? title} role={svgProps["role"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? "img" : undefined)} aria-hidden={svgProps["aria-hidden"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? undefined : true)}>{title ? <title id={idPrefix + "title"}>{title}</title> : null}<path d="M6.5 4C6.77614 4 7 4.22386 7 4.5C7 4.77614 6.77614 5 6.5 5H5.5C4.67157 5 4 5.67157 4 6.5V11.5C4 12.3284 4.67157 13 5.5 13H10.5C11.3284 13 12 12.3284 12 11.5V10.5C12 10.2239 12.2239 10 12.5 10C12.7761 10 13 10.2239 13 10.5V11.5C13 12.8807 11.8807 14 10.5 14H5.5C4.11929 14 3 12.8807 3 11.5V6.5C3 5.11929 4.11929 4 5.5 4H6.5ZM13.5 3C13.7761 3 14 3.22386 14 3.5V7.5C14 7.77614 13.7761 8 13.5 8C13.2239 8 13 7.77614 13 7.5V4.70703L8.85352 8.85352C8.65825 9.04878 8.34175 9.04878 8.14648 8.85352C7.95122 8.65825 7.95122 8.34175 8.14648 8.14648L12.293 4H9.5C9.22386 4 9 3.77614 9 3.5C9 3.22386 9.22386 3 9.5 3H13.5Z" fill="currentColor" style={{
      fill: "currentColor",
      fillOpacity: 1
    }} /></svg>;
});
export default IconExternalLink;
