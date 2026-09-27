import * as React from 'react';
import type { IconProps } from './types';
const IconUndoSmall = React.forwardRef<SVGSVGElement, IconProps>(function IconUndoSmall(props, ref) {
  const idPrefix = React.useId().replace(/[^a-zA-Z0-9_-]/g, '') + '-';
  const {
    size = 16,
    color,
    title,
    ...svgProps
  } = props;
  return <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...svgProps} ref={ref} width={svgProps["width"] ?? size} height={svgProps["height"] ?? size} color={color} aria-labelledby={svgProps["aria-labelledby"] ?? (title ? idPrefix + "title" : undefined)} aria-label={svgProps["aria-label"] ?? title} role={svgProps["role"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? "img" : undefined)} aria-hidden={svgProps["aria-hidden"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? undefined : true)}>{title ? <title id={idPrefix + "title"}>{title}</title> : null}<path d="M6.58981 4.34194C6.75256 4.20631 6.99972 4.32159 6.99997 4.53335V6.00014H8.99997C10.6568 6.00014 12 7.34329 12 9.00014C11.9998 10.6569 10.6567 12.0001 8.99997 12.0001H8.49997C8.22396 12.0001 8.0001 11.7761 7.99997 11.5001C7.99997 11.224 8.22388 11.0002 8.49997 11.0001H8.99997C10.1045 11.0001 10.9998 10.1046 11 9.00014C11 7.89557 10.1045 7.00014 8.99997 7.00014H6.99997V8.46596C6.99997 8.67792 6.75264 8.79404 6.58981 8.65835L4.23044 6.69155C4.11077 6.59156 4.11061 6.40764 4.23044 6.30776L6.58981 4.34194Z" fill="currentColor" style={{
      fill: "currentColor",
      fillOpacity: 1
    }} /></svg>;
});
export default IconUndoSmall;
