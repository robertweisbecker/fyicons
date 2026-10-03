import * as React from 'react';
import type { IconProps } from './types';
const IconLineDiagonal = React.forwardRef<SVGSVGElement, IconProps>(function IconLineDiagonal(props, ref) {
  const idPrefix = React.useId().replace(/[^a-zA-Z0-9_-]/g, '') + '-';
  const {
    size = 16,
    color,
    title,
    ...svgProps
  } = props;
  return <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...svgProps} ref={ref} width={svgProps["width"] ?? size} height={svgProps["height"] ?? size} color={color} aria-labelledby={svgProps["aria-labelledby"] ?? (title ? idPrefix + "title" : undefined)} aria-label={svgProps["aria-label"] ?? title} role={svgProps["role"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? "img" : undefined)} aria-hidden={svgProps["aria-hidden"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? undefined : true)}>{title ? <title id={idPrefix + "title"}>{title}</title> : null}<path d="M2.14742 2.14621C2.34272 1.95143 2.65935 1.9511 2.85445 2.14621L13.8545 13.1462C14.0496 13.3413 14.0492 13.6579 13.8545 13.8532C13.6592 14.0485 13.3427 14.0485 13.1474 13.8532L2.14742 2.85324C1.95216 2.65797 1.95216 2.34147 2.14742 2.14621Z" fill="currentColor" style={{
      fill: "currentColor",
      fillOpacity: 1
    }} /></svg>;
});
export default IconLineDiagonal;
