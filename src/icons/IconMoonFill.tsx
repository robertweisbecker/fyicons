import * as React from 'react';
import type { IconProps } from './types';
const IconMoonFill = React.forwardRef<SVGSVGElement, IconProps>(function IconMoonFill(props, ref) {
  const idPrefix = React.useId().replace(/[^a-zA-Z0-9_-]/g, '') + '-';
  const {
    size = 16,
    color,
    title,
    ...svgProps
  } = props;
  return <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...svgProps} ref={ref} width={svgProps["width"] ?? size} height={svgProps["height"] ?? size} color={color} aria-labelledby={svgProps["aria-labelledby"] ?? (title ? idPrefix + "title" : undefined)} aria-label={svgProps["aria-label"] ?? title} role={svgProps["role"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? "img" : undefined)} aria-hidden={svgProps["aria-hidden"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? undefined : true)}>{title ? <title id={idPrefix + "title"}>{title}</title> : null}<path d="M6.99512 2.08546C7.20234 2.0506 7.409 2.14976 7.5127 2.33253C7.61629 2.51545 7.59448 2.74393 7.45801 2.90382C6.86077 3.60296 6.50011 4.50857 6.5 5.49952C6.5 7.70866 8.29086 9.49952 10.5 9.49952C11.4911 9.49952 12.3962 9.13828 13.0957 8.54054C13.2554 8.40415 13.4841 8.38163 13.667 8.48487C13.8499 8.58845 13.9488 8.79617 13.9141 9.00343C13.4359 11.8388 10.9721 13.9995 8 13.9995C4.68629 13.9995 2 11.3132 2 7.99952C2.00023 5.02808 4.16042 2.56402 6.99512 2.08546Z" fill="currentColor" style={{
      fill: "currentColor",
      fillOpacity: 1
    }} /></svg>;
});
export default IconMoonFill;
