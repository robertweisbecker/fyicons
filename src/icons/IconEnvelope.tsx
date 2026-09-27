import * as React from 'react';
import type { IconProps } from './types';
const IconEnvelope = React.forwardRef<SVGSVGElement, IconProps>(function IconEnvelope(props, ref) {
  const idPrefix = React.useId().replace(/[^a-zA-Z0-9_-]/g, '') + '-';
  const {
    size = 16,
    color,
    title,
    ...svgProps
  } = props;
  return <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...svgProps} ref={ref} width={svgProps["width"] ?? size} height={svgProps["height"] ?? size} color={color} aria-labelledby={svgProps["aria-labelledby"] ?? (title ? idPrefix + "title" : undefined)} aria-label={svgProps["aria-label"] ?? title} role={svgProps["role"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? "img" : undefined)} aria-hidden={svgProps["aria-hidden"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? undefined : true)}>{title ? <title id={idPrefix + "title"}>{title}</title> : null}<path d="M13 3C14.1046 3 15 3.89543 15 5V11C15 12.1046 14.1046 13 13 13H3C1.89543 13 1 12.1046 1 11V5C1 3.89543 1.89543 3 3 3H13ZM9.41406 9.29297C8.63304 10.0739 7.36696 10.0739 6.58594 9.29297L6 8.70703L2.74121 11.9648C2.82386 11.987 2.91038 12 3 12H13C13.0893 12 13.1754 11.9868 13.2578 11.9648L9.99902 8.70605L9.41406 9.29297ZM2.03418 4.74121C2.01211 4.82378 2 4.91047 2 5V11C2 11.0892 2.01227 11.1755 2.03418 11.2578L5.29297 8L2.03418 4.74121ZM10.7061 7.99902L13.9648 11.2578C13.9868 11.1754 14 11.0893 14 11V5C14 4.91038 13.987 4.82386 13.9648 4.74121L10.7061 7.99902ZM3 4C2.91047 4 2.82378 4.01211 2.74121 4.03418L7.29297 8.58594C7.68346 8.97631 8.31654 8.97631 8.70703 8.58594L13.2578 4.03418C13.1755 4.01227 13.0892 4 13 4H3Z" fill="currentColor" style={{
      fill: "currentColor",
      fillOpacity: 1
    }} /></svg>;
});
export default IconEnvelope;
