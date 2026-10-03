import * as React from 'react';
import type { IconProps } from './types';
const IconHeartFill = React.forwardRef<SVGSVGElement, IconProps>(function IconHeartFill(props, ref) {
  const idPrefix = React.useId().replace(/[^a-zA-Z0-9_-]/g, '') + '-';
  const {
    size = 16,
    color,
    title,
    ...svgProps
  } = props;
  return <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...svgProps} ref={ref} width={svgProps["width"] ?? size} height={svgProps["height"] ?? size} color={color} aria-labelledby={svgProps["aria-labelledby"] ?? (title ? idPrefix + "title" : undefined)} aria-label={svgProps["aria-label"] ?? title} role={svgProps["role"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? "img" : undefined)} aria-hidden={svgProps["aria-hidden"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? undefined : true)}>{title ? <title id={idPrefix + "title"}>{title}</title> : null}<path d="M11.611 2.01744L11.9664 2.05748L11.9723 2.05845C13.9219 2.35708 15.5686 4.45647 14.8112 7.10338C14.611 7.80276 14.0701 8.5906 13.4391 9.34459C12.7957 10.1133 12.0098 10.9031 11.2535 11.6102C10.4959 12.3186 9.76066 12.951 9.21546 13.4061C8.94265 13.6339 8.71711 13.8181 8.55921 13.9452C8.48027 14.0087 8.41809 14.058 8.37562 14.0917C8.35447 14.1084 8.33792 14.121 8.32679 14.1297C8.32122 14.1341 8.31702 14.1382 8.31409 14.1405C8.31297 14.1414 8.31187 14.1419 8.31116 14.1424L8.31019 14.1434C8.12931 14.2848 7.8749 14.2847 7.69398 14.1434H7.693L7.69202 14.1424C7.69133 14.142 7.69009 14.1413 7.68909 14.1405C7.68618 14.1382 7.68181 14.134 7.6764 14.1297C7.66527 14.121 7.64857 14.1083 7.62757 14.0917C7.58511 14.058 7.52273 14.0085 7.44398 13.9452C7.28599 13.8181 7.05958 13.6337 6.78675 13.4061C6.24126 12.951 5.50555 12.3184 4.74769 11.6102C3.99108 10.9032 3.20384 10.1133 2.56019 9.34459C1.92905 8.59078 1.38827 7.80267 1.18812 7.10338C0.430821 4.4566 2.07753 2.35717 4.02698 2.05845L4.03284 2.05748C4.88166 1.93787 5.67111 2.04721 6.4098 2.40806C6.98225 2.68778 7.50464 3.11097 7.99573 3.66197C8.4568 3.12014 8.93046 2.68769 9.47913 2.40025C10.11 2.06976 10.7994 1.95044 11.611 2.01744Z" fill="currentColor" style={{
      fill: "currentColor",
      fillOpacity: 1
    }} /></svg>;
});
export default IconHeartFill;
