import * as React from 'react';
import type { IconProps } from './types';
const IconTextWrap = React.forwardRef<SVGSVGElement, IconProps>(function IconTextWrap(props, ref) {
  const idPrefix = React.useId().replace(/[^a-zA-Z0-9_-]/g, '') + '-';
  const {
    size = 16,
    color,
    title,
    ...svgProps
  } = props;
  return <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...svgProps} ref={ref} width={svgProps["width"] ?? size} height={svgProps["height"] ?? size} color={color} aria-labelledby={svgProps["aria-labelledby"] ?? (title ? idPrefix + "title" : undefined)} aria-label={svgProps["aria-label"] ?? title} role={svgProps["role"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? "img" : undefined)} aria-hidden={svgProps["aria-hidden"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? undefined : true)}>{title ? <title id={idPrefix + "title"}>{title}</title> : null}<path d="M6.5 12C6.77614 12 7 12.2239 7 12.5C7 12.7761 6.77614 13 6.5 13H2.5C2.22386 13 2 12.7761 2 12.5C2 12.2239 2.22386 12 2.5 12H6.5ZM11.5 6C12.8807 6 14 7.11929 14 8.5C14 9.88071 12.8807 11 11.5 11H10V11.8965C9.99997 12.1192 9.73073 12.2307 9.57324 12.0732L8.17676 10.6768C8.07915 10.5791 8.07915 10.4209 8.17676 10.3232L9.57324 8.92676C9.73073 8.7693 9.99997 8.88082 10 9.10352V10H11.5C12.3284 10 13 9.32843 13 8.5C13 7.67157 12.3284 7 11.5 7H2.5C2.22386 7 2 6.77614 2 6.5C2 6.22386 2.22386 6 2.5 6H11.5ZM5.5 9C5.77614 9 6 9.22386 6 9.5C6 9.77614 5.77614 10 5.5 10H2.5C2.22386 10 2 9.77614 2 9.5C2 9.22386 2.22386 9 2.5 9H5.5ZM11.5 3C11.7761 3 12 3.22386 12 3.5C12 3.77614 11.7761 4 11.5 4H2.5C2.22386 4 2 3.77614 2 3.5C2 3.22386 2.22386 3 2.5 3H11.5Z" fill="currentColor" style={{
      fill: "currentColor",
      fillOpacity: 1
    }} /></svg>;
});
export default IconTextWrap;
