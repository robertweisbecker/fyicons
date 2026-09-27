import * as React from 'react';
import type { IconProps } from './types';
const IconChatCheck = React.forwardRef<SVGSVGElement, IconProps>(function IconChatCheck(props, ref) {
  const idPrefix = React.useId().replace(/[^a-zA-Z0-9_-]/g, '') + '-';
  const {
    size = 16,
    color,
    title,
    ...svgProps
  } = props;
  return <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...svgProps} ref={ref} width={svgProps["width"] ?? size} height={svgProps["height"] ?? size} color={color} aria-labelledby={svgProps["aria-labelledby"] ?? (title ? idPrefix + "title" : undefined)} aria-label={svgProps["aria-label"] ?? title} role={svgProps["role"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? "img" : undefined)} aria-hidden={svgProps["aria-hidden"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? undefined : true)}>{title ? <title id={idPrefix + "title"}>{title}</title> : null}<path d="M10.5 2C12.433 2 14 3.567 14 5.5V9.5C14 11.433 12.433 13 10.5 13H9.66699L8.5752 13.8184C8.0104 14.242 7.36654 14.5484 6.68164 14.7197L6.27246 14.8223C5.6078 14.9884 5.02065 14.355 5.2373 13.7051L5.30176 13.5127C5.36062 13.3361 5.33895 13.1462 5.24902 12.9893C3.43323 12.8605 2 11.3486 2 9.5V5.5C2 3.567 3.567 2 5.5 2H10.5ZM5.5 3C4.11929 3 3 4.11929 3 5.5V9.5C3 10.8807 4.11929 12 5.5 12H5.70703L5.85352 12.1465C6.28527 12.5782 6.44044 13.2125 6.26074 13.7939L6.43848 13.75C6.99425 13.6111 7.51729 13.3623 7.97559 13.0186L9.2002 12.0996L9.26855 12.0566C9.33963 12.0195 9.41903 12 9.5 12H10.5C11.8807 12 13 10.8807 13 9.5V5.5C13 4.11929 11.8807 3 10.5 3H5.5ZM9.19238 5.625C9.33046 5.38605 9.63591 5.30445 9.875 5.44238C10.114 5.58046 10.1956 5.88591 10.0576 6.125L8.18262 9.375C8.10698 9.50588 7.97651 9.59582 7.82715 9.61914C7.67779 9.64246 7.52599 9.59671 7.41406 9.49512L6.03906 8.24512C5.83483 8.05945 5.81941 7.7434 6.00488 7.53906C6.19055 7.33483 6.5066 7.31941 6.71094 7.50488L7.62695 8.33789L9.19238 5.625Z" fill="currentColor" style={{
      fill: "currentColor",
      fillOpacity: 1
    }} /></svg>;
});
export default IconChatCheck;
