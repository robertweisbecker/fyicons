import * as React from 'react';
import type { IconProps } from './types';
const IconHome31 = React.forwardRef<SVGSVGElement, IconProps>(function IconHome31(props, ref) {
  const idPrefix = React.useId().replace(/[^a-zA-Z0-9_-]/g, '') + '-';
  const {
    size = 16,
    color,
    title,
    ...svgProps
  } = props;
  return <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...svgProps} ref={ref} width={svgProps["width"] ?? size} height={svgProps["height"] ?? size} color={color} aria-labelledby={svgProps["aria-labelledby"] ?? (title ? idPrefix + "title" : undefined)} aria-label={svgProps["aria-label"] ?? title} role={svgProps["role"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? "img" : undefined)} aria-hidden={svgProps["aria-hidden"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? undefined : true)}>{title ? <title id={idPrefix + "title"}>{title}</title> : null}<path d="M12.5 12.0003V8.50025C13.0517 8.50034 13.499 8.0531 13.499 7.50138V7.47126C13.499 7.17227 13.369 6.88805 13.1427 6.69259L8.49025 2.6735C8.20867 2.43026 7.79132 2.43024 7.50972 2.67346L2.85625 6.69271C2.63003 6.88809 2.5 7.17222 2.5 7.47114V7.49902C2.5 8.0518 2.9482 8.49988 3.50098 8.49973L3.50029 12C3.50013 12.8285 4.17167 13.5002 5.00016 13.5003L5.99907 13.5004C6.27519 13.5004 6.49906 13.2766 6.49911 13.0004L6.49963 9.99974C6.49978 9.17141 7.17131 8.5 7.99963 8.5C8.82816 8.5 9.49977 9.17173 9.49963 10.0003L9.49911 13.0003C9.49906 13.2765 9.72295 13.5004 9.99914 13.5004L11.0001 13.5003C11.8285 13.5003 12.5 12.8287 12.5 12.0003Z" stroke="currentColor" style={{
      stroke: "currentColor",
      strokeOpacity: 1
    }} strokeLinecap="round" /></svg>;
});
export default IconHome31;
