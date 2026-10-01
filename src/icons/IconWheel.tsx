import * as React from 'react';
import type { IconProps } from './types';
const IconWheel = React.forwardRef<SVGSVGElement, IconProps>(function IconWheel(props, ref) {
  const idPrefix = React.useId().replace(/[^a-zA-Z0-9_-]/g, '') + '-';
  const {
    size = 16,
    color,
    title,
    ...svgProps
  } = props;
  return <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...svgProps} ref={ref} width={svgProps["width"] ?? size} height={svgProps["height"] ?? size} color={color} aria-labelledby={svgProps["aria-labelledby"] ?? (title ? idPrefix + "title" : undefined)} aria-label={svgProps["aria-label"] ?? title} role={svgProps["role"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? "img" : undefined)} aria-hidden={svgProps["aria-hidden"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? undefined : true)}>{title ? <title id={idPrefix + "title"}>{title}</title> : null}<path d="M8 1C11.866 1 15 4.13401 15 8C15 11.866 11.866 15 8 15C4.13401 15 1 11.866 1 8C1 4.13401 4.13401 1 8 1ZM7.71973 8.68262C7.26186 9.23843 6.85734 9.84768 6.35059 10.3545L4.125 12.5791C5.05254 13.3648 6.22113 13.8726 7.50488 13.9775V10.9697C7.5049 10.2074 7.65171 9.44493 7.71973 8.68262ZM8.29102 8.71387C8.36023 9.46582 8.50487 10.2178 8.50488 10.9697V13.9766C9.78087 13.8702 10.9424 13.3656 11.8662 12.5859L9.6084 10.3281C9.11985 9.83954 8.72962 9.25246 8.29102 8.71387ZM8.67285 8.2793C9.21937 8.72765 9.81901 9.1237 10.3164 9.62109L12.5742 11.8789C13.3612 10.9518 13.8716 9.78401 13.9775 8.5H11.25C10.391 8.5 9.53186 8.34439 8.67285 8.2793ZM7.31055 8.28027C6.45706 8.34612 5.60348 8.5 4.75 8.5H2.02246C2.12812 9.78039 2.63477 10.9462 3.41797 11.8721L5.64355 9.64746C6.1492 9.14188 6.75578 8.73684 7.31055 8.28027ZM10.5596 6.14551C9.98314 6.72187 9.29834 7.19029 8.6748 7.71973C9.53314 7.65454 10.3917 7.5 11.25 7.5H13.9775C13.8718 6.21816 13.3638 5.05137 12.5791 4.125L10.5596 6.14551ZM3.41406 4.13281C2.63316 5.05791 2.12794 6.22181 2.02246 7.5H4.75C5.5989 7.5 6.44797 7.65134 7.29688 7.71777C6.75317 7.27356 6.15988 6.87863 5.66602 6.38477L3.41406 4.13281ZM7.50488 2.02148C6.2189 2.12655 5.04843 2.63679 4.12012 3.4248L6.37305 5.67773C6.87356 6.17825 7.27304 6.78043 7.72461 7.33008C7.65909 6.48316 7.50489 5.63598 7.50488 4.78906V2.02148ZM8.50488 4.78906C8.50488 5.62984 8.35149 6.47075 8.28516 7.31152C8.81106 6.69072 9.27931 6.01177 9.85254 5.43848L11.8721 3.41797C10.9474 2.63576 9.78337 2.12901 8.50488 2.02246V4.78906Z" fill="currentColor" style={{
      fill: "currentColor",
      fillOpacity: 1
    }} /></svg>;
});
export default IconWheel;
