import * as React from 'react';
import type { IconProps } from './types';
const IconLayers = React.forwardRef<SVGSVGElement, IconProps>(function IconLayers(props, ref) {
  const idPrefix = React.useId().replace(/[^a-zA-Z0-9_-]/g, '') + '-';
  const {
    size = 16,
    color,
    title,
    ...svgProps
  } = props;
  return <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...svgProps} ref={ref} width={svgProps["width"] ?? size} height={svgProps["height"] ?? size} color={color} aria-labelledby={svgProps["aria-labelledby"] ?? (title ? idPrefix + "title" : undefined)} aria-label={svgProps["aria-label"] ?? title} role={svgProps["role"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? "img" : undefined)} aria-hidden={svgProps["aria-hidden"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? undefined : true)}>{title ? <title id={idPrefix + "title"}>{title}</title> : null}<path d="M6.90039 2.54285C7.58329 2.16042 8.41666 2.16053 9.09961 2.54285L13.3262 4.90906C14.1782 5.38641 14.1782 6.61335 13.3262 7.0907L11.5977 8.0575L13.2471 8.91589C14.1283 9.37495 14.1483 10.6304 13.2812 11.1161L9.09863 13.4579C8.41592 13.8402 7.58226 13.8399 6.89941 13.4579L2.7168 11.1161C1.8493 10.6303 1.86883 9.37461 2.75098 8.91589L4.40137 8.0575L2.67383 7.0907C1.82217 6.61326 1.82209 5.38643 2.67383 4.90906L6.90039 2.54285ZM9.09961 9.45691C8.41664 9.83929 7.58333 9.83936 6.90039 9.45691L5.44434 8.64148L3.21191 9.80359C3.03601 9.8954 3.0322 10.1457 3.20508 10.243L7.38867 12.5858C7.76779 12.7976 8.23039 12.7979 8.60938 12.5858L12.793 10.243C12.9654 10.1458 12.9611 9.89574 12.7861 9.80359L10.5547 8.64148L9.09961 9.45691ZM8.61035 3.41492C8.23113 3.20284 7.76882 3.20273 7.38965 3.41492L3.16309 5.7821C2.9929 5.87758 2.99298 6.12211 3.16309 6.21765L7.38965 8.58484C7.76886 8.79705 8.23111 8.79698 8.61035 8.58484L12.8369 6.21765C13.0074 6.12219 13.0074 5.87757 12.8369 5.7821L8.61035 3.41492Z" fill="currentColor" style={{
      fill: "currentColor",
      fillOpacity: 1
    }} /></svg>;
});
export default IconLayers;
