import * as React from 'react';
import type { IconProps } from './types';
const IconFastForwardFill = React.forwardRef<SVGSVGElement, IconProps>(function IconFastForwardFill(props, ref) {
  const idPrefix = React.useId().replace(/[^a-zA-Z0-9_-]/g, '') + '-';
  const {
    size = 16,
    color,
    title,
    ...svgProps
  } = props;
  return <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...svgProps} ref={ref} width={svgProps["width"] ?? size} height={svgProps["height"] ?? size} color={color} aria-labelledby={svgProps["aria-labelledby"] ?? (title ? idPrefix + "title" : undefined)} aria-label={svgProps["aria-label"] ?? title} role={svgProps["role"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? "img" : undefined)} aria-hidden={svgProps["aria-hidden"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? undefined : true)}>{title ? <title id={idPrefix + "title"}>{title}</title> : null}<path d="M8 5.00475C8 4.33179 8.72491 3.90738 9.31152 4.23717L14.6357 7.23034C15.234 7.56666 15.2337 8.42801 14.6357 8.76452L9.31152 11.7587C8.72491 12.0885 8 11.664 8 10.9911V8.37487C7.9267 8.53167 7.80715 8.67158 7.63672 8.76745L2.31152 11.7626C1.72492 12.0925 1 11.668 1 10.995V5.00475C1 4.33171 1.72491 3.90818 2.31152 4.23815L7.63672 7.23327C7.80663 7.32892 7.92669 7.4676 8 7.62389V5.00475Z" fill="currentColor" style={{
      fill: "currentColor",
      fillOpacity: 1
    }} /></svg>;
});
export default IconFastForwardFill;
