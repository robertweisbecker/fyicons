import * as React from 'react';
import type { IconProps } from './types';
const IconTelevision = React.forwardRef<SVGSVGElement, IconProps>(function IconTelevision(props, ref) {
  const idPrefix = React.useId().replace(/[^a-zA-Z0-9_-]/g, '') + '-';
  const {
    size = 16,
    color,
    title,
    ...svgProps
  } = props;
  return <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...svgProps} ref={ref} width={svgProps["width"] ?? size} height={svgProps["height"] ?? size} color={color} aria-labelledby={svgProps["aria-labelledby"] ?? (title ? idPrefix + "title" : undefined)} aria-label={svgProps["aria-label"] ?? title} role={svgProps["role"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? "img" : undefined)} aria-hidden={svgProps["aria-hidden"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? undefined : true)}>{title ? <title id={idPrefix + "title"}>{title}</title> : null}<path d="M14 3C14.5523 3 15 3.44771 15 4V11C15 11.5523 14.5523 12 14 12H9.42676L10.8125 13.1094C11.0278 13.2819 11.0628 13.597 10.8906 13.8125C10.7181 14.0278 10.403 14.0629 10.1875 13.8906L8 12.1406L5.8125 13.8906C5.59692 14.0629 5.28183 14.0279 5.10938 13.8125C4.93702 13.5969 4.97204 13.2819 5.1875 13.1094L6.5752 12H2C1.44772 12 1 11.5523 1 11V4C1 3.44772 1.44772 3 2 3H14ZM2 11H14V4H2V11Z" fill="currentColor" style={{
      fill: "currentColor",
      fillOpacity: 1
    }} /></svg>;
});
export default IconTelevision;
