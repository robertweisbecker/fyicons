import * as React from 'react';
import type { IconProps } from './types';
const IconCircleUser = React.forwardRef<SVGSVGElement, IconProps>(function IconCircleUser(props, ref) {
  const idPrefix = React.useId().replace(/[^a-zA-Z0-9_-]/g, '') + '-';
  const {
    size = 16,
    color,
    title,
    ...svgProps
  } = props;
  return <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...svgProps} ref={ref} width={svgProps["width"] ?? size} height={svgProps["height"] ?? size} color={color} aria-labelledby={svgProps["aria-labelledby"] ?? (title ? idPrefix + "title" : undefined)} aria-label={svgProps["aria-label"] ?? title} role={svgProps["role"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? "img" : undefined)} aria-hidden={svgProps["aria-hidden"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? undefined : true)}>{title ? <title id={idPrefix + "title"}>{title}</title> : null}<path d="M8 0.999817C11.8659 0.999817 14.9999 4.13391 15 7.99982C15 11.8658 11.866 14.9998 8 14.9998C4.13401 14.9998 1 11.8658 1 7.99982C1.00011 4.13391 4.13407 0.999817 8 0.999817ZM7.99902 10.4998C7.60508 10.4998 7.21454 10.5776 6.85059 10.7283C6.4868 10.8791 6.15639 11.1003 5.87793 11.3787C5.5995 11.6572 5.3783 11.9876 5.22754 12.3514C5.1148 12.6236 5.04277 12.9107 5.01367 13.2029C5.89332 13.7089 6.91237 13.9998 8 13.9998C9.08654 13.9998 10.1043 13.709 10.9834 13.2039C10.9544 12.9114 10.8834 12.6238 10.7705 12.3514C10.6197 11.9876 10.3986 11.6572 10.1201 11.3787C9.84166 11.1003 9.51124 10.8791 9.14746 10.7283C8.7835 10.5776 8.39296 10.4998 7.99902 10.4998ZM8 1.99982C4.68636 1.99982 2.00011 4.6862 2 7.99982C2 9.82894 2.81966 11.4657 4.11035 12.5662C4.15919 12.3632 4.22343 12.1634 4.30371 11.9695C4.50473 11.4843 4.79951 11.0431 5.1709 10.6717C5.47919 10.3634 5.83588 10.1087 6.22559 9.91583C5.48331 9.36971 5 8.49202 5 7.49982C5.00011 5.84305 6.34321 4.49982 8 4.49982C9.65679 4.49982 10.9999 5.84305 11 7.49982C11 8.49259 10.5155 9.36978 9.77246 9.91583C10.1622 10.1087 10.5189 10.3634 10.8271 10.6717C11.1985 11.0431 11.4933 11.4843 11.6943 11.9695C11.7747 12.1636 11.8379 12.3639 11.8867 12.5672C13.1787 11.4667 14 9.82997 14 7.99982C13.9999 4.6862 11.3136 1.99982 8 1.99982ZM8 5.49982C6.8955 5.49982 6.00011 6.39534 6 7.49982C6 8.60439 6.89543 9.49982 8 9.49982C9.10457 9.49982 10 8.60439 10 7.49982C9.99989 6.39534 9.1045 5.49982 8 5.49982Z" fill="currentColor" style={{
      fill: "currentColor",
      fillOpacity: 1
    }} /></svg>;
});
export default IconCircleUser;
