import * as React from 'react';
import type { IconProps } from './types';
const IconArrowRedoArc = React.forwardRef<SVGSVGElement, IconProps>(function IconArrowRedoArc(props, ref) {
  const idPrefix = React.useId().replace(/[^a-zA-Z0-9_-]/g, '') + '-';
  const {
    size = 16,
    color,
    title,
    ...svgProps
  } = props;
  return <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...svgProps} ref={ref} width={svgProps["width"] ?? size} height={svgProps["height"] ?? size} color={color} aria-labelledby={svgProps["aria-labelledby"] ?? (title ? idPrefix + "title" : undefined)} aria-label={svgProps["aria-label"] ?? title} role={svgProps["role"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? "img" : undefined)} aria-hidden={svgProps["aria-hidden"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? undefined : true)}>{title ? <title id={idPrefix + "title"}>{title}</title> : null}<path d="M7 2.99995C9.76129 3.00008 12 5.23863 12 7.99995H13.709C13.7664 8.00001 13.8224 8.01847 13.8701 8.05268C13.918 8.08707 13.9555 8.13611 13.9775 8.19331C13.9996 8.25047 14.0054 8.31329 13.9941 8.37397C13.9829 8.43469 13.9548 8.49036 13.9141 8.53413L11.7061 10.9081C11.679 10.9372 11.6467 10.9608 11.6113 10.9765C11.5761 10.9922 11.5382 10.9999 11.5 10.9999C11.4619 10.9999 11.4239 10.9921 11.3887 10.9765C11.3533 10.9608 11.321 10.9372 11.2939 10.9081L9.08496 8.53413C9.04432 8.49039 9.01708 8.4346 9.00586 8.37397C8.99462 8.31325 9.00042 8.2505 9.02246 8.19331C9.04447 8.13622 9.08113 8.08705 9.12891 8.05268C9.17678 8.0183 9.23344 7.99995 9.29102 7.99995H11C11 5.79091 9.20901 4.00008 7 3.99995C4.79088 3.99995 3.00003 5.79083 3 7.99995C3 10.2091 4.79086 11.9999 7 11.9999C7.27601 12.0001 7.49997 12.2239 7.5 12.4999C7.5 12.776 7.27603 12.9998 7 12.9999C4.23858 12.9999 2 10.7614 2 7.99995C2.00003 5.23855 4.23859 2.99995 7 2.99995Z" fill="currentColor" style={{
      fill: "currentColor",
      fillOpacity: 1
    }} /></svg>;
});
export default IconArrowRedoArc;
