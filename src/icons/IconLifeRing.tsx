import * as React from 'react';
import type { IconProps } from './types';
const IconLifeRing = React.forwardRef<SVGSVGElement, IconProps>(function IconLifeRing(props, ref) {
  const idPrefix = React.useId().replace(/[^a-zA-Z0-9_-]/g, '') + '-';
  const {
    size = 16,
    color,
    title,
    ...svgProps
  } = props;
  return <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...svgProps} ref={ref} width={svgProps["width"] ?? size} height={svgProps["height"] ?? size} color={color} aria-labelledby={svgProps["aria-labelledby"] ?? (title ? idPrefix + "title" : undefined)} aria-label={svgProps["aria-label"] ?? title} role={svgProps["role"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? "img" : undefined)} aria-hidden={svgProps["aria-hidden"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? undefined : true)}>{title ? <title id={idPrefix + "title"}>{title}</title> : null}<path d="M8 1C11.866 1 15 4.13401 15 8C15 11.866 11.866 15 8 15C4.13401 15 1 11.866 1 8C1 4.13401 4.13401 1 8 1ZM9.73633 10.4434C9.24598 10.7924 8.64777 11 8 11C7.35195 11 6.75316 10.7927 6.2627 10.4434L4.12598 12.5801C5.17138 13.4652 6.52292 14 8 14C9.47681 14 10.8277 13.4649 11.873 12.5801L9.73633 10.4434ZM10.4434 6.2627C10.7927 6.75316 11 7.35195 11 8C11 8.64777 10.7924 9.24598 10.4434 9.73633L12.5801 11.873C13.4649 10.8277 14 9.47681 14 8C14 6.52292 13.4652 5.17138 12.5801 4.12598L10.4434 6.2627ZM3.41895 4.12598C2.53405 5.17132 2 6.52315 2 8C2 9.47658 2.53434 10.8278 3.41895 11.873L5.55566 9.73633C5.20678 9.24607 5 8.64756 5 8C5 7.35215 5.2065 6.75308 5.55566 6.2627L3.41895 4.12598ZM8 6C6.89543 6 6 6.89543 6 8C6 9.10457 6.89543 10 8 10C9.10457 10 10 9.10457 10 8C10 6.89543 9.10457 6 8 6ZM8 2C6.52315 2 5.17132 2.53405 4.12598 3.41895L6.2627 5.55566C6.75308 5.2065 7.35215 5 8 5C8.64756 5 9.24607 5.20678 9.73633 5.55566L11.873 3.41895C10.8278 2.53434 9.47658 2 8 2Z" fill="currentColor" style={{
      fill: "currentColor",
      fillOpacity: 1
    }} /></svg>;
});
export default IconLifeRing;
