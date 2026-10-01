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
  return <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...svgProps} ref={ref} width={svgProps["width"] ?? size} height={svgProps["height"] ?? size} color={color} aria-labelledby={svgProps["aria-labelledby"] ?? (title ? idPrefix + "title" : undefined)} aria-label={svgProps["aria-label"] ?? title} role={svgProps["role"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? "img" : undefined)} aria-hidden={svgProps["aria-hidden"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? undefined : true)}>{title ? <title id={idPrefix + "title"}>{title}</title> : null}<path d="M8.7041 3.98637C9.00913 3.18046 8.9598 1.82664 9.90039 2.01274C11.3706 2.25148 11.0972 4.95833 10.8857 5.99907H12.3828C13.2506 5.99908 13.9539 6.70276 13.9541 7.57036C13.9541 7.86286 13.8859 8.13852 13.7695 8.38579C13.9147 8.64051 14 8.93464 14 9.24907C14 9.75676 13.7811 10.2098 13.4375 10.5284C13.447 10.6001 13.4541 10.6737 13.4541 10.7491C13.4541 11.2564 13.2351 11.7083 12.8926 12.0264C12.902 12.0992 12.9092 12.1735 12.9092 12.2491C12.9092 13.2156 12.1257 13.9991 11.1592 13.9991H10L9.50488 14C9.49385 14 9.4827 13.9992 9.47168 13.9991H9.38672V13.9961C8.54747 13.9631 7.7584 13.5807 7.21387 12.9366L6.31348 11.8711C6.1109 11.6313 5.99906 11.3277 5.99902 11.0137V8.53032C5.99902 8.01371 6.0295 7.4539 6.37988 7.07426C6.72774 6.69738 7.526 5.95584 8.1123 5.25005C8.40931 4.89237 8.56591 4.30584 8.7041 3.98637ZM4.65234 6.75981C4.827 6.72502 5.00713 6.78547 5.125 6.91899C5.24292 7.0526 5.28095 7.23918 5.22461 7.40825C5.07603 7.85408 5 8.32112 5 8.79106V11.5C4.99998 11.6326 4.94726 11.7598 4.85352 11.8536C4.75975 11.9473 4.63259 12 4.5 12C3.67161 12 3.00005 11.3284 3 10.5V8.77446C3.00013 7.79503 3.6919 6.95186 4.65234 6.75981Z" fill="currentColor" style={{
      fill: "currentColor",
      fillOpacity: 1
    }} /></svg>;
});
export default IconThumbsUpFill;
