import * as React from 'react';
import type { IconProps } from './types';
const IconCursorFill = React.forwardRef<SVGSVGElement, IconProps>(function IconCursorFill(props, ref) {
  const idPrefix = React.useId().replace(/[^a-zA-Z0-9_-]/g, '') + '-';
  const {
    size = 16,
    color,
    title,
    ...svgProps
  } = props;
  return <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...svgProps} ref={ref} width={svgProps["width"] ?? size} height={svgProps["height"] ?? size} color={color} aria-labelledby={svgProps["aria-labelledby"] ?? (title ? idPrefix + "title" : undefined)} aria-label={svgProps["aria-label"] ?? title} role={svgProps["role"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? "img" : undefined)} aria-hidden={svgProps["aria-hidden"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? undefined : true)}>{title ? <title id={idPrefix + "title"}>{title}</title> : null}<path d="M1.69487 3.60374C1.28785 2.42169 2.42056 1.29016 3.6021 1.69749L13.065 4.96018C14.4641 5.44303 14.3926 7.44675 12.9624 7.82834L11.0445 8.33909L13.3521 10.6467C14.0993 11.3943 14.0992 12.6063 13.3521 13.3537C12.6046 14.1008 11.3925 14.1008 10.6451 13.3537L8.33549 11.0442L7.82475 12.9651C7.44263 14.3943 5.44164 14.4658 4.95854 13.0676L1.69487 3.60374Z" fill="currentColor" style={{
      fill: "currentColor",
      fillOpacity: 1
    }} /></svg>;
});
export default IconCursorFill;
