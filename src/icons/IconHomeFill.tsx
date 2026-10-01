import * as React from 'react';
import type { IconProps } from './types';
const IconHomeFill = React.forwardRef<SVGSVGElement, IconProps>(function IconHomeFill(props, ref) {
  const idPrefix = React.useId().replace(/[^a-zA-Z0-9_-]/g, '') + '-';
  const {
    size = 16,
    color,
    title,
    ...svgProps
  } = props;
  return <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...svgProps} ref={ref} width={svgProps["width"] ?? size} height={svgProps["height"] ?? size} color={color} aria-labelledby={svgProps["aria-labelledby"] ?? (title ? idPrefix + "title" : undefined)} aria-label={svgProps["aria-label"] ?? title} role={svgProps["role"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? "img" : undefined)} aria-hidden={svgProps["aria-hidden"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? undefined : true)}>{title ? <title id={idPrefix + "title"}>{title}</title> : null}<path d="M7.29199 1.95685C7.68248 1.56637 8.3165 1.56643 8.70703 1.95685L13.5605 6.81036C13.8419 7.09167 13.999 7.47406 13.999 7.87189V12.9998C13.9989 13.552 13.5513 13.9998 12.999 13.9998H9.99902C9.7231 13.9996 9.49911 13.7758 9.49902 13.4998V9.74982C9.49884 9.33576 9.16312 8.99982 8.74902 8.99982H7.24902C6.83509 9 6.49921 9.33588 6.49902 9.74982V13.4998C6.49893 13.7759 6.27511 13.9998 5.99902 13.9998H2.99902C2.44718 13.9994 1.99911 13.5517 1.99902 12.9998V7.87189C1.99902 7.47418 2.15733 7.09164 2.43848 6.81036L7.29199 1.95685Z" fill="currentColor" style={{
      fill: "currentColor",
      fillOpacity: 1
    }} /></svg>;
});
export default IconHomeFill;
