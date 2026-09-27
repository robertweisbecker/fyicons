import * as React from 'react';
import type { IconProps } from './types';
const IconPaperclipTilt2 = React.forwardRef<SVGSVGElement, IconProps>(function IconPaperclipTilt2(props, ref) {
  const idPrefix = React.useId().replace(/[^a-zA-Z0-9_-]/g, '') + '-';
  const {
    size = 16,
    color,
    title,
    ...svgProps
  } = props;
  return <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...svgProps} ref={ref} width={svgProps["width"] ?? size} height={svgProps["height"] ?? size} color={color} aria-labelledby={svgProps["aria-labelledby"] ?? (title ? idPrefix + "title" : undefined)} aria-label={svgProps["aria-label"] ?? title} role={svgProps["role"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? "img" : undefined)} aria-hidden={svgProps["aria-hidden"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? undefined : true)}>{title ? <title id={idPrefix + "title"}>{title}</title> : null}<g clipPath={`url(#${idPrefix}clip0_315_17581)`}><path d="M13.3168 2.43733C15.0642 3.40809 15.3723 5.7933 13.9293 7.17646L7.74903 13.0999C5.79895 14.9682 2.60477 14.4641 1.3243 12.0862C0.468872 10.4974 0.756865 8.53525 2.03279 7.25933L4.64577 4.64635C4.84101 4.45114 5.15762 4.45115 5.35288 4.64635C5.54813 4.8416 5.5481 5.15819 5.35288 5.35345L2.7399 7.96643C1.77622 8.93011 1.55793 10.4125 2.20404 11.6125C3.17112 13.4084 5.58357 13.788 7.05642 12.3769L13.2381 6.45485C14.1949 5.53753 13.9901 3.95467 12.8314 3.31085C12.0834 2.89547 11.1519 3.01155 10.5277 3.59673L4.88953 8.88277C4.52281 9.22688 4.51276 9.80649 4.86812 10.1623C5.216 10.5105 5.78033 10.5097 6.12835 10.1616L10.1452 6.14619C10.3405 5.95123 10.6564 5.95172 10.8516 6.14688C11.0467 6.34204 11.0472 6.65802 10.8523 6.85329L6.83683 10.8701C6.09824 11.6087 4.90008 11.6075 4.1617 10.8687C3.40695 10.1134 3.42626 8.88328 4.20521 8.15288L9.84411 2.86753C10.7854 1.98507 12.1889 1.81076 13.3168 2.43733Z" fill="currentColor" style={{
        fill: "currentColor",
        fillOpacity: 1
      }} /></g><defs><clipPath id={idPrefix + "clip0_315_17581"}><rect width={16} height={16} fill="white" style={{
          fill: "white",
          fillOpacity: 1
        }} /></clipPath></defs></svg>;
});
export default IconPaperclipTilt2;
