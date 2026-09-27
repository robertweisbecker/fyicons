import * as React from 'react';
import type { IconProps } from './types';
const IconArrowsExpand = React.forwardRef<SVGSVGElement, IconProps>(function IconArrowsExpand(props, ref) {
  const idPrefix = React.useId().replace(/[^a-zA-Z0-9_-]/g, '') + '-';
  const {
    size = 16,
    color,
    title,
    ...svgProps
  } = props;
  return <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...svgProps} ref={ref} width={svgProps["width"] ?? size} height={svgProps["height"] ?? size} color={color} aria-labelledby={svgProps["aria-labelledby"] ?? (title ? idPrefix + "title" : undefined)} aria-label={svgProps["aria-label"] ?? title} role={svgProps["role"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? "img" : undefined)} aria-hidden={svgProps["aria-hidden"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? undefined : true)}>{title ? <title id={idPrefix + "title"}>{title}</title> : null}<path d="M6.14648 9.14648C6.34175 8.95122 6.65825 8.95122 6.85352 9.14648C7.04877 9.34175 7.04878 9.65825 6.85352 9.85352L3.70703 13H5.5C5.77614 13 6 13.2239 6 13.5C6 13.7761 5.77614 14 5.5 14H2.5C2.36739 14 2.24025 13.9473 2.14648 13.8535C2.05272 13.7597 2 13.6326 2 13.5V10.5C2 10.2239 2.22386 10 2.5 10C2.77614 10 3 10.2239 3 10.5V12.293L6.14648 9.14648ZM13.5 2C13.7761 2 14 2.22386 14 2.5V5.5C14 5.77614 13.7761 6 13.5 6C13.2239 6 13 5.77614 13 5.5V3.70703L9.85352 6.85352C9.65825 7.04878 9.34175 7.04878 9.14648 6.85352C8.95122 6.65825 8.95122 6.34175 9.14648 6.14648L12.293 3H10.5C10.2239 3 10 2.77614 10 2.5C10 2.22386 10.2239 2 10.5 2H13.5Z" fill="currentColor" style={{
      fill: "currentColor",
      fillOpacity: 1
    }} /></svg>;
});
export default IconArrowsExpand;
