import * as React from 'react';
import type { IconProps } from './types';
const IconLibrarySimple = React.forwardRef<SVGSVGElement, IconProps>(function IconLibrarySimple(props, ref) {
  const idPrefix = React.useId().replace(/[^a-zA-Z0-9_-]/g, '') + '-';
  const {
    size = 16,
    color,
    title,
    ...svgProps
  } = props;
  return <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...svgProps} ref={ref} width={svgProps["width"] ?? size} height={svgProps["height"] ?? size} color={color} aria-labelledby={svgProps["aria-labelledby"] ?? (title ? idPrefix + "title" : undefined)} aria-label={svgProps["aria-label"] ?? title} role={svgProps["role"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? "img" : undefined)} aria-hidden={svgProps["aria-hidden"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? undefined : true)}>{title ? <title id={idPrefix + "title"}>{title}</title> : null}<path d="M2.5 1.99964C2.77602 1.99964 2.9998 2.22366 3 2.49964V13.4996C3 13.7758 2.77614 13.9996 2.5 13.9996C2.22386 13.9996 2 13.7758 2 13.4996V2.49964C2.0002 2.22366 2.22398 1.99964 2.5 1.99964ZM5.5 4.99964C5.77602 4.99964 5.9998 5.22366 6 5.49964V13.4996C6 13.7758 5.77614 13.9996 5.5 13.9996C5.22386 13.9996 5 13.7758 5 13.4996V5.49964C5.0002 5.22366 5.22398 4.99964 5.5 4.99964ZM8.5 2.99964C8.77602 2.99964 8.9998 3.22366 9 3.49964V13.4996C9 13.7758 8.77614 13.9996 8.5 13.9996C8.22386 13.9996 8 13.7758 8 13.4996V3.49964C8.0002 3.22366 8.22398 2.99964 8.5 2.99964ZM10.2764 5.05237C10.5232 4.92904 10.8237 5.02928 10.9473 5.276L14.9473 13.276C15.0707 13.5229 14.9705 13.8234 14.7236 13.9469C14.4766 14.0704 14.1762 13.9703 14.0527 13.7233L10.0527 5.72327C9.92946 5.47633 10.0295 5.17582 10.2764 5.05237Z" fill="currentColor" style={{
      fill: "currentColor",
      fillOpacity: 1
    }} /></svg>;
});
export default IconLibrarySimple;
