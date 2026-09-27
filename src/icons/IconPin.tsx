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
  return <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...svgProps} ref={ref} width={svgProps["width"] ?? size} height={svgProps["height"] ?? size} color={color} aria-labelledby={svgProps["aria-labelledby"] ?? (title ? idPrefix + "title" : undefined)} aria-label={svgProps["aria-label"] ?? title} role={svgProps["role"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? "img" : undefined)} aria-hidden={svgProps["aria-hidden"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? undefined : true)}>{title ? <title id={idPrefix + "title"}>{title}</title> : null}<path d="M8.59766 2.495C9.24322 1.3341 10.8204 1.11324 11.7598 2.05261L13.9473 4.24011C14.8865 5.17948 14.6657 6.75666 13.5049 7.40222L10.9316 8.83191L10.1992 11.7645C10.0107 12.5183 9.07214 12.7783 8.52246 12.2294L7 10.7069L4.43945 13.2675C3.97076 13.7361 3.33468 13.9997 2.67188 13.9999H2V13.328C2.00011 12.6651 2.26368 12.0292 2.73242 11.5604L5.29297 8.99988L3.77051 7.47742C3.22146 6.92776 3.48154 5.9892 4.23535 5.80066L7.16699 5.06726L8.59766 2.495ZM3.43945 12.2675C3.24953 12.4574 3.11665 12.6936 3.0498 12.9491C3.30547 12.8823 3.54237 12.7505 3.73242 12.5604L6.29297 9.99988L6 9.70691L3.43945 12.2675ZM11.0527 2.75964C10.583 2.28992 9.79441 2.40075 9.47168 2.98132L7.9375 5.74304C7.87034 5.86387 7.75517 5.95161 7.62109 5.98523L4.47754 6.77039L9.22949 11.5223L10.0146 8.37878L10.0498 8.2821C10.0943 8.19025 10.1662 8.11276 10.2568 8.06238L13.0186 6.5282C13.599 6.20547 13.7098 5.41686 13.2402 4.94714L11.0527 2.75964Z" fill="currentColor" style={{
      fill: "currentColor",
      fillOpacity: 1
    }} /></svg>;
});
export default IconPin;
