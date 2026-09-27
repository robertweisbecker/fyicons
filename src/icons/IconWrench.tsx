import * as React from 'react';
import type { IconProps } from './types';
const IconWrench = React.forwardRef<SVGSVGElement, IconProps>(function IconWrench(props, ref) {
  const idPrefix = React.useId().replace(/[^a-zA-Z0-9_-]/g, '') + '-';
  const {
    size = 16,
    color,
    title,
    ...svgProps
  } = props;
  return <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...svgProps} ref={ref} width={svgProps["width"] ?? size} height={svgProps["height"] ?? size} color={color} aria-labelledby={svgProps["aria-labelledby"] ?? (title ? idPrefix + "title" : undefined)} aria-label={svgProps["aria-label"] ?? title} role={svgProps["role"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? "img" : undefined)} aria-hidden={svgProps["aria-hidden"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? undefined : true)}>{title ? <title id={idPrefix + "title"}>{title}</title> : null}<path d="M6.28516 1.13574C6.44006 1.06216 6.62261 1.07244 6.76758 1.16406C6.91241 1.25571 6.99999 1.41552 7 1.58691V4C7 4.55228 7.44772 5 8 5C8.55228 5 9 4.55228 9 4V1.58691C9.00001 1.41551 9.0876 1.25571 9.23242 1.16406C9.37739 1.07245 9.55994 1.06215 9.71484 1.13574C11.0647 1.77731 12 3.15387 12 4.75C12 6.2309 11.1938 7.52078 10 8.21191V13C9.99989 14.1044 9.10445 14.9999 8 15C6.89544 15 6.00011 14.1044 6 13V8.21289C4.88599 7.56832 4.11018 6.40254 4.01074 5.04688L4 4.75C4.00001 3.15377 4.9352 1.77725 6.28516 1.13574ZM10 4C10 5.10457 9.10457 6 8 6C6.89543 6 6 5.10457 6 4V2.51465C5.3861 3.06426 5.00001 3.86215 5 4.75L5.00781 4.97266C5.08852 6.07338 5.76356 7.01013 6.71484 7.46191C6.88894 7.54482 6.99999 7.72023 7 7.91309V13L7.00488 13.1025C7.05628 13.6067 7.48243 14 8 14C8.51757 13.9999 8.94371 13.6066 8.99512 13.1025L9 13V7.91211C9.00001 7.71926 9.11105 7.54384 9.28516 7.46094C10.2365 7.0087 10.9117 6.07209 10.9922 4.97168L11 4.75C11 3.86225 10.6139 3.06431 10 2.51465V4Z" fill="currentColor" style={{
      fill: "currentColor",
      fillOpacity: 1
    }} /></svg>;
});
export default IconWrench;
