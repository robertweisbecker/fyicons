import * as React from 'react';
import type { IconProps } from './types';
const IconDirDown = React.forwardRef<SVGSVGElement, IconProps>(function IconDirDown(props, ref) {
  const idPrefix = React.useId().replace(/[^a-zA-Z0-9_-]/g, '') + '-';
  const {
    size = 16,
    color,
    title,
    ...svgProps
  } = props;
  return <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...svgProps} ref={ref} width={svgProps["width"] ?? size} height={svgProps["height"] ?? size} color={color} aria-labelledby={svgProps["aria-labelledby"] ?? (title ? idPrefix + "title" : undefined)} aria-label={svgProps["aria-label"] ?? title} role={svgProps["role"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? "img" : undefined)} aria-hidden={svgProps["aria-hidden"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? undefined : true)}>{title ? <title id={idPrefix + "title"}>{title}</title> : null}<path d="M8.00387 2.00354C8.27998 2.00358 8.50387 2.22742 8.50387 2.50354V10.7965L11.6504 7.65002C11.8456 7.4548 12.1621 7.45477 12.3574 7.65002C12.5526 7.84528 12.5526 8.1618 12.3574 8.35706L8.35738 12.3571L8.27926 12.4215C8.08519 12.5497 7.82122 12.5279 7.65035 12.3571L3.65035 8.35706C3.45509 8.16179 3.45509 7.84529 3.65035 7.65002C3.84562 7.4548 4.16213 7.45477 4.35738 7.65002L7.50387 10.7965V2.50354C7.50387 2.2274 7.72773 2.00354 8.00387 2.00354Z" fill="currentColor" style={{
      fill: "currentColor",
      fillOpacity: 1
    }} /></svg>;
});
export default IconDirDown;
