import * as React from 'react';
import type { IconProps } from './types';
const IconListBullet = React.forwardRef<SVGSVGElement, IconProps>(function IconListBullet(props, ref) {
  const idPrefix = React.useId().replace(/[^a-zA-Z0-9_-]/g, '') + '-';
  const {
    size = 16,
    color,
    title,
    ...svgProps
  } = props;
  return <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...svgProps} ref={ref} width={svgProps["width"] ?? size} height={svgProps["height"] ?? size} color={color} aria-labelledby={svgProps["aria-labelledby"] ?? (title ? idPrefix + "title" : undefined)} aria-label={svgProps["aria-label"] ?? title} role={svgProps["role"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? "img" : undefined)} aria-hidden={svgProps["aria-hidden"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? undefined : true)}>{title ? <title id={idPrefix + "title"}>{title}</title> : null}<path d="M3.5 11.25C4.19036 11.25 4.75 11.8096 4.75 12.5C4.75 13.1904 4.19036 13.75 3.5 13.75C2.80964 13.75 2.25 13.1904 2.25 12.5C2.25 11.8096 2.80964 11.25 3.5 11.25ZM13.5 12C13.7761 12 14 12.2239 14 12.5C14 12.7761 13.7761 13 13.5 13H7.5C7.22386 13 7 12.7761 7 12.5C7 12.2239 7.22386 12 7.5 12H13.5ZM3.5 6.75C4.19036 6.75 4.75 7.30964 4.75 8C4.75 8.69036 4.19036 9.25 3.5 9.25C2.80964 9.25 2.25 8.69036 2.25 8C2.25 7.30964 2.80964 6.75 3.5 6.75ZM13.5 7.5C13.7761 7.5 14 7.72386 14 8C14 8.27614 13.7761 8.5 13.5 8.5H7.5C7.22386 8.5 7 8.27614 7 8C7 7.72386 7.22386 7.5 7.5 7.5H13.5ZM3.5 2.25C4.19036 2.25 4.75 2.80964 4.75 3.5C4.75 4.19036 4.19036 4.75 3.5 4.75C2.80964 4.75 2.25 4.19036 2.25 3.5C2.25 2.80964 2.80964 2.25 3.5 2.25ZM13.5 3C13.7761 3 14 3.22386 14 3.5C14 3.77614 13.7761 4 13.5 4H7.5C7.22386 4 7 3.77614 7 3.5C7 3.22386 7.22386 3 7.5 3H13.5Z" fill="currentColor" style={{
      fill: "currentColor",
      fillOpacity: 1
    }} /></svg>;
});
export default IconListBullet;
