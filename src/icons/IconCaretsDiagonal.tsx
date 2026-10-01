import * as React from 'react';
import type { IconProps } from './types';
const IconCaretsDiagonal = React.forwardRef<SVGSVGElement, IconProps>(function IconCaretsDiagonal(props, ref) {
  const idPrefix = React.useId().replace(/[^a-zA-Z0-9_-]/g, '') + '-';
  const {
    size = 16,
    color,
    title,
    ...svgProps
  } = props;
  return <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...svgProps} ref={ref} width={svgProps["width"] ?? size} height={svgProps["height"] ?? size} color={color} aria-labelledby={svgProps["aria-labelledby"] ?? (title ? idPrefix + "title" : undefined)} aria-label={svgProps["aria-label"] ?? title} role={svgProps["role"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? "img" : undefined)} aria-hidden={svgProps["aria-hidden"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? undefined : true)}>{title ? <title id={idPrefix + "title"}>{title}</title> : null}<path d="M7.2929 13.0001C7.73835 13.0001 7.96144 12.4615 7.64646 12.1465L3.85356 8.35357C3.53857 8.03858 3 8.26166 3 8.70712V12.5001C3 12.7762 3.22386 13.0001 3.5 13.0001H7.2929ZM13 7.2929C13 7.73835 12.4614 7.96144 12.1464 7.64646L8.35356 3.85362C8.03858 3.53863 8.26166 3.00006 8.70712 3.00006H12.5C12.7761 3.00006 13 3.22392 13 3.50006V7.2929Z" fill="currentColor" style={{
      fill: "currentColor",
      fillOpacity: 1
    }} /></svg>;
});
export default IconCaretsDiagonal;
