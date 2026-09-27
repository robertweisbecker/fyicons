import * as React from 'react';
import type { IconProps } from './types';
const IconLayers = React.forwardRef<SVGSVGElement, IconProps>(function IconLayers(props, ref) {
  const idPrefix = React.useId().replace(/[^a-zA-Z0-9_-]/g, '') + '-';
  const {
    size = 16,
    color,
    title,
    ...svgProps
  } = props;
  return <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...svgProps} ref={ref} width={svgProps["width"] ?? size} height={svgProps["height"] ?? size} color={color} aria-labelledby={svgProps["aria-labelledby"] ?? (title ? idPrefix + "title" : undefined)} aria-label={svgProps["aria-label"] ?? title} role={svgProps["role"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? "img" : undefined)} aria-hidden={svgProps["aria-hidden"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? undefined : true)}>{title ? <title id={idPrefix + "title"}>{title}</title> : null}<path d="M6.71387 2.4386C7.50543 1.96374 8.49454 1.96383 9.28613 2.4386L13.4355 4.92786C14.2447 5.41336 14.2447 6.58688 13.4355 7.07239L11.8887 8.00012L13.4336 8.92786C14.2427 9.41332 14.2426 10.5868 13.4336 11.0724L9.28418 13.5616C8.49263 14.0363 7.50339 14.0365 6.71191 13.5616L2.5625 11.0724C1.75369 10.5869 1.75385 9.41349 2.5625 8.92786L4.1084 7.99817L2.56445 7.07239C1.75558 6.58686 1.75562 5.41342 2.56445 4.92786L6.71387 2.4386ZM3.07715 9.78528C2.91584 9.88251 2.91568 10.1179 3.07715 10.215L7.22656 12.7042C7.70129 12.9889 8.29473 12.9887 8.76953 12.7042L12.9189 10.215C13.0806 10.1178 13.0807 9.88234 12.9189 9.78528L10.916 8.58313L9.28613 9.56165C8.49455 10.0364 7.50541 10.0365 6.71387 9.56165L5.08008 8.58118L3.07715 9.78528ZM8.77148 3.29602C8.29664 3.01137 7.70332 3.01129 7.22852 3.29602L3.0791 5.78528C2.91761 5.88244 2.91757 6.11784 3.0791 6.21497L7.22852 8.70422C7.7033 8.98895 8.29666 8.98884 8.77148 8.70422L12.9209 6.21497C13.0827 6.11786 13.0827 5.88238 12.9209 5.78528L8.77148 3.29602Z" fill="currentColor" style={{
      fill: "currentColor",
      fillOpacity: 1
    }} /></svg>;
});
export default IconLayers;
