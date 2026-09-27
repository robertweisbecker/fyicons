import * as React from 'react';
import type { IconProps } from './types';
const IconCompass2 = React.forwardRef<SVGSVGElement, IconProps>(function IconCompass2(props, ref) {
  const idPrefix = React.useId().replace(/[^a-zA-Z0-9_-]/g, '') + '-';
  const {
    size = 16,
    color,
    title,
    ...svgProps
  } = props;
  return <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...svgProps} ref={ref} width={svgProps["width"] ?? size} height={svgProps["height"] ?? size} color={color} aria-labelledby={svgProps["aria-labelledby"] ?? (title ? idPrefix + "title" : undefined)} aria-label={svgProps["aria-label"] ?? title} role={svgProps["role"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? "img" : undefined)} aria-hidden={svgProps["aria-hidden"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? undefined : true)}>{title ? <title id={idPrefix + "title"}>{title}</title> : null}<path d="M8 1C11.866 1 15 4.13401 15 8C15 11.866 11.866 15 8 15C4.13401 15 1 11.866 1 8C1 4.13401 4.13401 1 8 1ZM8 2C4.6863 2 2 4.68629 2 8C2 11.3137 4.6863 14 8 14C11.3137 14 14 11.3137 14 8C14 4.68629 11.3137 2 8 2ZM11.3018 4.04102C11.4898 3.96002 11.7087 4.00169 11.8535 4.14648C11.9983 4.29128 12.04 4.51017 11.959 4.69824L10.3242 8.49414C9.97043 9.31561 9.31561 9.97043 8.49414 10.3242L4.69824 11.959C4.51017 12.04 4.29128 11.9983 4.14648 11.8535C4.00169 11.7087 3.96002 11.4898 4.04102 11.3018L5.67578 7.50586C6.02957 6.68439 6.68439 6.02957 7.50586 5.67578L11.3018 4.04102ZM8 7C7.44772 7 7 7.44772 7 8C7 8.55228 7.44772 9 8 9C8.55228 9 9 8.55228 9 8C9 7.44772 8.55228 7 8 7Z" fill="currentColor" style={{
      fill: "currentColor",
      fillOpacity: 1
    }} /></svg>;
});
export default IconCompass2;
