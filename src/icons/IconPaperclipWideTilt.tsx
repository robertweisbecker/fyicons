import * as React from 'react';
import type { IconProps } from './types';
const IconPaperclipWideTilt = React.forwardRef<SVGSVGElement, IconProps>(function IconPaperclipWideTilt(props, ref) {
  const idPrefix = React.useId().replace(/[^a-zA-Z0-9_-]/g, '') + '-';
  const {
    size = 16,
    color,
    title,
    ...svgProps
  } = props;
  return <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...svgProps} ref={ref} width={svgProps["width"] ?? size} height={svgProps["height"] ?? size} color={color} aria-labelledby={svgProps["aria-labelledby"] ?? (title ? idPrefix + "title" : undefined)} aria-label={svgProps["aria-label"] ?? title} role={svgProps["role"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? "img" : undefined)} aria-hidden={svgProps["aria-hidden"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? undefined : true)}>{title ? <title id={idPrefix + "title"}>{title}</title> : null}<g clipPath={`url(#${idPrefix}clip0_315_17553)`}><path d="M14.0103 4.1106C15.3771 5.47743 15.3771 7.69351 14.0103 9.06035L10.1212 12.9494C8.16855 14.9021 5.00272 14.9021 3.0501 12.9494C1.09768 10.9968 1.09755 7.83092 3.0501 5.87837L4.52508 4.40338C4.72029 4.2083 5.03695 4.20835 5.23219 4.40338C5.42742 4.59861 5.42734 4.91522 5.23219 5.11049L3.75721 6.58547C2.19518 8.1475 2.19531 10.6802 3.75721 12.2423C5.31931 13.8044 7.85196 13.8044 9.41406 12.2423L13.3031 8.35324C14.2795 7.37693 14.2795 5.79402 13.3031 4.81771C12.3268 3.84159 10.7439 3.84146 9.76762 4.81771L5.87853 8.70679C5.48807 9.09725 5.4882 9.73047 5.87853 10.121C6.26905 10.5115 6.90222 10.5115 7.29274 10.121L11.1818 6.23192C11.377 6.03672 11.6937 6.03685 11.8889 6.23192C12.0842 6.42718 12.0842 6.74376 11.8889 6.93903L7.99985 10.8281C7.2188 11.6092 5.95247 11.6092 5.17142 10.8281C4.39057 10.047 4.39044 8.78067 5.17142 7.99969L9.06051 4.1106C10.4273 2.74383 12.6434 2.74396 14.0103 4.1106Z" fill="currentColor" style={{
        fill: "currentColor",
        fillOpacity: 1
      }} /></g><defs><clipPath id={idPrefix + "clip0_315_17553"}><rect width={16} height={16} fill="white" style={{
          fill: "white",
          fillOpacity: 1
        }} /></clipPath></defs></svg>;
});
export default IconPaperclipWideTilt;
