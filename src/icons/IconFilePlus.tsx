import * as React from 'react';
import type { IconProps } from './types';
const IconFilePlus = React.forwardRef<SVGSVGElement, IconProps>(function IconFilePlus(props, ref) {
  const idPrefix = React.useId().replace(/[^a-zA-Z0-9_-]/g, '') + '-';
  const {
    size = 16,
    color,
    title,
    ...svgProps
  } = props;
  return <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...svgProps} ref={ref} width={svgProps["width"] ?? size} height={svgProps["height"] ?? size} color={color} aria-labelledby={svgProps["aria-labelledby"] ?? (title ? idPrefix + "title" : undefined)} aria-label={svgProps["aria-label"] ?? title} role={svgProps["role"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? "img" : undefined)} aria-hidden={svgProps["aria-hidden"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? undefined : true)}>{title ? <title id={idPrefix + "title"}>{title}</title> : null}<path d="M7.46484 1C8.26036 1.0001 9.02342 1.31639 9.58594 1.87891L12.4141 4.70703C12.7891 5.08205 12.9999 5.59074 13 6.12109V12.5C13 13.8807 11.8807 15 10.5 15H5.5C4.11929 15 3 13.8807 3 12.5V3.5C3 2.11929 4.11929 1 5.5 1H7.46484ZM5.5 2C4.67157 2 4 2.67157 4 3.5V12.5C4 13.3284 4.67157 14 5.5 14H10.5C11.3284 14 12 13.3284 12 12.5V6.12109C12 6.08039 11.9971 6.03999 11.9922 6H9.5C9.10217 6 8.72076 5.84185 8.43945 5.56055C8.15815 5.27924 8 4.89783 8 4.5V2.07422C7.82712 2.02613 7.64741 2.00003 7.46484 2H5.5ZM7.99512 7C8.27115 7.00013 8.49512 7.22394 8.49512 7.5V8.99512H10C10.276 8.99525 10.5 9.21906 10.5 9.49512C10.4999 9.77113 10.276 9.99499 10 9.99512H8.49512V11.5C8.49512 11.7761 8.27115 11.9999 7.99512 12C7.71897 12 7.49512 11.7761 7.49512 11.5V9.99512H6C5.7239 9.99512 5.50006 9.77121 5.5 9.49512C5.5 9.21898 5.72386 8.99512 6 8.99512H7.49512V7.5C7.49512 7.22386 7.71897 7 7.99512 7ZM9 4.5C9 4.63261 9.05272 4.75975 9.14648 4.85352C9.24025 4.94728 9.36739 5 9.5 5H11.293L9 2.70703V4.5Z" fill="currentColor" style={{
      fill: "currentColor",
      fillOpacity: 1
    }} /></svg>;
});
export default IconFilePlus;
