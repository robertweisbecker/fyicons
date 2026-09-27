import * as React from 'react';
import type { IconProps } from './types';
const IconThumbsUpFill = React.forwardRef<SVGSVGElement, IconProps>(function IconThumbsUpFill(props, ref) {
  const idPrefix = React.useId().replace(/[^a-zA-Z0-9_-]/g, '') + '-';
  const {
    size = 16,
    color,
    title,
    ...svgProps
  } = props;
  return <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...svgProps} ref={ref} width={svgProps["width"] ?? size} height={svgProps["height"] ?? size} color={color} aria-labelledby={svgProps["aria-labelledby"] ?? (title ? idPrefix + "title" : undefined)} aria-label={svgProps["aria-label"] ?? title} role={svgProps["role"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? "img" : undefined)} aria-hidden={svgProps["aria-hidden"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? undefined : true)}>{title ? <title id={idPrefix + "title"}>{title}</title> : null}<path d="M8.7041 3.98633C9.00913 3.18042 8.9598 1.82659 9.90039 2.0127C11.3706 2.25143 11.0972 4.95828 10.8857 5.99902H12.3828C13.2506 5.99903 13.9539 6.70271 13.9541 7.57031C13.9541 7.86281 13.8859 8.13847 13.7695 8.38574C13.9147 8.64046 14 8.93459 14 9.24902C14 9.75671 13.7811 10.2097 13.4375 10.5283C13.447 10.6 13.4541 10.6736 13.4541 10.749C13.4541 11.2563 13.2351 11.7082 12.8926 12.0264C12.902 12.0992 12.9092 12.1734 12.9092 12.249C12.9092 13.2155 12.1257 13.999 11.1592 13.999H9.5V14C9.49025 14 9.48043 13.9991 9.4707 13.999H9.38672V13.9961C7.54081 13.9187 6.00003 11.9651 5.99902 10.25V8.53027C5.99902 8.01366 6.0295 7.45385 6.37988 7.07422C6.72774 6.69733 7.526 5.9558 8.1123 5.25C8.40931 4.89233 8.56591 4.3058 8.7041 3.98633ZM4.65234 6.75977C4.827 6.72498 5.00713 6.78543 5.125 6.91895C5.24292 7.05255 5.28095 7.23914 5.22461 7.4082C5.07603 7.85404 5 8.32108 5 8.79102V11.5C4.99998 11.6326 4.94726 11.7598 4.85352 11.8535C4.75975 11.9473 4.63259 12 4.5 12C3.67161 12 3.00005 11.3284 3 10.5V8.77441C3.00013 7.79498 3.6919 6.95182 4.65234 6.75977Z" fill="currentColor" style={{
      fill: "currentColor",
      fillOpacity: 1
    }} /></svg>;
});
export default IconThumbsUpFill;
