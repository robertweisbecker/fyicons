import * as React from 'react';
import type { IconProps } from './types';
const IconParallel = React.forwardRef<SVGSVGElement, IconProps>(function IconParallel(props, ref) {
  const idPrefix = React.useId().replace(/[^a-zA-Z0-9_-]/g, '') + '-';
  const {
    size = 16,
    color,
    title,
    ...svgProps
  } = props;
  return <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...svgProps} ref={ref} width={svgProps["width"] ?? size} height={svgProps["height"] ?? size} color={color} aria-labelledby={svgProps["aria-labelledby"] ?? (title ? idPrefix + "title" : undefined)} aria-label={svgProps["aria-label"] ?? title} role={svgProps["role"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? "img" : undefined)} aria-hidden={svgProps["aria-hidden"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? undefined : true)}>{title ? <title id={idPrefix + "title"}>{title}</title> : null}<path d="M4.5 9.00049C5.70963 9.00049 6.71872 9.85916 6.9502 11.0005H11V9.53369C11.0001 9.32184 11.2474 9.20663 11.4102 9.34229L13.7695 11.3081C13.8894 11.408 13.8893 11.5919 13.7695 11.6919L11.4102 13.6587C11.2473 13.7943 11 13.6782 11 13.4663V12.0005H6.9502C6.71843 13.1414 5.70936 14.0005 4.5 14.0005C3.11942 14.0005 2.00021 12.881 2 11.5005C2 10.1198 3.11929 9.00049 4.5 9.00049ZM4.5 10.0005C3.67157 10.0005 3 10.6721 3 11.5005C3.00021 12.3287 3.6717 13.0005 4.5 13.0005C5.3283 13.0005 5.99979 12.3287 6 11.5005C6 10.6721 5.32843 10.0005 4.5 10.0005ZM4.5 2.00049C5.70959 2.00049 6.71868 2.85921 6.9502 4.00049H11V2.53369C11.0002 2.3219 11.2474 2.20665 11.4102 2.34229L13.7695 4.30811C13.8894 4.40801 13.8893 4.59191 13.7695 4.69189L11.4102 6.65869C11.2473 6.79434 11 6.67825 11 6.46631V5.00049H6.9502C6.71847 6.14149 5.70939 7.00049 4.5 7.00049C3.11939 7.00049 2.00016 5.88107 2 4.50049C2 3.11978 3.11929 2.00049 4.5 2.00049ZM4.5 3.00049C3.67157 3.00049 3 3.67206 3 4.50049C3.00016 5.32878 3.67167 6.00049 4.5 6.00049C5.32833 6.00049 5.99984 5.32878 6 4.50049C6 3.67206 5.32843 3.00049 4.5 3.00049Z" fill="currentColor" style={{
      fill: "currentColor",
      fillOpacity: 1
    }} /></svg>;
});
export default IconParallel;
