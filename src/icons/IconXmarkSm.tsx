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
  return <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...svgProps} ref={ref} width={svgProps["width"] ?? size} height={svgProps["height"] ?? size} color={color} aria-labelledby={svgProps["aria-labelledby"] ?? (title ? idPrefix + "title" : undefined)} aria-label={svgProps["aria-label"] ?? title} role={svgProps["role"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? "img" : undefined)} aria-hidden={svgProps["aria-hidden"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? undefined : true)}>{title ? <title id={idPrefix + "title"}>{title}</title> : null}<path d="M10.1474 5.14645C10.3427 4.95118 10.6592 4.95118 10.8544 5.14645C11.0496 5.34171 11.0497 5.65823 10.8544 5.85348L8.70696 7.99996L10.8534 10.1464C11.0487 10.3417 11.0487 10.6582 10.8534 10.8535C10.6582 11.0487 10.3417 11.0487 10.1464 10.8535L7.99993 8.70699L5.85443 10.8535C5.65918 11.0487 5.34264 11.0487 5.14739 10.8535C4.95215 10.6582 4.95219 10.3417 5.14739 10.1464L7.2929 7.99996L5.14642 5.85348C4.95117 5.65823 4.95121 5.34171 5.14642 5.14645C5.34168 4.95118 5.65819 4.95118 5.85345 5.14645L7.99993 7.29293L10.1474 5.14645Z" fill="currentColor" style={{
      fill: "currentColor",
      fillOpacity: 1
    }} /></svg>;
});
export default IconXmarkSm;
