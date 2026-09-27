import * as React from 'react';
import type { IconProps } from './types';
const IconCoin = React.forwardRef<SVGSVGElement, IconProps>(function IconCoin(props, ref) {
  const idPrefix = React.useId().replace(/[^a-zA-Z0-9_-]/g, '') + '-';
  const {
    size = 16,
    color,
    title,
    ...svgProps
  } = props;
  return <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...svgProps} ref={ref} width={svgProps["width"] ?? size} height={svgProps["height"] ?? size} color={color} aria-labelledby={svgProps["aria-labelledby"] ?? (title ? idPrefix + "title" : undefined)} aria-label={svgProps["aria-label"] ?? title} role={svgProps["role"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? "img" : undefined)} aria-hidden={svgProps["aria-hidden"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? undefined : true)}>{title ? <title id={idPrefix + "title"}>{title}</title> : null}<path d="M8 3C9.71751 3 11.297 3.3473 12.4658 3.93164C13.6048 4.50111 14.5 5.38016 14.5 6.5V9.5C14.5 10.6198 13.6048 11.4989 12.4658 12.0684C11.297 12.6527 9.71751 13 8 13C6.28249 13 4.703 12.6527 3.53418 12.0684C2.39524 11.4989 1.5 10.6198 1.5 9.5V6.5C1.5 5.38016 2.39524 4.50111 3.53418 3.93164C4.703 3.3473 6.28249 3 8 3ZM13.5 8.39551C13.1983 8.65218 12.8462 8.87818 12.4658 9.06836C11.297 9.6527 9.71751 10 8 10C6.28249 10 4.703 9.6527 3.53418 9.06836C3.15382 8.87818 2.80173 8.65218 2.5 8.39551V9.5C2.5 10.037 2.94881 10.6575 3.98145 11.1738C4.98416 11.6751 6.40408 12 8 12C9.59592 12 11.0158 11.6751 12.0186 11.1738C13.0512 10.6575 13.5 10.037 13.5 9.5V8.39551ZM8 4C6.40408 4 4.98416 4.32489 3.98145 4.82617C2.94881 5.34249 2.5 5.96299 2.5 6.5C2.5 7.03701 2.94881 7.65751 3.98145 8.17383C4.98416 8.67511 6.40408 9 8 9C9.59592 9 11.0158 8.67511 12.0186 8.17383C13.0512 7.65751 13.5 7.03701 13.5 6.5C13.5 5.96299 13.0512 5.34249 12.0186 4.82617C11.0158 4.32489 9.59592 4 8 4ZM9.9375 5.50391C10.2113 5.46968 10.4616 5.66374 10.4961 5.9375C10.5303 6.21135 10.3363 6.46161 10.0625 6.49609L6.0625 6.99609C5.78865 7.03032 5.53839 6.83626 5.50391 6.5625C5.46968 6.28865 5.66374 6.03839 5.9375 6.00391L9.9375 5.50391Z" fill="currentColor" style={{
      fill: "currentColor",
      fillOpacity: 1
    }} /></svg>;
});
export default IconCoin;
