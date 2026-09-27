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
  return <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...svgProps} ref={ref} width={svgProps["width"] ?? size} height={svgProps["height"] ?? size} color={color} aria-labelledby={svgProps["aria-labelledby"] ?? (title ? idPrefix + "title" : undefined)} aria-label={svgProps["aria-label"] ?? title} role={svgProps["role"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? "img" : undefined)} aria-hidden={svgProps["aria-hidden"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? undefined : true)}>{title ? <title id={idPrefix + "title"}>{title}</title> : null}<path d="M7.27832 1.75159C7.67183 1.34175 8.32715 1.34183 8.7207 1.75159L13.582 6.81506C13.8499 7.09428 13.9989 7.46623 13.999 7.85315V12.9996C13.999 13.5519 13.5513 13.9996 12.999 13.9996H9.99902C9.72308 13.9994 9.49908 13.7756 9.49902 13.4996V9.74963C9.49879 9.33562 9.16309 8.99963 8.74902 8.99963H7.24902C6.83511 8.99982 6.49925 9.33573 6.49902 9.74963V13.4996C6.49896 13.7757 6.27513 13.9996 5.99902 13.9996H2.99902C2.44716 13.9992 1.99908 13.5516 1.99902 12.9996V7.85315C1.99911 7.46634 2.14929 7.09425 2.41699 6.81506L7.27832 1.75159Z" fill="currentColor" style={{
      fill: "currentColor",
      fillOpacity: 1
    }} /></svg>;
});
export default IconHomeFill;
