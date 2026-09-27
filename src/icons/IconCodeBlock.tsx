import * as React from 'react';
import type { IconProps } from './types';
const IconCodeBlock = React.forwardRef<SVGSVGElement, IconProps>(function IconCodeBlock(props, ref) {
  const idPrefix = React.useId().replace(/[^a-zA-Z0-9_-]/g, '') + '-';
  const {
    size = 16,
    color,
    title,
    ...svgProps
  } = props;
  return <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...svgProps} ref={ref} width={svgProps["width"] ?? size} height={svgProps["height"] ?? size} color={color} aria-labelledby={svgProps["aria-labelledby"] ?? (title ? idPrefix + "title" : undefined)} aria-label={svgProps["aria-label"] ?? title} role={svgProps["role"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? "img" : undefined)} aria-hidden={svgProps["aria-hidden"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? undefined : true)}>{title ? <title id={idPrefix + "title"}>{title}</title> : null}<path d="M12 2C13.1046 2 14 2.89543 14 4V12C14 13.1046 13.1046 14 12 14H4C2.89556 13.9999 2.00001 13.1045 2 12V8.5C2 8.22395 2.22398 8.00015 2.5 8C2.77614 8 3 8.22386 3 8.5V12C3.00001 12.5522 3.44785 12.9999 4 13H12C12.5523 13 13 12.5523 13 12V4C13 3.44772 12.5523 3 12 3H9.5C9.22399 2.99985 9.00001 2.77604 9 2.5C9 2.22395 9.22398 2.00015 9.5 2H12ZM2.08691 2.22266C2.24012 1.99298 2.55055 1.93083 2.78027 2.08398C3.00994 2.23715 3.07201 2.54762 2.91895 2.77734L2.10352 4L2.91895 5.22266C3.07207 5.45237 3.00992 5.76281 2.78027 5.91602C2.55052 6.06919 2.2401 6.00709 2.08691 5.77734L1.08691 4.27734C0.974948 4.10939 0.974948 3.89061 1.08691 3.72266L2.08691 2.22266ZM5.22559 2.08398C5.45534 1.93092 5.7658 1.99294 5.91895 2.22266L6.91895 3.72266C7.03087 3.89057 7.03083 4.10942 6.91895 4.27734L5.91895 5.77734C5.76579 6.00708 5.45534 6.06913 5.22559 5.91602C4.99582 5.76284 4.93374 5.45242 5.08691 5.22266L5.90234 4L5.08691 2.77734C4.93374 2.54758 4.99582 2.23716 5.22559 2.08398Z" fill="currentColor" style={{
      fill: "currentColor",
      fillOpacity: 1
    }} /></svg>;
});
export default IconCodeBlock;
