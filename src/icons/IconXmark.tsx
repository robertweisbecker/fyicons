import * as React from 'react';
import type { IconProps } from './types';
const IconXmark = React.forwardRef<SVGSVGElement, IconProps>(function IconXmark(props, ref) {
  const idPrefix = React.useId().replace(/[^a-zA-Z0-9_-]/g, '') + '-';
  const {
    size = 16,
    color,
    title,
    ...svgProps
  } = props;
  return <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...svgProps} ref={ref} width={svgProps["width"] ?? size} height={svgProps["height"] ?? size} color={color} aria-labelledby={svgProps["aria-labelledby"] ?? (title ? idPrefix + "title" : undefined)} aria-label={svgProps["aria-label"] ?? title} role={svgProps["role"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? "img" : undefined)} aria-hidden={svgProps["aria-hidden"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? undefined : true)}>{title ? <title id={idPrefix + "title"}>{title}</title> : null}<path d="M12.1474 3.14667C12.3426 2.95141 12.6591 2.95141 12.8544 3.14667C13.0496 3.34194 13.0496 3.65847 12.8544 3.8537L8.70695 8.00116L12.8525 12.1467C13.0476 12.3419 13.0477 12.6585 12.8525 12.8537C12.6572 13.0488 12.3407 13.0488 12.1454 12.8537L7.99991 8.70819L3.85441 12.8537C3.65917 13.0488 3.34261 13.0488 3.14738 12.8537C2.95214 12.6585 2.9522 12.3419 3.14738 12.1467L7.29288 8.00116L3.14542 3.8537C2.95019 3.65847 2.95026 3.34194 3.14542 3.14667C3.34069 2.95141 3.65719 2.95141 3.85245 3.14667L7.99991 7.29413L12.1474 3.14667Z" fill="currentColor" style={{
      fill: "currentColor",
      fillOpacity: 1
    }} /></svg>;
});
export default IconXmark;
