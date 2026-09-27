import * as React from 'react';
import type { IconProps } from './types';
const IconGaugeHigh = React.forwardRef<SVGSVGElement, IconProps>(function IconGaugeHigh(props, ref) {
  const idPrefix = React.useId().replace(/[^a-zA-Z0-9_-]/g, '') + '-';
  const {
    size = 16,
    color,
    title,
    ...svgProps
  } = props;
  return <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...svgProps} ref={ref} width={svgProps["width"] ?? size} height={svgProps["height"] ?? size} color={color} aria-labelledby={svgProps["aria-labelledby"] ?? (title ? idPrefix + "title" : undefined)} aria-label={svgProps["aria-label"] ?? title} role={svgProps["role"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? "img" : undefined)} aria-hidden={svgProps["aria-hidden"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? undefined : true)}>{title ? <title id={idPrefix + "title"}>{title}</title> : null}<path d="M7.99967 1C9.38404 1 10.7372 1.41062 11.8883 2.17969C13.0395 2.94884 13.9366 4.04223 14.4665 5.32129C14.9962 6.60027 15.1349 8.00747 14.8649 9.36523C14.5948 10.7231 13.9288 11.9712 12.9499 12.9502C12.7546 13.1455 12.4371 13.1455 12.2419 12.9502C12.0466 12.7549 12.0466 12.4374 12.2419 12.2422C13.0809 11.4032 13.6529 10.3347 13.8844 9.1709C14.1159 8.00703 13.9967 6.80044 13.5426 5.7041C13.0885 4.60775 12.3194 3.67003 11.3327 3.01074C10.3461 2.35167 9.18616 2 7.99967 2C6.81318 2 5.65325 2.35167 4.66666 3.01074C3.67997 3.67003 2.91082 4.60775 2.4567 5.7041C2.00259 6.80044 1.88339 8.00704 2.1149 9.1709C2.34645 10.3347 2.91844 11.4032 3.75748 12.2422C3.95274 12.4374 3.95274 12.7549 3.75748 12.9502C3.56222 13.1455 3.24473 13.1455 3.04947 12.9502C2.0705 11.9712 1.40453 10.7231 1.13443 9.36523C0.864424 8.00747 1.0031 6.60027 1.53287 5.32129C2.06269 4.04224 2.95987 2.94884 4.11099 2.17969C5.26209 1.41062 6.61529 1 7.99967 1ZM11.1462 6.14648C11.3414 5.95122 11.6579 5.95122 11.8532 6.14648C12.0484 6.34175 12.0484 6.65825 11.8532 6.85352L8.96451 9.74121C8.9866 9.8238 8.99965 9.91046 8.99967 10C8.99955 10.5522 8.55188 11 7.99967 11C7.44748 11 6.99978 10.5522 6.99967 10C6.99977 9.44783 7.44748 9.00003 7.99967 9C8.08886 9 8.17518 9.01226 8.25748 9.03418L11.1462 6.14648Z" fill="currentColor" style={{
      fill: "currentColor",
      fillOpacity: 1
    }} /></svg>;
});
export default IconGaugeHigh;
