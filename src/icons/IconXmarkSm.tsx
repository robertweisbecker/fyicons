import * as React from 'react';
import type { IconProps } from './types';
const IconXmarkSm = React.forwardRef<SVGSVGElement, IconProps>(function IconXmarkSm(props, ref) {
  const idPrefix = React.useId().replace(/[^a-zA-Z0-9_-]/g, '') + '-';
  const {
    size = 16,
    color,
    title,
    ...svgProps
  } = props;
  return <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...svgProps} ref={ref} width={svgProps["width"] ?? size} height={svgProps["height"] ?? size} color={color} aria-labelledby={svgProps["aria-labelledby"] ?? (title ? idPrefix + "title" : undefined)} aria-label={svgProps["aria-label"] ?? title} role={svgProps["role"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? "img" : undefined)} aria-hidden={svgProps["aria-hidden"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? undefined : true)}>{title ? <title id={idPrefix + "title"}>{title}</title> : null}<path d="M10.1474 5.1466C10.3427 4.95134 10.6592 4.95134 10.8544 5.1466C11.0496 5.34187 11.0497 5.65839 10.8544 5.85363L8.70696 8.00012L10.8534 10.1466C11.0487 10.3419 11.0487 10.6584 10.8534 10.8536C10.6582 11.0488 10.3417 11.0488 10.1464 10.8536L7.99993 8.70715L5.85443 10.8536C5.65918 11.0488 5.34264 11.0488 5.14739 10.8536C4.95215 10.6584 4.95219 10.3419 5.14739 10.1466L7.2929 8.00012L5.14642 5.85363C4.95117 5.65839 4.95121 5.34187 5.14642 5.1466C5.34168 4.95134 5.65819 4.95134 5.85345 5.1466L7.99993 7.29309L10.1474 5.1466Z" fill="currentColor" style={{
      fill: "currentColor",
      fillOpacity: 1
    }} /></svg>;
});
export default IconXmarkSm;
