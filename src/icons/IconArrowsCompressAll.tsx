import * as React from 'react';
import type { IconProps } from './types';
const IconArrowsCompressAll = React.forwardRef<SVGSVGElement, IconProps>(function IconArrowsCompressAll(props, ref) {
  const idPrefix = React.useId().replace(/[^a-zA-Z0-9_-]/g, '') + '-';
  const {
    size = 16,
    color,
    title,
    ...svgProps
  } = props;
  return <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...svgProps} ref={ref} width={svgProps["width"] ?? size} height={svgProps["height"] ?? size} color={color} aria-labelledby={svgProps["aria-labelledby"] ?? (title ? idPrefix + "title" : undefined)} aria-label={svgProps["aria-label"] ?? title} role={svgProps["role"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? "img" : undefined)} aria-hidden={svgProps["aria-hidden"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? undefined : true)}>{title ? <title id={idPrefix + "title"}>{title}</title> : null}<path d="M5.5 10C5.77614 10 6 10.2239 6 10.5V13.5C6 13.7761 5.77614 14 5.5 14C5.22386 14 5 13.7761 5 13.5V11.707L2.85352 13.8535C2.65825 14.0488 2.34175 14.0488 2.14648 13.8535C1.95122 13.6583 1.95122 13.3417 2.14648 13.1465L4.29297 11H2.5C2.22386 11 2 10.7761 2 10.5C2 10.2239 2.22386 10 2.5 10H5.5ZM13.5 10C13.7761 10 14 10.2239 14 10.5C14 10.7761 13.7761 11 13.5 11H11.707L13.8535 13.1465C14.0488 13.3417 14.0488 13.6583 13.8535 13.8535C13.6583 14.0488 13.3417 14.0488 13.1465 13.8535L11 11.707V13.5C11 13.7761 10.7761 14 10.5 14C10.2239 14 10 13.7761 10 13.5V10.5C10 10.2239 10.2239 10 10.5 10H13.5ZM5.5 2C5.77614 2 6 2.22386 6 2.5V5.5C6 5.77614 5.77614 6 5.5 6H2.5C2.22386 6 2 5.77614 2 5.5C2 5.22386 2.22386 5 2.5 5H4.29297L2.14648 2.85352C1.95122 2.65825 1.95122 2.34175 2.14648 2.14648C2.34175 1.95122 2.65825 1.95122 2.85352 2.14648L5 4.29297V2.5C5 2.22386 5.22386 2 5.5 2ZM13.1465 2.14648C13.3417 1.95122 13.6583 1.95122 13.8535 2.14648C14.0488 2.34175 14.0488 2.65825 13.8535 2.85352L11.707 5H13.5C13.7761 5 14 5.22386 14 5.5C14 5.77614 13.7761 6 13.5 6H10.5C10.2239 6 10 5.77614 10 5.5V2.5C10 2.22386 10.2239 2 10.5 2C10.7761 2 11 2.22386 11 2.5V4.29297L13.1465 2.14648Z" fill="currentColor" style={{
      fill: "currentColor",
      fillOpacity: 1
    }} /></svg>;
});
export default IconArrowsCompressAll;
