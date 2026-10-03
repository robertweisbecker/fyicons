import * as React from 'react';
import type { IconProps } from './types';
const IconHomeSimpleFill = React.forwardRef<SVGSVGElement, IconProps>(function IconHomeSimpleFill(props, ref) {
  const idPrefix = React.useId().replace(/[^a-zA-Z0-9_-]/g, '') + '-';
  const {
    size = 16,
    color,
    title,
    ...svgProps
  } = props;
  return <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...svgProps} ref={ref} width={svgProps["width"] ?? size} height={svgProps["height"] ?? size} color={color} aria-labelledby={svgProps["aria-labelledby"] ?? (title ? idPrefix + "title" : undefined)} aria-label={svgProps["aria-label"] ?? title} role={svgProps["role"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? "img" : undefined)} aria-hidden={svgProps["aria-hidden"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? undefined : true)}>{title ? <title id={idPrefix + "title"}>{title}</title> : null}<path d="M7.29199 1.9567C7.68245 1.56652 8.31559 1.56652 8.70605 1.9567L13.5596 6.81022C13.8408 7.09152 13.999 7.47394 13.999 7.87174V12.9997C13.999 13.5519 13.5513 13.9997 12.999 13.9997H9.99902C9.72292 13.9997 9.49909 13.7758 9.49902 13.4997V9.74967C9.49883 9.33562 9.16312 8.99967 8.74902 8.99967H7.24902C6.83493 8.99967 6.49922 9.33562 6.49902 9.74967V13.4997C6.49896 13.7758 6.27513 13.9997 5.99902 13.9997H2.99902C2.44678 13.9997 1.99909 13.5519 1.99902 12.9997V7.87174C1.99902 7.47394 2.15721 7.09152 2.43848 6.81022L7.29199 1.9567Z" fill="currentColor" style={{
      fill: "currentColor",
      fillOpacity: 1
    }} /></svg>;
});
export default IconHomeSimpleFill;
