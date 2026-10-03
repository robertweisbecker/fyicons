import * as React from 'react';
import type { IconProps } from './types';
const IconPaintCan = React.forwardRef<SVGSVGElement, IconProps>(function IconPaintCan(props, ref) {
  const idPrefix = React.useId().replace(/[^a-zA-Z0-9_-]/g, '') + '-';
  const {
    size = 16,
    color,
    title,
    ...svgProps
  } = props;
  return <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...svgProps} ref={ref} width={svgProps["width"] ?? size} height={svgProps["height"] ?? size} color={color} aria-labelledby={svgProps["aria-labelledby"] ?? (title ? idPrefix + "title" : undefined)} aria-label={svgProps["aria-label"] ?? title} role={svgProps["role"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? "img" : undefined)} aria-hidden={svgProps["aria-hidden"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? undefined : true)}>{title ? <title id={idPrefix + "title"}>{title}</title> : null}<path d="M12.0495 10.2745C12.2938 10.0197 12.7056 10.0198 12.9499 10.2745L12.9997 10.3331L13.5993 11.1329C13.8822 11.51 14.1459 11.9665 14.2761 12.4552C14.408 12.9502 14.408 13.5042 14.1208 14.0245C13.8417 14.5298 13.3333 15.0001 12.4997 15.0001C11.6662 14.9999 11.1576 14.5299 10.8786 14.0245C10.5916 13.5042 10.5916 12.9502 10.7234 12.4552C10.8535 11.9666 11.1174 11.5109 11.4001 11.1339L11.9997 10.3331L12.0495 10.2745ZM7.22532 2.0821C7.41937 1.95419 7.68346 1.97579 7.85423 2.14656L12.8542 7.14656C13.0492 7.34175 13.0492 7.65837 12.8542 7.85359L7.91477 12.793C7.13382 13.5739 5.86768 13.5738 5.08665 12.793L2.20774 9.91414C1.42685 9.13312 1.42685 7.86703 2.20774 7.08601L7.1472 2.14656L7.22532 2.0821ZM2.91477 7.79304C2.5244 8.18354 2.5244 8.81661 2.91477 9.2071L5.79368 12.086C6.18419 12.4762 6.81731 12.4763 7.20774 12.086L7.79368 11.5001L5.1472 8.85359C4.95193 8.65833 4.95193 8.34182 5.1472 8.14656L7.1472 6.14656L7.22532 6.0821C7.41937 5.95419 7.68346 5.97579 7.85423 6.14656L10.5007 8.79304L11.7937 7.50007L7.50071 3.2071L2.91477 7.79304ZM6.20774 8.50007L8.50071 10.793L9.79368 9.50007L7.50071 7.2071L6.20774 8.50007Z" fill="currentColor" style={{
      fill: "currentColor",
      fillOpacity: 1
    }} /><path d="M9.5 4.5H2.5" stroke="currentColor" style={{
      stroke: "currentColor",
      strokeOpacity: 1
    }} strokeLinecap="round" /></svg>;
});
export default IconPaintCan;
