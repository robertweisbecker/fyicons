import * as React from 'react';
import type { IconProps } from './types';
const IconArrowsCompress = React.forwardRef<SVGSVGElement, IconProps>(function IconArrowsCompress(props, ref) {
  const idPrefix = React.useId().replace(/[^a-zA-Z0-9_-]/g, '') + '-';
  const {
    size = 16,
    color,
    title,
    ...svgProps
  } = props;
  return <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...svgProps} ref={ref} width={svgProps["width"] ?? size} height={svgProps["height"] ?? size} color={color} aria-labelledby={svgProps["aria-labelledby"] ?? (title ? idPrefix + "title" : undefined)} aria-label={svgProps["aria-label"] ?? title} role={svgProps["role"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? "img" : undefined)} aria-hidden={svgProps["aria-hidden"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? undefined : true)}>{title ? <title id={idPrefix + "title"}>{title}</title> : null}<path d="M6.5 9C6.77612 9.00002 7 9.22387 7 9.5V12.5C6.99998 12.7761 6.77611 13 6.5 13C6.22387 13 6.00002 12.7761 6 12.5V10.707L2.85352 13.8535C2.65827 14.0488 2.34175 14.0487 2.14648 13.8535C1.95122 13.6583 1.95122 13.3417 2.14648 13.1465L5.29297 10H3.5C3.22387 10 3.00002 9.77612 3 9.5C3 9.22386 3.22386 9 3.5 9H6.5ZM13.1465 2.14648C13.3417 1.95122 13.6583 1.95122 13.8535 2.14648C14.0487 2.34175 14.0488 2.65827 13.8535 2.85352L10.707 6H12.5C12.7761 6.00002 13 6.22387 13 6.5C13 6.77611 12.7761 6.99998 12.5 7H9.5C9.22387 7 9.00002 6.77612 9 6.5V3.5C9 3.22386 9.22386 3 9.5 3C9.77612 3.00002 10 3.22387 10 3.5V5.29297L13.1465 2.14648Z" fill="currentColor" style={{
      fill: "currentColor",
      fillOpacity: 1
    }} /></svg>;
});
export default IconArrowsCompress;
