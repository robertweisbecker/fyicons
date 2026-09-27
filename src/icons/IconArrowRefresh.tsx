import * as React from 'react';
import type { IconProps } from './types';
const IconArrowRefresh = React.forwardRef<SVGSVGElement, IconProps>(function IconArrowRefresh(props, ref) {
  const idPrefix = React.useId().replace(/[^a-zA-Z0-9_-]/g, '') + '-';
  const {
    size = 16,
    color,
    title,
    ...svgProps
  } = props;
  return <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...svgProps} ref={ref} width={svgProps["width"] ?? size} height={svgProps["height"] ?? size} color={color} aria-labelledby={svgProps["aria-labelledby"] ?? (title ? idPrefix + "title" : undefined)} aria-label={svgProps["aria-label"] ?? title} role={svgProps["role"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? "img" : undefined)} aria-hidden={svgProps["aria-hidden"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? undefined : true)}>{title ? <title id={idPrefix + "title"}>{title}</title> : null}<path d="M5.39648 9.50039C5.61919 9.50042 5.73072 9.76966 5.57324 9.92715L4.21484 11.2855L4.46484 11.5355C5.00708 12.0777 5.66749 12.4883 6.39355 12.7348C7.11959 12.9811 7.89319 13.0575 8.65332 12.9574C9.41346 12.8572 10.1408 12.5836 10.7783 12.1576C11.4158 11.7316 11.9467 11.1644 12.3301 10.5004C12.4681 10.2612 12.7745 10.1797 13.0137 10.3178C13.2522 10.456 13.3342 10.7615 13.1963 11.0004C12.7362 11.7973 12.0991 12.4784 11.334 12.9896C10.5689 13.5009 9.69551 13.8285 8.7832 13.9486C7.871 14.0687 6.94255 13.9777 6.07129 13.682C5.20013 13.3862 4.40841 12.8931 3.75781 12.2426L3.50781 11.9926L2.42676 13.0736C2.26934 13.2307 2.00034 13.1192 2 12.8969V9.75039C2 9.61232 2.11193 9.50039 2.25 9.50039H5.39648ZM7.2168 2.05215C8.12903 1.9321 9.05742 2.02304 9.92871 2.31875C10.7997 2.6145 11.5916 3.10687 12.2422 3.75723L13.5732 2.42715C13.7307 2.26966 14 2.38118 14 2.6039V5.75039C13.9998 5.88828 13.8879 6.00039 13.75 6.00039H10.6035C10.3809 6.00036 10.2696 5.73114 10.4268 5.57363L11.5352 4.46426C10.9931 3.92236 10.3332 3.51246 9.60742 3.26601C8.88131 3.01955 8.1079 2.94332 7.34766 3.04336C6.58737 3.14348 5.86028 3.41714 5.22266 3.84316C4.58498 4.26925 4.05339 4.83621 3.66992 5.50039C3.53185 5.73915 3.22628 5.82067 2.9873 5.68301C2.74833 5.54491 2.66675 5.23946 2.80469 5.00039C3.26484 4.20344 3.90182 3.5224 4.66699 3.01113C5.432 2.50003 6.30464 2.17232 7.2168 2.05215Z" fill="currentColor" style={{
      fill: "currentColor",
      fillOpacity: 1
    }} /></svg>;
});
export default IconArrowRefresh;
