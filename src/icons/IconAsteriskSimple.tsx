import * as React from 'react';
import type { IconProps } from './types';
const IconAsteriskSimple = React.forwardRef<SVGSVGElement, IconProps>(function IconAsteriskSimple(props, ref) {
  const idPrefix = React.useId().replace(/[^a-zA-Z0-9_-]/g, '') + '-';
  const {
    size = 16,
    color,
    title,
    ...svgProps
  } = props;
  return <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...svgProps} ref={ref} width={svgProps["width"] ?? size} height={svgProps["height"] ?? size} color={color} aria-labelledby={svgProps["aria-labelledby"] ?? (title ? idPrefix + "title" : undefined)} aria-label={svgProps["aria-label"] ?? title} role={svgProps["role"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? "img" : undefined)} aria-hidden={svgProps["aria-hidden"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? undefined : true)}>{title ? <title id={idPrefix + "title"}>{title}</title> : null}<path d="M8.00133 1.00098C8.34946 1.00114 8.63057 1.2867 8.62438 1.63477L8.50817 7.89062L14.4203 5.84766C14.7496 5.73381 15.1095 5.91275 15.2172 6.24414C15.3242 6.57503 15.1396 6.93046 14.807 7.03223L8.81969 8.85547L12.5912 13.8467C12.8011 14.1247 12.7422 14.5218 12.4603 14.7266C12.1786 14.9309 11.7829 14.8652 11.5834 14.5801L7.9984 9.4502L4.41832 14.5781C4.2188 14.8638 3.82328 14.9304 3.54137 14.7256C3.25987 14.5208 3.19995 14.1246 3.40953 13.8467L7.18004 8.85254L1.19664 7.03223C0.863295 6.93075 0.677844 6.57456 0.785511 6.24316C0.893238 5.91223 1.25139 5.73339 1.58043 5.84668L7.4945 7.88867L7.37828 1.63574C7.37178 1.28735 7.65288 1.00099 8.00133 1.00098Z" fill="currentColor" style={{
      fill: "currentColor",
      fillOpacity: 1
    }} /></svg>;
});
export default IconAsteriskSimple;
