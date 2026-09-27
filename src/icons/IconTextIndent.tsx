import * as React from 'react';
import type { IconProps } from './types';
const IconTextIndent = React.forwardRef<SVGSVGElement, IconProps>(function IconTextIndent(props, ref) {
  const idPrefix = React.useId().replace(/[^a-zA-Z0-9_-]/g, '') + '-';
  const {
    size = 16,
    color,
    title,
    ...svgProps
  } = props;
  return <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...svgProps} ref={ref} width={svgProps["width"] ?? size} height={svgProps["height"] ?? size} color={color} aria-labelledby={svgProps["aria-labelledby"] ?? (title ? idPrefix + "title" : undefined)} aria-label={svgProps["aria-label"] ?? title} role={svgProps["role"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? "img" : undefined)} aria-hidden={svgProps["aria-hidden"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? undefined : true)}>{title ? <title id={idPrefix + "title"}>{title}</title> : null}<path d="M13.25 12C13.5261 12 13.75 12.2239 13.75 12.5C13.75 12.7761 13.5261 13 13.25 13H7.5C7.22386 13 7 12.7761 7 12.5C7 12.2239 7.22386 12 7.5 12H13.25ZM3.05859 7.03809C3.24543 6.9607 3.46052 7.00349 3.60352 7.14648L5.60352 9.14648C5.79878 9.34175 5.79878 9.65825 5.60352 9.85352L3.60352 11.8535C3.46052 11.9965 3.24543 12.0393 3.05859 11.9619C2.87179 11.8845 2.75 11.7022 2.75 11.5V7.5C2.75 7.29779 2.87179 7.11549 3.05859 7.03809ZM13.25 9C13.5261 9 13.75 9.22386 13.75 9.5C13.75 9.77614 13.5261 10 13.25 10H9.5C9.22386 10 9 9.77614 9 9.5C9 9.22386 9.22386 9 9.5 9H13.25ZM13.25 6C13.5261 6 13.75 6.22386 13.75 6.5C13.75 6.77614 13.5261 7 13.25 7H7.5C7.22386 7 7 6.77614 7 6.5C7 6.22386 7.22386 6 7.5 6H13.25ZM13.25 3C13.5261 3 13.75 3.22386 13.75 3.5C13.75 3.77614 13.5261 4 13.25 4H2.25C1.97386 4 1.75 3.77614 1.75 3.5C1.75 3.22386 1.97386 3 2.25 3H13.25Z" fill="currentColor" style={{
      fill: "currentColor",
      fillOpacity: 1
    }} /></svg>;
});
export default IconTextIndent;
