import * as React from 'react';
import type { IconProps } from './types';
const IconHomeSimple = React.forwardRef<SVGSVGElement, IconProps>(function IconHomeSimple(props, ref) {
  const idPrefix = React.useId().replace(/[^a-zA-Z0-9_-]/g, '') + '-';
  const {
    size = 16,
    color,
    title,
    ...svgProps
  } = props;
  return <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...svgProps} ref={ref} width={svgProps["width"] ?? size} height={svgProps["height"] ?? size} color={color} aria-labelledby={svgProps["aria-labelledby"] ?? (title ? idPrefix + "title" : undefined)} aria-label={svgProps["aria-label"] ?? title} role={svgProps["role"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? "img" : undefined)} aria-hidden={svgProps["aria-hidden"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? undefined : true)}>{title ? <title id={idPrefix + "title"}>{title}</title> : null}<path d="M6.89355 1.96593C7.48798 1.318 8.51007 1.318 9.10449 1.96593L13.6045 6.87511C13.8582 7.15183 13.9989 7.51393 13.999 7.88878V12.5001L13.9912 12.6534C13.9143 13.4096 13.2757 14.0001 12.499 14.0001H9.49902C9.22288 14.0001 8.99902 13.7763 8.99902 13.5001V9.00011H6.99902V13.5001C6.99902 13.7763 6.77517 14.0001 6.49902 14.0001H3.49902C2.7223 14.0001 2.08374 13.4096 2.00684 12.6534L1.99902 12.5001V7.88878C1.99914 7.51393 2.1399 7.15183 2.39355 6.87511L6.89355 1.96593ZM8.36816 2.64171C8.17003 2.42582 7.82801 2.42582 7.62988 2.64171L3.12988 7.55089C3.04576 7.64278 2.99913 7.76368 2.99902 7.88878V12.5001C2.99915 12.7763 3.22312 13.0001 3.49902 13.0001H5.99902V9.00011C5.99922 8.448 6.44686 8.00011 6.99902 8.00011H8.99902C9.55119 8.00011 9.99883 8.448 9.99902 9.00011V13.0001H12.499C12.7749 13.0001 12.9989 12.7763 12.999 12.5001V7.88878L12.9902 7.79601C12.973 7.70516 12.9312 7.61975 12.8682 7.55089L8.36816 2.64171Z" fill="currentColor" style={{
      fill: "currentColor",
      fillOpacity: 1
    }} /></svg>;
});
export default IconHomeSimple;
