import * as React from 'react';
import type { IconProps } from './types';
const IconFontSerif = React.forwardRef<SVGSVGElement, IconProps>(function IconFontSerif(props, ref) {
  const idPrefix = React.useId().replace(/[^a-zA-Z0-9_-]/g, '') + '-';
  const {
    size = 16,
    color,
    title,
    ...svgProps
  } = props;
  return <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...svgProps} ref={ref} width={svgProps["width"] ?? size} height={svgProps["height"] ?? size} color={color} aria-labelledby={svgProps["aria-labelledby"] ?? (title ? idPrefix + "title" : undefined)} aria-label={svgProps["aria-label"] ?? title} role={svgProps["role"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? "img" : undefined)} aria-hidden={svgProps["aria-hidden"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? undefined : true)}>{title ? <title id={idPrefix + "title"}>{title}</title> : null}<path d="M8.01172 2.50025H8.65527C8.86274 2.50025 9.04919 2.62864 9.12305 2.82251L13 13.0002H13.5C13.7761 13.0002 14 13.2241 14 13.5002C13.9999 13.7763 13.7761 14.0002 13.5 14.0002H10.5C10.2239 14.0002 10.0001 13.7763 10 13.5002C10 13.2241 10.2239 13.0002 10.5 13.0002H11.5L10.333 10.0002H5.54395L4.25879 13.0002H5.5C5.77614 13.0002 6 13.2241 6 13.5002C5.99993 13.7763 5.7761 14.0002 5.5 14.0002H2.5C2.2239 14.0002 2.00007 13.7763 2 13.5002C2 13.2241 2.22386 13.0002 2.5 13.0002H3.16992L7.54004 2.80298C7.6229 2.60978 7.81347 2.4958 8.01172 2.50025ZM5.97266 9.00025H9.94434L8.05469 4.14185L5.97266 9.00025Z" fill="currentColor" style={{
      fill: "currentColor",
      fillOpacity: 1
    }} /></svg>;
});
export default IconFontSerif;
