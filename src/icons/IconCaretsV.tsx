import * as React from 'react';
import type { IconProps } from './types';
const IconCaretsV = React.forwardRef<SVGSVGElement, IconProps>(function IconCaretsV(props, ref) {
  const idPrefix = React.useId().replace(/[^a-zA-Z0-9_-]/g, '') + '-';
  const {
    size = 16,
    color,
    title,
    ...svgProps
  } = props;
  return <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...svgProps} ref={ref} width={svgProps["width"] ?? size} height={svgProps["height"] ?? size} color={color} aria-labelledby={svgProps["aria-labelledby"] ?? (title ? idPrefix + "title" : undefined)} aria-label={svgProps["aria-label"] ?? title} role={svgProps["role"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? "img" : undefined)} aria-hidden={svgProps["aria-hidden"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? undefined : true)}>{title ? <title id={idPrefix + "title"}>{title}</title> : null}<path d="M10.2925 10.8254C10.5705 10.5011 10.3401 10 9.91289 10H6.08711C5.65993 10 5.42948 10.5011 5.70748 10.8254L7.62037 13.0571C7.81992 13.2899 8.18008 13.2899 8.37963 13.0571L10.2925 10.8254ZM10.2925 5.1746C10.5705 5.49894 10.3401 6 9.91289 6H6.08711C5.65993 6 5.42948 5.49894 5.70748 5.1746L7.62037 2.9429C7.81992 2.71009 8.18008 2.71009 8.37963 2.9429L10.2925 5.1746Z" fill="currentColor" style={{
      fill: "currentColor",
      fillOpacity: 1
    }} /></svg>;
});
export default IconCaretsV;
