import * as React from 'react';
import type { IconProps } from './types';
const IconBanSm = React.forwardRef<SVGSVGElement, IconProps>(function IconBanSm(props, ref) {
  const idPrefix = React.useId().replace(/[^a-zA-Z0-9_-]/g, '') + '-';
  const {
    size = 16,
    color,
    title,
    ...svgProps
  } = props;
  return <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...svgProps} ref={ref} width={svgProps["width"] ?? size} height={svgProps["height"] ?? size} color={color} aria-labelledby={svgProps["aria-labelledby"] ?? (title ? idPrefix + "title" : undefined)} aria-label={svgProps["aria-label"] ?? title} role={svgProps["role"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? "img" : undefined)} aria-hidden={svgProps["aria-hidden"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? undefined : true)}>{title ? <title id={idPrefix + "title"}>{title}</title> : null}<path d="M8 4C10.2091 4 12 5.79086 12 8C12 10.2091 10.2091 12 8 12C5.79086 12 4 10.2091 4 8C4 5.79086 5.79086 4 8 4ZM5.55566 6.2627C5.2065 6.75308 5 7.35215 5 8C5 9.65685 6.34315 11 8 11C8.64777 11 9.24598 10.7924 9.73633 10.4434L5.55566 6.2627ZM8 5C7.35215 5 6.75308 5.2065 6.2627 5.55566L10.4434 9.73633C10.7924 9.24598 11 8.64777 11 8C11 6.34315 9.65685 5 8 5Z" fill="currentColor" style={{
      fill: "currentColor",
      fillOpacity: 1
    }} /></svg>;
});
export default IconBanSm;
