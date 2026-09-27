import * as React from 'react';
import type { IconProps } from './types';
const IconRuler = React.forwardRef<SVGSVGElement, IconProps>(function IconRuler(props, ref) {
  const idPrefix = React.useId().replace(/[^a-zA-Z0-9_-]/g, '') + '-';
  const {
    size = 16,
    color,
    title,
    ...svgProps
  } = props;
  return <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...svgProps} ref={ref} width={svgProps["width"] ?? size} height={svgProps["height"] ?? size} color={color} aria-labelledby={svgProps["aria-labelledby"] ?? (title ? idPrefix + "title" : undefined)} aria-label={svgProps["aria-label"] ?? title} role={svgProps["role"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? "img" : undefined)} aria-hidden={svgProps["aria-hidden"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? undefined : true)}>{title ? <title id={idPrefix + "title"}>{title}</title> : null}<path d="M9.43902 1.8531C10.0246 1.26756 10.9743 1.26787 11.5601 1.8531L14.1461 4.43903C14.7317 5.0248 14.7317 5.97436 14.1461 6.56013L6.56012 14.1461C5.97435 14.7317 5.02478 14.7317 4.43902 14.1461L1.85309 11.5601C1.26787 10.9743 1.26758 10.0246 1.85309 9.43903L9.43902 1.8531ZM10.8531 2.56013C10.6578 2.36543 10.3411 2.36512 10.1461 2.56013L9.7066 2.99861L10.3531 3.64607C10.5483 3.84133 10.5483 4.15784 10.3531 4.3531C10.1578 4.54834 9.84131 4.54835 9.64606 4.3531L8.99957 3.70661L7.7066 4.99861L8.85406 6.14607C9.04898 6.34119 9.0488 6.65786 8.85406 6.8531C8.65886 7.0483 8.34231 7.04817 8.14703 6.8531L6.99957 5.70564L5.70563 6.99958L6.35309 7.64704C6.54821 7.84232 6.5483 8.15886 6.35309 8.35407C6.15783 8.54878 5.84116 8.54903 5.64605 8.35407L4.99859 7.70661L3.7066 8.99958L4.85309 10.1461C5.04834 10.3413 5.04831 10.6578 4.85309 10.8531C4.65782 11.0484 4.34132 11.0484 4.14605 10.8531L2.99859 9.70661L2.56012 10.1461C2.36513 10.3412 2.36542 10.6578 2.56012 10.8531L5.14605 13.439C5.34129 13.6342 5.65784 13.6342 5.85309 13.439L13.439 5.8531C13.6342 5.65785 13.6342 5.34131 13.439 5.14607L10.8531 2.56013Z" fill="currentColor" style={{
      fill: "currentColor",
      fillOpacity: 1
    }} /></svg>;
});
export default IconRuler;
