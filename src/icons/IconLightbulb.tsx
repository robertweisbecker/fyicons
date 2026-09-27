import * as React from 'react';
import type { IconProps } from './types';
const IconLightbulb = React.forwardRef<SVGSVGElement, IconProps>(function IconLightbulb(props, ref) {
  const idPrefix = React.useId().replace(/[^a-zA-Z0-9_-]/g, '') + '-';
  const {
    size = 16,
    color,
    title,
    ...svgProps
  } = props;
  return <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...svgProps} ref={ref} width={svgProps["width"] ?? size} height={svgProps["height"] ?? size} color={color} aria-labelledby={svgProps["aria-labelledby"] ?? (title ? idPrefix + "title" : undefined)} aria-label={svgProps["aria-label"] ?? title} role={svgProps["role"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? "img" : undefined)} aria-hidden={svgProps["aria-hidden"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? undefined : true)}>{title ? <title id={idPrefix + "title"}>{title}</title> : null}<path d="M8 1C10.7614 1 13 3.23858 13 6C13 7.58053 12.2655 8.98904 11.1221 9.9043C11.035 9.97401 11 10.0592 11 10.125C11 11.0124 10.6124 11.8072 10 12.3564V12.9727C10 13.5361 9.76265 14.0741 9.3457 14.4531C8.58287 15.1466 7.41713 15.1466 6.6543 14.4531C6.23735 14.0741 6 13.5361 6 12.9727V12.3564C5.3876 11.8072 5 11.0124 5 10.125C5 10.0592 4.96504 9.97401 4.87793 9.9043C3.73446 8.98904 3 7.58053 3 6C3 3.23858 5.23858 1 8 1ZM9 12.9502C8.68686 13.061 8.35112 13.125 8 13.125C7.64888 13.125 7.31314 13.061 7 12.9502V12.9727C7 13.2544 7.11869 13.5234 7.32715 13.7129C7.70857 14.0596 8.29143 14.0596 8.67285 13.7129C8.88131 13.5234 9 13.2544 9 12.9727V12.9502ZM8 2C5.79086 2 4 3.79086 4 6C4 7.26385 4.58597 8.3902 5.50293 9.12402C5.79033 9.35402 6 9.71117 6 10.125C6 11.2296 6.89543 12.125 8 12.125C9.10457 12.125 10 11.2296 10 10.125C10 9.71117 10.2097 9.35402 10.4971 9.12402C11.414 8.3902 12 7.26385 12 6C12 3.79086 10.2091 2 8 2Z" fill="currentColor" style={{
      fill: "currentColor",
      fillOpacity: 1
    }} /></svg>;
});
export default IconLightbulb;
