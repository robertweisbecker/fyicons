import * as React from 'react';
import type { IconProps } from './types';
const IconStar = React.forwardRef<SVGSVGElement, IconProps>(function IconStar(props, ref) {
  const idPrefix = React.useId().replace(/[^a-zA-Z0-9_-]/g, '') + '-';
  const {
    size = 16,
    color,
    title,
    ...svgProps
  } = props;
  return <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...svgProps} ref={ref} width={svgProps["width"] ?? size} height={svgProps["height"] ?? size} color={color} aria-labelledby={svgProps["aria-labelledby"] ?? (title ? idPrefix + "title" : undefined)} aria-label={svgProps["aria-label"] ?? title} role={svgProps["role"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? "img" : undefined)} aria-hidden={svgProps["aria-hidden"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? undefined : true)}>{title ? <title id={idPrefix + "title"}>{title}</title> : null}<path d="M7.07703 1.64997C7.42081 0.834195 8.57701 0.835358 8.92078 1.64997L10.2753 4.86676L13.7528 5.16071C14.5797 5.23077 14.9451 6.20134 14.4364 6.79938L14.3231 6.91364L11.6815 9.19489L12.4784 12.5953V12.5963C12.6789 13.4578 11.7437 14.1354 10.9872 13.6793H10.9862L7.99891 11.8716L5.01258 13.6793C4.25442 14.1369 3.32059 13.4557 3.52137 12.5953L4.31531 9.19587L1.67469 6.91462C1.00559 6.3353 1.3646 5.23695 2.245 5.16169L5.72156 4.86676L7.07703 1.64997ZM6.52625 5.53376L6.40906 5.81208L6.10731 5.83747L2.32899 6.15778V6.15876L5.1991 8.63825L5.42762 8.83551L5.35926 9.13044L4.49598 12.8228L7.74012 10.8599L7.99891 10.7037L8.2577 10.8599L11.5028 12.8228L10.6386 9.12946L10.5702 8.83454L10.7987 8.63727L13.6688 6.15778V6.1568L9.88953 5.83747L9.58778 5.81208L9.47059 5.53376L7.99891 2.03864L6.52625 5.53376Z" fill="currentColor" style={{
      fill: "currentColor",
      fillOpacity: 1
    }} /></svg>;
});
export default IconStar;
