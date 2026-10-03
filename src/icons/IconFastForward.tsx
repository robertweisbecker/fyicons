import * as React from 'react';
import type { IconProps } from './types';
const IconFastForward = React.forwardRef<SVGSVGElement, IconProps>(function IconFastForward(props, ref) {
  const idPrefix = React.useId().replace(/[^a-zA-Z0-9_-]/g, '') + '-';
  const {
    size = 16,
    color,
    title,
    ...svgProps
  } = props;
  return <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...svgProps} ref={ref} width={svgProps["width"] ?? size} height={svgProps["height"] ?? size} color={color} aria-labelledby={svgProps["aria-labelledby"] ?? (title ? idPrefix + "title" : undefined)} aria-label={svgProps["aria-label"] ?? title} role={svgProps["role"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? "img" : undefined)} aria-hidden={svgProps["aria-hidden"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? undefined : true)}>{title ? <title id={idPrefix + "title"}>{title}</title> : null}<path d="M7.5 5.0293C7.5 4.29887 8.27908 3.83264 8.92285 4.17773L14.4648 7.14844C15.1445 7.51282 15.1446 8.48719 14.4648 8.85156L8.92285 11.8223C8.27911 12.1673 7.50005 11.7011 7.5 10.9707V9.10059L2.42285 11.8223C1.7791 12.1673 1.00003 11.7011 1 10.9707V5.0293C1 4.29887 1.77908 3.83264 2.42285 4.17773L7.5 6.89844V5.0293ZM2 10.9141L7.4375 8L2 5.08496V10.9141ZM8.5 10.9141L13.9375 8L8.5 5.08496V10.9141Z" fill="currentColor" style={{
      fill: "currentColor",
      fillOpacity: 1
    }} /></svg>;
});
export default IconFastForward;
