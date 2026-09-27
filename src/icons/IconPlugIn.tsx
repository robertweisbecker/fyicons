import * as React from 'react';
import type { IconProps } from './types';
const IconPlugIn = React.forwardRef<SVGSVGElement, IconProps>(function IconPlugIn(props, ref) {
  const idPrefix = React.useId().replace(/[^a-zA-Z0-9_-]/g, '') + '-';
  const {
    size = 16,
    color,
    title,
    ...svgProps
  } = props;
  return <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...svgProps} ref={ref} width={svgProps["width"] ?? size} height={svgProps["height"] ?? size} color={color} aria-labelledby={svgProps["aria-labelledby"] ?? (title ? idPrefix + "title" : undefined)} aria-label={svgProps["aria-label"] ?? title} role={svgProps["role"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? "img" : undefined)} aria-hidden={svgProps["aria-hidden"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? undefined : true)}>{title ? <title id={idPrefix + "title"}>{title}</title> : null}<path d="M7.14543 6.14652C7.34068 5.95136 7.65722 5.95136 7.85247 6.14652C8.04763 6.34176 8.04763 6.65831 7.85247 6.85355L6.70598 8.00003L7.99993 9.293L9.14543 8.14652C9.34057 7.95146 9.65719 7.95168 9.85246 8.14652C10.0475 8.34179 10.0477 8.65932 9.85246 8.85452L8.7011 10.0059C9.20406 10.6239 9.13753 11.5432 8.52434 12.0801L7.19036 13.2461C6.07251 14.2242 4.44851 14.2719 3.2802 13.4268L1.85344 14.8545C1.65829 15.0496 1.34071 15.0494 1.14543 14.8545C0.950213 14.6593 0.950227 14.3418 1.14543 14.1465L2.57219 12.7207C1.72625 11.5524 1.77447 9.92688 2.75286 8.80862L3.91887 7.47464C4.45561 6.86153 5.37511 6.7953 5.99309 7.29788L7.14543 6.14652ZM5.40129 8.10941C5.19676 7.90531 4.86215 7.91636 4.6718 8.13382L3.50481 9.46683C2.76133 10.3167 2.80417 11.5979 3.60247 12.3965C4.40104 13.1949 5.68224 13.2377 6.53215 12.4942L7.86516 11.3272C8.08266 11.1367 8.09399 10.8022 7.88957 10.5977L5.40129 8.10941ZM14.1484 1.14652C14.3437 0.951846 14.6603 0.951454 14.8554 1.14652C15.0502 1.3416 15.05 1.65832 14.8554 1.85355L13.4277 3.28128C14.2805 4.45156 14.2535 6.07699 13.2997 7.22171L12.9609 7.62796C12.4632 8.22519 11.5606 8.26711 11.0107 7.7178L8.28411 4.99124C7.73454 4.44136 7.77573 3.53783 8.37297 3.04007L8.77922 2.70023C9.92376 1.74669 11.5494 1.72178 12.7197 2.57425L14.1484 1.14652ZM12.3974 3.60452C11.5891 2.79652 10.2969 2.73713 9.41887 3.46878L9.01262 3.80862C8.86736 3.92999 8.85743 4.15021 8.99114 4.28421L11.7177 7.01077C11.8517 7.14416 12.072 7.13443 12.1933 6.98929L12.5312 6.58109C13.2626 5.70314 13.2052 4.41272 12.3974 3.60452Z" fill="currentColor" style={{
      fill: "currentColor",
      fillOpacity: 1
    }} /></svg>;
});
export default IconPlugIn;
