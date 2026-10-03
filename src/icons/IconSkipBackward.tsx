import * as React from 'react';
import type { IconProps } from './types';
const IconSkipBackward = React.forwardRef<SVGSVGElement, IconProps>(function IconSkipBackward(props, ref) {
  const idPrefix = React.useId().replace(/[^a-zA-Z0-9_-]/g, '') + '-';
  const {
    size = 16,
    color,
    title,
    ...svgProps
  } = props;
  return <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...svgProps} ref={ref} width={svgProps["width"] ?? size} height={svgProps["height"] ?? size} color={color} aria-labelledby={svgProps["aria-labelledby"] ?? (title ? idPrefix + "title" : undefined)} aria-label={svgProps["aria-label"] ?? title} role={svgProps["role"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? "img" : undefined)} aria-hidden={svgProps["aria-hidden"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? undefined : true)}>{title ? <title id={idPrefix + "title"}>{title}</title> : null}<path d="M4.99902 4.00049C5.55131 4.00049 5.99902 4.4482 5.99902 5.00049V7.16748C6.0092 7.16156 6.0188 7.15456 6.0293 7.14893L11.5713 4.17822C12.2151 3.83312 12.9941 4.29935 12.9941 5.02979V10.9712C12.9938 11.7013 12.2149 12.1676 11.5713 11.8228L6.0293 8.85205C6.01873 8.84639 6.00926 8.83847 5.99902 8.83252V11.0005C5.99876 11.5525 5.55115 12.0005 4.99902 12.0005H3.99902C3.4469 12.0005 2.99929 11.5525 2.99902 11.0005V5.00049C2.99902 4.4482 3.44674 4.00049 3.99902 4.00049H4.99902ZM3.99902 11.0005H4.99902V5.00049H3.99902V11.0005ZM6.55664 8.00049L11.9941 10.9146V5.08545L6.55664 8.00049Z" fill="currentColor" style={{
      fill: "currentColor",
      fillOpacity: 1
    }} /></svg>;
});
export default IconSkipBackward;
