import * as React from 'react';
import type { IconProps } from './types';
const IconPencilTip = React.forwardRef<SVGSVGElement, IconProps>(function IconPencilTip(props, ref) {
  const idPrefix = React.useId().replace(/[^a-zA-Z0-9_-]/g, '') + '-';
  const {
    size = 16,
    color,
    title,
    ...svgProps
  } = props;
  return <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...svgProps} ref={ref} width={svgProps["width"] ?? size} height={svgProps["height"] ?? size} color={color} aria-labelledby={svgProps["aria-labelledby"] ?? (title ? idPrefix + "title" : undefined)} aria-label={svgProps["aria-label"] ?? title} role={svgProps["role"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? "img" : undefined)} aria-hidden={svgProps["aria-hidden"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? undefined : true)}>{title ? <title id={idPrefix + "title"}>{title}</title> : null}<path opacity={0.5} d="M5.75 6H10.25L8 1.5L5.75 6Z" fill="currentColor" style={{
      fill: "currentColor",
      fillOpacity: 1
    }} /><path d="M8 0.999939C8.19411 0.999939 8.37089 1.11222 8.45312 1.28802L11.9531 8.78802L12 8.88861V14.4999C12 14.7761 11.7761 14.9999 11.5 14.9999H4.5C4.22386 14.9999 4 14.7761 4 14.4999V8.88861L4.04688 8.78802L7.54688 1.28802L7.58203 1.22552C7.67355 1.0861 7.83005 0.999939 8 0.999939ZM8.29785 11.1874L8 11.5771L7.70215 11.1874L6.35645 9.42963L5 9.80853V13.9999H11V9.80853L9.64258 9.42963L8.29785 11.1874ZM9.49316 6.48138C9.09947 6.61259 8.55658 6.75092 8 6.75092C7.44342 6.75092 6.90053 6.61259 6.50684 6.48138C6.41989 6.4524 6.3397 6.42206 6.2666 6.39447L5.04297 9.01752L6.39844 8.63861L6.64355 8.57025L6.79785 8.7724L8 10.3427L9.20215 8.7724L9.35645 8.57025L9.60156 8.63861L10.9561 9.01752L9.73242 6.39447C9.65955 6.42196 9.57977 6.45252 9.49316 6.48138ZM6.58496 5.71283C6.6346 5.7311 6.68704 5.75174 6.74316 5.77045C7.09945 5.88921 7.55672 6.00092 8 6.00092C8.44328 6.00092 8.90055 5.88921 9.25684 5.77045C9.31252 5.75188 9.36476 5.73194 9.41406 5.71381L8 2.68256L6.58496 5.71283Z" fill="currentColor" style={{
      fill: "currentColor",
      fillOpacity: 1
    }} /></svg>;
});
export default IconPencilTip;
