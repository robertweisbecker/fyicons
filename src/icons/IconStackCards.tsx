import * as React from 'react';
import type { IconProps } from './types';
const IconStackCards = React.forwardRef<SVGSVGElement, IconProps>(function IconStackCards(props, ref) {
  const idPrefix = React.useId().replace(/[^a-zA-Z0-9_-]/g, '') + '-';
  const {
    size = 16,
    color,
    title,
    ...svgProps
  } = props;
  return <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...svgProps} ref={ref} width={svgProps["width"] ?? size} height={svgProps["height"] ?? size} color={color} aria-labelledby={svgProps["aria-labelledby"] ?? (title ? idPrefix + "title" : undefined)} aria-label={svgProps["aria-label"] ?? title} role={svgProps["role"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? "img" : undefined)} aria-hidden={svgProps["aria-hidden"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? undefined : true)}>{title ? <title id={idPrefix + "title"}>{title}</title> : null}<path d="M11.2041 2.01074C12.2128 2.113 13 2.96435 13 4V5L13.2041 5.01074C14.2128 5.113 15 5.96435 15 7V12C15 13.0357 14.2128 13.887 13.2041 13.9893L13 14H5C3.96435 14 3.113 13.2128 3.01074 12.2041L3 12C1.89543 12 1 11.1046 1 10V4C1 2.89543 1.89543 2 3 2H11L11.2041 2.01074ZM3 3C2.44772 3 2 3.44772 2 4V10C2 10.5523 2.44772 11 3 11H11C11.5523 11 12 10.5523 12 10V4C12 3.44772 11.5523 3 11 3H3ZM7.5 7C7.77614 7 8 7.22386 8 7.5C8 7.77614 7.77614 8 7.5 8H4.5C4.22386 8 4 7.77614 4 7.5C4 7.22386 4.22386 7 4.5 7H7.5ZM9.5 5C9.77614 5 10 5.22386 10 5.5C10 5.77614 9.77614 6 9.5 6H4.5C4.22386 6 4 5.77614 4 5.5C4 5.22386 4.22386 5 4.5 5H9.5ZM4 12C4 12.5523 4.44772 13 5 13H13C13.5523 13 14 12.5523 14 12V7C14 6.44772 13.5523 6 13 6V10C13 11.1046 12.1046 12 11 12H4Z" fill="currentColor" style={{
      fill: "currentColor",
      fillOpacity: 1
    }} /></svg>;
});
export default IconStackCards;
