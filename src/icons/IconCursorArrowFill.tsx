import * as React from 'react';
import type { IconProps } from './types';
const IconCursorArrowFill = React.forwardRef<SVGSVGElement, IconProps>(function IconCursorArrowFill(props, ref) {
  const idPrefix = React.useId().replace(/[^a-zA-Z0-9_-]/g, '') + '-';
  const {
    size = 16,
    color,
    title,
    ...svgProps
  } = props;
  return <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...svgProps} ref={ref} width={svgProps["width"] ?? size} height={svgProps["height"] ?? size} color={color} aria-labelledby={svgProps["aria-labelledby"] ?? (title ? idPrefix + "title" : undefined)} aria-label={svgProps["aria-label"] ?? title} role={svgProps["role"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? "img" : undefined)} aria-hidden={svgProps["aria-hidden"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? undefined : true)}>{title ? <title id={idPrefix + "title"}>{title}</title> : null}<path d="M1.93773 3.50065C1.64324 2.54199 2.54157 1.64369 3.50023 1.93815L13.0725 4.88346C14.2073 5.23263 14.2617 6.81858 13.1536 7.24479L8.88597 8.88639L7.24437 13.154C6.81816 14.2621 5.23221 14.2077 4.88304 13.0729L1.93773 3.50065Z" fill="currentColor" style={{
      fill: "currentColor",
      fillOpacity: 1
    }} /></svg>;
});
export default IconCursorArrowFill;
