import * as React from 'react';
import type { IconProps } from './types';
const IconHd = React.forwardRef<SVGSVGElement, IconProps>(function IconHd(props, ref) {
  const idPrefix = React.useId().replace(/[^a-zA-Z0-9_-]/g, '') + '-';
  const {
    size = 16,
    color,
    title,
    ...svgProps
  } = props;
  return <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...svgProps} ref={ref} width={svgProps["width"] ?? size} height={svgProps["height"] ?? size} color={color} aria-labelledby={svgProps["aria-labelledby"] ?? (title ? idPrefix + "title" : undefined)} aria-label={svgProps["aria-label"] ?? title} role={svgProps["role"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? "img" : undefined)} aria-hidden={svgProps["aria-hidden"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? undefined : true)}>{title ? <title id={idPrefix + "title"}>{title}</title> : null}<path d="M12.5 3C13.8807 3 15 4.11929 15 5.5V10.5C15 11.8807 13.8807 13 12.5 13H3.5C2.11929 13 1 11.8807 1 10.5V5.5C1 4.11929 2.11929 3 3.5 3H12.5ZM3.5 4C2.67157 4 2 4.67157 2 5.5V10.5C2 11.3284 2.67157 12 3.5 12H12.5C13.3284 12 14 11.3284 14 10.5V5.5C14 4.67157 13.3284 4 12.5 4H3.5ZM6.5 4.99316C6.7761 4.99316 6.99993 5.21708 7 5.49316V10.4932C7 10.7693 6.77614 10.9932 6.5 10.9932C6.22386 10.9932 6 10.7693 6 10.4932V8.74316H4V10.4932C4 10.7693 3.77614 10.9932 3.5 10.9932C3.22386 10.9932 3 10.7693 3 10.4932V5.49316C3.00007 5.21708 3.2239 4.99316 3.5 4.99316C3.7761 4.99316 3.99993 5.21708 4 5.49316V7.74316H6V5.49316C6.00007 5.21708 6.2239 4.99316 6.5 4.99316ZM10.2041 5C11.0299 5.00015 11.6824 5.40034 12.1133 5.97461C12.5365 6.53882 12.7501 7.27118 12.75 7.99316C12.7499 8.74999 12.4518 9.48286 12.0059 10.0283C11.5648 10.5677 10.9242 10.9861 10.2041 10.9863H8.75C8.47401 10.9863 8.25024 10.7623 8.25 10.4863V5.5C8.25 5.36739 8.30272 5.24025 8.39648 5.14648C8.49025 5.05272 8.61739 5 8.75 5H10.2041ZM9.25 9.98633H10.2041C10.53 9.98613 10.9122 9.78714 11.2324 9.39551C11.5479 9.00955 11.7499 8.49574 11.75 7.99316C11.7501 7.45581 11.5891 6.94161 11.3135 6.57422C11.0454 6.21699 10.6743 6.00015 10.2041 6C9.88035 6 9.52699 6 9.25 6V9.98633Z" fill="currentColor" style={{
      fill: "currentColor",
      fillOpacity: 1
    }} /></svg>;
});
export default IconHd;
