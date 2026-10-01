import * as React from 'react';
import type { IconProps } from './types';
const IconFolderClosed = React.forwardRef<SVGSVGElement, IconProps>(function IconFolderClosed(props, ref) {
  const idPrefix = React.useId().replace(/[^a-zA-Z0-9_-]/g, '') + '-';
  const {
    size = 16,
    color,
    title,
    ...svgProps
  } = props;
  return <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...svgProps} ref={ref} width={svgProps["width"] ?? size} height={svgProps["height"] ?? size} color={color} aria-labelledby={svgProps["aria-labelledby"] ?? (title ? idPrefix + "title" : undefined)} aria-label={svgProps["aria-label"] ?? title} role={svgProps["role"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? "img" : undefined)} aria-hidden={svgProps["aria-hidden"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? undefined : true)}>{title ? <title id={idPrefix + "title"}>{title}</title> : null}<path d="M4.88281 1.99953C5.4507 1.99972 5.97055 2.32074 6.22461 2.82864L6.67188 3.72317C6.75658 3.89253 6.92977 3.99953 7.11914 3.99953H13.001C14.1052 3.9998 15.0007 4.89534 15.001 5.99953V10.9995C15.001 12.1039 14.1053 12.9993 13.001 12.9995H3.00098C1.89641 12.9995 1 12.1041 1 10.9995V3.99953C1.00025 2.89518 1.89656 1.99953 3.00098 1.99953H4.88281ZM3.00098 2.99953C2.44885 2.99953 2.00123 3.44746 2.00098 3.99953V10.9995C2.00098 11.5518 2.44869 11.9995 3.00098 11.9995H13.001C13.553 11.9993 14.001 11.5517 14.001 10.9995V5.99953C14.0007 5.44763 13.5529 4.9998 13.001 4.99953H7.11914C6.551 4.99953 6.03144 4.67858 5.77734 4.17043L5.33008 3.2759C5.24541 3.10679 5.07192 2.99972 4.88281 2.99953H3.00098Z" fill="currentColor" style={{
      fill: "currentColor",
      fillOpacity: 1
    }} /><path d="M14 7.5H1.5" stroke="currentColor" style={{
      stroke: "currentColor",
      strokeOpacity: 1
    }} strokeLinecap="round" strokeLinejoin="round" /></svg>;
});
export default IconFolderClosed;
