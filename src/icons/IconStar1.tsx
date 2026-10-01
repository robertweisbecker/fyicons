import * as React from 'react';
import type { IconProps } from './types';
const IconStar1 = React.forwardRef<SVGSVGElement, IconProps>(function IconStar1(props, ref) {
  const idPrefix = React.useId().replace(/[^a-zA-Z0-9_-]/g, '') + '-';
  const {
    size = 16,
    color,
    title,
    ...svgProps
  } = props;
  return <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...svgProps} ref={ref} width={svgProps["width"] ?? size} height={svgProps["height"] ?? size} color={color} aria-labelledby={svgProps["aria-labelledby"] ?? (title ? idPrefix + "title" : undefined)} aria-label={svgProps["aria-label"] ?? title} role={svgProps["role"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? "img" : undefined)} aria-hidden={svgProps["aria-hidden"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? undefined : true)}>{title ? <title id={idPrefix + "title"}>{title}</title> : null}<path d="M10 5.5H15L11 9L12.5 14L8 11L3.5 14.0674L5 8.88574L1 5.5H6L8 0.5L10 5.5ZM6.92871 5.87109L6.67676 6.5H3.73047L5.64648 8.12207L6.14062 8.54102L5.96094 9.16309L5.2334 11.6748L7.43652 10.1738L7.99414 9.79395L8.55469 10.168L10.7441 11.627L10.042 9.28711L9.85742 8.6709L10.3418 8.24707L12.3389 6.5H9.32324L9.07129 5.87109L8 3.19238L6.92871 5.87109Z" fill="currentColor" style={{
      fill: "currentColor",
      fillOpacity: 1
    }} /></svg>;
});
export default IconStar1;
