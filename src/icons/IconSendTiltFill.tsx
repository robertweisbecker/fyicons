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
  return <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...svgProps} ref={ref} width={svgProps["width"] ?? size} height={svgProps["height"] ?? size} color={color} aria-labelledby={svgProps["aria-labelledby"] ?? (title ? idPrefix + "title" : undefined)} aria-label={svgProps["aria-label"] ?? title} role={svgProps["role"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? "img" : undefined)} aria-hidden={svgProps["aria-hidden"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? undefined : true)}>{title ? <title id={idPrefix + "title"}>{title}</title> : null}<path d="M12.7383 3.06195C13.9025 3.06244 14.6222 4.33199 14.0254 5.33148L8.84478 13.9955C8.22669 15.0292 6.64732 14.6773 6.5274 13.4789L6.16406 9.84641C6.10728 9.27868 6.3775 8.7279 6.86124 8.42536L10.7667 5.98285C10.9999 5.83618 11.071 5.52716 10.9249 5.2934C10.7784 5.0599 10.4693 4.98937 10.2354 5.13519L6.38687 7.54172C5.8642 7.86855 5.19478 7.84233 4.69927 7.47562L1.78228 5.31683C0.813633 4.59978 1.32018 3.06195 2.52544 3.06195H12.7383Z" fill="currentColor" style={{
      fill: "currentColor",
      fillOpacity: 1
    }} /></svg>;
});
export default IconSendTiltFill;
