import * as React from 'react';
import type { IconProps } from './types';
const IconCaretsH = React.forwardRef<SVGSVGElement, IconProps>(function IconCaretsH(props, ref) {
  const idPrefix = React.useId().replace(/[^a-zA-Z0-9_-]/g, '') + '-';
  const {
    size = 16,
    color,
    title,
    ...svgProps
  } = props;
  return <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...svgProps} ref={ref} width={svgProps["width"] ?? size} height={svgProps["height"] ?? size} color={color} aria-labelledby={svgProps["aria-labelledby"] ?? (title ? idPrefix + "title" : undefined)} aria-label={svgProps["aria-label"] ?? title} role={svgProps["role"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? "img" : undefined)} aria-hidden={svgProps["aria-hidden"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? undefined : true)}>{title ? <title id={idPrefix + "title"}>{title}</title> : null}<path d="M5.1746 10.2925C5.49894 10.5705 6 10.3401 6 9.91289V6.08711C6 5.65993 5.49894 5.42948 5.1746 5.70748L2.9429 7.62037C2.71009 7.81992 2.71009 8.18008 2.9429 8.37963L5.1746 10.2925ZM10.8254 10.2925C10.5011 10.5705 10 10.3401 10 9.91289V6.08711C10 5.65993 10.5011 5.42948 10.8254 5.70748L13.0571 7.62037C13.2899 7.81992 13.2899 8.18008 13.0571 8.37963L10.8254 10.2925Z" fill="currentColor" style={{
      fill: "currentColor",
      fillOpacity: 1
    }} /></svg>;
});
export default IconCaretsH;
