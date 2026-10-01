import * as React from 'react';
import type { IconProps } from './types';
const IconHome3Fill = React.forwardRef<SVGSVGElement, IconProps>(function IconHome3Fill(props, ref) {
  const idPrefix = React.useId().replace(/[^a-zA-Z0-9_-]/g, '') + '-';
  const {
    size = 16,
    color,
    title,
    ...svgProps
  } = props;
  return <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...svgProps} ref={ref} width={svgProps["width"] ?? size} height={svgProps["height"] ?? size} color={color} aria-labelledby={svgProps["aria-labelledby"] ?? (title ? idPrefix + "title" : undefined)} aria-label={svgProps["aria-label"] ?? title} role={svgProps["role"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? "img" : undefined)} aria-hidden={svgProps["aria-hidden"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? undefined : true)}>{title ? <title id={idPrefix + "title"}>{title}</title> : null}<path d="M13.5 12.0003V8.00025L13.8095 8.0003C14.1903 8.00036 14.499 7.6917 14.499 7.31092C14.499 7.11346 14.4144 6.92548 14.2665 6.79464L8.49695 1.68971C8.21321 1.43865 7.78678 1.43863 7.50301 1.68967L1.73247 6.79474C1.58465 6.92552 1.5 7.11342 1.5 7.3108C1.5 7.6914 1.8086 7.99992 2.1892 7.99981L2.50098 7.99973L2.50027 12C2.50012 12.8285 3.17166 13.5002 4.00015 13.5002L5.49906 13.5004C5.77519 13.5004 5.99906 13.2766 5.9991 13.0004L5.99958 9.99968C5.99975 8.89524 6.89513 8 7.99958 8C9.10427 8 9.99975 8.89562 9.99958 10.0003L9.9991 13.0003C9.99906 13.2765 10.2229 13.5004 10.4991 13.5004L12.0001 13.5003C12.8285 13.5003 13.5 12.8287 13.5 12.0003Z" fill="currentColor" stroke="currentColor" style={{
      fill: "currentColor",
      fillOpacity: 1,
      stroke: "currentColor",
      strokeOpacity: 1
    }} strokeLinecap="round" /></svg>;
});
export default IconHome3Fill;
