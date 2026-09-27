import * as React from 'react';
import type { IconProps } from './types';
const IconBanMd = React.forwardRef<SVGSVGElement, IconProps>(function IconBanMd(props, ref) {
  const idPrefix = React.useId().replace(/[^a-zA-Z0-9_-]/g, '') + '-';
  const {
    size = 16,
    color,
    title,
    ...svgProps
  } = props;
  return <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...svgProps} ref={ref} width={svgProps["width"] ?? size} height={svgProps["height"] ?? size} color={color} aria-labelledby={svgProps["aria-labelledby"] ?? (title ? idPrefix + "title" : undefined)} aria-label={svgProps["aria-label"] ?? title} role={svgProps["role"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? "img" : undefined)} aria-hidden={svgProps["aria-hidden"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? undefined : true)}>{title ? <title id={idPrefix + "title"}>{title}</title> : null}<path d="M8 2C11.3137 2 14 4.68629 14 8C14 11.3137 11.3137 14 8 14C4.68629 14 2 11.3137 2 8C2 4.68629 4.68629 2 8 2ZM4.12891 4.83496C3.42327 5.69698 3 6.79909 3 8C3 10.7614 5.23858 13 8 13C9.20086 13 10.3021 12.5757 11.1641 11.8701L4.12891 4.83496ZM8 3C6.79959 3 5.6978 3.42282 4.83594 4.12793L11.8711 11.1631C12.5762 10.3012 13 9.20037 13 8C13 5.23858 10.7614 3 8 3Z" fill="currentColor" style={{
      fill: "currentColor",
      fillOpacity: 1
    }} /></svg>;
});
export default IconBanMd;
