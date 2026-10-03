import * as React from 'react';
import type { IconProps } from './types';
const IconCloud = React.forwardRef<SVGSVGElement, IconProps>(function IconCloud(props, ref) {
  const idPrefix = React.useId().replace(/[^a-zA-Z0-9_-]/g, '') + '-';
  const {
    size = 16,
    color,
    title,
    ...svgProps
  } = props;
  return <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...svgProps} ref={ref} width={svgProps["width"] ?? size} height={svgProps["height"] ?? size} color={color} aria-labelledby={svgProps["aria-labelledby"] ?? (title ? idPrefix + "title" : undefined)} aria-label={svgProps["aria-label"] ?? title} role={svgProps["role"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? "img" : undefined)} aria-hidden={svgProps["aria-hidden"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? undefined : true)}>{title ? <title id={idPrefix + "title"}>{title}</title> : null}<path d="M6.5 2.99976C7.49041 2.99976 8.38275 3.41332 9.01758 4.073L9.0459 4.09546C9.07808 4.11404 9.11971 4.12032 9.1582 4.11011C9.42647 4.03823 9.709 3.99976 10 3.99976C11.7949 3.99976 13.2498 5.45504 13.25 7.24976C13.25 7.53891 13.21 7.81861 13.1387 8.08472C14.2096 8.36725 14.9999 9.34024 15 10.4998C14.9999 11.8804 13.8806 12.9998 12.5 12.9998H4.5C2.60893 12.9998 1.00014 11.5846 1 9.74976C1.00013 8.42781 1.84254 7.32093 3.01465 6.80933C3.00557 6.70746 3.00001 6.60411 3 6.49976C3.00016 4.56695 4.56705 2.99976 6.5 2.99976ZM6.5 3.99976C5.11943 3.99976 4.00014 5.11911 4 6.49976C4.00002 6.68148 4.01953 6.85934 4.05664 7.03101C4.11159 7.28595 3.96172 7.54005 3.71191 7.61499C2.69223 7.92023 2.00012 8.7809 2 9.74976C2.00014 10.9522 3.07754 11.9998 4.5 11.9998H12.5C13.3284 11.9998 13.9999 11.3281 14 10.4998C13.9999 9.67136 13.3283 8.99976 12.5 8.99976H12.4473C12.2732 8.99976 12.1114 8.90895 12.0205 8.7605C11.9299 8.61213 11.9229 8.42706 12.002 8.27222C12.1597 7.96404 12.25 7.61727 12.25 7.24976C12.2499 6.00718 11.2425 4.99976 10 4.99976C9.79861 4.99976 9.60378 5.02715 9.41797 5.0769C9.07022 5.1701 8.69433 5.09278 8.41211 4.87085L8.29688 4.76636C7.84164 4.29332 7.2059 3.99976 6.5 3.99976Z" fill="currentColor" style={{
      fill: "currentColor",
      fillOpacity: 1
    }} /></svg>;
});
export default IconCloud;
