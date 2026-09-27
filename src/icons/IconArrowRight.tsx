import * as React from 'react';
import type { IconProps } from './types';
const IconArrowRight = React.forwardRef<SVGSVGElement, IconProps>(function IconArrowRight(props, ref) {
  const idPrefix = React.useId().replace(/[^a-zA-Z0-9_-]/g, '') + '-';
  const {
    size = 16,
    color,
    title,
    ...svgProps
  } = props;
  return <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...svgProps} ref={ref} width={svgProps["width"] ?? size} height={svgProps["height"] ?? size} color={color} aria-labelledby={svgProps["aria-labelledby"] ?? (title ? idPrefix + "title" : undefined)} aria-label={svgProps["aria-label"] ?? title} role={svgProps["role"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? "img" : undefined)} aria-hidden={svgProps["aria-hidden"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? undefined : true)}>{title ? <title id={idPrefix + "title"}>{title}</title> : null}<path d="M8.14648 3.14671C8.34175 2.95145 8.65825 2.95145 8.85352 3.14671L13.3535 7.64671C13.5487 7.84198 13.5487 8.15852 13.3535 8.35374L8.85352 12.8537C8.65828 13.0489 8.34172 13.0489 8.14648 12.8537C7.95126 12.6585 7.95134 12.342 8.14648 12.1467L11.793 8.50023H2.5C2.22393 8.50023 2.00012 8.27626 2 8.00023C2 7.72408 2.22386 7.50023 2.5 7.50023H11.793L8.14648 3.85374C7.95126 3.65852 7.95134 3.34198 8.14648 3.14671Z" fill="currentColor" style={{
      fill: "currentColor",
      fillOpacity: 1
    }} /></svg>;
});
export default IconArrowRight;
