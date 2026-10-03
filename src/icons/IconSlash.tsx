import * as React from 'react';
import type { IconProps } from './types';
const IconSlash = React.forwardRef<SVGSVGElement, IconProps>(function IconSlash(props, ref) {
  const idPrefix = React.useId().replace(/[^a-zA-Z0-9_-]/g, '') + '-';
  const {
    size = 16,
    color,
    title,
    ...svgProps
  } = props;
  return <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...svgProps} ref={ref} width={svgProps["width"] ?? size} height={svgProps["height"] ?? size} color={color} aria-labelledby={svgProps["aria-labelledby"] ?? (title ? idPrefix + "title" : undefined)} aria-label={svgProps["aria-label"] ?? title} role={svgProps["role"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? "img" : undefined)} aria-hidden={svgProps["aria-hidden"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? undefined : true)}>{title ? <title id={idPrefix + "title"}>{title}</title> : null}<path d="M10.0324 1.31994C10.1316 1.06248 10.4213 0.93399 10.6789 1.03283C10.9365 1.132 11.0651 1.42165 10.966 1.67932L5.96602 14.6793C5.86685 14.937 5.57723 15.0655 5.31954 14.9664C5.06213 14.8671 4.93336 14.5775 5.03243 14.3199L10.0324 1.31994Z" fill="currentColor" style={{
      fill: "currentColor",
      fillOpacity: 1
    }} /></svg>;
});
export default IconSlash;
