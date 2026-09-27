import * as React from 'react';
import type { IconProps } from './types';
const IconFastBackward = React.forwardRef<SVGSVGElement, IconProps>(function IconFastBackward(props, ref) {
  const idPrefix = React.useId().replace(/[^a-zA-Z0-9_-]/g, '') + '-';
  const {
    size = 16,
    color,
    title,
    ...svgProps
  } = props;
  return <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...svgProps} ref={ref} width={svgProps["width"] ?? size} height={svgProps["height"] ?? size} color={color} aria-labelledby={svgProps["aria-labelledby"] ?? (title ? idPrefix + "title" : undefined)} aria-label={svgProps["aria-label"] ?? title} role={svgProps["role"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? "img" : undefined)} aria-hidden={svgProps["aria-hidden"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? undefined : true)}>{title ? <title id={idPrefix + "title"}>{title}</title> : null}<path d="M13.5877 4.20693C14.209 3.87391 14.9616 4.32427 14.9617 5.02919V10.9706C14.9617 11.6756 14.2091 12.126 13.5877 11.7929L8.46464 9.04579V10.9706C8.46464 11.6756 7.71198 12.126 7.09062 11.7929L1.54863 8.82216C0.89266 8.47043 0.892629 7.52932 1.54863 7.17763L7.09062 4.20693C7.71194 3.87391 8.46456 4.32427 8.46464 5.02919V6.95302L13.5877 4.20693ZM1.98906 7.99989L7.53105 10.9706V5.02919L1.98906 7.99989ZM8.48613 7.99989L14.0281 10.9706V5.02919L8.48613 7.99989Z" fill="currentColor" style={{
      fill: "currentColor",
      fillOpacity: 1
    }} /></svg>;
});
export default IconFastBackward;
