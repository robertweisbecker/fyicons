import * as React from 'react';
import type { IconProps } from './types';
const IconGitPullRequest = React.forwardRef<SVGSVGElement, IconProps>(function IconGitPullRequest(props, ref) {
  const idPrefix = React.useId().replace(/[^a-zA-Z0-9_-]/g, '') + '-';
  const {
    size = 16,
    color,
    title,
    ...svgProps
  } = props;
  return <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...svgProps} ref={ref} width={svgProps["width"] ?? size} height={svgProps["height"] ?? size} color={color} aria-labelledby={svgProps["aria-labelledby"] ?? (title ? idPrefix + "title" : undefined)} aria-label={svgProps["aria-label"] ?? title} role={svgProps["role"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? "img" : undefined)} aria-hidden={svgProps["aria-hidden"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? undefined : true)}>{title ? <title id={idPrefix + "title"}>{title}</title> : null}<path d="M9.14648 0.854004C9.46147 0.539021 10 0.762067 10 1.20752V2.50049H10.5C11.6044 2.50073 12.5 3.39607 12.5 4.50049V11.0649C13.3622 11.2873 14 12.0689 14 13.0005C13.9998 14.1047 13.1042 15.0002 12 15.0005C10.8957 15.0003 10.0002 14.1048 10 13.0005C10 12.0687 10.6375 11.2871 11.5 11.0649V4.50049C11.5 3.94835 11.0521 3.50073 10.5 3.50049H10V4.79346C9.99956 5.23849 9.46136 5.46165 9.14648 5.14697L7.35352 3.354C7.15845 3.15889 7.15873 2.84226 7.35352 2.64697L9.14648 0.854004ZM4 0.999512C5.1044 0.999512 5.99972 1.89518 6 2.99951C6 3.93109 5.36213 4.71076 4.5 4.93311V11.0649C5.36216 11.2871 5.99976 12.068 6 12.9995C6 14.1041 5.10457 14.9995 4 14.9995C2.89543 14.9995 2 14.1041 2 12.9995C2.00024 12.068 2.63784 11.2871 3.5 11.0649V4.93311C2.63787 4.71076 2 3.93109 2 2.99951C2.00028 1.89518 2.8956 0.999512 4 0.999512ZM12 12.0005C11.4478 12.0006 11 12.4483 11 13.0005C11.0002 13.5525 11.448 14.0003 12 14.0005C12.5519 14.0002 12.9998 13.5524 13 13.0005C13 12.4484 12.5521 12.0007 12 12.0005ZM4 11.9995C3.44789 11.9995 3.00028 12.4475 3 12.9995C3 13.5518 3.44772 13.9995 4 13.9995C4.55228 13.9995 5 13.5518 5 12.9995C4.99972 12.4475 4.55211 11.9995 4 11.9995ZM4 1.99951C3.44789 1.99951 3.00028 2.44746 3 2.99951C3 3.5518 3.44772 3.99951 4 3.99951C4.55228 3.99951 5 3.5518 5 2.99951C4.99972 2.44746 4.55211 1.99951 4 1.99951Z" fill="currentColor" style={{
      fill: "currentColor",
      fillOpacity: 1
    }} /></svg>;
});
export default IconGitPullRequest;
