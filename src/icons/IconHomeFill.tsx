import * as React from 'react';
import type { IconProps } from './types';
const IconHomeFill = React.forwardRef<SVGSVGElement, IconProps>(function IconHomeFill(props, ref) {
  const idPrefix = React.useId().replace(/[^a-zA-Z0-9_-]/g, '') + '-';
  const {
    size = 16,
    color,
    title,
    ...svgProps
  } = props;
  return <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...svgProps} ref={ref} width={svgProps["width"] ?? size} height={svgProps["height"] ?? size} color={color} aria-labelledby={svgProps["aria-labelledby"] ?? (title ? idPrefix + "title" : undefined)} aria-label={svgProps["aria-label"] ?? title} role={svgProps["role"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? "img" : undefined)} aria-hidden={svgProps["aria-hidden"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? undefined : true)}>{title ? <title id={idPrefix + "title"}>{title}</title> : null}<path d="M7.15918 2.08918C7.63595 1.65583 8.36408 1.65581 8.84082 2.08918L13.4951 6.3216C13.8158 6.61329 13.9989 7.02676 13.999 7.46027V7.50128C13.999 8.15347 13.5815 8.70633 13 8.91242V12.0003C13 13.1048 12.1045 14.0002 11 14.0003H10.249C9.83478 14.0003 9.49894 13.6646 9.49902 13.2503V11.0003C9.4989 10.172 8.82739 9.50031 7.99902 9.50031C7.17101 9.50057 6.49931 10.1723 6.49902 11.0003V13.2513C6.4987 13.6653 6.16304 14.0003 5.74902 14.0003H5C3.89543 14.0001 2.99983 13.1049 3 12.0003V8.91242C2.41776 8.70607 2 8.15232 2 7.49933V7.46027C2.00014 7.02675 2.18315 6.61325 2.50391 6.3216L7.15918 2.08918Z" fill="#0C0C0C" style={{
      fill: "color(display-p3 0.0469 0.0469 0.0469)",
      fillOpacity: 1
    }} /></svg>;
});
export default IconHomeFill;
