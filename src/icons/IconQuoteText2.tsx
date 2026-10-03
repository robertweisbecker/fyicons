import * as React from 'react';
import type { IconProps } from './types';
const IconQuoteText2 = React.forwardRef<SVGSVGElement, IconProps>(function IconQuoteText2(props, ref) {
  const idPrefix = React.useId().replace(/[^a-zA-Z0-9_-]/g, '') + '-';
  const {
    size = 16,
    color,
    title,
    ...svgProps
  } = props;
  return <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...svgProps} ref={ref} width={svgProps["width"] ?? size} height={svgProps["height"] ?? size} color={color} aria-labelledby={svgProps["aria-labelledby"] ?? (title ? idPrefix + "title" : undefined)} aria-label={svgProps["aria-label"] ?? title} role={svgProps["role"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? "img" : undefined)} aria-hidden={svgProps["aria-hidden"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? undefined : true)}>{title ? <title id={idPrefix + "title"}>{title}</title> : null}<path d="M13.5 12C13.7761 12 14 12.2239 14 12.5C14 12.7761 13.7761 13 13.5 13H2.5C2.22386 13 2 12.7761 2 12.5C2 12.2239 2.22386 12 2.5 12H13.5ZM13.5 9C13.7761 9 14 9.22386 14 9.5C14 9.77614 13.7761 10 13.5 10H2.5C2.22386 10 2 9.77614 2 9.5C2 9.22386 2.22386 9 2.5 9H13.5ZM4.00098 3.50098L4 3.5C3.53561 3.50007 3.12086 3.71151 2.8457 4.04297C3.50749 4.19912 4.00083 4.79076 4.00098 5.5C4.00098 6.32843 3.32843 7 2.5 7C1.67197 6.99954 1 6.32814 1 5.5C1.00001 5.4459 1.00319 5.39246 1.00879 5.33984C1.09145 4.03384 2.17412 3 3.50098 3H4.00098V3.50098ZM8.00098 3.50098L8 3.5C7.53561 3.50007 7.12086 3.71151 6.8457 4.04297C7.50726 4.19914 7.99985 4.79078 8 5.5C8 6.32843 7.32843 7 6.5 7C5.67197 6.99954 5 6.32814 5 5.5C5.00001 5.4459 5.00319 5.39246 5.00879 5.33984C5.09145 4.03384 6.17412 3 7.50098 3H8.00098V3.50098ZM13.5 6C13.7761 6 14 6.22386 14 6.5C14 6.77614 13.7761 7 13.5 7H10.5C10.2239 7 10 6.77614 10 6.5C10 6.22386 10.2239 6 10.5 6H13.5ZM13.5 3C13.7761 3 14 3.22386 14 3.5C14 3.77614 13.7761 4 13.5 4H10.5C10.2239 4 10 3.77614 10 3.5C10 3.22386 10.2239 3 10.5 3H13.5Z" fill="currentColor" style={{
      fill: "currentColor",
      fillOpacity: 1
    }} /></svg>;
});
export default IconQuoteText2;
