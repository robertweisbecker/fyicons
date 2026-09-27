import * as React from 'react';
import type { IconProps } from './types';
const IconActivity = React.forwardRef<SVGSVGElement, IconProps>(function IconActivity(props, ref) {
  const idPrefix = React.useId().replace(/[^a-zA-Z0-9_-]/g, '') + '-';
  const {
    size = 16,
    color,
    title,
    ...svgProps
  } = props;
  return <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...svgProps} ref={ref} width={svgProps["width"] ?? size} height={svgProps["height"] ?? size} color={color} aria-labelledby={svgProps["aria-labelledby"] ?? (title ? idPrefix + "title" : undefined)} aria-label={svgProps["aria-label"] ?? title} role={svgProps["role"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? "img" : undefined)} aria-hidden={svgProps["aria-hidden"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? undefined : true)}>{title ? <title id={idPrefix + "title"}>{title}</title> : null}<path d="M12 1.99995C13.1046 1.99995 14 2.8954 14 3.99995V11.9999C14 13.1045 13.1046 13.9999 12 13.9999H4C2.89543 13.9999 2 13.1045 2 11.9999V3.99995C2.00003 2.8954 2.89545 1.99995 4 1.99995H12ZM4 2.99995C3.44773 2.99995 3.00003 3.44769 3 3.99995V7.99995H3.44531C3.61771 7.99995 3.77875 7.91079 3.87012 7.7646L6.07617 4.2353L6.11621 4.17866C6.21888 4.05599 6.37582 3.98949 6.53809 4.0019C6.72361 4.01619 6.88661 4.13169 6.95996 4.30268L8.11914 7.00678C8.61526 7.06567 8.99997 7.48799 9 7.99995C9 8.55223 8.55228 8.99995 8 8.99995C7.44772 8.99995 7 8.55223 7 7.99995C7.00001 7.77566 7.07451 7.5691 7.19922 7.40229L6.41602 5.57514L4.71777 8.29487C4.44367 8.73344 3.9625 8.99995 3.44531 8.99995H3V11.9999C3 12.5522 3.44772 12.9999 4 12.9999H12C12.5523 12.9999 13 12.5522 13 11.9999V7.99995H12.1182C11.9288 7.99995 11.7556 8.10698 11.6709 8.27631L9.94727 11.7236C9.86021 11.8977 9.67994 12.0056 9.48535 11.9999C9.29079 11.9942 9.11676 11.8761 9.04004 11.6972L8.29004 9.94721C8.18131 9.69345 8.29902 9.3988 8.55273 9.28999C8.80649 9.18124 9.10113 9.29898 9.20996 9.55268L9.53516 10.3115L10.7764 7.82905C11.0305 7.32093 11.55 6.99995 12.1182 6.99995H13V3.99995C13 3.44769 12.5523 2.99995 12 2.99995H4Z" fill="currentColor" style={{
      fill: "currentColor",
      fillOpacity: 1
    }} /></svg>;
});
export default IconActivity;
