import * as React from 'react';
import type { IconProps } from './types';
const IconMoon = React.forwardRef<SVGSVGElement, IconProps>(function IconMoon(props, ref) {
  const idPrefix = React.useId().replace(/[^a-zA-Z0-9_-]/g, '') + '-';
  const {
    size = 16,
    color,
    title,
    ...svgProps
  } = props;
  return <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...svgProps} ref={ref} width={svgProps["width"] ?? size} height={svgProps["height"] ?? size} color={color} aria-labelledby={svgProps["aria-labelledby"] ?? (title ? idPrefix + "title" : undefined)} aria-label={svgProps["aria-label"] ?? title} role={svgProps["role"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? "img" : undefined)} aria-hidden={svgProps["aria-hidden"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? undefined : true)}>{title ? <title id={idPrefix + "title"}>{title}</title> : null}<path d="M6.99512 2.08579C7.20243 2.0509 7.40904 2.14995 7.5127 2.33286C7.61632 2.51585 7.5946 2.74426 7.45801 2.90415C6.86071 3.60336 6.50004 4.50879 6.5 5.49985C6.5 7.70899 8.29086 9.49985 10.5 9.49985C11.4911 9.49985 12.3962 9.13861 13.0957 8.54087C13.2555 8.40434 13.4841 8.38185 13.667 8.4852C13.85 8.58883 13.9489 8.79641 13.9141 9.00376C13.4359 11.8391 10.9721 13.9999 8 13.9999C4.68629 13.9999 2 11.3136 2 7.99985C2.00009 5.02829 4.16033 2.56437 6.99512 2.08579ZM5.94238 3.44321C4.2073 4.22723 3.00007 5.9725 3 7.99985C3 10.7613 5.23858 12.9999 8 12.9999C10.0279 12.9999 11.772 11.7914 12.5557 10.0555C11.9286 10.3395 11.2333 10.4999 10.5 10.4999C7.73858 10.4999 5.5 8.26128 5.5 5.49985C5.50003 4.76673 5.65857 4.07046 5.94238 3.44321Z" fill="currentColor" style={{
      fill: "currentColor",
      fillOpacity: 1
    }} /></svg>;
});
export default IconMoon;
