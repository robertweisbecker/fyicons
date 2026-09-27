import * as React from 'react';
import type { IconProps } from './types';
const IconCheckVerifiedSolid = React.forwardRef<SVGSVGElement, IconProps>(function IconCheckVerifiedSolid(props, ref) {
  const idPrefix = React.useId().replace(/[^a-zA-Z0-9_-]/g, '') + '-';
  const {
    size = 16,
    color,
    title,
    ...svgProps
  } = props;
  return <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...svgProps} ref={ref} width={svgProps["width"] ?? size} height={svgProps["height"] ?? size} color={color} aria-labelledby={svgProps["aria-labelledby"] ?? (title ? idPrefix + "title" : undefined)} aria-label={svgProps["aria-label"] ?? title} role={svgProps["role"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? "img" : undefined)} aria-hidden={svgProps["aria-hidden"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? undefined : true)}>{title ? <title id={idPrefix + "title"}>{title}</title> : null}<path d="M6.93923 1.98949C7.52503 1.40393 8.47461 1.40378 9.06032 1.98949L9.85134 2.78051C9.99197 2.92105 10.1828 3.00023 10.3816 3.00023H11.4998C12.328 3.00049 12.9998 3.67196 12.9998 4.50023V5.6184C12.9998 5.81711 13.0781 6.00807 13.2185 6.14867L14.0095 6.93969C14.5951 7.52549 14.5952 8.47507 14.0095 9.06078L13.2195 9.85082C13.0788 9.99147 12.9998 10.1822 12.9998 10.3811V11.5002C12.9995 12.3283 12.3278 13 11.4998 13.0002H10.3806C10.1817 13.0002 9.99101 13.0793 9.85036 13.22L9.06032 14.01C8.47461 14.5957 7.52503 14.5956 6.93923 14.01L6.14919 13.22C6.00862 13.0794 5.8177 13.0003 5.61891 13.0002H4.49977C3.6715 13.0002 3.00003 12.3284 2.99977 11.5002V10.3821C2.99977 10.1832 2.92059 9.99243 2.78005 9.8518L1.98903 9.06078C1.40332 8.47507 1.40347 7.52549 1.98903 6.93969L2.78005 6.14867C2.92062 6.0081 2.99968 5.81719 2.99977 5.6184V4.50023C2.99977 3.67181 3.67135 3.00023 4.49977 3.00023H5.61794C5.81673 3.00014 6.00764 2.92108 6.14821 2.78051L6.93923 1.98949ZM10.2429 5.56273C10.0016 5.42864 9.6964 5.51574 9.56227 5.75707L7.66188 9.17797L6.35329 7.86937C6.15803 7.67411 5.84152 7.67411 5.64626 7.86937C5.45144 8.06467 5.45114 8.38129 5.64626 8.5764L7.4236 10.3537C7.53441 10.4644 7.69134 10.5169 7.84645 10.4953C8.0016 10.4736 8.13836 10.3802 8.21462 10.2434L10.4373 6.2434C10.5713 6.0021 10.4841 5.69692 10.2429 5.56273Z" fill="currentColor" style={{
      fill: "currentColor",
      fillOpacity: 1
    }} /></svg>;
});
export default IconCheckVerifiedSolid;
