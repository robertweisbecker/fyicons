import * as React from 'react';
import type { IconProps } from './types';
const IconQuoteBlock = React.forwardRef<SVGSVGElement, IconProps>(function IconQuoteBlock(props, ref) {
  const idPrefix = React.useId().replace(/[^a-zA-Z0-9_-]/g, '') + '-';
  const {
    size = 16,
    color,
    title,
    ...svgProps
  } = props;
  return <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...svgProps} ref={ref} width={svgProps["width"] ?? size} height={svgProps["height"] ?? size} color={color} aria-labelledby={svgProps["aria-labelledby"] ?? (title ? idPrefix + "title" : undefined)} aria-label={svgProps["aria-label"] ?? title} role={svgProps["role"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? "img" : undefined)} aria-hidden={svgProps["aria-hidden"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? undefined : true)}>{title ? <title id={idPrefix + "title"}>{title}</title> : null}<path d="M12 2.00049C13.1043 2.00075 14 2.89608 14 4.00049V12.0005C13.9997 13.1047 13.1042 14.0002 12 14.0005H4C2.89559 14.0005 2.00026 13.1048 2 12.0005V8.50049C2 8.22435 2.22386 8.00049 2.5 8.00049C2.77592 8.00075 3 8.22451 3 8.50049V12.0005C3.00026 12.5526 3.44788 13.0005 4 13.0005H12C12.5519 13.0002 12.9997 12.5524 13 12.0005V4.00049C13 3.44836 12.5521 3.00075 12 3.00049H9.5C9.22402 3.00049 9.00026 2.77641 9 2.50049C9 2.22435 9.22386 2.00049 9.5 2.00049H12Z" fill="currentColor" style={{
      fill: "currentColor",
      fillOpacity: 1
    }} /><path d="M6.5 1.99976C5.67165 1.99976 5.00013 2.67144 5 3.49976C5 4.72558 5.88271 5.74537 7.04688 5.95874C7.29433 6.00382 7.5 5.79532 7.5 5.5437C7.49988 5.42372 7.44996 5.31026 7.375 5.21655C7.28328 5.10197 7.2091 4.97748 7.15039 4.84839C7.65229 4.60589 7.99986 4.09445 8 3.49976C7.99987 2.6715 7.32827 1.99985 6.5 1.99976ZM2.5 1.99976C1.67165 1.99976 1.00013 2.67144 1 3.49976C1 4.72526 1.88219 5.74501 3.0459 5.95874C3.29385 6.00403 3.5 5.79487 3.5 5.54272C3.49986 5.42262 3.44995 5.30847 3.375 5.2146C3.28389 5.10041 3.20979 4.97696 3.15137 4.84839C3.65284 4.60574 3.99986 4.09414 4 3.49976C3.99987 2.6715 3.32827 1.99985 2.5 1.99976Z" fill="currentColor" style={{
      fill: "currentColor",
      fillOpacity: 1
    }} /></svg>;
});
export default IconQuoteBlock;
