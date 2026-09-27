import * as React from 'react';
import type { IconProps } from './types';
const IconCompass = React.forwardRef<SVGSVGElement, IconProps>(function IconCompass(props, ref) {
  const idPrefix = React.useId().replace(/[^a-zA-Z0-9_-]/g, '') + '-';
  const {
    size = 16,
    color,
    title,
    ...svgProps
  } = props;
  return <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...svgProps} ref={ref} width={svgProps["width"] ?? size} height={svgProps["height"] ?? size} color={color} aria-labelledby={svgProps["aria-labelledby"] ?? (title ? idPrefix + "title" : undefined)} aria-label={svgProps["aria-label"] ?? title} role={svgProps["role"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? "img" : undefined)} aria-hidden={svgProps["aria-hidden"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? undefined : true)}>{title ? <title id={idPrefix + "title"}>{title}</title> : null}<path d="M8 1C11.866 1 15 4.13401 15 8C15 11.866 11.866 15 8 15C4.13401 15 1 11.866 1 8C1 4.13401 4.13401 1 8 1ZM8 2C4.6863 2 2 4.68629 2 8C2 11.3137 4.6863 14 8 14C11.3137 14 14 11.3137 14 8C14 4.68629 11.3137 2 8 2ZM10.5527 4.10547C10.9377 3.91299 11.4027 3.98862 11.707 4.29297C12.0114 4.59733 12.087 5.06229 11.8945 5.44727L9.89453 9.44727C9.79777 9.64079 9.64078 9.79777 9.44727 9.89453L5.44727 11.8945C5.06228 12.087 4.59733 12.0114 4.29297 11.707C3.98861 11.4027 3.91297 10.9377 4.10547 10.5527L6.10547 6.55273C6.20223 6.35921 6.35921 6.20223 6.55273 6.10547L10.5527 4.10547ZM7 7L5 11L9 9L11 5L7 7ZM8 7.25C8.41421 7.25 8.75 7.58579 8.75 8C8.75 8.41421 8.41421 8.75 8 8.75C7.58579 8.75 7.25 8.41421 7.25 8C7.25 7.58579 7.58579 7.25 8 7.25Z" fill="currentColor" style={{
      fill: "currentColor",
      fillOpacity: 1
    }} /></svg>;
});
export default IconCompass;
