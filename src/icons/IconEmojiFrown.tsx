import * as React from 'react';
import type { IconProps } from './types';
const IconEmojiFrown = React.forwardRef<SVGSVGElement, IconProps>(function IconEmojiFrown(props, ref) {
  const idPrefix = React.useId().replace(/[^a-zA-Z0-9_-]/g, '') + '-';
  const {
    size = 16,
    color,
    title,
    ...svgProps
  } = props;
  return <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...svgProps} ref={ref} width={svgProps["width"] ?? size} height={svgProps["height"] ?? size} color={color} aria-labelledby={svgProps["aria-labelledby"] ?? (title ? idPrefix + "title" : undefined)} aria-label={svgProps["aria-label"] ?? title} role={svgProps["role"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? "img" : undefined)} aria-hidden={svgProps["aria-hidden"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? undefined : true)}>{title ? <title id={idPrefix + "title"}>{title}</title> : null}<path d="M8 1C11.866 1 15 4.13401 15 8C15 11.866 11.866 15 8 15C4.13401 15 1 11.866 1 8C1 4.13401 4.13401 1 8 1ZM8 2C4.68629 2 2 4.68629 2 8C2 11.3137 4.68629 14 8 14C11.3137 14 14 11.3137 14 8C14 4.68629 11.3137 2 8 2ZM8 10C9.06087 10 10.078 10.4217 10.8281 11.1719C11.0234 11.3671 11.0234 11.6836 10.8281 11.8789C10.6328 12.0739 10.3163 12.0741 10.1211 11.8789C9.55849 11.3163 8.79565 11 8 11C7.20435 11 6.44152 11.3163 5.87891 11.8789C5.68373 12.0741 5.36716 12.0739 5.17188 11.8789C4.97661 11.6836 4.97661 11.3671 5.17188 11.1719C5.92202 10.4217 6.93913 10 8 10ZM5.875 6C6.35818 6 6.74989 6.44783 6.75 7C6.75 7.55228 6.35825 8 5.875 8C5.39175 8 5 7.55228 5 7C5.00011 6.44783 5.39182 6 5.875 6ZM10.125 6C10.6082 6 10.9999 6.44783 11 7C11 7.55228 10.6082 8 10.125 8C9.64175 8 9.25 7.55228 9.25 7C9.25011 6.44783 9.64182 6 10.125 6Z" fill="currentColor" style={{
      fill: "currentColor",
      fillOpacity: 1
    }} /></svg>;
});
export default IconEmojiFrown;
