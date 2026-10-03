import * as React from 'react';
import type { IconProps } from './types';
const IconArrowRepeat = React.forwardRef<SVGSVGElement, IconProps>(function IconArrowRepeat(props, ref) {
  const idPrefix = React.useId().replace(/[^a-zA-Z0-9_-]/g, '') + '-';
  const {
    size = 16,
    color,
    title,
    ...svgProps
  } = props;
  return <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...svgProps} ref={ref} width={svgProps["width"] ?? size} height={svgProps["height"] ?? size} color={color} aria-labelledby={svgProps["aria-labelledby"] ?? (title ? idPrefix + "title" : undefined)} aria-label={svgProps["aria-label"] ?? title} role={svgProps["role"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? "img" : undefined)} aria-hidden={svgProps["aria-hidden"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? undefined : true)}>{title ? <title id={idPrefix + "title"}>{title}</title> : null}<path d="M12.4999 7.99958C12.7758 7.99958 12.9996 8.22365 12.9999 8.49958C12.9999 10.4326 11.4329 11.9996 9.49986 11.9996H3.99986V13.3961C3.99986 13.6188 3.73059 13.7303 3.5731 13.5728L1.67662 11.6763C1.57923 11.5787 1.57907 11.4204 1.67662 11.3228L3.5731 9.42634C3.73063 9.26921 3.99986 9.38146 3.99986 9.60407V10.9996H9.49986C10.8806 10.9996 11.9999 9.88029 11.9999 8.49958C12.0001 8.22365 12.2239 7.99958 12.4999 7.99958ZM11.9999 2.60407C11.9999 2.38146 12.2691 2.2692 12.4266 2.42634L14.3231 4.32282C14.4207 4.42037 14.4205 4.57868 14.3231 4.67634L12.4266 6.57282C12.2691 6.73031 11.9999 6.61879 11.9999 6.39606V4.99958H6.49986C5.1193 4.99958 4.00011 6.11908 3.99986 7.49958C3.99986 7.77572 3.776 7.99957 3.49986 7.99958C3.22372 7.99958 2.99986 7.77572 2.99986 7.49958C3.00011 5.56679 4.56702 3.99958 6.49986 3.99958H11.9999V2.60407Z" fill="currentColor" style={{
      fill: "currentColor",
      fillOpacity: 1
    }} /></svg>;
});
export default IconArrowRepeat;
