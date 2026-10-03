import * as React from 'react';
import type { IconProps } from './types';
const IconPin = React.forwardRef<SVGSVGElement, IconProps>(function IconPin(props, ref) {
  const idPrefix = React.useId().replace(/[^a-zA-Z0-9_-]/g, '') + '-';
  const {
    size = 16,
    color,
    title,
    ...svgProps
  } = props;
  return <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...svgProps} ref={ref} width={svgProps["width"] ?? size} height={svgProps["height"] ?? size} color={color} aria-labelledby={svgProps["aria-labelledby"] ?? (title ? idPrefix + "title" : undefined)} aria-label={svgProps["aria-label"] ?? title} role={svgProps["role"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? "img" : undefined)} aria-hidden={svgProps["aria-hidden"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? undefined : true)}>{title ? <title id={idPrefix + "title"}>{title}</title> : null}<path d="M8.59766 2.49512C9.24322 1.33422 10.8204 1.11336 11.7598 2.05273L13.9473 4.24023C14.8865 5.1796 14.6657 6.75678 13.5049 7.40234L10.9316 8.83203L10.1992 11.7646C10.0107 12.5184 9.07214 12.7784 8.52246 12.2295L7 10.707L4.43945 13.2676C3.97076 13.7363 3.33468 13.9998 2.67188 14H2V13.3281C2.00011 12.6652 2.26368 12.0293 2.73242 11.5605L5.29297 9L3.77051 7.47754C3.22146 6.92788 3.48154 5.98932 4.23535 5.80078L7.16699 5.06738L8.59766 2.49512ZM3.43945 12.2676C3.24953 12.4575 3.11665 12.6938 3.0498 12.9492C3.30547 12.8824 3.54237 12.7506 3.73242 12.5605L6.29297 10L6 9.70703L3.43945 12.2676ZM11.0527 2.75977C10.583 2.29004 9.79441 2.40087 9.47168 2.98145L7.9375 5.74316C7.87034 5.86399 7.75517 5.95173 7.62109 5.98535L4.47754 6.77051L9.22949 11.5225L10.0146 8.37891L10.0498 8.28223C10.0943 8.19037 10.1662 8.11288 10.2568 8.0625L13.0186 6.52832C13.599 6.20559 13.7098 5.41698 13.2402 4.94727L11.0527 2.75977Z" fill="currentColor" style={{
      fill: "currentColor",
      fillOpacity: 1
    }} /></svg>;
});
export default IconPin;
