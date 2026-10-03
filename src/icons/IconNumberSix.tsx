import * as React from 'react';
import type { IconProps } from './types';
const IconNumberSix = React.forwardRef<SVGSVGElement, IconProps>(function IconNumberSix(props, ref) {
  const idPrefix = React.useId().replace(/[^a-zA-Z0-9_-]/g, '') + '-';
  const {
    size = 16,
    color,
    title,
    ...svgProps
  } = props;
  return <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...svgProps} ref={ref} width={svgProps["width"] ?? size} height={svgProps["height"] ?? size} color={color} aria-labelledby={svgProps["aria-labelledby"] ?? (title ? idPrefix + "title" : undefined)} aria-label={svgProps["aria-label"] ?? title} role={svgProps["role"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? "img" : undefined)} aria-hidden={svgProps["aria-hidden"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? undefined : true)}>{title ? <title id={idPrefix + "title"}>{title}</title> : null}<path d="M11 2C12.6569 2 14 3.34315 14 5V11C14 12.6569 12.6569 14 11 14H5C3.34315 14 2 12.6569 2 11V5C2 3.34315 3.34315 2 5 2H11ZM5 3C3.89543 3 3 3.89543 3 5V11C3 12.1046 3.89543 13 5 13H11C12.1046 13 13 12.1046 13 11V5C13 3.89543 12.1046 3 11 3H5ZM8.34668 5.02441C8.56801 4.95281 8.81664 5.04352 8.93555 5.25391C9.05431 5.46417 9.00432 5.72427 8.8291 5.87695L8.74609 5.93555C8.74438 5.93655 8.74129 5.93802 8.7373 5.94043C8.72728 5.94651 8.70983 5.95707 8.6875 5.97168C8.64272 6.00099 8.57539 6.04774 8.49316 6.11133C8.32798 6.23909 8.1054 6.43434 7.88281 6.69922C7.7907 6.80884 7.70018 6.93118 7.6123 7.06445C7.77664 7.02369 7.94804 7 8.125 7C9.29873 7.00001 10.2495 7.95178 10.25 9.125C10.2503 10.2986 9.29914 11.2509 8.125 11.251C6.95085 11.251 5.99971 10.2986 6 9.125C6 9.12307 5.99999 9.12107 6 9.11914C6.00292 7.73058 6.56197 6.71639 7.11719 6.05566C7.39443 5.72577 7.67208 5.48253 7.88184 5.32031C7.98694 5.23903 8.07605 5.17702 8.14062 5.13477C8.17255 5.11388 8.19861 5.09757 8.21777 5.08594C8.22739 5.08011 8.23618 5.0748 8.24219 5.07129C8.24482 5.06975 8.24715 5.06846 8.24902 5.06738C8.25003 5.0668 8.25118 5.06588 8.25195 5.06543H8.25293L8.25391 5.06445L8.34668 5.02441ZM8.125 8C7.50393 8 7.00036 8.50349 7 9.125C6.9998 9.74678 7.50368 10.251 8.125 10.251C8.74631 10.251 9.2502 9.74677 9.25 9.125C9.24964 8.50349 8.74606 8.00001 8.125 8Z" fill="currentColor" style={{
      fill: "currentColor",
      fillOpacity: 1
    }} /></svg>;
});
export default IconNumberSix;
