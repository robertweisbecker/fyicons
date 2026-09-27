import * as React from 'react';
import type { IconProps } from './types';
const IconPlayFilled = React.forwardRef<SVGSVGElement, IconProps>(function IconPlayFilled(props, ref) {
  const idPrefix = React.useId().replace(/[^a-zA-Z0-9_-]/g, '') + '-';
  const {
    size = 16,
    color,
    title,
    ...svgProps
  } = props;
  return <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...svgProps} ref={ref} width={svgProps["width"] ?? size} height={svgProps["height"] ?? size} color={color} aria-labelledby={svgProps["aria-labelledby"] ?? (title ? idPrefix + "title" : undefined)} aria-label={svgProps["aria-label"] ?? title} role={svgProps["role"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? "img" : undefined)} aria-hidden={svgProps["aria-hidden"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? undefined : true)}>{title ? <title id={idPrefix + "title"}>{title}</title> : null}<path fillRule="evenodd" clipRule="evenodd" d="M3.25 3.15397C3.25 2.1942 4.28685 1.59249 5.12017 2.06867L13.6007 6.9147C14.4405 7.39456 14.4405 8.60544 13.6007 9.0853L5.12017 13.9313C4.28685 14.4075 3.25 13.8058 3.25 12.846V3.15397Z" fill="currentColor" style={{
      fill: "currentColor",
      fillOpacity: 1
    }} /></svg>;
});
export default IconPlayFilled;
