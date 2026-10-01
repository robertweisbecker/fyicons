import * as React from 'react';
import type { IconProps } from './types';
const IconSendTiltFill = React.forwardRef<SVGSVGElement, IconProps>(function IconSendTiltFill(props, ref) {
  const idPrefix = React.useId().replace(/[^a-zA-Z0-9_-]/g, '') + '-';
  const {
    size = 16,
    color,
    title,
    ...svgProps
  } = props;
  return <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...svgProps} ref={ref} width={svgProps["width"] ?? size} height={svgProps["height"] ?? size} color={color} aria-labelledby={svgProps["aria-labelledby"] ?? (title ? idPrefix + "title" : undefined)} aria-label={svgProps["aria-label"] ?? title} role={svgProps["role"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? "img" : undefined)} aria-hidden={svgProps["aria-hidden"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? undefined : true)}>{title ? <title id={idPrefix + "title"}>{title}</title> : null}<path d="M13.6309 3.06192C14.6177 3.06232 15.2145 4.15297 14.6836 4.98477L8.83594 14.1352C8.19746 15.1341 6.65607 14.766 6.53809 13.5863L6.17522 9.95456C6.1157 9.35885 6.4161 8.7848 6.93947 8.49411L9.74317 6.93692C9.984 6.80258 10.0715 6.49739 9.9375 6.25626C9.80343 6.01529 9.49803 5.92838 9.25684 6.06192L6.40693 7.64546C5.89268 7.93119 5.25888 7.88994 4.78602 7.53996L1.78223 5.3168C0.813661 4.59975 1.32019 3.06197 2.52539 3.06192H13.6309Z" fill="currentColor" style={{
      fill: "currentColor",
      fillOpacity: 1
    }} /></svg>;
});
export default IconSendTiltFill;
