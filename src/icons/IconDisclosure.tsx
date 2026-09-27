import * as React from 'react';
import type { IconProps } from './types';
const IconDisclosure = React.forwardRef<SVGSVGElement, IconProps>(function IconDisclosure(props, ref) {
  const idPrefix = React.useId().replace(/[^a-zA-Z0-9_-]/g, '') + '-';
  const {
    size = 16,
    color,
    title,
    ...svgProps
  } = props;
  return <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...svgProps} ref={ref} width={svgProps["width"] ?? size} height={svgProps["height"] ?? size} color={color} aria-labelledby={svgProps["aria-labelledby"] ?? (title ? idPrefix + "title" : undefined)} aria-label={svgProps["aria-label"] ?? title} role={svgProps["role"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? "img" : undefined)} aria-hidden={svgProps["aria-hidden"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? undefined : true)}>{title ? <title id={idPrefix + "title"}>{title}</title> : null}<path d="M10.6464 6.14666C10.8417 5.9514 11.1582 5.9514 11.3534 6.14666C11.5486 6.34193 11.5487 6.65846 11.3534 6.8537L8.35344 9.8537C8.1582 10.0489 7.84165 10.0489 7.64641 9.8537L4.64641 6.8537C4.45117 6.65846 4.45122 6.34193 4.64641 6.14666C4.84167 5.9514 5.15818 5.9514 5.35344 6.14666L7.99992 8.79315L10.6464 6.14666Z" fill="currentColor" style={{
      fill: "currentColor",
      fillOpacity: 1
    }} /></svg>;
});
export default IconDisclosure;
