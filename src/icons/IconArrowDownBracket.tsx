import * as React from 'react';
import type { IconProps } from './types';
const IconArrowDownBracket = React.forwardRef<SVGSVGElement, IconProps>(function IconArrowDownBracket(props, ref) {
  const idPrefix = React.useId().replace(/[^a-zA-Z0-9_-]/g, '') + '-';
  const {
    size = 16,
    color,
    title,
    ...svgProps
  } = props;
  return <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...svgProps} ref={ref} width={svgProps["width"] ?? size} height={svgProps["height"] ?? size} color={color} aria-labelledby={svgProps["aria-labelledby"] ?? (title ? idPrefix + "title" : undefined)} aria-label={svgProps["aria-label"] ?? title} role={svgProps["role"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? "img" : undefined)} aria-hidden={svgProps["aria-hidden"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? undefined : true)}>{title ? <title id={idPrefix + "title"}>{title}</title> : null}<path d="M13.5 10.0005C13.7761 10.0005 14 10.2243 14 10.5005V12.0005C13.9997 13.1048 13.1044 14.0005 12 14.0005H4C2.89559 14.0005 2.00026 13.1048 2 12.0005V10.5005C2 10.2243 2.22386 10.0005 2.5 10.0005C2.77614 10.0005 3 10.2243 3 10.5005V12.0005C3.00026 12.5525 3.44788 13.0005 4 13.0005H12C12.5521 13.0005 12.9997 12.5525 13 12.0005V10.5005C13 10.2243 13.2239 10.0005 13.5 10.0005ZM8.00098 1.99951C8.27681 1.99978 8.50084 2.22364 8.50098 2.49951V9.2915L10.6465 7.146C10.8416 6.95098 11.1583 6.95114 11.3535 7.146C11.5487 7.34122 11.5487 7.65776 11.3535 7.85303L8.35449 10.853C8.18373 11.0238 7.91963 11.0454 7.72559 10.9175L7.64746 10.853L4.64648 7.85303C4.45149 7.65777 4.45134 7.34119 4.64648 7.146C4.84168 6.95106 5.15831 6.95105 5.35352 7.146L7.50098 9.29346V2.49951C7.50111 2.22348 7.72492 1.99951 8.00098 1.99951Z" fill="currentColor" style={{
      fill: "currentColor",
      fillOpacity: 1
    }} /></svg>;
});
export default IconArrowDownBracket;
