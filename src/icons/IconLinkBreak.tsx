import * as React from 'react';
import type { IconProps } from './types';
const IconLinkBreak = React.forwardRef<SVGSVGElement, IconProps>(function IconLinkBreak(props, ref) {
  const idPrefix = React.useId().replace(/[^a-zA-Z0-9_-]/g, '') + '-';
  const {
    size = 16,
    color,
    title,
    ...svgProps
  } = props;
  return <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...svgProps} ref={ref} width={svgProps["width"] ?? size} height={svgProps["height"] ?? size} color={color} aria-labelledby={svgProps["aria-labelledby"] ?? (title ? idPrefix + "title" : undefined)} aria-label={svgProps["aria-label"] ?? title} role={svgProps["role"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? "img" : undefined)} aria-hidden={svgProps["aria-hidden"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? undefined : true)}>{title ? <title id={idPrefix + "title"}>{title}</title> : null}<path d="M10.5 11.4996C10.776 11.4996 10.9998 11.7236 11 11.9996V13.4996C11 13.7758 10.7761 13.9996 10.5 13.9996C10.2239 13.9996 10 13.7757 10 13.4996V11.9996C10.0002 11.7237 10.224 11.4996 10.5 11.4996ZM4.14648 7.1461C4.34164 6.95099 4.65824 6.95119 4.85352 7.1461C5.04876 7.34134 5.04873 7.65786 4.85352 7.85313L3.85352 8.85313C2.94432 9.76232 2.94455 11.2368 3.85352 12.1461C4.76282 13.0554 6.23718 13.0554 7.14648 12.1461L8.14648 11.1461C8.34164 10.951 8.65824 10.9512 8.85352 11.1461C9.04876 11.3413 9.04873 11.6579 8.85352 11.8531L7.85352 12.8531C6.55368 14.153 4.44632 14.153 3.14648 12.8531C1.84699 11.5533 1.84677 9.44581 3.14648 8.1461L4.14648 7.1461ZM13.5 9.99961C13.776 9.99961 13.9998 10.2236 14 10.4996C14 10.7758 13.7761 10.9996 13.5 10.9996H12C11.7239 10.9996 11.5 10.7757 11.5 10.4996C11.5002 10.2237 11.724 9.99963 12 9.99961H13.5ZM8.14648 3.1461C9.44621 1.84643 11.5537 1.84662 12.8535 3.1461C14.1533 4.44591 14.1533 6.55329 12.8535 7.85313L11.8535 8.85313C11.6583 9.04839 11.3417 9.04839 11.1465 8.85313C10.9516 8.65784 10.9513 8.34124 11.1465 8.1461L12.1465 7.1461C13.0557 6.23678 13.0558 4.76242 12.1465 3.85313C11.2372 2.94417 9.76271 2.94398 8.85352 3.85313L7.85352 4.85313C7.65825 5.04839 7.34175 5.04839 7.14648 4.85313C6.95156 4.65784 6.95133 4.34124 7.14648 4.1461L8.14648 3.1461ZM4 4.99961C4.27601 4.99961 4.49979 5.22365 4.5 5.49961C4.5 5.77575 4.27614 5.99961 4 5.99961H2.5C2.22387 5.9996 2 5.77574 2 5.49961C2.00021 5.22366 2.224 4.99962 2.5 4.99961H4ZM5.5 1.99961C5.77601 1.99961 5.99979 2.22365 6 2.49961V3.99961C6 4.27575 5.77614 4.49961 5.5 4.49961C5.22387 4.4996 5 4.27574 5 3.99961V2.49961C5.00021 2.22365 5.224 1.99962 5.5 1.99961Z" fill="currentColor" style={{
      fill: "currentColor",
      fillOpacity: 1
    }} /></svg>;
});
export default IconLinkBreak;
