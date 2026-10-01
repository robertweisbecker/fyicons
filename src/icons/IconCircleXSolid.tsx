import * as React from 'react';
import type { IconProps } from './types';
const IconCircleXSolid = React.forwardRef<SVGSVGElement, IconProps>(function IconCircleXSolid(props, ref) {
  const idPrefix = React.useId().replace(/[^a-zA-Z0-9_-]/g, '') + '-';
  const {
    size = 16,
    color,
    title,
    ...svgProps
  } = props;
  return <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...svgProps} ref={ref} width={svgProps["width"] ?? size} height={svgProps["height"] ?? size} color={color} aria-labelledby={svgProps["aria-labelledby"] ?? (title ? idPrefix + "title" : undefined)} aria-label={svgProps["aria-label"] ?? title} role={svgProps["role"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? "img" : undefined)} aria-hidden={svgProps["aria-hidden"] ?? (title || svgProps["aria-label"] || svgProps["aria-labelledby"] ? undefined : true)}>{title ? <title id={idPrefix + "title"}>{title}</title> : null}<path d="M8 1C11.866 1 15 4.13401 15 8C15 11.866 11.866 15 8 15C4.13401 15 1 11.866 1 8C1 4.13401 4.13401 1 8 1ZM10.8535 5.14648C10.6583 4.95122 10.3417 4.95122 10.1465 5.14648L8 7.29297L5.85352 5.14648C5.65825 4.95122 5.34175 4.95122 5.14648 5.14648C4.95122 5.34175 4.95122 5.65825 5.14648 5.85352L7.29297 8L5.14648 10.1465C4.95122 10.3417 4.95122 10.6583 5.14648 10.8535C5.34175 11.0488 5.65825 11.0488 5.85352 10.8535L8 8.70703L10.1465 10.8535C10.3417 11.0488 10.6583 11.0488 10.8535 10.8535C11.0488 10.6583 11.0488 10.3417 10.8535 10.1465L8.70703 8L10.8535 5.85352C11.0488 5.65825 11.0488 5.34175 10.8535 5.14648Z" fill="currentColor" style={{
      fill: "currentColor",
      fillOpacity: 1
    }} /></svg>;
});
export default IconCircleXSolid;
