import * as React from 'react';
import type { IconProps } from './types';
const IconCircleQuestion = React.forwardRef<SVGSVGElement, IconProps>(function IconCircleQuestion(props, ref) {
  const idPrefix = React.useId().replace(/[^a-zA-Z0-9_-]/g, '') + '-';
  const {
    size = 16,
    color,
    title,
    ...svgProps
  } = props;
  return <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...svgProps} ref={ref} width={svgProps["width"] ?? size} height={svgProps["height"] ?? size} color={color} aria-labelledby={svgProps["aria-labelledby"] ?? (title ? idPrefix + "title" : undefined)} aria-label={svgProps["aria-label"] ?? title} role={svgProps["role"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? "img" : undefined)} aria-hidden={svgProps["aria-hidden"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? undefined : true)}>{title ? <title id={idPrefix + "title"}>{title}</title> : null}<path d="M8 1C11.866 1 15 4.13401 15 8C15 11.866 11.866 15 8 15C4.13401 15 1 11.866 1 8C1 4.13401 4.13401 1 8 1ZM8 2C4.68629 2 2 4.68629 2 8C2 11.3137 4.68629 14 8 14C11.3137 14 14 11.3137 14 8C14 4.68629 11.3137 2 8 2ZM8 10.75C8.41421 10.75 8.75 11.0858 8.75 11.5C8.75 11.9142 8.41421 12.25 8 12.25C7.58579 12.25 7.25 11.9142 7.25 11.5C7.25 11.0858 7.58579 10.75 8 10.75ZM8 4C9.24264 4 10.25 5.00736 10.25 6.25C10.25 7.27309 9.56723 8.1354 8.63379 8.40918C8.58059 8.42484 8.53864 8.45342 8.51562 8.47852C8.50537 8.48976 8.50114 8.49734 8.5 8.5V9C8.5 9.27614 8.27614 9.5 8 9.5C7.72386 9.5 7.5 9.27614 7.5 9V8.5C7.5 7.92478 7.95913 7.56461 8.35254 7.44922C8.87162 7.29697 9.25 6.81724 9.25 6.25C9.25 5.55964 8.69036 5 8 5C7.30964 5 6.75 5.55964 6.75 6.25C6.75 6.52614 6.52614 6.75 6.25 6.75C5.97386 6.75 5.75 6.52614 5.75 6.25C5.75 5.00736 6.75736 4 8 4Z" fill="currentColor" style={{
      fill: "currentColor",
      fillOpacity: 1
    }} /></svg>;
});
export default IconCircleQuestion;
