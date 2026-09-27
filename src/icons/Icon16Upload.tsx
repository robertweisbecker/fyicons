import * as React from 'react';
import type { IconProps } from './types';
const Icon16Upload = React.forwardRef<SVGSVGElement, IconProps>(function Icon16Upload(props, ref) {
  const idPrefix = React.useId().replace(/[^a-zA-Z0-9_-]/g, '') + '-';
  const {
    size = 16,
    color,
    title,
    ...svgProps
  } = props;
  return <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...svgProps} ref={ref} width={svgProps["width"] ?? size} height={svgProps["height"] ?? size} color={color} aria-labelledby={svgProps["aria-labelledby"] ?? (title ? idPrefix + "title" : undefined)} aria-label={svgProps["aria-label"] ?? title} role={svgProps["role"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? "img" : undefined)} aria-hidden={svgProps["aria-hidden"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? undefined : true)}>{title ? <title id={idPrefix + "title"}>{title}</title> : null}<path d="M13.5 10.0005C13.7761 10.0005 14 10.2243 14 10.5005V12.5005C13.9997 13.3287 13.3283 14.0005 12.5 14.0005H3.5C2.67173 14.0005 2.00026 13.3287 2 12.5005V10.5005C2 10.2243 2.22386 10.0005 2.5 10.0005C2.77614 10.0005 3 10.2243 3 10.5005V12.5005C3.00026 12.7764 3.22402 13.0005 3.5 13.0005H12.5C12.776 13.0005 12.9997 12.7764 13 12.5005V10.5005C13 10.2243 13.2239 10.0005 13.5 10.0005ZM7.72461 2.58154C7.91862 2.45351 8.18269 2.4753 8.35352 2.646L11.3535 5.646C11.5487 5.84121 11.5486 6.15775 11.3535 6.35303C11.1583 6.54829 10.8417 6.54829 10.6465 6.35303L8.5 4.20654V10.4995C8.5 10.7757 8.27614 10.9995 8 10.9995C7.72386 10.9995 7.5 10.7757 7.5 10.4995V4.20654L5.35352 6.35303C5.15825 6.54829 4.84175 6.54829 4.64648 6.35303C4.45136 6.15775 4.45127 5.84121 4.64648 5.646L7.64648 2.646L7.72461 2.58154Z" fill="currentColor" fillOpacity={1} style={{
      fill: "currentColor",
      fillOpacity: 1
    }} /></svg>;
});
export default Icon16Upload;
