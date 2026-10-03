import * as React from 'react';
import type { IconProps } from './types';
const IconCircleWarning = React.forwardRef<SVGSVGElement, IconProps>(function IconCircleWarning(props, ref) {
  const idPrefix = React.useId().replace(/[^a-zA-Z0-9_-]/g, '') + '-';
  const {
    size = 16,
    color,
    title,
    ...svgProps
  } = props;
  return <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...svgProps} ref={ref} width={svgProps["width"] ?? size} height={svgProps["height"] ?? size} color={color} aria-labelledby={svgProps["aria-labelledby"] ?? (title ? idPrefix + "title" : undefined)} aria-label={svgProps["aria-label"] ?? title} role={svgProps["role"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? "img" : undefined)} aria-hidden={svgProps["aria-hidden"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? undefined : true)}>{title ? <title id={idPrefix + "title"}>{title}</title> : null}<path d="M8 0.999512C11.866 0.999512 15 4.1345 15 8.00049C14.9997 11.8663 11.8658 15.0005 8 15.0005C4.13417 15.0005 1.00026 11.8663 1 8.00049C1 4.1345 4.13401 0.999512 8 0.999512ZM8 2.00049C4.68629 2.00049 2 4.68678 2 8.00049C2.00026 11.314 4.68645 14.0005 8 14.0005C11.3135 14.0005 13.9997 11.314 14 8.00049C14 4.68678 11.3137 2.00049 8 2.00049ZM8 10.2505C8.41421 10.2505 8.75 10.5863 8.75 11.0005C8.74974 11.4145 8.41405 11.7505 8 11.7505C7.58595 11.7505 7.25026 11.4145 7.25 11.0005C7.25 10.5863 7.58579 10.2505 8 10.2505ZM8 4.12549C8.1712 4.12549 8.33505 4.1911 8.45215 4.30811C8.56929 4.42529 8.6306 4.58484 8.625 4.75049C8.62292 4.81282 8.62122 4.87566 8.61914 4.93799C8.58165 6.06283 8.54335 7.18815 8.50586 8.31299C8.50378 8.37532 8.50208 8.43816 8.5 8.50049C8.49554 8.62849 8.43917 8.75172 8.3457 8.84229C8.25189 8.93283 8.12816 8.98389 8 8.98389C7.87184 8.98389 7.74811 8.93283 7.6543 8.84229C7.56083 8.75172 7.50446 8.62849 7.5 8.50049C7.49792 8.43816 7.49622 8.37532 7.49414 8.31299C7.45665 7.18815 7.41835 6.06283 7.38086 4.93799C7.37878 4.87566 7.37708 4.81282 7.375 4.75049C7.3694 4.58484 7.43071 4.42529 7.54785 4.30811C7.66495 4.1911 7.8288 4.12549 8 4.12549Z" fill="currentColor" style={{
      fill: "currentColor",
      fillOpacity: 1
    }} /></svg>;
});
export default IconCircleWarning;
