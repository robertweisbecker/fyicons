import * as React from 'react';
import type { IconProps } from './types';
const IconFastForward = React.forwardRef<SVGSVGElement, IconProps>(function IconFastForward(props, ref) {
  const idPrefix = React.useId().replace(/[^a-zA-Z0-9_-]/g, '') + '-';
  const {
    size = 16,
    color,
    title,
    ...svgProps
  } = props;
  return <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...svgProps} ref={ref} width={svgProps["width"] ?? size} height={svgProps["height"] ?? size} color={color} aria-labelledby={svgProps["aria-labelledby"] ?? (title ? idPrefix + "title" : undefined)} aria-label={svgProps["aria-label"] ?? title} role={svgProps["role"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? "img" : undefined)} aria-hidden={svgProps["aria-hidden"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? undefined : true)}>{title ? <title id={idPrefix + "title"}>{title}</title> : null}<path d="M7.5332 5.02882C7.53353 4.32415 8.28604 3.87374 8.90723 4.20656L14.4492 7.17726C15.1052 7.52893 15.105 8.47001 14.4492 8.82179L8.90723 11.7925C8.28586 12.1256 7.5332 11.6752 7.5332 10.9702V9.04445L2.40723 11.7925C1.78586 12.1256 1.0332 11.6752 1.0332 10.9702V5.02882C1.03354 4.32416 1.78604 3.87375 2.40723 4.20656L7.5332 6.95363V5.02882ZM1.9668 10.9702L7.50879 7.99952L1.9668 5.02882V10.9702ZM8.4668 10.9702L14.0088 7.99952L8.4668 5.02882V10.9702Z" fill="currentColor" style={{
      fill: "currentColor",
      fillOpacity: 1
    }} /></svg>;
});
export default IconFastForward;
