import * as React from 'react';
import type { IconProps } from './types';
const IconShoppingCart = React.forwardRef<SVGSVGElement, IconProps>(function IconShoppingCart(props, ref) {
  const idPrefix = React.useId().replace(/[^a-zA-Z0-9_-]/g, '') + '-';
  const {
    size = 16,
    color,
    title,
    ...svgProps
  } = props;
  return <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...svgProps} ref={ref} width={svgProps["width"] ?? size} height={svgProps["height"] ?? size} color={color} aria-labelledby={svgProps["aria-labelledby"] ?? (title ? idPrefix + "title" : undefined)} aria-label={svgProps["aria-label"] ?? title} role={svgProps["role"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? "img" : undefined)} aria-hidden={svgProps["aria-hidden"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? undefined : true)}>{title ? <title id={idPrefix + "title"}>{title}</title> : null}<path d="M1.99219 2C2.66416 2 3.25454 2.4469 3.43652 3.09375L3.69141 4H13.75C14.4636 4 14.9473 4.72608 14.6729 5.38477L12.8467 9.76953C12.5361 10.5147 11.8073 11 11 11H5.64062L5.79492 11.6211C5.85049 11.8438 6.05076 12 6.28027 12H11.5C12.3284 12 13 12.6716 13 13.5C13 14.3284 12.3284 15 11.5 15C10.6716 15 10 14.3284 10 13.5V13H6.28027C6.18477 13 6.09117 12.99 6 12.9727V13.5C6 14.3284 5.32843 15 4.5 15C3.67157 15 3 14.3284 3 13.5C3 12.6716 3.67157 12 4.5 12H4.86621C4.85049 11.9555 4.83682 11.9098 4.8252 11.8633L4.51855 10.6357L2.47363 3.36426C2.41285 3.14884 2.21605 3 1.99219 3H1.5C1.22386 3 1 2.77614 1 2.5C1 2.22386 1.22386 2 1.5 2H1.99219ZM4.5 13C4.22386 13 4 13.2239 4 13.5C4 13.7761 4.22386 14 4.5 14C4.77614 14 5 13.7761 5 13.5V13H4.5ZM11 13.5C11 13.7761 11.2239 14 11.5 14C11.7761 14 12 13.7761 12 13.5C12 13.2239 11.7761 13 11.5 13H11V13.5ZM5.37891 10H11C11.4036 10 11.7675 9.75725 11.9229 9.38477L13.75 5H3.97266L5.37891 10Z" fill="currentColor" style={{
      fill: "currentColor",
      fillOpacity: 1
    }} /></svg>;
});
export default IconShoppingCart;
