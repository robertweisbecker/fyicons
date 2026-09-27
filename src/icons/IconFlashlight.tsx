import * as React from 'react';
import type { IconProps } from './types';
const IconFlashlight = React.forwardRef<SVGSVGElement, IconProps>(function IconFlashlight(props, ref) {
  const idPrefix = React.useId().replace(/[^a-zA-Z0-9_-]/g, '') + '-';
  const {
    size = 16,
    color,
    title,
    ...svgProps
  } = props;
  return <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...svgProps} ref={ref} width={svgProps["width"] ?? size} height={svgProps["height"] ?? size} color={color} aria-labelledby={svgProps["aria-labelledby"] ?? (title ? idPrefix + "title" : undefined)} aria-label={svgProps["aria-label"] ?? title} role={svgProps["role"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? "img" : undefined)} aria-hidden={svgProps["aria-hidden"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? undefined : true)}>{title ? <title id={idPrefix + "title"}>{title}</title> : null}<g clipPath={`url(#${idPrefix}clip0_120_2548)`}><path d="M14.7173 4.818C15.3031 5.40378 15.3031 6.35353 14.7173 6.93932L12.4399 9.2167C11.9969 9.65965 11.4037 9.92015 10.7778 9.94659L10.3593 9.96455C9.95723 9.98149 9.57803 10.1589 9.30834 10.4576L5.55321 14.6174C5.03085 15.1959 4.14582 15.4656 3.38701 15.0034C2.99451 14.7643 2.52234 14.4218 2.05013 13.9496C1.57793 13.4774 1.23549 13.0052 0.996378 12.6127C0.534156 11.8539 0.80379 10.9689 1.38239 10.4465L5.54216 6.69141C5.84082 6.42179 6.01887 6.04311 6.03589 5.64111L6.05316 5.22196C6.07959 4.59605 6.34011 4.00287 6.78305 3.55984L9.06043 1.28246C9.64622 0.696676 10.596 0.696675 11.1818 1.28246L14.7173 4.818ZM12.4951 7.17824C11.9445 6.81114 11.2102 6.26067 10.4746 5.5251C9.73908 4.78953 9.18861 4.05522 8.82151 3.5046C8.73796 3.37928 8.66402 3.26262 8.59916 3.15795L7.49016 4.26695C7.22446 4.53274 7.06823 4.88859 7.05236 5.26408L7.03441 5.68254C7.00619 6.35275 6.70989 6.98353 6.21198 7.43305L2.0529 11.1889C1.74715 11.4649 1.69322 11.8325 1.85057 12.0914C2.05518 12.4273 2.34977 12.835 2.75724 13.2425C3.16471 13.65 3.57246 13.9446 3.90836 14.1492C4.16724 14.3065 4.53486 14.2526 4.81089 13.9469L8.5667 9.78777C9.01619 9.2899 9.64705 8.99359 10.3172 8.96534L10.7357 8.94739C11.1112 8.93151 11.467 8.77531 11.7328 8.50959L12.8418 7.40059C12.7371 7.33573 12.6205 7.26179 12.4951 7.17824ZM7.85338 8.14637C8.04864 8.34163 8.04864 8.65821 7.85338 8.85348L6.85349 9.85337C6.65823 10.0486 6.34164 10.0486 6.14638 9.85337C5.95124 9.6581 5.95116 9.34148 6.14638 9.14626L7.14627 8.14637C7.34149 7.95115 7.65811 7.95123 7.85338 8.14637ZM10.4746 1.98957C10.2794 1.79431 9.9628 1.79431 9.76754 1.98957L9.32836 2.42875C9.40899 2.56608 9.51606 2.74411 9.65291 2.94941C9.99291 3.45941 10.5033 4.13949 11.1818 4.818C11.8603 5.4965 12.5403 6.00684 13.0503 6.34684C13.2556 6.48369 13.4337 6.59076 13.571 6.67139L14.0102 6.23221C14.2054 6.03695 14.2054 5.72036 14.0102 5.5251L10.4746 1.98957Z" fill="currentColor" style={{
        fill: "currentColor",
        fillOpacity: 1
      }} /><path d="M7.75 8.75L7.25 8.25" stroke="currentColor" style={{
        stroke: "currentColor",
        strokeOpacity: 1
      }} strokeLinecap="round" /></g><defs><clipPath id={idPrefix + "clip0_120_2548"}><rect width={16} height={16} fill="white" style={{
          fill: "white",
          fillOpacity: 1
        }} /></clipPath></defs></svg>;
});
export default IconFlashlight;
