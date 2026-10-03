import * as React from 'react';
import type { IconProps } from './types';
const IconSendTiltFill = React.forwardRef<SVGSVGElement, IconProps>(function IconSendTiltFill(props, ref) {
  const idPrefix = React.useId().replace(/[^a-zA-Z0-9_-]/g, '') + '-';
  const {
    size = 16,
    color,
    title,
    ...svgProps
  } = props;
  return <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...svgProps} ref={ref} width={svgProps["width"] ?? size} height={svgProps["height"] ?? size} color={color} aria-labelledby={svgProps["aria-labelledby"] ?? (title ? idPrefix + "title" : undefined)} aria-label={svgProps["aria-label"] ?? title} role={svgProps["role"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? "img" : undefined)} aria-hidden={svgProps["aria-hidden"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? undefined : true)}>{title ? <title id={idPrefix + "title"}>{title}</title> : null}<path d="M13.5635 3.06201C14.5734 3.06201 15.166 4.19912 14.5889 5.02783L8.73242 13.4351C8.08735 14.3598 6.64371 14.025 6.47168 12.9106L6.04093 10.115C5.94532 9.49453 6.24627 8.88012 6.79514 8.57528L9.74316 6.93799C9.98441 6.8039 10.0714 6.49864 9.9375 6.25732C9.80328 6.01618 9.49811 5.92892 9.25684 6.06299L6.43278 7.63142C5.8663 7.94604 5.16183 7.86132 4.68608 7.42138L2.31738 5.23096C1.48315 4.45881 2.02937 3.06257 3.16602 3.06201H13.5635Z" fill="currentColor" style={{
      fill: "currentColor",
      fillOpacity: 1
    }} /></svg>;
});
export default IconSendTiltFill;
