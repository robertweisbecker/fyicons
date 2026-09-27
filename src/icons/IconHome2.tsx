import * as React from 'react';
import type { IconProps } from './types';
const IconHome2 = React.forwardRef<SVGSVGElement, IconProps>(function IconHome2(props, ref) {
  const idPrefix = React.useId().replace(/[^a-zA-Z0-9_-]/g, '') + '-';
  const {
    size = 16,
    color,
    title,
    ...svgProps
  } = props;
  return <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...svgProps} ref={ref} width={svgProps["width"] ?? size} height={svgProps["height"] ?? size} color={color} aria-labelledby={svgProps["aria-labelledby"] ?? (title ? idPrefix + "title" : undefined)} aria-label={svgProps["aria-label"] ?? title} role={svgProps["role"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? "img" : undefined)} aria-hidden={svgProps["aria-hidden"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? undefined : true)}>{title ? <title id={idPrefix + "title"}>{title}</title> : null}<path d="M7.61328 0.942444C7.85034 0.799715 8.14861 0.799887 8.38574 0.942444L8.49902 1.02545L14.8438 6.69049C15.3565 7.14918 15.0332 7.99786 14.3457 7.99908H13V12.4991C13 13.3276 12.328 13.9988 11.5 13.9991H9.5C9.22399 13.9989 9 13.7751 9 13.4991V9.99908C8.99953 9.48189 8.6062 9.05546 8.10254 9.00397L8 8.99908C7.44836 8.99924 7.0005 9.44713 7 9.99908V13.4991C7 13.7752 6.77614 13.9991 6.5 13.9991H4.5C3.67171 13.9989 3 13.3274 3 12.4991V7.99908H1.65527C0.968625 7.99884 0.641964 7.1505 1.15527 6.69049L7.5 1.02545L7.61328 0.942444ZM2.31152 6.99908H3C3.5517 6.99944 3.99925 7.44781 4 7.99908V12.4991C4 12.7751 4.22399 12.9989 4.5 12.9991H6V9.99908C6.00059 8.89531 6.89573 7.99924 8 7.99908C9.10406 7.99932 9.99941 8.89521 10 9.99908V12.9991H11.5L11.6006 12.9893C11.8286 12.9427 12 12.7405 12 12.4991V7.99908L12.0049 7.89655C12.0566 7.39335 12.4822 6.99923 13 6.99908H13.6875L7.99902 1.91998L2.31152 6.99908Z" fill="currentColor" style={{
      fill: "currentColor",
      fillOpacity: 1
    }} /></svg>;
});
export default IconHome2;
