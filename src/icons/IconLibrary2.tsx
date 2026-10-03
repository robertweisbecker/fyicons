import * as React from 'react';
import type { IconProps } from './types';
const IconLibrary2 = React.forwardRef<SVGSVGElement, IconProps>(function IconLibrary2(props, ref) {
  const idPrefix = React.useId().replace(/[^a-zA-Z0-9_-]/g, '') + '-';
  const {
    size = 16,
    color,
    title,
    ...svgProps
  } = props;
  return <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...svgProps} ref={ref} width={svgProps["width"] ?? size} height={svgProps["height"] ?? size} color={color} aria-labelledby={svgProps["aria-labelledby"] ?? (title ? idPrefix + "title" : undefined)} aria-label={svgProps["aria-label"] ?? title} role={svgProps["role"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? "img" : undefined)} aria-hidden={svgProps["aria-hidden"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? undefined : true)}>{title ? <title id={idPrefix + "title"}>{title}</title> : null}<path d="M10.3643 2.02427C11.1917 1.81286 12.0288 2.33399 12.2041 3.16978L14.043 11.9432C14.2077 12.7291 13.7243 13.5061 12.9463 13.7049L11.8857 13.9754C11.0583 14.1869 10.2211 13.6658 10.0459 12.8299L9 7.8397V12.4999C9 13.3283 8.32843 13.9999 7.5 13.9999H6.5C6.11511 13.9999 5.76555 13.8534 5.5 13.6151C5.23445 13.8534 4.88489 13.9999 4.5 13.9999H3.5C2.67157 13.9999 2 13.3283 2 12.4999V3.49986C2.00008 2.6715 2.67163 1.99986 3.5 1.99986H4.5C4.88458 1.99986 5.23452 2.14568 5.5 2.38365C5.76548 2.14568 6.11542 1.99986 6.5 1.99986H7.5C7.99348 1.99986 8.42976 2.23947 8.70312 2.60728C8.87207 2.46309 9.0747 2.35331 9.30371 2.29478L10.3643 2.02427ZM10.6113 2.99302L9.55176 3.26353C9.29264 3.32975 9.13104 3.58869 9.18555 3.85045L11.0254 12.6249C11.0838 12.9035 11.3628 13.0772 11.6387 13.0067L12.6982 12.7362C12.9574 12.6699 13.1191 12.4111 13.0645 12.1493L11.2246 3.37486C11.1661 3.09633 10.8871 2.92257 10.6113 2.99302ZM3.5 2.99986C3.22391 2.99986 3.00008 3.22379 3 3.49986V12.4999C3 12.776 3.22386 12.9999 3.5 12.9999H4.5C4.77614 12.9999 5 12.776 5 12.4999V3.49986C4.99992 3.22379 4.77609 2.99986 4.5 2.99986H3.5ZM6.5 2.99986C6.22391 2.99986 6.00008 3.22379 6 3.49986V12.4999C6 12.776 6.22386 12.9999 6.5 12.9999H7.5C7.77614 12.9999 8 12.776 8 12.4999V3.49986C7.99992 3.22379 7.77609 2.99986 7.5 2.99986H6.5Z" fill="currentColor" style={{
      fill: "currentColor",
      fillOpacity: 1
    }} /></svg>;
});
export default IconLibrary2;
