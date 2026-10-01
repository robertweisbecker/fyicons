import * as React from 'react';
import type { IconProps } from './types';
const IconCircleQuestionFill = React.forwardRef<SVGSVGElement, IconProps>(function IconCircleQuestionFill(props, ref) {
  const idPrefix = React.useId().replace(/[^a-zA-Z0-9_-]/g, '') + '-';
  const {
    size = 16,
    color,
    title,
    ...svgProps
  } = props;
  return <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...svgProps} ref={ref} width={svgProps["width"] ?? size} height={svgProps["height"] ?? size} color={color} aria-labelledby={svgProps["aria-labelledby"] ?? (title ? idPrefix + "title" : undefined)} aria-label={svgProps["aria-label"] ?? title} role={svgProps["role"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? "img" : undefined)} aria-hidden={svgProps["aria-hidden"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? undefined : true)}>{title ? <title id={idPrefix + "title"}>{title}</title> : null}<path d="M8 1C11.866 1 15 4.13401 15 8C15 11.866 11.866 15 8 15C4.13401 15 1 11.866 1 8C1 4.13401 4.13401 1 8 1ZM8 10.5C7.58579 10.5 7.25 10.8358 7.25 11.25C7.25 11.6642 7.58579 12 8 12C8.41421 12 8.75 11.6642 8.75 11.25C8.75 10.8358 8.41421 10.5 8 10.5ZM8 4C6.75736 4 5.75 5.00736 5.75 6.25C5.75 6.52614 5.97386 6.75 6.25 6.75C6.52614 6.75 6.75 6.52614 6.75 6.25C6.75 5.55964 7.30964 5 8 5C8.69036 5 9.25 5.55964 9.25 6.25C9.25 6.81724 8.87162 7.29697 8.35254 7.44922C7.95913 7.56461 7.5 7.92478 7.5 8.5V9C7.5 9.27614 7.72386 9.5 8 9.5C8.27614 9.5 8.5 9.27614 8.5 9V8.5C8.50114 8.49734 8.50537 8.48976 8.51562 8.47852C8.53864 8.45342 8.58059 8.42484 8.63379 8.40918C9.56723 8.1354 10.25 7.27309 10.25 6.25C10.25 5.00736 9.24264 4 8 4Z" fill="currentColor" style={{
      fill: "currentColor",
      fillOpacity: 1
    }} /></svg>;
});
export default IconCircleQuestionFill;
