import * as React from 'react';
import type { IconProps } from './types';
const IconBox = React.forwardRef<SVGSVGElement, IconProps>(function IconBox(props, ref) {
  const idPrefix = React.useId().replace(/[^a-zA-Z0-9_-]/g, '') + '-';
  const {
    size = 16,
    color,
    title,
    ...svgProps
  } = props;
  return <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...svgProps} ref={ref} width={svgProps["width"] ?? size} height={svgProps["height"] ?? size} color={color} aria-labelledby={svgProps["aria-labelledby"] ?? (title ? idPrefix + "title" : undefined)} aria-label={svgProps["aria-label"] ?? title} role={svgProps["role"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? "img" : undefined)} aria-hidden={svgProps["aria-hidden"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? undefined : true)}>{title ? <title id={idPrefix + "title"}>{title}</title> : null}<path d="M7.24414 1.44051C7.71108 1.16833 8.28897 1.1682 8.75586 1.44051L13.2559 4.06551C13.7166 4.33426 13.9999 4.82804 14 5.36141V10.6388L13.9873 10.836C13.9269 11.2917 13.6592 11.6994 13.2559 11.9347L8.75586 14.5597L8.5752 14.6485C8.20687 14.8016 7.79212 14.8017 7.42383 14.6485L7.24414 14.5597L2.74414 11.9347C2.34084 11.6994 2.07313 11.2917 2.0127 10.836L2 10.6388V5.36141C2.00011 4.82805 2.28342 4.33428 2.74414 4.06551L7.24414 1.44051ZM3 10.6388C3.00007 10.8165 3.09455 10.9808 3.24805 11.0704L7.5 13.5499V7.80868L3 5.55868V10.6388ZM8.5 7.80868V13.5499L12.752 11.0704C12.9055 10.9808 12.9999 10.8165 13 10.6388V5.55868L8.5 7.80868ZM8.25195 2.30477C8.09636 2.21404 7.90367 2.21411 7.74805 2.30477L3.58398 4.73251L8 6.94051L12.415 4.73251L8.25195 2.30477Z" fill="currentColor" style={{
      fill: "currentColor",
      fillOpacity: 1
    }} /></svg>;
});
export default IconBox;
