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
  return <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...svgProps} ref={ref} width={svgProps["width"] ?? size} height={svgProps["height"] ?? size} color={color} aria-labelledby={svgProps["aria-labelledby"] ?? (title ? idPrefix + "title" : undefined)} aria-label={svgProps["aria-label"] ?? title} role={svgProps["role"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? "img" : undefined)} aria-hidden={svgProps["aria-hidden"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? undefined : true)}>{title ? <title id={idPrefix + "title"}>{title}</title> : null}<path d="M6.5 9.00004C6.77612 9.00006 7 9.22391 7 9.50004V12.5C6.99998 12.7762 6.77611 13 6.5 13C6.22387 13 6.00002 12.7762 6 12.5V10.7071L2.85352 13.8536C2.65827 14.0488 2.34175 14.0488 2.14648 13.8536C1.95122 13.6583 1.95122 13.3418 2.14648 13.1465L5.29297 10H3.5C3.22387 10 3.00002 9.77616 3 9.50004C3 9.2239 3.22386 9.00004 3.5 9.00004H6.5ZM13.1465 2.14652C13.3417 1.95126 13.6583 1.95126 13.8535 2.14652C14.0487 2.34179 14.0488 2.6583 13.8535 2.85355L10.707 6.00004H12.5C12.7761 6.00006 13 6.22391 13 6.50004C13 6.77615 12.7761 7.00002 12.5 7.00004H9.5C9.22387 7.00004 9.00002 6.77616 9 6.50004V3.50004C9 3.2239 9.22386 3.00004 9.5 3.00004C9.77612 3.00006 10 3.22391 10 3.50004V5.29301L13.1465 2.14652Z" fill="currentColor" style={{
      fill: "currentColor",
      fillOpacity: 1
    }} /></svg>;
});
export default IconArrowsCompress;
