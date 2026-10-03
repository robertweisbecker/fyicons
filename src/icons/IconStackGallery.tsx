import * as React from 'react';
import type { IconProps } from './types';
const IconStackGallery = React.forwardRef<SVGSVGElement, IconProps>(function IconStackGallery(props, ref) {
  const idPrefix = React.useId().replace(/[^a-zA-Z0-9_-]/g, '') + '-';
  const {
    size = 16,
    color,
    title,
    ...svgProps
  } = props;
  return <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...svgProps} ref={ref} width={svgProps["width"] ?? size} height={svgProps["height"] ?? size} color={color} aria-labelledby={svgProps["aria-labelledby"] ?? (title ? idPrefix + "title" : undefined)} aria-label={svgProps["aria-label"] ?? title} role={svgProps["role"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? "img" : undefined)} aria-hidden={svgProps["aria-hidden"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? undefined : true)}>{title ? <title id={idPrefix + "title"}>{title}</title> : null}<path d="M2 5.25C2 4.55964 2.55964 4 3.25 4H4V3.5C4 2.67157 4.67157 2 5.5 2H10.5C11.3284 2 12 2.67157 12 3.5V4H12.75C13.4404 4 14 4.55964 14 5.25V10.75C14 11.4404 13.4404 12 12.75 12H12V12.5C12 13.3284 11.3284 14 10.5 14H5.5C4.67157 14 4 13.3284 4 12.5V12H3.25C2.55964 12 2 11.4404 2 10.75V5.25ZM12 11H12.75C12.8881 11 13 10.8881 13 10.75V5.25C13 5.11193 12.8881 5 12.75 5H12V11ZM5 12.5C5 12.7761 5.22386 13 5.5 13H10.5C10.7761 13 11 12.7761 11 12.5V3.5C11 3.22386 10.7761 3 10.5 3H5.5C5.22386 3 5 3.22386 5 3.5V12.5ZM3 10.75C3 10.8881 3.11193 11 3.25 11H4V5H3.25C3.11193 5 3 5.11193 3 5.25V10.75Z" fill="currentColor" style={{
      fill: "currentColor",
      fillOpacity: 1
    }} /></svg>;
});
export default IconStackGallery;
