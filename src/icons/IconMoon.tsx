import * as React from 'react';
import type { IconProps } from './types';
const IconMoon = React.forwardRef<SVGSVGElement, IconProps>(function IconMoon(props, ref) {
  const idPrefix = React.useId().replace(/[^a-zA-Z0-9_-]/g, '') + '-';
  const {
    size = 16,
    color,
    title,
    ...svgProps
  } = props;
  return <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...svgProps} ref={ref} width={svgProps["width"] ?? size} height={svgProps["height"] ?? size} color={color} aria-labelledby={svgProps["aria-labelledby"] ?? (title ? idPrefix + "title" : undefined)} aria-label={svgProps["aria-label"] ?? title} role={svgProps["role"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? "img" : undefined)} aria-hidden={svgProps["aria-hidden"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? undefined : true)}>{title ? <title id={idPrefix + "title"}>{title}</title> : null}<path d="M6.62598 1.13538C6.82568 1.09563 7.02975 1.18105 7.1416 1.3512C7.25332 1.52136 7.25044 1.7423 7.13477 1.90979C6.577 2.71636 6.25007 3.69425 6.25 4.74963C6.25 7.51106 8.48858 9.74963 11.25 9.74963C12.3054 9.74963 13.2829 9.42203 14.0898 8.86389C14.2573 8.74821 14.4783 8.74539 14.6484 8.85706C14.8186 8.96882 14.9039 9.17297 14.8643 9.37268C14.2259 12.5811 11.3965 14.9996 8 14.9996C4.13401 14.9996 1 11.8656 1 7.99963C1.00017 4.60368 3.41819 1.77415 6.62598 1.13538ZM5.70508 2.45569C3.53029 3.35675 2.00014 5.49948 2 7.99963C2 11.3133 4.68629 13.9996 8 13.9996C10.5008 13.9996 12.6423 12.4683 13.543 10.2926C12.8364 10.5857 12.0624 10.7496 11.25 10.7496C7.93629 10.7496 5.25 8.06334 5.25 4.74963C5.25005 3.93744 5.41214 3.16247 5.70508 2.45569Z" fill="currentColor" style={{
      fill: "currentColor",
      fillOpacity: 1
    }} /></svg>;
});
export default IconMoon;
