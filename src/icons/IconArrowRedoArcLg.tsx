import * as React from 'react';
import type { IconProps } from './types';
const IconArrowRedoArcLg = React.forwardRef<SVGSVGElement, IconProps>(function IconArrowRedoArcLg(props, ref) {
  const idPrefix = React.useId().replace(/[^a-zA-Z0-9_-]/g, '') + '-';
  const {
    size = 16,
    color,
    title,
    ...svgProps
  } = props;
  return <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...svgProps} ref={ref} width={svgProps["width"] ?? size} height={svgProps["height"] ?? size} color={color} aria-labelledby={svgProps["aria-labelledby"] ?? (title ? idPrefix + "title" : undefined)} aria-label={svgProps["aria-label"] ?? title} role={svgProps["role"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? "img" : undefined)} aria-hidden={svgProps["aria-hidden"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? undefined : true)}>{title ? <title id={idPrefix + "title"}>{title}</title> : null}<path d="M8 2C11.3136 2.00013 14 4.6864 14 8H15.3965C15.6192 8.00003 15.7307 8.26927 15.5732 8.42676L13.6768 10.3232C13.5791 10.4208 13.4209 10.4208 13.3232 10.3232L11.4268 8.42676C11.2693 8.26927 11.3808 8.00003 11.6035 8H13C13 5.23868 10.7613 3.00013 8 3C5.23871 3.00013 3.00003 5.23868 3 8C3.00003 10.7613 5.23871 12.9999 8 13C8.27601 13.0001 8.49997 13.224 8.5 13.5C8.49997 13.776 8.27601 13.9999 8 14C4.68642 13.9999 2.00003 11.3136 2 8C2.00003 4.6864 4.68642 2.00013 8 2Z" fill="currentColor" style={{
      fill: "currentColor",
      fillOpacity: 1
    }} /></svg>;
});
export default IconArrowRedoArcLg;
