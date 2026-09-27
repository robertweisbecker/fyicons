import * as React from 'react';
import type { IconProps } from './types';
const IconArrowsExpandAll = React.forwardRef<SVGSVGElement, IconProps>(function IconArrowsExpandAll(props, ref) {
  const idPrefix = React.useId().replace(/[^a-zA-Z0-9_-]/g, '') + '-';
  const {
    size = 16,
    color,
    title,
    ...svgProps
  } = props;
  return <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...svgProps} ref={ref} width={svgProps["width"] ?? size} height={svgProps["height"] ?? size} color={color} aria-labelledby={svgProps["aria-labelledby"] ?? (title ? idPrefix + "title" : undefined)} aria-label={svgProps["aria-label"] ?? title} role={svgProps["role"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? "img" : undefined)} aria-hidden={svgProps["aria-hidden"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? undefined : true)}>{title ? <title id={idPrefix + "title"}>{title}</title> : null}<path d="M5.14648 10.1465C5.34175 9.95122 5.65825 9.95122 5.85352 10.1465C6.04878 10.3417 6.04878 10.6583 5.85352 10.8535L3.70703 13H5.5C5.77614 13 6 13.2239 6 13.5C6 13.7761 5.77614 14 5.5 14H2.5C2.22386 14 2 13.7761 2 13.5V10.5C2 10.2239 2.22386 10 2.5 10C2.77614 10 3 10.2239 3 10.5V12.293L5.14648 10.1465ZM13.5 10C13.7761 10 14 10.2239 14 10.5V13.5C14 13.7761 13.7761 14 13.5 14H10.5C10.2239 14 10 13.7761 10 13.5C10 13.2239 10.2239 13 10.5 13H12.293L10.1465 10.8535C9.95122 10.6583 9.95122 10.3417 10.1465 10.1465C10.3417 9.95122 10.6583 9.95122 10.8535 10.1465L13 12.293V10.5C13 10.2239 13.2239 10 13.5 10ZM5.5 2C5.77614 2 6 2.22386 6 2.5C6 2.77614 5.77614 3 5.5 3H3.70703L5.85352 5.14648C6.04878 5.34175 6.04878 5.65825 5.85352 5.85352C5.65825 6.04878 5.34175 6.04878 5.14648 5.85352L3 3.70703V5.5C3 5.77614 2.77614 6 2.5 6C2.22386 6 2 5.77614 2 5.5V2.5C2 2.22386 2.22386 2 2.5 2H5.5ZM13.5 2C13.7761 2 14 2.22386 14 2.5V5.5C14 5.77614 13.7761 6 13.5 6C13.2239 6 13 5.77614 13 5.5V3.70703L10.8535 5.85352C10.6583 6.04878 10.3417 6.04878 10.1465 5.85352C9.95122 5.65825 9.95122 5.34175 10.1465 5.14648L12.293 3H10.5C10.2239 3 10 2.77614 10 2.5C10 2.22386 10.2239 2 10.5 2H13.5Z" fill="currentColor" style={{
      fill: "currentColor",
      fillOpacity: 1
    }} /></svg>;
});
export default IconArrowsExpandAll;
