import * as React from 'react';
import type { IconProps } from './types';
const IconLocationPin = React.forwardRef<SVGSVGElement, IconProps>(function IconLocationPin(props, ref) {
  const idPrefix = React.useId().replace(/[^a-zA-Z0-9_-]/g, '') + '-';
  const {
    size = 16,
    color,
    title,
    ...svgProps
  } = props;
  return <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...svgProps} ref={ref} width={svgProps["width"] ?? size} height={svgProps["height"] ?? size} color={color} aria-labelledby={svgProps["aria-labelledby"] ?? (title ? idPrefix + "title" : undefined)} aria-label={svgProps["aria-label"] ?? title} role={svgProps["role"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? "img" : undefined)} aria-hidden={svgProps["aria-hidden"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? undefined : true)}>{title ? <title id={idPrefix + "title"}>{title}</title> : null}<path d="M8 1C10.7604 1 13 3.22279 13 6C13 8.4091 11.8008 10.5783 10.6504 12.1123C10.0705 12.8855 9.49097 13.5129 9.05664 13.9473C8.83926 14.1646 8.65784 14.3349 8.5293 14.4512C8.465 14.5093 8.41344 14.5542 8.37793 14.585C8.36039 14.6002 8.34661 14.6119 8.33691 14.6201C8.33206 14.6242 8.32796 14.6276 8.3252 14.6299C8.32392 14.631 8.32308 14.6321 8.32227 14.6328L8.32031 14.6338L8 14.9004L7.67969 14.6338L7.67773 14.6328C7.67692 14.6321 7.67608 14.631 7.6748 14.6299C7.67204 14.6276 7.66794 14.6242 7.66309 14.6201C7.65339 14.6119 7.63961 14.6002 7.62207 14.585C7.58656 14.5542 7.535 14.5093 7.4707 14.4512C7.34216 14.3349 7.16074 14.1646 6.94336 13.9473C6.50903 13.5129 5.92952 12.8855 5.34961 12.1123C4.19915 10.5783 3 8.4091 3 6C3 3.22279 5.23964 1 8 1ZM8 2C5.78979 2 4 3.77721 4 6C4 8.09074 5.05092 10.0467 6.15039 11.5127C6.6954 12.2393 7.24103 12.8309 7.65039 13.2402C7.78285 13.3727 7.90145 13.485 8 13.5771C8.09855 13.485 8.21715 13.3727 8.34961 13.2402C8.75897 12.8309 9.3046 12.2393 9.84961 11.5127C10.9491 10.0467 12 8.09074 12 6C12 3.77721 10.2102 2 8 2ZM8 4C9.10457 4 10 4.89543 10 6C10 7.10457 9.10457 8 8 8C6.89543 8 6 7.10457 6 6C6 4.89543 6.89543 4 8 4ZM8 5C7.44772 5 7 5.44772 7 6C7 6.55229 7.44772 7 8 7C8.55229 7 9 6.55229 9 6C9 5.44772 8.55229 5 8 5Z" fill="currentColor" style={{
      fill: "currentColor",
      fillOpacity: 1
    }} /></svg>;
});
export default IconLocationPin;
