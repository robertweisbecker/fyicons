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
  return <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...svgProps} ref={ref} width={svgProps["width"] ?? size} height={svgProps["height"] ?? size} color={color} aria-labelledby={svgProps["aria-labelledby"] ?? (title ? idPrefix + "title" : undefined)} aria-label={svgProps["aria-label"] ?? title} role={svgProps["role"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? "img" : undefined)} aria-hidden={svgProps["aria-hidden"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? undefined : true)}>{title ? <title id={idPrefix + "title"}>{title}</title> : null}<path d="M7.46484 1C8.26036 1.0001 9.02342 1.31639 9.58594 1.87891L12.4141 4.70703C12.7891 5.08205 12.9999 5.59074 13 6.12109V12.5C13 13.8807 11.8807 15 10.5 15H5.5C4.11929 15 3 13.8807 3 12.5V3.5C3 2.11929 4.11929 1 5.5 1H7.46484ZM5.5 2C4.67157 2 4 2.67157 4 3.5V12.5C4 13.3284 4.67157 14 5.5 14H10.5C11.3284 14 12 13.3284 12 12.5V6.12109C12 6.08039 11.9971 6.03999 11.9922 6H9.5C9.10217 6 8.72076 5.84185 8.43945 5.56055C8.15815 5.27924 8 4.89783 8 4.5V2.07422C7.82712 2.02613 7.64741 2.00003 7.46484 2H5.5ZM8 7.5C8.27614 7.5 8.5 7.72386 8.5 8V9H9.5C9.77614 9 10 9.22386 10 9.5C10 9.77614 9.77614 10 9.5 10H8.5V11C8.5 11.2761 8.27614 11.5 8 11.5C7.72386 11.5 7.5 11.2761 7.5 11V10H6.5C6.22386 10 6 9.77614 6 9.5C6 9.22386 6.22386 9 6.5 9H7.5V8C7.5 7.72386 7.72386 7.5 8 7.5ZM9 4.5C9 4.63261 9.05272 4.75975 9.14648 4.85352C9.24025 4.94728 9.36739 5 9.5 5H11.293L9 2.70703V4.5Z" fill="currentColor" style={{
      fill: "currentColor",
      fillOpacity: 1
    }} /></svg>;
});
export default IconFilePlus;
