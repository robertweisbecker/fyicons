import * as React from 'react';
import type { IconProps } from './types';
const IconKbdDel = React.forwardRef<SVGSVGElement, IconProps>(function IconKbdDel(props, ref) {
  const idPrefix = React.useId().replace(/[^a-zA-Z0-9_-]/g, '') + '-';
  const {
    size = 16,
    color,
    title,
    ...svgProps
  } = props;
  return <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...svgProps} ref={ref} width={svgProps["width"] ?? size} height={svgProps["height"] ?? size} color={color} aria-labelledby={svgProps["aria-labelledby"] ?? (title ? idPrefix + "title" : undefined)} aria-label={svgProps["aria-label"] ?? title} role={svgProps["role"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? "img" : undefined)} aria-hidden={svgProps["aria-hidden"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? undefined : true)}>{title ? <title id={idPrefix + "title"}>{title}</title> : null}<path d="M13.5 3C14.3284 3.00001 15 3.67158 15 4.5V11.5C15 12.3284 14.3284 13 13.5 13H6.16211C5.76621 13 5.38641 12.8434 5.10547 12.5645L1.60742 9.08887C1.01971 8.505 1.0167 7.55547 1.60059 6.96777L5.10156 3.44238C5.38312 3.15899 5.76654 3.00003 6.16602 3H13.5ZM6.16602 4C6.03294 4.00003 5.90535 4.05309 5.81152 4.14746L2.30957 7.67285C2.11514 7.86877 2.11569 8.18533 2.31152 8.37988L5.80957 11.8545C5.9032 11.9475 6.03014 12 6.16211 12H13.5C13.7761 12 14 11.7761 14 11.5V4.5C14 4.22386 13.7761 4.00001 13.5 4H6.16602ZM10.1465 6.14648C10.3417 5.95123 10.6583 5.95122 10.8535 6.14648C11.0488 6.34174 11.0488 6.65826 10.8535 6.85352L9.70703 8L10.8535 9.14648C11.0488 9.34174 11.0488 9.65826 10.8535 9.85352C10.6583 10.0488 10.3417 10.0488 10.1465 9.85352L9 8.70703L7.85352 9.85352C7.65826 10.0488 7.34175 10.0488 7.14648 9.85352C6.95122 9.65825 6.95122 9.34175 7.14648 9.14648L8.29297 8L7.14648 6.85352C6.95122 6.65825 6.95122 6.34175 7.14648 6.14648C7.34175 5.95123 7.65826 5.95122 7.85352 6.14648L9 7.29297L10.1465 6.14648Z" fill="currentColor" style={{
      fill: "currentColor",
      fillOpacity: 1
    }} /></svg>;
});
export default IconKbdDel;
